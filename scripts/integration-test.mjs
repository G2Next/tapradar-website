import assert from "node:assert/strict";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !anonKey || !serviceRoleKey) {
  throw new Error("Set NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, and SUPABASE_SERVICE_ROLE_KEY.");
}

const admin = createClient(url, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
const suffix = `${Date.now()}-${randomUUID().slice(0, 6)}`;
const password = `TapRadar-${randomBytes(12).toString("hex")}!`;

async function createUser(label) {
  const email = `${label}-${suffix}@tapradar.test`;
  const { data, error } = await admin.auth.admin.createUser({ email, password, email_confirm: true, user_metadata: { full_name: label } });
  assert.ifError(error);
  assert.ok(data.user);
  const client = createClient(url, anonKey, { auth: { persistSession: false, autoRefreshToken: false } });
  const login = await client.auth.signInWithPassword({ email, password });
  assert.ifError(login.error);
  return { email, user: data.user, client };
}

const owner = await createUser("owner");
const customer = await createUser("customer");
const staff = await createUser("staff");
const outsider = await createUser("outsider");
const platformAdmin = await createUser("admin");

const slug = `integration-${suffix}`.toLowerCase();
const created = await owner.client.rpc("create_organization_with_owner", {
  organization_name: "Integration Café",
  organization_slug: slug,
  organization_category: "Café",
  organization_legal_name: "Integration Café GmbH",
  organization_registration_number: "FN 123456",
  organization_tax_id: "ATU12345678",
  organization_billing_email: owner.email,
});
assert.ifError(created.error);
const organizationId = created.data;
assert.ok(organizationId);

const locationResult = await owner.client.rpc("create_initial_location", {
  target_organization_id: organizationId, location_name: "Hauptfiliale", location_slug: `${slug}-hauptfiliale`,
  location_address: "Teststraße 1", location_postal_code: "1010", location_city: "Wien",
  location_phone: "+431234567", location_email: owner.email, location_latitude: 48.2082,
  location_longitude: 16.3738, location_opening_hours: { monday: { closed: false, open: "09:00", close: "18:00" } },
});
assert.ifError(locationResult.error);
const locationId = locationResult.data;
const defaultCard = await owner.client.rpc("configure_initial_loyalty_card", {
  target_organization_id: organizationId, target_location_id: locationId, card_title: "Integration Card",
  card_reward_title: "Gratis Testkaffee", card_stamps_required: 2, applies_to_all_locations: true,
});
assert.ifError(defaultCard.error);
const planSelection = await owner.client.rpc("select_subscription_plan", { target_organization_id: organizationId, selected_plan: "gold" });
assert.ifError(planSelection.error);
const prematureSubmission = await owner.client.rpc("submit_organization_for_review", { target_organization_id: organizationId });
assert.ok(prematureSubmission.error, "review submission must require an active subscription");
assert.ifError((await admin.from("subscriptions").update({ status: "active" }).eq("organization_id", organizationId)).error);
assert.ifError((await owner.client.rpc("submit_organization_for_review", { target_organization_id: organizationId })).error);
assert.equal((await owner.client.from("organizations").select("onboarding_status").eq("id", organizationId).single()).data.onboarding_status, "review");

const protectedUpdate = await owner.client.from("organizations").update({ plan: "platinum", public_status: "open" }).eq("id", organizationId).select("plan, public_status").single();
assert.ifError(protectedUpdate.error);
assert.deepEqual(protectedUpdate.data, { plan: "gold", public_status: "hidden" });

const outsiderView = await outsider.client.from("organizations").select("id").eq("id", organizationId);
assert.ifError(outsiderView.error);
assert.equal(outsiderView.data.length, 0);

const invitationToken = randomBytes(32).toString("hex");
const invitation = await owner.client.from("organization_invitations").insert({
  organization_id: organizationId,
  email: staff.email,
  role: "staff",
  token_hash: createHash("sha256").update(invitationToken).digest("hex"),
  invited_by: owner.user.id,
  location_ids: [locationId],
});
assert.ifError(invitation.error);
const accepted = await staff.client.rpc("accept_business_invitation", { invitation_token: invitationToken });
assert.ifError(accepted.error);
assert.equal(accepted.data, organizationId);

const deviceTokens = [randomBytes(32).toString("hex"), randomBytes(32).toString("hex")];
for (const [index, token] of deviceTokens.entries()) {
  const inserted = await owner.client.from("stamp_devices").insert({
    organization_id: organizationId,
    location_id: locationId,
    name: `Integration Kasse ${index + 1}`,
    token_hash: createHash("sha256").update(token).digest("hex"),
  });
  assert.ifError(inserted.error);
}

const firstStamp = await customer.client.rpc("award_stamp", { device_token: deviceTokens[0], request_key: randomUUID() });
assert.ifError(firstStamp.error);
assert.equal(firstStamp.data.stamps_balance, 1);
assert.equal(firstStamp.data.reward_created, false);

const duplicateStamp = await customer.client.rpc("award_stamp", { device_token: deviceTokens[0], request_key: randomUUID() });
assert.ok(duplicateStamp.error, "same-device cooldown must reject an immediate second stamp");

const secondStamp = await customer.client.rpc("award_stamp", { device_token: deviceTokens[1], request_key: randomUUID() });
assert.ifError(secondStamp.error);
assert.equal(secondStamp.data.stamps_balance, 0);
assert.equal(secondStamp.data.reward_created, true);

const wallet = await customer.client.from("customer_loyalty_cards").select("stamps_balance, lifetime_stamps").eq("loyalty_card_id", defaultCard.data).single();
assert.ifError(wallet.error);
assert.deepEqual(wallet.data, { stamps_balance: 0, lifetime_stamps: 2 });

const reward = await customer.client.from("reward_entitlements").select("id, redemption_code, status").eq("organization_id", organizationId).single();
assert.ifError(reward.error);
assert.equal(reward.data.status, "available");
const redemption = await staff.client.rpc("redeem_reward", { reward_code: reward.data.redemption_code, target_location_id: locationId });
assert.ifError(redemption.error);
assert.equal(redemption.data.status, "redeemed");
const redeemedReward = await customer.client.from("reward_entitlements").select("status").eq("id", reward.data.id).single();
assert.ifError(redeemedReward.error);
assert.equal(redeemedReward.data.status, "redeemed");

const png = Uint8Array.from(Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=", "base64"));
const storagePath = `${organizationId}/integration.png`;
const upload = await owner.client.storage.from("business-media").upload(storagePath, png, { contentType: "image/png" });
assert.ifError(upload.error);
const asset = await owner.client.from("organization_assets").insert({ organization_id: organizationId, location_id: locationId, asset_type: "gallery", storage_path: storagePath, mime_type: "image/png", file_size: png.byteLength, alt_text: "Integration" });
assert.ifError(asset.error);

const grantAdmin = await admin.from("platform_admins").insert({ user_id: platformAdmin.user.id, role: "super_admin" });
assert.ifError(grantAdmin.error);
const prematureApproval = await platformAdmin.client.from("organizations").update({ public_status: "open" }).eq("id", organizationId);
assert.ok(prematureApproval.error, "publishing without a visible location must fail");
const locationApproval = await platformAdmin.client.from("locations").update({ public_status: "open" }).eq("id", locationId).select("public_status").single();
assert.ifError(locationApproval.error);
assert.equal(locationApproval.data.public_status, "open");
const approval = await platformAdmin.client.from("organizations").update({ public_status: "open", is_active: true, onboarding_status: "approved", approved_at: new Date().toISOString() }).eq("id", organizationId).select("public_status, onboarding_status").single();
assert.ifError(approval.error);
assert.deepEqual(approval.data, { public_status: "open", onboarding_status: "approved" });

const publicView = await outsider.client.from("organizations").select("id").eq("id", organizationId).single();
assert.ifError(publicView.error);
assert.equal(publicView.data.id, organizationId);

const eventCount = await admin.from("stamp_events").select("id", { count: "exact", head: true }).eq("organization_id", organizationId);
assert.ifError(eventCount.error);
assert.equal(eventCount.count, 2);

const secondOrganization = await owner.client.rpc("create_organization_with_owner", {
  organization_name: "Second Integration Company", organization_slug: `${slug}-second`, organization_category: "Café",
  organization_legal_name: "Second Integration Company GmbH", organization_registration_number: "", organization_tax_id: "", organization_billing_email: owner.email,
});
assert.ifError(secondOrganization.error);
const crossTenantOffer = await owner.client.from("offers").insert({ organization_id: secondOrganization.data, location_id: locationId, title: "Invalid cross tenant", offer_type: "aktion" });
assert.ok(crossTenantOffer.error, "a location must never be combined with another organization");
const membershipCount = await owner.client.from("organization_members").select("id", { count: "exact", head: true }).eq("user_id", owner.user.id);
assert.equal(membershipCount.count, 2);

const disposableOffer = await owner.client.from("offers").insert({ organization_id: organizationId, location_id: locationId, title: "Tombstone test", offer_type: "aktion" }).select("id").single();
assert.ifError(disposableOffer.error);
assert.ifError((await owner.client.from("offers").delete().eq("id", disposableOffer.data.id)).error);
const tombstone = await outsider.client.from("sync_tombstones").select("resource_type, resource_id").eq("resource_id", disposableOffer.data.id).single();
assert.ifError(tombstone.error);
assert.deepEqual(tombstone.data, { resource_type: "offer", resource_id: disposableOffer.data.id });

const voucher = await owner.client.from("offers").insert({
  organization_id: organizationId,
  location_id: locationId,
  title: "Integration Gutschein",
  description: "Ein vollständiger Gutschein aus dem Merchant-Formular.",
  offer_type: "gutschein",
  discount_type: "fixed",
  discount_value: 10,
  minimum_purchase_amount: 25,
  redemption_code: `TR-${randomBytes(4).toString("hex").toUpperCase()}`,
  conditions: "Einmal pro Person",
  is_active: true,
}).select("id,offer_type,discount_type,discount_value").single();
assert.ifError(voucher.error);
assert.deepEqual(voucher.data.offer_type, "gutschein");
assert.deepEqual(voucher.data.discount_type, "fixed");
assert.equal(Number(voucher.data.discount_value), 10);
assert.ifError((await owner.client.from("offers").delete().eq("id", voucher.data.id)).error);

const privacyRequest = await customer.client.from("privacy_requests").insert({ user_id: customer.user.id, request_type: "export" }).select("id").single();
assert.ifError(privacyRequest.error);
const outsiderPrivacy = await outsider.client.from("privacy_requests").select("id").eq("id", privacyRequest.data.id);
assert.ifError(outsiderPrivacy.error);
assert.equal(outsiderPrivacy.data.length, 0);

const rateLimit = await admin.rpc("consume_rate_limit", { rate_bucket: "integration", rate_key_hash: "fixed-test-key", maximum_requests: 2, window_seconds: 60 });
assert.ifError(rateLimit.error);
assert.equal(rateLimit.data[0].allowed, true);
const rateLimitSecond = await admin.rpc("consume_rate_limit", { rate_bucket: "integration", rate_key_hash: "fixed-test-key", maximum_requests: 2, window_seconds: 60 });
assert.equal(rateLimitSecond.data[0].remaining, 0);
const rateLimitBlocked = await admin.rpc("consume_rate_limit", { rate_bucket: "integration", rate_key_hash: "fixed-test-key", maximum_requests: 2, window_seconds: 60 });
assert.equal(rateLimitBlocked.data[0].allowed, false);

const queued = await admin.from("notification_outbox").insert({ organization_id: organizationId, recipient_email: owner.email, template: "organization_approved", payload: { organization_name: "Integration Café" } }).select("id").single();
assert.ifError(queued.error);
const claimed = await admin.rpc("claim_notifications", { batch_size: 100 });
assert.ifError(claimed.error);
assert.ok(claimed.data.some((job) => job.id === queued.data.id));

const visibleProducts = await outsider.client.from("subscription_products").select("code, gross_amount").eq("is_active", true);
assert.ifError(visibleProducts.error);
assert.ok(visibleProducts.data.length >= 3);
const forbiddenProduct = await owner.client.from("subscription_products").insert({ code: `forbidden-${suffix}`.slice(0, 35), name: "Forbidden", gross_amount: 100 });
assert.ok(forbiddenProduct.error, "business owners must not manage platform products");
const adminProduct = await platformAdmin.client.from("subscription_products").insert({ code: `admin-${randomUUID().slice(0, 8)}`, name: "Admin Test", gross_amount: 1999, location_limit: 2, staff_limit: 3 }).select("id").single();
assert.ifError(adminProduct.error);
const adminProductCleanup = await platformAdmin.client.from("subscription_products").delete().eq("id", adminProduct.data.id);
assert.ifError(adminProductCleanup.error);
const vatValidation = await platformAdmin.client.from("organizations").update({ vat_validation_status: "valid", vat_validated_at: new Date().toISOString(), vat_validated_by: platformAdmin.user.id }).eq("id", organizationId).select("vat_validation_status").single();
assert.ifError(vatValidation.error);
assert.equal(vatValidation.data.vat_validation_status, "valid");
const contactMessage = await admin.from("contact_messages").insert({ name: "Integration Contact", email: `contact-${suffix}@tapradar.test`, subject: "Support", message: "Integration test contact message." }).select("id").single();
assert.ifError(contactMessage.error);
const hiddenContact = await outsider.client.from("contact_messages").select("id").eq("id", contactMessage.data.id);
assert.ifError(hiddenContact.error);
assert.equal(hiddenContact.data.length, 0);
const adminContact = await platformAdmin.client.from("contact_messages").update({ status: "read" }).eq("id", contactMessage.data.id).select("status").single();
assert.ifError(adminContact.error);
assert.equal(adminContact.data.status, "read");
assert.ifError((await admin.from("contact_messages").delete().eq("id", contactMessage.data.id)).error);
const forbiddenInvoiceSettings = await owner.client.from("invoice_settings").update({ slogan: "Forbidden" }).eq("id", true).select("id");
assert.ifError(forbiddenInvoiceSettings.error);
assert.equal(forbiddenInvoiceSettings.data.length, 0, "business owners must not edit platform invoice settings");
const adminInvoiceSettings = await platformAdmin.client.from("invoice_settings").update({ slogan: "Digitale Kundenbindung, die verbindet." }).eq("id", true).select("company_name").single();
assert.ifError(adminInvoiceSettings.error);
assert.equal(adminInvoiceSettings.data.company_name, "TapRadar");
const hiddenProviders = await owner.client.from("payment_provider_configs").select("provider");
assert.ifError(hiddenProviders.error);
assert.equal(hiddenProviders.data.length, 0);
const adminProvider = await platformAdmin.client.from("payment_provider_configs").update({ mode: "test" }).eq("provider", "stripe").select("provider").single();
assert.ifError(adminProvider.error);
assert.equal(adminProvider.data.provider, "stripe");
const apiSecret = `tr_live_${randomBytes(32).toString("base64url")}`;
const apiKey = await admin.from("platform_api_keys").insert({ name: "Integration Sync Key", key_prefix: apiSecret.slice(0, 16), key_hash: createHash("sha256").update(apiSecret).digest("hex"), created_by: platformAdmin.user.id }).select("id").single();
assert.ifError(apiKey.error);
const hiddenKeys = await owner.client.from("platform_api_keys").select("id").eq("id", apiKey.data.id);
assert.ifError(hiddenKeys.error);
assert.equal(hiddenKeys.data.length, 0);
assert.ifError((await admin.from("platform_api_keys").delete().eq("id", apiKey.data.id)).error);

console.log(JSON.stringify({
  organizationId,
  checks: ["guided-onboarding", "multi-organization", "payment-gate", "review-workflow", "field-protection", "public-RLS", "tenant-foreign-keys", "location-assignment", "team-invitation", "device-cooldown", "stamp-ledger", "reward-creation", "reward-redemption", "storage-policy", "sync-tombstones", "voucher-write", "privacy-RLS", "database-rate-limit", "notification-outbox", "admin-approval", "product-catalog-RLS", "vat-validation", "contact-inbox-RLS", "invoice-settings-RLS", "payment-provider-RLS", "platform-api-key-RLS"],
  status: "passed",
}));
