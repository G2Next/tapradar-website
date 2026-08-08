"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { requiredText } from "@/lib/validation";

export async function updateCustomerProfile(formData: FormData) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/login?next=/app");
  const displayName = requiredText(formData.get("display_name"), 100);
  const marketingConsent = formData.get("marketing_consent") === "on";
  const { error } = await supabase.from("customer_profiles").upsert({
    user_id: data.user.id,
    display_name: displayName || null,
    marketing_consent: marketingConsent,
    marketing_consent_at: marketingConsent ? new Date().toISOString() : null,
  });
  if (error) redirect("/app?error=profile");
  revalidatePath("/app");
  redirect("/app?saved=1");
}
