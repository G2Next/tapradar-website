import { databaseError, MerchantApiError, parseJson, requireLocation, runIdempotentMutation, runMerchantRoute } from "@/lib/merchant-api/core";
import { loyaltyCardPatchSchema } from "@/lib/merchant-api/schemas";
import { isUuid } from "@/lib/validation";

export const dynamic = "force-dynamic";
const fields = "id,organization_id,location_id,title,reward_title,earning_rule,verification_instructions,stamps_required,is_active,created_at,updated_at";
type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  return runMerchantRoute(request, { roles: ["owner", "manager"], requireLegal: true }, async (context) => {
    if (!isUuid(id)) throw new MerchantApiError(400, "invalid_loyalty_card_id", "Loyalty card ID must be a UUID.");
    const input = await parseJson(request, loyaltyCardPatchSchema);
    if (input.location_id !== undefined) await requireLocation(context, input.location_id);
    return runIdempotentMutation(context, { id, input }, async () => {
      const { data, error } = await context.supabase.from("loyalty_cards").update(input)
        .eq("id", id).eq("organization_id", context.organizationId!).select(fields).maybeSingle();
      if (error) throw databaseError(error);
      if (!data) throw new MerchantApiError(404, "loyalty_card_not_found", "Loyalty card was not found.");
      return { data: { loyalty_card: data } };
    });
  });
}
