"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentBusinessId } from "@/lib/dashboard";

const allowedOfferTypes = ["aktion", "gutschein", "belohnung"] as const;

function getOfferPayload(formData: FormData) {
  const offerType = String(formData.get("offer_type") ?? "aktion");

  return {
    title: String(formData.get("title") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    offer_type: allowedOfferTypes.includes(offerType as (typeof allowedOfferTypes)[number])
      ? offerType
      : "aktion",
    starts_at: String(formData.get("starts_at") ?? "") || null,
    ends_at: String(formData.get("ends_at") ?? "") || null,
    is_active: formData.get("is_active") === "on",
  };
}

export async function createOffer(formData: FormData) {
  const { supabase, businessId } = await getCurrentBusinessId();
  const payload = getOfferPayload(formData);

  if (!businessId || !payload.title) {
    redirect("/dashboard/offers?error=missing-fields");
  }

  const { error } = await supabase.from("business_offers").insert({
    ...payload,
    business_id: businessId,
  });

  if (error) {
    redirect("/dashboard/offers?error=save-failed");
  }

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/offers");
  redirect("/dashboard/offers?saved=1");
}

export async function updateOffer(formData: FormData) {
  const { supabase, businessId } = await getCurrentBusinessId();
  const offerId = String(formData.get("offer_id") ?? "");
  const payload = getOfferPayload(formData);

  if (!businessId || !offerId || !payload.title) {
    redirect("/dashboard/offers?error=missing-fields");
  }

  const { error } = await supabase
    .from("business_offers")
    .update(payload)
    .eq("id", offerId)
    .eq("business_id", businessId);

  if (error) {
    redirect("/dashboard/offers?error=save-failed");
  }

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/offers");
  redirect("/dashboard/offers?saved=1");
}
