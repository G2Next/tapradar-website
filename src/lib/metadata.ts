import type { Metadata } from "next";
import { localeAlternates, localizedPath, type Locale } from "@/i18n/config";
import { translateText } from "@/i18n/translate";

export function createPublicPageMetadata(
  locale: Locale,
  path: string,
  germanTitle: string,
  germanDescription: string,
): Metadata {
  const translatedTitle = translateText(locale, germanTitle);
  // Page headings are already translated; reuse them when the branded title
  // has no separate catalog entry.
  const title = translatedTitle === germanTitle && germanTitle.endsWith(" | TapRadar")
    ? `${translateText(locale, germanTitle.slice(0, -" | TapRadar".length))} | TapRadar`
    : translatedTitle;
  const description = translateText(locale, germanDescription);
  const url = localizedPath(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: localeAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "TapRadar",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
