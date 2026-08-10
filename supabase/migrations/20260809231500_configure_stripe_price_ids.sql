-- Stripe price IDs are publishable catalog references, not secret credentials.
-- Keep the displayed gross amount aligned with the amount charged by Checkout.
update public.subscription_products
set
  gross_amount = case code
    when 'bronze' then 999
    when 'gold' then 4999
    when 'platinum' then 9999
  end,
  stripe_price_id = case code
    when 'bronze' then 'price_1TfZ4WAH0YYZXAeJjokCKiAx'
    when 'gold' then 'price_1U2dsGAH0YYZXAeJD7SL6f4D'
    when 'platinum' then 'price_1U2dvpAH0YYZXAeJxllAEcXy'
  end
where code in ('bronze', 'gold', 'platinum');
