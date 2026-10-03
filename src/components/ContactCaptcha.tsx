"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { CaptchaChallenge, type CaptchaChallengeHandle } from "@/components/CaptchaChallenge";
import type { PublicCaptchaConfig } from "@/lib/captcha";

export function ContactCaptcha({ config, locale, label, pendingLabel }: { config: PublicCaptchaConfig; locale: string; label: string; pendingLabel: string }) {
  const tokenInput = useRef<HTMLInputElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const challenge = useRef<CaptchaChallengeHandle>(null);
  const [ready, setReady] = useState(!config.enabled);
  const [verifying, setVerifying] = useState(false);
  const [failed, setFailed] = useState(false);
  const { pending } = useFormStatus();
  const de = locale === "de";

  const submit = async () => {
    const form = button.current?.form;
    if (!form?.reportValidity()) return;
    if (!tokenInput.current) {
      setFailed(true);
      return;
    }

    setVerifying(true);
    setFailed(false);
    try {
      const token = await challenge.current?.getToken("contact") ?? "";
      if (config.enabled && !token) throw new Error("reCAPTCHA returned an empty token");
      tokenInput.current.value = token;
      form.requestSubmit();
    } catch {
      setFailed(true);
      challenge.current?.reset();
    } finally {
      setVerifying(false);
    }
  };

  return <>
    <input ref={tokenInput} type="hidden" name="g-recaptcha-response" defaultValue="" />
    <CaptchaChallenge ref={challenge} {...config} locale={locale} onReadyChange={(value) => { setReady(value); if (value) setFailed(false); }} onError={() => setFailed(true)} />
    {failed ? <p role="alert" className="text-sm text-amber-200">{de ? "Die Sicherheitsprüfung konnte nicht abgeschlossen werden. Bitte erneut versuchen oder an support@tapradar.app schreiben." : "The security check could not be completed. Please try again or email support@tapradar.app."}</p> : config.enabled ? <p role="status" className="text-sm leading-6 text-slate-400">{de ? "Geschützt durch Google reCAPTCHA." : "Protected by Google reCAPTCHA."} <a className="underline hover:text-cyan-200" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">{de ? "Datenschutz" : "Privacy"}</a> · <a className="underline hover:text-cyan-200" href="https://policies.google.com/terms" target="_blank" rel="noreferrer">{de ? "Nutzungsbedingungen" : "Terms"}</a></p> : null}
    <button ref={button} type="button" onClick={submit} disabled={pending || verifying || !ready} aria-busy={pending || verifying} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950 disabled:cursor-wait disabled:opacity-50">{pending ? pendingLabel : verifying ? (de ? "Sicherheitsprüfung …" : "Security check …") : label}</button>
  </>;
}
