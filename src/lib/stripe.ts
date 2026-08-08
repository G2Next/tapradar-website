import Stripe from "stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { decryptIntegrationSecret } from "@/lib/integration-secrets";

export type PlanName = string;

async function configuredStripeSecrets() {
  try { const { data } = await createAdminClient().from("payment_provider_configs").select("is_enabled,secret_ciphertext,webhook_ciphertext").eq("provider", "stripe").maybeSingle(); if (!data?.is_enabled) return { secret: null, webhook: null }; return { secret: decryptIntegrationSecret(data.secret_ciphertext), webhook: decryptIntegrationSecret(data.webhook_ciphertext) }; } catch { return { secret: null, webhook: null }; }
}

export async function getStripe() {
  const configured = await configuredStripeSecrets(); const key = configured.secret || process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Stripe is not configured.");
  const testApiBase = process.env.STRIPE_TEST_API_BASE;
  if (testApiBase) {
    if (process.env.NODE_ENV === "production") throw new Error("Stripe test API base is forbidden in production.");
    const url = new URL(testApiBase);
    return new Stripe(key, {
      host: url.hostname,
      port: url.port ? Number(url.port) : url.protocol === "https:" ? 443 : 80,
      protocol: url.protocol === "https:" ? "https" : "http",
    });
  }
  return new Stripe(key);
}

export async function getStripeWebhookSecret() { const configured = await configuredStripeSecrets(); return configured.webhook || process.env.STRIPE_WEBHOOK_SECRET || null; }

export function getPriceForPlan(plan: PlanName) {
  const prices: Record<string, string | undefined> = {
    bronze: process.env.STRIPE_PRICE_BRONZE,
    gold: process.env.STRIPE_PRICE_GOLD,
    platinum: process.env.STRIPE_PRICE_PLATINUM,
  };
  const price = prices[plan];
  if (!price) throw new Error(`Stripe price for ${plan} is not configured.`);
  return price;
}

export function getPlanForPrice(priceId: string | null | undefined): PlanName {
  if (priceId && priceId === process.env.STRIPE_PRICE_GOLD) return "gold";
  if (priceId && priceId === process.env.STRIPE_PRICE_PLATINUM) return "platinum";
  return "bronze";
}

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
}
