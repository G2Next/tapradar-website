import { describe, expect, it } from "vitest";
import { isUuid, safeNextPath, slugify } from "./validation";

describe("safeNextPath", () => {
  it("allows local application paths", () => {
    expect(safeNextPath("/dashboard/locations?tab=open")).toBe("/dashboard/locations?tab=open");
  });

  it("blocks protocol-relative and absolute redirects", () => {
    expect(safeNextPath("//attacker.example")).toBe("/dashboard");
    expect(safeNextPath("https://attacker.example")).toBe("/dashboard");
  });
});

describe("slugify", () => {
  it("creates stable URL-safe slugs", () => {
    expect(slugify("Café Schön & Gut")).toBe("cafe-schon-gut");
  });
});

describe("isUuid", () => {
  it("accepts UUIDs and rejects arbitrary identifiers", () => {
    expect(isUuid("6ba7b810-9dad-41d1-80b4-00c04fd430c8")).toBe(true);
    expect(isUuid("not-a-uuid")).toBe(false);
  });
});
