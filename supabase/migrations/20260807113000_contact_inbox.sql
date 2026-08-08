create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) between 5 and 254),
  subject text not null check (char_length(subject) between 2 and 120),
  message text not null check (char_length(message) between 10 and 5000),
  status text not null default 'new' check (status in ('new', 'read', 'replied', 'closed')),
  admin_response text,
  replied_at timestamptz,
  replied_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists contact_messages_status_created_idx
on public.contact_messages (status, created_at desc);

drop trigger if exists contact_messages_set_updated_at on public.contact_messages;
create trigger contact_messages_set_updated_at before update on public.contact_messages
for each row execute function public.set_updated_at();

alter table public.contact_messages enable row level security;

drop policy if exists "Platform admins can manage contact messages" on public.contact_messages;
create policy "Platform admins can manage contact messages"
on public.contact_messages for all to authenticated
using (public.is_platform_admin())
with check (public.is_platform_admin());

revoke all on public.contact_messages from anon, authenticated;
grant select, update on public.contact_messages to authenticated;
grant all on public.contact_messages to service_role;
