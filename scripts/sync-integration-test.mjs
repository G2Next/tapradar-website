import assert from "node:assert/strict";
import { randomBytes, randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
if (!url || !anonKey || !serviceRoleKey) throw new Error("Missing sync integration environment variables.");

const admin = createClient(url, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
const email = `sync-${randomUUID()}@tapradar.test`;
const password = `Sync-${randomBytes(12).toString("hex")}!`;
const created = await admin.auth.admin.createUser({ email, password, email_confirm: true });
assert.ifError(created.error);

const customer = createClient(url, anonKey, { auth: { persistSession: false, autoRefreshToken: false } });
const login = await customer.auth.signInWithPassword({ email, password });
assert.ifError(login.error);
assert.ok(login.data.session?.access_token);

const resourceChecks = await Promise.all([
  customer.from("organizations").select("id").limit(1),
  customer.from("locations").select("id").limit(1),
  customer.from("loyalty_cards").select("id").limit(1),
  customer.from("offers").select("id").limit(1),
  customer.from("organization_assets").select("id").limit(1),
]);
for (const result of resourceChecks) assert.ifError(result.error);

const response = await fetch(`${siteUrl}/api/v1/sync?limit=1`, { headers: { Authorization: `Bearer ${login.data.session.access_token}` } });
assert.equal(response.status, 200);
const body = await response.json();
assert.equal(body.schema_version, 4);
assert.ok(Array.isArray(body.data.organizations));
assert.ok(Array.isArray(body.data.locations));
assert.ok(Array.isArray(body.data.tombstones));
assert.ok(body.pagination?.next_offsets);
assert.ok(body.data.customer);
assert.ok(Array.isArray(body.data.customer.wallet));
assert.ok(Array.isArray(body.data.customer.rewards));
assert.ok(body.data.business);
assert.ok(Array.isArray(body.data.business.memberships));
assert.match(response.headers.get("cache-control") ?? "", /private, no-store/);
assert.ok(response.headers.get("x-ratelimit-remaining"));

const integrationApiKey = `tr_live_${randomBytes(32).toString("base64url")}`;
const apiKeyHash = (await import("node:crypto")).createHash("sha256").update(integrationApiKey).digest("hex");
const apiKeyRecord = await admin.from("platform_api_keys").insert({ name: "Sync integration", key_prefix: integrationApiKey.slice(0, 16), key_hash: apiKeyHash }).select("id").single();
assert.ifError(apiKeyRecord.error);
const apiKeyResponse = await fetch(`${siteUrl}/api/v1/sync?limit=1`, { headers: { "x-api-key": integrationApiKey } });
assert.equal(apiKeyResponse.status, 200);
const usedKey = await admin.from("platform_api_keys").select("last_used_at").eq("id", apiKeyRecord.data.id).single();
assert.ifError(usedKey.error);
assert.ok(usedKey.data.last_used_at);
assert.equal((await fetch(`${siteUrl}/api/v1/sync?limit=1`, { headers: { "x-api-key": "tr_live_invalid" } })).status, 401);
assert.ifError((await admin.from("platform_api_keys").delete().eq("id", apiKeyRecord.data.id)).error);

const privacyExport = await fetch(`${siteUrl}/api/v1/privacy/export`, { headers: { Authorization: `Bearer ${login.data.session.access_token}` } });
assert.equal(privacyExport.status, 200);
assert.match(privacyExport.headers.get("content-disposition") ?? "", /tapradar-data-/);
const exported = await privacyExport.json();
assert.equal(exported.account.email, email);
assert.ok(Array.isArray(exported.organization_memberships));

console.log(JSON.stringify({ checks: ["bearer-authentication", "sync-v4", "pagination", "tombstones", "customer-payload", "business-subscription-payload", "platform-api-key", "private-cache-control", "rate-limit-headers", "privacy-export"], status: "passed" }));
