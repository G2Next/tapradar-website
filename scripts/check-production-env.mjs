const required = [
  "NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY", "SUPABASE_SERVICE_ROLE_KEY",
  "NEXT_PUBLIC_SITE_URL", "STRIPE_SECRET_KEY", "STRIPE_WEBHOOK_SECRET",
  "STRIPE_PRICE_BRONZE", "STRIPE_PRICE_GOLD", "STRIPE_PRICE_PLATINUM",
  "RESEND_API_KEY", "EMAIL_FROM", "CRON_SECRET", "GEOCODING_USER_AGENT",
  "PLATFORM_SECRETS_ENCRYPTION_KEY",
  "MOBILE_APP_SUPABASE_URL", "MOBILE_APP_SUPABASE_ANON_KEY",
];

const failures = [];
for (const name of required) if (!process.env[name]?.trim()) failures.push(`${name} is missing`);
for (const name of ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SITE_URL", "MOBILE_APP_SUPABASE_URL"]) {
  const value = process.env[name] ?? "";
  if (value && (!value.startsWith("https://") || /localhost|127\.0\.0\.1/.test(value))) failures.push(`${name} must be a public HTTPS URL`);
}
if ((process.env.SUPABASE_SERVICE_ROLE_KEY?.length ?? 0) < 40) failures.push("SUPABASE_SERVICE_ROLE_KEY is unexpectedly short");
if ((process.env.STRIPE_WEBHOOK_SECRET?.length ?? 0) < 20) failures.push("STRIPE_WEBHOOK_SECRET is unexpectedly short");
if ((process.env.CRON_SECRET?.length ?? 0) < 32) failures.push("CRON_SECRET must contain at least 32 characters");
if ((process.env.PLATFORM_SECRETS_ENCRYPTION_KEY?.length ?? 0) < 32) failures.push("PLATFORM_SECRETS_ENCRYPTION_KEY must contain at least 32 characters");
if (process.env.STRIPE_TEST_API_BASE) failures.push("STRIPE_TEST_API_BASE is forbidden in production");
if (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === process.env.SUPABASE_SERVICE_ROLE_KEY) failures.push("The public key must never equal the service-role key");
if (process.env.MOBILE_APP_SUPABASE_ANON_KEY === process.env.SUPABASE_SERVICE_ROLE_KEY) failures.push("The mobile app anon key must never equal the website service-role key");
if (process.env.PLATFORM_SECRETS_ENCRYPTION_KEY === process.env.SUPABASE_SERVICE_ROLE_KEY) failures.push("PLATFORM_SECRETS_ENCRYPTION_KEY must be independent from the service-role key");
if (process.env.PLATFORM_SECRETS_ENCRYPTION_KEY === process.env.CRON_SECRET) failures.push("PLATFORM_SECRETS_ENCRYPTION_KEY must be independent from CRON_SECRET");

if (failures.length) {
  console.error(`Production configuration failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log("Production configuration looks complete.");
