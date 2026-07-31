"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentBusinessId } from "@/lib/dashboard";

function getCardPayload(formData: FormData) {
  return {
    title: String(formData.get("title") ?? "").trim(),
    reward_title: String(formData.get("reward_title") ?? "").trim(),
    stamps_required: Number(formData.get("stamps_required") ?? 10),
    is_active: formData.get("is_active") === "on",
  };
}

export async function createLoyaltyCard(formData: FormData) {
  const { supabase, businessId } = await getCurrentBusinessId();
  const payload = getCardPayload(formData);

  if (!businessId || !payload.title || !payload.reward_title || payload.stamps_required < 1) {
    redirect("/dashboard/loyalty-cards?error=missing-fields");
  }

  const { error } = await supabase.from("loyalty_cards").insert({
    ...payload,
    business_id: businessId,
  });

  if (error) {
    redirect("/dashboard/loyalty-cards?error=save-failed");
  }

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/loyalty-cards");
  redirect("/dashboard/loyalty-cards?saved=1");
}

export async function updateLoyaltyCard(formData: FormData) {
  const { supabase, businessId } = await getCurrentBusinessId();
  const cardId = String(formData.get("card_id") ?? "");
  const payload = getCardPayload(formData);

  if (!businessId || !cardId || !payload.title || !payload.reward_title || payload.stamps_required < 1) {
    redirect("/dashboard/loyalty-cards?error=missing-fields");
  }

  const { error } = await supabase
    .from("loyalty_cards")
    .update(payload)
    .eq("id", cardId)
    .eq("business_id", businessId);

  if (error) {
    redirect("/dashboard/loyalty-cards?error=save-failed");
  }

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/loyalty-cards");
  redirect("/dashboard/loyalty-cards?saved=1");
}
