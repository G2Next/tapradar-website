import assert from "node:assert/strict";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const platinumPrice = process.env.STRIPE_PRICE_PLATINUM;
if (!supabaseUrl || !serviceRoleKey || !webhookSecret || !platinumPrice) throw new Error("Missing integration environment variables.");

const admin = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
const businessResult = await admin.from("organizations").select("id").order("created_at", { ascending: false }).limit(1).single();
assert.ifError(businessResult.error);
const organizationId = businessResult.data.id;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_local");
const now = Math.floor(Date.now() / 1000);
const payload = JSON.stringify({
  id: `evt_integration_${now}`,
  object: "event",
  api_version: "2025-02-24.acacia",
  created: now,
  livemode: false,
  pending_webhooks: 1,
  request: null,
  type: "customer.subscription.updated",
  data: {
    object: {
      id: `sub_integration_${now}`,
      object: "subscription",
      customer: `cus_integration_${now}`,
      status: "active",
      cancel_at_period_end: false,
      metadata: { organization_id: organizationId, plan: "platinum" },
      items: { object: "list", data: [{ id: `si_${now}`, current_period_end: now + 2592000, price: { id: platinumPrice } }] },
    },
  },
});
const signature = stripe.webhooks.generateTestHeaderString({ payload, secret: webhookSecret });

const invalid = await fetch(`${siteUrl}/api/stripe/webhook`, { method: "POST", headers: { "content-type": "application/json", "stripe-signature": "invalid" }, body: payload });
assert.equal(invalid.status, 400);

const response = await fetch(`${siteUrl}/api/stripe/webhook`, { method: "POST", headers: { "content-type": "application/json", "stripe-signature": signature }, body: payload });
const responseBody = await response.json();
assert.equal(response.status, 200, JSON.stringify(responseBody));
assert.deepEqual(responseBody, { received: true });

const duplicate = await fetch(`${siteUrl}/api/stripe/webhook`, { method: "POST", headers: { "content-type": "application/json", "stripe-signature": signature }, body: payload });
assert.equal(duplicate.status, 200);
assert.deepEqual(await duplicate.json(), { received: true, duplicate: true });

const invoiceId = `in_integration_${now}`;
const invoicePayload = JSON.stringify({
  id: `evt_invoice_${now}`, object: "event", api_version: "2025-02-24.acacia", created: now,
  livemode: false, pending_webhooks: 1, request: null, type: "invoice.paid",
  data: { object: { id: invoiceId, object: "invoice", customer: `cus_integration_${now}`,
    number: `TEST-${now}`, status: "paid", currency: "eur", subtotal: 833, total: 999,
    total_taxes: [{ amount: 166 }], created: now, customer_address: { country: "AT" },
    hosted_invoice_url: `https://example.test/invoices/${invoiceId}`, invoice_pdf: `https://example.test/invoices/${invoiceId}.pdf`,
    status_transitions: { paid_at: now }, parent: { subscription_details: { subscription: `sub_integration_${now}` } },
  } },
});
const invoiceSignature = stripe.webhooks.generateTestHeaderString({ payload: invoicePayload, secret: webhookSecret });
const invoiceResponse = await fetch(`${siteUrl}/api/stripe/webhook`, { method: "POST", headers: { "content-type": "application/json", "stripe-signature": invoiceSignature }, body: invoicePayload });
assert.equal(invoiceResponse.status, 200, JSON.stringify(await invoiceResponse.json()));
const archivedInvoice = await admin.from("billing_invoices").select("invoice_number,status,subtotal_amount,tax_amount,total_amount").eq("id", invoiceId).single();
assert.ifError(archivedInvoice.error);
assert.deepEqual(archivedInvoice.data, { invoice_number: `TEST-${now}`, status: "paid", subtotal_amount: 833, tax_amount: 166, total_amount: 999 });

const subscription = await admin.from("subscriptions").select("plan, status, stripe_subscription_id, stripe_price_id").eq("organization_id", organizationId).single();
assert.ifError(subscription.error);
assert.deepEqual(subscription.data, { plan: "platinum", status: "active", stripe_subscription_id: `sub_integration_${now}`, stripe_price_id: platinumPrice });
const business = await admin.from("organizations").select("plan").eq("id", organizationId).single();
assert.ifError(business.error);
assert.equal(business.data.plan, "platinum");
const storedEvent = await admin.from("stripe_webhook_events").select("status, attempts, payload_sha256").eq("id", `evt_integration_${now}`).single();
assert.ifError(storedEvent.error);
assert.equal(storedEvent.data.status, "processed");
assert.equal(storedEvent.data.attempts, 1);
assert.match(storedEvent.data.payload_sha256, /^[a-f0-9]{64}$/);

console.log(JSON.stringify({ organizationId, checks: ["invalid-signature-rejected", "valid-signature-accepted", "idempotent-duplicate", "event-ledger", "subscription-upsert", "plan-activation", "invoice-archive"], status: "passed" }));
