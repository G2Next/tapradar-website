import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { LEGAL_VERSIONS, hasCurrentLegalAcceptance } from "@/lib/legal-consent";
import { consumeRequestLimit, rateLimitHeaders } from "@/lib/rate-limit";
import { resolveSyncIdentity } from "@/lib/sync-identity";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const suppliedKey = request.headers.get("x-api-key") || (request.headers.get("authorization")?.startsWith("Bearer tr_") ? request.headers.get("authorization")?.slice(7) : null);
  let platformApiKeyAuthenticated = false;
  if (suppliedKey) { const admin = createAdminClient(); const keyHash = createHash("sha256").update(suppliedKey).digest("hex"); const { data: apiKey } = await admin.from("platform_api_keys").select("id,scopes,is_active,expires_at").eq("key_hash", keyHash).maybeSingle(); if (!apiKey?.is_active || !apiKey.scopes.includes("sync:read") || (apiKey.expires_at && new Date(apiKey.expires_at).getTime() < Date.now())) return NextResponse.json({ error: "invalid_api_key" }, { status: 401 }); await admin.from("platform_api_keys").update({ last_used_at: new Date().toISOString() }).eq("id", apiKey.id); platformApiKeyAuthenticated = true; }
  let rateLimit;
  try { rateLimit = await consumeRequestLimit(request, "mobile-sync", 120); }
  catch { return NextResponse.json({ error: "rate_limiter_unavailable" }, { status: 503 }); }
  if (!rateLimit.allowed) return NextResponse.json({ error: "rate_limit_exceeded" }, { status: 429, headers: rateLimitHeaders(rateLimit) });
  let identity;
  try { identity = await resolveSyncIdentity(request, platformApiKeyAuthenticated); }
  catch (error) {
    const invalidToken = error instanceof Error && error.message.includes("access token");
    return NextResponse.json({ error: invalidToken ? "invalid_access_token" : "identity_provider_unavailable" }, { status: invalidToken ? 401 : 503 });
  }
  const supabase = identity.client;
  const sinceValue = request.nextUrl.searchParams.get("since");
  const since = sinceValue && !Number.isNaN(Date.parse(sinceValue)) ? new Date(sinceValue).toISOString() : null;
  const limit = Math.min(Math.max(Number(request.nextUrl.searchParams.get("limit")) || 100, 1), 250);
  const offset = (resource: string) => Math.min(Math.max(Number(request.nextUrl.searchParams.get(`offset_${resource}`)) || 0, 0), 100_000);

  let organizationsQuery = supabase.from("organizations").select("id, name, legal_name, slug, category, description, website, logo_emoji, rating, rating_count, updated_at").eq("is_active", true).eq("public_status", "open").order("updated_at").range(offset("organizations"), offset("organizations") + limit - 1);
  let locationsQuery = supabase.from("locations").select("id, organization_id, name, slug, address, postal_code, city, country_code, phone, email, timezone, opening_hours, latitude, longitude, public_status, is_primary, updated_at").eq("is_active", true).in("public_status", ["open", "closed"]).order("updated_at").range(offset("locations"), offset("locations") + limit - 1);
  let cardsQuery = supabase.from("loyalty_cards").select("id, organization_id, location_id, title, reward_title, earning_rule, verification_instructions, stamps_required, updated_at").eq("is_active", true).order("updated_at").range(offset("loyalty_cards"), offset("loyalty_cards") + limit - 1);
  let offersQuery = supabase.from("offers").select("id, organization_id, location_id, title, description, offer_type, discount_type, discount_value, minimum_purchase_amount, redemption_code, conditions, media_asset_id, starts_at, ends_at, updated_at").eq("is_active", true).or(`starts_at.is.null,starts_at.lte.${new Date().toISOString()}`).or(`ends_at.is.null,ends_at.gte.${new Date().toISOString()}`).order("updated_at").range(offset("offers"), offset("offers") + limit - 1);
  let assetsQuery = supabase.from("organization_assets").select("id, organization_id, location_id, asset_type, storage_path, mime_type, alt_text, created_at").eq("is_public", true).order("created_at").range(offset("assets"), offset("assets") + limit - 1);
  if (since) {
    organizationsQuery = organizationsQuery.gt("updated_at", since);
    locationsQuery = locationsQuery.gt("updated_at", since);
    cardsQuery = cardsQuery.gt("updated_at", since);
    offersQuery = offersQuery.gt("updated_at", since);
    assetsQuery = assetsQuery.gt("created_at", since);
  }

  const tombstonesQuery = since
    ? supabase.from("sync_tombstones").select("resource_type, resource_id, organization_id, deleted_at").gt("deleted_at", since).order("deleted_at").limit(1000)
    : Promise.resolve({ data: [], error: null });
  const [organizations, locations, cards, offers, assets, tombstones] = await Promise.all([
    organizationsQuery, locationsQuery, cardsQuery, offersQuery, assetsQuery, tombstonesQuery,
  ]);
  const firstError = [organizations.error, locations.error, cards.error, offers.error, assets.error, tombstones.error].find(Boolean);
  if (firstError) {
    console.error("TapRadar sync query failed", firstError);
    return NextResponse.json({ error: "sync_unavailable" }, { status: 503 });
  }

  const legalAccepted = identity.websiteUserId ? await hasCurrentLegalAcceptance(identity.websiteUserId, "account") : false;
  let customer = null; let business = null;
  if (identity.websiteUserId && legalAccepted) {
    const [wallet, rewards, memberships] = await Promise.all([
      supabase.from("customer_loyalty_cards").select("id, loyalty_card_id, stamps_balance, lifetime_stamps, updated_at").eq("user_id", identity.websiteUserId),
      supabase.from("reward_entitlements").select("id, organization_id, location_id, loyalty_card_id, reward_title, redemption_code, status, expires_at, updated_at").eq("user_id", identity.websiteUserId),
      supabase.from("organization_members").select("organization_id,role,is_active,organizations(name,plan,public_status,subscriptions(plan,status,product_id,current_period_end,cancel_at_period_end,updated_at))").eq("user_id",identity.websiteUserId).eq("is_active",true),
    ]);
    customer = { wallet: wallet.data ?? [], rewards: rewards.data ?? [] };
    business = { memberships: memberships.data ?? [] };
  }

  const serverTime = new Date().toISOString();
  return NextResponse.json({
    schema_version: 4,
    server_time: serverTime,
    next_since: serverTime,
    identity: {
      source: identity.source,
      authenticated: identity.source === "website" || identity.source === "mobile_app",
      external_user_id: identity.externalUserId,
      website_account_linked: Boolean(identity.websiteUserId),
    },
    legal: { required: Boolean(identity.websiteUserId && !legalAccepted), accepted: legalAccepted, versions: LEGAL_VERSIONS, consent_endpoint: "/api/v1/legal/consent" },
    data: {
      organizations: organizations.data ?? [], locations: locations.data ?? [],
      loyalty_cards: cards.data ?? [], offers: offers.data ?? [],
      assets: (assets.data ?? []).map((asset) => ({ ...asset, public_url: supabase.storage.from("business-media").getPublicUrl(asset.storage_path).data.publicUrl })),
      tombstones: tombstones.data ?? [],
      customer, business,
    },
    pagination: {
      next_offsets: {
        organizations: (organizations.data?.length ?? 0) === limit ? offset("organizations") + limit : null,
        locations: (locations.data?.length ?? 0) === limit ? offset("locations") + limit : null,
        loyalty_cards: (cards.data?.length ?? 0) === limit ? offset("loyalty_cards") + limit : null,
        offers: (offers.data?.length ?? 0) === limit ? offset("offers") + limit : null,
        assets: (assets.data?.length ?? 0) === limit ? offset("assets") + limit : null,
      },
    },
  }, { headers: { "Cache-Control": identity.source === "anonymous" || identity.source === "platform_api_key" ? "public, max-age=30, stale-while-revalidate=120" : "private, no-store", "X-TapRadar-Schema-Version": "4", ...rateLimitHeaders(rateLimit) } });
}
