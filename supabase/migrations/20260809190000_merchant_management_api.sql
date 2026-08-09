-- Transactional audit records for merchant-managed resources. Because these
-- triggers execute in the same transaction as the write, a successful API
-- mutation cannot exist without its audit entry.
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
    return case when tg_op = 'DELETE' then old else new end;
  end if;

  organization_id_value := case
    when tg_table_name = 'organizations' then coalesce(new.id, old.id)
    else coalesce(new.organization_id, old.organization_id)
  end;
  entity_id_value := coalesce(new.id, old.id)::text;
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

  return case when tg_op = 'DELETE' then old else new end;
end;
$$;

drop trigger if exists organizations_merchant_audit on public.organizations;
create trigger organizations_merchant_audit
after update on public.organizations
for each row execute function public.audit_merchant_resource_change();

drop trigger if exists locations_merchant_audit on public.locations;
create trigger locations_merchant_audit
after insert or update or delete on public.locations
for each row execute function public.audit_merchant_resource_change();

drop trigger if exists loyalty_cards_merchant_audit on public.loyalty_cards;
create trigger loyalty_cards_merchant_audit
after insert or update or delete on public.loyalty_cards
for each row execute function public.audit_merchant_resource_change();

drop trigger if exists offers_merchant_audit on public.offers;
create trigger offers_merchant_audit
after insert or update or delete on public.offers
for each row execute function public.audit_merchant_resource_change();

-- Server-only replay store for mobile retries. No client policy is created;
-- only the service role used by the API can access these rows.
create table public.merchant_api_idempotency (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  organization_id uuid not null references public.organizations(id) on delete cascade,
  idempotency_key uuid not null,
  method text not null check (method in ('POST', 'PATCH', 'DELETE')),
  request_path text not null,
  request_hash text not null,
  response_status integer check (response_status between 200 and 299),
  response_body jsonb,
  locked_at timestamptz not null default now(),
  completed_at timestamptz,
  expires_at timestamptz not null default (now() + interval '24 hours'),
  unique (user_id, organization_id, idempotency_key)
);

create index merchant_api_idempotency_expiry_idx
  on public.merchant_api_idempotency (expires_at);

alter table public.merchant_api_idempotency enable row level security;
revoke all on public.merchant_api_idempotency from public, anon, authenticated;
grant all on public.merchant_api_idempotency to service_role;
