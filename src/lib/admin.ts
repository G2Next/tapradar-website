import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requirePlatformAdmin() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login?next=/admin");
  const { data: admin } = await supabase.from("platform_admins").select("role, is_active").eq("user_id", auth.user.id).eq("is_active", true).maybeSingle();
  if (!admin) redirect("/dashboard?error=admin-required");
  return { supabase, user: auth.user, admin };
}
