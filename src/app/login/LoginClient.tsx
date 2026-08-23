"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { AuthMessages } from "@/i18n/auth";
import { createClient } from "@/lib/supabase/client";
import styles from "./login.module.css";

export type LoginMode = "signin" | "signup" | "magic";

type LoginClientProps = {
  messages: AuthMessages;
  initialMode: LoginMode;
  initialPasswordUpdated: boolean;
  isBusinessSignup: boolean;
  backHref: string;
  privacyHref: string;
  termsHref: string;
};

export function LoginClient({
  messages,
  initialMode,
  initialPasswordUpdated,
  isBusinessSignup,
  backHref,
  privacyHref,
  termsHref,
}: LoginClientProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<LoginMode>(initialMode);
  const [message, setMessage] = useState(initialPasswordUpdated ? messages.passwordUpdated : "");
  const [isLoading, setIsLoading] = useState(false);
  const [legalConfirmed, setLegalConfirmed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isSignup = mode === "signup";

  function selectMode(nextMode: LoginMode) {
    setMode(nextMode);
    setMessage("");
    setLegalConfirmed(false);
    setShowPassword(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const requestedNext = new URLSearchParams(window.location.search).get("next");
      const nextPath = requestedNext?.startsWith("/") && !requestedNext.startsWith("//") ? requestedNext : "/dashboard";
      if (mode === "signup" && !legalConfirmed) {
        setMessage(messages.legalRequired);
        return;
      }

      const supabase = createClient();
      const { data, error } = mode === "magic"
        ? await supabase.auth.signInWithOtp({
            email,
            options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}` },
          })
        : mode === "signup"
          ? await supabase.auth.signUp({
              email,
              password,
              options: {
                data: { account_type: isBusinessSignup ? "business" : "customer" },
                emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`,
              },
            })
          : await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        setMessage(mode === "signup" ? messages.signupFailed : mode === "magic" ? messages.magicFailed : messages.signInFailed);
        return;
      }
      if (mode === "magic") {
        setMessage(messages.magicSent);
        return;
      }
      if (mode === "signup" && !data.session) {
        setMessage(messages.accountCreated);
        return;
      }
      router.push(`/rechtliches?next=${encodeURIComponent(nextPath)}`);
      router.refresh();
    } catch {
      setMessage(messages.unavailable);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.orbitOne} aria-hidden="true" />
      <div className={styles.orbitTwo} aria-hidden="true" />
      <section className={`${styles.stage} ${isSignup ? styles.signup : styles.signin}`} aria-label={messages.metaTitle}>
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.radar} aria-hidden="true"><span /><span /><span /></div>

        <div className={`${styles.brand} ${styles.brandRight}`} aria-hidden={isSignup}>
          <p className={styles.eyebrow}>TAPRADAR</p>
          <h2>{messages.title}<span>{messages.tabs.magic}</span></h2>
          <p>{messages.metaDescription}</p>
          <div className={styles.chips}><span>NFC</span><span>QR</span><span>Rewards</span></div>
        </div>

        <div className={`${styles.brand} ${styles.brandLeft}`} aria-hidden={!isSignup}>
          <p className={styles.eyebrow}>TAPRADAR</p>
          <h2>{messages.createAccount}<span>TapRadar</span></h2>
          <p>{messages.metaDescription}</p>
          <div className={styles.chips}><span>Free</span><span>Local</span><span>Simple</span></div>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.edge} aria-hidden="true" />
          <div className={styles.formContent} key={mode}>
            <Link href={backHref} className={styles.back}>← {messages.back}</Link>
            <p className={styles.kicker}>TapRadar Account</p>
            <h1>{isSignup && isBusinessSignup ? messages.businessTitle : isSignup ? messages.createAccount : mode === "magic" ? messages.sendLink : messages.title}</h1>
            <p className={styles.intro}>{isSignup && isBusinessSignup ? messages.businessIntro : messages.intro}</p>

            <div className={styles.tabs} role="group" aria-label={messages.metaTitle}>
              {(["signin", "signup", "magic"] as const).map((value) => (
                <button key={value} type="button" onClick={() => selectMode(value)} className={mode === value ? styles.activeTab : ""}>
                  {messages.tabs[value]}
                </button>
              ))}
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label>
                <span>{messages.email}</span>
                <input type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@firma.at" />
              </label>
              {mode !== "magic" ? (
                <label>
                  <span>{messages.password}</span>
                  <span className={styles.passwordField}>
                    <input type={showPassword ? "text" : "password"} required minLength={8} autoComplete={isSignup ? "new-password" : "current-password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder={messages.passwordPlaceholder} />
                    <button type="button" onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? messages.hide : messages.show}</button>
                  </span>
                </label>
              ) : null}

              {isSignup ? (
                <label className={styles.consent}>
                  <input type="checkbox" required checked={legalConfirmed} onChange={(event) => setLegalConfirmed(event.target.checked)} />
                  <span>{messages.consentBefore} <Link href={privacyHref} target="_blank" rel="noopener noreferrer">{messages.privacy}</Link> {messages.consentAnd} <Link href={termsHref} target="_blank" rel="noopener noreferrer">{messages.terms}</Link>{messages.consentAfter}</span>
                </label>
              ) : null}

              <button disabled={isLoading} className={styles.submit}>
                {isLoading ? messages.waiting : mode === "magic" ? messages.sendLink : isSignup ? messages.createAccount : messages.signIn}
              </button>
              {mode === "signin" ? <Link href="/passwort-vergessen" className={styles.forgot}>{messages.forgot}</Link> : null}
            </form>

            <p className={`${styles.message} ${message ? styles.messageVisible : ""}`} role="status" aria-live="polite">{message}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
