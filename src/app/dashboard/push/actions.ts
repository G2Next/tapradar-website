"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { sendReviewRequestedPush } from "@/lib/marketing-push";
import { requiredText } from "@/lib/validation";

export async function createPushMessage(formData: FormData) {
  const context = await getDashboardContext();
  if (!context.user || !context.organizationId || !["owner", "manager"].includes(context.role ?? "")) redirect("/dashboard/push?error=role");
  const title = requiredText(formData.get("title"), 50);
  const body = requiredText(formData.get("body"), 150);
  const targetType = requiredText(formData.get("target_type"), 20);
  const segmentName = requiredText(formData.get("segment_name"), 100) || null;
  if (!title || !body || !["all", "segment"].includes(targetType)) redirect("/dashboard/push?error=fields");
  const [{ data: subscription }, { data: organization }] = await Promise.all([
    context.supabase.from("subscriptions").select("plan,status").eq("organization_id", context.organizationId).in("status", ["active", "trialing"]).maybeSingle(),
    context.supabase.from("organizations").select("name,plan").eq("id", context.organizationId).single(),
  ]);
  const plan = subscription?.plan ?? organization?.plan ?? "bronze";
  if (!["gold", "platinum"].includes(plan) || (targetType === "segment" && plan !== "platinum")) redirect("/dashboard/push?error=plan");
  const { error } = await context.supabase.from("push_messages").insert({ business_id: context.organizationId, created_by: context.user.id, title, body, target_type: targetType, segment_name: targetType === "segment" ? segmentName : null });
  if (error) redirect("/dashboard/push?error=save");
  await sendReviewRequestedPush({ title, kind: "Push-Nachricht", organizationName: organization?.name ?? "Geschäft" }).catch(() => undefined);
  revalidatePath("/dashboard/push"); redirect("/dashboard/push?saved=pending");
}
