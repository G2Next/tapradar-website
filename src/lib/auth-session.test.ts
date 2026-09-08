import { describe, expect, it } from "vitest";
import { withoutCookiePersistence } from "./auth-session";

describe("auth session cookies", () => {
  it("turns a persistent cookie into a browser-session cookie", () => {
    expect(withoutCookiePersistence({ path: "/", sameSite: "lax" as const, maxAge: 3600, expires: new Date(0) }))
      .toEqual({ path: "/", sameSite: "lax" });
  });
});
