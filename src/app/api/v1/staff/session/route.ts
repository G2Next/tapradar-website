import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const token = bearerToken(request);
  if (!token) return unauthorized();
  const { data, error } = await createAdminClient().rpc("staff_session_context", { p_session_token: token });
  if (error || !data) return unauthorized();
  return Response.json({ data }, { headers: responseHeaders() });
}

export async function DELETE(request: Request) {
  const token = bearerToken(request);
  if (!token) return unauthorized();
  const { error } = await createAdminClient().rpc("staff_sign_out", { p_session_token: token });
  if (error) return Response.json({ error: { code: "logout_unavailable", message: "Abmeldung nicht verfügbar." } }, { status: 503, headers: responseHeaders() });
  return Response.json({ data: { ok: true } }, { headers: responseHeaders() });
}

function bearerToken(request: Request) {
  const match = request.headers.get("authorization")?.match(/^Bearer ([a-f0-9]{64})$/i);
  return match?.[1] ?? null;
}

function unauthorized() {
  return Response.json({ error: { code: "invalid_staff_session", message: "Mitarbeitersitzung ist ungültig oder abgelaufen." } }, { status: 401, headers: responseHeaders() });
}

function responseHeaders() {
  return { "Cache-Control": "private, no-store", "X-TapRadar-Staff-API-Version": "1" };
}
