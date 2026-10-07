import { describe, expect, it } from "vitest";
import { adminMfaDestination, safeAdminDestination } from "./admin-security";

describe("admin MFA routing",()=>{
  it("requires setup without a verified factor",()=>expect(adminMfaDestination(false,false)).toBe("/admin/security/setup"));
  it("requires a challenge for an enrolled factor",()=>expect(adminMfaDestination(true,false)).toBe("/admin/security/verify"));
  it("allows a verified admin session",()=>expect(adminMfaDestination(true,true)).toBeNull());
  it("only accepts local admin destinations",()=>{expect(safeAdminDestination("/admin/customers")).toBe("/admin/customers");expect(safeAdminDestination("//evil.example")).toBe("/admin");expect(safeAdminDestination("/dashboard")).toBe("/admin")});
});
