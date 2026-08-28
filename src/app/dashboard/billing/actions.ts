"use server";

import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { LEGAL_VERSIONS, recordLegalAcceptance } from "@/lib/legal-consent";
import { createAdminClient } from "@/lib/supabase/admin";
import { getPriceForPlan, getSiteUrl, getStripe } from "@/lib/stripe";
import { checkoutErrorCode, validateStripePrice } from "@/lib/stripe-catalog";
import { requiredText } from "@/lib/validation";

export async function startCheckout(formData: FormData) {
  const { supabase, user, organizationId, role } = await getDashboardContext();
  const plan = requiredText(formData.get("plan"), 40).toLowerCase();
  const onboarding = formData.get("onboarding") === "true";
  const returnPath = onboarding ? "/dashboard/onboarding" : "/dashboard/billing";
  if (!user || !organizationId || role !== "owner") redirect(`${returnPath}?error=permission`);
  const legalConfirmed = ["terms_accepted", "privacy_acknowledged", "withdrawal_acknowledged", "immediate_service_requested"].every((name) => formData.get(name) === "on");
  if (!legalConfirmed) redirect(`/dashboard/billing/checkout?plan=${encodeURIComponent(plan)}${onboarding ? "&onboarding=1" : ""}&error=required`);

  let checkoutUrl: string | null = null;
  let failureCode: string | null = null;
  try {
    const stripe = await getStripe(); const admin = createAdminClient();
    const { data: product, error: productError } = await admin.from("subscription_products").select("id,code,stripe_price_id,is_active,gross_amount,currency,vat_rate,billing_interval").eq("code", plan).maybeSingle();
    if (productError || !product?.is_active) throw new Error("product-unavailable");
    const price = product.stripe_price_id || getPriceForPlan(plan);
    const stripePrice = await stripe.prices.retrieve(price);
    validateStripePrice(stripePrice, product);
    const { data: business, error: businessError } = await supabase.from("organizations").select("name, legal_name, billing_email, billing_address, billing_postal_code, billing_city, billing_country_code, tax_id").eq("id", organizationId).single();
    if (businessError || !business) throw new Error("organization-unavailable");
    const { data: current, error: subscriptionError } = await admin.from("subscriptions").select("stripe_customer_id, stripe_subscription_id, status").eq("organization_id", organizationId).maybeSingle();
    if (subscriptionError) throw new Error("subscription-unavailable");
    if (current?.stripe_subscription_id && ["active", "trialing", "past_due"].includes(current.status)) {
      throw new Error("existing-subscription");
    }
    await recordLegalAcceptance({
      userId: user.id,
      organizationId,
      context: "subscription",
      withdrawalAcknowledged: true,
      immediateServiceRequested: true,
      metadata: { source: "web-checkout", product_id: product.id, plan: product.code, gross_amount: product.gross_amount, currency: product.currency, vat_rate: Number(product.vat_rate), billing_interval: product.billing_interval },
    });
    let customerId = current?.stripe_customer_id ?? null;
    if (!customerId) {
      const customer = await stripe.customers.create({ email: business?.billing_email || user.email, name: business?.legal_name || business?.name || undefined, address: business?.billing_address ? { line1: business.billing_address, postal_code: business.billing_postal_code || undefined, city: business.billing_city || undefined, country: business.billing_country_code || "AT" } : undefined, metadata: { organization_id: organizationId } });
      customerId = customer.id;
      const { error: customerStoreError } = await admin.from("subscriptions").upsert({ organization_id: organizationId, stripe_customer_id: customerId, plan, product_id: product.id, status: "incomplete" }, { onConflict: "organization_id" });
      if (customerStoreError) throw new Error("customer-store-failed");
    }
    const session = await stripe.checkout.sessions.create({
      mode: "subscription", customer: customerId, line_items: [{ price, quantity: 1 }],
      success_url: `${getSiteUrl()}${returnPath}?checkout=success`, cancel_url: `${getSiteUrl()}${returnPath}?checkout=cancelled`,
      allow_promotion_codes: true, client_reference_id: organizationId,
      automatic_tax: { enabled: true }, tax_id_collection: { enabled: true }, billing_address_collection: "required",
      customer_update: { address: "auto", name: "auto" },
      metadata: { organization_id: organizationId, plan, product_id: product.id, terms_version: LEGAL_VERSIONS.businessTerms, privacy_version: LEGAL_VERSIONS.privacy, withdrawal_version: LEGAL_VERSIONS.withdrawal }, subscription_data: { metadata: { organization_id: organizationId, plan, product_id: product.id, terms_version: LEGAL_VERSIONS.businessTerms } },
    });
    if (!session.url) throw new Error("checkout-url-missing");
    checkoutUrl = session.url;
  } catch (error) {
    console.error("Checkout could not be started", error);
    failureCode = checkoutErrorCode(error);
  }
  if (!checkoutUrl) redirect(`${returnPath}?error=${failureCode ?? "config"}`);
  redirect(checkoutUrl);
}

export async function openBillingPortal() {
  const { user, organizationId, role } = await getDashboardContext();
  if (!user || !organizationId || role !== "owner") redirect("/dashboard/billing?error=permission");
  let portalUrl: string | null = null;
  let failureCode: string | null = null;
  try {
    const admin = createAdminClient(); const stripe = await getStripe();
    const { data, error } = await admin.from("subscriptions").select("stripe_customer_id").eq("organization_id", organizationId).maybeSingle();
    if (error) throw new Error("subscription-unavailable");
    if (!data?.stripe_customer_id) throw new Error("no-customer");
    const portal = await stripe.billingPortal.sessions.create({ customer: data.stripe_customer_id, return_url: `${getSiteUrl()}/dashboard/billing` });
    portalUrl = portal.url;
  } catch (error) {
    console.error("Billing portal could not be opened", error);
    failureCode = checkoutErrorCode(error);
  }
  if (!portalUrl) redirect(`/dashboard/billing?error=${failureCode ?? "config"}`);
  redirect(portalUrl);
}
