"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { encryptIntegrationSecret } from "@/lib/integration-secrets";
import { requiredText } from "@/lib/validation";

export async function saveCaptchaSettings(formData: FormData) {
  const { supabase, user } = await requirePlatformAdmin("captcha.manage");
  const mode = requiredText(formData.get("mode"), 2);
  const theme = requiredText(formData.get("v2_theme"), 5);
  const threshold = Number(formData.get("score_threshold"));
  if (!["v2", "v3"].includes(mode) || !["light", "dark"].includes(theme) || !Number.isFinite(threshold) || threshold < 0 || threshold > 1) {
    redirect("/admin/captcha?error=invalid");
  }

  const { data: existing } = await supabase.from("captcha_settings").select("v3_secret_ciphertext,v2_secret_ciphertext").eq("id", true).single();
  const v3Secret = requiredText(formData.get("v3_secret"), 1000);
  const v2Secret = requiredText(formData.get("v2_secret"), 1000);
  const payload = {
    mode,
    v3_site_key: requiredText(formData.get("v3_site_key"), 500) || null,
    v3_secret_ciphertext: v3Secret ? encryptIntegrationSecret(v3Secret) : existing?.v3_secret_ciphertext ?? null,
    v2_site_key: requiredText(formData.get("v2_site_key"), 500) || null,
    v2_secret_ciphertext: v2Secret ? encryptIntegrationSecret(v2Secret) : existing?.v2_secret_ciphertext ?? null,
    score_threshold: threshold,
    v2_theme: theme,
    protect_contact: formData.get("protect_contact") === "on",
    protect_registration: formData.get("protect_registration") === "on",
    protect_login: formData.get("protect_login") === "on",
    log_rejected: formData.get("log_rejected") === "on",
    updated_by: user.id,
  };

  const selectedSiteKey = mode === "v2" ? payload.v2_site_key : payload.v3_site_key;
  const selectedSecret = mode === "v2" ? payload.v2_secret_ciphertext : payload.v3_secret_ciphertext;
  const protectionEnabled = payload.protect_contact || payload.protect_registration || payload.protect_login;
  const environmentReady = mode === "v2"
    ? Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY && process.env.RECAPTCHA_V2_SECRET_KEY)
    : Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.RECAPTCHA_SECRET_KEY);
  if (protectionEnabled && ((!selectedSiteKey || !selectedSecret) && !environmentReady)) redirect("/admin/captcha?error=credentials");

  const { error } = await supabase.from("captcha_settings").update(payload).eq("id", true);
  if (error) redirect("/admin/captcha?error=save");
  revalidatePath("/admin/captcha");
  revalidatePath("/kontakt");
  revalidatePath("/login");
  redirect("/admin/captcha?saved=1");
}
