"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { requiredText } from "@/lib/validation";

export async function updateInvoiceSettings(formData: FormData) {
  const { supabase } = await requirePlatformAdmin(); const color = requiredText(formData.get("accent_color"), 7); const position = requiredText(formData.get("logo_position"), 10); const days = Number(formData.get("payment_terms_days"));
  if (!/^#[0-9a-f]{6}$/i.test(color) || !["left", "center", "right"].includes(position) || !Number.isInteger(days) || days < 0 || days > 365) redirect("/admin/billing?error=settings");
  const payload: Record<string, string | number | null> = { company_name: requiredText(formData.get("company_name"), 120), legal_name: requiredText(formData.get("legal_name"), 160) || null, slogan: requiredText(formData.get("slogan"), 200) || null, address: requiredText(formData.get("address"), 160) || null, postal_code: requiredText(formData.get("postal_code"), 20) || null, city: requiredText(formData.get("city"), 100) || null, country_code: requiredText(formData.get("country_code"), 2).toUpperCase(), email: requiredText(formData.get("email"), 254) || null, phone: requiredText(formData.get("phone"), 50) || null, website: requiredText(formData.get("website"), 200) || null, registration_number: requiredText(formData.get("registration_number"), 100) || null, tax_id: requiredText(formData.get("tax_id"), 100) || null, iban: requiredText(formData.get("iban"), 60) || null, bic: requiredText(formData.get("bic"), 30) || null, bank_name: requiredText(formData.get("bank_name"), 120) || null, logo_position: position, accent_color: color, footer_text: requiredText(formData.get("footer_text"), 500) || null, invoice_prefix: requiredText(formData.get("invoice_prefix"), 20) || "TR", payment_terms_days: days };
  if (!payload.company_name || !/^[A-Z]{2}$/.test(String(payload.country_code))) redirect("/admin/billing?error=settings");
  const file = formData.get("logo"); if (file instanceof File && file.size > 0) { if (file.size > 2_097_152 || !["image/png", "image/jpeg"].includes(file.type)) redirect("/admin/billing?error=logo"); const extension = file.type === "image/png" ? "png" : "jpg"; const path = `invoice/logo-${Date.now()}.${extension}`; const { error: uploadError } = await supabase.storage.from("platform-assets").upload(path, file, { contentType: file.type, upsert: false }); if (uploadError) redirect("/admin/billing?error=logo-upload"); const { data: publicUrl } = supabase.storage.from("platform-assets").getPublicUrl(path); payload.logo_path = path; payload.logo_url = publicUrl.publicUrl; }
  const { error } = await supabase.from("invoice_settings").update(payload).eq("id", true); if (error) redirect("/admin/billing?error=settings-save"); revalidatePath("/admin/billing"); revalidatePath("/dashboard/billing"); redirect("/admin/billing?saved=settings");
}
