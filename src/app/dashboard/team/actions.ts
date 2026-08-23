"use server";

import { createHash, randomBytes } from "crypto";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { flashSecretCookieOptions, INVITATION_TOKEN_COOKIE, STAFF_PIN_COOKIE } from "@/lib/flash-secrets";
import { enqueueNotification } from "@/lib/notifications";
import { recordSystemEvent } from "@/lib/system-events";
import { isUuid, requiredText } from "@/lib/validation";
import { generateStaffPin } from "@/lib/staff-access";

export async function createInvitation(formData: FormData) {
  const context = await getDashboardContext();
  const email = requiredText(formData.get("email"), 200).toLowerCase();
  const targetRole = "manager";
  const locationIds: string[] = [];
  if (!context.user || !context.organizationId || !["owner", "manager"].includes(context.role ?? "") || !/^\S+@\S+\.\S+$/.test(email)) redirect("/dashboard/team?error=fields");
  const { data: organization } = await context.supabase
    .from("organizations")
    .select("name")
    .eq("id", context.organizationId)
    .single();
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
  redirect("/dashboard/team?created=manager");
}

export async function createStaffMember(formData: FormData) {
  const context = await getDashboardContext();
  const displayName = requiredText(formData.get("display_name"), 100);
  const locationIds = [...new Set(formData.getAll("location_ids").map(String).filter(isUuid))];
  if (!context.user || !context.organizationId || !["owner", "manager"].includes(context.role ?? "") || displayName.length < 2 || !locationIds.length) {
    redirect("/dashboard/team?error=staff-fields");
  }

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const pin = generateStaffPin();
    const { data, error } = await context.supabase.rpc("create_staff_member", {
      target_organization_id: context.organizationId,
      employee_name: displayName,
      employee_pin: pin,
      employee_location_ids: locationIds,
    });
    if (!error && typeof data === "string") {
      const cookieStore = await cookies();
      cookieStore.set(STAFF_PIN_COOKIE, `${data}.${pin}`, { ...flashSecretCookieOptions, path: "/dashboard/team" });
      revalidatePath("/dashboard/team");
      redirect(`/dashboard/team?created=staff&pin=${encodeURIComponent(data)}`);
    }
    if (!error?.message.includes("PIN_ALREADY_IN_USE")) redirect(`/dashboard/team?error=${staffErrorCode(error?.message)}`);
  }
  redirect("/dashboard/team?error=pin-generation");
}

export async function setStaffMemberStatus(formData: FormData) {
  const context = await getDashboardContext();
  const memberId = requiredText(formData.get("member_id"), 40);
  if (!context.user || !context.organizationId || !isUuid(memberId) || !["owner", "manager"].includes(context.role ?? "")) redirect("/dashboard/team?error=permission");
  const { error } = await context.supabase.rpc("set_staff_member_status", {
    target_staff_member_id: memberId,
    active: formData.get("is_active") === "true",
  });
  if (error) redirect(`/dashboard/team?error=${staffErrorCode(error.message)}`);
  revalidatePath("/dashboard/team");
  redirect("/dashboard/team?saved=status");
}

export async function updateStaffMemberLocations(formData: FormData) {
  const context = await getDashboardContext();
  const memberId = requiredText(formData.get("member_id"), 40);
  const locationIds = [...new Set(formData.getAll("location_ids").map(String).filter(isUuid))];
  if (!context.user || !context.organizationId || !isUuid(memberId) || !["owner", "manager"].includes(context.role ?? "") || !locationIds.length) redirect("/dashboard/team?error=location");
  const { error } = await context.supabase.rpc("update_staff_member_locations", {
    target_staff_member_id: memberId,
    employee_location_ids: locationIds,
  });
  if (error) redirect(`/dashboard/team?error=${staffErrorCode(error.message)}`);
  revalidatePath("/dashboard/team");
  redirect("/dashboard/team?saved=locations");
}

export async function resetStaffMemberPin(formData: FormData) {
  const context = await getDashboardContext();
  const memberId = requiredText(formData.get("member_id"), 40);
  if (!context.user || !context.organizationId || !isUuid(memberId) || !["owner", "manager"].includes(context.role ?? "")) redirect("/dashboard/team?error=permission");
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const pin = generateStaffPin();
    const { error } = await context.supabase.rpc("reset_staff_member_pin", { target_staff_member_id: memberId, employee_pin: pin });
    if (!error) {
      const cookieStore = await cookies();
      cookieStore.set(STAFF_PIN_COOKIE, `${memberId}.${pin}`, { ...flashSecretCookieOptions, path: "/dashboard/team" });
      revalidatePath("/dashboard/team");
      redirect(`/dashboard/team?pin=${encodeURIComponent(memberId)}&saved=pin`);
    }
    if (!error.message.includes("PIN_ALREADY_IN_USE")) redirect(`/dashboard/team?error=${staffErrorCode(error.message)}`);
  }
  redirect("/dashboard/team?error=pin-generation");
}

export async function deleteStaffMember(formData: FormData) {
  const context = await getDashboardContext();
  const memberId = requiredText(formData.get("member_id"), 40);
  if (!context.user || !context.organizationId || !isUuid(memberId) || !["owner", "manager"].includes(context.role ?? "")) redirect("/dashboard/team?error=permission");
  const { error } = await context.supabase.rpc("delete_staff_member", { target_staff_member_id: memberId });
  if (error) redirect(`/dashboard/team?error=${staffErrorCode(error.message)}`);
  revalidatePath("/dashboard/team");
  redirect("/dashboard/team?saved=deleted");
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

function staffErrorCode(message?: string) {
  if (message?.includes("STAFF_LIMIT_REACHED")) return "plan-limit";
  if (message?.includes("INVALID_LOCATION") || message?.includes("LOCATION_REQUIRED")) return "location";
  if (message?.includes("PERMISSION_DENIED")) return "permission";
  return "save";
}
