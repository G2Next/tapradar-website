import { createHash } from "crypto";
import { decryptIntegrationSecret } from "@/lib/integration-secrets";
import { createAdminClient } from "@/lib/supabase/admin";

export type CaptchaScope = "contact" | "registration" | "login";
export type CaptchaMode = "v2" | "v3";

type CaptchaSettingsRow = {
  mode: CaptchaMode;
  v3_site_key: string | null;
  v3_secret_ciphertext: string | null;
  v2_site_key: string | null;
  v2_secret_ciphertext: string | null;
  score_threshold: number;
  v2_theme: "light" | "dark";
  protect_contact: boolean;
  protect_registration: boolean;
  protect_login: boolean;
  log_rejected: boolean;
};

export type PublicCaptchaConfig = {
  enabled: boolean;
  mode: CaptchaMode;
  siteKey: string | null;
  theme: "light" | "dark";
};

type RuntimeCaptchaConfig = PublicCaptchaConfig & {
  secret: string | null;
  threshold: number;
  logRejected: boolean;
};

function environmentConfig(scope: CaptchaScope): RuntimeCaptchaConfig {
  const mode: CaptchaMode = process.env.RECAPTCHA_MODE === "v2" ? "v2" : "v3";
  const protectedScope = scope === "contact" || process.env[`RECAPTCHA_PROTECT_${scope.toUpperCase()}`] === "true";
  const siteKey = mode === "v2" ? process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY : process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const secret = mode === "v2" ? process.env.RECAPTCHA_V2_SECRET_KEY : process.env.RECAPTCHA_SECRET_KEY;
  return {
    enabled: protectedScope,
    mode,
    siteKey: siteKey || null,
    secret: secret || null,
    threshold: Number(process.env.RECAPTCHA_SCORE_THRESHOLD ?? 0.5),
    theme: process.env.RECAPTCHA_V2_THEME === "dark" ? "dark" : "light",
    logRejected: true,
  };
}

async function runtimeConfig(scope: CaptchaScope): Promise<RuntimeCaptchaConfig> {
  const fallback = environmentConfig(scope);
  try {
    const admin = createAdminClient();
    const { data, error } = await admin.from("captcha_settings").select("mode,v3_site_key,v3_secret_ciphertext,v2_site_key,v2_secret_ciphertext,score_threshold,v2_theme,protect_contact,protect_registration,protect_login,log_rejected").eq("id", true).maybeSingle();
    if (error || !data) return fallback;
    const row = data as CaptchaSettingsRow;
    const enabled = scope === "contact" ? row.protect_contact : scope === "registration" ? row.protect_registration : row.protect_login;
    const siteKey = row.mode === "v2" ? row.v2_site_key : row.v3_site_key;
    const encryptedSecret = row.mode === "v2" ? row.v2_secret_ciphertext : row.v3_secret_ciphertext;
    return {
      enabled,
      mode: row.mode,
      siteKey: siteKey || fallback.siteKey,
      secret: decryptIntegrationSecret(encryptedSecret) || fallback.secret,
      threshold: Number(row.score_threshold),
      theme: row.v2_theme,
      logRejected: row.log_rejected,
    };
  } catch {
    return fallback;
  }
}

export async function getPublicCaptchaConfig(scope: CaptchaScope): Promise<PublicCaptchaConfig> {
  const config = await runtimeConfig(scope);
  return { enabled: config.enabled, mode: config.mode, siteKey: config.siteKey, theme: config.theme };
}

export async function verifyCaptcha(token: unknown, scope: CaptchaScope, ip?: string) {
  const config = await runtimeConfig(scope);
  if (!config.enabled) return true;
  if (!config.secret || typeof token !== "string" || !token || token.length > 4096) {
    await logRejected(config, scope, ip, "missing-configuration-or-token");
    return false;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  let expectedHostname: string;
  try { expectedHostname = new URL(siteUrl ?? "").hostname; } catch {
    await logRejected(config, scope, ip, "invalid-site-url");
    return false;
  }
  const allowedHosts = new Set([expectedHostname]);
  if (["tapradar.app", "www.tapradar.app"].includes(expectedHostname)) {
    allowedHosts.add("tapradar.app");
    allowedHosts.add("www.tapradar.app");
  }

  try {
    const body = new URLSearchParams({ secret: config.secret, response: token });
    if (ip && ip !== "unknown") body.set("remoteip", ip);
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      await logRejected(config, scope, ip, "google-unavailable");
      return false;
    }
    const result = await response.json() as { success?: boolean; score?: number; action?: string; hostname?: string };
    const accepted = result.success === true
      && allowedHosts.has(result.hostname ?? "")
      && (config.mode === "v2" || (typeof result.score === "number" && result.score >= config.threshold && result.action === scope));
    if (!accepted) {
      const reason = result.success !== true ? "challenge-failed"
        : !allowedHosts.has(result.hostname ?? "") ? "hostname-mismatch"
          : config.mode === "v3" && result.action !== scope ? "action-mismatch"
            : "score-too-low";
      await logRejected(config, scope, ip, reason, result.score, result.hostname);
    }
    return accepted;
  } catch {
    await logRejected(config, scope, ip, "verification-error");
    return false;
  }
}

export async function verifyContactCaptcha(token: unknown, ip?: string) {
  return verifyCaptcha(token, "contact", ip);
}

async function logRejected(config: RuntimeCaptchaConfig, action: CaptchaScope, ip: string | undefined, reason: string, score?: number, hostname?: string) {
  if (!config.logRejected) return;
  try {
    const ipHash = ip && ip !== "unknown" ? createHash("sha256").update(ip).digest("hex") : null;
    await createAdminClient().from("captcha_attempt_logs").insert({ action, captcha_version: config.mode, accepted: false, score: typeof score === "number" ? score : null, hostname: hostname?.slice(0, 255) || null, reason, ip_hash: ipHash });
  } catch {
    // CAPTCHA verification must fail closed even when audit logging is unavailable.
  }
}
