import { hasCurrentLegalAcceptance } from "@/lib/legal-consent";
import { databaseError, runMerchantRoute } from "@/lib/merchant-api/core";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return runMerchantRoute(request, { organization: "optional" }, async (context) => {
    const { data: memberships, error } = await context.supabase
      .from("organization_members")
      .select("organization_id,role,created_at,organizations(id,name,slug,plan,public_status,onboarding_status,is_active,subscription_products(code,name,location_limit,staff_limit,media_limit,features),subscriptions(status,current_period_end,cancel_at_period_end))")
      .eq("user_id", context.user.id)
      .eq("is_active", true)
      .order("created_at");
    if (error) throw databaseError(error);

    const rows = memberships ?? [];
    const selected = rows.find((membership) => membership.organization_id === context.organizationId) ?? rows[0] ?? null;
    let locations: unknown[] = [];
    if (selected) {
      let query = context.supabase
        .from("locations")
        .select("id,name,is_primary,public_status,is_active")
        .eq("organization_id", selected.organization_id)
        .eq("is_active", true)
        .order("is_primary", { ascending: false })
        .order("name");
      if (selected.role === "staff") {
        const { data: assignments, error: assignmentError } = await context.supabase
          .from("location_members")
          .select("location_id")
          .eq("organization_id", selected.organization_id)
          .eq("user_id", context.user.id)
          .eq("is_active", true);
        if (assignmentError) throw databaseError(assignmentError);
        const ids = (assignments ?? []).map((assignment) => assignment.location_id);
        query = query.in("id", ids.length ? ids : ["00000000-0000-0000-0000-000000000000"]);
      }
      const locationResult = await query;
      if (locationResult.error) throw databaseError(locationResult.error);
      locations = locationResult.data ?? [];
    }

    return {
      data: {
        user: { id: context.user.id, email: context.user.email ?? null },
        legal: {
          accepted: await hasCurrentLegalAcceptance(context.user.id, "account"),
          consent_endpoint: "/api/v1/legal/consent",
        },
        memberships: rows,
        selected: selected ? {
          organization_id: selected.organization_id,
          role: selected.role,
          locations,
        } : null,
      },
    };
  });
}
