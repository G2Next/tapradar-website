-- Run this after logging in once with your email.
-- Replace the email value before executing.

do $$
declare
  owner_id uuid;
  business_id uuid;
begin
  select id into owner_id
  from auth.users
  where email = 'DEINE_EMAIL_HIER'
  limit 1;

  if owner_id is null then
    raise exception 'No auth user found for this email. Log in once first, then run this SQL.';
  end if;

  insert into public.businesses (name, slug, city, plan)
  values ('TapRadar Demo Geschäft', 'tapradar-demo', 'Wien', 'gold')
  on conflict (slug) do update
  set name = excluded.name,
      city = excluded.city,
      plan = excluded.plan
  returning id into business_id;

  insert into public.business_members (business_id, user_id, role)
  values (business_id, owner_id, 'owner')
  on conflict (business_id, user_id) do update
  set role = excluded.role,
      is_active = true;

  insert into public.loyalty_cards (business_id, title, reward_title, stamps_required)
  values
    (business_id, 'Kaffee & Genuss', 'Gratis Kaffee', 10),
    (business_id, 'Lunch Bonus', 'Gratis Dessert', 8)
  on conflict do nothing;
end $$;
