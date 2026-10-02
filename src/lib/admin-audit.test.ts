import { describe, expect, it } from "vitest";
import { sanitizeAuditMetadata } from "./admin-audit";

describe("sanitizeAuditMetadata", () => {
  it("redacts credentials recursively", () => {
    expect(sanitizeAuditMetadata({ provider: "stripe", apiKey: "live-secret", nested: { webhook_secret: "hidden" } })).toEqual({ provider: "stripe", apiKey: "[REDACTED]", nested: { webhook_secret: "[REDACTED]" } });
  });

  it("keeps useful non-sensitive values", () => {
    expect(sanitizeAuditMetadata({ status: "approved", active: true, attempts: 2 })).toEqual({ status: "approved", active: true, attempts: 2 });
  });

  it("limits oversized strings and arrays", () => {
    const result = sanitizeAuditMetadata({ note: "x".repeat(600), values: Array.from({ length: 60 }, (_, index) => index) }) as { note: string; values: number[] };
    expect(result.note.length).toBe(498);
    expect(result.values).toHaveLength(50);
  });
});
