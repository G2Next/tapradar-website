import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requireGlobalAdmin() {
  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();
  const user = authData.user;

  if (!user) {
    redirect("/login");
  }

  const { data: assignment } = await supabase
    .from("global_admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!assignment) {
    redirect("/dashboard");
  }

  return { supabase, user };
}
