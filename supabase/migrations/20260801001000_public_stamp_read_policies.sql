update public.businesses
set public_status = 'open'
where slug = 'tapradar-demo';

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
