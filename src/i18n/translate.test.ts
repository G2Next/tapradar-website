import { describe, expect, it } from "vitest";
import { locales } from "./config";
import { dashboardMessages } from "./dashboard";
import { chromeMessages } from "./chrome";
import { homeMessages } from "./home";
import { planMessages } from "./plans";
import { translateText } from "./translate";

describe("translation completeness", () => {
  it("translates recent portal and profile copy in every non-German locale", () => {
    for (const locale of locales.filter((value) => value !== "de")) {
      expect(translateText(locale, "Kundenprofil"), locale).not.toBe("Kundenprofil");
      expect(translateText(locale, "Medien und Dateien"), locale).not.toBe("Medien und Dateien");
      expect(translateText(locale, "Unternehmen speichern"), locale).not.toBe("Unternehmen speichern");
    }
  });

  it("provides structured messages for every selectable locale", () => {
    for (const locale of locales) {
      expect(dashboardMessages[locale]?.welcome, locale).toBeTruthy();
      expect(chromeMessages[locale]?.nav.home, locale).toBeTruthy();
      expect(homeMessages[locale]?.hero.title, locale).toBeTruthy();
      expect(planMessages[locale]?.plans).toHaveLength(3);
    }
  });

  it("keeps Serbian portal translations in Latin script", () => {
    expect(translateText("sr-Latn", "Medien und Dateien")).toBe("Mediji i datoteke");
    expect(translateText("sr-Latn", "Seite nicht gefunden | TapRadar")).toContain("TapRadar");
  });

  it("preserves product names and uses approval terminology", () => {
    for (const locale of ["it", "pl", "hu", "hr"] as const) {
      expect(translateText(locale, "Seite nicht gefunden | TapRadar"), locale).toContain("TapRadar");
    }
    expect(translateText("en", "Marketing-Freigaben")).toBe("Marketing approvals");
  });
});
