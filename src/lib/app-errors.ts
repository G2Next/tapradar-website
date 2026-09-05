type ErrorSeverity = "warning" | "error" | "critical";

export type AppErrorInput = {
  source: string;
  error: unknown;
  route?: string | null;
  operation?: string | null;
  errorCode?: string | null;
  digest?: string | null;
  severity?: ErrorSeverity;
  organizationId?: string | null;
  userId?: string | null;
  context?: Record<string, unknown>;
  referenceCode?: string;
};

const SECRET_PATTERN = /(bearer\s+)[a-z0-9._~-]+|((?:password|passwd|token|secret|api[_-]?key)\s*[=:]\s*)\S+/gi;
const EMAIL_PATTERN = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const JWT_PATTERN = /\beyJ[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}\b/g;

function cleanText(value: unknown, maximum = 2000) {
  return String(value ?? "Unbekannter Fehler")
    .replace(SECRET_PATTERN, (_, bearer, assignment) => `${bearer ?? assignment ?? ""}[geschützt]`)
    .replace(JWT_PATTERN, "[geschützter Token]")
    .replace(EMAIL_PATTERN, "[geschützte E-Mail]")
    .slice(0, maximum);
}

function safeContext(value: Record<string, unknown> | undefined) {
  if (!value) return {};
  const result: Record<string, string | number | boolean | null> = {};
  for (const [key, item] of Object.entries(value).slice(0, 20)) {
    if (item === null || typeof item === "number" || typeof item === "boolean") result[key.slice(0, 80)] = item;
    else if (typeof item === "string") result[key.slice(0, 80)] = cleanText(item, 500);
  }
  return result;
}

export function createErrorReference() {
  return crypto.randomUUID().replaceAll("-", "").slice(0, 10).toUpperCase();
}

export async function recordAppError(input: AppErrorInput) {
  const referenceCode = input.referenceCode ?? createErrorReference();
  const error = input.error;
  const message = error instanceof Error ? error.message : typeof error === "object" && error && "message" in error ? String(error.message) : String(error);
  const stack = error instanceof Error ? error.stack : null;
  const errorCode = input.errorCode ?? (typeof error === "object" && error && "code" in error ? String(error.code) : null);
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("app-error-monitor-unavailable", { referenceCode, source: input.source, message: cleanText(message) });
    return referenceCode;
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/app_error_events`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        reference_code: referenceCode,
        severity: input.severity ?? "error",
        source: cleanText(input.source, 100),
        route: input.route ? cleanText(input.route.split("?")[0], 300) : null,
        operation: input.operation ? cleanText(input.operation, 120) : null,
        error_code: errorCode ? cleanText(errorCode, 100) : null,
        message: cleanText(message),
        stack: stack ? cleanText(stack, 8000) : null,
        digest: input.digest ? cleanText(input.digest, 200) : null,
        organization_id: input.organizationId ?? null,
        user_id: input.userId ?? null,
        context: safeContext(input.context),
      }),
    });
    if (!response.ok) console.error("app-error-monitor-write-failed", { referenceCode, status: response.status });
  } catch (monitorError) {
    console.error("app-error-monitor-write-failed", { referenceCode, monitorError });
  }
  return referenceCode;
}

export function createMonitoredFetch(source: string, route?: string | null): typeof fetch {
  return async (input, init) => {
    try {
      const response = await fetch(input, init);
      if (!response.ok) {
        const payload = await response.clone().json().catch(() => null) as { code?: string; message?: string; error?: string; error_description?: string } | null;
        const endpoint = typeof input === "string" ? new URL(input).pathname : input instanceof URL ? input.pathname : new URL(input.url).pathname;
        await recordAppError({
          source,
          route,
          operation: endpoint.slice(0, 200),
          errorCode: payload?.code ?? String(response.status),
          error: new Error(payload?.message ?? payload?.error_description ?? payload?.error ?? `Datenbankanfrage fehlgeschlagen (${response.status})`),
          severity: response.status >= 500 ? "error" : "warning",
          context: { httpStatus: response.status },
        });
      }
      return response;
    } catch (error) {
      await recordAppError({ source, route, operation: "network", error, severity: "critical" });
      throw error;
    }
  };
}
