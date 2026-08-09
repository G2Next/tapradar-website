# TapRadar Platform

TapRadar is a Next.js and Supabase customer-loyalty platform for local businesses. This repository contains the public website, business dashboard, customer wallet, platform administration, app synchronization API, secure stamp flow, rewards, media storage, and Stripe subscriptions.

## Main capabilities

- Supabase password, magic-link, and email-confirmation authentication
- Resumable eight-step onboarding: confirmed account, organization, first location, loyalty program, plan, payment, review, publication
- Canonical `organizations` and `locations` model with an explicit active dashboard context
- Owner and manager organization roles plus location-scoped staff rights and expiring invitations
- Organization-wide or location-specific loyalty cards and offers
- Structured weekly opening hours, GPS, contact data, media, devices, and statistics per location
- Address-based geocoding for locations; owners do not need to know latitude or longitude
- Revocable QR/NFC stamp devices with hashed tokens
- Immutable stamp-event ledger, cooldown protection, and idempotency keys
- Automatic reward creation and one-time staff redemption
- Customer wallet and consent profile
- Versioned `/api/v1/sync` endpoint for mobile apps
- Supabase Storage-backed business images and PDF documents
- Platform admin review, approval, suspension, and audit trail
- Stripe Checkout, Billing Portal, and signed subscription webhooks
- Stripe Automatic Tax, VAT-ID collection, and downloadable invoice archives for businesses and platform admins
- Idempotent Stripe event processing with retry-safe event records
- Database-backed API rate limits and structured system events
- Transactional email outbox with a protected worker endpoint
- GDPR data export and deletion-request workflow
- Sync pagination and deletion tombstones for reliable offline clients
- GitHub Actions checks for application and database migrations

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and fill in the values.

3. Apply every SQL migration in `supabase/migrations` to the Supabase project in filename order. `20260805120000_platform_foundation.sql` backfills the original platform foundation. `20260806100000_organizations_and_guided_onboarding.sql` renames existing records in place to the organization/location model, adds location memberships, and enables the guided review workflow.

   In the hosted Supabase Auth settings, also configure the production site URL and callback allowlist, require passwords of at least eight characters, and enable email confirmation before launch.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Run the complete local verification:

   ```bash
   npm test
   npm run test:integration
   npm run test:sync
   npm run test:webhook
   npm run lint
   npm run build
   npm audit
   ```

   The integration test expects a running Supabase instance. For a fully local test, run `npx supabase start`, export the local API, anon, and service-role values under the names documented in `.env.example`, then execute `npm run test:integration`.

## Initial platform administrator

First create and confirm the administrator account through `/login`. Then run the following command with the Supabase server variables available in the shell:

```bash
npm run admin:grant -- admin@example.com
```

The service-role key must never be exposed through a `NEXT_PUBLIC_` variable or committed to Git.

## Stripe setup

Create three recurring Stripe prices and add their IDs to `STRIPE_PRICE_BRONZE`, `STRIPE_PRICE_GOLD`, and `STRIPE_PRICE_PLATINUM`. Configure the production webhook endpoint:

```text
https://YOUR-DOMAIN/api/stripe/webhook
```

Subscribe it to:

- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.created`
- `invoice.finalized`
- `invoice.paid`
- `invoice.payment_failed`
- `invoice.voided`

Copy the signing secret to `STRIPE_WEBHOOK_SECRET`. Enable Stripe Tax and configure the recurring prices with the intended tax behavior. Checkout collects the billing address and VAT ID; Stripe performs the final country/UID tax decision. Business plan access and the local invoice archive are updated only by verified webhook events.

Automated local checkout tests may point `STRIPE_TEST_API_BASE` to a local Stripe mock. The application rejects this override when `NODE_ENV=production`.

## Mobile application synchronization

The mobile apps should use `GET /api/v1/sync`. Public organizations, locations, loyalty cards, offers, and media need no token. A token issued by the separate mobile-app Supabase project may be sent as `Authorization: Bearer <token>` once `MOBILE_APP_SUPABASE_URL` and `MOBILE_APP_SUPABASE_ANON_KEY` are configured. The endpoint verifies that token against its actual issuer and still serves the public website catalog without treating it as a website account. Browser sessions and website-issued bearer tokens continue to receive website wallet and membership data after legal acceptance.

Never embed a platform API key or either service-role key in a mobile binary. See `docs/MOBILE_APP_INTEGRATION.md` for the two-project trust boundary and the rollout sequence.

Schema version 4 clients should persist `next_since`, all non-null `pagination.next_offsets`, and `data.tombstones`. Send offsets back as `offset_organizations`, `offset_locations`, `offset_loyalty_cards`, `offset_offers`, and `offset_assets`; after every page is consumed, persist `next_since` for incremental synchronization. Requests are limited to 250 records per resource per call.

## Production operations

Review `docs/PRODUCTION_CHECKLIST.md` before launch and follow `docs/DEPLOYMENT.md` for migrations, health checks, scheduled notification delivery, and rollback decisions.

## Security model

- Supabase Row Level Security is enabled for all platform tables.
- Business-controlled and platform-controlled fields are separated by database triggers and policies.
- Stamp device tokens are stored only as SHA-256 hashes.
- Reward codes are single-use and redeemed transactionally.
- Stripe webhooks require a valid signature and use the server-only service-role client.
- Login callback destinations are restricted to local application paths.
- Security headers and Supabase session refresh run at the Next.js proxy layer.

Before production launch, configure Supabase email templates and redirect URLs, Vercel environment variables, Stripe live-mode products, backups, monitoring, rate limiting at the edge, and a legal review of the privacy policy and terms.
