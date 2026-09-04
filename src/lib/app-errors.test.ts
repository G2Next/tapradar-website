import { afterEach, describe, expect, it, vi } from "vitest";
import { recordAppError } from "./app-errors";

describe("recordAppError", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  });

  it("removes secrets and personal email addresses before storage", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.SUPABASE_SERVICE_ROLE_KEY = "service-role-test";
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 201 });
    vi.stubGlobal("fetch", fetchMock);

    const referenceCode = await recordAppError({
      source: "test",
      error: new Error("password=hunter2 for max@example.com"),
      route: "/dashboard/vouchers?private=yes",
      context: { token: "token=very-secret", count: 2, nested: { ignored: true } },
    });

    expect(referenceCode).toMatch(/^[A-Z0-9]{10}$/);
    const request = fetchMock.mock.calls[0][1] as RequestInit;
    const body = JSON.parse(String(request.body));
    expect(body.route).toBe("/dashboard/vouchers");
    expect(body.message).not.toContain("hunter2");
    expect(body.message).not.toContain("max@example.com");
    expect(body.context.token).not.toContain("very-secret");
    expect(body.context.nested).toBeUndefined();
  });
});
