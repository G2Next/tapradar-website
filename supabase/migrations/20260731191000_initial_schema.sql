create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  city text,
  address text,
  phone text,
  website text,
  plan text not null default 'bronze' check (plan in ('bronze', 'gold', 'platinum')),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.business_members (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'owner' check (role in ('owner', 'manager', 'staff')),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  unique (business_id, user_id)
);

create table if not exists public.loyalty_cards (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  title text not null,
  reward_title text not null,
  stamps_required integer not null default 10 check (stamps_required between 1 and 50),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists businesses_set_updated_at on public.businesses;
create trigger businesses_set_updated_at
before update on public.businesses
for each row execute function public.set_updated_at();

drop trigger if exists loyalty_cards_set_updated_at on public.loyalty_cards;
create trigger loyalty_cards_set_updated_at
before update on public.loyalty_cards
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  )
  on conflict (id) do update
  set email = excluded.email;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.businesses enable row level security;
alter table public.business_members enable row level security;
alter table public.loyalty_cards enable row level security;

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
on public.profiles for select
to authenticated
using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Members can read their memberships" on public.business_members;
create policy "Members can read their memberships"
on public.business_members for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "Business members can read businesses" on public.businesses;
create policy "Business members can read businesses"
on public.businesses for select
to authenticated
using (
  exists (
    select 1
    from public.business_members bm
    where bm.business_id = businesses.id
      and bm.user_id = auth.uid()
      and bm.is_active = true
  )
);

drop policy if exists "Owners and managers can update businesses" on public.businesses;
create policy "Owners and managers can update businesses"
on public.businesses for update
to authenticated
using (
  exists (
    select 1
    from public.business_members bm
    where bm.business_id = businesses.id
      and bm.user_id = auth.uid()
      and bm.role in ('owner', 'manager')
      and bm.is_active = true
  )
)
with check (
  exists (
    select 1
    from public.business_members bm
    where bm.business_id = businesses.id
      and bm.user_id = auth.uid()
      and bm.role in ('owner', 'manager')
      and bm.is_active = true
  )
);

drop policy if exists "Business members can read loyalty cards" on public.loyalty_cards;
create policy "Business members can read loyalty cards"
on public.loyalty_cards for select
to authenticated
using (
  exists (
    select 1
    from public.business_members bm
    where bm.business_id = loyalty_cards.business_id
      and bm.user_id = auth.uid()
      and bm.is_active = true
  )
);

drop policy if exists "Owners and managers can manage loyalty cards" on public.loyalty_cards;
create policy "Owners and managers can manage loyalty cards"
on public.loyalty_cards for all
to authenticated
using (
  exists (
    select 1
    from public.business_members bm
    where bm.business_id = loyalty_cards.business_id
      and bm.user_id = auth.uid()
      and bm.role in ('owner', 'manager')
      and bm.is_active = true
  )
)
with check (
  exists (
    select 1
    from public.business_members bm
    where bm.business_id = loyalty_cards.business_id
      and bm.user_id = auth.uid()
      and bm.role in ('owner', 'manager')
      and bm.is_active = true
  )
);
