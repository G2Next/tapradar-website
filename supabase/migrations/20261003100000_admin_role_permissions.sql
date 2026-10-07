-- Role-based access control for platform administration.
alter table public.platform_admins drop constraint if exists platform_admins_role_check;
alter table public.platform_admins add constraint platform_admins_role_check
  check (role in ('super_admin', 'operations', 'support', 'finance'));

create or replace function public.platform_admin_has_permission(required_permission text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
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

revoke all on function public.platform_admin_has_permission(text) from public, anon;
grant execute on function public.platform_admin_has_permission(text) to authenticated, service_role;

drop policy if exists "Admins can read own admin row" on public.platform_admins;
create policy "Admins read permitted admin rows" on public.platform_admins for select to authenticated
  using (user_id = auth.uid() or public.platform_admin_has_permission('team.manage'));
create policy "Super admins manage platform admins" on public.platform_admins for all to authenticated
  using (public.platform_admin_has_permission('team.manage'))
  with check (public.platform_admin_has_permission('team.manage'));
grant insert, update on public.platform_admins to authenticated;

drop policy if exists "Platform admins manage payment providers" on public.payment_provider_configs;
create policy "Finance admins manage payment providers" on public.payment_provider_configs for all to authenticated
  using (public.platform_admin_has_permission('payments.manage'))
  with check (public.platform_admin_has_permission('payments.manage'));

drop policy if exists "Platform admins manage API keys" on public.platform_api_keys;
create policy "Super admins manage API keys" on public.platform_api_keys for all to authenticated
  using (public.platform_admin_has_permission('api_keys.manage'))
  with check (public.platform_admin_has_permission('api_keys.manage'));

drop policy if exists "Platform admins can manage subscription products" on public.subscription_products;
create policy "Finance admins manage subscription products" on public.subscription_products for all to authenticated
  using (public.platform_admin_has_permission('billing.manage'))
  with check (public.platform_admin_has_permission('billing.manage'));

drop policy if exists "Business owners can read billing invoices" on public.billing_invoices;
create policy "Owners and finance admins read billing invoices" on public.billing_invoices for select to authenticated
  using (public.current_organization_role(organization_id) = 'owner' or public.platform_admin_has_permission('billing.view'));

drop policy if exists "Platform admins can manage invoice settings" on public.invoice_settings;
create policy "Finance admins manage invoice settings" on public.invoice_settings for all to authenticated
  using (public.platform_admin_has_permission('billing.manage'))
  with check (public.platform_admin_has_permission('billing.manage'));

drop policy if exists "Platform admins manage CAPTCHA settings" on public.captcha_settings;
create policy "Operations admins manage CAPTCHA settings" on public.captcha_settings for all to authenticated
  using (public.platform_admin_has_permission('captcha.manage'))
  with check (public.platform_admin_has_permission('captcha.manage'));
drop policy if exists "Platform admins read CAPTCHA logs" on public.captcha_attempt_logs;
create policy "Operations admins read CAPTCHA logs" on public.captcha_attempt_logs for select to authenticated
  using (public.platform_admin_has_permission('captcha.manage'));

drop policy if exists "Platform admins can manage contact messages" on public.contact_messages;
create policy "Support admins manage contact messages" on public.contact_messages for all to authenticated
  using (public.platform_admin_has_permission('support.manage'))
  with check (public.platform_admin_has_permission('support.manage'));

drop policy if exists "Only platform admins manage email templates" on public.email_templates;
create policy "Operations admins manage email templates" on public.email_templates for all to authenticated
  using (public.platform_admin_has_permission('email_templates.manage'))
  with check (public.platform_admin_has_permission('email_templates.manage'));
drop policy if exists "Only platform admins manage email settings" on public.email_settings;
create policy "Operations admins manage email settings" on public.email_settings for all to authenticated
  using (public.platform_admin_has_permission('email_templates.manage'))
  with check (public.platform_admin_has_permission('email_templates.manage'));

drop policy if exists "Platform admins can read application errors" on public.app_error_events;
create policy "Operations admins read application errors" on public.app_error_events for select to authenticated
  using (public.platform_admin_has_permission('errors.manage'));
drop policy if exists "Platform admins can triage application errors" on public.app_error_events;
create policy "Operations admins triage application errors" on public.app_error_events for update to authenticated
  using (public.platform_admin_has_permission('errors.manage'))
  with check (public.platform_admin_has_permission('errors.manage'));

drop policy if exists "Authorized users can read audit logs" on public.audit_logs;
create policy "Authorized users can read audit logs" on public.audit_logs for select to authenticated
  using (public.current_organization_role(organization_id) in ('owner', 'manager') or public.platform_admin_has_permission('audit.view'));

-- Replace broad platform-admin grants on core customer and merchant records.
drop policy if exists "Platform admins can manage businesses" on public.organizations;
create policy "Permitted admins read organizations" on public.organizations for select to authenticated
  using (public.platform_admin_has_permission('organizations.view'));
create policy "Operations admins manage organizations" on public.organizations for all to authenticated
  using (public.platform_admin_has_permission('organizations.manage'))
  with check (public.platform_admin_has_permission('organizations.manage'));

drop policy if exists "Customers can manage own profile" on public.customer_profiles;
create policy "Customers and support manage customer profiles" on public.customer_profiles for all to authenticated
  using (user_id = auth.uid() or public.platform_admin_has_permission('customers.manage'))
  with check (user_id = auth.uid() or public.platform_admin_has_permission('customers.manage'));

drop policy if exists "Business owners can read subscriptions" on public.subscriptions;
create policy "Owners and finance admins read subscriptions" on public.subscriptions for select to authenticated
  using (public.current_organization_role(organization_id) = 'owner' or public.platform_admin_has_permission('billing.view'));

drop policy if exists "Platform admins can review push messages" on public.push_messages;
create policy "Operations admins review push messages" on public.push_messages for update to authenticated
  using (public.platform_admin_has_permission('marketing.manage'))
  with check (public.platform_admin_has_permission('marketing.manage'));

drop policy if exists "Platform admins can manage offers" on public.offers;
create policy "Permitted admins read offers" on public.offers for select to authenticated
  using (public.platform_admin_has_permission('marketing.view'));
create policy "Operations admins manage offers" on public.offers for all to authenticated
  using (public.platform_admin_has_permission('marketing.manage'))
  with check (public.platform_admin_has_permission('marketing.manage'));
