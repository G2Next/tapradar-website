import { createHash } from "crypto";
import { createAdminClient } from "@/lib/supabase/admin";

export type RateLimitResult = { allowed: boolean; remaining: number; resetAt: string };

function requestIdentity(request: Request) {
  const trustedForwarded = request.headers.get("x-vercel-forwarded-for");
  const developmentForwarded = process.env.NODE_ENV !== "production" ? request.headers.get("x-forwarded-for") : null;
  const forwarded = trustedForwarded ?? request.headers.get("x-real-ip") ?? developmentForwarded;
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  const agent = request.headers.get("user-agent")?.slice(0, 160) ?? "unknown";
  return createHash("sha256").update(`${ip}|${agent}`).digest("hex");
}

export async function consumeRequestLimit(request: Request, bucket: string, maximum: number, windowSeconds = 60): Promise<RateLimitResult> {
  const admin = createAdminClient();
  const { data, error } = await admin.rpc("consume_rate_limit", {
    rate_bucket: bucket,
    rate_key_hash: requestIdentity(request),
    maximum_requests: maximum,
    window_seconds: windowSeconds,
  });
  if (error) throw new Error(`Rate limiter unavailable: ${error.message}`);
  const result = Array.isArray(data) ? data[0] : data;
  return { allowed: Boolean(result?.allowed), remaining: Number(result?.remaining ?? 0), resetAt: String(result?.reset_at ?? new Date().toISOString()) };
}

export function rateLimitHeaders(result: RateLimitResult) {
  return { "X-RateLimit-Remaining": String(result.remaining), "X-RateLimit-Reset": result.resetAt };
}
