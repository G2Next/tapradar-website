import { describe, expect, it } from "vitest";
import { isApprovedOrganization, isPreApprovalDashboardPath } from "./dashboard-access";

describe("dashboard approval access", () => {
  it("unlocks the portal only after explicit approval", () => {
    expect(isApprovedOrganization("approved")).toBe(true);
    expect(isApprovedOrganization("review")).toBe(false);
    expect(isApprovedOrganization("loyalty")).toBe(false);
    expect(isApprovedOrganization(null)).toBe(false);
  });

  it.each(["/dashboard", "/dashboard/business", "/dashboard/locations", "/dashboard/onboarding"])("allows %s before approval", (path) => {
    expect(isPreApprovalDashboardPath(path)).toBe(true);
  });

  it.each(["/dashboard/loyalty-cards", "/dashboard/actions", "/dashboard/billing", "/dashboard/team"])("blocks %s before approval", (path) => {
    expect(isPreApprovalDashboardPath(path)).toBe(false);
  });
});
