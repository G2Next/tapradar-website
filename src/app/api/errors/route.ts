import { NextResponse } from "next/server";
import { recordAppError } from "@/lib/app-errors";
import { consumeRequestLimit, rateLimitHeaders } from "@/lib/rate-limit";
import { createRequestClient } from "@/lib/supabase/request";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let limit;
  try { limit = await consumeRequestLimit(request, "client-errors", 12, 60); }
  catch { return NextResponse.json({ error: "monitor_unavailable" }, { status: 503 }); }
  if (!limit.allowed) return NextResponse.json({ error: "rate_limit_exceeded" }, { status: 429, headers: rateLimitHeaders(limit) });

  let body: unknown;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "invalid_json" }, { status: 400, headers: rateLimitHeaders(limit) }); }
  if (!body || typeof body !== "object") return NextResponse.json({ error: "invalid_report" }, { status: 400, headers: rateLimitHeaders(limit) });

  const report = body as Record<string, unknown>;
  const source = typeof report.source === "string" ? report.source.slice(0, 100) : "browser";
  const route = typeof report.route === "string" ? report.route.slice(0, 300) : null;
  const message = typeof report.message === "string" ? report.message.slice(0, 2000) : "Unbekannter Browserfehler";
  const digest = typeof report.digest === "string" ? report.digest.slice(0, 200) : null;
  const supabase = await createRequestClient(request);
  const { data: auth } = await supabase.auth.getUser();
  const referenceCode = await recordAppError({ source, route, digest, error: new Error(message), userId: auth.user?.id ?? null });
  return NextResponse.json({ referenceCode }, { status: 201, headers: { "Cache-Control": "no-store", ...rateLimitHeaders(limit) } });
}
