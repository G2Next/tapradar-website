-- Merchant contests: guaranteed task challenges and inventory-safe spin wheels.
create table if not exists public.contests (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  location_id uuid references public.locations(id) on delete set null,
  title text not null check (char_length(title) between 2 and 140),
  description text,
  image_url text,
  contest_type text not null check (contest_type in ('task_challenge','spin_wheel')),
  start_at timestamptz not null,
  end_at timestamptz not null,
  is_active boolean not null default false,
  terms_text text not null check (char_length(terms_text) >= 20),
  terms_version text not null default '1',
  max_plays integer check (max_plays is null or max_plays > 0),
  play_count integer not null default 0 check (play_count >= 0),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (end_at > start_at),
  check ((contest_type = 'spin_wheel' and max_plays is not null) or contest_type = 'task_challenge')
);

create table if not exists public.contest_tasks (
  id uuid primary key default gen_random_uuid(),
  contest_id uuid not null references public.contests(id) on delete cascade,
  task_type text not null check (task_type in ('follow_instagram','follow_facebook','comment_post','rate_app','invite_friend','in_app_sonstiges')),
  description text not null,
  target_link text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.contest_prizes (
  id uuid primary key default gen_random_uuid(),
  contest_id uuid not null references public.contests(id) on delete cascade,
  title text not null,
  description text,
  prize_type text not null check (prize_type in ('product','service','discount','coupon')),
  quantity_initial integer not null check (quantity_initial > 0),
  quantity_remaining integer not null check (quantity_remaining >= 0),
  units_per_win integer not null default 1 check (units_per_win > 0),
  discount_type text check (discount_type in ('fixed','percentage','free_product')),
  discount_value numeric(10,2),
  validity_days integer not null default 14 check (validity_days between 1 and 365),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  check (quantity_remaining <= quantity_initial),
  check (prize_type not in ('discount','coupon') or discount_type is not null)
);

create table if not exists public.contest_participations (
  id uuid primary key default gen_random_uuid(),
  contest_id uuid not null references public.contests(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  status text not null default 'started' check (status in ('started','completed')),
  accepted_terms_version text not null,
  accepted_terms_at timestamptz not null default now(),
  unique (contest_id, user_id)
);

create table if not exists public.contest_task_completions (
  id uuid primary key default gen_random_uuid(),
  participation_id uuid not null references public.contest_participations(id) on delete cascade,
  task_id uuid not null references public.contest_tasks(id) on delete cascade,
  completed_at timestamptz not null default now(),
  verification_type text not null check (verification_type in ('self_report','automatic')),
  unique (participation_id, task_id)
);

create table if not exists public.contest_plays (
  id uuid primary key default gen_random_uuid(),
  contest_id uuid not null references public.contests(id) on delete cascade,
  participation_id uuid not null references public.contest_participations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  prize_id uuid references public.contest_prizes(id) on delete set null,
  outcome text not null check (outcome in ('won','no_win')),
  prize_quantity integer not null default 0 check (prize_quantity >= 0),
  segment_index integer not null,
  segment_count integer not null check (segment_count > 0),
  created_at timestamptz not null default now(),
  unique (contest_id, user_id),
  unique (participation_id)
);

alter table public.customer_redeemables
  add column if not exists contest_id uuid references public.contests(id) on delete set null,
  add column if not exists contest_prize_id uuid references public.contest_prizes(id) on delete set null;
create unique index if not exists customer_redeemables_contest_prize_user_idx
  on public.customer_redeemables(user_id, contest_prize_id) where contest_prize_id is not null;

create index if not exists contests_active_period_idx on public.contests(is_active,start_at,end_at);
create index if not exists contests_organization_idx on public.contests(organization_id,created_at desc);
create index if not exists contest_tasks_contest_idx on public.contest_tasks(contest_id,sort_order);
create index if not exists contest_prizes_contest_idx on public.contest_prizes(contest_id,sort_order);
create index if not exists contest_participations_contest_idx on public.contest_participations(contest_id,status);

alter table public.contests enable row level security;
alter table public.contest_tasks enable row level security;
alter table public.contest_prizes enable row level security;
alter table public.contest_participations enable row level security;
alter table public.contest_task_completions enable row level security;
alter table public.contest_plays enable row level security;

create policy "Published contests are readable" on public.contests for select to authenticated
using (is_active and start_at <= now() and end_at >= now() and exists (
  select 1 from public.organizations o where o.id=organization_id and o.is_active and o.public_status='open'
) or public.current_organization_role(organization_id) is not null);
create policy "Managers create contests" on public.contests for insert to authenticated
with check (public.current_organization_role(organization_id) in ('owner','manager') and created_by=auth.uid());
create policy "Managers update contests" on public.contests for update to authenticated
using (public.current_organization_role(organization_id) in ('owner','manager'))
with check (public.current_organization_role(organization_id) in ('owner','manager'));
create policy "Managers delete contests" on public.contests for delete to authenticated
using (public.current_organization_role(organization_id) in ('owner','manager'));

create policy "Contest tasks are readable" on public.contest_tasks for select to authenticated
using (exists(select 1 from public.contests c where c.id=contest_id));
create policy "Managers manage contest tasks" on public.contest_tasks for all to authenticated
using (exists(select 1 from public.contests c where c.id=contest_id and public.current_organization_role(c.organization_id) in ('owner','manager')))
with check (exists(select 1 from public.contests c where c.id=contest_id and public.current_organization_role(c.organization_id) in ('owner','manager')));
create policy "Contest prizes are readable" on public.contest_prizes for select to authenticated
using (exists(select 1 from public.contests c where c.id=contest_id));
create policy "Managers manage contest prizes" on public.contest_prizes for all to authenticated
using (exists(select 1 from public.contests c where c.id=contest_id and public.current_organization_role(c.organization_id) in ('owner','manager')))
with check (exists(select 1 from public.contests c where c.id=contest_id and public.current_organization_role(c.organization_id) in ('owner','manager')));

create policy "Customers read own participations" on public.contest_participations for select to authenticated using (user_id=auth.uid());
create policy "Managers read contest participation totals" on public.contest_participations for select to authenticated
using (exists(select 1 from public.contests c where c.id=contest_id and public.current_organization_role(c.organization_id) is not null));
create policy "Customers read own completions" on public.contest_task_completions for select to authenticated
using (exists(select 1 from public.contest_participations p where p.id=participation_id and p.user_id=auth.uid()));
create policy "Customers read own plays" on public.contest_plays for select to authenticated using (user_id=auth.uid());

grant select,insert,update,delete on public.contests,public.contest_tasks,public.contest_prizes to authenticated;
grant select on public.contest_participations,public.contest_task_completions,public.contest_plays to authenticated;
grant all on public.contests,public.contest_tasks,public.contest_prizes,public.contest_participations,public.contest_task_completions,public.contest_plays to service_role;

create or replace function public.start_contest_participation(p_contest_id uuid,p_terms_version text)
returns public.contest_participations language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid(); v_contest public.contests%rowtype; v_result public.contest_participations;
begin
  if v_user is null then raise exception 'UNAUTHORIZED'; end if;
  select * into v_contest from public.contests where id=p_contest_id and is_active and start_at<=now() and end_at>=now();
  if not found then raise exception 'CONTEST_NOT_AVAILABLE'; end if;
  if p_terms_version is distinct from v_contest.terms_version then raise exception 'TERMS_VERSION_CHANGED'; end if;
  if v_contest.contest_type='spin_wheel' and v_contest.play_count>=v_contest.max_plays then raise exception 'CONTEST_SOLD_OUT'; end if;
  insert into public.contest_participations(contest_id,user_id,accepted_terms_version)
  values(p_contest_id,v_user,p_terms_version)
  on conflict(contest_id,user_id) do update set accepted_terms_version=excluded.accepted_terms_version,accepted_terms_at=now()
  returning * into v_result;
  return v_result;
end $$;

create or replace function public.play_contest(p_contest_id uuid)
returns jsonb language plpgsql security definer set search_path='' as $$
declare
  v_user uuid:=auth.uid(); v_contest public.contests%rowtype; v_participation public.contest_participations%rowtype;
  v_prize public.contest_prizes%rowtype; v_play public.contest_plays%rowtype;
  v_remaining_slots integer; v_available_awards integer; v_ticket integer; v_cursor integer:=0;
  v_segment_count integer; v_segment_index integer; v_redeemable_id uuid;
begin
  if v_user is null then raise exception 'UNAUTHORIZED'; end if;
  select * into v_contest from public.contests where id=p_contest_id for update;
  if not found or v_contest.contest_type<>'spin_wheel' or not v_contest.is_active or v_contest.start_at>now() or v_contest.end_at<now() then raise exception 'CONTEST_NOT_AVAILABLE'; end if;
  select * into v_participation from public.contest_participations where contest_id=p_contest_id and user_id=v_user;
  if not found then raise exception 'TERMS_NOT_ACCEPTED'; end if;
  select * into v_play from public.contest_plays where contest_id=p_contest_id and user_id=v_user;
  if found then
    select * into v_prize from public.contest_prizes where id=v_play.prize_id;
    return jsonb_build_object('play_id',v_play.id,'segment_index',v_play.segment_index,'segment_count',v_play.segment_count,'outcome',v_play.outcome,'prize_title',v_prize.title,'prize_quantity',v_play.prize_quantity,'redeemable_id',(select id from public.customer_redeemables where user_id=v_user and contest_prize_id=v_play.prize_id));
  end if;
  v_remaining_slots:=v_contest.max_plays-v_contest.play_count;
  if v_remaining_slots<=0 then raise exception 'CONTEST_SOLD_OUT'; end if;
  select coalesce(sum(quantity_remaining/units_per_win),0)::integer,count(*)+1 into v_available_awards,v_segment_count from public.contest_prizes where contest_id=p_contest_id and quantity_remaining>=units_per_win;
  v_ticket:=floor(random()*v_remaining_slots)::integer+1;
  if v_ticket<=least(v_available_awards,v_remaining_slots) then
    for v_prize in select * from public.contest_prizes where contest_id=p_contest_id and quantity_remaining>=units_per_win order by sort_order,id for update loop
      v_cursor:=v_cursor+(v_prize.quantity_remaining/v_prize.units_per_win);
      if v_ticket<=v_cursor then exit; end if;
      v_prize:=null;
    end loop;
  else v_prize:=null; end if;
  v_segment_index:=floor(random()*greatest(v_segment_count,1))::integer;
  insert into public.contest_plays(contest_id,participation_id,user_id,prize_id,outcome,prize_quantity,segment_index,segment_count)
  values(p_contest_id,v_participation.id,v_user,v_prize.id,case when v_prize.id is null then 'no_win' else 'won' end,coalesce(v_prize.units_per_win,0),v_segment_index,greatest(v_segment_count,1)) returning * into v_play;
  update public.contests set play_count=play_count+1,updated_at=now() where id=p_contest_id;
  if v_prize.id is not null then
    update public.contest_prizes set quantity_remaining=quantity_remaining-units_per_win where id=v_prize.id;
    insert into public.customer_redeemables(user_id,kind,organization_id,location_id,title,description,conditions,discount_type,discount_value,starts_at,expires_at,contest_id,contest_prize_id)
    values(v_user,case when v_prize.prize_type in ('discount','coupon') then 'coupon' else 'promotion' end,v_contest.organization_id,v_contest.location_id,v_prize.title,v_prize.description,v_contest.terms_text,v_prize.discount_type,v_prize.discount_value,now(),now()+make_interval(days=>v_prize.validity_days),v_contest.id,v_prize.id)
    returning id into v_redeemable_id;
  end if;
  update public.contest_participations set status='completed',completed_at=now() where id=v_participation.id;
  return jsonb_build_object('play_id',v_play.id,'segment_index',v_play.segment_index,'segment_count',v_play.segment_count,'outcome',v_play.outcome,'prize_title',v_prize.title,'prize_quantity',coalesce(v_prize.units_per_win,0),'redeemable_id',v_redeemable_id);
end $$;

create or replace function public.complete_contest_task(p_contest_id uuid,p_task_id uuid)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid(); v_participation public.contest_participations%rowtype; v_task public.contest_tasks%rowtype; v_contest public.contests%rowtype; v_prize public.contest_prizes%rowtype; v_done integer; v_total integer; v_redeemable_id uuid;
begin
  select * into v_contest from public.contests where id=p_contest_id and contest_type='task_challenge' and is_active and start_at<=now() and end_at>=now();
  if not found then raise exception 'CONTEST_NOT_AVAILABLE'; end if;
  select * into v_participation from public.contest_participations where contest_id=p_contest_id and user_id=v_user;
  if not found then raise exception 'TERMS_NOT_ACCEPTED'; end if;
  select * into v_task from public.contest_tasks where id=p_task_id and contest_id=p_contest_id;
  if not found then raise exception 'TASK_NOT_FOUND'; end if;
  if v_task.task_type='rate_app' and not exists (
    select 1 from public.location_reviews r
    where r.customer_id=v_user and r.organization_id=v_contest.organization_id
      and r.created_at>=v_participation.started_at and not r.is_hidden
  ) then raise exception 'AUTOMATIC_VERIFICATION_REQUIRED';
  elsif v_task.task_type='invite_friend' then
    -- Referral verification is enabled only when a trusted referral event table
    -- exists. Never accept a customer-side self report for this task type.
    raise exception 'REFERRAL_VERIFICATION_NOT_CONFIGURED';
  end if;
  insert into public.contest_task_completions(participation_id,task_id,verification_type)
  values(v_participation.id,p_task_id,case when v_task.task_type='rate_app' then 'automatic' else 'self_report' end)
  on conflict do nothing;
  select count(*) into v_total from public.contest_tasks where contest_id=p_contest_id;
  select count(*) into v_done from public.contest_task_completions x join public.contest_tasks t on t.id=x.task_id where x.participation_id=v_participation.id and t.contest_id=p_contest_id;
  if v_total>0 and v_done=v_total and v_participation.status<>'completed' then
    select * into v_prize from public.contest_prizes where contest_id=p_contest_id and quantity_remaining>=units_per_win order by sort_order,id limit 1 for update;
    if not found then raise exception 'CONTEST_SOLD_OUT'; end if;
    update public.contest_prizes set quantity_remaining=quantity_remaining-units_per_win where id=v_prize.id;
    insert into public.customer_redeemables(user_id,kind,organization_id,location_id,title,description,conditions,discount_type,discount_value,starts_at,expires_at,contest_id,contest_prize_id)
    values(v_user,case when v_prize.prize_type in ('discount','coupon') then 'coupon' else 'promotion' end,v_contest.organization_id,v_contest.location_id,v_prize.title,v_prize.description,v_contest.terms_text,v_prize.discount_type,v_prize.discount_value,now(),now()+make_interval(days=>v_prize.validity_days),v_contest.id,v_prize.id) returning id into v_redeemable_id;
    update public.contest_participations set status='completed',completed_at=now() where id=v_participation.id;
  end if;
  return jsonb_build_object('completed',v_total>0 and v_done=v_total,'progress_completed',v_done,'progress_total',v_total,'redeemable_id',v_redeemable_id);
end $$;

revoke all on function public.start_contest_participation(uuid,text),public.play_contest(uuid),public.complete_contest_task(uuid,uuid) from public,anon;
grant execute on function public.start_contest_participation(uuid,text),public.play_contest(uuid),public.complete_contest_task(uuid,uuid) to authenticated;

create or replace view public.customer_contest_overview with (security_invoker=true) as
select c.id,c.organization_id as business_id,o.name as business_name,coalesce(l.address,o.address) as business_address,c.title,c.description,c.image_url,c.contest_type,c.start_at,c.end_at,
  coalesce((select string_agg(p.title,', ' order by p.sort_order) from public.contest_prizes p where p.contest_id=c.id),'Belohnung') as prize_summary,
  c.contest_type='task_challenge' as guaranteed_reward,
  case when c.contest_type='spin_wheel' then greatest(c.max_plays-c.play_count,0) else (select coalesce(sum(p.quantity_remaining/p.units_per_win),0)::integer from public.contest_prizes p where p.contest_id=c.id) end as remaining_entries,
  coalesce((select count(*)::integer from public.contest_task_completions x join public.contest_tasks t on t.id=x.task_id where x.participation_id=cp.id),0) as progress_completed,
  case when c.contest_type='task_challenge' then (select count(*)::integer from public.contest_tasks t where t.contest_id=c.id) else 1 end as progress_total,
  case when cp.status='completed' then 'completed' when cp.id is not null then 'joined' when c.end_at<now() then 'ended' when c.contest_type='spin_wheel' and c.play_count>=c.max_plays then 'sold_out' else 'available' end as participation_status,
  c.terms_version,c.terms_text
from public.contests c join public.organizations o on o.id=c.organization_id left join public.locations l on l.id=c.location_id left join public.contest_participations cp on cp.contest_id=c.id and cp.user_id=auth.uid()
where c.is_active and c.start_at<=now() and c.end_at>=now() and o.is_active and o.public_status='open';
grant select on public.customer_contest_overview to authenticated;
