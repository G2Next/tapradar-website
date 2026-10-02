import { describe, expect, it } from "vitest";
import { adminMfaDestination, safeAdminDestination } from "./admin-security";

describe("admin MFA routing",()=>{
  it("requires setup without a verified factor",()=>expect(adminMfaDestination("aal1","aal1")).toBe("/admin/security/setup"));
  it("requires a challenge when aal2 is available",()=>expect(adminMfaDestination("aal1","aal2")).toBe("/admin/security/verify"));
  it("allows an aal2 session",()=>expect(adminMfaDestination("aal2","aal2")).toBeNull());
  it("only accepts local admin destinations",()=>{expect(safeAdminDestination("/admin/customers")).toBe("/admin/customers");expect(safeAdminDestination("//evil.example")).toBe("/admin");expect(safeAdminDestination("/dashboard")).toBe("/admin")});
});
