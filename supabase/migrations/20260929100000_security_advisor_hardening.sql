-- Make existing views obey the caller's permissions/RLS and give every public
-- function an explicit, non-user-controlled search path. The view checks are
-- conditional because older/local schemas do not contain the legacy views.
do $$
begin
  if to_regclass('public.business_public_profile') is not null then
    execute 'alter view public.business_public_profile set (security_invoker = true)';
  end if;
  if to_regclass('public.businesses_with_plan') is not null then
    execute 'alter view public.businesses_with_plan set (security_invoker = true)';
  end if;
end
$$;

do $$
declare
  function_record record;
begin
  for function_record in
    select
      namespace.nspname as schema_name,
      procedure.proname as function_name,
      pg_get_function_identity_arguments(procedure.oid) as identity_arguments
    from pg_proc as procedure
    join pg_namespace as namespace on namespace.oid = procedure.pronamespace
    where namespace.nspname = 'public'
      and not exists (
        select 1
        from unnest(coalesce(procedure.proconfig, array[]::text[])) as setting
        where setting like 'search_path=%'
      )
  loop
    execute format(
      'alter function %I.%I(%s) set search_path = public, extensions, pg_temp',
      function_record.schema_name,
      function_record.function_name,
      function_record.identity_arguments
    );
  end loop;
end
$$;
