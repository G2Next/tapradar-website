-- PayPal and local payment methods are managed by Stripe Checkout. Keeping a
-- separate PayPal credential form would create two competing subscription and
-- webhook systems, so the catalog describes Stripe as the single integration.
update public.payment_provider_configs
set capabilities = '["cards","apple_pay","google_pay","link","paypal","sepa","subscriptions"]'::jsonb,
    config = coalesce(config, '{}'::jsonb) || '{"checkout_ready":true,"manages_payment_methods":true}'::jsonb
where provider = 'stripe';

update public.payment_provider_configs
set is_enabled = false,
    status = 'disconnected',
    config = coalesce(config, '{}'::jsonb) || '{"checkout_ready":false,"managed_by":"stripe"}'::jsonb
where provider = 'paypal';
