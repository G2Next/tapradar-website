alter table public.notification_outbox
drop constraint if exists notification_outbox_template_check;

alter table public.notification_outbox
add constraint notification_outbox_template_check
check (template in ('team_invitation', 'review_submitted', 'organization_approved', 'organization_rejected', 'privacy_request', 'contact_reply'));
