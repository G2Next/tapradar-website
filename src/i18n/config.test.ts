import { expect, it } from "vitest";
import { hasTranslation, localizedPath, translatedRoutes } from "./config";

it("normalizes language roots without losing query strings or fragments", () => {
  expect(localizedPath("en", "/")).toBe("/en");
  expect(localizedPath("de", "/en/")).toBe("/");
  expect(localizedPath("bs", "/en/#app")).toBe("/bs#app");
  expect(localizedPath("it", "/?source=google")).toBe("/it?source=google");
  expect(localizedPath("bs", "/agb/")).toBe("/bs/agb");
  expect(localizedPath("en", "/auth/callback")).toBe("/auth/callback");
});

it("keeps the contests page available when switching languages", () => {
  expect(hasTranslation("/gewinnspiele")).toBe(true);
  expect(hasTranslation("/en/gewinnspiele")).toBe(true);
  expect(localizedPath("tr", "/en/gewinnspiele")).toBe("/tr/gewinnspiele");
  expect(translatedRoutes).toContain("/gewinnspiele");
});
