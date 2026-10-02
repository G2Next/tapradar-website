export const ADMIN_IDLE_TIMEOUT_MINUTES = 30;
export const ADMIN_ABSOLUTE_TIMEOUT_HOURS = 8;

export function adminMfaDestination(currentLevel: string | null, nextLevel: string | null) {
  if (nextLevel !== "aal2") return "/admin/security/setup";
  if (currentLevel !== "aal2") return "/admin/security/verify";
  return null;
}

export function safeAdminDestination(value: string | null | undefined) {
  return value?.startsWith("/admin") && !value.startsWith("//") ? value : "/admin";
}
