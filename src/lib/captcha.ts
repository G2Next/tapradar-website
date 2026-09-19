/** Google reCAPTCHA v3 is verified on the server before storing or emailing a contact request. */
export async function verifyContactCaptcha(token: unknown, ip?: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!secret || !siteUrl || typeof token !== "string" || !token || token.length > 4096) return false;
  let expectedHostname: string;
  try { expectedHostname = new URL(siteUrl).hostname; } catch { return false; }
  const allowedHosts = new Set([expectedHostname]);
  if (["tapradar.app", "www.tapradar.app"].includes(expectedHostname)) {
    allowedHosts.add("tapradar.app"); allowedHosts.add("www.tapradar.app");
  }
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip && ip !== "unknown") body.set("remoteip", ip);
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return false;
    const result = await response.json() as { success?: boolean; score?: number; action?: string; hostname?: string };
    return result.success === true
      && typeof result.score === "number"
      && result.score >= 0.5
      && result.action === "contact"
      && allowedHosts.has(result.hostname ?? "");
  } catch {
    return false;
  }
}
