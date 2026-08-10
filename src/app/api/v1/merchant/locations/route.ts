import { randomUUID } from "crypto";
import { databaseError, MerchantApiError, parseJson, runIdempotentMutation, runMerchantRoute } from "@/lib/merchant-api/core";
import { locationCreateSchema } from "@/lib/merchant-api/schemas";
import { slugify } from "@/lib/validation";

export const dynamic = "force-dynamic";

const fields = "id,organization_id,name,slug,address,postal_code,city,country_code,phone,email,timezone,latitude,longitude,opening_hours,public_status,is_primary,is_active,created_at,updated_at";

export async function GET(request: Request) {
  return runMerchantRoute(request, {}, async (context) => {
    let query = context.supabase.from("locations").select(fields).eq("organization_id", context.organizationId!).order("is_primary", { ascending: false }).order("name");
    if (context.role === "staff") query = query.in("id", context.allowedLocationIds?.length ? context.allowedLocationIds : ["00000000-0000-0000-0000-000000000000"]);
    const { data, error } = await query;
    if (error) throw databaseError(error);
    return { data: { locations: data ?? [] } };
  });
}
export async function POST(request: Request) {
  return runMerchantRoute(request, { roles: ["owner", "manager"], requireLegal: true }, async (context) => {
    const input = await parseJson(request, locationCreateSchema);
    return runIdempotentMutation(context, input, async () => {
      const { data: organization, error: organizationError } = await context.supabase
        .from("organizations")
        .select("slug,plan,subscription_product_id")
        .eq("id", context.organizationId!)
        .single();
      if (organizationError) throw databaseError(organizationError);
      const [{ count, error: countError }, productResult] = await Promise.all([
        context.supabase.from("locations").select("id", { count: "exact", head: true }).eq("organization_id", context.organizationId!).eq("is_active", true),
        organization.subscription_product_id
          ? context.supabase.from("subscription_products").select("location_limit").eq("id", organization.subscription_product_id).maybeSingle()
          : context.supabase.from("subscription_products").select("location_limit").eq("code", organization.plan).maybeSingle(),
      ]);
      if (countError) throw databaseError(countError);
      if (productResult.error) throw databaseError(productResult.error);
      if ((count ?? 0) >= (productResult.data?.location_limit ?? 1)) {
        throw new MerchantApiError(403, "location_plan_limit_reached", "The active plan location limit has been reached.");
      }
      const slug = `${organization.slug}-${slugify(input.name) || "location"}-${randomUUID().slice(0, 8)}`;
      const { data, error } = await context.supabase.from("locations").insert({
        ...input,
        organization_id: context.organizationId,
        slug,
        is_primary: (count ?? 0) === 0,
      }).select(fields).single();
      if (error) throw databaseError(error);
      return { data: { location: data }, status: 201 };
    });
  });
}
