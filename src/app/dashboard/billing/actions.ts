"use server";

import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { LEGAL_VERSIONS, recordLegalAcceptance } from "@/lib/legal-consent";
import { createAdminClient } from "@/lib/supabase/admin";
import { getPriceForPlan, getSiteUrl, getStripe } from "@/lib/stripe";
import { requiredText } from "@/lib/validation";

export async function startCheckout(formData: FormData) {
  const { supabase, user, organizationId, role } = await getDashboardContext();
  const plan = requiredText(formData.get("plan"), 40).toLowerCase();
  const onboarding = formData.get("onboarding") === "true";
  const returnPath = onboarding ? "/dashboard/onboarding" : "/dashboard/billing";
  if (!user || !organizationId || role !== "owner") redirect(`${returnPath}?error=permission`);
  const legalConfirmed = ["terms_accepted", "privacy_acknowledged", "withdrawal_acknowledged", "immediate_service_requested"].every((name) => formData.get(name) === "on");
  if (!legalConfirmed) redirect(`/dashboard/billing/checkout?plan=${encodeURIComponent(plan)}${onboarding ? "&onboarding=1" : ""}&error=required`);

  try {
    const stripe = await getStripe(); const admin = createAdminClient();
    const { data: product } = await admin.from("subscription_products").select("id,code,stripe_price_id,is_active,gross_amount,currency,vat_rate,billing_interval").eq("code", plan).maybeSingle();
    if (!product?.is_active) redirect(`${returnPath}?error=product`);
    await recordLegalAcceptance({
      userId: user.id,
      organizationId,
      context: "subscription",
      withdrawalAcknowledged: true,
      immediateServiceRequested: true,
      metadata: { source: "web-checkout", product_id: product.id, plan: product.code, gross_amount: product.gross_amount, currency: product.currency, vat_rate: Number(product.vat_rate), billing_interval: product.billing_interval },
    });
    const price = product.stripe_price_id || getPriceForPlan(plan);
    const { data: business } = await supabase.from("organizations").select("name, legal_name, billing_email, billing_address, billing_postal_code, billing_city, billing_country_code, tax_id").eq("id", organizationId).single();
    const { data: current } = await admin.from("subscriptions").select("stripe_customer_id, stripe_subscription_id, status").eq("organization_id", organizationId).maybeSingle();
    if (current?.stripe_subscription_id && ["active", "trialing", "past_due"].includes(current.status)) {
      redirect("/dashboard/billing?error=existing-subscription");
    }
    let customerId = current?.stripe_customer_id ?? null;
    if (!customerId) {
      const customer = await stripe.customers.create({ email: business?.billing_email || user.email, name: business?.legal_name || business?.name || undefined, address: business?.billing_address ? { line1: business.billing_address, postal_code: business.billing_postal_code || undefined, city: business.billing_city || undefined, country: business.billing_country_code || "AT" } : undefined, metadata: { organization_id: organizationId } });
      customerId = customer.id;
      await admin.from("subscriptions").upsert({ organization_id: organizationId, stripe_customer_id: customerId, plan, product_id: product.id, status: "incomplete" }, { onConflict: "organization_id" });
    }
    const session = await stripe.checkout.sessions.create({
      mode: "subscription", customer: customerId, line_items: [{ price, quantity: 1 }],
      success_url: `${getSiteUrl()}${returnPath}?checkout=success`, cancel_url: `${getSiteUrl()}${returnPath}?checkout=cancelled`,
      allow_promotion_codes: true, client_reference_id: organizationId,
      automatic_tax: { enabled: true }, tax_id_collection: { enabled: true }, billing_address_collection: "required",
      customer_update: { address: "auto", name: "auto" },
      metadata: { organization_id: organizationId, plan, product_id: product.id, terms_version: LEGAL_VERSIONS.businessTerms, privacy_version: LEGAL_VERSIONS.privacy, withdrawal_version: LEGAL_VERSIONS.withdrawal }, subscription_data: { metadata: { organization_id: organizationId, plan, product_id: product.id, terms_version: LEGAL_VERSIONS.businessTerms } },
    });
    if (!session.url) throw new Error("Checkout URL missing");
    redirect(session.url);
  } catch (error) {
    if (error && typeof error === "object" && "digest" in error) throw error;
    redirect(`${returnPath}?error=config`);
  }
}

export async function openBillingPortal() {
  const { user, organizationId, role } = await getDashboardContext();
  if (!user || !organizationId || role !== "owner") redirect("/dashboard/billing?error=permission");
  try {
    const admin = createAdminClient(); const stripe = await getStripe();
    const { data } = await admin.from("subscriptions").select("stripe_customer_id").eq("organization_id", organizationId).maybeSingle();
    if (!data?.stripe_customer_id) redirect("/dashboard/billing?error=no-customer");
    const portal = await stripe.billingPortal.sessions.create({ customer: data.stripe_customer_id, return_url: `${getSiteUrl()}/dashboard/billing` });
    redirect(portal.url);
  } catch (error) {
    if (error && typeof error === "object" && "digest" in error) throw error;
    redirect("/dashboard/billing?error=config");
  }
}
