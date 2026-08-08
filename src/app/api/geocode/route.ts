import { NextRequest, NextResponse } from "next/server";
import { createRequestClient } from "@/lib/supabase/request";
import { consumeRequestLimit, rateLimitHeaders } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const supabase = await createRequestClient(request);
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return NextResponse.json({ error: "authentication_required" }, { status: 401 });

  let rateLimit;
  try { rateLimit = await consumeRequestLimit(request, "geocoding", 20, 60 * 60); }
  catch { return NextResponse.json({ error: "rate_limiter_unavailable" }, { status: 503 }); }
  if (!rateLimit.allowed) return NextResponse.json({ error: "rate_limit_exceeded" }, { status: 429, headers: rateLimitHeaders(rateLimit) });

  const query = request.nextUrl.searchParams.get("q")?.trim().slice(0, 300);
  const country = request.nextUrl.searchParams.get("country")?.trim().toLowerCase();
  if (!query || !country?.match(/^[a-z]{2}$/)) return NextResponse.json({ error: "invalid_address" }, { status: 400 });

  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("q", query);
  url.searchParams.set("countrycodes", country);
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("limit", "1");
  url.searchParams.set("addressdetails", "1");
  const response = await fetch(url, {
    headers: {
      "User-Agent": process.env.GEOCODING_USER_AGENT ?? "TapRadar/1.0 (support@tapradar.app)",
      "Accept-Language": "de,en;q=0.8",
    },
    cache: "no-store",
  });
  if (!response.ok) return NextResponse.json({ error: "geocoding_unavailable" }, { status: 503 });
  const results = await response.json() as Array<{ lat: string; lon: string; display_name: string }>;
  const match = results[0];
  if (!match) return NextResponse.json({ error: "address_not_found" }, { status: 404 });
  return NextResponse.json({ latitude: Number(match.lat), longitude: Number(match.lon), display_name: match.display_name }, { headers: rateLimitHeaders(rateLimit) });
}
