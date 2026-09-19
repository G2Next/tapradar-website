import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { deliverEmailJob, type EmailJob } from "@/lib/email-delivery";
import { recordSystemEvent } from "@/lib/system-events";

export const runtime = "nodejs";
export const maxDuration = 60;

function authorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  return Boolean(secret && request.headers.get("authorization") === `Bearer ${secret}`);
}

export async function POST(request: Request) {
  if (!authorized(request)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) return NextResponse.json({ error: "email_not_configured" }, { status: 503 });
  const admin = createAdminClient();
  const { data: settings, error: settingsError } = await admin.from("email_settings").select("test_mode,test_recipient").eq("id", true).single();
  if (settingsError || !settings || (settings.test_mode && !settings.test_recipient)) return NextResponse.json({ error: "email_settings_required" }, { status: 503 });
  const { data: jobs, error } = await admin.rpc("claim_notifications", { batch_size: 5 });
  if (error) return NextResponse.json({ error: "queue_unavailable" }, { status: 503 });
  let sent = 0;
  let failed = 0;
  for (const job of jobs ?? []) {
    try {
      const outcome = await deliverEmailJob(admin, job as EmailJob, settings, apiKey, from);
      if (outcome === "sent") sent += 1;
    } catch (sendError) {
      const message = sendError instanceof Error ? sendError.message : "Unknown email error";
      const delayMinutes = Math.min(2 ** Number(job.attempts ?? 1), 360);
      await admin.from("notification_outbox").update({ status: "failed", last_error: message.slice(0, 1000), next_attempt_at: new Date(Date.now() + delayMinutes * 60_000).toISOString() }).eq("id", job.id);
      await recordSystemEvent({ severity: "error", source: "notification-worker", message, organizationId: job.organization_id, metadata: { notification_id: job.id, template: job.template } });
      failed += 1;
    }
  }
  const { data: cleanup } = await admin.rpc("cleanup_operational_data");
  return NextResponse.json({ processed: (jobs ?? []).length, sent, failed, cleanup });
}

// Vercel Cron sends GET; both entrypoints require the server-only CRON_SECRET.
export const GET = POST;
