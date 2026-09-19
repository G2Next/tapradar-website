-- Central transactional templates; public/customer/merchant access is denied by RLS.
create table public.email_templates (
  event_id text not null,
  locale text not null check (locale in ('de', 'en')),
  subject text not null check (char_length(subject) between 1 and 200 and subject !~ E'[\r\n]'),
  body text not null check (char_length(body) between 1 and 20000),
  enabled boolean not null default true,
  revision integer not null default 1,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null,
  primary key (event_id, locale)
);
create table public.email_settings (
  id boolean primary key default true check (id),
  test_mode boolean not null default true,
  test_recipient text check (test_recipient is null or test_recipient ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null
);
insert into public.email_settings(id) values (true);
alter table public.email_templates enable row level security;
alter table public.email_settings enable row level security;
revoke all on public.email_templates, public.email_settings from anon, authenticated;
grant select, update on public.email_templates, public.email_settings to authenticated;
grant all on public.email_templates, public.email_settings to service_role;
create policy "Only platform admins manage email templates" on public.email_templates for all to authenticated
  using (public.is_platform_admin()) with check (public.is_platform_admin());
create policy "Only platform admins manage email settings" on public.email_settings for all to authenticated
  using (public.is_platform_admin()) with check (public.is_platform_admin());

create function public.version_email_template() returns trigger language plpgsql set search_path = public as $$
begin
  new.revision := old.revision + 1;
  new.updated_at := now();
  new.updated_by := auth.uid();
  return new;
end;
$$;
create trigger email_templates_version before update on public.email_templates for each row execute function public.version_email_template();
create trigger email_settings_updated_at before update on public.email_settings for each row execute function public.set_updated_at();

alter table public.contact_messages add column locale text not null default 'en' check (locale in ('de', 'en'));
alter table public.notification_outbox
  add column locale text check (locale in ('de', 'en')),
  add column event_key text unique,
  add column force_test boolean not null default false,
  add column delivery_snapshot jsonb,
  add column provider_message_id text;
-- Existing unsent messages also stay test-only until explicitly reviewed.
update public.notification_outbox set force_test = true where status <> 'sent';
alter table public.notification_outbox drop constraint notification_outbox_template_check;
alter table public.notification_outbox add constraint notification_outbox_template_check check (template in (
  'team_invitation','review_submitted','organization_approved','organization_rejected','privacy_request','contact_reply',
  'contact_form_sent','business_registered','customer_registered','purchase_completed','offer_created','push_created'
));

create function public.resolve_email_locale(target_email text, target_user uuid default null, target_organization uuid default null)
returns text language plpgsql stable security definer set search_path = public as $$
declare preferred text; owner_id uuid;
begin
  -- Resolve by the actual recipient, never by the administrator who triggered an email.
  select coalesce(nullif(u.raw_user_meta_data->>'locale',''), nullif(u.raw_user_meta_data->>'language',''), nullif(u.raw_user_meta_data->>'preferred_language',''))
    into preferred from auth.users u where lower(u.email) = lower(trim(target_email))
    order by (u.id = target_user) desc nulls last, u.created_at limit 1;
  if preferred is null and target_organization is not null and exists (
    select 1 from public.organizations where id = target_organization and lower(billing_email) = lower(trim(target_email))
  ) then
    select user_id into owner_id from public.organization_members
      where organization_id = target_organization and role = 'owner' and is_active order by created_at limit 1;
    select coalesce(nullif(raw_user_meta_data->>'locale',''), nullif(raw_user_meta_data->>'language',''), nullif(raw_user_meta_data->>'preferred_language',''))
      into preferred from auth.users where id = owner_id;
  end if;
  return case when trim(preferred) ~* '^de([-_]|$)' then 'de' else 'en' end;
end;
$$;
revoke all on function public.resolve_email_locale(text, uuid, uuid) from public, anon, authenticated;
grant execute on function public.resolve_email_locale(text, uuid, uuid) to service_role;

create function public.prepare_email_notification() returns trigger language plpgsql security definer set search_path = public as $$
begin
  new.locale := coalesce(new.locale, public.resolve_email_locale(new.recipient_email, new.user_id, new.organization_id));
  new.force_test := new.force_test or coalesce((select test_mode from public.email_settings where id), true);
  return new;
end;
$$;
create trigger notification_email_defaults before insert on public.notification_outbox for each row execute function public.prepare_email_notification();

-- Atomic outbox events cover both website and app writes. A stable event_key avoids
-- duplicate payment receipts on webhook retries or repeated paid-state transitions.
create function public.queue_transactional_email() returns trigger language plpgsql security definer set search_path = public as $$
declare
  event_name text; event_id text; org_id uuid; recipient text; recipient_user uuid;
  org_name text; selected_locale text; values_json jsonb := '{}'::jsonb;
begin
  if tg_table_name = 'contact_messages' then
    event_name := 'contact_form_sent'; event_id := new.id::text; recipient := new.email; selected_locale := new.locale;
    values_json := jsonb_build_object('name',new.name,'subject',new.subject);
  elsif tg_table_name = 'organization_members' then
    if new.role <> 'owner' or not new.is_active then return new; end if;
    event_name := 'business_registered'; event_id := new.organization_id::text; org_id := new.organization_id;
  elsif tg_table_name = 'customer_profiles' then
    if exists (select 1 from auth.users where id = new.user_id and raw_user_meta_data->>'account_type' = 'business') then return new; end if;
    event_name := 'customer_registered'; event_id := new.user_id::text; recipient_user := new.user_id;
    select email into recipient from auth.users where id = recipient_user;
    values_json := jsonb_build_object('name',coalesce(nullif(new.display_name,''),'TapRadar')); 
  elsif tg_table_name = 'offers' then
    event_name := 'offer_created'; event_id := new.id::text; org_id := new.organization_id;
    values_json := jsonb_build_object('title',new.title);
  elsif tg_table_name = 'push_messages' then
    event_name := 'push_created'; event_id := new.id::text; org_id := new.business_id;
    values_json := jsonb_build_object('title',new.title);
  elsif tg_table_name = 'billing_invoices' then
    if new.status <> 'paid' then return new; end if;
    if tg_op = 'UPDATE' then
      if old.status = 'paid' then return new; end if;
    end if;
    event_name := 'purchase_completed'; event_id := new.id; org_id := new.organization_id;
    values_json := jsonb_build_object('invoice_number',coalesce(new.invoice_number,new.id),
      'betrag',to_char(new.total_amount / 100.0,'FM999999999990.00') || ' ' || upper(new.currency),
      'datum',to_char(coalesce(new.paid_at,now()) at time zone 'Europe/Vienna','YYYY-MM-DD'));
  else return new;
  end if;
  if org_id is not null then
    select name, nullif(trim(billing_email),'') into org_name, recipient from public.organizations where id = org_id;
    select user_id into recipient_user from public.organization_members
      where organization_id = org_id and role = 'owner' and is_active order by created_at limit 1;
    if recipient is null then select email into recipient from auth.users where id = recipient_user; end if;
    values_json := values_json || jsonb_build_object('organization_name',coalesce(org_name,'TapRadar'));
  end if;
  if recipient is null or trim(recipient) = '' then
    insert into public.system_events(severity,source,message,organization_id,metadata)
    values ('warning','email-events','Transactional event has no recipient',org_id,jsonb_build_object('event',event_name,'entity_id',event_id));
    return new;
  end if;
  insert into public.notification_outbox(organization_id,user_id,recipient_email,template,payload,locale,event_key)
  values (org_id,recipient_user,lower(trim(recipient)),event_name,values_json,selected_locale,event_name || ':' || event_id)
  on conflict (event_key) do nothing;
  return new;
end;
$$;
revoke all on function public.queue_transactional_email() from public, anon, authenticated;
revoke all on function public.prepare_email_notification() from public, anon, authenticated;
create trigger contact_email_event after insert on public.contact_messages for each row execute function public.queue_transactional_email();
create trigger business_email_event after insert on public.organization_members for each row execute function public.queue_transactional_email();
create trigger customer_email_event after insert on public.customer_profiles for each row execute function public.queue_transactional_email();
create trigger offer_email_event after insert on public.offers for each row execute function public.queue_transactional_email();
create trigger push_email_event after insert on public.push_messages for each row execute function public.queue_transactional_email();
create trigger purchase_email_event after insert or update on public.billing_invoices for each row execute function public.queue_transactional_email();

-- Initial editable DE/EN templates.
insert into public.email_templates(event_id,locale,subject,body)
select event_id,locale,subject,body from jsonb_to_recordset($templates$[{"event_id": "contact_form_sent", "locale": "de", "subject": "Deine Nachricht an TapRadar", "body": "Hallo {{name}},\n\nvielen Dank für deine Nachricht zum Thema „{{subject}}“. Wir haben deine Anfrage erhalten und melden uns bei dir.\n\nDein TapRadar-Team"}, {"event_id": "contact_form_sent", "locale": "en", "subject": "Your message to TapRadar", "body": "Hello {{name}},\n\nThank you for your message about “{{subject}}”. We have received your enquiry and will get back to you.\n\nYour TapRadar team"}, {"event_id": "business_registered", "locale": "de", "subject": "Willkommen bei TapRadar, {{organization_name}}", "body": "Dein Geschäft {{organization_name}} wurde registriert. Vervollständige die Einrichtung im Geschäftsbereich, um es zur Prüfung einzureichen."}, {"event_id": "business_registered", "locale": "en", "subject": "Welcome to TapRadar, {{organization_name}}", "body": "Your business {{organization_name}} has been registered. Complete the setup in your dashboard to submit it for review."}, {"event_id": "customer_registered", "locale": "de", "subject": "Willkommen bei TapRadar", "body": "Hallo {{name}},\n\ndein Kundenprofil bei TapRadar ist eingerichtet. Entdecke lokale Geschäfte und sammle digitale Stempel."}, {"event_id": "customer_registered", "locale": "en", "subject": "Welcome to TapRadar", "body": "Hello {{name}},\n\nYour TapRadar customer profile is ready. Discover local businesses and collect digital stamps."}, {"event_id": "purchase_completed", "locale": "de", "subject": "Zahlung erhalten: {{invoice_number}}", "body": "Hallo {{organization_name}},\n\nwir haben deine Zahlung von {{betrag}} am {{datum}} erhalten. Die Rechnung {{invoice_number}} findest du im Geschäftsbereich unter Tarif & Rechnungen."}, {"event_id": "purchase_completed", "locale": "en", "subject": "Payment received: {{invoice_number}}", "body": "Hello {{organization_name}},\n\nWe received your payment of {{betrag}} on {{datum}}. You can find invoice {{invoice_number}} under Plan & invoices in your dashboard."}, {"event_id": "offer_created", "locale": "de", "subject": "Angebot erstellt: {{title}}", "body": "Hallo {{organization_name}},\n\ndein Angebot „{{title}}“ wurde gespeichert. Den aktuellen Freigabestatus siehst du im Geschäftsbereich."}, {"event_id": "offer_created", "locale": "en", "subject": "Offer created: {{title}}", "body": "Hello {{organization_name}},\n\nYour offer “{{title}}” has been saved. Check its approval status in your dashboard."}, {"event_id": "push_created", "locale": "de", "subject": "Push-Nachricht erstellt: {{title}}", "body": "Hallo {{organization_name}},\n\ndeine Push-Nachricht „{{title}}“ wurde gespeichert. Den Freigabe- und Versandstatus siehst du im Geschäftsbereich."}, {"event_id": "push_created", "locale": "en", "subject": "Push message created: {{title}}", "body": "Hello {{organization_name}},\n\nYour push message “{{title}}” has been saved. Check its approval and delivery status in your dashboard."}, {"event_id": "team_invitation", "locale": "de", "subject": "Einladung zu {{organization_name}}", "body": "Du wurdest zum TapRadar-Team von {{organization_name}} eingeladen.\n\nEinladung annehmen: {{link}}"}, {"event_id": "team_invitation", "locale": "en", "subject": "Invitation to {{organization_name}}", "body": "You have been invited to the TapRadar team of {{organization_name}}.\n\nAccept the invitation: {{link}}"}, {"event_id": "review_submitted", "locale": "de", "subject": "{{organization_name}} wurde zur Prüfung eingereicht", "body": "{{organization_name}} wurde erfolgreich zur TapRadar-Prüfung eingereicht. Wir informieren dich über das Ergebnis."}, {"event_id": "review_submitted", "locale": "en", "subject": "{{organization_name}} has been submitted for review", "body": "{{organization_name}} has been submitted for TapRadar review. We will let you know the result."}, {"event_id": "organization_approved", "locale": "de", "subject": "{{organization_name}} ist jetzt auf TapRadar veröffentlicht", "body": "{{organization_name}} wurde freigegeben und ist jetzt in der App sichtbar."}, {"event_id": "organization_approved", "locale": "en", "subject": "{{organization_name}} is now published on TapRadar", "body": "{{organization_name}} has been approved and is now visible in the app."}, {"event_id": "organization_rejected", "locale": "de", "subject": "Rückfrage zu {{organization_name}}", "body": "Bitte überarbeite die Angaben für {{organization_name}}.\n\nBegründung: {{reason}}"}, {"event_id": "organization_rejected", "locale": "en", "subject": "Changes needed for {{organization_name}}", "body": "Please update the details for {{organization_name}}.\n\nReason: {{reason}}"}, {"event_id": "privacy_request", "locale": "de", "subject": "Deine Datenschutzanfrage bei TapRadar", "body": "Wir haben deine Datenschutzanfrage erhalten und bearbeiten sie entsprechend der gesetzlichen Fristen."}, {"event_id": "privacy_request", "locale": "en", "subject": "Your privacy request at TapRadar", "body": "We have received your privacy request and will process it within the applicable statutory deadlines."}, {"event_id": "contact_reply", "locale": "de", "subject": "Antwort von TapRadar: {{subject}}", "body": "Vielen Dank für deine Nachricht.\n\n{{response}}"}, {"event_id": "contact_reply", "locale": "en", "subject": "Reply from TapRadar: {{subject}}", "body": "Thank you for your message.\n\n{{response}}"}]$templates$::jsonb) as t(event_id text,locale text,subject text,body text);
