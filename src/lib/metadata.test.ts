import { describe, expect, it } from "vitest";
import { locales } from "@/i18n/config";
import { createPublicPageMetadata } from "./metadata";

const headings = ["Allgemeine Geschäftsbedingungen", "Geschäftskunden-AGB", "Verbraucher-AGB", "Widerrufsbelehrung", "Datenschutzerklärung", "Impressum"];

describe("translated public metadata", () => {
  for (const locale of locales.filter((locale) => locale !== "de")) {
    it(`localizes legal titles for ${locale} in search and sharing metadata`, () => {
      for (const heading of headings) {
        const metadata = createPublicPageMetadata(locale, "/agb", `${heading} | TapRadar`, "Description");
        expect(metadata.title, `${locale}: ${heading}`).not.toBe(`${heading} | TapRadar`);
        expect(metadata.openGraph?.title).toBe(metadata.title);
        expect(metadata.twitter?.title).toBe(metadata.title);
      }
    });
  }
  it("keeps German titles and canonical language URLs", () => {
    const metadata = createPublicPageMetadata("de", "/", "TapRadar", "Beschreibung");
    expect(metadata.title).toBe("TapRadar");
    expect(metadata.alternates?.canonical).toBe("/");
    expect(metadata.alternates?.languages?.en).toBe("/en");
  });
});
