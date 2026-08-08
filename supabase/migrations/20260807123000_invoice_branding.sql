create table if not exists public.invoice_settings (
  id boolean primary key default true check (id),
  company_name text not null default 'TapRadar',
  legal_name text,
  slogan text,
  address text,
  postal_code text,
  city text,
  country_code text not null default 'AT' check (country_code ~ '^[A-Z]{2}$'),
  email text,
  phone text,
  website text,
  registration_number text,
  tax_id text,
  iban text,
  bic text,
  bank_name text,
  logo_url text,
  logo_path text,
  logo_position text not null default 'left' check (logo_position in ('left', 'center', 'right')),
  accent_color text not null default '#67e8f9' check (accent_color ~ '^#[0-9A-Fa-f]{6}$'),
  footer_text text,
  invoice_prefix text not null default 'TR',
  payment_terms_days integer not null default 14 check (payment_terms_days between 0 and 365),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.invoice_settings (id, company_name, legal_name, slogan, country_code, email, website, footer_text)
values (true, 'TapRadar', 'TapRadar Digitale Services', 'Digitale Kundenbindung, die verbindet.', 'AT', 'support@tapradar.app', 'https://tapradar.app', 'Vielen Dank für Ihr Vertrauen in TapRadar.')
on conflict (id) do nothing;

drop trigger if exists invoice_settings_set_updated_at on public.invoice_settings;
create trigger invoice_settings_set_updated_at before update on public.invoice_settings
for each row execute function public.set_updated_at();

alter table public.invoice_settings enable row level security;
drop policy if exists "Platform admins can manage invoice settings" on public.invoice_settings;
create policy "Platform admins can manage invoice settings"
on public.invoice_settings for all to authenticated
using (public.is_platform_admin())
with check (public.is_platform_admin());
grant select, update on public.invoice_settings to authenticated;
grant all on public.invoice_settings to service_role;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('platform-assets', 'platform-assets', true, 2097152, array['image/jpeg', 'image/png'])
on conflict (id) do update set public = excluded.public, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view platform assets" on storage.objects;
create policy "Public can view platform assets" on storage.objects for select
to anon, authenticated using (bucket_id = 'platform-assets');
drop policy if exists "Platform admins can upload platform assets" on storage.objects;
create policy "Platform admins can upload platform assets" on storage.objects for insert
to authenticated with check (bucket_id = 'platform-assets' and public.is_platform_admin());
drop policy if exists "Platform admins can update platform assets" on storage.objects;
create policy "Platform admins can update platform assets" on storage.objects for update
to authenticated using (bucket_id = 'platform-assets' and public.is_platform_admin())
with check (bucket_id = 'platform-assets' and public.is_platform_admin());
drop policy if exists "Platform admins can delete platform assets" on storage.objects;
create policy "Platform admins can delete platform assets" on storage.objects for delete
to authenticated using (bucket_id = 'platform-assets' and public.is_platform_admin());
