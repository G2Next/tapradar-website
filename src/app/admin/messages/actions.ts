"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { enqueueNotification } from "@/lib/notifications";
import { isUuid, requiredText } from "@/lib/validation";

export async function updateContactStatus(formData: FormData) {
  const { supabase } = await requirePlatformAdmin();
  const id = requiredText(formData.get("message_id"), 40);
  const status = requiredText(formData.get("status"), 20);
  if (!isUuid(id) || !["read", "closed"].includes(status)) redirect("/admin/messages?error=invalid");
  const { error } = await supabase.from("contact_messages").update({ status }).eq("id", id);
  if (error) redirect("/admin/messages?error=save");
  revalidatePath("/admin/messages");
  redirect("/admin/messages?saved=status");
}

export async function replyToContactMessage(formData: FormData) {
  const { supabase, user } = await requirePlatformAdmin();
  const id = requiredText(formData.get("message_id"), 40);
  const response = requiredText(formData.get("response"), 5000);
  if (!isUuid(id) || response.length < 2) redirect("/admin/messages?error=response");
  const { data: message } = await supabase.from("contact_messages").select("email,subject").eq("id", id).maybeSingle();
  if (!message) redirect("/admin/messages?error=missing");
  try {
    await enqueueNotification({ email: message.email, template: "contact_reply", payload: { subject: message.subject, response } });
  } catch {
    redirect("/admin/messages?error=email");
  }
  const { error } = await supabase.from("contact_messages").update({ status: "replied", admin_response: response, replied_at: new Date().toISOString(), replied_by: user.id }).eq("id", id);
  if (error) redirect("/admin/messages?error=save");
  revalidatePath("/admin/messages");
  redirect("/admin/messages?saved=reply");
}
