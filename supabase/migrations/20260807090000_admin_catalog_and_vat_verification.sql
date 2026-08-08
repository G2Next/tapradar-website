alter table public.organizations
  add column if not exists vat_validation_status text not null default 'pending'
    check (vat_validation_status in ('pending', 'valid', 'invalid', 'not_required')),
  add column if not exists vat_validated_at timestamptz,
  add column if not exists vat_validated_by uuid references auth.users(id) on delete set null,
  add column if not exists vat_validation_note text;

create table public.subscription_products (
  id uuid primary key default gen_random_uuid(),
  code text not null unique check (code ~ '^[a-z0-9][a-z0-9_-]{1,39}$'),
  name text not null,
  description text,
  gross_amount integer not null check (gross_amount >= 0),
  currency text not null default 'eur' check (currency ~ '^[a-z]{3}$'),
  vat_rate numeric(5,2) not null default 20 check (vat_rate >= 0 and vat_rate <= 100),
  billing_interval text not null default 'month' check (billing_interval in ('month', 'year')),
  stripe_price_id text unique,
  location_limit integer not null default 1 check (location_limit > 0),
  staff_limit integer not null default 1 check (staff_limit > 0),
  media_limit integer not null default 0 check (media_limit >= 0),
  features jsonb not null default '[]'::jsonb check (jsonb_typeof(features) = 'array'),
  is_active boolean not null default true,
  sort_order integer not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger subscription_products_set_updated_at before update on public.subscription_products
for each row execute function public.set_updated_at();

insert into public.subscription_products
  (code, name, description, gross_amount, vat_rate, location_limit, staff_limit, media_limit, features, sort_order)
values
  ('bronze', 'Bronze', 'Für einen Standort und den Einstieg.', 999, 20, 1, 1, 0, '["Digitale Treuekarte", "QR/NFC-Stempelung", "Basis-Statistik"]', 10),
  ('gold', 'Gold', 'Für wachsende Betriebe und mehrere Filialen.', 4999, 20, 5, 5, 2, '["Bis zu 5 Filialen", "Aktionen und Gutscheine", "E-Mail-Berichte"]', 20),
  ('platinum', 'Platinum', 'Für große Teams, Kampagnen und Analytik.', 9999, 20, 15, 15, 4, '["Bis zu 15 Filialen", "Erweiterte Analytik", "Prioritäts-Support"]', 30)
on conflict (code) do nothing;

-- Product codes replace the former hard-coded three-value plan check.
do $$
declare constraint_name text;
begin
  for constraint_name in
    select c.conname from pg_constraint c join pg_class t on t.oid = c.conrelid
    where t.relname in ('organizations', 'subscriptions') and c.contype = 'c'
      and pg_get_constraintdef(c.oid) ilike '%plan%bronze%gold%platinum%'
  loop
    execute format('alter table %s drop constraint %I',
      case when constraint_name like 'businesses_%' then 'public.organizations' else
        (select format('public.%I', t.relname) from pg_constraint c join pg_class t on t.oid=c.conrelid where c.conname=constraint_name limit 1)
      end,
      constraint_name);
  end loop;
end $$;

alter table public.organizations
  add column if not exists subscription_product_id uuid references public.subscription_products(id) on delete set null;
alter table public.subscriptions
  add column if not exists product_id uuid references public.subscription_products(id) on delete set null;

update public.organizations o set subscription_product_id = p.id
from public.subscription_products p where p.code = o.plan and o.subscription_product_id is null;
update public.subscriptions s set product_id = p.id
from public.subscription_products p where p.code = s.plan and s.product_id is null;

create or replace function public.sync_subscription_product_reference()
returns trigger language plpgsql set search_path = public as $$
begin
  select id into new.product_id from public.subscription_products where code = new.plan;
  return new;
end;
$$;
create trigger subscriptions_sync_product before insert or update of plan on public.subscriptions
for each row execute function public.sync_subscription_product_reference();

create or replace function public.sync_organization_product_reference()
returns trigger language plpgsql set search_path = public as $$
begin
  select id into new.subscription_product_id from public.subscription_products where code = new.plan;
  return new;
end;
$$;
create trigger organizations_sync_product before insert or update of plan on public.organizations
for each row execute function public.sync_organization_product_reference();

create or replace function public.select_subscription_plan(target_organization_id uuid, selected_plan text)
returns void language plpgsql security definer set search_path = public as $$
declare selected_product_id uuid;
begin
  if public.current_organization_role(target_organization_id) <> 'owner' then raise exception 'Permission denied'; end if;
  select id into selected_product_id from public.subscription_products where code = selected_plan and is_active;
  if selected_product_id is null then raise exception 'Invalid plan'; end if;
  perform set_config('tapradar.onboarding_write', '1', true);
  update public.subscriptions set plan = selected_plan, product_id = selected_product_id where organization_id = target_organization_id;
  update public.organizations set onboarding_status = 'payment', plan = selected_plan,
    subscription_product_id = selected_product_id where id = target_organization_id;
end;
$$;

alter table public.subscription_products enable row level security;
create policy "Public can read active subscription products" on public.subscription_products for select
to anon, authenticated using (is_active = true or public.is_platform_admin());
create policy "Platform admins can manage subscription products" on public.subscription_products for all
to authenticated using (public.is_platform_admin()) with check (public.is_platform_admin());

grant select on public.subscription_products to anon, authenticated;
grant insert, update, delete on public.subscription_products to authenticated;
grant all privileges on public.subscription_products to service_role;
