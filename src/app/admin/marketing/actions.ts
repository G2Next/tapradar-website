"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { deliverApprovedMerchantPush } from "@/lib/marketing-push";
import { createAdminClient } from "@/lib/supabase/admin";
import { isUuid, requiredText } from "@/lib/validation";

export async function reviewMarketingSubmission(formData: FormData) {
  const { user, admin: reviewer } = await requirePlatformAdmin();
  if (!["super_admin", "operations"].includes(reviewer.role)) redirect("/admin/marketing?error=role");
  const resourceType = requiredText(formData.get("resource_type"), 30);
  const resourceId = requiredText(formData.get("resource_id"), 40);
  const decision = requiredText(formData.get("decision"), 20);
  const reason = requiredText(formData.get("reason"), 500);
  if (!isUuid(resourceId) || !["offer", "push_message"].includes(resourceType) || !["approve", "reject"].includes(decision) || (decision === "reject" && !reason)) redirect("/admin/marketing?error=invalid");

  const db = createAdminClient();
  const table = resourceType === "offer" ? "offers" : "push_messages";
  const { data: rawRecord } = await db.from(table).select(resourceType === "offer" ? "id,organization_id,requested_active,moderation_status" : "id,business_id,moderation_status,delivery_status").eq("id", resourceId).single();
  const record = rawRecord as unknown as { id:string; organization_id?:string; business_id?:string; requested_active?:boolean; moderation_status:string; delivery_status?:string } | null;
  if (!record || record.moderation_status !== "pending_review") redirect("/admin/marketing?error=stale");
  const organizationId = resourceType === "offer" ? record.organization_id! : record.business_id!;
  const reviewedAt = new Date().toISOString();
  const values = decision === "approve"
    ? { moderation_status: "approved", reviewed_by: user.id, reviewed_at: reviewedAt, rejection_reason: null, ...(resourceType === "offer" ? { is_active: Boolean(record.requested_active) } : { delivery_status: "queued" }) }
    : { moderation_status: "rejected", reviewed_by: user.id, reviewed_at: reviewedAt, rejection_reason: reason, ...(resourceType === "offer" ? { is_active: false } : { delivery_status: "cancelled" }) };
  const { error } = await db.from(table).update(values).eq("id", resourceId).eq("moderation_status", "pending_review");
  if (error) redirect("/admin/marketing?error=save");
  await db.from("audit_logs").insert({ actor_user_id: user.id, organization_id: organizationId, action: `admin.marketing.${decision}`, entity_type: resourceType, entity_id: resourceId, metadata: reason ? { reason } : {} });
  await db.from("admin_notifications").update({ read_at: reviewedAt }).eq("resource_type", resourceType).eq("resource_id", resourceId).is("read_at", null);

  if (resourceType === "push_message" && decision === "approve") {
    await deliverApprovedMerchantPush(resourceId).catch(async (deliveryError) => {
      await db.from("system_events").insert({ severity: "error", source: "merchant-push-approval", message: deliveryError instanceof Error ? deliveryError.message : "Push delivery failed", organization_id: organizationId, metadata: { push_message_id: resourceId } });
    });
  }
  revalidatePath("/admin/marketing"); revalidatePath("/admin"); revalidatePath("/dashboard/actions"); revalidatePath("/dashboard/vouchers");
  redirect(`/admin/marketing?saved=${decision}`);
}

export async function markAdminNotificationRead(formData: FormData) {
  const { supabase, user } = await requirePlatformAdmin();
  const id = Number(formData.get("notification_id"));
  if (Number.isInteger(id) && id > 0) await supabase.from("admin_notifications").update({ read_at: new Date().toISOString() }).eq("id", id).eq("recipient_user_id", user.id);
  revalidatePath("/admin/marketing");
}
