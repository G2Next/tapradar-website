-- Business onboarding, VAT-ready billing, richer campaigns and rewards.
alter table public.organizations
  add column if not exists billing_address text,
  add column if not exists billing_postal_code text,
  add column if not exists billing_city text,
  add column if not exists billing_country_code text not null default 'AT'
    check (billing_country_code ~ '^[A-Z]{2}$'),
  add column if not exists vat_treatment text not null default 'domestic'
    check (vat_treatment in ('domestic', 'eu_reverse_charge', 'export', 'standard')),
  add column if not exists vat_verified_at timestamptz;

alter table public.loyalty_cards
  add column if not exists earning_rule text,
  add column if not exists verification_instructions text;

-- Rewards are earned through loyalty cards. Campaign offers are actions or coupons.
update public.offers set offer_type = 'aktion' where offer_type = 'belohnung';
do $$
declare constraint_name text;
begin
  for constraint_name in
    select c.conname
    from pg_constraint c
    join pg_class t on t.oid = c.conrelid
    where t.relname = 'offers' and c.contype = 'c'
      and pg_get_constraintdef(c.oid) ilike '%offer_type%'
  loop
    execute format('alter table public.offers drop constraint %I', constraint_name);
  end loop;
end $$;

alter table public.offers
  add constraint offers_offer_type_check check (offer_type in ('aktion', 'gutschein')),
  add column if not exists discount_type text
    check (discount_type is null or discount_type in ('fixed', 'percentage')),
  add column if not exists discount_value numeric(10,2),
  add column if not exists minimum_purchase_amount numeric(10,2),
  add column if not exists redemption_code text,
  add column if not exists conditions text,
  add column if not exists media_asset_id uuid references public.organization_assets(id) on delete set null,
  add constraint offers_discount_value_check check (
    (offer_type = 'aktion' and discount_type is null and discount_value is null)
    or
    (offer_type = 'gutschein' and discount_type is not null and discount_value > 0
      and (discount_type <> 'percentage' or discount_value <= 100))
  );

create index if not exists offers_media_asset_idx on public.offers(media_asset_id)
  where media_asset_id is not null;

create table if not exists public.billing_invoices (
  id text primary key,
  organization_id uuid not null references public.organizations(id) on delete cascade,
  stripe_customer_id text,
  stripe_subscription_id text,
  invoice_number text,
  status text not null default 'draft',
  currency text not null default 'eur',
  subtotal_amount integer not null default 0,
  tax_amount integer not null default 0,
  total_amount integer not null default 0,
  customer_country_code text,
  vat_treatment text not null default 'standard',
  hosted_invoice_url text,
  invoice_pdf_url text,
  issued_at timestamptz,
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists billing_invoices_organization_idx
  on public.billing_invoices(organization_id, issued_at desc, created_at desc);
drop trigger if exists billing_invoices_set_updated_at on public.billing_invoices;
create trigger billing_invoices_set_updated_at before update on public.billing_invoices
for each row execute function public.set_updated_at();

alter table public.billing_invoices enable row level security;
create policy "Business owners can read billing invoices" on public.billing_invoices for select
to authenticated using (
  public.current_organization_role(organization_id) = 'owner' or public.is_platform_admin()
);

grant select on public.billing_invoices to authenticated;
grant all privileges on public.billing_invoices to service_role;
