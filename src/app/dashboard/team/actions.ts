"use server";

import { createHash, randomBytes } from "crypto";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { flashSecretCookieOptions, INVITATION_TOKEN_COOKIE } from "@/lib/flash-secrets";
import { enqueueNotification } from "@/lib/notifications";
import { recordSystemEvent } from "@/lib/system-events";
import { isUuid, requiredText } from "@/lib/validation";

export async function createInvitation(formData: FormData) {
  const context = await getDashboardContext();
  const email = requiredText(formData.get("email"), 200).toLowerCase();
  const targetRole = requiredText(formData.get("role"), 20) === "manager" ? "manager" : "staff";
  const locationIds = formData.getAll("location_ids").map(String).filter(isUuid);
  if (!context.user || !context.organizationId || !["owner", "manager"].includes(context.role ?? "") || !/^\S+@\S+\.\S+$/.test(email) || (targetRole === "staff" && !locationIds.length)) redirect("/dashboard/team?error=fields");
  const [{ data: organization }, { count }, { data: validLocations }] = await Promise.all([
    context.supabase.from("organizations").select("name, plan, subscription_product_id").eq("id", context.organizationId).single(),
    context.supabase.from("organization_members").select("id", { count: "exact", head: true }).eq("organization_id", context.organizationId).eq("is_active", true),
    context.supabase.from("locations").select("id").eq("organization_id", context.organizationId).in("id", locationIds.length ? locationIds : ["00000000-0000-0000-0000-000000000000"]),
  ]);
  const { data: product } = organization?.subscription_product_id
    ? await context.supabase.from("subscription_products").select("staff_limit").eq("id", organization.subscription_product_id).maybeSingle()
    : await context.supabase.from("subscription_products").select("staff_limit").eq("code", organization?.plan ?? "bronze").maybeSingle();
  if ((count ?? 0) >= (product?.staff_limit ?? 1)) redirect("/dashboard/team?error=plan-limit");
  if ((validLocations ?? []).length !== locationIds.length) redirect("/dashboard/team?error=location");
  const token = randomBytes(32).toString("hex");
  const tokenHash = createHash("sha256").update(token).digest("hex");
  const { error } = await context.supabase.from("organization_invitations").insert({ organization_id: context.organizationId, email, role: targetRole, location_ids: locationIds, token_hash: tokenHash, invited_by: context.user.id });
  if (error) redirect("/dashboard/team?error=save");
  try {
    await enqueueNotification({ organizationId: context.organizationId, email, template: "team_invitation", payload: { organization_name: organization?.name, link: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/invite/${token}` } });
  } catch (notificationError) {
    await recordSystemEvent({ severity: "warning", source: "team-invitation", message: notificationError instanceof Error ? notificationError.message : "Invitation email could not be queued", organizationId: context.organizationId });
  }
  const cookieStore = await cookies();
  cookieStore.set(INVITATION_TOKEN_COOKIE, token, { ...flashSecretCookieOptions, path: "/dashboard/team" });
  redirect("/dashboard/team?created=1");
}

export async function setMemberStatus(formData: FormData) {
  const context = await getDashboardContext();
  const memberId = requiredText(formData.get("member_id"), 40);
  if (!context.user || !context.organizationId || !isUuid(memberId) || !["owner", "manager"].includes(context.role ?? "") || memberId === context.user.id) redirect("/dashboard/team?error=permission");
  const { error } = await context.supabase.from("organization_members").update({ is_active: formData.get("is_active") === "true" }).eq("organization_id", context.organizationId).eq("user_id", memberId).neq("role", "owner");
  if (error) redirect("/dashboard/team?error=save");
  revalidatePath("/dashboard/team");
  redirect("/dashboard/team?saved=1");
}

export async function updateMemberLocations(formData: FormData) {
  const context = await getDashboardContext();
  const memberId = requiredText(formData.get("member_id"), 40);
  const locationIds = formData.getAll("location_ids").map(String).filter(isUuid);
  if (!context.user || !context.organizationId || !isUuid(memberId) || !["owner", "manager"].includes(context.role ?? "") || memberId === context.user.id || !locationIds.length) redirect("/dashboard/team?error=permission");
  const [{ data: member }, { data: validLocations }] = await Promise.all([
    context.supabase.from("organization_members").select("role").eq("organization_id", context.organizationId).eq("user_id", memberId).eq("is_active", true).single(),
    context.supabase.from("locations").select("id").eq("organization_id", context.organizationId).in("id", locationIds),
  ]);
  if (member?.role !== "staff" || (validLocations ?? []).length !== locationIds.length) redirect("/dashboard/team?error=location");
  const remove = await context.supabase.from("location_members").delete().eq("organization_id", context.organizationId).eq("user_id", memberId);
  if (remove.error) redirect("/dashboard/team?error=save");
  const insert = await context.supabase.from("location_members").insert(locationIds.map((locationId) => ({ organization_id: context.organizationId, location_id: locationId, user_id: memberId, role: "staff" })));
  if (insert.error) redirect("/dashboard/team?error=save");
  revalidatePath("/dashboard/team");
  redirect("/dashboard/team?saved=locations");
}
