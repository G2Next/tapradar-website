import { createHash, randomUUID } from "crypto";
import type { SupabaseClient, User } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import type { z } from "zod";
import { hasCurrentLegalAcceptance } from "@/lib/legal-consent";
import { consumeRequestLimit, rateLimitHeaders, type RateLimitResult } from "@/lib/rate-limit";
import { createAdminClient } from "@/lib/supabase/admin";
import { createRequestClient } from "@/lib/supabase/request";
import { isUuid } from "@/lib/validation";

export type MerchantRole = "owner" | "manager" | "staff";

export type MerchantContext = {
  requestId: string;
  request: Request;
  supabase: SupabaseClient;
  user: User;
  organizationId: string | null;
  role: MerchantRole | null;
  allowedLocationIds: string[] | null;
};

export type MerchantResult = {
  data: unknown;
  status?: number;
  headers?: Record<string, string>;
};

type RouteOptions = {
  organization?: "none" | "optional" | "required";
  roles?: MerchantRole[];
  requireLegal?: boolean;
  rateLimit?: number;
  rateWindowSeconds?: number;
};

export class MerchantApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: string,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
  }
}

export async function runMerchantRoute(
  request: Request,
  options: RouteOptions,
  handler: (context: MerchantContext) => Promise<MerchantResult>,
) {
  const requestId = request.headers.get("x-request-id")?.slice(0, 80) || randomUUID();
  let rateLimit: RateLimitResult;
  try {
    rateLimit = await consumeRequestLimit(
      request,
      `merchant-api:${new URL(request.url).pathname}`,
      options.rateLimit ?? (request.method === "GET" ? 120 : 40),
      options.rateWindowSeconds ?? 60,
    );
  } catch (error) {
    console.error("Merchant API rate limiter failed", { requestId, error });
    return errorResponse(requestId, new MerchantApiError(503, "rate_limiter_unavailable", "Rate limiter is unavailable."));
  }
  if (!rateLimit.allowed) {
    return errorResponse(requestId, new MerchantApiError(429, "rate_limit_exceeded", "Too many requests."), rateLimit);
  }

  try {
    const supabase = await createRequestClient(request) as SupabaseClient;
    const { data: auth, error: authError } = await supabase.auth.getUser();
    if (authError || !auth.user) throw new MerchantApiError(401, "authentication_required", "A valid website access token is required.");

    const organizationMode = options.organization ?? "required";
    const suppliedOrganizationId = request.headers.get("x-organization-id")?.trim() || null;
    if (suppliedOrganizationId && !isUuid(suppliedOrganizationId)) {
      throw new MerchantApiError(400, "invalid_organization", "X-Organization-Id must be a UUID.");
    }
    if (organizationMode === "required" && !suppliedOrganizationId) {
      throw new MerchantApiError(400, "organization_required", "X-Organization-Id is required.");
    }

    let role: MerchantRole | null = null;
    let allowedLocationIds: string[] | null = null;
    if (suppliedOrganizationId) {
      const { data: membership, error: membershipError } = await supabase
        .from("organization_members")
        .select("role")
        .eq("organization_id", suppliedOrganizationId)
        .eq("user_id", auth.user.id)
        .eq("is_active", true)
        .maybeSingle();
      if (membershipError) throw databaseError(membershipError);
      if (!membership) throw new MerchantApiError(403, "organization_access_denied", "No active membership exists for this organization.");
      role = membership.role as MerchantRole;

      if (role === "staff") {
        const { data: assignments, error: assignmentError } = await supabase
          .from("location_members")
          .select("location_id")
          .eq("organization_id", suppliedOrganizationId)
          .eq("user_id", auth.user.id)
          .eq("is_active", true);
        if (assignmentError) throw databaseError(assignmentError);
        allowedLocationIds = (assignments ?? []).map((assignment) => assignment.location_id as string);
      }
    }

    if (options.roles && (!role || !options.roles.includes(role))) {
      throw new MerchantApiError(403, "role_forbidden", "This role cannot perform the requested action.");
    }
    if (options.requireLegal && !(await hasCurrentLegalAcceptance(auth.user.id, "account"))) {
      throw new MerchantApiError(428, "legal_acceptance_required", "Current legal terms must be accepted first.", {
        consent_endpoint: "/api/v1/legal/consent",
      });
    }

    const result = await handler({
      requestId,
      request,
      supabase,
      user: auth.user,
      organizationId: organizationMode === "none" ? null : suppliedOrganizationId,
      role,
      allowedLocationIds,
    });
    return successResponse(requestId, result, rateLimit);
  } catch (error) {
    const apiError = error instanceof MerchantApiError
      ? error
      : new MerchantApiError(500, "internal_error", "The request could not be completed.");
    if (!(error instanceof MerchantApiError)) console.error("Merchant API failed", { requestId, error });
    return errorResponse(requestId, apiError, rateLimit);
  }
}

export async function parseJson<T extends z.ZodType>(request: Request, schema: T): Promise<z.output<T>> {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    throw new MerchantApiError(400, "invalid_json", "Request body must be valid JSON.");
  }
  const result = schema.safeParse(input);
  if (!result.success) {
    throw new MerchantApiError(422, "validation_failed", "Request validation failed.", result.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message,
    })));
  }
  return result.data;
}

export function databaseError(error: { code?: string; message?: string }) {
  if (error.code === "23505") return new MerchantApiError(409, "resource_conflict", "A resource with these values already exists.");
  if (error.code === "23503") return new MerchantApiError(409, "resource_in_use", "The resource is still referenced by other records.");
  if (error.code === "42501") return new MerchantApiError(403, "database_access_denied", "Database policy denied the operation.");
  return new MerchantApiError(503, "database_unavailable", "The database operation failed.");
}

export async function requireLocation(context: MerchantContext, locationId: string | null) {
  if (!locationId) return;
  const { data, error } = await context.supabase
    .from("locations")
    .select("id")
    .eq("id", locationId)
    .eq("organization_id", context.organizationId!)
    .eq("is_active", true)
    .maybeSingle();
  if (error) throw databaseError(error);
  if (!data) throw new MerchantApiError(422, "invalid_location", "The location does not belong to the selected organization.");
}

export async function requireAsset(context: MerchantContext, assetId: string | null) {
  if (!assetId) return;
  const { data, error } = await context.supabase
    .from("organization_assets")
    .select("id")
    .eq("id", assetId)
    .eq("organization_id", context.organizationId!)
    .maybeSingle();
  if (error) throw databaseError(error);
  if (!data) throw new MerchantApiError(422, "invalid_asset", "The media asset does not belong to the selected organization.");
}

export async function requireOfferPlan(context: MerchantContext) {
  const { data, error } = await context.supabase
    .from("organizations")
    .select("plan")
    .eq("id", context.organizationId!)
    .single();
  if (error) throw databaseError(error);
  if (!data || !["gold", "platinum"].includes(data.plan)) {
    throw new MerchantApiError(403, "plan_feature_unavailable", "Actions and coupons require Gold or Platinum.");
  }
}

export async function runIdempotentMutation(
  context: MerchantContext,
  input: unknown,
  operation: () => Promise<MerchantResult>,
): Promise<MerchantResult> {
  const key = context.request.headers.get("idempotency-key")?.trim();
  if (!key) throw new MerchantApiError(400, "idempotency_key_required", "Idempotency-Key is required for mutations.");
  if (!isUuid(key)) throw new MerchantApiError(400, "invalid_idempotency_key", "Idempotency-Key must be a UUID.");
  if (!context.organizationId) throw new MerchantApiError(400, "organization_required", "Organization is required for idempotent writes.");

  const method = context.request.method;
  const path = new URL(context.request.url).pathname;
  const requestHash = createHash("sha256").update(JSON.stringify({ method, path, input })).digest("hex");
  const admin = createAdminClient();
  const lookup = () => admin.from("merchant_api_idempotency").select("id,method,request_path,request_hash,response_status,response_body,locked_at,expires_at")
    .eq("user_id", context.user.id).eq("organization_id", context.organizationId!).eq("idempotency_key", key).maybeSingle();

  const lookupResult = await lookup();
  let existing = lookupResult.data;
  if (lookupResult.error) throw databaseError(lookupResult.error);
  if (existing && new Date(existing.expires_at).getTime() <= Date.now()) {
    const { error } = await admin.from("merchant_api_idempotency").delete().eq("id", existing.id);
    if (error) throw databaseError(error);
    existing = null;
  }
  if (existing) {
    if (existing.method !== method || existing.request_path !== path || existing.request_hash !== requestHash) {
      throw new MerchantApiError(409, "idempotency_key_reused", "This Idempotency-Key was already used for another request.");
    }
    if (existing.response_status && existing.response_body) {
      return { data: existing.response_body, status: existing.response_status, headers: { "X-Idempotent-Replay": "true" } };
    }
    if (Date.now() - new Date(existing.locked_at).getTime() < 120_000) {
      throw new MerchantApiError(409, "request_in_progress", "A request with this Idempotency-Key is still running.");
    }
    const { error } = await admin.from("merchant_api_idempotency").delete().eq("id", existing.id);
    if (error) throw databaseError(error);
  }

  const { data: claim, error: claimError } = await admin.from("merchant_api_idempotency").insert({
    user_id: context.user.id,
    organization_id: context.organizationId,
    idempotency_key: key,
    method,
    request_path: path,
    request_hash: requestHash,
  }).select("id").single();
  if (claimError) {
    if (claimError.code === "23505") throw new MerchantApiError(409, "request_in_progress", "A request with this Idempotency-Key is still running.");
    throw databaseError(claimError);
  }

  try {
    const result = await operation();
    const status = result.status ?? 200;
    const { error: completeError } = await admin.from("merchant_api_idempotency").update({
      response_status: status,
      response_body: result.data,
      completed_at: new Date().toISOString(),
    }).eq("id", claim.id);
    if (completeError) console.error("Could not persist idempotent response", { requestId: context.requestId, completeError });
    return result;
  } catch (error) {
    await admin.from("merchant_api_idempotency").delete().eq("id", claim.id);
    throw error;
  }
}

function successResponse(requestId: string, result: MerchantResult, rateLimit: RateLimitResult) {
  return NextResponse.json({ data: result.data, meta: { request_id: requestId } }, {
    status: result.status ?? 200,
    headers: responseHeaders(requestId, rateLimit, result.headers),
  });
}

function errorResponse(requestId: string, error: MerchantApiError, rateLimit?: RateLimitResult) {
  return NextResponse.json({ error: { code: error.code, message: error.message, details: error.details, request_id: requestId } }, {
    status: error.status,
    headers: responseHeaders(requestId, rateLimit),
  });
}

function responseHeaders(requestId: string, rateLimit?: RateLimitResult, extra?: Record<string, string>) {
  return {
    "Cache-Control": "private, no-store",
    "X-TapRadar-Merchant-API-Version": "1",
    "X-Request-Id": requestId,
    ...(rateLimit ? rateLimitHeaders(rateLimit) : {}),
    ...extra,
  };
}
