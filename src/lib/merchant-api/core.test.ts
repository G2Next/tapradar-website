import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  createRequestClient: vi.fn(),
  consumeRequestLimit: vi.fn(),
  hasCurrentLegalAcceptance: vi.fn(),
}));

vi.mock("@/lib/supabase/request", () => ({ createRequestClient: mocks.createRequestClient }));
vi.mock("@/lib/rate-limit", () => ({
  consumeRequestLimit: mocks.consumeRequestLimit,
  rateLimitHeaders: () => ({}),
}));
vi.mock("@/lib/legal-consent", () => ({ hasCurrentLegalAcceptance: mocks.hasCurrentLegalAcceptance }));
vi.mock("@/lib/supabase/admin", () => ({ createAdminClient: vi.fn() }));
vi.mock("@/lib/validation", () => ({
  isUuid: (value: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value),
}));

import { runIdempotentMutation, runMerchantRoute } from "./core";

const organizationId = "6ba7b810-9dad-41d1-80b4-00c04fd430c8";

function requestClient(user: { id: string } | null, membership: { role: string } | null = null) {
  const membershipQuery = {
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    maybeSingle: vi.fn().mockResolvedValue({ data: membership, error: null }),
  };
  return {
    auth: { getUser: vi.fn().mockResolvedValue({ data: { user }, error: null }) },
    from: vi.fn().mockReturnValue(membershipQuery),
  };
}

describe("runMerchantRoute", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.consumeRequestLimit.mockResolvedValue({ allowed: true, remaining: 39, resetAt: new Date().toISOString() });
    mocks.hasCurrentLegalAcceptance.mockResolvedValue(true);
  });

  it("rejects unauthenticated calls", async () => {
    mocks.createRequestClient.mockResolvedValue(requestClient(null));
    const response = await runMerchantRoute(new Request("https://tapradar.app/api/v1/merchant/organization", {
      headers: { "X-Organization-Id": organizationId },
    }), {}, vi.fn());
    expect(response.status).toBe(401);
    await expect(response.json()).resolves.toMatchObject({ error: { code: "authentication_required" } });
  });

  it("rejects an organization without an active membership", async () => {
    mocks.createRequestClient.mockResolvedValue(requestClient({ id: "user-1" }, null));
    const handler = vi.fn();
    const response = await runMerchantRoute(new Request("https://tapradar.app/api/v1/merchant/organization", {
      headers: { "X-Organization-Id": organizationId },
    }), {}, handler);
    expect(response.status).toBe(403);
    expect(handler).not.toHaveBeenCalled();
    await expect(response.json()).resolves.toMatchObject({ error: { code: "organization_access_denied" } });
  });

  it("rejects staff access to manager writes", async () => {
    mocks.createRequestClient.mockResolvedValue(requestClient({ id: "user-1" }, { role: "staff" }));
    const response = await runMerchantRoute(new Request("https://tapradar.app/api/v1/merchant/organization", {
      method: "PATCH",
      headers: { "X-Organization-Id": organizationId },
    }), { roles: ["owner", "manager"] }, vi.fn());
    expect(response.status).toBe(403);
    await expect(response.json()).resolves.toMatchObject({ error: { code: "role_forbidden" } });
  });
});

describe("runIdempotentMutation", () => {
  it("requires an idempotency key for every mutation", async () => {
    const operation = vi.fn();
    await expect(runIdempotentMutation({
      requestId: "request-1",
      request: new Request("https://tapradar.app/api/v1/merchant/locations", { method: "POST" }),
      supabase: {} as never,
      user: { id: "user-1" } as never,
      organizationId,
      role: "owner",
      allowedLocationIds: null,
    }, { name: "Wien" }, operation)).rejects.toMatchObject({
      status: 400,
      code: "idempotency_key_required",
    });
    expect(operation).not.toHaveBeenCalled();
  });
});
