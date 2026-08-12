export type DashboardActivity = {
  id: string;
  type: "stamp" | "reward";
  customer_id: string;
  customer_label: string;
  title: string;
  amount: number | null;
  location_id: string;
  created_at: string;
};

export function canAccessDashboardLocation(role: string | null, allowedLocationIds: string[] | null, requestedLocationId: string | null) {
  if (!requestedLocationId || role !== "staff") return true;
  return allowedLocationIds?.includes(requestedLocationId) === true;
}

type StampActivityRow = {
  id: string;
  user_id: string;
  amount: number;
  location_id: string;
  created_at: string;
};

type RewardActivityRow = {
  id: string;
  location_id: string;
  created_at: string;
  reward_entitlements: { user_id: string; reward_title: string } | { user_id: string; reward_title: string }[] | null;
};

function timeZoneParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((part) => part.type === type)?.value);
  return { year: value("year"), month: value("month"), day: value("day") };
}

function offsetAt(instant: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(instant);
  const value = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((part) => part.type === type)?.value);
  const representedAsUtc = Date.UTC(value("year"), value("month") - 1, value("day"), value("hour"), value("minute"), value("second"));
  return representedAsUtc - instant.getTime();
}

export function startOfDayInTimeZone(now: Date, timeZone: string) {
  const { year, month, day } = timeZoneParts(now, timeZone);
  const localMidnightAsUtc = Date.UTC(year, month - 1, day);
  let instant = new Date(localMidnightAsUtc - offsetAt(new Date(localMidnightAsUtc), timeZone));
  instant = new Date(localMidnightAsUtc - offsetAt(instant, timeZone));
  return instant;
}

export function dashboardWindows(now: Date, timeZone: string) {
  const today = startOfDayInTimeZone(now, timeZone);
  const tomorrowReference = new Date(today.getTime() + 36 * 60 * 60 * 1000);
  const tomorrow = startOfDayInTimeZone(tomorrowReference, timeZone);
  return {
    today: today.toISOString(),
    tomorrow: tomorrow.toISOString(),
    current_week: new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    previous_week: new Date(today.getTime() - 13 * 24 * 60 * 60 * 1000).toISOString(),
    previous_week_end: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  };
}

export function anonymizedCustomerLabel(userId: string) {
  return `Kunde ${userId.replaceAll("-", "").slice(-6).toUpperCase()}`;
}

export function mergeDashboardActivity(stamps: StampActivityRow[], rewards: RewardActivityRow[], limit = 20): DashboardActivity[] {
  const stampItems: DashboardActivity[] = stamps.map((row) => ({
    id: `stamp:${row.id}`,
    type: "stamp",
    customer_id: row.user_id,
    customer_label: anonymizedCustomerLabel(row.user_id),
    title: "Stempel gesammelt",
    amount: row.amount,
    location_id: row.location_id,
    created_at: row.created_at,
  }));
  const rewardItems: DashboardActivity[] = rewards.flatMap((row) => {
    const relation = Array.isArray(row.reward_entitlements) ? row.reward_entitlements[0] : row.reward_entitlements;
    if (!relation) return [];
    return [{
      id: `reward:${row.id}`,
      type: "reward" as const,
      customer_id: relation.user_id,
      customer_label: anonymizedCustomerLabel(relation.user_id),
      title: relation.reward_title,
      amount: null,
      location_id: row.location_id,
      created_at: row.created_at,
    }];
  });
  return [...stampItems, ...rewardItems]
    .sort((left, right) => new Date(right.created_at).getTime() - new Date(left.created_at).getTime())
    .slice(0, limit);
}

export function percentageChange(current: number, previous: number) {
  if (previous === 0) return current === 0 ? 0 : null;
  return Math.round(((current - previous) / previous) * 1000) / 10;
}
