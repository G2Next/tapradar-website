"use server";

import { createHash, randomBytes } from "crypto";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { flashSecretCookieOptions, STAMP_TOKEN_COOKIE } from "@/lib/flash-secrets";
import { isUuid, requiredText } from "@/lib/validation";

export async function createStampDevice(formData: FormData) {
  const { supabase, organizationId, role } = await getDashboardContext();
  const locationId = requiredText(formData.get("location_id"), 40);
  const name = requiredText(formData.get("name"), 100);
  if (!organizationId || !isUuid(locationId) || !name || !["owner", "manager"].includes(role ?? "")) redirect("/dashboard/devices?error=permission");
  const token = randomBytes(32).toString("hex");
  const tokenHash = createHash("sha256").update(token).digest("hex");
  const { data: location } = await supabase.from("locations").select("id").eq("id", locationId).eq("organization_id", organizationId).maybeSingle();
  if (!location) redirect("/dashboard/devices?error=location");
  const { error } = await supabase.from("stamp_devices").insert({ organization_id: organizationId, location_id: locationId, name, token_hash: tokenHash });
  if (error) redirect("/dashboard/devices?error=save-failed");
  const cookieStore = await cookies();
  cookieStore.set(STAMP_TOKEN_COOKIE, token, { ...flashSecretCookieOptions, path: "/dashboard/devices" });
  revalidatePath("/dashboard/devices");
  redirect("/dashboard/devices?created=1");
}

export async function setStampDeviceStatus(formData: FormData) {
  const { supabase, organizationId, role } = await getDashboardContext();
  const deviceId = requiredText(formData.get("device_id"), 40);
  if (!organizationId || !isUuid(deviceId) || !["owner", "manager"].includes(role ?? "")) redirect("/dashboard/devices?error=permission");
  const { error } = await supabase.from("stamp_devices").update({ is_active: formData.get("is_active") === "true" }).eq("id", deviceId).eq("organization_id", organizationId);
  if (error) redirect("/dashboard/devices?error=save-failed");
  revalidatePath("/dashboard/devices");
  redirect("/dashboard/devices?saved=1");
}
