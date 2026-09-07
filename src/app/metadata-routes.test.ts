import { describe, expect, it } from "vitest";
import robots from "./robots";
import sitemap from "./sitemap";

describe("public metadata routes", () => {
  it("never leaks a local deployment URL into robots.txt", () => {
    const previousSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000";

    try {
      const result = robots();
      expect(result.host).toBe("https://www.tapradar.app");
      expect(result.sitemap).toBe("https://www.tapradar.app/sitemap.xml");
    } finally {
      if (previousSiteUrl === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
      else process.env.NEXT_PUBLIC_SITE_URL = previousSiteUrl;
    }
  });

  it("only emits canonical production URLs in the sitemap", () => {
    const previousSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000";

    try {
      const entries = sitemap();
      expect(entries.length).toBeGreaterThan(0);
      for (const entry of entries) {
        expect(entry.url).toMatch(/^https:\/\/www\.tapradar\.app(?:\/|$)/);
        expect(entry.url).not.toContain("localhost");
        for (const alternate of Object.values(entry.alternates?.languages ?? {})) {
          expect(alternate).toMatch(/^https:\/\/www\.tapradar\.app(?:\/|$)/);
        }
      }
    } finally {
      if (previousSiteUrl === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
      else process.env.NEXT_PUBLIC_SITE_URL = previousSiteUrl;
    }
  });
});

describe("crawlable canonical URLs", () => {
  it("allows Apple icons while excluding only the app path boundary", () => {
    const rules = robots().rules;
    if (Array.isArray(rules) || !rules) throw new Error("Expected shared crawler rules");
    const disallowed = [rules.disallow].flat().filter((rule): rule is string => !!rule);
    const isBlocked = (path: string) => disallowed.some((rule) =>
      rule.endsWith("$") ? path === rule.slice(0, -1) : path.startsWith(rule));
    expect(isBlocked("/apple-icon?ad969dd1f23a2787")).toBe(false);
    expect(isBlocked("/app")).toBe(true);
    expect(isBlocked("/app?source=google")).toBe(true);
    expect(isBlocked("/app/settings")).toBe(true);
    expect(isBlocked("/fuer-geschaefte")).toBe(false);
  });

  it("does not submit redirects, duplicate URLs or invented modification dates", () => {
    const entries = sitemap();
    expect(entries).toHaveLength(135);
    expect(new Set(entries.map((entry) => entry.url)).size).toBe(entries.length);
    for (const entry of entries) {
      const paths = [entry.url, ...Object.values(entry.alternates?.languages ?? {})];
      for (const url of paths) {
        const path = new URL(url!).pathname;
        expect(path === "/" || !path.endsWith("/"), path).toBe(true);
        expect(path).not.toMatch(/\/(preis|my-konto|feed|login)(\/|$)/);
      }
      expect(entry.lastModified).toBeUndefined();
    }
  });
});
