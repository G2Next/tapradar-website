"use server";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { isUuid, requiredText } from "@/lib/validation";
export async function redeemReward(formData: FormData) { const { supabase, organizationId, role } = await getDashboardContext(); const code = requiredText(formData.get("code"), 20).toUpperCase(); const locationId = requiredText(formData.get("location_id"), 40); if (!organizationId || !role || !code || !isUuid(locationId)) redirect("/dashboard/redeem?error=fields"); const { data, error } = await supabase.rpc("redeem_reward", { reward_code: code, target_location_id: locationId }); if (error) redirect("/dashboard/redeem?error=invalid"); const result = data as { reward_title?: string } | null; redirect(`/dashboard/redeem?success=${encodeURIComponent(result?.reward_title ?? "Belohnung")}`); }
