export const preApprovalDashboardPaths = [
  "/dashboard",
  "/dashboard/business",
  "/dashboard/locations",
  "/dashboard/onboarding",
] as const;

export function isApprovedOrganization(status: string | null | undefined) {
  return status === "approved";
}

export function isPreApprovalDashboardPath(pathname: string | null | undefined) {
  if (!pathname) return false;
  if (pathname === "/dashboard") return true;
  return preApprovalDashboardPaths
    .filter((path) => path !== "/dashboard")
    .some((path) => pathname === path || pathname.startsWith(`${path}/`));
}
