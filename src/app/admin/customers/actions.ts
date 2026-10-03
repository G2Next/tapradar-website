"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { isUuid, requiredText } from "@/lib/validation";

export async function setCustomerApproval(formData: FormData) {
  const { supabase, user } = await requirePlatformAdmin();
  const customerId = requiredText(formData.get("customer_id"), 40);
  const decision = requiredText(formData.get("decision"), 20);
  const reason = requiredText(formData.get("reason"), 500);
  const returnTo = safeReturnTo(formData.get("return_to"));
  if (!isUuid(customerId) || !["approve", "reject", "suspend", "restore"].includes(decision)) redirect(`${returnTo}?error=invalid`);
  if (decision === "reject" && reason.length < 3) redirect(`${returnTo}?error=reason`);

  const values = decision === "approve" || decision === "restore"
    ? { approval_status: "approved", is_active: true, approved_at: new Date().toISOString(), approved_by: user.id, rejection_reason: null }
    : decision === "reject"
      ? { approval_status: "rejected", is_active: false, approved_at: null, approved_by: null, rejection_reason: reason }
      : { approval_status: "suspended", is_active: false, approved_at: null, approved_by: null, rejection_reason: reason || "Durch Administration gesperrt" };

  const { error } = await supabase.from("customer_profiles").update(values).eq("user_id", customerId);
  if (error) redirect(`${returnTo}?error=save`);
  revalidatePath("/admin/customers");
  revalidatePath(`/admin/customers/${customerId}`);
  redirect(`${returnTo}?saved=1`);
}

function safeReturnTo(value: FormDataEntryValue | null) {
  const path = requiredText(value, 300);
  return path.startsWith("/admin/customers") && !path.startsWith("//") ? path : "/admin/customers";
}
