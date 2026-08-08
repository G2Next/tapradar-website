"use server";

import { redirect } from "next/navigation";
import { recordLegalAcceptance } from "@/lib/legal-consent";
import { createClient } from "@/lib/supabase/server";
import { safeNextPath } from "@/lib/validation";

export async function acceptAccountLegal(formData: FormData) {
  const next = safeNextPath(String(formData.get("next") ?? ""), "/dashboard");
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect(`/login?next=${encodeURIComponent(next)}`);
  if (formData.get("terms_accepted") !== "on" || formData.get("privacy_acknowledged") !== "on") {
    redirect(`/rechtliches?error=required&next=${encodeURIComponent(next)}`);
  }

  try {
    await recordLegalAcceptance({ userId: data.user.id, context: "account", metadata: { source: "web-consent-page" } });
  } catch {
    redirect(`/rechtliches?error=save&next=${encodeURIComponent(next)}`);
  }
  redirect(next);
}
