"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function updateBusiness(formData: FormData) {
  const supabase = await createClient();
  const businessId = String(formData.get("business_id") ?? "");

  const payload = {
    name: String(formData.get("name") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    city: String(formData.get("city") ?? "").trim(),
    address: String(formData.get("address") ?? "").trim(),
    postal_code: String(formData.get("postal_code") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    website: String(formData.get("website") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    opening_hours: String(formData.get("opening_hours") ?? "").trim(),
    logo_emoji: String(formData.get("logo_emoji") ?? "🏪").trim() || "🏪",
    public_status: String(formData.get("public_status") ?? "open"),
  };

  if (!businessId || !payload.name || !payload.category) {
    redirect("/dashboard/business?error=missing-fields");
  }

  const { error } = await supabase.from("businesses").update(payload).eq("id", businessId);

  if (error) {
    redirect("/dashboard/business?error=save-failed");
  }

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/business");
  redirect("/dashboard/business?saved=1");
}
