import { NextResponse } from "next/server";
import { LEGAL_VERSIONS, hasCurrentLegalAcceptance, recordLegalAcceptance } from "@/lib/legal-consent";
import { consumeRequestLimit, rateLimitHeaders } from "@/lib/rate-limit";
import { createRequestClient } from "@/lib/supabase/request";

export const dynamic = "force-dynamic";

async function authenticatedUser(request: Request) {
  try {
    const supabase = await createRequestClient(request);
    const { data } = await supabase.auth.getUser();
    return { user: data.user, configured: true };
  } catch {
    return { user: null, configured: false };
  }
}

export async function GET(request: Request) {
  const auth = await authenticatedUser(request);
  if (!auth.configured) return NextResponse.json({ error: "service_not_configured" }, { status: 503 });
  const user = auth.user;
  if (!user) return NextResponse.json({ error: "authentication_required" }, { status: 401 });
  const accepted = await hasCurrentLegalAcceptance(user.id, "account");
  return NextResponse.json({
    accepted,
    versions: LEGAL_VERSIONS,
    documents: { terms: "/agb-verbraucher", privacy: "/datenschutz", withdrawal: "/widerrufsbelehrung" },
  }, { headers: { "Cache-Control": "private, no-store" } });
}

export async function POST(request: Request) {
  let limit;
  try { limit = await consumeRequestLimit(request, "legal-consent", 20, 3600); }
  catch { return NextResponse.json({ error: "rate_limiter_unavailable" }, { status: 503 }); }
  if (!limit.allowed) return NextResponse.json({ error: "rate_limit_exceeded" }, { status: 429, headers: rateLimitHeaders(limit) });
  const auth = await authenticatedUser(request);
  if (!auth.configured) return NextResponse.json({ error: "service_not_configured" }, { status: 503, headers: rateLimitHeaders(limit) });
  const user = auth.user;
  if (!user) return NextResponse.json({ error: "authentication_required" }, { status: 401, headers: rateLimitHeaders(limit) });
  let body: { terms_accepted?: boolean; privacy_acknowledged?: boolean };
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "invalid_json" }, { status: 400, headers: rateLimitHeaders(limit) }); }
  if (body.terms_accepted !== true || body.privacy_acknowledged !== true) {
    return NextResponse.json({ error: "legal_confirmation_required" }, { status: 422, headers: rateLimitHeaders(limit) });
  }
  try {
    await recordLegalAcceptance({ userId: user.id, context: "account", metadata: { source: "mobile-api" } });
  } catch {
    return NextResponse.json({ error: "consent_unavailable" }, { status: 503, headers: rateLimitHeaders(limit) });
  }
  return NextResponse.json({ accepted: true, versions: LEGAL_VERSIONS }, { status: 201, headers: { "Cache-Control": "private, no-store", ...rateLimitHeaders(limit) } });
}
