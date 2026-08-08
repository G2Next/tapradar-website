import { createAdminClient } from "@/lib/supabase/admin";

export type NotificationTemplate = "team_invitation" | "review_submitted" | "organization_approved" | "organization_rejected" | "privacy_request" | "contact_reply";

export async function enqueueNotification(input: { organizationId?: string | null; userId?: string | null; email: string; template: NotificationTemplate; payload?: Record<string, unknown> }) {
  const { error } = await createAdminClient().from("notification_outbox").insert({
    organization_id: input.organizationId ?? null,
    user_id: input.userId ?? null,
    recipient_email: input.email.trim().toLowerCase(),
    template: input.template,
    payload: input.payload ?? {},
  });
  if (error) throw new Error(`Notification could not be queued: ${error.message}`);
}

function escapeHtml(value: unknown) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

export function renderNotification(template: NotificationTemplate, payload: Record<string, unknown>) {
  const organization = escapeHtml(payload.organization_name || "TapRadar Geschäft");
  const reason = escapeHtml(payload.reason);
  const link = escapeHtml(payload.link);
  const response = escapeHtml(payload.response).replace(/\n/g, "<br>");
  const content: Record<NotificationTemplate, { subject: string; body: string }> = {
    team_invitation: { subject: `Einladung zu ${organization}`, body: `Du wurdest zum TapRadar-Team von <strong>${organization}</strong> eingeladen.<br><a href="${link}">Einladung annehmen</a>` },
    review_submitted: { subject: `${organization} wurde zur Prüfung eingereicht`, body: `<strong>${organization}</strong> wurde erfolgreich zur TapRadar-Prüfung eingereicht.` },
    organization_approved: { subject: `${organization} ist jetzt auf TapRadar veröffentlicht`, body: `<strong>${organization}</strong> wurde freigegeben und ist jetzt in der App sichtbar.` },
    organization_rejected: { subject: `Rückfrage zu ${organization}`, body: `Bitte überarbeite die Angaben für <strong>${organization}</strong>.<br>Begründung: ${reason}` },
    privacy_request: { subject: "Deine Datenschutzanfrage bei TapRadar", body: "Wir haben deine Datenschutzanfrage erhalten und bearbeiten sie entsprechend der gesetzlichen Fristen." },
    contact_reply: { subject: `Antwort von TapRadar: ${escapeHtml(payload.subject)}`, body: `Vielen Dank für deine Nachricht.<br><br>${response}` },
  };
  return { ...content[template], html: `<div style="font-family:Arial,sans-serif;line-height:1.6"><h1>TapRadar</h1><p>${content[template].body}</p></div>` };
}
