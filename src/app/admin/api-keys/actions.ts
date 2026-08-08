"use server";

import { createHash, randomBytes } from "crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { isUuid, requiredText } from "@/lib/validation";

export type ApiKeyState = { key?: string; error?: string };
export async function createPlatformApiKey(_: ApiKeyState, formData: FormData): Promise<ApiKeyState> {
  const { supabase, user } = await requirePlatformAdmin(); const name = requiredText(formData.get("name"), 120); const expires = requiredText(formData.get("expires_at"), 30); if (name.length < 2) return { error: "Bitte einen Namen eingeben." };
  const secretPart = randomBytes(32).toString("base64url"); const key = `tr_live_${secretPart}`; const prefix = key.slice(0, 16); const hash = createHash("sha256").update(key).digest("hex"); const expiresAt = expires && !Number.isNaN(Date.parse(expires)) ? new Date(`${expires}T23:59:59Z`).toISOString() : null;
  const { error } = await supabase.from("platform_api_keys").insert({ name, key_prefix: prefix, key_hash: hash, scopes: ["sync:read"], expires_at: expiresAt, created_by: user.id }); if (error) return { error: "API-Schlüssel konnte nicht erstellt werden." }; revalidatePath("/admin/api-keys"); return { key };
}
export async function revokePlatformApiKey(formData: FormData) { const { supabase } = await requirePlatformAdmin(); const id = requiredText(formData.get("key_id"), 40); if (!isUuid(id)) redirect("/admin/api-keys?error=invalid"); const { error } = await supabase.from("platform_api_keys").update({ is_active: false, revoked_at: new Date().toISOString() }).eq("id", id); if (error) redirect("/admin/api-keys?error=save"); revalidatePath("/admin/api-keys"); redirect("/admin/api-keys?saved=revoke"); }
