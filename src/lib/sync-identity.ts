import { createClient } from "@supabase/supabase-js";
import { createRequestClient } from "./supabase/request";

export type SyncIdentity = {
  client: Awaited<ReturnType<typeof createRequestClient>>;
  source: "anonymous" | "website" | "mobile_app" | "platform_api_key";
  websiteUserId: string | null;
  externalUserId: string | null;
};

function publicWebsiteClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) throw new Error("Missing website Supabase environment variables.");
  return createClient(url, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false },
  });
}

export async function resolveSyncIdentity(request: Request, platformApiKeyAuthenticated = false): Promise<SyncIdentity> {
  if (platformApiKeyAuthenticated) {
    return { client: publicWebsiteClient(), source: "platform_api_key", websiteUserId: null, externalUserId: null };
  }

  const authorization = request.headers.get("authorization");
  const websiteClient = await createRequestClient(request);
  const websiteAuth = await websiteClient.auth.getUser();

  if (websiteAuth.data.user) {
    return {
      client: websiteClient,
      source: "website",
      websiteUserId: websiteAuth.data.user.id,
      externalUserId: null,
    };
  }

  if (!authorization?.startsWith("Bearer ")) {
    return { client: websiteClient, source: "anonymous", websiteUserId: null, externalUserId: null };
  }

  const mobileUrl = process.env.MOBILE_APP_SUPABASE_URL;
  const mobileAnonKey = process.env.MOBILE_APP_SUPABASE_ANON_KEY;
  if (!mobileUrl || !mobileAnonKey) throw new Error("Mobile app identity provider is not configured.");

  const token = authorization.slice(7).trim();
  const mobileClient = createClient(mobileUrl, mobileAnonKey, {
    auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false },
  });
  const mobileAuth = await mobileClient.auth.getUser(token);
  if (!mobileAuth.data.user) throw new Error("Invalid mobile app access token.");

  return {
    client: publicWebsiteClient(),
    source: "mobile_app",
    websiteUserId: null,
    externalUserId: mobileAuth.data.user.id,
  };
}
