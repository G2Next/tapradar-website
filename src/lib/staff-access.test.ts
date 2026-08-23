import { describe, expect, it } from "vitest";
import { generateStaffPin, isBusinessCode, isStaffPin, normalizeBusinessCode } from "./staff-access";

describe("staff access credentials", () => {
  it("generates a six digit PIN including leading zeroes", () => {
    for (let index = 0; index < 100; index += 1) {
      expect(generateStaffPin()).toMatch(/^[0-9]{6}$/);
    }
  });

  it("normalizes and validates business codes", () => {
    expect(normalizeBusinessCode(" tap123 ")).toBe("TAP123");
    expect(isBusinessCode("TAP123")).toBe(true);
    expect(isBusinessCode("TA123")).toBe(false);
    expect(isBusinessCode("TÄP123")).toBe(false);
  });

  it("accepts only six digit employee PINs", () => {
    expect(isStaffPin("000001")).toBe(true);
    expect(isStaffPin("12345")).toBe(false);
    expect(isStaffPin("12345a")).toBe(false);
  });
});
