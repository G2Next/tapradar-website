-- Canonical multi-tenant model. PostgreSQL keeps foreign keys and policy
-- dependencies intact while the existing production data is renamed in place.
alter table public.businesses rename to organizations;
alter table public.business_members rename to organization_members;
alter table public.business_offers rename to offers;
alter table public.business_invitations rename to organization_invitations;
alter table public.business_assets rename to organization_assets;

alter table public.organization_members rename column business_id to organization_id;
alter table public.locations rename column business_id to organization_id;
alter table public.loyalty_cards rename column business_id to organization_id;
alter table public.offers rename column business_id to organization_id;
alter table public.stamp_devices rename column business_id to organization_id;
alter table public.stamp_events rename column business_id to organization_id;
alter table public.reward_entitlements rename column business_id to organization_id;
alter table public.reward_redemptions rename column business_id to organization_id;
alter table public.organization_invitations rename column business_id to organization_id;
alter table public.subscriptions rename column business_id to organization_id;
alter table public.organization_assets rename column business_id to organization_id;
alter table public.audit_logs rename column business_id to organization_id;

-- The former all-in-one RPC cannot represent the resumable onboarding flow.
drop function if exists public.create_business_with_owner(text, text, text, text, text, text, text);

alter table public.organizations
  add column if not exists legal_name text,
  add column if not exists registration_number text,
  add column if not exists tax_id text,
  add column if not exists billing_email text,
  add column if not exists onboarding_status text not null default 'organization'
    check (onboarding_status in ('organization', 'location', 'loyalty', 'plan', 'payment', 'review', 'approved', 'rejected')),
  add column if not exists submitted_at timestamptz,
  add column if not exists approved_at timestamptz,
  add column if not exists rejected_at timestamptz,
  add column if not exists rejection_reason text;

update public.organizations
set legal_name = coalesce(legal_name, name),
    billing_email = coalesce(billing_email, ''),
    onboarding_status = case when public_status = 'open' then 'approved' else onboarding_status end,
    approved_at = case when public_status = 'open' then coalesce(approved_at, updated_at) else approved_at end;

alter table public.locations
  add column if not exists email text,
  add column if not exists country_code text not null default 'AT' check (country_code ~ '^[A-Z]{2}$'),
  add column if not exists timezone text not null default 'Europe/Vienna';

alter table public.locations add constraint locations_id_organization_unique unique (id, organization_id);

alter table public.loyalty_cards add constraint loyalty_cards_location_organization_fk
  foreign key (location_id, organization_id) references public.locations(id, organization_id) on delete cascade;
alter table public.offers add constraint offers_location_organization_fk
  foreign key (location_id, organization_id) references public.locations(id, organization_id) on delete cascade;
alter table public.stamp_devices add constraint stamp_devices_location_organization_fk
  foreign key (location_id, organization_id) references public.locations(id, organization_id) on delete cascade;
alter table public.stamp_events add constraint stamp_events_location_organization_fk
  foreign key (location_id, organization_id) references public.locations(id, organization_id) on delete restrict;
alter table public.reward_entitlements add constraint rewards_location_organization_fk
  foreign key (location_id, organization_id) references public.locations(id, organization_id) on delete cascade;
alter table public.reward_redemptions add constraint redemptions_location_organization_fk
  foreign key (location_id, organization_id) references public.locations(id, organization_id) on delete restrict;
alter table public.organization_assets add constraint assets_location_organization_fk
  foreign key (location_id, organization_id) references public.locations(id, organization_id) on delete cascade;

create table public.location_members (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  location_id uuid not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'staff' check (role in ('manager', 'staff')),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  unique (location_id, user_id),
  foreign key (location_id, organization_id)
    references public.locations(id, organization_id) on delete cascade
);

create index location_members_organization_user_idx
  on public.location_members (organization_id, user_id) where is_active = true;

alter table public.organization_invitations
  add column if not exists location_ids uuid[] not null default '{}';

create or replace function public.current_organization_role(target_organization_id uuid)
returns text language sql stable security definer set search_path = public as $$
  select om.role from public.organization_members om
  where om.organization_id = target_organization_id
    and om.user_id = auth.uid() and om.is_active = true limit 1;
$$;

-- Kept as a small compatibility wrapper for older clients during rollout.
create or replace function public.current_business_role(target_business_id uuid)
returns text language sql stable security definer set search_path = public as $$
  select public.current_organization_role(target_business_id);
$$;

create or replace function public.can_access_location(target_location_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.locations l
    join public.organization_members om
      on om.organization_id = l.organization_id
      and om.user_id = auth.uid() and om.is_active = true
    where l.id = target_location_id and l.is_active = true
      and (
        om.role in ('owner', 'manager')
        or exists (
          select 1 from public.location_members lm
          where lm.location_id = l.id and lm.user_id = auth.uid() and lm.is_active = true
        )
      )
  ) or public.is_platform_admin();
$$;

create or replace function public.customer_owns_business(target_business_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.customer_loyalty_cards cc
    join public.loyalty_cards lc on lc.id = cc.loyalty_card_id
    where cc.user_id = auth.uid() and lc.organization_id = target_business_id
  );
$$;

create or replace function public.customer_owns_location(target_location_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.customer_loyalty_cards cc
    join public.loyalty_cards lc on lc.id = cc.loyalty_card_id
    where cc.user_id = auth.uid()
      and (lc.location_id = target_location_id or (
        lc.location_id is null and lc.organization_id = (
          select organization_id from public.locations where id = target_location_id
        )
      ))
  );
$$;

create or replace function public.business_can_read_loyalty_customers(target_card_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.loyalty_cards lc
    join public.organization_members om on om.organization_id = lc.organization_id
    where lc.id = target_card_id and om.user_id = auth.uid() and om.is_active = true
  );
$$;

create or replace function public.protect_business_controlled_fields()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if coalesce(auth.role(), '') <> 'service_role'
     and not public.is_platform_admin()
     and coalesce(current_setting('tapradar.onboarding_write', true), '') <> '1' then
    new.plan := old.plan;
    new.is_active := old.is_active;
    new.public_status := old.public_status;
    new.onboarding_status := old.onboarding_status;
    new.submitted_at := old.submitted_at;
    new.approved_at := old.approved_at;
    new.rejected_at := old.rejected_at;
    new.rejection_reason := old.rejection_reason;
  end if;
  if new.public_status = 'open' and not exists (
    select 1 from public.locations l where l.organization_id = new.id
      and l.is_active = true and l.public_status in ('open', 'closed')
  ) then raise exception 'At least one visible location is required before publishing an organization';
  end if;
  return new;
end;
$$;

create or replace function public.create_organization_with_owner(
  organization_name text, organization_slug text, organization_category text,
  organization_legal_name text, organization_registration_number text,
  organization_tax_id text, organization_billing_email text
) returns uuid language plpgsql security definer set search_path = public as $$
declare owner_id uuid := auth.uid(); new_organization_id uuid;
begin
  if owner_id is null then raise exception 'Authentication required'; end if;
  if (select email_confirmed_at is null from auth.users where id = owner_id) then
    raise exception 'Email confirmation required';
  end if;
  if length(trim(organization_name)) < 2 or length(trim(organization_billing_email)) < 5 then
    raise exception 'Required fields are missing';
  end if;
  insert into public.organizations (
    name, legal_name, slug, category, registration_number, tax_id, billing_email,
    public_status, is_active, onboarding_status
  ) values (
    trim(organization_name), coalesce(nullif(trim(organization_legal_name), ''), trim(organization_name)),
    trim(organization_slug), trim(organization_category), nullif(trim(organization_registration_number), ''),
    nullif(trim(organization_tax_id), ''), lower(trim(organization_billing_email)),
    'hidden', true, 'location'
  ) returning id into new_organization_id;
  insert into public.organization_members (organization_id, user_id, role)
    values (new_organization_id, owner_id, 'owner');
  insert into public.subscriptions (organization_id, plan, status)
    values (new_organization_id, 'bronze', 'incomplete');
  insert into public.audit_logs (actor_user_id, organization_id, action, entity_type, entity_id)
    values (owner_id, new_organization_id, 'organization.created', 'organization', new_organization_id::text);
  return new_organization_id;
end;
$$;

create or replace function public.create_initial_location(
  target_organization_id uuid, location_name text, location_slug text,
  location_address text, location_postal_code text, location_city text,
  location_phone text, location_email text, location_latitude double precision,
  location_longitude double precision, location_opening_hours jsonb
) returns uuid language plpgsql security definer set search_path = public as $$
declare new_location_id uuid;
begin
  if public.current_organization_role(target_organization_id) <> 'owner' then raise exception 'Permission denied'; end if;
  if exists (select 1 from public.locations where organization_id = target_organization_id) then raise exception 'Initial location already exists'; end if;
  if length(trim(location_address)) < 3 or length(trim(location_city)) < 2
     or location_latitude not between -90 and 90 or location_longitude not between -180 and 180
     or location_opening_hours = '{}'::jsonb then raise exception 'Location is incomplete'; end if;
  perform set_config('tapradar.onboarding_write', '1', true);
  insert into public.locations (
    organization_id, name, slug, address, postal_code, city, phone, email,
    latitude, longitude, opening_hours, public_status, is_primary
  ) values (
    target_organization_id, trim(location_name), trim(location_slug), trim(location_address),
    trim(location_postal_code), trim(location_city), nullif(trim(location_phone), ''),
    nullif(lower(trim(location_email)), ''), location_latitude, location_longitude,
    location_opening_hours, 'draft', true
  ) returning id into new_location_id;
  update public.organizations set onboarding_status = 'loyalty' where id = target_organization_id;
  return new_location_id;
end;
$$;

create or replace function public.configure_initial_loyalty_card(
  target_organization_id uuid, target_location_id uuid, card_title text,
  card_reward_title text, card_stamps_required integer, applies_to_all_locations boolean
) returns uuid language plpgsql security definer set search_path = public as $$
declare new_card_id uuid;
begin
  if public.current_organization_role(target_organization_id) <> 'owner' then raise exception 'Permission denied'; end if;
  if not exists (select 1 from public.locations where id = target_location_id and organization_id = target_organization_id) then raise exception 'Invalid location'; end if;
  if card_stamps_required not between 1 and 50 then raise exception 'Invalid stamp requirement'; end if;
  perform set_config('tapradar.onboarding_write', '1', true);
  insert into public.loyalty_cards (organization_id, location_id, title, reward_title, stamps_required, is_active)
  values (target_organization_id, case when applies_to_all_locations then null else target_location_id end,
    trim(card_title), trim(card_reward_title), card_stamps_required, true)
  returning id into new_card_id;
  update public.organizations set onboarding_status = 'plan' where id = target_organization_id;
  return new_card_id;
end;
$$;

create or replace function public.select_subscription_plan(target_organization_id uuid, selected_plan text)
returns void language plpgsql security definer set search_path = public as $$
begin
  if public.current_organization_role(target_organization_id) <> 'owner' then raise exception 'Permission denied'; end if;
  if selected_plan not in ('bronze', 'gold', 'platinum') then raise exception 'Invalid plan'; end if;
  perform set_config('tapradar.onboarding_write', '1', true);
  update public.subscriptions set plan = selected_plan where organization_id = target_organization_id;
  update public.organizations set onboarding_status = 'payment' where id = target_organization_id;
end;
$$;

create or replace function public.submit_organization_for_review(target_organization_id uuid)
returns void language plpgsql security definer set search_path = public as $$
begin
  if public.current_organization_role(target_organization_id) <> 'owner' then raise exception 'Permission denied'; end if;
  if not exists (select 1 from auth.users where id = auth.uid() and email_confirmed_at is not null) then raise exception 'Email confirmation required'; end if;
  if not exists (
    select 1 from public.locations where organization_id = target_organization_id and is_active
      and address is not null and city is not null and latitude is not null and longitude is not null
      and opening_hours <> '{}'::jsonb
  ) then raise exception 'A complete location is required'; end if;
  if not exists (select 1 from public.loyalty_cards where organization_id = target_organization_id and is_active) then raise exception 'An active loyalty card is required'; end if;
  if not exists (select 1 from public.subscriptions where organization_id = target_organization_id and status in ('active', 'trialing')) then raise exception 'An active subscription is required'; end if;
  perform set_config('tapradar.onboarding_write', '1', true);
  update public.organizations set onboarding_status = 'review', submitted_at = now(),
    rejected_at = null, rejection_reason = null where id = target_organization_id;
  insert into public.audit_logs (actor_user_id, organization_id, action, entity_type, entity_id)
    values (auth.uid(), target_organization_id, 'organization.submitted', 'organization', target_organization_id::text);
end;
$$;

create or replace function public.accept_business_invitation(invitation_token text)
returns uuid language plpgsql security definer set search_path = public as $$
declare current_user_id uuid := auth.uid(); current_email text; invitation public.organization_invitations%rowtype; assigned_location uuid;
begin
  if current_user_id is null then raise exception 'Authentication required'; end if;
  select lower(email) into current_email from auth.users where id = current_user_id;
  select * into invitation from public.organization_invitations
    where token_hash = encode(extensions.digest(invitation_token, 'sha256'), 'hex') for update;
  if not found or invitation.status <> 'pending' or invitation.expires_at < now() then raise exception 'Invitation is invalid'; end if;
  if lower(invitation.email) <> current_email then raise exception 'Invitation belongs to another email'; end if;
  insert into public.organization_members (organization_id, user_id, role, is_active)
    values (invitation.organization_id, current_user_id, invitation.role, true)
    on conflict (organization_id, user_id) do update set role = excluded.role, is_active = true;
  foreach assigned_location in array invitation.location_ids loop
    insert into public.location_members (organization_id, location_id, user_id, role)
      select invitation.organization_id, l.id, current_user_id, invitation.role
      from public.locations l where l.id = assigned_location and l.organization_id = invitation.organization_id
      on conflict (location_id, user_id) do update set role = excluded.role, is_active = true;
  end loop;
  update public.organization_invitations set status = 'accepted', accepted_at = now() where id = invitation.id;
  return invitation.organization_id;
end;
$$;

-- Stamp and redemption functions are recreated because PL/pgSQL bodies store
-- column references as text and therefore do not follow column renames.
create or replace function public.award_stamp(device_token text, request_key uuid)
returns jsonb language plpgsql security definer set search_path = public as $$
declare customer_id uuid := auth.uid(); selected_device public.stamp_devices%rowtype;
  selected_card public.loyalty_cards%rowtype; wallet public.customer_loyalty_cards%rowtype;
  next_balance integer; reward_id uuid;
begin
  if customer_id is null then raise exception 'Authentication required'; end if;
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
  insert into public.customer_profiles (user_id) values (customer_id) on conflict (user_id) do nothing;
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

create or replace function public.redeem_reward(reward_code text, target_location_id uuid)
returns jsonb language plpgsql security definer set search_path = public as $$
declare staff_id uuid := auth.uid(); reward public.reward_entitlements%rowtype;
begin
  select * into reward from public.reward_entitlements where redemption_code = upper(trim(reward_code)) for update;
  if not found or reward.status <> 'available' then raise exception 'Reward is not available'; end if;
  if reward.expires_at is not null and reward.expires_at < now() then update public.reward_entitlements set status = 'expired' where id = reward.id; raise exception 'Reward has expired'; end if;
  if target_location_id <> reward.location_id or not public.can_access_location(target_location_id) then raise exception 'Permission denied'; end if;
  update public.reward_entitlements set status = 'redeemed', redeemed_at = now() where id = reward.id;
  insert into public.reward_redemptions (entitlement_id, organization_id, location_id, redeemed_by) values (reward.id, reward.organization_id, target_location_id, staff_id);
  insert into public.audit_logs (actor_user_id, organization_id, action, entity_type, entity_id) values (staff_id, reward.organization_id, 'reward.redeemed', 'reward', reward.id::text);
  return jsonb_build_object('status', 'redeemed', 'reward_title', reward.reward_title);
end;
$$;

alter table public.location_members enable row level security;
create policy "Members can read permitted location memberships" on public.location_members for select to authenticated
  using (user_id = auth.uid() or public.current_organization_role(organization_id) in ('owner', 'manager') or public.is_platform_admin());
create policy "Organization managers can manage location memberships" on public.location_members for all to authenticated
  using (public.current_organization_role(organization_id) in ('owner', 'manager') or public.is_platform_admin())
  with check (public.current_organization_role(organization_id) in ('owner', 'manager') or public.is_platform_admin());

create policy "Assigned organization members can read locations" on public.locations for select to authenticated
  using (public.can_access_location(id));
create policy "Assigned staff can read devices" on public.stamp_devices for select to authenticated
  using (public.can_access_location(location_id));

drop policy if exists "Customers can read own stamp events" on public.stamp_events;
create policy "Customers and assigned staff can read stamp events" on public.stamp_events for select to authenticated
  using (user_id = auth.uid() or public.can_access_location(location_id) or public.is_platform_admin());
drop policy if exists "Customers can read own rewards" on public.reward_entitlements;
create policy "Customers and assigned staff can read rewards" on public.reward_entitlements for select to authenticated
  using (user_id = auth.uid() or public.can_access_location(location_id) or public.is_platform_admin());
drop policy if exists "Business members can read redemptions" on public.reward_redemptions;
create policy "Assigned staff can read redemptions" on public.reward_redemptions for select to authenticated
  using (public.can_access_location(location_id) or public.is_platform_admin());

grant execute on function public.current_organization_role(uuid) to authenticated;
grant execute on function public.can_access_location(uuid) to authenticated;
grant execute on function public.create_organization_with_owner(text,text,text,text,text,text,text) to authenticated;
grant execute on function public.create_initial_location(uuid,text,text,text,text,text,text,text,double precision,double precision,jsonb) to authenticated;
grant execute on function public.configure_initial_loyalty_card(uuid,uuid,text,text,integer,boolean) to authenticated;
grant execute on function public.select_subscription_plan(uuid,text) to authenticated;
grant execute on function public.submit_organization_for_review(uuid) to authenticated;
grant select, insert, update, delete on public.location_members to authenticated;
