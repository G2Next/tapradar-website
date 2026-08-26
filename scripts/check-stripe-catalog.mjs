import { createClient } from "@supabase/supabase-js";
import Stripe from "stripe";

const required = ["NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY", "STRIPE_SECRET_KEY"];
const missing = required.filter(name => !process.env[name]?.trim());
if (missing.length) {
  console.error(`Stripe catalog check failed: missing ${missing.join(", ")}`);
  process.exit(1);
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const { data: products, error } = await supabase
  .from("subscription_products")
  .select("code,name,stripe_price_id,is_active,gross_amount,currency,billing_interval")
  .in("code", ["bronze", "gold", "platinum"])
  .order("sort_order");

if (error) {
  console.error(`Stripe catalog check failed: ${error.message}`);
  process.exit(1);
}

const failures = [];
for (const code of ["bronze", "gold", "platinum"]) {
  const product = products?.find(item => item.code === code);
  if (!product?.is_active) {
    failures.push(`${code}: TapRadar product is missing or inactive`);
    continue;
  }
  if (!product.stripe_price_id) {
    failures.push(`${code}: Stripe price ID is missing`);
    continue;
  }
  try {
    const price = await stripe.prices.retrieve(product.stripe_price_id);
    if (!price.active) failures.push(`${code}: Stripe price is inactive`);
    if (price.unit_amount !== product.gross_amount) failures.push(`${code}: amount differs`);
    if (price.currency.toLowerCase() !== product.currency.toLowerCase()) failures.push(`${code}: currency differs`);
    if (!price.recurring || price.recurring.interval !== product.billing_interval) failures.push(`${code}: billing interval differs`);
    if (price.tax_behavior === "exclusive") failures.push(`${code}: Stripe price adds tax although TapRadar displays a gross price`);
  } catch (stripeError) {
    failures.push(`${code}: Stripe price cannot be retrieved (${stripeError instanceof Error ? stripeError.type ?? stripeError.name : "unknown error"})`);
  }
}

if (failures.length) {
  console.error(`Stripe catalog check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`Stripe catalog is consistent for Bronze, Gold and Platinum (${process.env.STRIPE_SECRET_KEY.startsWith("sk_live_") ? "live" : "test"} mode).`);
