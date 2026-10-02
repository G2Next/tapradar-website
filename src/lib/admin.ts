import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { hasAdminPermission, type AdminPermission } from "@/lib/admin-permissions";

export async function requirePlatformAdmin(permission?: AdminPermission) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login?next=/admin");
  const { data: admin } = await supabase.from("platform_admins").select("role, is_active").eq("user_id", auth.user.id).eq("is_active", true).maybeSingle();
  if (!admin) redirect("/dashboard?error=admin-required");
  if (permission && !hasAdminPermission(admin.role, permission)) redirect("/admin?error=permission");
  return { supabase, user: auth.user, admin };
}
