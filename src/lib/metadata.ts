import type { Metadata } from "next";
import { localeAlternates, localizedPath, type Locale } from "@/i18n/config";
import { translateText } from "@/i18n/translate";

export function createPublicPageMetadata(
  locale: Locale,
  path: string,
  germanTitle: string,
  germanDescription: string,
): Metadata {
  const title = translateText(locale, germanTitle);
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
