"use server";

import { randomUUID } from "crypto";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function collectStamp(token: string) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect(`/login?next=${encodeURIComponent(`/collect/${token}`)}`);
  const { data, error } = await supabase.rpc("award_stamp", { device_token: token, request_key: randomUUID() });
  if (error) redirect(`/collect/${token}?error=${encodeURIComponent(error.message.slice(0, 80))}`);
  const result = data as { stamps_balance?: number; reward_created?: boolean } | null;
  redirect(`/collect/${token}?success=1&balance=${result?.stamps_balance ?? 0}${result?.reward_created ? "&reward=1" : ""}`);
}
