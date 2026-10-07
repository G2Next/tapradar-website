import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { verifyCaptcha } from "@/lib/captcha";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { isLocale } from "@/i18n/config";

export async function POST(request: Request) {
  let body: { mode?: unknown; email?: unknown; password?: unknown; locale?: unknown; business?: unknown; captchaToken?: unknown; next?: unknown };
  try { body = await request.json(); } catch { return NextResponse.json({ error: "invalid" }, { status: 400 }); }
  const mode = body.mode === "signup" ? "signup" : body.mode === "signin" ? "signin" : null;
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 254) : "";
  const password = typeof body.password === "string" ? body.password : "";
  const locale = typeof body.locale === "string" && isLocale(body.locale) ? body.locale : "de";
  const requestedNext = typeof body.next === "string" && body.next.startsWith("/") && !body.next.startsWith("//") ? body.next.slice(0, 500) : null;
  if (!mode || !/^\S+@\S+\.\S+$/.test(email) || password.length < (mode === "signup" ? 12 : 1) || password.length > 1000) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const ip = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || (process.env.NODE_ENV !== "production" ? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() : null)
    || "unknown";
  try {
    const admin = createAdminClient();
    const key = createHash("sha256").update(`${ip}|${email}`).digest("hex");
    const { data, error } = await admin.rpc("consume_rate_limit", { rate_bucket: `password-${mode}`, rate_key_hash: key, maximum_requests: mode === "signup" ? 5 : 12, window_seconds: 3600 });
    const result = Array.isArray(data) ? data[0] : data;
    if (error || !result?.allowed) return NextResponse.json({ error: "limit" }, { status: 429 });
  } catch { return NextResponse.json({ error: "unavailable" }, { status: 503 }); }

  const scope = mode === "signup" ? "registration" : "login";
  if (!(await verifyCaptcha(body.captchaToken, scope, ip))) return NextResponse.json({ error: "captcha" }, { status: 403 });

  const supabase = await createClient();
  if (mode === "signup") {
    const origin = new URL(request.url).origin;
    const isBusiness = body.business === true;
    const nextPath = isBusiness ? "/dashboard/onboarding" : "/app";
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { locale, account_type: isBusiness ? "business" : "customer" },
        emailRedirectTo: `${origin}/auth/callback?next=${encodeURIComponent(nextPath)}${isBusiness ? "&account=business" : ""}`,
      },
    });
    if (error) return NextResponse.json({ error: "auth" }, { status: 400 });
    return NextResponse.json({ session: Boolean(data.session), next: nextPath });
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return NextResponse.json({ error: "auth" }, { status: 400 });
  if (data.session) await supabase.auth.updateUser({ data: { locale } });
  const { data: profile } = await supabase.from("profiles").select("account_type").eq("id", data.user.id).maybeSingle();
  const accountType = profile?.account_type ?? data.user.user_metadata?.account_type;
  return NextResponse.json({ session: Boolean(data.session), next: requestedNext ?? (accountType === "business" ? "/dashboard" : "/app") });
}
