import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createMonitoredFetch } from "@/lib/app-errors";
import { createClient as createServerClient } from "./server";

export async function createRequestClient(request: Request) {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) return createServerClient();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) throw new Error("Missing Supabase environment variables.");

  return createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: authorization }, fetch: createMonitoredFetch("supabase-api", new URL(request.url).pathname) },
    auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false },
  });
}
