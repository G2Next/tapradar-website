"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

type ReCaptcha = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window { grecaptcha?: ReCaptcha }
}

function setBadgeVisibility(visible: boolean) {
  document.querySelectorAll<HTMLElement>(".grecaptcha-badge").forEach((badge) => {
    badge.style.display = visible ? "" : "none";
  });
}

export function ContactCaptcha({ siteKey, locale, label, pendingLabel }: { siteKey?: string; locale: string; label: string; pendingLabel: string }) {
  const tokenInput = useRef<HTMLInputElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const [ready, setReady] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [failed, setFailed] = useState(false);
  const { pending } = useFormStatus();
  const de = locale === "de";

  useEffect(() => {
    setBadgeVisibility(true);
    return () => setBadgeVisibility(false);
  }, []);

  const markReady = () => {
    window.grecaptcha?.ready(() => {
      setBadgeVisibility(true);
      setReady(true);
      setFailed(false);
    });
  };

  const submit = async () => {
    const form = button.current?.form;
    if (!form?.reportValidity()) return;
    if (!siteKey || !window.grecaptcha || !tokenInput.current) {
      setFailed(true);
      return;
    }

    setVerifying(true);
    setFailed(false);
    try {
      const token = await window.grecaptcha.execute(siteKey, { action: "contact" });
      if (!token) throw new Error("reCAPTCHA returned an empty token");
      tokenInput.current.value = token;
      form.requestSubmit();
    } catch {
      setFailed(true);
    } finally {
      setVerifying(false);
    }
  };

  return <>
    {siteKey && <Script src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`} strategy="afterInteractive" onReady={markReady} onError={() => setFailed(true)} />}
    <input ref={tokenInput} type="hidden" name="g-recaptcha-response" defaultValue="" />
    {!siteKey ? <p role="alert" className="text-sm text-amber-200">{de ? "Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte schreibe an support@tapradar.app." : "The contact form is temporarily unavailable. Please email support@tapradar.app."}</p> : failed ? <p role="alert" className="text-sm text-amber-200">{de ? "Die Sicherheitsprüfung konnte nicht abgeschlossen werden. Bitte erneut versuchen oder an support@tapradar.app schreiben." : "The security check could not be completed. Please try again or email support@tapradar.app."}</p> : <p role="status" className="text-sm leading-6 text-slate-400">{de ? "Geschützt durch Google reCAPTCHA. Die Sicherheitsprüfung läuft beim Senden." : "Protected by Google reCAPTCHA. The security check runs when you send the form."} <a className="underline hover:text-cyan-200" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">{de ? "Datenschutz" : "Privacy"}</a> · <a className="underline hover:text-cyan-200" href="https://policies.google.com/terms" target="_blank" rel="noreferrer">{de ? "Nutzungsbedingungen" : "Terms"}</a></p>}
    <button ref={button} type="button" onClick={submit} disabled={pending || verifying || !ready} aria-busy={pending || verifying} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950 disabled:cursor-wait disabled:opacity-50">{pending ? pendingLabel : verifying ? (de ? "Sicherheitsprüfung …" : "Security check …") : label}</button>
  </>;
}
