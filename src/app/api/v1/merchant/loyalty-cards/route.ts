import { databaseError, parseJson, requireLocation, runIdempotentMutation, runMerchantRoute } from "@/lib/merchant-api/core";
import { loyaltyCardCreateSchema } from "@/lib/merchant-api/schemas";

export const dynamic = "force-dynamic";
const fields = "id,organization_id,location_id,title,reward_title,earning_rule,verification_instructions,stamps_required,is_active,created_at,updated_at";

export async function GET(request: Request) {
  return runMerchantRoute(request, {}, async (context) => {
    const { data, error } = await context.supabase.from("loyalty_cards").select(fields).eq("organization_id", context.organizationId!).order("created_at");
    if (error) throw databaseError(error);
    const cards = context.role === "staff"
      ? (data ?? []).filter((card) => card.location_id === null || context.allowedLocationIds?.includes(card.location_id))
      : data ?? [];
    return { data: { loyalty_cards: cards } };
  });
}
export async function POST(request: Request) {
  return runMerchantRoute(request, { roles: ["owner", "manager"], requireLegal: true }, async (context) => {
    const input = await parseJson(request, loyaltyCardCreateSchema);
    await requireLocation(context, input.location_id);
    return runIdempotentMutation(context, input, async () => {
      const { data, error } = await context.supabase.from("loyalty_cards").insert({ ...input, organization_id: context.organizationId })
        .select(fields).single();
      if (error) throw databaseError(error);
      return { data: { loyalty_card: data }, status: 201 };
    });
  });
}
