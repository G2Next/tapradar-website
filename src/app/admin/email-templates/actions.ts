"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { recordAdminAudit } from "@/lib/admin-audit";
import { emailEvents, isEmailEvent, validateTemplate } from "@/lib/email-templates";
import { enqueueNotification } from "@/lib/notifications";

export type TemplateSaveState = { error?: string; success?: string; revision?: number };
const path = "/admin/email-templates";

export async function saveEmailTemplate(_: TemplateSaveState, form: FormData): Promise<TemplateSaveState> {
  const { supabase, user } = await requirePlatformAdmin("email_templates.manage");
  const event = String(form.get("event_id") ?? "");
  const locale = String(form.get("locale") ?? "");
  const subject = String(form.get("subject") ?? "").trim();
  const body = String(form.get("body") ?? "").trim();
  const revision = Number(form.get("revision"));
  if (!isEmailEvent(event) || !["de", "en"].includes(locale) || !Number.isInteger(revision) || revision < 1) return { error: "Ungültige Vorlage." };
  const error = validateTemplate(event, subject, body);
  if (error) return { error };
  const result = await supabase.from("email_templates").update({ subject, body, enabled: form.get("enabled") === "on" }).eq("event_id", event).eq("locale", locale).eq("revision", revision).select("revision").maybeSingle();
  if (result.error) return { error: "Speichern fehlgeschlagen. Deine Eingaben bleiben erhalten." };
  if (!result.data) return { error: "Diese Vorlage wurde inzwischen geändert. Bitte lade die Seite neu und vergleiche deine Änderungen." };
  await recordAdminAudit(supabase,{actorUserId:user.id,action:"admin.system.email_template.updated",entityType:"email_template",entityId:`${event}:${locale}`,metadata:{event,locale,enabled:form.get("enabled")==="on",revision}});
  revalidatePath(path);
  return { success: "Vorlage gespeichert.", revision: result.data.revision };
}

export async function saveEmailSettings(form: FormData) {
  const { supabase, user } = await requirePlatformAdmin("email_templates.manage");
  const testRecipient = String(form.get("test_recipient") ?? "").trim().toLowerCase();
  if (testRecipient.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testRecipient)) redirect(`${path}?error=recipient`);
  const { data, error } = await supabase.from("email_settings").update({ test_recipient: testRecipient, test_mode: form.get("test_mode") === "on", updated_by: user.id }).eq("id", true).select("id").maybeSingle();
  if (error || !data) redirect(`${path}?error=settings`);
  await recordAdminAudit(supabase,{actorUserId:user.id,action:"admin.system.email_settings.updated",entityType:"email_settings",entityId:"global",metadata:{test_mode:form.get("test_mode")==="on",test_recipient_configured:Boolean(testRecipient)}});
  revalidatePath(path);
  redirect(`${path}?saved=settings`);
}

export async function queueTemplateTest(form: FormData) {
  const { supabase, user } = await requirePlatformAdmin("email_templates.manage");
  const event = String(form.get("event_id") ?? "");
  const locale = String(form.get("locale") ?? "");
  if (!isEmailEvent(event) || !["de", "en"].includes(locale)) redirect(`${path}?error=template`);
  const { data: settings, error } = await supabase.from("email_settings").select("test_recipient").eq("id", true).single();
  if (error || !settings?.test_recipient) redirect(`${path}?error=recipient`);
  try {
    await enqueueNotification({ userId: user.id, email: settings.test_recipient, template: event, locale, payload: emailEvents[event].sample, forceTest: true });
  } catch {
    redirect(`${path}?error=test`);
  }
  await recordAdminAudit(supabase,{actorUserId:user.id,action:"admin.system.email_test.queued",entityType:"email_template",entityId:`${event}:${locale}`,metadata:{event,locale}});
  revalidatePath(path);
  redirect(`${path}?saved=test`);
}
