import { createServerClient } from "@supabase/ssr";
import { cookies, headers } from "next/headers";
import { createMonitoredFetch } from "@/lib/app-errors";
import { AUTH_PERSISTENCE_COOKIE, withoutCookiePersistence } from "@/lib/auth-session";

export async function createClient() {
  const [cookieStore, requestHeaders] = await Promise.all([cookies(), headers()]);
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const sessionOnly = cookieStore.get(AUTH_PERSISTENCE_COOKIE)?.value === "session";

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables.");
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    global: { fetch: createMonitoredFetch("supabase-server", requestHeaders.get("x-tapradar-pathname")) },
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, sessionOnly ? withoutCookiePersistence(options) : options);
          });
        } catch {
          // Server Components cannot always write cookies. Middleware will handle session refresh later.
        }
      },
    },
  });
}
