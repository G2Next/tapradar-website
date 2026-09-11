import { afterEach, describe, expect, it, vi } from "vitest";
import { verifyContactCaptcha } from "./captcha";

afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); });
function configured(result: unknown) {
  vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret");
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://www.tapradar.app");
  const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => result });
  vi.stubGlobal("fetch", fetch);
  return fetch;
}
describe("contact CAPTCHA", () => {
  it("accepts only a validated contact token for the configured hostname", async () => {
    const fetch = configured({ success: true, action: "contact", hostname: "www.tapradar.app" });
    expect(await verifyContactCaptcha("valid-token", "192.0.2.10")).toBe(true);
    expect(JSON.parse(fetch.mock.calls[0][1].body)).toEqual({ secret: "test-secret", response: "valid-token", remoteip: "192.0.2.10" });
  });
  it.each([
    { success: false, "error-codes": ["timeout-or-duplicate"] },
    { success: true, action: "login", hostname: "www.tapradar.app" },
    { success: true, action: "contact", hostname: "attacker.example" },
    { success: true },
  ])("rejects forged, replayed, wrong-action or wrong-host tokens", async (result) => {
    configured(result);
    expect(await verifyContactCaptcha("token")).toBe(false);
  });
  it("fails closed when unconfigured, missing tokens or Cloudflare is unreachable", async () => {
    const fetch = configured({ success: true });
    expect(await verifyContactCaptcha("")).toBe(false);
    expect(await verifyContactCaptcha("a".repeat(2049))).toBe(false);
    expect(fetch).not.toHaveBeenCalled();
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    expect(await verifyContactCaptcha("token")).toBe(false);
    vi.stubEnv("TURNSTILE_SECRET_KEY", "secret");
    fetch.mockRejectedValue(new Error("network"));
    expect(await verifyContactCaptcha("token")).toBe(false);
  });
});
