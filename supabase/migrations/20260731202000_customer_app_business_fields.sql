alter table public.businesses
  add column if not exists category text not null default 'Gastronomie',
  add column if not exists description text,
  add column if not exists opening_hours text,
  add column if not exists logo_emoji text not null default '🏪',
  add column if not exists latitude double precision,
  add column if not exists longitude double precision,
  add column if not exists public_status text not null default 'open' check (public_status in ('open', 'closed', 'hidden')),
  add column if not exists rating numeric(2,1) not null default 5.0 check (rating >= 0 and rating <= 5),
  add column if not exists rating_count integer not null default 0 check (rating_count >= 0);

create table if not exists public.business_offers (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  title text not null,
  description text,
  offer_type text not null default 'aktion' check (offer_type in ('aktion', 'gutschein', 'belohnung')),
  starts_at timestamptz,
  ends_at timestamptz,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists business_offers_set_updated_at on public.business_offers;
create trigger business_offers_set_updated_at
before update on public.business_offers
for each row execute function public.set_updated_at();

alter table public.business_offers enable row level security;

drop policy if exists "Public can read visible businesses" on public.businesses;
create policy "Public can read visible businesses"
on public.businesses for select
to anon, authenticated
using (is_active = true and public_status = 'open');

drop policy if exists "Public can read active loyalty cards" on public.loyalty_cards;
create policy "Public can read active loyalty cards"
on public.loyalty_cards for select
to anon, authenticated
using (
  is_active = true
  and exists (
    select 1
    from public.businesses b
    where b.id = loyalty_cards.business_id
      and b.is_active = true
      and b.public_status = 'open'
  )
);

drop policy if exists "Public can read active offers" on public.business_offers;
create policy "Public can read active offers"
on public.business_offers for select
to anon, authenticated
using (
  is_active = true
  and exists (
    select 1
    from public.businesses b
    where b.id = business_offers.business_id
      and b.is_active = true
      and b.public_status = 'open'
  )
);

drop policy if exists "Business members can read offers" on public.business_offers;
create policy "Business members can read offers"
on public.business_offers for select
to authenticated
using (
  exists (
    select 1
    from public.business_members bm
    where bm.business_id = business_offers.business_id
      and bm.user_id = auth.uid()
      and bm.is_active = true
  )
);

drop policy if exists "Owners and managers can manage offers" on public.business_offers;
create policy "Owners and managers can manage offers"
on public.business_offers for all
to authenticated
using (
  exists (
    select 1
    from public.business_members bm
    where bm.business_id = business_offers.business_id
      and bm.user_id = auth.uid()
      and bm.role in ('owner', 'manager')
      and bm.is_active = true
  )
)
with check (
  exists (
    select 1
    from public.business_members bm
    where bm.business_id = business_offers.business_id
      and bm.user_id = auth.uid()
      and bm.role in ('owner', 'manager')
      and bm.is_active = true
  )
);

insert into public.business_offers (business_id, title, description, offer_type)
select id, '10 Stempel → 1 kostenloser Cappuccino', 'Belohnung aus der Kunden-App Vorschau.', 'belohnung'
from public.businesses
where slug = 'tapradar-demo'
  and not exists (
    select 1
    from public.business_offers bo
    where bo.business_id = businesses.id
      and bo.title = '10 Stempel → 1 kostenloser Cappuccino'
  );
