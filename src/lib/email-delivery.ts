import { emailLocale, isEmailEvent, renderEmail, type EmailTemplate } from "@/lib/email-templates";
import { createAdminClient } from "@/lib/supabase/admin";

export type DeliverySnapshot = {
  from: string; to: string; subject: string; text: string; html: string;
  prepared_at: string; is_test: boolean; locale: "de" | "en"; template_revision: number;
};
export type EmailJob = {
  id: string; template: string; recipient_email: string; locale: string | null;
  payload: Record<string, unknown>; force_test: boolean; delivery_snapshot: DeliverySnapshot | null;
  created_at: string; attempts: number;
};
export type EmailSettings = { test_mode: boolean; test_recipient: string | null };

export function makeDeliverySnapshot(job: EmailJob, template: EmailTemplate, settings: EmailSettings, from: string): DeliverySnapshot {
  const isTest = settings.test_mode || job.force_test;
  const to = isTest ? settings.test_recipient : job.recipient_email;
  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) throw new Error(isTest ? "Test recipient is not configured" : "Invalid recipient");
  const message = renderEmail(template, job.payload);
  return { ...message, prepared_at: new Date().toISOString(), subject: `${isTest ? "[TEST] " : ""}${message.subject}`, from, to, is_test: isTest, locale: template.locale, template_revision: template.revision };
}

export async function deliverEmailJob(admin: ReturnType<typeof createAdminClient>, job: EmailJob, settings: EmailSettings, apiKey: string, from: string) {
  let snapshot = job.delivery_snapshot;
  // Resend only retains idempotency keys for 24 hours. Do not risk a duplicate
  // after an ambiguous send outside that window; leave it for manual review.
  if (snapshot && Date.now() - new Date(snapshot.prepared_at).getTime() > 23 * 60 * 60_000) throw new Error("Delivery requires review: idempotency window exceeded");
  if (snapshot && settings.test_mode && !snapshot.is_test) throw new Error("Live retry paused while test mode is enabled");
  if (!snapshot) {
    if (!isEmailEvent(job.template)) throw new Error("Unknown email event");
    const locale = job.locale == null
      ? await admin.rpc("resolve_email_locale", { target_email: job.recipient_email }).then(({ data, error }) => { if (error) throw new Error("Recipient language lookup failed"); return emailLocale(data); })
      : emailLocale(job.locale);
    const { data: template, error } = await admin.from("email_templates").select("event_id,locale,subject,body,enabled,revision").eq("event_id", job.template).eq("locale", locale).single();
    if (error || !template) throw new Error("Email template unavailable");
    if (!template.enabled) {
      const { error: cancelError } = await admin.from("notification_outbox").update({ status: "cancelled", last_error: "Template disabled" }).eq("id", job.id);
      if (cancelError) throw new Error("Could not record disabled template");
      return "cancelled" as const;
    }
    snapshot = makeDeliverySnapshot(job, template as EmailTemplate, settings, from);
    // Freeze recipient, mode and content BEFORE the provider request. Every retry
    // uses exactly the same body with the same idempotency key.
    const { error: snapshotError } = await admin.from("notification_outbox").update({ delivery_snapshot: snapshot }).eq("id", job.id);
    if (snapshotError) throw new Error("Could not persist delivery snapshot");
  }
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `tapradar-${job.id}` },
    body: JSON.stringify({ from: snapshot.from, to: [snapshot.to], subject: snapshot.subject, text: snapshot.text, html: snapshot.html }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`Email provider returned ${response.status}`);
  const result = await response.json() as { id?: string };
  if (!result.id) throw new Error("Email provider returned no message ID");
  const { error } = await admin.from("notification_outbox").update({ status: "sent", provider_message_id: result.id, sent_at: new Date().toISOString(), last_error: null }).eq("id", job.id);
  if (error) throw new Error("Provider accepted email, but delivery log could not be saved");
  return "sent" as const;
}
