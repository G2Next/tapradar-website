-- Server-side admin session limits. The Supabase auth session_id is the stable
-- key, so deleting or modifying browser helper cookies cannot reset a timeout.
create table if not exists public.admin_sessions (
  session_id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  started_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '8 hours'),
  mfa_verified_at timestamptz,
  revoked_at timestamptz,
  revoke_reason text check (revoke_reason in ('idle_timeout', 'absolute_timeout', 'manual'))
);

create table if not exists public.admin_mfa_factors (
  user_id uuid primary key references auth.users(id) on delete cascade,
  secret_ciphertext text not null,
  verified_at timestamptz,
  last_used_step bigint,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists admin_sessions_user_active_idx
  on public.admin_sessions (user_id, last_seen_at desc) where revoked_at is null;

alter table public.admin_sessions enable row level security;
alter table public.admin_mfa_factors enable row level security;
revoke all on public.admin_sessions from public, anon, authenticated;
revoke all on public.admin_mfa_factors from public, anon, authenticated;
grant all on public.admin_sessions to service_role;
grant all on public.admin_mfa_factors to service_role;

-- Requiring an application-verified TOTP factor and active server-side session
-- inside the database blocks direct REST access with a password-only token.
create or replace function public.is_platform_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
      select 1 from public.platform_admins pa
      where pa.user_id = auth.uid() and pa.is_active = true
    )
    and exists (
      select 1 from public.admin_sessions s
      where s.session_id::text = auth.jwt() ->> 'session_id'
        and s.user_id = auth.uid() and s.revoked_at is null
        and s.mfa_verified_at is not null
        and now() < s.expires_at
        and now() - s.last_seen_at < interval '30 minutes'
    );
$$;

create or replace function public.platform_admin_has_permission(required_permission text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.is_platform_admin() and exists (
    select 1 from public.platform_admins pa
    where pa.user_id = auth.uid() and pa.is_active = true and (
      pa.role = 'super_admin'
      or (pa.role = 'operations' and required_permission = any(array[
        'dashboard.view','organizations.view','organizations.manage','customers.view','customers.manage',
        'marketing.view','marketing.manage','support.view','support.manage','email_templates.view',
        'email_templates.manage','captcha.manage','operations.manage','errors.manage','audit.view'
      ]))
      or (pa.role = 'support' and required_permission = any(array[
        'dashboard.view','organizations.view','customers.view','customers.manage','marketing.view',
        'support.view','support.manage'
      ]))
      or (pa.role = 'finance' and required_permission = any(array[
        'dashboard.view','organizations.view','billing.view','billing.manage','payments.view',
        'payments.manage','audit.view'
      ]))
    )
  );
$$;

create or replace function public.touch_admin_session()
returns table (allowed boolean, reason text, expires_at timestamptz, mfa_enrolled boolean, mfa_verified boolean)
language plpgsql
security definer
set search_path = public
as $$
declare
  current_user_id uuid := auth.uid();
  raw_session_id text := auth.jwt() ->> 'session_id';
  current_session_id uuid;
  existing public.admin_sessions%rowtype;
  now_at timestamptz := clock_timestamp();
  expiry_reason text;
  enrolled boolean;
begin
  select exists(select 1 from public.admin_mfa_factors f where f.user_id = current_user_id and f.verified_at is not null) into enrolled;
  if current_user_id is null or raw_session_id is null
    or raw_session_id !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
    return query select false, 'missing_session'::text, null::timestamptz, enrolled, false;
    return;
  end if;
  current_session_id := raw_session_id::uuid;

  if not exists (select 1 from public.platform_admins pa where pa.user_id = current_user_id and pa.is_active = true) then
    return query select false, 'admin_required'::text, null::timestamptz, enrolled, false;
    return;
  end if;

  select * into existing from public.admin_sessions where session_id = current_session_id for update;
  if not found then
    insert into public.admin_sessions (session_id, user_id, started_at, last_seen_at, expires_at)
    values (current_session_id, current_user_id, now_at, now_at, now_at + interval '8 hours')
    returning * into existing;
    insert into public.audit_logs (actor_user_id, action, entity_type, entity_id, metadata)
    values (current_user_id, 'admin.security.session.started', 'admin_session', current_session_id::text, jsonb_build_object('expires_at', existing.expires_at));
    return query select true, 'active'::text, existing.expires_at, enrolled, false;
    return;
  end if;

  if existing.user_id <> current_user_id or existing.revoked_at is not null then
    return query select false, coalesce(existing.revoke_reason, 'revoked')::text, existing.expires_at, enrolled, existing.mfa_verified_at is not null;
    return;
  end if;

  if now_at >= existing.expires_at then expiry_reason := 'absolute_timeout';
  elsif now_at - existing.last_seen_at >= interval '30 minutes' then expiry_reason := 'idle_timeout';
  end if;

  if expiry_reason is not null then
    update public.admin_sessions set revoked_at = now_at, revoke_reason = expiry_reason where session_id = current_session_id;
    insert into public.audit_logs (actor_user_id, action, entity_type, entity_id, metadata)
    values (current_user_id, 'admin.security.session.expired', 'admin_session', current_session_id::text, jsonb_build_object('reason', expiry_reason));
    return query select false, expiry_reason, existing.expires_at, enrolled, false;
    return;
  end if;

  update public.admin_sessions set last_seen_at = now_at where session_id = current_session_id;
  return query select true, 'active'::text, existing.expires_at, enrolled, existing.mfa_verified_at is not null;
end;
$$;

revoke all on function public.touch_admin_session() from public, anon;
grant execute on function public.touch_admin_session() to authenticated, service_role;

comment on table public.admin_sessions is 'Server-side limits for privileged admin sessions: 30-minute idle and 8-hour absolute timeout.';
comment on table public.admin_mfa_factors is 'Encrypted TOTP factors for platform admins. Secrets are never readable through the public API.';
