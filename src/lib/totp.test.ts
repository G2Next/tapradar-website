import { describe,expect,it } from "vitest";
import { generateTotpSecret,totpCode,totpUri,verifyTotp } from "./totp";

describe("TOTP",()=>{
  it("matches the RFC 6238 SHA1 vector",()=>expect(totpCode("GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ",59_000,8)).toBe("94287082"));
  it("accepts the current code once its time step is known",()=>{const secret=generateTotpSecret();const time=1_800_000;const code=totpCode(secret,time);expect(verifyTotp(secret,code,time)).toBe(60);expect(verifyTotp(secret,"000000",time)).toBeNull()});
  it("creates a Google Authenticator compatible URI",()=>expect(totpUri("ABC234","admin+test@tapradar.app")).toContain("otpauth://totp/TapRadar%3Aadmin%2Btest%40tapradar.app?"));
});
