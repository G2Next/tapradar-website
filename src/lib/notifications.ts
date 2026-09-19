import { createAdminClient } from "@/lib/supabase/admin";
import { emailLocale, type EmailEvent } from "@/lib/email-templates";

export type NotificationTemplate = EmailEvent;

export async function enqueueNotification(input: { organizationId?: string | null; userId?: string | null; email: string; template: NotificationTemplate; locale?: string | null; payload?: Record<string, unknown>; forceTest?: boolean }) {
  const { error } = await createAdminClient().from("notification_outbox").insert({
    organization_id: input.organizationId ?? null,
    user_id: input.userId ?? null,
    recipient_email: input.email.trim().toLowerCase(),
    template: input.template,
    // A missing locale is resolved by the database using the recipient's settings.
    locale: input.locale == null ? null : emailLocale(input.locale),
    payload: input.payload ?? {},
    force_test: input.forceTest ?? false,
  });
  if (error) throw new Error(`Notification could not be queued: ${error.message}`);
}
