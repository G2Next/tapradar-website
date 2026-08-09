"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { hasTranslation, languageOptions, localizedPath, usesCookieLocale, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const current = languageOptions.find((option) => option.locale === locale) ?? languageOptions[0];

  function selectLanguage(nextLocale: Locale) {
    document.cookie = `tapradar_locale=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    if (usesCookieLocale(pathname)) {
      router.push(`${pathname}${window.location.search}`);
      router.refresh();
      return;
    }
    const translated = hasTranslation(pathname);
    const destination = translated ? localizedPath(nextLocale, pathname) : localizedPath(nextLocale, "/");
    router.push(`${destination}${translated ? window.location.search : ""}`);
    router.refresh();
  }

  return (
    <label className="relative inline-flex w-12 items-center sm:w-auto">
      <span className="sr-only">{label}</span>
      <span className="pointer-events-none absolute left-3 text-base" aria-hidden="true">{current.flag}</span>
      <select
        value={locale}
        aria-label={label}
        onChange={(event) => selectLanguage(event.target.value as Locale)}
        className="h-11 w-12 cursor-pointer appearance-none rounded-2xl border border-white/15 bg-white/[0.06] py-2 pl-9 pr-8 text-xs font-black uppercase text-white outline-none transition hover:border-cyan-300/50 focus:border-cyan-300 sm:w-auto"
      >
        {languageOptions.map((option) => (
          <option key={option.locale} value={option.locale} className="bg-slate-900 text-white">
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 text-[10px] text-cyan-300" aria-hidden="true">▼</span>
    </label>
  );
}
