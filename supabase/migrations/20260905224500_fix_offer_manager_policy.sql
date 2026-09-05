-- The legacy offer policy still used a direct organization_members subquery
-- after the business-to-organization migration. Use the canonical
-- security-definer role helper so active owners and managers can reliably
-- create and edit actions and vouchers through the authenticated API.
drop policy if exists "Owners and managers can manage offers" on public.offers;
drop policy if exists "Organization managers can manage offers" on public.offers;

create policy "Organization managers can manage offers"
on public.offers for all
to authenticated
using (
  public.current_organization_role(organization_id) in ('owner', 'manager')
  or public.is_platform_admin()
)
with check (
  public.current_organization_role(organization_id) in ('owner', 'manager')
  or public.is_platform_admin()
);

