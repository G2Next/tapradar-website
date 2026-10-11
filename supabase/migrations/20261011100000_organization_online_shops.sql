-- One independent shop profile per organization. No connector credentials or sync.
create table public.organization_online_shops (
  organization_id uuid primary key references public.organizations(id) on delete cascade,
  has_shop boolean not null default false,
  name text not null default '' check (char_length(name) <= 120),
  url text not null default '' check (char_length(url) <= 500 and (url = '' or url ~ '^https?://[^/@[:space:]]+([/?#]|$)')),
  platform text not null default 'undecided' check (platform in ('woocommerce', 'shopify', 'shopware', 'magento', 'other', 'undecided')),
  description text not null default '' check (char_length(description) <= 1500),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (not has_shop or (length(trim(name)) > 0 and length(trim(url)) > 0))
);

create trigger organization_online_shops_updated_at before update on public.organization_online_shops
  for each row execute function public.set_updated_at();

alter table public.organization_online_shops enable row level security;
revoke all on public.organization_online_shops from anon, authenticated;
grant select on public.organization_online_shops to authenticated;
grant insert (organization_id, has_shop, name, url, platform, description),
  update (organization_id, has_shop, name, url, platform, description)
  on public.organization_online_shops to authenticated;
grant all on public.organization_online_shops to service_role;

create policy "Members read their shop profile" on public.organization_online_shops
  for select to authenticated using (
    public.current_organization_role(organization_id) is not null
    and exists (select 1 from public.organizations o where o.id = organization_id and o.onboarding_status = 'approved')
  );
create policy "Managers create their shop profile" on public.organization_online_shops
  for insert to authenticated with check (
    public.current_organization_role(organization_id) in ('owner', 'manager')
    and exists (select 1 from public.organizations o where o.id = organization_id and o.onboarding_status = 'approved')
  );
create policy "Managers update their shop profile" on public.organization_online_shops
  for update to authenticated using (
    public.current_organization_role(organization_id) in ('owner', 'manager')
    and exists (select 1 from public.organizations o where o.id = organization_id and o.onboarding_status = 'approved')
  ) with check (
    public.current_organization_role(organization_id) in ('owner', 'manager')
    and exists (select 1 from public.organizations o where o.id = organization_id and o.onboarding_status = 'approved')
  );
