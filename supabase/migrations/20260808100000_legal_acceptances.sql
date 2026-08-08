create table if not exists public.legal_acceptances (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  organization_id uuid references public.organizations(id) on delete cascade,
  context text not null check (context in ('account', 'subscription')),
  terms_version text not null,
  privacy_version text not null,
  withdrawal_version text,
  terms_accepted boolean not null check (terms_accepted = true),
  privacy_acknowledged boolean not null check (privacy_acknowledged = true),
  withdrawal_acknowledged boolean not null default false,
  immediate_service_requested boolean not null default false,
  evidence_hash text not null,
  metadata jsonb not null default '{}'::jsonb,
  accepted_at timestamptz not null default now(),
  check (
    (context = 'account' and organization_id is null)
    or
    (context = 'subscription' and organization_id is not null and withdrawal_acknowledged and immediate_service_requested)
  )
);

create index if not exists legal_acceptances_user_context_idx
  on public.legal_acceptances (user_id, context, accepted_at desc);
create index if not exists legal_acceptances_organization_idx
  on public.legal_acceptances (organization_id, accepted_at desc)
  where organization_id is not null;

alter table public.legal_acceptances enable row level security;

drop policy if exists "Users can read own legal acceptances" on public.legal_acceptances;
create policy "Users can read own legal acceptances"
on public.legal_acceptances for select
to authenticated
using (auth.uid() = user_id);

revoke insert, update, delete on public.legal_acceptances from anon, authenticated;
grant select on public.legal_acceptances to authenticated;

comment on table public.legal_acceptances is
  'Immutable evidence of legal-document acknowledgement. Writes are server-side only.';
