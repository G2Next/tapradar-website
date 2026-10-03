import { describe, expect, it } from "vitest";
import { hasAdminPermission, isAdminRole } from "./admin-permissions";

describe("admin permissions", () => {
  it("gives super admins every protected capability", () => {
    expect(hasAdminPermission("super_admin", "team.manage")).toBe(true);
    expect(hasAdminPermission("super_admin", "payments.manage")).toBe(true);
  });

  it("separates support and finance responsibilities", () => {
    expect(hasAdminPermission("support", "customers.manage")).toBe(true);
    expect(hasAdminPermission("support", "payments.view")).toBe(false);
    expect(hasAdminPermission("finance", "billing.manage")).toBe(true);
    expect(hasAdminPermission("finance", "customers.manage")).toBe(false);
    expect(hasAdminPermission("support", "trust.manage")).toBe(true);
    expect(hasAdminPermission("support", "feature_flags.manage")).toBe(false);
    expect(hasAdminPermission("operations", "campaigns.manage")).toBe(true);
    expect(hasAdminPermission("finance", "impersonation.manage")).toBe(false);
  });

  it("rejects unknown roles", () => {
    expect(isAdminRole("owner")).toBe(false);
    expect(hasAdminPermission("owner", "dashboard.view")).toBe(false);
  });
});
