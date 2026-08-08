"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { enqueueNotification } from "@/lib/notifications";
import { isUuid, requiredText } from "@/lib/validation";

export async function requestPrivacyAction(formData: FormData) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login?next=/dashboard/privacy");
  const type = requiredText(formData.get("request_type"), 20);
  if (!["export", "deletion"].includes(type)) redirect("/dashboard/privacy?error=invalid");
  const executeAfter = type === "deletion" ? new Date(Date.now() + 7 * 24 * 60 * 60_000).toISOString() : null;
  const { error } = await supabase.from("privacy_requests").insert({ user_id: auth.user.id, request_type: type, execute_after: executeAfter });
  if (error) redirect(`/dashboard/privacy?error=${error.code === "23505" ? "already-open" : "save"}`);
  if (auth.user.email) await enqueueNotification({ userId: auth.user.id, email: auth.user.email, template: "privacy_request", payload: { request_type: type } });
  revalidatePath("/dashboard/privacy");
  redirect(`/dashboard/privacy?requested=${type}`);
}

export async function cancelPrivacyRequest(formData: FormData) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  const requestId = requiredText(formData.get("request_id"), 40);
  if (!auth.user || !isUuid(requestId)) redirect("/dashboard/privacy?error=invalid");
  const { error } = await supabase.from("privacy_requests").update({ status: "cancelled" }).eq("id", requestId).eq("user_id", auth.user.id).eq("status", "requested");
  if (error) redirect("/dashboard/privacy?error=cancel");
  revalidatePath("/dashboard/privacy");
  redirect("/dashboard/privacy?cancelled=1");
}
