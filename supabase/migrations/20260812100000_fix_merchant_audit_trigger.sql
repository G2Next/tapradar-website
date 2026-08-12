-- OLD and NEW do not have the same shape for every audited table and are not
-- both assigned for INSERT/DELETE operations. Resolve the row explicitly so
-- the audit trigger cannot abort the merchant mutation it is recording.
create or replace function public.audit_merchant_resource_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_id uuid := auth.uid();
  organization_id_value uuid;
  entity_id_value text;
  entity_name text;
  action_name text;
begin
  if actor_id is null then
    if tg_op = 'DELETE' then return old; end if;
    return new;
  end if;

  if tg_table_name = 'organizations' then
    if tg_op = 'DELETE' then
      organization_id_value := old.id;
      entity_id_value := old.id::text;
    else
      organization_id_value := new.id;
      entity_id_value := new.id::text;
    end if;
  elsif tg_op = 'DELETE' then
    organization_id_value := old.organization_id;
    entity_id_value := old.id::text;
  else
    organization_id_value := new.organization_id;
    entity_id_value := new.id::text;
  end if;

  entity_name := case tg_table_name
    when 'organizations' then 'organization'
    when 'locations' then 'location'
    when 'loyalty_cards' then 'loyalty_card'
    when 'offers' then 'offer'
    else tg_table_name
  end;
  action_name := entity_name || '.' || case tg_op
    when 'INSERT' then 'created'
    when 'UPDATE' then 'updated'
    when 'DELETE' then 'deleted'
  end;

  insert into public.audit_logs (
    actor_user_id, organization_id, action, entity_type, entity_id, metadata
  ) values (
    actor_id, organization_id_value, action_name, entity_name, entity_id_value,
    jsonb_build_object('source', 'database-trigger')
  );

  if tg_op = 'DELETE' then return old; end if;
  return new;
end;
$$;
