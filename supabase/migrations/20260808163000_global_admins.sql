create table if not exists public.global_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  created_at timestamptz not null default now(),
  constraint global_admins_email_lowercase check (email = lower(email))
);

alter table public.global_admins enable row level security;

create or replace function public.is_global_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.global_admins where user_id = auth.uid()
  );
$$;

revoke all on function public.is_global_admin() from public;
grant execute on function public.is_global_admin() to authenticated;

drop policy if exists "Global admins can read admin assignments" on public.global_admins;
create policy "Global admins can read admin assignments"
on public.global_admins for select to authenticated
using (public.is_global_admin());

drop policy if exists "Global admins can manage all profiles" on public.profiles;
create policy "Global admins can manage all profiles"
on public.profiles for all to authenticated
using (public.is_global_admin()) with check (public.is_global_admin());

drop policy if exists "Global admins can manage all businesses" on public.businesses;
create policy "Global admins can manage all businesses"
on public.businesses for all to authenticated
using (public.is_global_admin()) with check (public.is_global_admin());

drop policy if exists "Global admins can manage all memberships" on public.business_members;
create policy "Global admins can manage all memberships"
on public.business_members for all to authenticated
using (public.is_global_admin()) with check (public.is_global_admin());

drop policy if exists "Global admins can manage all loyalty cards" on public.loyalty_cards;
create policy "Global admins can manage all loyalty cards"
on public.loyalty_cards for all to authenticated
using (public.is_global_admin()) with check (public.is_global_admin());

drop policy if exists "Global admins can manage all business offers" on public.business_offers;
create policy "Global admins can manage all business offers"
on public.business_offers for all to authenticated
using (public.is_global_admin()) with check (public.is_global_admin());

create or replace function public.assign_known_global_admin()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if lower(coalesce(new.email, '')) in (
    'global.admin@tapradar.app',
    'admin@tapradar.app'
  ) then
    insert into public.global_admins (user_id, email)
    values (new.id, lower(new.email))
    on conflict (user_id) do update set email = excluded.email;
  else
    delete from public.global_admins where user_id = new.id;
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_assign_global_admin on auth.users;
create trigger on_auth_user_assign_global_admin
after insert or update of email on auth.users
for each row execute function public.assign_known_global_admin();

insert into public.global_admins (user_id, email)
select id, lower(email)
from auth.users
where lower(email) in ('global.admin@tapradar.app', 'admin@tapradar.app')
on conflict (user_id) do update set email = excluded.email;
