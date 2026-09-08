import type { MetadataRoute } from "next";
import { localeAlternates, locales, localizedPath } from "@/i18n/config";
import { PUBLIC_SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/fuer-geschaefte", "/kontakt", "/impressum", "/datenschutz", "/agb", "/agb-geschaeftskunden", "/agb-verbraucher", "/widerrufsbelehrung"];
  return routes.flatMap((route) => locales.map((locale) => ({
    url: `${PUBLIC_SITE_URL}${localizedPath(locale, route)}`,
    changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
    priority: route === "/" ? 1 : route === "/fuer-geschaefte" ? 0.9 : 0.5,
    alternates: { languages: Object.fromEntries(Object.entries(localeAlternates(route)).map(([language, path]) => [language, `${PUBLIC_SITE_URL}${path}`])) },
  })));
}
