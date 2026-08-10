import { NextResponse } from "next/server";
import { enqueueNotification } from "@/lib/notifications";
import { consumeRequestLimit, rateLimitHeaders } from "@/lib/rate-limit";
import { createRequestClient } from "@/lib/supabase/request";

export async function POST(request: Request) {
  let limit;
  try {
    limit = await consumeRequestLimit(request, "privacy-deletion", 5, 3600);
  } catch {
    return NextResponse.json({ error: "rate_limiter_unavailable" }, { status: 503 });
  }
  if (!limit.allowed) {
    return NextResponse.json({ error: "rate_limit_exceeded" }, { status: 429, headers: rateLimitHeaders(limit) });
  }

  const supabase = await createRequestClient(request);
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) {
    return NextResponse.json({ error: "authentication_required" }, { status: 401, headers: rateLimitHeaders(limit) });
  }

  const existing = await supabase
    .from("privacy_requests")
    .select("id,status,execute_after,created_at")
    .eq("user_id", auth.user.id)
    .eq("request_type", "deletion")
    .in("status", ["requested", "verified", "processing"])
    .maybeSingle();
  if (existing.error) {
    return NextResponse.json({ error: "deletion_request_unavailable" }, { status: 503, headers: rateLimitHeaders(limit) });
  }
  if (existing.data) {
    return NextResponse.json({ data: { request: existing.data, already_requested: true } }, { headers: { "Cache-Control": "private, no-store", ...rateLimitHeaders(limit) } });
  }

  const executeAfter = new Date(Date.now() + 7 * 24 * 60 * 60_000).toISOString();
  const created = await supabase
    .from("privacy_requests")
    .insert({ user_id: auth.user.id, request_type: "deletion", execute_after: executeAfter })
    .select("id,status,execute_after,created_at")
    .single();
  if (created.error) {
    return NextResponse.json({ error: "deletion_request_unavailable" }, { status: 503, headers: rateLimitHeaders(limit) });
  }

  if (auth.user.email) {
    await enqueueNotification({
      userId: auth.user.id,
      email: auth.user.email,
      template: "privacy_request",
      payload: { request_type: "deletion" },
    }).catch((error) => console.error("Privacy deletion notification could not be queued", { userId: auth.user.id, error }));
  }

  return NextResponse.json(
    { data: { request: created.data, already_requested: false } },
    { status: 201, headers: { "Cache-Control": "private, no-store", ...rateLimitHeaders(limit) } },
  );
}
