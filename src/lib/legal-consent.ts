import { createHmac } from "crypto";
import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/admin";

export const LEGAL_VERSIONS = {
  terms: "2026-08-08.1",
  privacy: "2026-08-08.1",
  withdrawal: "2026-08-08.1",
} as const;

export type LegalContext = "account" | "subscription";

export async function hasCurrentLegalAcceptance(userId: string, context: LegalContext, organizationId?: string | null) {
  const admin = createAdminClient();
  let query = admin
    .from("legal_acceptances")
    .select("id")
    .eq("user_id", userId)
    .eq("context", context)
    .eq("terms_version", LEGAL_VERSIONS.terms)
    .eq("privacy_version", LEGAL_VERSIONS.privacy)
    .eq("terms_accepted", true)
    .eq("privacy_acknowledged", true)
    .limit(1);

  if (context === "subscription") {
    if (!organizationId) return false;
    query = query
      .eq("organization_id", organizationId)
      .eq("withdrawal_version", LEGAL_VERSIONS.withdrawal)
      .eq("withdrawal_acknowledged", true)
      .eq("immediate_service_requested", true);
  } else {
    query = query.is("organization_id", null);
  }

  const { data, error } = await query.maybeSingle();
  if (error) {
    console.error("Legal acceptance check failed", error);
    return false;
  }
  return Boolean(data);
}

export async function recordLegalAcceptance({
  userId,
  context,
  organizationId = null,
  withdrawalAcknowledged = false,
  immediateServiceRequested = false,
  metadata = {},
}: {
  userId: string;
  context: LegalContext;
  organizationId?: string | null;
  withdrawalAcknowledged?: boolean;
  immediateServiceRequested?: boolean;
  metadata?: Record<string, string | number | boolean | null>;
}) {
  const requestHeaders = await headers();
  const trustedForwarded = requestHeaders.get("x-vercel-forwarded-for");
  const developmentForwarded = process.env.NODE_ENV !== "production" ? requestHeaders.get("x-forwarded-for") : null;
  const ip = (trustedForwarded ?? requestHeaders.get("x-real-ip") ?? developmentForwarded)?.split(",")[0]?.trim() || "unknown";
  const userAgent = requestHeaders.get("user-agent")?.slice(0, 500) ?? "unknown";
  const evidenceKey = process.env.PLATFORM_SECRETS_ENCRYPTION_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!evidenceKey) throw new Error("Legal evidence hashing is not configured.");
  const evidenceHash = createHmac("sha256", evidenceKey).update(`${userId}|${ip}|${userAgent}`).digest("hex");

  const { error } = await createAdminClient().from("legal_acceptances").insert({
    user_id: userId,
    organization_id: organizationId,
    context,
    terms_version: LEGAL_VERSIONS.terms,
    privacy_version: LEGAL_VERSIONS.privacy,
    withdrawal_version: context === "subscription" ? LEGAL_VERSIONS.withdrawal : null,
    terms_accepted: true,
    privacy_acknowledged: true,
    withdrawal_acknowledged: withdrawalAcknowledged,
    immediate_service_requested: immediateServiceRequested,
    evidence_hash: evidenceHash,
    metadata,
  });
  if (error) throw new Error(`Legal acceptance could not be recorded: ${error.message}`);
}
