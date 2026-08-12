import type { MetadataRoute } from "next";
import { localeAlternates, locales, localizedPath } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tapradar.app";
  const routes = ["/", "/fuer-geschaefte", "/kontakt", "/impressum", "/datenschutz", "/agb", "/agb-geschaeftskunden", "/agb-verbraucher", "/widerrufsbelehrung"];
  return routes.flatMap((route) => locales.map((locale) => ({
    url: `${baseUrl}${localizedPath(locale, route)}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
    priority: route === "/" ? 1 : route === "/fuer-geschaefte" ? 0.9 : 0.5,
    alternates: { languages: Object.fromEntries(Object.entries(localeAlternates(route)).map(([language, path]) => [language, `${baseUrl}${path}`])) },
  })));
}
