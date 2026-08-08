"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { isUuid, requiredText } from "@/lib/validation";

export async function retryNotification(formData: FormData) {
  const { supabase } = await requirePlatformAdmin();
  const id = requiredText(formData.get("notification_id"), 40);
  if (!isUuid(id)) redirect("/admin/operations?error=invalid");
  const { error } = await supabase.from("notification_outbox").update({ status: "pending", next_attempt_at: new Date().toISOString(), last_error: null }).eq("id", id).in("status", ["failed", "processing"]);
  if (error) redirect("/admin/operations?error=save");
  revalidatePath("/admin/operations");
  redirect("/admin/operations?saved=retry");
}

export async function reviewPrivacyRequest(formData: FormData) {
  const { supabase } = await requirePlatformAdmin();
  const id = requiredText(formData.get("request_id"), 40);
  const decision = requiredText(formData.get("decision"), 20);
  if (!isUuid(id) || !["verified", "rejected"].includes(decision)) redirect("/admin/operations?error=invalid");
  const { error } = await supabase.from("privacy_requests").update({ status: decision, notes: requiredText(formData.get("notes"), 500) || null }).eq("id", id).eq("status", "requested");
  if (error) redirect("/admin/operations?error=save");
  revalidatePath("/admin/operations");
  redirect("/admin/operations?saved=privacy");
}
