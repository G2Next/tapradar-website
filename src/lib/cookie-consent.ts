export const COOKIE_CONSENT_NAME = "tapradar_cookie_consent";
export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
export const COOKIE_CONSENT_CHANGED_EVENT = "tapradar:cookie-consent-changed";
export const COOKIE_SETTINGS_OPEN_EVENT = "tapradar:cookie-settings-open";

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  version: number;
  decidedAt: string;
};

function isCookieConsent(value: unknown): value is CookieConsent {
  if (!value || typeof value !== "object") return false;
  const consent = value as Partial<CookieConsent>;
  return consent.necessary === true
    && typeof consent.analytics === "boolean"
    && typeof consent.marketing === "boolean"
    && consent.version === COOKIE_CONSENT_VERSION
    && typeof consent.decidedAt === "string"
    && !Number.isNaN(Date.parse(consent.decidedAt));
}

function decodeConsent(value: string): CookieConsent | null {
  try {
    const parsed = JSON.parse(decodeURIComponent(value));
    return isCookieConsent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function valueFromCookieHeader(header: string) {
  for (const part of header.split(";")) {
    const separator = part.indexOf("=");
    if (separator === -1) continue;
    const name = part.slice(0, separator).trim();
    if (name === COOKIE_CONSENT_NAME) return part.slice(separator + 1).trim();
  }
  return null;
}

export function parseConsent(source?: Request | string | null): CookieConsent | null {
  if (!source) return null;
  const value = source instanceof Request
    ? valueFromCookieHeader(source.headers.get("cookie") ?? "")
    : decodeConsent(source)
      ? source
      : valueFromCookieHeader(source);
  return value ? decodeConsent(value) : null;
}

export function hasConsent(source: Request | string | null | undefined, category: ConsentCategory) {
  if (category === "necessary") return true;
  return parseConsent(source)?.[category] === true;
}

export function createConsent(analytics: boolean, marketing: boolean, decidedAt = new Date()): CookieConsent {
  return {
    necessary: true,
    analytics,
    marketing,
    version: COOKIE_CONSENT_VERSION,
    decidedAt: decidedAt.toISOString(),
  };
}

export function serializeConsent(consent: CookieConsent) {
  return encodeURIComponent(JSON.stringify(consent));
}
