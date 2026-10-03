export const ADMIN_ROLES = ["super_admin", "operations", "support", "finance"] as const;
export type AdminRole = typeof ADMIN_ROLES[number];

export const ADMIN_PERMISSIONS = [
  "dashboard.view", "organizations.view", "organizations.manage",
  "customers.view", "customers.manage", "marketing.view", "marketing.manage",
  "billing.view", "billing.manage", "payments.view", "payments.manage",
  "support.view", "support.manage", "email_templates.view", "email_templates.manage",
  "api_keys.manage", "captcha.manage", "operations.manage", "errors.manage",
  "team.manage", "audit.view",
  "trust.view", "trust.manage", "feature_flags.manage", "campaigns.manage", "impersonation.manage",
] as const;
export type AdminPermission = typeof ADMIN_PERMISSIONS[number];

const rolePermissions: Record<AdminRole, readonly AdminPermission[]> = {
  super_admin: ADMIN_PERMISSIONS,
  operations: ["dashboard.view", "organizations.view", "organizations.manage", "customers.view", "customers.manage", "marketing.view", "marketing.manage", "support.view", "support.manage", "email_templates.view", "email_templates.manage", "captcha.manage", "operations.manage", "errors.manage", "audit.view", "trust.view", "trust.manage", "feature_flags.manage", "campaigns.manage", "impersonation.manage"],
  support: ["dashboard.view", "organizations.view", "customers.view", "customers.manage", "marketing.view", "support.view", "support.manage", "trust.view", "trust.manage", "impersonation.manage"],
  finance: ["dashboard.view", "organizations.view", "billing.view", "billing.manage", "payments.view", "payments.manage", "audit.view"],
};

export function isAdminRole(value: unknown): value is AdminRole { return typeof value === "string" && ADMIN_ROLES.includes(value as AdminRole); }
export function hasAdminPermission(role: string, permission: AdminPermission) { return isAdminRole(role) && rolePermissions[role].includes(permission); }
export function adminRoleLabel(role: string) { return role === "super_admin" ? "Super Admin" : role === "operations" ? "Betrieb" : role === "finance" ? "Finanzen" : "Support"; }
