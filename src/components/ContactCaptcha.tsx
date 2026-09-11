"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

type Turnstile = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

export function ContactCaptcha({ siteKey, locale, label, pendingLabel }: { siteKey?: string; locale: string; label: string; pendingLabel: string }) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const [token, setToken] = useState("");
  const [failed, setFailed] = useState(false);
  const { pending } = useFormStatus();
  const initialize = useCallback(() => {
    if (!container.current || !window.turnstile || !siteKey || widget.current !== null) return;
    widget.current = window.turnstile.render(container.current, {
      sitekey: siteKey, action: "contact", theme: "dark", language: locale === "de" ? "de" : "en", appearance: "interaction-only",
      "response-field": false,
      callback: (value: string) => { setToken(value); setFailed(false); },
      "expired-callback": () => setToken(""),
      "error-callback": () => { setToken(""); setFailed(true); },
      "timeout-callback": () => { setToken(""); setFailed(true); },
    });
  }, [siteKey, locale]);
  useEffect(() => {
    initialize();
    return () => { if (widget.current !== null) window.turnstile?.remove(widget.current); widget.current = null; };
  }, [initialize]);
  const de = locale === "de";
  return <>
    {siteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={initialize} onError={() => setFailed(true)} />}
    <div ref={container} />
    <input type="hidden" name="cf-turnstile-response" value={token} />
    {!siteKey ? <p role="alert" className="text-sm text-amber-200">{de ? "Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte schreibe an support@tapradar.app." : "The contact form is temporarily unavailable. Please email support@tapradar.app."}</p> : failed ? <div role="alert" className="text-sm text-amber-200"><p>{de ? "Die Sicherheitsprüfung konnte nicht abgeschlossen werden. Bitte erneut versuchen oder an support@tapradar.app schreiben." : "The security check could not be completed. Please try again or email support@tapradar.app."}</p><button type="button" className="mt-2 underline" onClick={() => { setToken(""); setFailed(false); if (widget.current !== null) window.turnstile?.reset(widget.current); else initialize(); }}>{de ? "Erneut prüfen" : "Try again"}</button></div> : !token && <p role="status" className="text-sm text-slate-400">{de ? "Sicherheitsprüfung läuft …" : "Security check in progress …"}</p>}
    <button type="submit" disabled={pending || !token} aria-busy={pending} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950 disabled:cursor-wait disabled:opacity-50">{pending ? pendingLabel : label}</button>
  </>;
}
