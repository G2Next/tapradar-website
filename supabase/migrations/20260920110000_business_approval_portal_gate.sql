-- A newly registered organization may prepare only its company and location
-- data. Access to the operational merchant tools is unlocked by a platform
-- administrator after review.
create or replace function public.submit_business_for_admin_review(target_organization_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  selected_organization public.organizations%rowtype;
begin
  if public.current_organization_role(target_organization_id) <> 'owner' then
    raise exception 'Permission denied';
  end if;

  if not exists (
    select 1 from auth.users
    where id = auth.uid() and email_confirmed_at is not null
  ) then
    raise exception 'Email confirmation required';
  end if;

  select * into selected_organization
  from public.organizations
  where id = target_organization_id;

  if selected_organization.id is null
     or length(trim(coalesce(selected_organization.legal_name, ''))) < 2
     or length(trim(coalesce(selected_organization.billing_email, ''))) < 5
     or (
       length(trim(coalesce(selected_organization.registration_number, ''))) = 0
       and length(trim(coalesce(selected_organization.tax_id, ''))) = 0
     ) then
    raise exception 'Organization is incomplete';
  end if;

  if not exists (
    select 1
    from public.locations
    where organization_id = target_organization_id
      and is_active = true
      and length(trim(coalesce(address, ''))) >= 3
      and length(trim(coalesce(city, ''))) >= 2
      and latitude is not null
      and longitude is not null
      and opening_hours <> '{}'::jsonb
  ) then
    raise exception 'A complete location is required';
  end if;

  perform set_config('tapradar.onboarding_write', '1', true);
  update public.organizations
  set onboarding_status = 'review',
      public_status = 'hidden',
      submitted_at = now(),
      rejected_at = null,
      rejection_reason = null
  where id = target_organization_id;

  insert into public.audit_logs (
    actor_user_id, organization_id, action, entity_type, entity_id
  ) values (
    auth.uid(), target_organization_id, 'organization.submitted',
    'organization', target_organization_id::text
  );
end;
$$;

revoke all on function public.submit_business_for_admin_review(uuid) from public;
revoke all on function public.submit_business_for_admin_review(uuid) from anon;
grant execute on function public.submit_business_for_admin_review(uuid) to authenticated;
