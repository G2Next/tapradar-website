import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { consumeRequestLimit, rateLimitHeaders } from "@/lib/rate-limit";

export async function GET(request: Request) {
  let rateLimit;
  try { rateLimit = await consumeRequestLimit(request, "public-businesses", 60); }
  catch { return NextResponse.json({ error: "rate_limiter_unavailable" }, { status: 503 }); }
  if (!rateLimit.allowed) return NextResponse.json({ error: "rate_limit_exceeded" }, { status: 429, headers: rateLimitHeaders(rateLimit) });
  let supabase;
  try { supabase = await createClient(); }
  catch { return NextResponse.json({ error: "service_not_configured" }, { status: 503 }); }

  const { data: organizations, error } = await supabase
    .from("organizations")
    .select("id, name, slug, category, website, description, logo_emoji, plan, rating, rating_count, locations(id, name, address, postal_code, city, country_code, phone, email, opening_hours, latitude, longitude, is_primary)")
    .eq("is_active", true)
    .eq("public_status", "open")
    .order("name");

  if (error) {
    console.error("Public businesses query failed", error);
    return NextResponse.json({ error: "businesses_unavailable" }, { status: 500, headers: rateLimitHeaders(rateLimit) });
  }

  const organizationIds = organizations?.map((business) => business.id) ?? [];

  if (organizationIds.length === 0) {
    return NextResponse.json({ organizations: [] }, { headers: rateLimitHeaders(rateLimit) });
  }

  const [{ data: loyaltyCards, error: loyaltyCardsError }, { data: offers, error: offersError }] =
    await Promise.all([
      supabase
        .from("loyalty_cards")
        .select("id, organization_id, location_id, title, reward_title, stamps_required")
        .eq("is_active", true)
        .in("organization_id", organizationIds),
      supabase
        .from("offers")
        .select("id, organization_id, location_id, title, description, offer_type, starts_at, ends_at")
        .eq("is_active", true)
        .or(`starts_at.is.null,starts_at.lte.${new Date().toISOString()}`)
        .or(`ends_at.is.null,ends_at.gte.${new Date().toISOString()}`)
        .in("organization_id", organizationIds),
    ]);

  if (loyaltyCardsError || offersError) {
    console.error("Public business details query failed", loyaltyCardsError ?? offersError);
    return NextResponse.json(
      { error: "businesses_unavailable" },
      { status: 500, headers: rateLimitHeaders(rateLimit) },
    );
  }

  const enriched = organizations.map((organization) => ({
    ...organization,
    loyalty_cards: loyaltyCards?.filter((card) => card.organization_id === organization.id) ?? [],
    offers: offers?.filter((offer) => offer.organization_id === organization.id) ?? [],
  }));
  return NextResponse.json({
    organizations: enriched,
    businesses: enriched.map((organization) => {
      const primary = organization.locations?.find((location) => location.is_primary) ?? organization.locations?.[0];
      return { ...organization, city: primary?.city, address: primary?.address, postal_code: primary?.postal_code, phone: primary?.phone, opening_hours: primary?.opening_hours, latitude: primary?.latitude, longitude: primary?.longitude };
    }),
  }, { headers: rateLimitHeaders(rateLimit) });
}
