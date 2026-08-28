# TapRadar payments go-live checklist

TapRadar uses Stripe as the single payment integration. Cards, PayPal, SEPA
Direct Debit, Link, Apple Pay and Google Pay are payment methods inside Stripe
Checkout, not separate TapRadar integrations.

Do not create Bronze, Gold or Platinum customer subscriptions manually in the
Stripe **Subscriptions** screen. That screen stays empty until a business buys
a plan through TapRadar. The application creates and synchronizes the
subscription automatically.

## 1. Products and recurring prices

- [ ] Stripe contains active products for TapRadar Bronze, Gold and Platinum.
- [ ] Each product has one active recurring price with the intended monthly or
      yearly interval.
- [ ] Stripe prices use EUR and do not add tax on top of the gross price shown
      by TapRadar.
- [ ] `subscription_products.stripe_price_id` points to the correct price in
      the same Stripe mode (test or live).
- [ ] Run `npm run check:stripe` once with test credentials and once with live
      credentials. The command reads values but does not create payments.

The checkout also validates the selected Stripe price at runtime. It stops
before creating a session when activity, amount, currency, interval or tax
behavior conflicts with the TapRadar catalog.

## 2. Payment methods in Stripe

Open [Stripe payment method settings](https://dashboard.stripe.com/settings/payment_methods)
and review both test and live mode:

- [ ] Cards are active.
- [ ] PayPal is active and recurring payments are approved for the account.
- [ ] SEPA Direct Debit is active.
- [ ] Link is active.
- [ ] Apple Pay and Google Pay are available on supported devices.
- [ ] Stripe Checkout uses dynamic payment methods.

Do not enter a separate PayPal Client ID in TapRadar. PayPal is processed by
Stripe so subscriptions, invoices, refunds, disputes and reporting stay in one
system.

## 3. Checkout, tax and customer portal

- [ ] Automatic tax is enabled and the Stripe account has a valid Austrian tax
      registration/configuration.
- [ ] Business name, billing address and VAT ID are collected and shown on the
      invoice.
- [ ] The customer portal allows payment-method updates, invoice downloads and
      cancellation according to the business terms.
- [ ] Branding, support email and public business details are correct in Stripe.
- [ ] Promotion codes are either intentionally enabled or removed from the
      Checkout Session configuration.

## 4. Webhook

- [ ] The live endpoint is `https://www.tapradar.app/api/stripe/webhook`.
- [ ] The production webhook secret belongs to that exact endpoint.
- [ ] Subscription created, updated and deleted events are delivered.
- [ ] Invoice created, finalized, paid, payment-failed and voided events are
      delivered.
- [ ] Failed webhook events are visible in TapRadar administration and Stripe
      retries return a successful response after the underlying problem is fixed.
- [ ] Run `npm run test:webhook` in the test environment.

## 5. Acceptance tests

- [ ] Complete Bronze with a Stripe test card.
- [ ] Complete Gold with PayPal sandbox.
- [ ] Complete Platinum with SEPA test data.
- [ ] Verify Apple Pay on Safari and Google Pay on a supported browser/device.
- [ ] Cancel Checkout and confirm that TapRadar says no subscription was created.
- [ ] Complete Checkout and confirm the success message and automatic plan
      activation.
- [ ] Trigger a failed renewal and verify `past_due`, Stripe recovery emails and
      the customer portal.
- [ ] Cancel at period end, reactivate where permitted and verify the final
      access date.
- [ ] Download the TapRadar invoice and Stripe invoice and compare amount, VAT,
      legal entity and invoice number.
- [ ] Refund a completed test payment and verify Stripe, invoice history and
      administrative records.

## 6. Final live smoke test

- [ ] Complete one low-value real subscription using an internal business test
      account.
- [ ] Confirm the Stripe subscription, TapRadar plan, webhook event and invoice.
- [ ] Refund and cancel the smoke-test subscription.
- [ ] Monitor failed payments, failed webhooks and support messages during the
      first production week.
