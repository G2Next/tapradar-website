import { canAccessDashboardLocation, dashboardWindows, mergeDashboardActivity, percentageChange } from "@/lib/merchant-api/dashboard";
import { databaseError, MerchantApiError, requireLocation, runMerchantRoute } from "@/lib/merchant-api/core";
import { isUuid } from "@/lib/validation";

export const dynamic = "force-dynamic";

const impossibleLocationId = "00000000-0000-0000-0000-000000000000";

export async function GET(request: Request) {
  return runMerchantRoute(request, {}, async (context) => {
    const requestedLocationId = request.headers.get("x-location-id")?.trim() || null;
    if (requestedLocationId && !isUuid(requestedLocationId)) {
      throw new MerchantApiError(400, "invalid_location", "X-Location-Id must be a UUID.");
    }
    if (!canAccessDashboardLocation(context.role, context.allowedLocationIds, requestedLocationId)) {
      throw new MerchantApiError(403, "organization_access_denied", "The selected location is not assigned to this staff member.");
    }
    await requireLocation(context, requestedLocationId);

    let timeZoneQuery = context.supabase
      .from("locations")
      .select("timezone")
      .eq("organization_id", context.organizationId!)
      .eq("is_active", true);
    if (requestedLocationId) timeZoneQuery = timeZoneQuery.eq("id", requestedLocationId);
    else if (context.role === "staff") timeZoneQuery = timeZoneQuery.in("id", context.allowedLocationIds?.length ? context.allowedLocationIds : [impossibleLocationId]);
    const { data: timeZoneRows, error: timeZoneError } = await timeZoneQuery.order("is_primary", { ascending: false }).limit(1);
    if (timeZoneError) throw databaseError(timeZoneError);
    const timeZone = timeZoneRows?.[0]?.timezone || "Europe/Vienna";
    const windows = dashboardWindows(new Date(), timeZone);

    const stampCount = (start?: string, end?: string) => {
      let query = context.supabase.from("stamp_events").select("id", { count: "exact", head: true }).eq("organization_id", context.organizationId!).eq("event_type", "award");
      if (requestedLocationId) query = query.eq("location_id", requestedLocationId);
      else if (context.role === "staff") query = query.in("location_id", context.allowedLocationIds?.length ? context.allowedLocationIds : [impossibleLocationId]);
      if (start) query = query.gte("created_at", start);
      if (end) query = query.lt("created_at", end);
      return query;
    };
    const redemptionCount = (start?: string, end?: string) => {
      let query = context.supabase.from("reward_redemptions").select("id", { count: "exact", head: true }).eq("organization_id", context.organizationId!);
      if (requestedLocationId) query = query.eq("location_id", requestedLocationId);
      else if (context.role === "staff") query = query.in("location_id", context.allowedLocationIds?.length ? context.allowedLocationIds : [impossibleLocationId]);
      if (start) query = query.gte("created_at", start);
      if (end) query = query.lt("created_at", end);
      return query;
    };

    let newCustomersQuery = context.supabase
      .from("customer_loyalty_cards")
      .select("user_id,loyalty_cards!inner(organization_id,location_id)")
      .eq("loyalty_cards.organization_id", context.organizationId!)
      .gte("created_at", windows.today)
      .lt("created_at", windows.tomorrow);
    if (requestedLocationId) newCustomersQuery = newCustomersQuery.eq("loyalty_cards.location_id", requestedLocationId);
    else if (context.role === "staff") newCustomersQuery = newCustomersQuery.in("loyalty_cards.location_id", context.allowedLocationIds?.length ? context.allowedLocationIds : [impossibleLocationId]);

    let recentStampsQuery = context.supabase.from("stamp_events").select("id,user_id,amount,location_id,created_at").eq("organization_id", context.organizationId!).eq("event_type", "award");
    let recentRewardsQuery = context.supabase.from("reward_redemptions").select("id,location_id,created_at,reward_entitlements!inner(user_id,reward_title)").eq("organization_id", context.organizationId!);
    let devicesQuery = context.supabase.from("stamp_devices").select("id", { count: "exact", head: true }).eq("organization_id", context.organizationId!).eq("is_active", true);
    if (requestedLocationId) {
      recentStampsQuery = recentStampsQuery.eq("location_id", requestedLocationId);
      recentRewardsQuery = recentRewardsQuery.eq("location_id", requestedLocationId);
      devicesQuery = devicesQuery.eq("location_id", requestedLocationId);
    } else if (context.role === "staff") {
      const allowedLocationIds = context.allowedLocationIds?.length ? context.allowedLocationIds : [impossibleLocationId];
      recentStampsQuery = recentStampsQuery.in("location_id", allowedLocationIds);
      recentRewardsQuery = recentRewardsQuery.in("location_id", allowedLocationIds);
      devicesQuery = devicesQuery.in("location_id", allowedLocationIds);
    }

    const [
      stampsToday, rewardsToday, stampsTotal, rewardsTotal, activeDevices, newCustomers,
      currentWeekStamps, previousWeekStamps, currentWeekRewards, previousWeekRewards,
      recentStamps, recentRewards,
    ] = await Promise.all([
      stampCount(windows.today, windows.tomorrow),
      redemptionCount(windows.today, windows.tomorrow),
      stampCount(),
      redemptionCount(),
      devicesQuery,
      newCustomersQuery,
      stampCount(windows.current_week, windows.tomorrow),
      stampCount(windows.previous_week, windows.previous_week_end),
      redemptionCount(windows.current_week, windows.tomorrow),
      redemptionCount(windows.previous_week, windows.previous_week_end),
      recentStampsQuery.order("created_at", { ascending: false }).limit(20),
      recentRewardsQuery.order("created_at", { ascending: false }).limit(20),
    ]);
    const results = [stampsToday, rewardsToday, stampsTotal, rewardsTotal, activeDevices, newCustomers, currentWeekStamps, previousWeekStamps, currentWeekRewards, previousWeekRewards, recentStamps, recentRewards];
    const failed = results.find((result) => result.error);
    if (failed?.error) throw databaseError(failed.error);

    const uniqueNewCustomers = new Set((newCustomers.data ?? []).map((row) => row.user_id)).size;
    return {
      data: {
        organization_id: context.organizationId,
        location_id: requestedLocationId,
        time_zone: timeZone,
        generated_at: new Date().toISOString(),
        metrics: {
          stamps_today: stampsToday.count ?? 0,
          rewards_today: rewardsToday.count ?? 0,
          new_customers_today: uniqueNewCustomers,
          active_devices: activeDevices.count ?? 0,
          stamps_total: stampsTotal.count ?? 0,
          rewards_total: rewardsTotal.count ?? 0,
          stamp_week_change_percent: percentageChange(currentWeekStamps.count ?? 0, previousWeekStamps.count ?? 0),
          reward_week_change_percent: percentageChange(currentWeekRewards.count ?? 0, previousWeekRewards.count ?? 0),
        },
        activity: mergeDashboardActivity(recentStamps.data ?? [], recentRewards.data ?? []),
      },
    };
  });
}
