import { createAdminClient } from "@/lib/supabase/admin";

export async function recordSystemEvent(input: { severity: "info" | "warning" | "error" | "critical"; source: string; message: string; correlationId?: string | null; organizationId?: string | null; metadata?: Record<string, unknown> }) {
  try {
    await createAdminClient().from("system_events").insert({
      severity: input.severity,
      source: input.source,
      message: input.message.slice(0, 1000),
      correlation_id: input.correlationId ?? null,
      organization_id: input.organizationId ?? null,
      metadata: input.metadata ?? {},
    });
  } catch (error) {
    console.error("Unable to persist system event", error);
  }
}
