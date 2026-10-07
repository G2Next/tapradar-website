import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { hasAdminPermission, type AdminPermission } from "@/lib/admin-permissions";
import { adminMfaDestination } from "@/lib/admin-security";

export async function requirePlatformAdmin(permission?: AdminPermission) {
  const context = await requirePlatformAdminSession(permission);
  const destination=adminMfaDestination(context.mfaEnrolled,context.mfaVerified);
  if(destination)redirect(destination);
  return context;
}

export async function requirePlatformAdminSession(permission?: AdminPermission) {
  const context = await requirePlatformAdminIdentity(permission);
  const { data, error } = await context.supabase.rpc("touch_admin_session");
  const result = Array.isArray(data) ? data[0] : data;
  if (error || !result?.allowed) redirect(`/auth/admin-session-expired?reason=${encodeURIComponent(result?.reason ?? "unavailable")}`);
  return { ...context, adminSessionExpiresAt: result.expires_at as string | null, mfaEnrolled: Boolean(result.mfa_enrolled), mfaVerified: Boolean(result.mfa_verified) };
}

export async function requirePlatformAdminIdentity(permission?: AdminPermission) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login?next=/admin");
  const { data: admin } = await supabase.from("platform_admins").select("role, is_active").eq("user_id", auth.user.id).eq("is_active", true).maybeSingle();
  if (!admin) redirect("/dashboard?error=admin-required");
  if (permission && !hasAdminPermission(admin.role, permission)) redirect("/admin?error=permission");
  return { supabase, user: auth.user, admin };
}
