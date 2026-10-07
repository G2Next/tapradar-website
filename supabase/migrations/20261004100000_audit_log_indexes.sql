-- Keep the platform audit view fast as the append-only history grows.
create index if not exists audit_logs_created_idx on public.audit_logs (created_at desc);
create index if not exists audit_logs_actor_created_idx on public.audit_logs (actor_user_id, created_at desc);
create index if not exists audit_logs_action_created_idx on public.audit_logs (action, created_at desc);
create index if not exists audit_logs_entity_created_idx on public.audit_logs (entity_type, entity_id, created_at desc);

comment on table public.audit_logs is 'Append-only security and business change history. Never store credentials or message bodies in metadata.';
