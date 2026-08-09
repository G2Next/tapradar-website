import { databaseError, MerchantApiError, parseJson, runIdempotentMutation, runMerchantRoute } from "@/lib/merchant-api/core";
import { locationPatchSchema } from "@/lib/merchant-api/schemas";
import { isUuid } from "@/lib/validation";

export const dynamic = "force-dynamic";
const fields = "id,organization_id,name,slug,address,postal_code,city,country_code,phone,email,timezone,latitude,longitude,opening_hours,public_status,is_primary,is_active,created_at,updated_at";
type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  return runMerchantRoute(request, { roles: ["owner", "manager"], requireLegal: true }, async (context) => {
    if (!isUuid(id)) throw new MerchantApiError(400, "invalid_location_id", "Location ID must be a UUID.");
    const input = await parseJson(request, locationPatchSchema);
    return runIdempotentMutation(context, { id, input }, async () => {
      if (input.is_active === false) {
        const { data: current, error: findError } = await context.supabase.from("locations").select("is_primary")
          .eq("id", id).eq("organization_id", context.organizationId!).maybeSingle();
        if (findError) throw databaseError(findError);
        if (!current) throw new MerchantApiError(404, "location_not_found", "Location was not found.");
        if (current.is_primary) throw new MerchantApiError(409, "primary_location_deactivation_forbidden", "The primary location cannot be deactivated.");
      }
      const { data, error } = await context.supabase.from("locations").update(input)
        .eq("id", id).eq("organization_id", context.organizationId!).select(fields).maybeSingle();
      if (error) throw databaseError(error);
      if (!data) throw new MerchantApiError(404, "location_not_found", "Location was not found.");
      return { data: { location: data } };
    });
  });
}

export async function DELETE(request: Request, { params }: Params) {
  const { id } = await params;
  return runMerchantRoute(request, { roles: ["owner", "manager"], requireLegal: true }, async (context) => {
    if (!isUuid(id)) throw new MerchantApiError(400, "invalid_location_id", "Location ID must be a UUID.");
    return runIdempotentMutation(context, { id }, async () => {
      const { data: location, error: findError } = await context.supabase.from("locations").select("id,is_primary")
        .eq("id", id).eq("organization_id", context.organizationId!).maybeSingle();
      if (findError) throw databaseError(findError);
      if (!location) throw new MerchantApiError(404, "location_not_found", "Location was not found.");
      if (location.is_primary) throw new MerchantApiError(409, "primary_location_delete_forbidden", "The primary location cannot be deleted.");
      const { error } = await context.supabase.from("locations").delete().eq("id", id).eq("organization_id", context.organizationId!);
      if (error) throw databaseError(error);
      return { data: { deleted_id: id } };
    });
  });
}
