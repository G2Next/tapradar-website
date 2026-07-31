import { createClient } from "@/lib/supabase/server";

export async function getCurrentBusinessId() {
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user) {
    return { supabase, user: null, businessId: null };
  }

  const { data: membership } = await supabase
    .from("business_members")
    .select("business_id")
    .eq("user_id", userData.user.id)
    .eq("is_active", true)
    .maybeSingle();

  return {
    supabase,
    user: userData.user,
    businessId: membership?.business_id ?? null,
  };
}
