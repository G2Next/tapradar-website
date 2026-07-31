import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("businesses")
    .select(
      `
        id,
        name,
        slug,
        category,
        city,
        address,
        phone,
        website,
        description,
        opening_hours,
        logo_emoji,
        latitude,
        longitude,
        plan,
        rating,
        rating_count,
        loyalty_cards (
          id,
          title,
          reward_title,
          stamps_required
        ),
        business_offers (
          id,
          title,
          description,
          offer_type,
          starts_at,
          ends_at
        )
      `,
    )
    .eq("is_active", true)
    .eq("public_status", "open")
    .order("name");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ businesses: data ?? [] });
}
