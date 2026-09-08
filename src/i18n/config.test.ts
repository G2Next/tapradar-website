import { expect, it } from "vitest";
import { localizedPath } from "./config";

it("normalizes language roots without losing query strings or fragments", () => {
  expect(localizedPath("en", "/")).toBe("/en");
  expect(localizedPath("de", "/en/")).toBe("/");
  expect(localizedPath("bs", "/en/#app")).toBe("/bs#app");
  expect(localizedPath("it", "/?source=google")).toBe("/it?source=google");
  expect(localizedPath("bs", "/agb/")).toBe("/bs/agb");
  expect(localizedPath("en", "/auth/callback")).toBe("/auth/callback");
});
