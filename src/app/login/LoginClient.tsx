"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { AuthMessages } from "@/i18n/auth";
import type { SocialAuthMessages } from "@/i18n/social-auth";
import { AUTH_PERSISTENCE_COOKIE, AUTH_PERSISTENCE_MAX_AGE } from "@/lib/auth-session";
import { SOCIAL_AUTH_PROVIDERS, type SocialAuthProvider } from "@/lib/social-auth";
import { createClient } from "@/lib/supabase/client";
import styles from "./login.module.css";

export type LoginMode = "signin" | "signup";

type LoginClientProps = {
  messages: AuthMessages;
  socialMessages: SocialAuthMessages;
  enabledProviders: { google: boolean; apple: boolean };
  initialMode: LoginMode;
  initialPasswordUpdated: boolean;
  initialAuthError: boolean;
  isBusinessSignup: boolean;
  privacyHref: string;
  termsHref: string;
};

export function LoginClient({
  messages,
  socialMessages,
  enabledProviders,
  initialMode,
  initialPasswordUpdated,
  initialAuthError,
  isBusinessSignup,
  privacyHref,
  termsHref,
}: LoginClientProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<LoginMode>(initialMode);
  const [message, setMessage] = useState(initialPasswordUpdated ? messages.passwordUpdated : initialAuthError ? socialMessages.socialFailed : "");
  const [isLoading, setIsLoading] = useState(false);
  const [legalConfirmed, setLegalConfirmed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberSession, setRememberSession] = useState(true);
  const isSignup = mode === "signup";
  const hasSocialProvider = enabledProviders.google || enabledProviders.apple;

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
      const { data, error } = mode === "signup"
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
        setMessage(mode === "signup" ? messages.signupFailed : messages.signInFailed);
        return;
      }
      setAuthPersistence(isSignup || rememberSession);
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

  async function handleSocialSignIn(provider: SocialAuthProvider) {
    setIsLoading(true);
    setMessage("");

    try {
      if (isSignup && !legalConfirmed) {
        setMessage(messages.legalRequired);
        return;
      }

      const requestedNext = new URLSearchParams(window.location.search).get("next");
      const nextPath = requestedNext?.startsWith("/") && !requestedNext.startsWith("//") ? requestedNext : "/dashboard";
      const callbackUrl = new URL("/auth/callback", window.location.origin);
      callbackUrl.searchParams.set("next", nextPath);
      if (isSignup && isBusinessSignup) callbackUrl.searchParams.set("account", "business");
      setAuthPersistence(isSignup || rememberSession);

      const { error } = await createClient().auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: callbackUrl.toString(),
          scopes: provider === SOCIAL_AUTH_PROVIDERS.google ? "openid email" : "email",
        },
      });
      if (error) setMessage(socialMessages.socialFailed);
    } catch {
      setMessage(socialMessages.socialFailed);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.orbitOne} aria-hidden="true" />
      <div className={styles.orbitTwo} aria-hidden="true" />
      <section className={`${styles.stage} ${isSignup ? styles.signup : styles.signin} ${hasSocialProvider ? styles.social : ""}`} aria-label={messages.metaTitle}>
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.radar} aria-hidden="true"><span /><span /><span /></div>

        <div className={`${styles.brand} ${styles.brandRight}`} aria-hidden={isSignup}>
          <p className={styles.eyebrow}>TAPRADAR</p>
          <h2>{messages.title}</h2>
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
            <p className={styles.kicker}>TapRadar Account</p>
            <h1>{isSignup && isBusinessSignup ? messages.businessTitle : isSignup ? messages.createAccount : messages.title}</h1>
            <p className={styles.intro}>{isSignup && isBusinessSignup ? messages.businessIntro : messages.intro}</p>

            <form className={styles.form} onSubmit={handleSubmit}>
              {isSignup ? (
                <label className={styles.consent}>
                  <input type="checkbox" required checked={legalConfirmed} onChange={(event) => setLegalConfirmed(event.target.checked)} />
                  <span>{messages.consentBefore} <Link href={privacyHref} target="_blank" rel="noopener noreferrer">{messages.privacy}</Link> {messages.consentAnd} <Link href={termsHref} target="_blank" rel="noopener noreferrer">{messages.terms}</Link>{messages.consentAfter}</span>
                </label>
              ) : (
                <label className={styles.remember}>
                  <input type="checkbox" checked={rememberSession} onChange={(event) => setRememberSession(event.target.checked)} />
                  <span>{messages.remember}</span>
                </label>
              )}

              {hasSocialProvider ? <>
                <div className={styles.socialButtons}>
                  {enabledProviders.google ? <button type="button" className={`${styles.socialButton} ${styles.googleButton}`} disabled={isLoading} onClick={() => handleSocialSignIn(SOCIAL_AUTH_PROVIDERS.google)}>
                    <GoogleIcon /><span>{socialMessages.continueWithGoogle}</span>
                  </button> : null}
                  {enabledProviders.apple ? <button type="button" className={`${styles.socialButton} ${styles.appleButton}`} disabled={isLoading} onClick={() => handleSocialSignIn(SOCIAL_AUTH_PROVIDERS.apple)}>
                    <AppleIcon /><span>{socialMessages.continueWithApple}</span>
                  </button> : null}
                </div>
                <div className={styles.divider}><span>{socialMessages.orEmail}</span></div>
              </> : null}

              <label>
                <span>{messages.email}</span>
                <input type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@firma.at" />
              </label>
              <label>
                <span>{messages.password}</span>
                <span className={styles.passwordField}>
                  <input type={showPassword ? "text" : "password"} required minLength={8} autoComplete={isSignup ? "new-password" : "current-password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder={messages.passwordPlaceholder} />
                  <button type="button" onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? messages.hide : messages.show}</button>
                </span>
              </label>

              <button disabled={isLoading} className={styles.submit}>
                {isLoading ? messages.waiting : isSignup ? messages.createAccount : messages.signIn}
              </button>
              <div className={`${styles.secondaryActions} ${isSignup ? styles.signupActions : ""}`}>
                {isSignup ? null : <Link href="/passwort-vergessen" className={styles.forgot}>{messages.forgot}</Link>}
                {isSignup ? <button
                  type="button"
                  className={styles.modeAction}
                  onClick={(event) => {
                    event.currentTarget.blur();
                    selectMode("signin");
                  }}
                >{messages.signIn}</button> : <Link href="/registrieren" className={styles.modeAction}>{messages.createAccount}</Link>}
              </div>
            </form>

            <p className={`${styles.message} ${message ? styles.messageVisible : ""}`} role="status" aria-live="polite">{message}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function setAuthPersistence(remember: boolean) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  const lifetime = remember ? `; Max-Age=${AUTH_PERSISTENCE_MAX_AGE}` : "";
  document.cookie = `${AUTH_PERSISTENCE_COOKIE}=${remember ? "persistent" : "session"}; Path=/; SameSite=Lax${lifetime}${secure}`;

  if (!remember) {
    for (const cookie of document.cookie.split("; ")) {
      const separator = cookie.indexOf("=");
      const name = separator >= 0 ? cookie.slice(0, separator) : cookie;
      const value = separator >= 0 ? cookie.slice(separator + 1) : "";
      if (name.startsWith("sb-") && name.includes("-auth-token")) {
        document.cookie = `${name}=${value}; Path=/; SameSite=Lax${secure}`;
      }
    }
  }
}

function GoogleIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.5-.2-2.2H12v4h5.4a4.6 4.6 0 0 1-2 3v2.6h3.2c1.9-1.7 3-4.3 3-7.4Z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4L15.4 17c-.9.6-2 1-3.4 1a5.8 5.8 0 0 1-5.5-4H3.2v2.7A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.5 14a6 6 0 0 1 0-4V7.3H3.2a10 10 0 0 0 0 9.4L6.5 14Z"/><path fill="#EA4335" d="M12 6c1.6 0 3 .5 4.1 1.6L19 4.7A9.7 9.7 0 0 0 3.2 7.3L6.5 10A5.8 5.8 0 0 1 12 6Z"/></svg>;
}

function AppleIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.1 12.5c0-2.4 2-3.6 2.1-3.7a4.5 4.5 0 0 0-3.5-1.9c-1.5-.2-2.9.9-3.7.9-.8 0-2-1-3.3-.9a4.8 4.8 0 0 0-4.1 2.5c-1.7 3-.4 7.5 1.3 10 .8 1.2 1.8 2.5 3.1 2.4 1.3 0 1.8-.8 3.4-.8 1.6 0 2.1.8 3.4.8 1.4 0 2.3-1.2 3.1-2.4a11 11 0 0 0 1.4-2.9 4.2 4.2 0 0 1-3.2-4ZM14.7 5.3a4.3 4.3 0 0 0 1-3.1 4.4 4.4 0 0 0-2.9 1.5 4.1 4.1 0 0 0-1.1 3c1.1.1 2.2-.5 3-1.4Z"/></svg>;
}
