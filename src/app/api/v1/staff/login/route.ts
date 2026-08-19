import { createHash } from "crypto";
import { createAdminClient } from "@/lib/supabase/admin";
import { isBusinessCode, isStaffPin, normalizeBusinessCode } from "@/lib/staff-access";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { business_code?: unknown; pin?: unknown } | null;
  const businessCode = normalizeBusinessCode(body?.business_code);
  const pin = typeof body?.pin === "string" ? body.pin.trim() : "";
  if (!isBusinessCode(businessCode) || !isStaffPin(pin)) return error("invalid_credentials", 401);

  const { data, error: databaseError } = await createAdminClient().rpc("staff_pin_sign_in", {
    p_business_code: businessCode,
    p_pin: pin,
    p_attempt_key: attemptKey(request),
  });
  if (databaseError) return error("login_unavailable", 503);
  const result = data as { error?: string; retry_after?: number } | null;
  if (result?.error === "TOO_MANY_ATTEMPTS") {
    return Response.json({ error: { code: "too_many_attempts", message: "Zu viele Anmeldeversuche." } }, {
      status: 429,
      headers: responseHeaders({ "Retry-After": String(Math.max(1, result.retry_after ?? 900)) }),
    });
  }
  if (!result || result.error) return error("invalid_credentials", 401);
  return Response.json({ data: result }, { headers: responseHeaders() });
}

function attemptKey(request: Request) {
  const address = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")?.trim()
    || "unknown";
  return createHash("sha256").update(address).digest("hex");
}

function error(code: string, status: number) {
  const message = code === "invalid_credentials" ? "Business-Code oder PIN ist falsch." : "Die Anmeldung ist momentan nicht verfügbar.";
  return Response.json({ error: { code, message } }, { status, headers: responseHeaders() });
}

function responseHeaders(extra: Record<string, string> = {}) {
  return { "Cache-Control": "private, no-store", "X-TapRadar-Staff-API-Version": "1", ...extra };
}
