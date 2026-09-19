"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { emailEvents, isEmailEvent, validateTemplate } from "@/lib/email-templates";
import { enqueueNotification } from "@/lib/notifications";

export type TemplateSaveState = { error?: string; success?: string; revision?: number };
const path = "/admin/email-templates";

export async function saveEmailTemplate(_: TemplateSaveState, form: FormData): Promise<TemplateSaveState> {
  const { supabase } = await requirePlatformAdmin();
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
  revalidatePath(path);
  return { success: "Vorlage gespeichert.", revision: result.data.revision };
}

export async function saveEmailSettings(form: FormData) {
  const { supabase, user } = await requirePlatformAdmin();
  const testRecipient = String(form.get("test_recipient") ?? "").trim().toLowerCase();
  if (testRecipient.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testRecipient)) redirect(`${path}?error=recipient`);
  const { data, error } = await supabase.from("email_settings").update({ test_recipient: testRecipient, test_mode: form.get("test_mode") === "on", updated_by: user.id }).eq("id", true).select("id").maybeSingle();
  if (error || !data) redirect(`${path}?error=settings`);
  revalidatePath(path);
  redirect(`${path}?saved=settings`);
}

export async function queueTemplateTest(form: FormData) {
  const { supabase, user } = await requirePlatformAdmin();
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
  revalidatePath(path);
  redirect(`${path}?saved=test`);
}
