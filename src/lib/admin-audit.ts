import type { SupabaseClient } from "@supabase/supabase-js";

type AuditValue = string | number | boolean | null | AuditValue[] | { [key: string]: AuditValue };

type AdminAuditEvent = {
  actorUserId: string;
  action: string;
  entityType: string;
  entityId?: string | null;
  organizationId?: string | null;
  metadata?: Record<string, unknown>;
};

const sensitiveKey = /(secret|password|token|cipher|authorization|cookie|api.?key|private.?key)/i;

export function sanitizeAuditMetadata(value: unknown, key = "", depth = 0): AuditValue {
  if (sensitiveKey.test(key)) return "[REDACTED]";
  if (depth > 5) return "[TRUNCATED]";
  if (value == null || typeof value === "boolean" || typeof value === "number") return value as null | boolean | number;
  if (typeof value === "string") return value.length > 500 ? `${value.slice(0, 497)}…` : value;
  if (Array.isArray(value)) return value.slice(0, 50).map(item => sanitizeAuditMetadata(item, key, depth + 1));
  if (typeof value === "object") return Object.fromEntries(Object.entries(value as Record<string, unknown>).slice(0, 50).map(([entryKey, entryValue]) => [entryKey, sanitizeAuditMetadata(entryValue, entryKey, depth + 1)]));
  return String(value).slice(0, 500);
}

export async function recordAdminAudit(client: SupabaseClient, event: AdminAuditEvent) {
  const { error } = await client.from("audit_logs").insert({
    actor_user_id: event.actorUserId,
    organization_id: event.organizationId ?? null,
    action: event.action,
    entity_type: event.entityType,
    entity_id: event.entityId ?? null,
    metadata: sanitizeAuditMetadata(event.metadata ?? {}),
  });
  if (error) throw new Error(`Audit log could not be written: ${error.message}`);
}
