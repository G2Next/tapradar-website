/** Turnstile is verified on the server before storing or emailing a contact request. */
export async function verifyContactCaptcha(token: unknown, ip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!secret || !siteUrl || typeof token !== "string" || !token || token.length > 2048) return false;
  let expectedHostname: string;
  try { expectedHostname = new URL(siteUrl).hostname; } catch { return false; }
  const allowedHosts = new Set([expectedHostname]);
  if (["tapradar.app", "www.tapradar.app"].includes(expectedHostname)) {
    allowedHosts.add("tapradar.app"); allowedHosts.add("www.tapradar.app");
  }
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token, ...(ip && ip !== "unknown" ? { remoteip: ip } : {}) }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return false;
    const result = await response.json() as { success?: boolean; action?: string; hostname?: string };
    return result.success === true && result.action === "contact" && allowedHosts.has(result.hostname ?? "");
  } catch {
    return false;
  }
}
