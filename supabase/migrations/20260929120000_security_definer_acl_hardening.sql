-- SECURITY DEFINER functions run with their owner's privileges, so they must
-- never inherit PostgreSQL's default EXECUTE grant to PUBLIC. Keep application
-- RPCs available to signed-in users and the service role, while trigger and
-- explicitly server-only functions stay unavailable to browser roles.
do $$
declare
  function_record record;
  function_signature text;
begin
  for function_record in
    select
      namespace.nspname as schema_name,
      procedure.proname as function_name,
      pg_get_function_identity_arguments(procedure.oid) as identity_arguments,
      procedure.prorettype = 'trigger'::regtype as returns_trigger
    from pg_proc as procedure
    join pg_namespace as namespace on namespace.oid = procedure.pronamespace
    where namespace.nspname = 'public'
      and procedure.prosecdef
  loop
    function_signature := format(
      '%I.%I(%s)',
      function_record.schema_name,
      function_record.function_name,
      function_record.identity_arguments
    );

    execute format(
      'revoke all on function %s from public, anon',
      function_signature
    );
    execute format(
      'grant execute on function %s to authenticated, service_role',
      function_signature
    );

    if function_record.returns_trigger
      or function_record.function_name in (
        'claim_notifications',
        'cleanup_operational_data',
        'consume_rate_limit',
        'resolve_email_locale',
        'staff_pin_sign_in',
        'staff_session_context',
        'staff_sign_out'
      )
    then
      execute format(
        'revoke all on function %s from authenticated',
        function_signature
      );
    end if;
  end loop;
end
$$;

-- Anonymous visitors only need the active public catalog. Keep the
-- administrator override in a separate authenticated policy so anonymous
-- reads do not need permission to execute is_platform_admin().
drop policy if exists "Public can read active subscription products"
  on public.subscription_products;
drop policy if exists "Authenticated can read subscription products"
  on public.subscription_products;

create policy "Public can read active subscription products"
  on public.subscription_products
  for select
  to anon
  using (is_active = true);

create policy "Authenticated can read subscription products"
  on public.subscription_products
  for select
  to authenticated
  using (is_active = true or public.is_platform_admin());
