create extension if not exists pgcrypto;

create table if not exists public.locations (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  name text not null,
  slug text not null unique,
  address text,
  postal_code text,
  city text,
  phone text,
  opening_hours jsonb not null default '{}'::jsonb,
  latitude double precision,
  longitude double precision,
  public_status text not null default 'draft' check (public_status in ('draft', 'open', 'closed', 'hidden')),
  is_primary boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists locations_one_primary_per_business
on public.locations (business_id)
where is_primary = true and is_active = true;

create index if not exists locations_business_id_idx on public.locations (business_id);
create index if not exists locations_public_geo_idx on public.locations (public_status, latitude, longitude)
where is_active = true;

insert into public.locations (
  business_id, name, slug, address, postal_code, city, phone, opening_hours,
  latitude, longitude, public_status, is_primary
)
select
  b.id,
  'Hauptfiliale',
  b.slug || '-hauptfiliale',
  b.address,
  b.postal_code,
  b.city,
  b.phone,
  case
    when nullif(trim(b.opening_hours), '') is null then '{}'::jsonb
    else jsonb_build_object('summary', b.opening_hours)
  end,
  b.latitude,
  b.longitude,
  case when b.public_status = 'open' then 'open' else 'draft' end,
  true
from public.businesses b
where not exists (
  select 1 from public.locations l where l.business_id = b.id
);

alter table public.loyalty_cards add column if not exists location_id uuid references public.locations(id) on delete cascade;
alter table public.business_offers add column if not exists location_id uuid references public.locations(id) on delete cascade;

update public.loyalty_cards lc
set location_id = l.id
from public.locations l
where lc.location_id is null
  and l.business_id = lc.business_id
  and l.is_primary = true;

update public.business_offers bo
set location_id = l.id
from public.locations l
where bo.location_id is null
  and l.business_id = bo.business_id
  and l.is_primary = true;

create index if not exists loyalty_cards_location_id_idx on public.loyalty_cards (location_id);
create index if not exists business_offers_location_id_idx on public.business_offers (location_id);

create table if not exists public.customer_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  marketing_consent boolean not null default false,
  marketing_consent_at timestamptz,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.customer_loyalty_cards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  loyalty_card_id uuid not null references public.loyalty_cards(id) on delete cascade,
  stamps_balance integer not null default 0 check (stamps_balance >= 0),
  lifetime_stamps integer not null default 0 check (lifetime_stamps >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, loyalty_card_id)
);

create table if not exists public.stamp_devices (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  location_id uuid not null references public.locations(id) on delete cascade,
  name text not null,
  token_hash text not null unique,
  is_active boolean not null default true,
  last_used_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.stamp_events (
  id uuid primary key default gen_random_uuid(),
  customer_card_id uuid not null references public.customer_loyalty_cards(id) on delete restrict,
  user_id uuid not null references auth.users(id) on delete restrict,
  business_id uuid not null references public.businesses(id) on delete restrict,
  location_id uuid not null references public.locations(id) on delete restrict,
  loyalty_card_id uuid not null references public.loyalty_cards(id) on delete restrict,
  device_id uuid references public.stamp_devices(id) on delete set null,
  event_type text not null default 'award' check (event_type in ('award', 'reversal', 'adjustment')),
  amount integer not null check (amount <> 0),
  idempotency_key uuid not null unique,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.reward_entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  business_id uuid not null references public.businesses(id) on delete cascade,
  location_id uuid not null references public.locations(id) on delete cascade,
  loyalty_card_id uuid not null references public.loyalty_cards(id) on delete cascade,
  customer_card_id uuid not null references public.customer_loyalty_cards(id) on delete cascade,
  reward_title text not null,
  redemption_code text not null unique,
  status text not null default 'available' check (status in ('available', 'redeemed', 'expired', 'cancelled')),
  expires_at timestamptz,
  redeemed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.reward_redemptions (
  id uuid primary key default gen_random_uuid(),
  entitlement_id uuid not null unique references public.reward_entitlements(id) on delete restrict,
  business_id uuid not null references public.businesses(id) on delete restrict,
  location_id uuid not null references public.locations(id) on delete restrict,
  redeemed_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now()
);

create table if not exists public.platform_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'support' check (role in ('super_admin', 'operations', 'support')),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.business_invitations (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  email text not null,
  role text not null default 'staff' check (role in ('manager', 'staff')),
  token_hash text not null unique,
  invited_by uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'revoked', 'expired')),
  expires_at timestamptz not null default (now() + interval '7 days'),
  accepted_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null unique references public.businesses(id) on delete cascade,
  provider text not null default 'stripe' check (provider = 'stripe'),
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  stripe_price_id text,
  plan text not null default 'bronze' check (plan in ('bronze', 'gold', 'platinum')),
  status text not null default 'incomplete' check (status in ('incomplete', 'trialing', 'active', 'past_due', 'cancelled', 'unpaid', 'paused')),
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.push_devices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  platform text not null check (platform in ('ios', 'android', 'web')),
  push_token text not null unique,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.business_assets (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  location_id uuid references public.locations(id) on delete cascade,
  asset_type text not null check (asset_type in ('logo', 'cover', 'gallery', 'offer', 'document')),
  storage_path text not null unique,
  mime_type text not null,
  file_size integer not null check (file_size > 0 and file_size <= 5242880),
  alt_text text,
  is_public boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id bigint generated by default as identity primary key,
  actor_user_id uuid references auth.users(id) on delete set null,
  business_id uuid references public.businesses(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists customer_cards_user_idx on public.customer_loyalty_cards (user_id);
create index if not exists stamp_events_user_created_idx on public.stamp_events (user_id, created_at desc);
create index if not exists stamp_events_business_created_idx on public.stamp_events (business_id, created_at desc);
create index if not exists rewards_user_status_idx on public.reward_entitlements (user_id, status);
create index if not exists audit_logs_business_created_idx on public.audit_logs (business_id, created_at desc);
create index if not exists business_assets_business_idx on public.business_assets (business_id, created_at desc);
create index if not exists business_invitations_business_idx on public.business_invitations (business_id, status);

drop trigger if exists locations_set_updated_at on public.locations;
create trigger locations_set_updated_at before update on public.locations
for each row execute function public.set_updated_at();
drop trigger if exists customer_profiles_set_updated_at on public.customer_profiles;
create trigger customer_profiles_set_updated_at before update on public.customer_profiles
for each row execute function public.set_updated_at();
drop trigger if exists customer_cards_set_updated_at on public.customer_loyalty_cards;
create trigger customer_cards_set_updated_at before update on public.customer_loyalty_cards
for each row execute function public.set_updated_at();
drop trigger if exists stamp_devices_set_updated_at on public.stamp_devices;
create trigger stamp_devices_set_updated_at before update on public.stamp_devices
for each row execute function public.set_updated_at();
drop trigger if exists rewards_set_updated_at on public.reward_entitlements;
create trigger rewards_set_updated_at before update on public.reward_entitlements
for each row execute function public.set_updated_at();
drop trigger if exists subscriptions_set_updated_at on public.subscriptions;
create trigger subscriptions_set_updated_at before update on public.subscriptions
for each row execute function public.set_updated_at();
drop trigger if exists push_devices_set_updated_at on public.push_devices;
create trigger push_devices_set_updated_at before update on public.push_devices
for each row execute function public.set_updated_at();

create or replace function public.current_business_role(target_business_id uuid)
returns text
language sql
stable
security definer
set search_path = public
as $$
  select bm.role
  from public.business_members bm
  where bm.business_id = target_business_id
    and bm.user_id = auth.uid()
    and bm.is_active = true
  limit 1;
$$;

create or replace function public.is_platform_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.platform_admins pa
    where pa.user_id = auth.uid() and pa.is_active = true
  );
$$;

create or replace function public.customer_owns_loyalty_card(target_card_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.customer_loyalty_cards cc
    where cc.user_id = auth.uid() and cc.loyalty_card_id = target_card_id
  );
$$;

create or replace function public.customer_owns_business(target_business_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.customer_loyalty_cards cc
    join public.loyalty_cards lc on lc.id = cc.loyalty_card_id
    where cc.user_id = auth.uid() and lc.business_id = target_business_id
  );
$$;

create or replace function public.customer_owns_location(target_location_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.customer_loyalty_cards cc
    join public.loyalty_cards lc on lc.id = cc.loyalty_card_id
    where cc.user_id = auth.uid() and lc.location_id = target_location_id
  );
$$;

create or replace function public.business_can_read_loyalty_customers(target_card_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.loyalty_cards lc
    join public.business_members bm on bm.business_id = lc.business_id
    where lc.id = target_card_id and bm.user_id = auth.uid() and bm.is_active = true
  );
$$;

create or replace function public.protect_business_controlled_fields()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if coalesce(auth.role(), '') <> 'service_role' and not public.is_platform_admin() then
    new.plan := old.plan;
    new.is_active := old.is_active;
    new.public_status := old.public_status;
  end if;
  if new.public_status = 'open' and not exists (
    select 1 from public.locations l
    where l.business_id = new.id and l.is_active = true and l.public_status in ('open', 'closed')
  ) then
    raise exception 'At least one visible location is required before publishing a business';
  end if;
  return new;
end;
$$;

drop trigger if exists businesses_protect_controlled_fields on public.businesses;
create trigger businesses_protect_controlled_fields
before update on public.businesses
for each row execute function public.protect_business_controlled_fields();

revoke all on function public.current_business_role(uuid) from public;
grant execute on function public.current_business_role(uuid) to authenticated;
revoke all on function public.is_platform_admin() from public;
grant execute on function public.is_platform_admin() to authenticated;
revoke all on function public.customer_owns_loyalty_card(uuid) from public;
grant execute on function public.customer_owns_loyalty_card(uuid) to authenticated;
revoke all on function public.customer_owns_business(uuid) from public;
grant execute on function public.customer_owns_business(uuid) to authenticated;
revoke all on function public.customer_owns_location(uuid) from public;
grant execute on function public.customer_owns_location(uuid) to authenticated;
revoke all on function public.business_can_read_loyalty_customers(uuid) from public;
grant execute on function public.business_can_read_loyalty_customers(uuid) to authenticated;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', ''))
  on conflict (id) do update set email = excluded.email;

  insert into public.customer_profiles (user_id, display_name)
  values (new.id, nullif(new.raw_user_meta_data->>'full_name', ''))
  on conflict (user_id) do nothing;
  return new;
end;
$$;

create or replace function public.create_business_with_owner(
  business_name text,
  business_slug text,
  business_category text,
  location_name text,
  location_address text,
  location_postal_code text,
  location_city text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  owner_id uuid := auth.uid();
  new_business_id uuid;
  new_location_id uuid;
begin
  if owner_id is null then raise exception 'Authentication required'; end if;
  if length(trim(business_name)) < 2 or length(trim(location_city)) < 2 then
    raise exception 'Required fields are missing';
  end if;

  insert into public.businesses (name, slug, category, city, address, postal_code, public_status, is_active)
  values (trim(business_name), trim(business_slug), trim(business_category), trim(location_city), trim(location_address), trim(location_postal_code), 'hidden', true)
  returning id into new_business_id;

  insert into public.business_members (business_id, user_id, role)
  values (new_business_id, owner_id, 'owner');

  insert into public.locations (business_id, name, slug, address, postal_code, city, public_status, is_primary)
  values (new_business_id, trim(location_name), trim(business_slug) || '-hauptfiliale', trim(location_address), trim(location_postal_code), trim(location_city), 'draft', true)
  returning id into new_location_id;

  insert into public.loyalty_cards (business_id, location_id, title, reward_title, stamps_required, is_active)
  values (new_business_id, new_location_id, 'Meine Treuekarte', 'Ihre Belohnung', 10, false);

  insert into public.subscriptions (business_id, plan, status)
  values (new_business_id, 'bronze', 'incomplete');

  insert into public.audit_logs (actor_user_id, business_id, action, entity_type, entity_id)
  values (owner_id, new_business_id, 'business.created', 'business', new_business_id::text);
  return new_business_id;
end;
$$;

revoke all on function public.create_business_with_owner(text, text, text, text, text, text, text) from public;
grant execute on function public.create_business_with_owner(text, text, text, text, text, text, text) to authenticated;

create or replace function public.award_stamp(device_token text, request_key uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  customer_id uuid := auth.uid();
  selected_device public.stamp_devices%rowtype;
  selected_card public.loyalty_cards%rowtype;
  wallet public.customer_loyalty_cards%rowtype;
  next_balance integer;
  reward_id uuid;
begin
  if customer_id is null then raise exception 'Authentication required'; end if;

  if exists (select 1 from public.stamp_events where idempotency_key = request_key and user_id = customer_id) then
    return jsonb_build_object('status', 'already_processed');
  end if;

  select * into selected_device
  from public.stamp_devices
  where token_hash = encode(extensions.digest(device_token, 'sha256'), 'hex')
    and is_active = true
  for update;
  if not found then raise exception 'Invalid stamp device'; end if;

  select * into selected_card
  from public.loyalty_cards
  where location_id = selected_device.location_id and is_active = true
  order by created_at asc limit 1;
  if not found then raise exception 'No active loyalty card'; end if;

  if exists (
    select 1 from public.stamp_events
    where user_id = customer_id
      and device_id = selected_device.id
      and event_type = 'award'
      and created_at > now() - interval '30 seconds'
  ) then raise exception 'Please wait before collecting another stamp'; end if;

  insert into public.customer_profiles (user_id) values (customer_id)
  on conflict (user_id) do nothing;

  insert into public.customer_loyalty_cards (user_id, loyalty_card_id)
  values (customer_id, selected_card.id)
  on conflict (user_id, loyalty_card_id) do update set updated_at = now()
  returning * into wallet;

  next_balance := wallet.stamps_balance + 1;
  if next_balance >= selected_card.stamps_required then
    next_balance := 0;
    insert into public.reward_entitlements (
      user_id, business_id, location_id, loyalty_card_id, customer_card_id,
      reward_title, redemption_code, expires_at
    ) values (
      customer_id, selected_card.business_id, selected_device.location_id,
      selected_card.id, wallet.id, selected_card.reward_title,
      upper(substr(encode(extensions.gen_random_bytes(8), 'hex'), 1, 12)), now() + interval '180 days'
    ) returning id into reward_id;
  end if;

  update public.customer_loyalty_cards
  set stamps_balance = next_balance, lifetime_stamps = lifetime_stamps + 1
  where id = wallet.id;

  insert into public.stamp_events (
    customer_card_id, user_id, business_id, location_id, loyalty_card_id,
    device_id, event_type, amount, idempotency_key
  ) values (
    wallet.id, customer_id, selected_card.business_id, selected_device.location_id,
    selected_card.id, selected_device.id, 'award', 1, request_key
  );

  update public.stamp_devices set last_used_at = now() where id = selected_device.id;
  return jsonb_build_object(
    'status', 'awarded', 'stamps_balance', next_balance,
    'stamps_required', selected_card.stamps_required,
    'reward_created', reward_id is not null
  );
end;
$$;

revoke all on function public.award_stamp(text, uuid) from public;
grant execute on function public.award_stamp(text, uuid) to authenticated;

create or replace function public.redeem_reward(reward_code text, target_location_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  staff_id uuid := auth.uid();
  reward public.reward_entitlements%rowtype;
begin
  select * into reward from public.reward_entitlements
  where redemption_code = upper(trim(reward_code)) for update;
  if not found or reward.status <> 'available' then raise exception 'Reward is not available'; end if;
  if reward.expires_at is not null and reward.expires_at < now() then
    update public.reward_entitlements set status = 'expired' where id = reward.id;
    raise exception 'Reward has expired';
  end if;
  if coalesce(public.current_business_role(reward.business_id), '') not in ('owner', 'manager', 'staff') then
    raise exception 'Permission denied';
  end if;
  if target_location_id <> reward.location_id then raise exception 'Wrong location'; end if;

  update public.reward_entitlements set status = 'redeemed', redeemed_at = now() where id = reward.id;
  insert into public.reward_redemptions (entitlement_id, business_id, location_id, redeemed_by)
  values (reward.id, reward.business_id, target_location_id, staff_id);
  insert into public.audit_logs (actor_user_id, business_id, action, entity_type, entity_id)
  values (staff_id, reward.business_id, 'reward.redeemed', 'reward', reward.id::text);
  return jsonb_build_object('status', 'redeemed', 'reward_title', reward.reward_title);
end;
$$;

revoke all on function public.redeem_reward(text, uuid) from public;
grant execute on function public.redeem_reward(text, uuid) to authenticated;

create or replace function public.accept_business_invitation(invitation_token text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  current_user_id uuid := auth.uid();
  current_email text;
  invitation public.business_invitations%rowtype;
begin
  if current_user_id is null then raise exception 'Authentication required'; end if;
  select lower(email) into current_email from auth.users where id = current_user_id;
  select * into invitation from public.business_invitations
  where token_hash = encode(extensions.digest(invitation_token, 'sha256'), 'hex') for update;
  if not found or invitation.status <> 'pending' or invitation.expires_at < now() then raise exception 'Invitation is invalid'; end if;
  if lower(invitation.email) <> current_email then raise exception 'Invitation belongs to another email'; end if;
  insert into public.business_members (business_id, user_id, role, is_active)
  values (invitation.business_id, current_user_id, invitation.role, true)
  on conflict (business_id, user_id) do update set role = excluded.role, is_active = true;
  update public.business_invitations set status = 'accepted', accepted_at = now() where id = invitation.id;
  insert into public.audit_logs (actor_user_id, business_id, action, entity_type, entity_id)
  values (current_user_id, invitation.business_id, 'invitation.accepted', 'business_member', current_user_id::text);
  return invitation.business_id;
end;
$$;

revoke all on function public.accept_business_invitation(text) from public;
grant execute on function public.accept_business_invitation(text) to authenticated;

alter table public.locations enable row level security;
alter table public.customer_profiles enable row level security;
alter table public.customer_loyalty_cards enable row level security;
alter table public.stamp_devices enable row level security;
alter table public.stamp_events enable row level security;
alter table public.reward_entitlements enable row level security;
alter table public.reward_redemptions enable row level security;
alter table public.platform_admins enable row level security;
alter table public.business_invitations enable row level security;
alter table public.subscriptions enable row level security;
alter table public.push_devices enable row level security;
alter table public.business_assets enable row level security;
alter table public.audit_logs enable row level security;

create policy "Public can read visible locations" on public.locations for select
to anon, authenticated using (is_active = true and public_status in ('open', 'closed'));
create policy "Business members can manage locations" on public.locations for all
to authenticated using (public.current_business_role(business_id) in ('owner', 'manager') or public.is_platform_admin())
with check (public.current_business_role(business_id) in ('owner', 'manager') or public.is_platform_admin());

create policy "Customers can manage own profile" on public.customer_profiles for all
to authenticated using (user_id = auth.uid() or public.is_platform_admin())
with check (user_id = auth.uid() or public.is_platform_admin());
create policy "Customers can read own cards" on public.customer_loyalty_cards for select
to authenticated using (user_id = auth.uid() or public.is_platform_admin());
create policy "Customers can read wallet businesses" on public.businesses for select
to authenticated using (public.customer_owns_business(id));
create policy "Customers can read wallet locations" on public.locations for select
to authenticated using (public.customer_owns_location(id));
create policy "Customers can read owned loyalty cards" on public.loyalty_cards for select
to authenticated using (public.customer_owns_loyalty_card(id));
create policy "Business members can read customer cards" on public.customer_loyalty_cards for select
to authenticated using (public.business_can_read_loyalty_customers(loyalty_card_id));

create policy "Business managers can manage stamp devices" on public.stamp_devices for all
to authenticated using (public.current_business_role(business_id) in ('owner', 'manager') or public.is_platform_admin())
with check (public.current_business_role(business_id) in ('owner', 'manager') or public.is_platform_admin());
create policy "Customers can read own stamp events" on public.stamp_events for select
to authenticated using (user_id = auth.uid() or public.current_business_role(business_id) is not null or public.is_platform_admin());
create policy "Customers can read own rewards" on public.reward_entitlements for select
to authenticated using (user_id = auth.uid() or public.current_business_role(business_id) is not null or public.is_platform_admin());
create policy "Business members can read redemptions" on public.reward_redemptions for select
to authenticated using (public.current_business_role(business_id) is not null or public.is_platform_admin());

create policy "Admins can read own admin row" on public.platform_admins for select
to authenticated using (user_id = auth.uid() or public.is_platform_admin());
create policy "Business managers can manage invitations" on public.business_invitations for all
to authenticated using (public.current_business_role(business_id) in ('owner', 'manager') or public.is_platform_admin())
with check (public.current_business_role(business_id) in ('owner', 'manager') or public.is_platform_admin());
create policy "Business members can read team memberships" on public.business_members for select
to authenticated using (public.current_business_role(business_id) is not null or public.is_platform_admin());
create policy "Business members can read teammate profiles" on public.profiles for select
to authenticated using (
  exists (
    select 1 from public.business_members mine
    join public.business_members teammate on teammate.business_id = mine.business_id
    where mine.user_id = auth.uid() and mine.is_active = true and teammate.user_id = profiles.id
  ) or public.is_platform_admin()
);
create policy "Platform admins can manage businesses" on public.businesses for all
to authenticated using (public.is_platform_admin()) with check (public.is_platform_admin());
create policy "Platform admins can manage memberships" on public.business_members for all
to authenticated using (public.is_platform_admin()) with check (public.is_platform_admin());
create policy "Platform admins can manage loyalty cards" on public.loyalty_cards for all
to authenticated using (public.is_platform_admin()) with check (public.is_platform_admin());
create policy "Platform admins can manage offers" on public.business_offers for all
to authenticated using (public.is_platform_admin()) with check (public.is_platform_admin());
create policy "Business owners can read subscriptions" on public.subscriptions for select
to authenticated using (public.current_business_role(business_id) = 'owner' or public.is_platform_admin());
create policy "Customers can manage own push devices" on public.push_devices for all
to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "Public can read public business assets" on public.business_assets for select
to anon, authenticated using (
  is_public = true and exists (
    select 1 from public.businesses b where b.id = business_id and b.is_active = true and b.public_status = 'open'
  )
  and (
    location_id is null or exists (
      select 1 from public.locations l where l.id = business_assets.location_id and l.is_active = true and l.public_status in ('open', 'closed')
    )
  )
);
create policy "Business managers can manage assets" on public.business_assets for all
to authenticated using (public.current_business_role(business_id) in ('owner', 'manager') or public.is_platform_admin())
with check (public.current_business_role(business_id) in ('owner', 'manager') or public.is_platform_admin());
create policy "Authorized users can read audit logs" on public.audit_logs for select
to authenticated using (public.current_business_role(business_id) in ('owner', 'manager') or public.is_platform_admin());
create policy "Authorized users can create audit logs" on public.audit_logs for insert
to authenticated with check (
  actor_user_id = auth.uid()
  and (public.current_business_role(business_id) in ('owner', 'manager') or public.is_platform_admin())
);

drop policy if exists "Public can read active loyalty cards" on public.loyalty_cards;
create policy "Public can read active loyalty cards" on public.loyalty_cards for select
to anon, authenticated using (
  is_active = true
  and exists (
    select 1 from public.businesses b
    where b.id = loyalty_cards.business_id and b.is_active = true and b.public_status = 'open'
  )
  and (
    location_id is null or exists (
      select 1 from public.locations l
      where l.id = loyalty_cards.location_id and l.is_active = true and l.public_status in ('open', 'closed')
    )
  )
);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('business-media', 'business-media', true, 5242880, array['image/jpeg', 'image/png', 'image/webp', 'application/pdf'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "Public can view business media" on storage.objects for select
to anon, authenticated using (bucket_id = 'business-media');
create policy "Business members can upload business media" on storage.objects for insert
to authenticated with check (
  bucket_id = 'business-media'
  and public.current_business_role(((storage.foldername(name))[1])::uuid) in ('owner', 'manager')
);
create policy "Business members can update business media" on storage.objects for update
to authenticated using (
  bucket_id = 'business-media'
  and public.current_business_role(((storage.foldername(name))[1])::uuid) in ('owner', 'manager')
);
create policy "Business members can delete business media" on storage.objects for delete
to authenticated using (
  bucket_id = 'business-media'
  and public.current_business_role(((storage.foldername(name))[1])::uuid) in ('owner', 'manager')
);

drop policy if exists "Public can read active offers" on public.business_offers;
create policy "Public can read active offers" on public.business_offers for select
to anon, authenticated using (
  is_active = true
  and (starts_at is null or starts_at <= now())
  and (ends_at is null or ends_at >= now())
  and exists (
    select 1 from public.businesses b
    where b.id = business_offers.business_id and b.is_active = true and b.public_status = 'open'
  )
  and (
    location_id is null or exists (
      select 1 from public.locations l
      where l.id = business_offers.location_id and l.is_active = true and l.public_status in ('open', 'closed')
    )
  )
);

grant usage on schema public to anon, authenticated;
grant select on all tables in schema public to anon, authenticated;
grant insert, update, delete on all tables in schema public to authenticated;
grant usage, select on all sequences in schema public to authenticated;
grant all privileges on all tables in schema public to service_role;
grant all privileges on all sequences in schema public to service_role;
