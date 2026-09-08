import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { safeNextPath } from "@/lib/validation";
import { SOCIAL_AUTH_CALLBACK_ERROR } from "@/lib/social-auth";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = safeNextPath(requestUrl.searchParams.get("next"));
  const isBusinessSignup = requestUrl.searchParams.get("account") === "business";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(new URL(`/login?error=${SOCIAL_AUTH_CALLBACK_ERROR}`, requestUrl.origin));
    }
    if (isBusinessSignup) {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return NextResponse.redirect(new URL(`/login?error=${SOCIAL_AUTH_CALLBACK_ERROR}`, requestUrl.origin));
      const { error: profileError } = await supabase.from("profiles").update({ account_type: "business" }).eq("id", data.user.id);
      if (profileError) return NextResponse.redirect(new URL(`/login?error=${SOCIAL_AUTH_CALLBACK_ERROR}`, requestUrl.origin));
    }
  }

  if (next === "/passwort-zuruecksetzen") {
    return NextResponse.redirect(new URL(next, requestUrl.origin));
  }

  const consentUrl = new URL("/rechtliches", requestUrl.origin);
  consentUrl.searchParams.set("next", next);
  return NextResponse.redirect(consentUrl);
}
