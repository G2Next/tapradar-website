import { createCipheriv, createDecipheriv, createHash, randomBytes } from "crypto";

function encryptionKey() {
  const dedicatedKey = process.env.PLATFORM_SECRETS_ENCRYPTION_KEY;
  if (process.env.NODE_ENV === "production" && !dedicatedKey) {
    throw new Error("PLATFORM_SECRETS_ENCRYPTION_KEY is required in production.");
  }
  const material = dedicatedKey || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!material) throw new Error("Platform secret encryption is not configured.");
  return createHash("sha256").update(`tapradar-integrations:${material}`).digest();
}

export function encryptIntegrationSecret(value: string) {
  const iv = randomBytes(12); const cipher = createCipheriv("aes-256-gcm", encryptionKey(), iv); const encrypted = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]); const tag = cipher.getAuthTag();
  return `v1.${iv.toString("base64url")}.${tag.toString("base64url")}.${encrypted.toString("base64url")}`;
}

export function decryptIntegrationSecret(value: string | null | undefined) {
  if (!value) return null; const [version, ivValue, tagValue, encryptedValue] = value.split("."); if (version !== "v1" || !ivValue || !tagValue || !encryptedValue) throw new Error("Invalid encrypted integration secret.");
  const decipher = createDecipheriv("aes-256-gcm", encryptionKey(), Buffer.from(ivValue, "base64url")); decipher.setAuthTag(Buffer.from(tagValue, "base64url")); return Buffer.concat([decipher.update(Buffer.from(encryptedValue, "base64url")), decipher.final()]).toString("utf8");
}

export function maskSecret(value: string | null | undefined) { if (!value) return "Nicht hinterlegt"; return value.length <= 8 ? "••••••••" : `${value.slice(0, 4)}••••${value.slice(-4)}`; }
