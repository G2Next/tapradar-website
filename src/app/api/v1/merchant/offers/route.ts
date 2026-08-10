import { randomBytes } from "crypto";
import { databaseError, parseJson, requireAsset, requireLocation, requireOfferPlan, runIdempotentMutation, runMerchantRoute } from "@/lib/merchant-api/core";
import { offerCreateSchema } from "@/lib/merchant-api/schemas";

export const dynamic = "force-dynamic";
const fields = "id,organization_id,location_id,title,description,offer_type,discount_type,discount_value,minimum_purchase_amount,redemption_code,conditions,media_asset_id,starts_at,ends_at,is_active,created_at,updated_at";

export async function GET(request: Request) {
  return runMerchantRoute(request, {}, async (context) => {
    const { data, error } = await context.supabase.from("offers").select(fields).eq("organization_id", context.organizationId!).order("created_at", { ascending: false });
    if (error) throw databaseError(error);
    const offers = context.role === "staff"
      ? (data ?? []).filter((offer) => offer.location_id === null || context.allowedLocationIds?.includes(offer.location_id))
      : data ?? [];
    return { data: { offers } };
  });
}
export async function POST(request: Request) {
  return runMerchantRoute(request, { roles: ["owner", "manager"], requireLegal: true }, async (context) => {
    await requireOfferPlan(context);
    const input = await parseJson(request, offerCreateSchema);
    await Promise.all([requireLocation(context, input.location_id), requireAsset(context, input.media_asset_id)]);
    const payload = {
      ...input,
      redemption_code: input.offer_type === "gutschein"
        ? input.redemption_code ?? `TR-${randomBytes(4).toString("hex").toUpperCase()}`
        : null,
    };
    return runIdempotentMutation(context, payload, async () => {
      const { data, error } = await context.supabase.from("offers").insert({ ...payload, organization_id: context.organizationId })
        .select(fields).single();
      if (error) throw databaseError(error);
      return { data: { offer: data }, status: 201 };
    });
  });
}
