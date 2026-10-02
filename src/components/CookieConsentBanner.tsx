"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { translateTree } from "@/i18n/translate";
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  COOKIE_CONSENT_MAX_AGE,
  COOKIE_CONSENT_NAME,
  COOKIE_SETTINGS_OPEN_EVENT,
  createConsent,
  parseConsent,
  serializeConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

const actionClass = "min-h-12 flex-1 rounded-xl border border-cyan-300 bg-cyan-300 px-4 py-3 text-center text-sm font-black text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 sm:min-w-44";

export function CookieConsentBanner({ initialConsent, locale }: { initialConsent: CookieConsent | null; locale: Locale }) {
  const [visible, setVisible] = useState(initialConsent === null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [hasDecision, setHasDecision] = useState(initialConsent !== null);
  const [analytics, setAnalytics] = useState(initialConsent?.analytics ?? false);
  const [marketing, setMarketing] = useState(initialConsent?.marketing ?? false);

  useEffect(() => {
    const openSettings = () => {
      const current = parseConsent(document.cookie);
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setHasDecision(current !== null);
      setVisible(true);
      setSettingsOpen(true);
    };
    window.addEventListener(COOKIE_SETTINGS_OPEN_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_OPEN_EVENT, openSettings);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (settingsOpen) {
        setSettingsOpen(false);
        if (hasDecision) setVisible(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [hasDecision, settingsOpen, visible]);

  const save = (allowAnalytics: boolean, allowMarketing: boolean) => {
    const consent = createConsent(allowAnalytics, allowMarketing);
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${COOKIE_CONSENT_NAME}=${serializeConsent(consent)}; Max-Age=${COOKIE_CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
    setAnalytics(allowAnalytics);
    setMarketing(allowMarketing);
    setHasDecision(true);
    setSettingsOpen(false);
    setVisible(false);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED_EVENT, { detail: consent }));
  };

  const closeSettings = () => {
    setSettingsOpen(false);
    if (hasDecision) setVisible(false);
  };

  if (!visible) return null;

  return translateTree(
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/70 p-4 backdrop-blur-sm sm:items-center" role="presentation">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
        className="w-full max-w-3xl rounded-3xl border border-white/15 bg-[#07182a] p-5 text-white shadow-2xl sm:p-7"
      >
        {settingsOpen ? (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Datenschutz</p>
                <h2 id="cookie-consent-title" className="text-2xl font-black">Cookie-Einstellungen</h2>
              </div>
              <button type="button" onClick={closeSettings} aria-label="Cookie-Einstellungen schließen" className="rounded-lg border border-white/20 px-3 py-2 text-xl leading-none hover:border-cyan-300">×</button>
            </div>
            <p id="cookie-consent-description" className="mt-3 text-sm leading-6 text-slate-300">
              Sie entscheiden, welche optionalen Cookies verwendet werden. Ihre Auswahl können Sie jederzeit im Footer ändern.
            </p>
            <div className="mt-5 grid gap-3">
              <ConsentToggle checked disabled onChange={() => undefined}>
                <span className="block font-bold text-white">Notwendig</span>
                <span className="mt-1 block text-sm leading-5 text-slate-400">Erforderlich für Sprache, Anmeldung, Sicherheit und Ihre Cookie-Auswahl.</span>
              </ConsentToggle>
              <ConsentToggle checked={analytics} onChange={setAnalytics}>
                <span className="block font-bold text-white">Analyse</span>
                <span className="mt-1 block text-sm leading-5 text-slate-400">Hilft uns mit anonymisierten Nutzungsdaten, die Website zu verbessern.</span>
              </ConsentToggle>
              <ConsentToggle checked={marketing} onChange={setMarketing}>
                <span className="block font-bold text-white">Marketing</span>
                <span className="mt-1 block text-sm leading-5 text-slate-400">Erlaubt personalisierte Werbung und die Erfolgsmessung von Kampagnen.</span>
              </ConsentToggle>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" className={actionClass} onClick={() => save(analytics, marketing)}>Auswahl speichern</button>
              <button type="button" className={actionClass} onClick={() => save(false, false)}>Nur Notwendige</button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Ihre Privatsphäre</p>
            <h2 id="cookie-consent-title" className="text-2xl font-black">Cookie-Einstellungen</h2>
            <p id="cookie-consent-description" className="mt-3 text-sm leading-6 text-slate-300">
              Wir verwenden notwendige Cookies für den sicheren Betrieb. Analyse- und Marketing-Cookies setzen wir nur mit Ihrer freiwilligen Einwilligung. Sie können Ihre Auswahl jederzeit ändern.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button type="button" className={actionClass} onClick={() => save(true, true)}>Alle akzeptieren</button>
              <button type="button" className={actionClass} onClick={() => save(false, false)}>Nur Notwendige</button>
              <button type="button" className={actionClass} onClick={() => setSettingsOpen(true)}>Einstellungen</button>
            </div>
          </>
        )}
      </section>
    </div>,
    locale,
  );
}

function ConsentToggle({ children, checked, disabled = false, onChange }: { children: ReactNode; checked: boolean; disabled?: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 has-[:focus-visible]:border-cyan-300 has-[:disabled]:cursor-not-allowed">
      <span>
        {children}
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
        className="h-6 w-6 shrink-0 accent-cyan-300"
      />
    </label>
  );
}
