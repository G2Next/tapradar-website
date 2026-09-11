import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

// This suite only queues messages in an isolated LOCAL database. It never calls
// the email provider and will refuse a production/staging Supabase URL.
const status = process.env.NEXT_PUBLIC_SUPABASE_URL ? null : JSON.parse(execFileSync("npx", ["--yes", "supabase@latest", "status", "--output", "json", "--workdir", process.env.EMAIL_TEST_SUPABASE_WORKDIR || "."], { encoding: "utf8" }));
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || status.API_URL;
assert(["127.0.0.1", "localhost"].includes(new URL(url).hostname), "Email integration tests require local Supabase");
const anonymousKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || status.ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || status.SERVICE_ROLE_KEY;
const client = (key = anonymousKey) => createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
const admin = client(serviceKey);
const userIds = [];
const organizationIds = [];
const contactIds = [];
const suffix = randomUUID().slice(0, 8);
const unwrap = ({ data, error }) => { assert.equal(error, null, error?.message); return data; };
let checks = 0;
function check(condition, message) { assert(condition, message); checks++; }
async function user(name, locale, accountType = "customer") {
  const email = `${name}-${suffix}@example.test`;
  const password = `LocalTest-${randomUUID()}!`;
  const data = unwrap(await admin.auth.admin.createUser({ email, password, email_confirm: true, user_metadata: { locale, account_type: accountType, full_name: "Local Test" } }));
  userIds.push(data.user.id);
  const session = client(); unwrap(await session.auth.signInWithPassword({ email, password }));
  return { ...data.user, email, client: session };
}
async function event(key) { return unwrap(await admin.from("notification_outbox").select("*").eq("event_key", key).single()); }
const originalSettings = unwrap(await admin.from("email_settings").select("test_mode,test_recipient").eq("id", true).single());
try {
  unwrap(await admin.from("email_settings").update({ test_mode: true, test_recipient: "sink@example.test" }).eq("id", true));
  const owner = await user("owner", "de-AT", "business");
  const customer = await user("customer", "tr");
  const operator = await user("admin", "en", "business");
  unwrap(await admin.from("platform_admins").insert({ user_id: operator.id, role: "super_admin", is_active: true }));
  check((await event(`customer_registered:${customer.id}`)).locale === "en", "Unknown customer language falls back to English");
  const ownerWelcome = unwrap(await admin.from("notification_outbox").select("id").eq("event_key", `customer_registered:${owner.id}`));
  check(ownerWelcome.length === 0, "Business registration does not send a customer welcome");
  check(unwrap(await operator.client.from("email_templates").select("event_id")).length === 24, "Admin reads 24 templates");
  check(unwrap(await customer.client.from("email_templates").select("*")).length === 0, "Customer cannot read templates");
  check(unwrap(await owner.client.from("email_templates").select("*")).length === 0, "Merchant cannot read templates");
  check(unwrap(await owner.client.from("email_settings").select("*")).length === 0, "Merchant cannot read settings");
  check(unwrap(await owner.client.from("notification_outbox").select("*")).length === 0, "Merchant cannot read delivery logs");
  check(Boolean((await client().from("email_templates").select("*")).error), "Anonymous access is rejected");
  check(unwrap(await owner.client.from("email_templates").update({ subject: "Hacked" }).eq("event_id", "contact_reply").select()).length === 0, "Merchant cannot edit templates");
  check(unwrap(await owner.client.from("email_settings").update({ test_mode: false }).eq("id", true).select()).length === 0, "Merchant cannot enable live mode");
  check(Boolean((await owner.client.rpc("resolve_email_locale", { target_email: customer.email })).error), "Recipient lookup is server-only");
  const before = unwrap(await operator.client.from("email_templates").select("*").eq("event_id", "contact_reply").eq("locale", "en").single());
  const changed = unwrap(await operator.client.from("email_templates").update({ subject: "Integration {{subject}}" }).eq("event_id", "contact_reply").eq("locale", "en").eq("revision", before.revision).select().single());
  check(changed.revision === before.revision + 1 && changed.updated_by === operator.id, "Admin edits are versioned and attributed");
  check(unwrap(await operator.client.from("email_templates").update({ subject: "Stale" }).eq("event_id", "contact_reply").eq("locale", "en").eq("revision", before.revision).select()).length === 0, "Stale edits cannot overwrite a newer revision");
  unwrap(await operator.client.from("email_templates").update({ subject: before.subject }).eq("event_id", "contact_reply").eq("locale", "en"));
  const organizationId = unwrap(await owner.client.rpc("create_organization_with_owner", { organization_name: "Email Test", organization_slug: `email-test-${suffix}`, organization_category: "cafe", organization_legal_name: "Email Test", organization_registration_number: "", organization_tax_id: "", organization_billing_email: owner.email }));
  organizationIds.push(organizationId);
  const registration = await event(`business_registered:${organizationId}`);
  check(registration.recipient_email === owner.email && registration.locale === "de" && registration.force_test, "Business registration resolves German owner and test mode");
  const contact = unwrap(await admin.from("contact_messages").insert({ name: "Contact Test", email: customer.email, subject: "Test question", message: "A local integration test message.", locale: "de" }).select("id").single());
  contactIds.push(contact.id);
  check((await event(`contact_form_sent:${contact.id}`)).locale === "de", "Contact language is preserved independently of account language");
  const offer = unwrap(await admin.from("offers").insert({ organization_id: organizationId, title: "Email test offer", description: "Local test offer only", offer_type: "aktion", is_active: true }).select("id").single());
  check((await event(`offer_created:${offer.id}`)).payload.title === "Email test offer", "Offer creation queues event");
  const push = unwrap(await admin.from("push_messages").insert({ business_id: organizationId, created_by: owner.id, title: "Test push", body: "Local integration test", target_type: "all" }).select("id").single());
  check((await event(`push_created:${push.id}`)).locale === "de", "Push creation queues event");
  const invoiceId = `in_email_test_${suffix}`;
  unwrap(await admin.from("billing_invoices").insert({ id: invoiceId, organization_id: organizationId, status: "open", total_amount: 2990 }));
  check(unwrap(await admin.from("notification_outbox").select("id").eq("event_key", `purchase_completed:${invoiceId}`)).length === 0, "Unpaid invoices do not generate receipts");
  unwrap(await admin.from("billing_invoices").update({ status: "paid", paid_at: new Date().toISOString() }).eq("id", invoiceId));
  check((await event(`purchase_completed:${invoiceId}`)).payload.betrag === "29.90 EUR", "Paid invoice creates a correct receipt");
  unwrap(await admin.from("billing_invoices").update({ status: "paid" }).eq("id", invoiceId));
  unwrap(await admin.from("billing_invoices").update({ status: "open" }).eq("id", invoiceId));
  unwrap(await admin.from("billing_invoices").update({ status: "paid" }).eq("id", invoiceId));
  check(unwrap(await admin.from("notification_outbox").select("id").eq("event_key", `purchase_completed:${invoiceId}`)).length === 1, "Repeated payment events are idempotent");
  unwrap(await admin.from("email_settings").update({ test_mode: false }).eq("id", true));
  check((await event(`business_registered:${organizationId}`)).force_test, "Queued test emails cannot become live after a mode switch");
  const liveMessage = unwrap(await admin.from("notification_outbox").insert({ user_id: customer.id, recipient_email: customer.email, template: "privacy_request" }).select("locale,force_test").single());
  check(liveMessage.locale === "en" && !liveMessage.force_test, "New live-mode email uses recipient language with English fallback");
  unwrap(await admin.from("email_settings").update({ test_mode: true }).eq("id", true));
  const testMessage = unwrap(await admin.from("notification_outbox").insert({ user_id: customer.id, recipient_email: customer.email, template: "privacy_request", force_test: false }).select("force_test").single());
  check(testMessage.force_test, "Database enforces test mode even for server callers");
  console.log(`Email integration: ${checks} checks passed (permissions, templates, six events, DE/EN, test mode, payment deduplication).`);
} finally {
  for (const id of organizationIds) await admin.from("organizations").delete().eq("id", id);
  for (const id of contactIds) { await admin.from("notification_outbox").delete().eq("event_key", `contact_form_sent:${id}`); await admin.from("contact_messages").delete().eq("id", id); }
  for (const id of userIds) await admin.auth.admin.deleteUser(id);
  await admin.from("email_settings").update(originalSettings).eq("id", true);
}
