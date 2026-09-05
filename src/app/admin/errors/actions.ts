"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { isUuid, requiredText } from "@/lib/validation";

export async function updateErrorStatus(formData: FormData) {
  const { supabase, user } = await requirePlatformAdmin();
  const id = requiredText(formData.get("error_id"), 40);
  const status = requiredText(formData.get("status"), 20);
  const returnTo = requiredText(formData.get("return_to"), 500);
  if (!isUuid(id) || !["open", "acknowledged", "resolved"].includes(status)) redirect("/admin/errors?error=invalid");

  const { error } = await supabase.from("app_error_events").update({
    status,
    resolved_at: status === "resolved" ? new Date().toISOString() : null,
    resolved_by: status === "resolved" ? user.id : null,
  }).eq("id", id);
  if (error) redirect("/admin/errors?error=save");
  revalidatePath("/admin/errors");
  redirect(returnTo.startsWith("/admin/errors") ? returnTo : "/admin/errors");
}
