"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDashboardContext, LOCATION_COOKIE, ORGANIZATION_COOKIE } from "@/lib/dashboard";
import { isUuid, requiredText } from "@/lib/validation";

export async function switchDashboardContext(formData: FormData) {
  const organizationId = requiredText(formData.get("organization_id"), 40);
  const locationId = requiredText(formData.get("location_id"), 40);
  const context = await getDashboardContext();
  if (!context.user || !isUuid(organizationId)) redirect("/login");

  const membership = (context.memberships ?? []).find((item) => item.organization_id === organizationId);
  if (!membership) redirect("/dashboard?error=context");

  const cookieStore = await cookies();
  cookieStore.set(ORGANIZATION_COOKIE, organizationId, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 365 });
  cookieStore.delete(LOCATION_COOKIE);

  if (isUuid(locationId)) {
    const { data: allowed } = await context.supabase.rpc("can_access_location", { target_location_id: locationId });
    if (allowed) cookieStore.set(LOCATION_COOKIE, locationId, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 365 });
  }
  redirect("/dashboard");
}
