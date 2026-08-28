"use server";

import { createHash, randomBytes } from "crypto";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { flashSecretCookieOptions, STAMP_TOKEN_COOKIE } from "@/lib/flash-secrets";
import { isUuid, requiredText } from "@/lib/validation";

const MANAGER_ROLES = ["owner", "manager"];

async function requireManagedDevice(formData: FormData) {
  const { supabase, organizationId, role } = await getDashboardContext();
  const deviceId = requiredText(formData.get("device_id"), 40);
  if (!organizationId || !isUuid(deviceId) || !MANAGER_ROLES.includes(role ?? "")) {
    redirect("/dashboard/devices?error=permission");
  }
  return { supabase, organizationId, deviceId };
}

async function locationBelongsToOrganization(
  supabase: Awaited<ReturnType<typeof getDashboardContext>>["supabase"],
  locationId: string,
  organizationId: string,
) {
  const { data } = await supabase.from("locations").select("id").eq("id", locationId).eq("organization_id", organizationId).maybeSingle();
  return Boolean(data);
}

async function revealToken(token: string, deviceId: string) {
  const cookieStore = await cookies();
  cookieStore.set(STAMP_TOKEN_COOKIE, token, { ...flashSecretCookieOptions, path: "/dashboard/devices" });
  revalidatePath("/dashboard/devices");
  redirect(`/dashboard/devices?revealed=${deviceId}`);
}

export async function createStampDevice(formData: FormData) {
  const { supabase, organizationId, role } = await getDashboardContext();
  const locationId = requiredText(formData.get("location_id"), 40);
  const name = requiredText(formData.get("name"), 100);
  if (!organizationId || !isUuid(locationId) || !name || !MANAGER_ROLES.includes(role ?? "")) redirect("/dashboard/devices?error=permission");
  const token = randomBytes(32).toString("hex");
  const tokenHash = createHash("sha256").update(token).digest("hex");
  if (!(await locationBelongsToOrganization(supabase, locationId, organizationId))) redirect("/dashboard/devices?error=location");
  const { data: device, error } = await supabase.from("stamp_devices").insert({ organization_id: organizationId, location_id: locationId, name, token_hash: tokenHash }).select("id").single();
  if (error || !device) redirect("/dashboard/devices?error=save-failed");
  await revealToken(token, device.id);
}

export async function setStampDeviceStatus(formData: FormData) {
  const { supabase, organizationId, deviceId } = await requireManagedDevice(formData);
  const { error } = await supabase.from("stamp_devices").update({ is_active: formData.get("is_active") === "true" }).eq("id", deviceId).eq("organization_id", organizationId);
  if (error) redirect("/dashboard/devices?error=save-failed");
  revalidatePath("/dashboard/devices");
  redirect("/dashboard/devices?saved=1");
}

export async function updateStampDevice(formData: FormData) {
  const { supabase, organizationId, deviceId } = await requireManagedDevice(formData);
  const locationId = requiredText(formData.get("location_id"), 40);
  const name = requiredText(formData.get("name"), 100);
  if (!name || !isUuid(locationId)) redirect("/dashboard/devices?error=invalid");
  if (!(await locationBelongsToOrganization(supabase, locationId, organizationId))) redirect("/dashboard/devices?error=location");
  const { error } = await supabase.from("stamp_devices").update({ name, location_id: locationId }).eq("id", deviceId).eq("organization_id", organizationId);
  if (error) redirect("/dashboard/devices?error=save-failed");
  revalidatePath("/dashboard/devices");
  redirect("/dashboard/devices?saved=1");
}

export async function rotateStampDeviceToken(formData: FormData) {
  const { supabase, organizationId, deviceId } = await requireManagedDevice(formData);
  const token = randomBytes(32).toString("hex");
  const tokenHash = createHash("sha256").update(token).digest("hex");
  const { error } = await supabase.from("stamp_devices").update({ token_hash: tokenHash, is_active: true }).eq("id", deviceId).eq("organization_id", organizationId);
  if (error) redirect("/dashboard/devices?error=save-failed");
  await revealToken(token, deviceId);
}

export async function deleteStampDevice(formData: FormData) {
  const { supabase, organizationId, deviceId } = await requireManagedDevice(formData);
  const { error } = await supabase.from("stamp_devices").delete().eq("id", deviceId).eq("organization_id", organizationId);
  if (error) redirect("/dashboard/devices?error=delete-failed");
  revalidatePath("/dashboard/devices");
  redirect("/dashboard/devices?deleted=1");
}
