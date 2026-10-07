"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "@/i18n/config";
import { parseTheme, THEME_COOKIE, type Theme } from "@/lib/theme";

const labels: Record<Locale, { light: string; dark: string; label: string }> = {
  de: { light: "Hell", dark: "Dunkel", label: "Dunkelmodus" },
  en: { light: "Light", dark: "Dark", label: "Dark mode" },
  tr: { light: "Açık", dark: "Koyu", label: "Koyu mod" },
  fr: { light: "Clair", dark: "Sombre", label: "Mode sombre" },
  it: { light: "Chiaro", dark: "Scuro", label: "Modalità scura" },
  es: { light: "Claro", dark: "Oscuro", label: "Modo oscuro" },
  pl: { light: "Jasny", dark: "Ciemny", label: "Tryb ciemny" },
  cs: { light: "Světlý", dark: "Tmavý", label: "Tmavý režim" },
  hu: { light: "Világos", dark: "Sötét", label: "Sötét mód" },
  sk: { light: "Svetlý", dark: "Tmavý", label: "Tmavý režim" },
  "sr-Latn": { light: "Svetlo", dark: "Tamno", label: "Tamni režim" },
  bs: { light: "Svijetlo", dark: "Tamno", label: "Tamni način" },
  hr: { light: "Svijetlo", dark: "Tamno", label: "Tamni način" },
  ro: { light: "Luminos", dark: "Întunecat", label: "Mod întunecat" },
  bg: { light: "Светъл", dark: "Тъмен", label: "Тъмен режим" },
};

const themeEvent = "tapradar:theme-change";
function subscribe(callback: () => void) {
  window.addEventListener(themeEvent, callback);
  return () => window.removeEventListener(themeEvent, callback);
}
function getSnapshot(): Theme {
  return parseTheme(document.documentElement.dataset.theme);
}

export function ThemeToggle({ initialTheme, locale }: { initialTheme: Theme; locale: Locale }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => initialTheme);
  const text = labels[locale];
  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    const secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${THEME_COOKIE}=${next}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    window.dispatchEvent(new Event(themeEvent));
  }
  return (
    <button type="button" role="switch" aria-checked={theme === "dark"} aria-label={text.label}
      className="theme-toggle" data-no-translate="true" translate="no" onClick={toggleTheme}>
      <span className="theme-toggle-option" data-active={theme === "light"} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>
        {text.light}
      </span>
      <span className="theme-toggle-option" data-active={theme === "dark"} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.7 13A9 9 0 0 1 11 3.3 9 9 0 1 0 20.7 13Z"/></svg>
        {text.dark}
      </span>
    </button>
  );
}
