"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { encryptIntegrationSecret } from "@/lib/integration-secrets";
import { requiredText } from "@/lib/validation";

export async function savePaymentProvider(formData: FormData) {
  const { supabase } = await requirePlatformAdmin(); const provider = requiredText(formData.get("provider"), 20); const mode = requiredText(formData.get("mode"), 10); if (!["stripe", "paypal", "manual"].includes(provider) || !["test", "live"].includes(mode)) redirect("/admin/payments?error=invalid");
  const { data: existing } = await supabase.from("payment_provider_configs").select("secret_ciphertext,webhook_ciphertext").eq("provider", provider).single(); const secret = requiredText(formData.get("secret"), 500); const webhook = requiredText(formData.get("webhook_secret"), 500); const publicIdentifier = requiredText(formData.get("public_identifier"), 500) || null; const enabled = formData.get("is_enabled") === "on";
  const secretCiphertext = secret ? encryptIntegrationSecret(secret) : existing?.secret_ciphertext ?? null; const webhookCiphertext = webhook ? encryptIntegrationSecret(webhook) : existing?.webhook_ciphertext ?? null;
  if (enabled && provider === "paypal" && (!publicIdentifier || !secretCiphertext)) redirect("/admin/payments?error=paypal-credentials");
  if (enabled && provider === "stripe" && !secretCiphertext && !process.env.STRIPE_SECRET_KEY) redirect("/admin/payments?error=stripe-credentials");
  const { error } = await supabase.from("payment_provider_configs").update({ is_enabled: enabled, mode, public_identifier: publicIdentifier, secret_ciphertext: secretCiphertext, webhook_ciphertext: webhookCiphertext, status: secretCiphertext || provider === "manual" ? "configured" : "disconnected", last_error: null, config: { checkout_ready: provider === "stripe", instructions: requiredText(formData.get("instructions"), 1000) || null } }).eq("provider", provider);
  if (error) redirect("/admin/payments?error=save"); revalidatePath("/admin/payments"); redirect(`/admin/payments?saved=${provider}`);
}
