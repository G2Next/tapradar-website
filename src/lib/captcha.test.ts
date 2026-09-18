import { afterEach, describe, expect, it, vi } from "vitest";
import { verifyContactCaptcha } from "./captcha";

afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); });
function configured(result: unknown) {
  vi.stubEnv("RECAPTCHA_SECRET_KEY", "test-secret");
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://www.tapradar.app");
  const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => result });
  vi.stubGlobal("fetch", fetch);
  return fetch;
}
describe("contact CAPTCHA", () => {
  it("accepts only a high-enough contact score for the configured hostname", async () => {
    const fetch = configured({ success: true, score: 0.9, action: "contact", hostname: "www.tapradar.app" });
    expect(await verifyContactCaptcha("valid-token", "192.0.2.10")).toBe(true);
    expect(fetch.mock.calls[0][0]).toBe("https://www.google.com/recaptcha/api/siteverify");
    expect(Object.fromEntries(new URLSearchParams(String(fetch.mock.calls[0][1].body)))).toEqual({ secret: "test-secret", response: "valid-token", remoteip: "192.0.2.10" });
  });
  it.each([
    { success: false, score: 0.9, action: "contact", hostname: "www.tapradar.app" },
    { success: true, score: 0.49, action: "contact", hostname: "www.tapradar.app" },
    { success: true, score: 0.9, action: "login", hostname: "www.tapradar.app" },
    { success: true, score: 0.9, action: "contact", hostname: "attacker.example" },
    { success: true },
  ])("rejects failed, low-score, wrong-action or wrong-host tokens", async (result) => {
    configured(result);
    expect(await verifyContactCaptcha("token")).toBe(false);
  });
  it("fails closed when unconfigured, missing tokens or Google is unreachable", async () => {
    const fetch = configured({ success: true });
    expect(await verifyContactCaptcha("")).toBe(false);
    expect(await verifyContactCaptcha("a".repeat(4097))).toBe(false);
    expect(fetch).not.toHaveBeenCalled();
    vi.stubEnv("RECAPTCHA_SECRET_KEY", "");
    expect(await verifyContactCaptcha("token")).toBe(false);
    vi.stubEnv("RECAPTCHA_SECRET_KEY", "secret");
    fetch.mockRejectedValue(new Error("network"));
    expect(await verifyContactCaptcha("token")).toBe(false);
  });
});
