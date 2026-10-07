"use client";

import Script from "next/script";
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";
import type { CaptchaMode } from "@/lib/captcha";

type ReCaptchaApi = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
  render: (container: HTMLElement, options: { sitekey: string; theme: "light" | "dark"; callback: (token: string) => void; "expired-callback": () => void; "error-callback": () => void }) => number;
  getResponse: (widgetId?: number) => string;
  reset: (widgetId?: number) => void;
};

declare global { interface Window { grecaptcha?: ReCaptchaApi } }

export type CaptchaChallengeHandle = {
  getToken: (action: string) => Promise<string>;
  reset: () => void;
};

export const CaptchaChallenge = forwardRef<CaptchaChallengeHandle, {
  enabled: boolean;
  mode: CaptchaMode;
  siteKey: string | null;
  theme: "light" | "dark";
  locale: string;
  onReadyChange?: (ready: boolean) => void;
  onError?: () => void;
}>(function CaptchaChallenge({ enabled, mode, siteKey, theme, locale, onReadyChange, onError }, ref) {
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | undefined>(undefined);
  const [ready, setReady] = useState(!enabled);

  const updateReady = useCallback((value: boolean) => {
    setReady(value);
    onReadyChange?.(value);
  }, [onReadyChange]);

  const initialize = useCallback(() => {
    const api = window.grecaptcha;
    if (!enabled || !siteKey || !api) return;
    api.ready(() => {
      if (mode === "v2" && container.current && widgetId.current === undefined) {
        widgetId.current = api.render(container.current, {
          sitekey: siteKey,
          theme,
          callback: () => updateReady(true),
          "expired-callback": () => updateReady(false),
          "error-callback": () => { updateReady(false); onError?.(); },
        });
      } else if (mode === "v3") {
        updateReady(true);
      }
    });
  }, [enabled, mode, onError, siteKey, theme, updateReady]);

  useImperativeHandle(ref, () => ({
    async getToken(action: string) {
      if (!enabled) return "";
      if (!siteKey || !window.grecaptcha) throw new Error("CAPTCHA is not ready");
      if (mode === "v2") {
        const token = window.grecaptcha.getResponse(widgetId.current);
        if (!token) throw new Error("CAPTCHA challenge is incomplete");
        return token;
      }
      return window.grecaptcha.execute(siteKey, { action });
    },
    reset() {
      if (mode === "v2" && widgetId.current !== undefined) {
        window.grecaptcha?.reset(widgetId.current);
        updateReady(false);
      }
    },
  }), [enabled, mode, siteKey, updateReady]);

  if (!enabled) return null;
  if (!siteKey) return <p role="alert" className="text-sm text-amber-200">Die Sicherheitsprüfung ist noch nicht vollständig eingerichtet.</p>;
  const source = mode === "v2"
    ? `https://www.google.com/recaptcha/api.js?render=explicit&hl=${encodeURIComponent(locale)}`
    : `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}&hl=${encodeURIComponent(locale)}`;
  return <>
    <Script src={source} strategy="afterInteractive" onReady={initialize} onError={() => { updateReady(false); onError?.(); }} />
    {mode === "v2" ? <div ref={container} className="min-h-[78px] overflow-x-auto" /> : null}
    {mode === "v3" ? <p role="status" className="text-sm text-slate-400">{ready ? "Sicherheitsprüfung bereit." : "Sicherheitsprüfung wird geladen …"}</p> : null}
  </>;
});
