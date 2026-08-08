import { NextResponse } from "next/server";
import { createRequestClient } from "@/lib/supabase/request";
import { consumeRequestLimit, rateLimitHeaders } from "@/lib/rate-limit";

export async function GET(request: Request) {
  let limit;
  try { limit = await consumeRequestLimit(request, "privacy-export", 5, 3600); }
  catch { return NextResponse.json({ error: "rate_limiter_unavailable" }, { status: 503 }); }
  if (!limit.allowed) return NextResponse.json({ error: "rate_limit_exceeded" }, { status: 429, headers: rateLimitHeaders(limit) });
  const supabase = await createRequestClient(request);
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return NextResponse.json({ error: "authentication_required" }, { status: 401 });
  const userId = auth.user.id;
  const [profile, customerProfile, wallet, stamps, rewards, redemptions, memberships, locationMemberships, pushDevices, privacyRequests, legalAcceptances] = await Promise.all([
    supabase.from("profiles").select("email, full_name, created_at, updated_at").eq("id", userId).maybeSingle(),
    supabase.from("customer_profiles").select("display_name, marketing_consent, marketing_consent_at, created_at, updated_at").eq("user_id", userId).maybeSingle(),
    supabase.from("customer_loyalty_cards").select("id, loyalty_card_id, stamps_balance, lifetime_stamps, created_at, updated_at").eq("user_id", userId),
    supabase.from("stamp_events").select("id, organization_id, location_id, loyalty_card_id, event_type, amount, metadata, created_at").eq("user_id", userId),
    supabase.from("reward_entitlements").select("id, organization_id, location_id, reward_title, status, expires_at, redeemed_at, created_at").eq("user_id", userId),
    supabase.from("reward_redemptions").select("id, entitlement_id, organization_id, location_id, created_at").eq("redeemed_by", userId),
    supabase.from("organization_members").select("organization_id, role, is_active, created_at").eq("user_id", userId),
    supabase.from("location_members").select("organization_id, location_id, role, is_active, created_at").eq("user_id", userId),
    supabase.from("push_devices").select("platform, is_active, created_at, updated_at").eq("user_id", userId),
    supabase.from("privacy_requests").select("id, request_type, status, execute_after, completed_at, created_at").eq("user_id", userId),
    supabase.from("legal_acceptances").select("id, organization_id, context, terms_version, privacy_version, withdrawal_version, withdrawal_acknowledged, immediate_service_requested, metadata, accepted_at").eq("user_id", userId),
  ]);
  const errors = [profile, customerProfile, wallet, stamps, rewards, redemptions, memberships, locationMemberships, pushDevices, privacyRequests, legalAcceptances].map((result) => result.error).filter(Boolean);
  if (errors.length) return NextResponse.json({ error: "export_unavailable" }, { status: 503 });
  const exportedAt = new Date().toISOString();
  return NextResponse.json({ export_version: 2, exported_at: exportedAt, account: { id: userId, email: auth.user.email, created_at: auth.user.created_at }, profile: profile.data, customer_profile: customerProfile.data, wallet: wallet.data ?? [], stamp_events: stamps.data ?? [], rewards: rewards.data ?? [], staff_redemptions: redemptions.data ?? [], organization_memberships: memberships.data ?? [], location_memberships: locationMemberships.data ?? [], push_devices: pushDevices.data ?? [], privacy_requests: privacyRequests.data ?? [], legal_acceptances: legalAcceptances.data ?? [] }, { headers: { "Cache-Control": "private, no-store", "Content-Disposition": `attachment; filename="tapradar-data-${exportedAt.slice(0, 10)}.json"`, ...rateLimitHeaders(limit) } });
}
