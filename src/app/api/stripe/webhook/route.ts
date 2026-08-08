import { createHash } from "crypto";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { getPlanForPrice, getStripe, getStripeWebhookSecret } from "@/lib/stripe";
import { recordSystemEvent } from "@/lib/system-events";

export const runtime = "nodejs";

function mapStatus(status: Stripe.Subscription.Status) {
  const values: Record<string, string> = { incomplete: "incomplete", incomplete_expired: "unpaid", trialing: "trialing", active: "active", past_due: "past_due", canceled: "cancelled", unpaid: "unpaid", paused: "paused" };
  return values[status] ?? "incomplete";
}

function assertDatabase(error: { message: string } | null, operation: string) {
  if (error) throw new Error(`${operation}: ${error.message}`);
}

function invoiceSubscriptionId(invoice: Stripe.Invoice) {
  const value = invoice as unknown as { subscription?: string | { id: string } | null; parent?: { subscription_details?: { subscription?: string | { id: string } | null } } };
  const subscription = value.subscription ?? value.parent?.subscription_details?.subscription;
  return typeof subscription === "string" ? subscription : subscription?.id ?? null;
}

function invoiceTaxAmount(invoice: Stripe.Invoice) {
  const value = invoice as unknown as { total_taxes?: Array<{ amount: number }>; total_tax_amounts?: Array<{ amount: number }> };
  return (value.total_taxes ?? value.total_tax_amounts ?? []).reduce((sum, item) => sum + item.amount, 0);
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const secret = await getStripeWebhookSecret();
  if (!signature || !secret) return NextResponse.json({ error: "webhook_not_configured" }, { status: 503 });
  const body = await request.text();
  let event: Stripe.Event;
  try { event = (await getStripe()).webhooks.constructEvent(body, signature, secret); }
  catch { return NextResponse.json({ error: "invalid_signature" }, { status: 400 }); }

  const admin = createAdminClient();
  const { data: existing, error: existingError } = await admin.from("stripe_webhook_events").select("status, attempts, locked_at").eq("id", event.id).maybeSingle();
  if (existingError) return NextResponse.json({ error: "webhook_store_unavailable" }, { status: 503 });
  if (existing?.status === "processed") return NextResponse.json({ received: true, duplicate: true });
  if (existing?.status === "processing" && Date.now() - new Date(existing.locked_at).getTime() < 5 * 60_000) {
    return NextResponse.json({ received: true, duplicate: true });
  }

  const eventRecord = { event_type: event.type, status: "processing", payload_sha256: createHash("sha256").update(body).digest("hex"), locked_at: new Date().toISOString(), error_message: null };
  if (existing) {
    const claim = await admin.from("stripe_webhook_events").update({ ...eventRecord, attempts: Number(existing.attempts) + 1 }).eq("id", event.id);
    if (claim.error) return NextResponse.json({ error: "webhook_store_unavailable" }, { status: 503 });
  } else {
    const claim = await admin.from("stripe_webhook_events").insert({ id: event.id, ...eventRecord });
    if (claim.error?.code === "23505") return NextResponse.json({ received: true, duplicate: true });
    if (claim.error) return NextResponse.json({ error: "webhook_store_unavailable" }, { status: 503 });
  }

  let organizationId: string | null = null;
  try {
    if (["customer.subscription.created", "customer.subscription.updated", "customer.subscription.deleted"].includes(event.type)) {
      const subscription = event.data.object as Stripe.Subscription;
      organizationId = subscription.metadata.organization_id || null;
      const priceId = subscription.items.data[0]?.price.id;
      const periodEnd = (subscription as unknown as { current_period_end?: number }).current_period_end ?? subscription.items.data[0]?.current_period_end;
      if (!organizationId) throw new Error("Stripe subscription is missing organization_id metadata");
      let catalogProduct = priceId ? (await admin.from("subscription_products").select("id,code").eq("stripe_price_id", priceId).maybeSingle()).data : null;
      if (!catalogProduct && subscription.metadata.plan?.match(/^[a-z0-9_-]{2,40}$/)) catalogProduct = (await admin.from("subscription_products").select("id,code").eq("code", subscription.metadata.plan).maybeSingle()).data;
      const plan = catalogProduct?.code ?? getPlanForPrice(priceId);
      const upsert = await admin.from("subscriptions").upsert({ organization_id: organizationId, stripe_customer_id: typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id, stripe_subscription_id: subscription.id, stripe_price_id: priceId, plan, product_id: catalogProduct?.id ?? null, status: mapStatus(subscription.status), current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null, cancel_at_period_end: subscription.cancel_at_period_end }, { onConflict: "organization_id" });
      assertDatabase(upsert.error, "subscription upsert failed");
      if (["active", "trialing"].includes(subscription.status)) {
        const planUpdate = await admin.from("organizations").update({ plan }).eq("id", organizationId);
        assertDatabase(planUpdate.error, "organization plan update failed");
      }
      const audit = await admin.from("audit_logs").insert({ organization_id: organizationId, action: `stripe.${event.type}`, entity_type: "subscription", entity_id: subscription.id, metadata: { status: subscription.status, event_id: event.id } });
      assertDatabase(audit.error, "stripe audit insert failed");
    }
    if (event.type.startsWith("invoice.")) {
      const invoice = event.data.object as Stripe.Invoice;
      const customerId = typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id ?? null;
      const subscriptionId = invoiceSubscriptionId(invoice);
      const { data: matchedSubscription, error: matchError } = subscriptionId
        ? await admin.from("subscriptions").select("organization_id").eq("stripe_subscription_id", subscriptionId).maybeSingle()
        : await admin.from("subscriptions").select("organization_id").eq("stripe_customer_id", customerId).maybeSingle();
      assertDatabase(matchError, "invoice organization lookup failed");
      organizationId = matchedSubscription?.organization_id ?? null;
      if (organizationId) {
        const { data: organization } = await admin.from("organizations").select("billing_country_code, vat_treatment").eq("id", organizationId).single();
        const invoiceWrite = await admin.from("billing_invoices").upsert({
          id: invoice.id, organization_id: organizationId, stripe_customer_id: customerId,
          stripe_subscription_id: subscriptionId, invoice_number: invoice.number, status: invoice.status ?? "draft",
          currency: invoice.currency, subtotal_amount: invoice.subtotal, tax_amount: invoiceTaxAmount(invoice), total_amount: invoice.total,
          customer_country_code: invoice.customer_address?.country ?? organization?.billing_country_code ?? null,
          vat_treatment: organization?.vat_treatment ?? "standard", hosted_invoice_url: invoice.hosted_invoice_url,
          invoice_pdf_url: invoice.invoice_pdf, issued_at: invoice.created ? new Date(invoice.created * 1000).toISOString() : null,
          paid_at: invoice.status_transitions?.paid_at ? new Date(invoice.status_transitions.paid_at * 1000).toISOString() : null,
        }, { onConflict: "id" });
        assertDatabase(invoiceWrite.error, "invoice archive upsert failed");
      }
    }
    const completed = await admin.from("stripe_webhook_events").update({ status: "processed", processed_at: new Date().toISOString(), error_message: null }).eq("id", event.id);
    assertDatabase(completed.error, "webhook completion failed");
    return NextResponse.json({ received: true });
  } catch (processingError) {
    const message = processingError instanceof Error ? processingError.message : "Unknown webhook processing error";
    await admin.from("stripe_webhook_events").update({ status: "failed", error_message: message.slice(0, 1000) }).eq("id", event.id);
    await recordSystemEvent({ severity: "error", source: "stripe-webhook", message, correlationId: event.id, organizationId, metadata: { event_type: event.type } });
    return NextResponse.json({ error: "webhook_processing_failed" }, { status: 500 });
  }
}
