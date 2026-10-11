-- Public storefront profiles belong to the same organization as physical locations.
-- Integration credentials remain in private server-side tables.
begin;

create table public.online_shops (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null check (length(trim(name)) between 1 and 160),
  description text,
  category text not null,
  website_url text not null check (website_url ~ '^https://[^[:space:]@/]+\.[^[:space:]@/]+'),
  logo_url text check (logo_url is null or logo_url ~ '^https://'),
  shipping_countries text[] not null default '{}',
  shipping_summary text,
  returns_summary text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  unique (organization_id, website_url)
);

create index online_shops_organization_idx on public.online_shops(organization_id);

alter table public.online_shops enable row level security;
revoke all on public.online_shops from anon, authenticated;
grant select on public.online_shops to anon, authenticated;
grant all on public.online_shops to service_role;

create policy "Visible online shops of approved paid organizations"
on public.online_shops
for select
to anon, authenticated
using (
  is_published
  and exists (
    select 1
    from public.organizations o
    where o.id = online_shops.organization_id
      and o.is_active
      and o.public_status = 'open'
      and o.plan in ('gold', 'platinum')
  )
);

commit;
