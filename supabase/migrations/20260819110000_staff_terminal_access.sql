-- PIN-based terminal employees are intentionally separate from portal users.
-- Owner/manager accounts keep Supabase Auth; employees receive a scoped terminal session.

alter table public.organizations
  add column if not exists business_code text;

create or replace function public.staff_business_code_prefix(organization_name text)
returns text language sql immutable set search_path = public as $$
  select rpad(
    left(
      regexp_replace(
        translate(upper(coalesce(organization_name, '')), 'ÄÖÜÀÁÂÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÙÚÛÝ', 'AOUAAAAACEEEEIIIINOOOOUUUY'),
        '[^A-Z]', '', 'g'
      ),
      3
    ),
    3,
    'X'
  );
$$;

create or replace function public.generate_staff_business_code(organization_name text)
returns text language plpgsql security definer set search_path = public as $$
declare
  code_prefix text := public.staff_business_code_prefix(organization_name);
  first_number integer := floor(random() * 1000)::integer;
  candidate text;
begin
  -- Serialize allocations for the same three-letter prefix.
  perform pg_advisory_xact_lock(hashtext('tapradar-business-code:' || code_prefix));
  for code_offset in 0..999 loop
    candidate := code_prefix || lpad(((first_number + code_offset) % 1000)::text, 3, '0');
    if not exists (select 1 from public.organizations where business_code = candidate) then
      return candidate;
    end if;
  end loop;
  raise exception 'BUSINESS_CODE_NAMESPACE_EXHAUSTED';
end;
$$;

create or replace function public.set_staff_business_code()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.business_code is null or btrim(new.business_code) = '' then
    new.business_code := public.generate_staff_business_code(new.name);
  end if;
  return new;
end;
$$;

drop trigger if exists organizations_set_staff_business_code on public.organizations;
create trigger organizations_set_staff_business_code
before insert on public.organizations
for each row execute function public.set_staff_business_code();

do $$
declare organization_row record;
begin
  for organization_row in
    select id, name from public.organizations where business_code is null order by created_at, id
  loop
    update public.organizations
    set business_code = public.generate_staff_business_code(organization_row.name)
    where id = organization_row.id;
  end loop;
end $$;

alter table public.organizations
  alter column business_code set not null;
alter table public.organizations
  add constraint organizations_business_code_format check (business_code ~ '^[A-Z]{3}[0-9]{3}$');
create unique index organizations_business_code_unique on public.organizations (business_code);

create table public.staff_members (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  display_name text not null check (char_length(btrim(display_name)) between 2 and 100),
  pin_hash text not null,
  is_active boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  last_login_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index staff_members_organization_status_idx
  on public.staff_members (organization_id, is_active, created_at);
create trigger staff_members_set_updated_at before update on public.staff_members
for each row execute function public.set_updated_at();

create table public.staff_member_locations (
  staff_member_id uuid not null references public.staff_members(id) on delete cascade,
  organization_id uuid not null references public.organizations(id) on delete cascade,
  location_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (staff_member_id, location_id),
  foreign key (location_id, organization_id)
    references public.locations(id, organization_id) on delete cascade
);

create index staff_member_locations_organization_idx
  on public.staff_member_locations (organization_id, location_id);

create table public.staff_sessions (
  id uuid primary key default gen_random_uuid(),
  staff_member_id uuid not null references public.staff_members(id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

create index staff_sessions_active_idx on public.staff_sessions (token_hash, expires_at)
  where revoked_at is null;

create table public.staff_login_guards (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  attempt_key text not null,
  failed_attempts integer not null default 0,
  locked_until timestamptz,
  updated_at timestamptz not null default now(),
  primary key (organization_id, attempt_key)
);

alter table public.staff_members enable row level security;
alter table public.staff_member_locations enable row level security;
alter table public.staff_sessions enable row level security;
alter table public.staff_login_guards enable row level security;

create policy "Organization managers can read terminal employees"
on public.staff_members for select to authenticated
using (public.current_organization_role(organization_id) in ('owner', 'manager') or public.is_platform_admin());

create policy "Organization managers can read terminal employee locations"
on public.staff_member_locations for select to authenticated
using (public.current_organization_role(organization_id) in ('owner', 'manager') or public.is_platform_admin());

revoke all on public.staff_members, public.staff_member_locations, public.staff_sessions, public.staff_login_guards from anon, authenticated;
grant select (id, organization_id, display_name, is_active, last_login_at, created_at, updated_at)
  on public.staff_members to authenticated;
grant select on public.staff_member_locations to authenticated;

create or replace function public.current_staff_limit(target_organization_id uuid)
returns integer language sql stable security definer set search_path = public as $$
  select coalesce(
    product.staff_limit,
    case organization.plan when 'gold' then 5 when 'platinum' then 15 else 1 end
  )
  from public.organizations organization
  left join public.subscription_products product
    on product.id = organization.subscription_product_id
  where organization.id = target_organization_id;
$$;

create or replace function public.create_staff_member(
  target_organization_id uuid,
  employee_name text,
  employee_pin text,
  employee_location_ids uuid[]
) returns uuid language plpgsql security definer set search_path = public as $$
declare
  new_member_id uuid;
  employee_count integer;
  employee_limit integer;
  valid_location_count integer;
begin
  if coalesce(public.current_organization_role(target_organization_id), '') not in ('owner', 'manager') then
    raise exception 'PERMISSION_DENIED';
  end if;
  if char_length(btrim(employee_name)) not between 2 and 100 then
    raise exception 'INVALID_NAME';
  end if;
  if employee_pin !~ '^[0-9]{6}$' then raise exception 'INVALID_PIN'; end if;
  if coalesce(cardinality(employee_location_ids), 0) = 0 then raise exception 'LOCATION_REQUIRED'; end if;

  select count(distinct id) into valid_location_count
  from public.locations
  where organization_id = target_organization_id and is_active = true
    and id = any(employee_location_ids);
  if valid_location_count <> (select count(distinct location_id) from unnest(employee_location_ids) location_id) then
    raise exception 'INVALID_LOCATION';
  end if;

  perform pg_advisory_xact_lock(hashtext('tapradar-staff-limit:' || target_organization_id::text));
  select count(*) into employee_count from public.staff_members where organization_id = target_organization_id;
  employee_limit := coalesce(public.current_staff_limit(target_organization_id), 1);
  if employee_count >= employee_limit then raise exception 'STAFF_LIMIT_REACHED'; end if;
  if exists (
    select 1 from public.staff_members
    where organization_id = target_organization_id and extensions.crypt(employee_pin, pin_hash) = pin_hash
  ) then raise exception 'PIN_ALREADY_IN_USE'; end if;

  insert into public.staff_members (organization_id, display_name, pin_hash, created_by)
  values (target_organization_id, btrim(employee_name), extensions.crypt(employee_pin, extensions.gen_salt('bf', 10)), auth.uid())
  returning id into new_member_id;

  insert into public.staff_member_locations (staff_member_id, organization_id, location_id)
  select new_member_id, target_organization_id, location_id
  from (select distinct unnest(employee_location_ids) as location_id) selected;

  insert into public.audit_logs (actor_user_id, organization_id, action, entity_type, entity_id)
  values (auth.uid(), target_organization_id, 'staff.created', 'staff_member', new_member_id::text);
  return new_member_id;
end;
$$;

create or replace function public.set_staff_member_status(target_staff_member_id uuid, active boolean)
returns void language plpgsql security definer set search_path = public as $$
declare target_organization_id uuid;
begin
  select organization_id into target_organization_id from public.staff_members where id = target_staff_member_id;
  if target_organization_id is null or coalesce(public.current_organization_role(target_organization_id), '') not in ('owner', 'manager') then
    raise exception 'PERMISSION_DENIED';
  end if;
  update public.staff_members set is_active = active where id = target_staff_member_id;
  if not active then update public.staff_sessions set revoked_at = now() where staff_member_id = target_staff_member_id and revoked_at is null; end if;
  insert into public.audit_logs (actor_user_id, organization_id, action, entity_type, entity_id, metadata)
  values (auth.uid(), target_organization_id, 'staff.status_changed', 'staff_member', target_staff_member_id::text, jsonb_build_object('is_active', active));
end;
$$;

create or replace function public.update_staff_member_locations(target_staff_member_id uuid, employee_location_ids uuid[])
returns void language plpgsql security definer set search_path = public as $$
declare target_organization_id uuid; valid_location_count integer;
begin
  select organization_id into target_organization_id from public.staff_members where id = target_staff_member_id;
  if target_organization_id is null or coalesce(public.current_organization_role(target_organization_id), '') not in ('owner', 'manager') then raise exception 'PERMISSION_DENIED'; end if;
  if coalesce(cardinality(employee_location_ids), 0) = 0 then raise exception 'LOCATION_REQUIRED'; end if;
  select count(distinct id) into valid_location_count from public.locations
    where organization_id = target_organization_id and is_active = true and id = any(employee_location_ids);
  if valid_location_count <> (select count(distinct location_id) from unnest(employee_location_ids) location_id) then raise exception 'INVALID_LOCATION'; end if;
  delete from public.staff_member_locations where staff_member_id = target_staff_member_id;
  insert into public.staff_member_locations (staff_member_id, organization_id, location_id)
    select target_staff_member_id, target_organization_id, location_id from (select distinct unnest(employee_location_ids) as location_id) selected;
end;
$$;

create or replace function public.reset_staff_member_pin(target_staff_member_id uuid, employee_pin text)
returns void language plpgsql security definer set search_path = public as $$
declare target_organization_id uuid;
begin
  select organization_id into target_organization_id from public.staff_members where id = target_staff_member_id;
  if target_organization_id is null or coalesce(public.current_organization_role(target_organization_id), '') not in ('owner', 'manager') then raise exception 'PERMISSION_DENIED'; end if;
  if employee_pin !~ '^[0-9]{6}$' then raise exception 'INVALID_PIN'; end if;
  if exists (select 1 from public.staff_members where organization_id = target_organization_id and id <> target_staff_member_id and extensions.crypt(employee_pin, pin_hash) = pin_hash) then raise exception 'PIN_ALREADY_IN_USE'; end if;
  update public.staff_members set pin_hash = extensions.crypt(employee_pin, extensions.gen_salt('bf', 10)) where id = target_staff_member_id;
  update public.staff_sessions set revoked_at = now() where staff_member_id = target_staff_member_id and revoked_at is null;
  insert into public.audit_logs (actor_user_id, organization_id, action, entity_type, entity_id)
  values (auth.uid(), target_organization_id, 'staff.pin_reset', 'staff_member', target_staff_member_id::text);
end;
$$;

create or replace function public.delete_staff_member(target_staff_member_id uuid)
returns void language plpgsql security definer set search_path = public as $$
declare target_organization_id uuid;
begin
  select organization_id into target_organization_id from public.staff_members where id = target_staff_member_id;
  if target_organization_id is null or coalesce(public.current_organization_role(target_organization_id), '') not in ('owner', 'manager') then raise exception 'PERMISSION_DENIED'; end if;
  insert into public.audit_logs (actor_user_id, organization_id, action, entity_type, entity_id)
  values (auth.uid(), target_organization_id, 'staff.deleted', 'staff_member', target_staff_member_id::text);
  delete from public.staff_members where id = target_staff_member_id;
end;
$$;

create or replace function public.staff_pin_sign_in(p_business_code text, p_pin text, p_attempt_key text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  organization_row record;
  member_row record;
  guard_row public.staff_login_guards%rowtype;
  session_token text := encode(extensions.gen_random_bytes(32), 'hex');
  session_expires_at timestamptz := now() + interval '12 hours';
begin
  if upper(btrim(coalesce(p_business_code, ''))) !~ '^[A-Z]{3}[0-9]{3}$' or coalesce(p_pin, '') !~ '^[0-9]{6}$' then
    return jsonb_build_object('error', 'INVALID_CREDENTIALS');
  end if;
  select id, name into organization_row from public.organizations
    where business_code = upper(btrim(p_business_code)) and is_active = true;
  if not found then return jsonb_build_object('error', 'INVALID_CREDENTIALS'); end if;

  insert into public.staff_login_guards (organization_id, attempt_key)
    values (organization_row.id, left(coalesce(nullif(p_attempt_key, ''), 'unknown'), 128)) on conflict do nothing;
  select * into guard_row from public.staff_login_guards
    where organization_id = organization_row.id and attempt_key = left(coalesce(nullif(p_attempt_key, ''), 'unknown'), 128) for update;
  if guard_row.locked_until is not null and guard_row.locked_until > now() then
    return jsonb_build_object('error', 'TOO_MANY_ATTEMPTS', 'retry_after', extract(epoch from (guard_row.locked_until - now()))::integer);
  end if;

  select member.id, member.display_name into member_row
  from public.staff_members member
  where member.organization_id = organization_row.id and member.is_active = true
    and extensions.crypt(p_pin, member.pin_hash) = member.pin_hash
  limit 1;
  if not found then
    update public.staff_login_guards set
      failed_attempts = case when failed_attempts >= 4 then 0 else failed_attempts + 1 end,
      locked_until = case when failed_attempts >= 4 then now() + interval '15 minutes' else null end,
      updated_at = now()
    where organization_id = organization_row.id and attempt_key = left(coalesce(nullif(p_attempt_key, ''), 'unknown'), 128);
    return jsonb_build_object('error', 'INVALID_CREDENTIALS');
  end if;

  update public.staff_login_guards set failed_attempts = 0, locked_until = null, updated_at = now()
    where organization_id = organization_row.id and attempt_key = left(coalesce(nullif(p_attempt_key, ''), 'unknown'), 128);
  update public.staff_members set last_login_at = now() where id = member_row.id;
  insert into public.staff_sessions (staff_member_id, token_hash, expires_at)
    values (member_row.id, encode(extensions.digest(session_token, 'sha256'), 'hex'), session_expires_at);
  return jsonb_build_object(
    'session_token', session_token,
    'business_member_id', member_row.id,
    'member_id', member_row.id,
    'business_id', organization_row.id,
    'organization_id', organization_row.id,
    'business_name', organization_row.name,
    'display_name', member_row.display_name,
    'role', 'staff',
    'location_ids', (select coalesce(jsonb_agg(location_id order by location_id), '[]'::jsonb) from public.staff_member_locations where staff_member_id = member_row.id),
    'expires_at', session_expires_at
  );
end;
$$;

create or replace function public.staff_session_context(p_session_token text)
returns jsonb language sql security definer set search_path = public as $$
  select jsonb_build_object(
    'business_member_id', member.id,
    'member_id', member.id,
    'business_id', organization.id,
    'organization_id', organization.id,
    'business_name', organization.name,
    'display_name', member.display_name,
    'role', 'staff',
    'location_ids', (select coalesce(jsonb_agg(location_id order by location_id), '[]'::jsonb) from public.staff_member_locations where staff_member_id = member.id),
    'expires_at', session.expires_at
  )
  from public.staff_sessions session
  join public.staff_members member on member.id = session.staff_member_id and member.is_active = true
  join public.organizations organization on organization.id = member.organization_id and organization.is_active = true
  where session.token_hash = encode(extensions.digest(p_session_token, 'sha256'), 'hex')
    and session.revoked_at is null and session.expires_at > now()
  limit 1;
$$;

create or replace function public.staff_sign_out(p_session_token text)
returns void language plpgsql security definer set search_path = public as $$
begin
  update public.staff_sessions set revoked_at = now()
  where token_hash = encode(extensions.digest(p_session_token, 'sha256'), 'hex') and revoked_at is null;
end;
$$;

revoke all on function public.create_staff_member(uuid,text,text,uuid[]) from public;
revoke all on function public.set_staff_member_status(uuid,boolean) from public;
revoke all on function public.update_staff_member_locations(uuid,uuid[]) from public;
revoke all on function public.reset_staff_member_pin(uuid,text) from public;
revoke all on function public.delete_staff_member(uuid) from public;
revoke all on function public.staff_pin_sign_in(text,text,text) from public;
revoke all on function public.staff_session_context(text) from public;
revoke all on function public.staff_sign_out(text) from public;
grant execute on function public.create_staff_member(uuid,text,text,uuid[]) to authenticated;
grant execute on function public.set_staff_member_status(uuid,boolean) to authenticated;
grant execute on function public.update_staff_member_locations(uuid,uuid[]) to authenticated;
grant execute on function public.reset_staff_member_pin(uuid,text) to authenticated;
grant execute on function public.delete_staff_member(uuid) to authenticated;
grant execute on function public.staff_pin_sign_in(text,text,text) to service_role;
grant execute on function public.staff_session_context(text) to service_role;
grant execute on function public.staff_sign_out(text) to service_role;
