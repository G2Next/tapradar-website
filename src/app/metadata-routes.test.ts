import { describe, expect, it } from "vitest";
import robots from "./robots";
import sitemap from "./sitemap";

describe("public metadata routes", () => {
  it("never leaks a local deployment URL into robots.txt", () => {
    const previousSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000";

    try {
      const result = robots();
      expect(result.host).toBe("https://tapradar.app");
      expect(result.sitemap).toBe("https://tapradar.app/sitemap.xml");
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
        expect(entry.url).toMatch(/^https:\/\/tapradar\.app(?:\/|$)/);
        expect(entry.url).not.toContain("localhost");
        for (const alternate of Object.values(entry.alternates?.languages ?? {})) {
          expect(alternate).toMatch(/^https:\/\/tapradar\.app(?:\/|$)/);
        }
      }
    } finally {
      if (previousSiteUrl === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
      else process.env.NEXT_PUBLIC_SITE_URL = previousSiteUrl;
    }
  });
});
