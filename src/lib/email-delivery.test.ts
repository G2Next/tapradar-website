import { afterEach, describe, expect, it, vi } from "vitest";
import { deliverEmailJob, makeDeliverySnapshot, type EmailJob } from "./email-delivery";
import type { EmailTemplate } from "./email-templates";
import type { createAdminClient } from "./supabase/admin";

const template: EmailTemplate = { event_id: "contact_reply", locale: "en", subject: "Re: {{subject}}", body: "{{response}}", enabled: true, revision: 4 };
const job: EmailJob = { id: "job-1", template: "contact_reply", recipient_email: "customer@example.test", locale: "en", payload: { subject: "Support", response: "Hello" }, force_test: false, delivery_snapshot: null, created_at: new Date().toISOString(), attempts: 1 };
const live = { test_mode: false, test_recipient: "test@example.test" };
const test = { ...live, test_mode: true };
function database(snapshotError = false) {
  const updates: Record<string, unknown>[] = [];
  return {
    updates,
    client: { from: (table: string) => table === "email_templates" ? {
      select: () => ({ eq: () => ({ eq: () => ({ single: async () => ({ data: template, error: null }) }) }) }),
    } : {
      update: (value: Record<string, unknown>) => { updates.push(value); return { eq: async () => ({ error: snapshotError ? { message: "database unavailable" } : null }) }; },
    } } as unknown as ReturnType<typeof createAdminClient>,
  };
}
afterEach(() => vi.unstubAllGlobals());
describe("email delivery safety", () => {
  it("routes all test-mode and forced-test messages exclusively to the test address", () => {
    for (const [queued, settings] of [[job, test], [{ ...job, force_test: true }, live]] as const) {
      const snapshot = makeDeliverySnapshot(queued, template, settings, "sender@example.test");
      expect(snapshot.to).toBe("test@example.test");
      expect(snapshot.is_test).toBe(true);
      expect(snapshot.subject).toMatch(/^\[TEST\]/);
    }
    expect(() => makeDeliverySnapshot(job, template, { test_mode: true, test_recipient: null }, "sender@example.test")).toThrow("Test recipient");
  });
  it("sends live mail in the recipient's selected template language", () => {
    const snapshot = makeDeliverySnapshot(job, template, live, "sender@example.test");
    expect(snapshot.to).toBe(job.recipient_email);
    expect(snapshot.locale).toBe("en");
    expect(snapshot.template_revision).toBe(4);
  });
  it("persists the snapshot before calling Resend and records the provider id", async () => {
    const db = database();
    const fetch = vi.fn(async () => {
      expect(db.updates[0]).toHaveProperty("delivery_snapshot");
      return { ok: true, json: async () => ({ id: "provider-1" }) };
    });
    vi.stubGlobal("fetch", fetch);
    await deliverEmailJob(db.client, job, test, "key", "sender@example.test");
    expect(fetch.mock.calls).toHaveLength(1);
    expect(db.updates[1]).toMatchObject({ status: "sent", provider_message_id: "provider-1" });
  });
  it("never sends when the snapshot cannot be logged", async () => {
    const fetch = vi.fn(); vi.stubGlobal("fetch", fetch);
    await expect(deliverEmailJob(database(true).client, job, test, "key", "sender@example.test")).rejects.toThrow("persist");
    expect(fetch).not.toHaveBeenCalled();
  });
  it("retries the exact same recipient, content and idempotency key after settings change", async () => {
    const snapshot = makeDeliverySnapshot(job, template, test, "old-sender@example.test");
    const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ id: "provider-1" }) });
    vi.stubGlobal("fetch", fetch);
    await deliverEmailJob(database().client, { ...job, delivery_snapshot: snapshot }, { test_mode: false, test_recipient: "changed@example.test" }, "key", "new-sender@example.test");
    const request = fetch.mock.calls[0][1];
    expect(JSON.parse(request.body)).toMatchObject({ to: ["test@example.test"], from: "old-sender@example.test", subject: snapshot.subject });
    expect(request.headers["Idempotency-Key"]).toBe("tapradar-job-1");
  });
  it("blocks stale ambiguous retries and live retries while test mode is enabled", async () => {
    const fetch = vi.fn(); vi.stubGlobal("fetch", fetch);
    const snapshot = makeDeliverySnapshot(job, template, live, "sender@example.test");
    await expect(deliverEmailJob(database().client, { ...job, delivery_snapshot: snapshot }, test, "key", "sender@example.test")).rejects.toThrow("paused");
    snapshot.prepared_at = "2020-01-01T00:00:00Z";
    await expect(deliverEmailJob(database().client, { ...job, delivery_snapshot: snapshot }, live, "key", "sender@example.test")).rejects.toThrow("window exceeded");
    expect(fetch).not.toHaveBeenCalled();
  });
});
