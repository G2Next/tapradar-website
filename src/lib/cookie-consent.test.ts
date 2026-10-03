import { describe, expect, it } from "vitest";
import {
  COOKIE_CONSENT_NAME,
  createConsent,
  hasConsent,
  parseConsent,
  serializeConsent,
} from "./cookie-consent";

describe("cookie consent", () => {
  it("keeps optional categories disabled until a decision exists", () => {
    expect(hasConsent(undefined, "necessary")).toBe(true);
    expect(hasConsent(undefined, "analytics")).toBe(false);
    expect(hasConsent(undefined, "marketing")).toBe(false);
  });

  it("parses an encoded cookie value", () => {
    const consent = createConsent(true, false, new Date("2026-10-02T08:30:00.000Z"));
    expect(parseConsent(serializeConsent(consent))).toEqual(consent);
  });

  it("parses the consent cookie from a request", () => {
    const consent = createConsent(false, true, new Date("2026-10-02T08:30:00.000Z"));
    const request = new Request("https://www.tapradar.app", {
      headers: { cookie: `another=value; ${COOKIE_CONSENT_NAME}=${serializeConsent(consent)}` },
    });
    expect(parseConsent(request)).toEqual(consent);
    expect(hasConsent(request, "analytics")).toBe(false);
    expect(hasConsent(request, "marketing")).toBe(true);
  });

  it("rejects malformed and outdated consent values", () => {
    const malformed = encodeURIComponent(JSON.stringify({ necessary: true, analytics: true }));
    const outdated = encodeURIComponent(JSON.stringify({
      ...createConsent(true, true),
      version: 0,
    }));
    expect(parseConsent(malformed)).toBeNull();
    expect(hasConsent(outdated, "analytics")).toBe(false);
    expect(hasConsent(outdated, "marketing")).toBe(false);
  });
});
