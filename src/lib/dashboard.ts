import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export const ORGANIZATION_COOKIE = "tapradar_organization_id";
export const LOCATION_COOKIE = "tapradar_location_id";

export async function getDashboardContext() {
  const supabase = await createClient();
  const [{ data: userData }, cookieStore] = await Promise.all([supabase.auth.getUser(), cookies()]);

  if (!userData.user) {
    return { supabase, user: null, organizationId: null, locationId: null, role: null, memberships: [], locations: [] };
  }

  const { data: membershipRows } = await supabase
    .from("organization_members")
    .select("organization_id, role, organizations(name, slug, onboarding_status)")
    .eq("user_id", userData.user.id)
    .eq("is_active", true)
    .order("created_at");

  const memberships = membershipRows ?? [];
  const requestedOrganizationId = cookieStore.get(ORGANIZATION_COOKIE)?.value;
  const membership = memberships.find((item) => item.organization_id === requestedOrganizationId) ?? memberships[0];
  const organizationId = membership?.organization_id ?? null;

  let locations: { id: string; name: string; is_primary: boolean }[] = [];
  if (organizationId) {
    let allowedLocationIds: string[] | null = null;
    if (membership.role === "staff") {
      const { data: assignmentRows } = await supabase
        .from("location_members")
        .select("location_id")
        .eq("organization_id", organizationId)
        .eq("user_id", userData.user.id)
        .eq("is_active", true);
      allowedLocationIds = (assignmentRows ?? []).map((assignment) => assignment.location_id);
    }

    let query = supabase
      .from("locations")
      .select("id, name, is_primary")
      .eq("organization_id", organizationId)
      .eq("is_active", true)
      .order("is_primary", { ascending: false })
      .order("name");
    if (allowedLocationIds) query = query.in("id", allowedLocationIds.length ? allowedLocationIds : ["00000000-0000-0000-0000-000000000000"]);
    const result = await query;
    locations = result.data ?? [];
  }

  const requestedLocationId = cookieStore.get(LOCATION_COOKIE)?.value;
  const location = locations.find((item) => item.id === requestedLocationId) ?? locations[0];

  return {
    supabase,
    user: userData.user,
    organizationId,
    locationId: location?.id ?? null,
    role: membership?.role ?? null,
    memberships,
    locations,
  };
}
