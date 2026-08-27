import { createAdminClient } from "@/lib/supabase/admin";

const EXPO_ENDPOINT = "https://exp.host/--/api/v2/push/send";

async function sendExpo(messages: Array<Record<string, unknown>>) {
  if (!messages.length) return;
  for (let index = 0; index < messages.length; index += 100) {
    const response = await fetch(EXPO_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(messages.slice(index, index + 100)),
    });
    if (!response.ok) throw new Error(`expo_push_failed:${response.status}`);
  }
}

export async function sendReviewRequestedPush(input: { title: string; kind: "Aktion" | "Gutschein" | "Push-Nachricht"; organizationName: string }) {
  const admin = createAdminClient();
  const { data: reviewers } = await admin.from("platform_admins").select("user_id").eq("is_active", true).in("role", ["super_admin", "operations"]);
  const ids = (reviewers ?? []).map((row) => row.user_id);
  if (!ids.length) return;
  const { data: tokens } = await admin.from("user_push_tokens").select("expo_push_token").in("user_id", ids).eq("is_active", true).eq("app_variant", "merchant");
  await sendExpo((tokens ?? []).map((row) => ({
    to: row.expo_push_token,
    sound: "default",
    title: `${input.kind} wartet auf Freigabe`,
    body: `${input.organizationName}: ${input.title}`,
    data: { type: "admin_marketing_review", url: "/admin/marketing" },
  })));
}

export async function deliverApprovedMerchantPush(messageId: string) {
  const admin = createAdminClient();
  const { data: message, error } = await admin.from("push_messages").select("id,business_id,title,body,target_type,segment_name,moderation_status,delivery_status").eq("id", messageId).single();
  if (error || !message || message.moderation_status !== "approved") throw new Error("push_not_approved");
  if (message.delivery_status === "sent") return { sentCount: 0, alreadySent: true };
  await admin.from("push_messages").update({ delivery_status: "sending" }).eq("id", messageId).neq("delivery_status", "sent");

  const { data: cards } = await admin.from("customer_loyalty_cards").select("user_id,lifetime_stamps,updated_at,created_at,loyalty_cards!inner(organization_id)").eq("loyalty_cards.organization_id", message.business_id).limit(5000);
  const now = Date.now();
  const targeted = (cards ?? []).filter((card) => {
    if (message.target_type !== "segment") return true;
    const segment = (message.segment_name ?? "").toLowerCase();
    if (segment.includes("inaktiv") || segment.includes("inactive") || segment.includes("win")) return Boolean(card.updated_at && now - new Date(card.updated_at).getTime() >= 30 * 86400000);
    if (segment.includes("neu") || segment.includes("new")) return now - new Date(card.created_at).getTime() <= 7 * 86400000;
    return (card.lifetime_stamps ?? 0) > 0;
  });
  const userIds = [...new Set(targeted.map((card) => card.user_id))];
  const { data: profiles } = userIds.length ? await admin.from("customer_profiles").select("user_id").in("user_id", userIds).eq("marketing_consent", true).eq("is_active", true) : { data: [] };
  const optedIn = (profiles ?? []).map((row) => row.user_id);
  const { data: tokens } = optedIn.length ? await admin.from("user_push_tokens").select("expo_push_token").in("user_id", optedIn).eq("is_active", true).eq("app_variant", "customer") : { data: [] };
  const uniqueTokens = [...new Set((tokens ?? []).map((row) => row.expo_push_token).filter(Boolean))];
  try {
    await sendExpo(uniqueTokens.map((token) => ({ to: token, sound: "default", title: message.title, body: message.body, data: { type: "merchant_push", businessId: message.business_id, pushMessageId: message.id } })));
    await admin.from("push_messages").update({ delivery_status: "sent", sent_count: uniqueTokens.length, sent_at: new Date().toISOString() }).eq("id", messageId);
    return { sentCount: uniqueTokens.length, alreadySent: false };
  } catch (deliveryError) {
    await admin.from("push_messages").update({ delivery_status: "failed" }).eq("id", messageId);
    throw deliveryError;
  }
}
