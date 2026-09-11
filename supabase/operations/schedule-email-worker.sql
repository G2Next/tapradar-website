-- Run once in Supabase AFTER the new website worker has been deployed.
-- Store the same CRON_SECRET as Vercel in Supabase Vault under the name
-- "tapradar_email_cron_secret". Never commit the secret to this file.
-- Without that Vault secret, this job makes no HTTP requests.
-- Uses Supabase scheduling so it also works with the current Vercel Hobby plan.
create extension if not exists pg_cron;
create extension if not exists pg_net with schema extensions;

select cron.schedule(
  'tapradar-email-worker',
  '* * * * *',
  $worker$
    select net.http_post(
      url := 'https://www.tapradar.app/api/internal/notifications',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || decrypted_secret
      ),
      body := '{}'::jsonb,
      timeout_milliseconds := 60000
    )
    from vault.decrypted_secrets
    where name = 'tapradar_email_cron_secret'
      and length(decrypted_secret) >= 32;
  $worker$
);

-- Pause before a future incompatible worker deployment:
-- update cron.job set active = false where jobname = 'tapradar-email-worker';
-- Resume after deployment:
-- update cron.job set active = true where jobname = 'tapradar-email-worker';
