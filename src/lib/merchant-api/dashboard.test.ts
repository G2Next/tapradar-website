import { describe, expect, it } from "vitest";
import { anonymizedCustomerLabel, canAccessDashboardLocation, dashboardWindows, mergeDashboardActivity, percentageChange } from "./dashboard";

describe("merchant dashboard helpers", () => {
  it("uses the selected location timezone for calendar-day windows", () => {
    const winter = dashboardWindows(new Date("2026-01-15T12:00:00Z"), "Europe/Vienna");
    const summer = dashboardWindows(new Date("2026-08-12T12:00:00Z"), "Europe/Vienna");
    expect(winter.today).toBe("2026-01-14T23:00:00.000Z");
    expect(winter.tomorrow).toBe("2026-01-15T23:00:00.000Z");
    expect(summer.today).toBe("2026-08-11T22:00:00.000Z");
    expect(summer.tomorrow).toBe("2026-08-12T22:00:00.000Z");
  });

  it("merges stamp and reward activity in descending order without personal data", () => {
    const result = mergeDashboardActivity(
      [{ id: "s1", user_id: "00000000-0000-0000-0000-000000abcdef", amount: 1, location_id: "l1", created_at: "2026-08-12T08:00:00Z" }],
      [{ id: "r1", location_id: "l1", created_at: "2026-08-12T09:00:00Z", reward_entitlements: { user_id: "00000000-0000-0000-0000-000000123456", reward_title: "Kaffee" } }],
    );
    expect(result.map((item) => item.type)).toEqual(["reward", "stamp"]);
    expect(result[0]).toMatchObject({ customer_label: "Kunde 123456", title: "Kaffee" });
    expect(JSON.stringify(result)).not.toContain("email");
  });

  it("returns stable labels and safe percentage changes", () => {
    expect(anonymizedCustomerLabel("00000000-0000-0000-0000-000000abcdef")).toBe("Kunde ABCDEF");
    expect(percentageChange(15, 10)).toBe(50);
    expect(percentageChange(1, 0)).toBeNull();
    expect(percentageChange(0, 0)).toBe(0);
  });

  it("rejects a staff-selected location outside the server-verified assignments", () => {
    expect(canAccessDashboardLocation("staff", ["assigned-location"], "assigned-location")).toBe(true);
    expect(canAccessDashboardLocation("staff", ["assigned-location"], "foreign-location")).toBe(false);
    expect(canAccessDashboardLocation("staff", [], "foreign-location")).toBe(false);
    expect(canAccessDashboardLocation("manager", [], "organization-location")).toBe(true);
  });
});
