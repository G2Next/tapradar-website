import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const { data: businesses, error } = await supabase
    .from("businesses")
    .select("id, name, slug, category, city, address, phone, website, description, opening_hours, logo_emoji, latitude, longitude, plan, rating, rating_count")
    .eq("is_active", true)
    .eq("public_status", "open")
    .order("name");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const businessIds = businesses?.map((business) => business.id) ?? [];

  if (businessIds.length === 0) {
    return NextResponse.json({ businesses: [] });
  }

  const [{ data: loyaltyCards, error: loyaltyCardsError }, { data: offers, error: offersError }] =
    await Promise.all([
      supabase
        .from("loyalty_cards")
        .select("id, business_id, title, reward_title, stamps_required")
        .in("business_id", businessIds),
      supabase
        .from("business_offers")
        .select("id, business_id, title, description, offer_type, starts_at, ends_at")
        .in("business_id", businessIds),
    ]);

  if (loyaltyCardsError || offersError) {
    return NextResponse.json(
      { error: loyaltyCardsError?.message ?? offersError?.message },
      { status: 500 },
    );
  }

  return NextResponse.json({
    businesses: businesses.map((business) => ({
      ...business,
      loyalty_cards: loyaltyCards?.filter((card) => card.business_id === business.id) ?? [],
      business_offers: offers?.filter((offer) => offer.business_id === business.id) ?? [],
    })),
  });
}
