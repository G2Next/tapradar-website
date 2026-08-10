import { databaseError, MerchantApiError, parseJson, requireAsset, requireLocation, requireOfferPlan, runIdempotentMutation, runMerchantRoute } from "@/lib/merchant-api/core";
import { offerCreateSchema, offerPatchSchema } from "@/lib/merchant-api/schemas";
import { isUuid } from "@/lib/validation";

export const dynamic = "force-dynamic";
const fields = "id,organization_id,location_id,title,description,offer_type,discount_type,discount_value,minimum_purchase_amount,redemption_code,conditions,media_asset_id,starts_at,ends_at,is_active,created_at,updated_at";
type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  return runMerchantRoute(request, { roles: ["owner", "manager"], requireLegal: true }, async (context) => {
    if (!isUuid(id)) throw new MerchantApiError(400, "invalid_offer_id", "Offer ID must be a UUID.");
    await requireOfferPlan(context);
    const input = await parseJson(request, offerPatchSchema);
    const { data: existing, error: existingError } = await context.supabase.from("offers").select(fields)
      .eq("id", id).eq("organization_id", context.organizationId!).maybeSingle();
    if (existingError) throw databaseError(existingError);
    if (!existing) throw new MerchantApiError(404, "offer_not_found", "Offer was not found.");
    const merged = offerCreateSchema.safeParse({
      location_id: input.location_id === undefined ? existing.location_id : input.location_id,
      title: input.title ?? existing.title,
      description: input.description ?? existing.description,
      offer_type: input.offer_type ?? existing.offer_type,
      discount_type: input.discount_type === undefined ? existing.discount_type : input.discount_type,
      discount_value: input.discount_value === undefined ? existing.discount_value : input.discount_value,
      minimum_purchase_amount: input.minimum_purchase_amount === undefined ? existing.minimum_purchase_amount : input.minimum_purchase_amount,
      redemption_code: input.redemption_code === undefined ? existing.redemption_code : input.redemption_code,
      conditions: input.conditions === undefined ? existing.conditions : input.conditions,
      media_asset_id: input.media_asset_id === undefined ? existing.media_asset_id : input.media_asset_id,
      starts_at: input.starts_at === undefined ? existing.starts_at : input.starts_at,
      ends_at: input.ends_at === undefined ? existing.ends_at : input.ends_at,
      is_active: input.is_active ?? existing.is_active,
    });
    if (!merged.success) throw new MerchantApiError(422, "validation_failed", "The complete offer would be invalid.", merged.error.issues.map((issue) => ({ path: issue.path.join("."), message: issue.message })));
    await Promise.all([requireLocation(context, merged.data.location_id), requireAsset(context, merged.data.media_asset_id)]);
    return runIdempotentMutation(context, { id, input }, async () => {
      const { data, error } = await context.supabase.from("offers").update(merged.data)
        .eq("id", id).eq("organization_id", context.organizationId!).select(fields).single();
      if (error) throw databaseError(error);
      return { data: { offer: data } };
    });
  });
}

export async function DELETE(request: Request, { params }: Params) {
  const { id } = await params;
  return runMerchantRoute(request, { roles: ["owner", "manager"], requireLegal: true }, async (context) => {
    if (!isUuid(id)) throw new MerchantApiError(400, "invalid_offer_id", "Offer ID must be a UUID.");
    await requireOfferPlan(context);
    return runIdempotentMutation(context, { id }, async () => {
      const { data, error } = await context.supabase.from("offers").delete()
        .eq("id", id).eq("organization_id", context.organizationId!).select("id").maybeSingle();
      if (error) throw databaseError(error);
      if (!data) throw new MerchantApiError(404, "offer_not_found", "Offer was not found.");
      return { data: { deleted_id: id } };
    });
  });
}
