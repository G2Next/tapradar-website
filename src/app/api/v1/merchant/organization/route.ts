import { inferVatTreatment } from "@/lib/tax";
import { databaseError, runIdempotentMutation, runMerchantRoute, parseJson } from "@/lib/merchant-api/core";
import { organizationPatchSchema } from "@/lib/merchant-api/schemas";

export const dynamic = "force-dynamic";

const fields = "id,name,legal_name,slug,category,description,website,logo_emoji,registration_number,tax_id,billing_email,billing_address,billing_postal_code,billing_city,billing_country_code,vat_treatment,vat_validation_status,plan,public_status,onboarding_status,is_active,updated_at";

export async function GET(request: Request) {
  return runMerchantRoute(request, {}, async (context) => {
    const { data, error } = await context.supabase.from("organizations").select(fields).eq("id", context.organizationId!).single();
    if (error) throw databaseError(error);
    return { data: { organization: data, role: context.role } };
  });
}
export async function PATCH(request: Request) {
  return runMerchantRoute(request, { roles: ["owner", "manager"], requireLegal: true }, async (context) => {
    const input = await parseJson(request, organizationPatchSchema);
    return runIdempotentMutation(context, input, async () => {
      const { data: current, error: currentError } = await context.supabase
        .from("organizations")
        .select("billing_country_code,tax_id")
        .eq("id", context.organizationId!)
        .single();
      if (currentError) throw databaseError(currentError);

      const country = input.billing_country_code ?? current.billing_country_code;
      const taxId = input.tax_id === undefined ? current.tax_id : input.tax_id;
      const taxChanged = input.billing_country_code !== undefined || input.tax_id !== undefined;
      const payload = {
        ...input,
        ...(taxChanged ? {
          vat_treatment: inferVatTreatment(country, taxId),
          vat_validation_status: "pending",
          vat_validated_at: null,
          vat_validated_by: null,
          vat_validation_note: null,
        } : {}),
      };
      const { data, error } = await context.supabase
        .from("organizations")
        .update(payload)
        .eq("id", context.organizationId!)
        .select(fields)
        .single();
      if (error) throw databaseError(error);
      return { data: { organization: data } };
    });
  });
}
