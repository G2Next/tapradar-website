alter table public.businesses
  add column if not exists postal_code text;

update public.businesses
set postal_code = '1010'
where slug = 'tapradar-demo'
  and postal_code is null;
