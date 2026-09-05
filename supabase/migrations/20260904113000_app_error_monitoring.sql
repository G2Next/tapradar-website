-- Central, privacy-conscious application error log. Only platform admins may
-- read or triage entries; application servers write with the service role.
create table if not exists public.app_error_events (
  id uuid primary key default gen_random_uuid(),
  reference_code text not null unique,
  severity text not null default 'error' check (severity in ('warning', 'error', 'critical')),
  status text not null default 'open' check (status in ('open', 'acknowledged', 'resolved')),
  source text not null,
  route text,
  operation text,
  error_code text,
  message text not null,
  stack text,
  digest text,
  organization_id uuid references public.organizations(id) on delete set null,
  user_id uuid references auth.users(id) on delete set null,
  context jsonb not null default '{}'::jsonb,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  resolved_at timestamptz,
  resolved_by uuid references auth.users(id) on delete set null
);

create index if not exists app_error_events_status_seen_idx
  on public.app_error_events (status, last_seen_at desc);
create index if not exists app_error_events_source_seen_idx
  on public.app_error_events (source, last_seen_at desc);
create index if not exists app_error_events_organization_seen_idx
  on public.app_error_events (organization_id, last_seen_at desc)
  where organization_id is not null;

alter table public.app_error_events enable row level security;

create policy "Platform admins can read application errors"
on public.app_error_events for select to authenticated
using (public.is_platform_admin());

create policy "Platform admins can triage application errors"
on public.app_error_events for update to authenticated
using (public.is_platform_admin())
with check (public.is_platform_admin());

revoke all on public.app_error_events from public, anon, authenticated;
grant select, update on public.app_error_events to authenticated;
grant all on public.app_error_events to service_role;
