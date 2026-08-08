create table if not exists public.payment_provider_configs (
  provider text primary key check (provider in ('stripe', 'paypal', 'manual')),
  display_name text not null,
  is_enabled boolean not null default false,
  mode text not null default 'test' check (mode in ('test', 'live')),
  public_identifier text,
  secret_ciphertext text,
  webhook_ciphertext text,
  status text not null default 'disconnected' check (status in ('disconnected', 'configured', 'verified', 'error')),
  capabilities jsonb not null default '[]'::jsonb,
  config jsonb not null default '{}'::jsonb,
  last_verified_at timestamptz,
  last_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.payment_provider_configs (provider, display_name, capabilities, config)
values
  ('stripe', 'Stripe', '["cards","apple_pay","google_pay","sepa","subscriptions"]', '{"checkout_ready":true}'),
  ('paypal', 'PayPal', '["paypal","subscriptions"]', '{"checkout_ready":false}'),
  ('manual', 'Manuelle Zahlung', '["bank_transfer"]', '{"checkout_ready":false}')
on conflict (provider) do nothing;

create table if not exists public.platform_api_keys (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  key_prefix text not null unique,
  key_hash text not null unique,
  scopes text[] not null default array['sync:read']::text[],
  is_active boolean not null default true,
  expires_at timestamptz,
  last_used_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  revoked_at timestamptz
);

create index if not exists platform_api_keys_active_idx on public.platform_api_keys (key_hash) where is_active;
drop trigger if exists payment_provider_configs_set_updated_at on public.payment_provider_configs;
create trigger payment_provider_configs_set_updated_at before update on public.payment_provider_configs
for each row execute function public.set_updated_at();

alter table public.payment_provider_configs enable row level security;
alter table public.platform_api_keys enable row level security;
create policy "Platform admins manage payment providers" on public.payment_provider_configs for all to authenticated using (public.is_platform_admin()) with check (public.is_platform_admin());
create policy "Platform admins manage API keys" on public.platform_api_keys for all to authenticated using (public.is_platform_admin()) with check (public.is_platform_admin());
grant select, insert, update on public.payment_provider_configs to authenticated;
grant select, insert, update on public.platform_api_keys to authenticated;
grant all on public.payment_provider_configs, public.platform_api_keys to service_role;
