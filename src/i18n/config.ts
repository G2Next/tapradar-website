export const locales = ["de", "en", "tr", "sr-Latn", "bs", "hr", "hu", "ro", "pl", "bg"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const languageOptions: ReadonlyArray<{
  locale: Locale;
  label: string;
  flag: string;
  htmlLang: string;
}> = [
  { locale: "de", label: "Deutsch", flag: "🇩🇪", htmlLang: "de-AT" },
  { locale: "en", label: "English", flag: "🇬🇧", htmlLang: "en" },
  { locale: "tr", label: "Türkçe", flag: "🇹🇷", htmlLang: "tr" },
  { locale: "sr-Latn", label: "Srpski", flag: "🇷🇸", htmlLang: "sr-Latn" },
  { locale: "bs", label: "Bosanski", flag: "🇧🇦", htmlLang: "bs" },
  { locale: "hr", label: "Hrvatski", flag: "🇭🇷", htmlLang: "hr" },
  { locale: "hu", label: "Magyar", flag: "🇭🇺", htmlLang: "hu" },
  { locale: "ro", label: "Română", flag: "🇷🇴", htmlLang: "ro" },
  { locale: "pl", label: "Polski", flag: "🇵🇱", htmlLang: "pl" },
  { locale: "bg", label: "Български", flag: "🇧🇬", htmlLang: "bg" },
];

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getHtmlLang(locale: Locale) {
  return languageOptions.find((option) => option.locale === locale)?.htmlLang ?? locale;
}

export function localizedPath(locale: Locale, href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (href.startsWith("/api/") || href.startsWith("/auth/") || href.startsWith("/logout")) return href;

  const [path, suffix = ""] = href.split(/(?=[?#])/u, 2);
  const segments = path.split("/").filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    segments.shift();
  }

  const cleanPath = `/${segments.join("/")}`;
  const base = cleanPath === "/" ? "" : cleanPath;
  return `${locale === defaultLocale ? "" : `/${locale}`}${base || "/"}${suffix}`;
}

const translatedPaths = new Set(["/", "/fuer-geschaefte", "/kontakt", "/impressum", "/datenschutz", "/agb", "/widerrufsbelehrung"]);

export function stripLocalePrefix(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) segments.shift();
  return segments.length ? `/${segments.join("/")}` : "/";
}

export function hasTranslation(pathname: string) {
  return translatedPaths.has(stripLocalePrefix(pathname));
}

export function usesCookieLocale(pathname: string) {
  const path = stripLocalePrefix(pathname);
  return path === "/login"
    || path === "/app"
    || path === "/admin"
    || path === "/dashboard"
    || path === "/rechtliches"
    || path.startsWith("/admin/")
    || path.startsWith("/dashboard/")
    || path.startsWith("/collect/")
    || path.startsWith("/invite/")
    || path.startsWith("/stamp/");
}

export function availableLocalizedPath(locale: Locale, href: string) {
  const path = stripLocalePrefix(href.split(/[?#]/u, 1)[0]);
  if (translatedPaths.has(path)) return localizedPath(locale, href);
  return locale === defaultLocale ? href : `/de${href}`;
}

export function localeAlternates(path = "/") {
  return Object.fromEntries([
    ...locales.map((locale) => [getHtmlLang(locale), localizedPath(locale, path)]),
    ["x-default", localizedPath(defaultLocale, path)],
  ]);
}
