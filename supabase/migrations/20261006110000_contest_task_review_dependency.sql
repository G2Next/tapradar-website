-- Keep contest tasks deployable independently from the customer-app review
-- migrations. The production project has location_reviews, while a fresh
-- website-only database may not. Dynamic lookup avoids an invalid function
-- dependency and still fails closed when automatic verification is unavailable.
create or replace function public.complete_contest_task(p_contest_id uuid,p_task_id uuid)
returns jsonb language plpgsql security definer set search_path='' as $$
declare
  v_user uuid:=auth.uid();
  v_participation public.contest_participations%rowtype;
  v_task public.contest_tasks%rowtype;
  v_contest public.contests%rowtype;
  v_prize public.contest_prizes%rowtype;
  v_done integer;
  v_total integer;
  v_verified boolean:=false;
  v_review_sql text;
  v_redeemable_id uuid;
begin
  if v_user is null then raise exception 'UNAUTHORIZED'; end if;
  select * into v_contest from public.contests where id=p_contest_id and contest_type='task_challenge' and is_active and start_at<=now() and end_at>=now();
  if not found then raise exception 'CONTEST_NOT_AVAILABLE'; end if;
  select * into v_participation from public.contest_participations where contest_id=p_contest_id and user_id=v_user;
  if not found then raise exception 'TERMS_NOT_ACCEPTED'; end if;
  select * into v_task from public.contest_tasks where id=p_task_id and contest_id=p_contest_id;
  if not found then raise exception 'TASK_NOT_FOUND'; end if;

  if v_task.task_type='rate_app' then
    if to_regclass('public.location_reviews') is null then
      raise exception 'AUTOMATIC_VERIFICATION_NOT_CONFIGURED';
    end if;
    v_review_sql:=format(
      'select exists (select 1 from %I.%I r where r.customer_id=$1 and r.organization_id=$2 and r.created_at>=$3 and not r.is_hidden)',
      'public','location_reviews'
    );
    execute v_review_sql into v_verified using v_user,v_contest.organization_id,v_participation.started_at;
    if not v_verified then raise exception 'AUTOMATIC_VERIFICATION_REQUIRED'; end if;
  elsif v_task.task_type='invite_friend' then
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

revoke all on function public.complete_contest_task(uuid,uuid) from public,anon;
grant execute on function public.complete_contest_task(uuid,uuid) to authenticated;
