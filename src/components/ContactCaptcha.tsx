"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

type ReCaptchaV2 = {
  ready: (callback: () => void) => void;
  render: (container: HTMLElement, options: {
    sitekey: string;
    theme: "dark" | "light";
    size: "normal" | "compact";
    hl: string;
    callback: (token: string) => void;
    "expired-callback": () => void;
    "error-callback": () => void;
  }) => number;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window { grecaptcha?: ReCaptchaV2 }
}

export function ContactCaptcha({ siteKey, locale, label, pendingLabel }: { siteKey?: string; locale: string; label: string; pendingLabel: string }) {
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [token, setToken] = useState("");
  const [failed, setFailed] = useState(false);
  const { pending } = useFormStatus();
  const de = locale === "de";

  useEffect(() => {
    if (!scriptReady || !siteKey || !container.current || !window.grecaptcha || widgetId.current !== null) return;
    let active = true;
    window.grecaptcha?.ready(() => {
      if (!active || !container.current || !window.grecaptcha || widgetId.current !== null) return;
      widgetId.current = window.grecaptcha.render(container.current, {
        sitekey: siteKey,
        theme: "dark",
        size: "normal",
        hl: locale,
        callback: (response) => {
          if (!active) return;
          setToken(response);
          setFailed(false);
        },
        "expired-callback": () => {
          if (!active) return;
          setToken("");
        },
        "error-callback": () => {
          if (!active) return;
          setToken("");
          setFailed(true);
        },
      });
    });

    return () => {
      active = false;
      if (widgetId.current !== null) window.grecaptcha?.reset(widgetId.current);
      widgetId.current = null;
    };
  }, [locale, scriptReady, siteKey]);

  return <>
    {siteKey && <Script src="https://www.google.com/recaptcha/api.js?render=explicit" strategy="afterInteractive" onReady={() => setScriptReady(true)} onError={() => setFailed(true)} />}
    <input type="hidden" name="captcha_token" value={token} />
    {siteKey ? <div className="min-h-[78px] overflow-x-auto" ref={container} /> : null}
    {!siteKey ? <p role="alert" className="text-sm text-amber-200">{de ? "Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte schreibe an support@tapradar.app." : "The contact form is temporarily unavailable. Please email support@tapradar.app."}</p> : failed ? <p role="alert" className="text-sm text-amber-200">{de ? "Die Sicherheitsprüfung konnte nicht geladen werden. Bitte erneut versuchen oder an support@tapradar.app schreiben." : "The security check could not be loaded. Please try again or email support@tapradar.app."}</p> : !token ? <p className="text-sm leading-6 text-slate-400">{de ? "Bitte bestätigen Sie die Checkbox „Ich bin kein Roboter“." : "Please confirm the “I’m not a robot” checkbox."}</p> : <p role="status" className="text-sm font-bold text-emerald-200">{de ? "Sicherheitsprüfung bestätigt." : "Security check confirmed."}</p>}
    <p className="text-xs leading-5 text-slate-400">{de ? "Geschützt durch Google reCAPTCHA." : "Protected by Google reCAPTCHA."} <a className="underline hover:text-cyan-200" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">{de ? "Datenschutz" : "Privacy"}</a> · <a className="underline hover:text-cyan-200" href="https://policies.google.com/terms" target="_blank" rel="noreferrer">{de ? "Nutzungsbedingungen" : "Terms"}</a></p>
    <button type="submit" disabled={pending || !token || failed} aria-busy={pending} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950 disabled:cursor-not-allowed disabled:opacity-50">{pending ? pendingLabel : label}</button>
  </>;
}
