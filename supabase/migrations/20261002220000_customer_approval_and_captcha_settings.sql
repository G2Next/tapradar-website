-- Customer review workflow and administrator-managed CAPTCHA configuration.
create sequence if not exists public.customer_number_seq start with 1;

alter table public.profiles
  add column if not exists account_type text not null default 'customer';

update public.profiles
set account_type = 'business'
where id in (select user_id from public.organization_members);

alter table public.profiles drop constraint if exists profiles_account_type_check;
alter table public.profiles
  add constraint profiles_account_type_check check (account_type in ('customer', 'business'));

alter table public.customer_profiles
  add column if not exists customer_number text,
  add column if not exists approval_status text not null default 'pending',
  add column if not exists approved_at timestamptz,
  add column if not exists approved_by uuid references auth.users(id) on delete set null,
  add column if not exists rejection_reason text;

update public.customer_profiles
set customer_number = 'TR-K-' || lpad(nextval('public.customer_number_seq')::text, 8, '0')
where customer_number is null;

-- Existing users keep their access. Only registrations after this migration
-- enter the pending review queue.
update public.customer_profiles
set approval_status = 'approved',
    approved_at = coalesce(approved_at, created_at)
where approval_status = 'pending';

alter table public.customer_profiles
  alter column customer_number set default ('TR-K-' || lpad(nextval('public.customer_number_seq')::text, 8, '0')),
  alter column customer_number set not null;

alter table public.customer_profiles drop constraint if exists customer_profiles_approval_status_check;
alter table public.customer_profiles
  add constraint customer_profiles_approval_status_check
  check (approval_status in ('pending', 'approved', 'rejected', 'suspended'));

create unique index if not exists customer_profiles_customer_number_idx
  on public.customer_profiles(customer_number);
create index if not exists customer_profiles_approval_status_idx
  on public.customer_profiles(approval_status, created_at desc);

create table if not exists public.captcha_settings (
  id boolean primary key default true check (id),
  mode text not null default 'v3' check (mode in ('v3', 'v2')),
  v3_site_key text,
  v3_secret_ciphertext text,
  v2_site_key text,
  v2_secret_ciphertext text,
  score_threshold numeric(3,2) not null default 0.50 check (score_threshold between 0 and 1),
  v2_theme text not null default 'light' check (v2_theme in ('light', 'dark')),
  protect_contact boolean not null default true,
  protect_registration boolean not null default true,
  protect_login boolean not null default false,
  log_rejected boolean not null default true,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.captcha_settings(id) values (true) on conflict (id) do nothing;

create table if not exists public.captcha_attempt_logs (
  id uuid primary key default gen_random_uuid(),
  action text not null,
  captcha_version text not null check (captcha_version in ('v2', 'v3')),
  accepted boolean not null default false,
  score numeric(4,3),
  hostname text,
  reason text not null,
  ip_hash text,
  created_at timestamptz not null default now()
);

create index if not exists captcha_attempt_logs_created_at_idx
  on public.captcha_attempt_logs(created_at desc);

drop trigger if exists captcha_settings_set_updated_at on public.captcha_settings;
create trigger captcha_settings_set_updated_at before update on public.captcha_settings
for each row execute function public.set_updated_at();

alter table public.captcha_settings enable row level security;
alter table public.captcha_attempt_logs enable row level security;
revoke all on public.captcha_settings, public.captcha_attempt_logs from anon, authenticated;
grant select, update on public.captcha_settings to authenticated;
grant select on public.captcha_attempt_logs to authenticated;
grant all on public.captcha_settings, public.captcha_attempt_logs to service_role;

create policy "Platform admins manage CAPTCHA settings" on public.captcha_settings
for all to authenticated using (public.is_platform_admin()) with check (public.is_platform_admin());
create policy "Platform admins read CAPTCHA logs" on public.captcha_attempt_logs
for select to authenticated using (public.is_platform_admin());

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  selected_account_type text := case
    when new.raw_user_meta_data->>'account_type' = 'business' then 'business'
    else 'customer'
  end;
begin
  insert into public.profiles (id, email, full_name, account_type)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', ''), selected_account_type)
  on conflict (id) do update
  set email = excluded.email,
      account_type = excluded.account_type;

  if selected_account_type = 'customer' then
    insert into public.customer_profiles (user_id, display_name)
    values (new.id, nullif(new.raw_user_meta_data->>'full_name', ''))
    on conflict (user_id) do nothing;
  end if;
  return new;
end;
$$;

-- Keep the award RPC as the enforcement point for web and mobile clients.
create or replace function public.award_stamp(device_token text, request_key uuid)
returns jsonb language plpgsql security definer set search_path = public as $$
declare customer_id uuid := auth.uid(); selected_device public.stamp_devices%rowtype;
  selected_card public.loyalty_cards%rowtype; wallet public.customer_loyalty_cards%rowtype;
  next_balance integer; reward_id uuid;
begin
  if customer_id is null then raise exception 'Authentication required'; end if;
  if not exists (
    select 1 from public.customer_profiles
    where user_id = customer_id and is_active and approval_status = 'approved'
  ) then raise exception 'Customer account is not approved'; end if;
  if exists (select 1 from public.stamp_events where idempotency_key = request_key and user_id = customer_id) then return jsonb_build_object('status', 'already_processed'); end if;
  select * into selected_device from public.stamp_devices
    where token_hash = encode(extensions.digest(device_token, 'sha256'), 'hex') and is_active for update;
  if not found then raise exception 'Invalid stamp device'; end if;
  select * into selected_card from public.loyalty_cards
    where organization_id = selected_device.organization_id and is_active
      and (location_id is null or location_id = selected_device.location_id)
    order by (location_id is not null) desc, created_at asc limit 1;
  if not found then raise exception 'No active loyalty card'; end if;
  if exists (select 1 from public.stamp_events where user_id = customer_id and device_id = selected_device.id and event_type = 'award' and created_at > now() - interval '30 seconds') then raise exception 'Please wait before collecting another stamp'; end if;
  insert into public.customer_loyalty_cards (user_id, loyalty_card_id) values (customer_id, selected_card.id)
    on conflict (user_id, loyalty_card_id) do update set updated_at = now() returning * into wallet;
  next_balance := wallet.stamps_balance + 1;
  if next_balance >= selected_card.stamps_required then
    next_balance := 0;
    insert into public.reward_entitlements (user_id, organization_id, location_id, loyalty_card_id, customer_card_id, reward_title, redemption_code, expires_at)
    values (customer_id, selected_card.organization_id, selected_device.location_id, selected_card.id, wallet.id,
      selected_card.reward_title, upper(substr(encode(extensions.gen_random_bytes(8), 'hex'), 1, 12)), now() + interval '180 days') returning id into reward_id;
  end if;
  update public.customer_loyalty_cards set stamps_balance = next_balance, lifetime_stamps = lifetime_stamps + 1 where id = wallet.id;
  insert into public.stamp_events (customer_card_id, user_id, organization_id, location_id, loyalty_card_id, device_id, event_type, amount, idempotency_key)
    values (wallet.id, customer_id, selected_card.organization_id, selected_device.location_id, selected_card.id, selected_device.id, 'award', 1, request_key);
  update public.stamp_devices set last_used_at = now() where id = selected_device.id;
  return jsonb_build_object('status', 'awarded', 'stamps_balance', next_balance, 'stamps_required', selected_card.stamps_required, 'reward_created', reward_id is not null);
end;
$$;

revoke all on function public.handle_new_user() from public, anon, authenticated;
grant execute on function public.handle_new_user() to service_role;
revoke all on function public.award_stamp(text, uuid) from public, anon;
grant execute on function public.award_stamp(text, uuid) to authenticated, service_role;
