import { describe, expect, it } from "vitest";
import { checkoutErrorCode, StripeCatalogMismatchError, validateStripePrice } from "./stripe-catalog";

const product = { code: "bronze", gross_amount: 999, currency: "eur", billing_interval: "month" };
const stripePrice = {
  active: true,
  currency: "eur",
  recurring: { interval: "month" },
  tax_behavior: "inclusive",
  unit_amount: 999,
} as const;

describe("validateStripePrice", () => {
  it("accepts an active recurring price that matches the displayed product", () => {
    expect(() => validateStripePrice(stripePrice, product)).not.toThrow();
  });

  it("allows an unspecified tax behavior when Stripe uses the account default", () => {
    expect(() => validateStripePrice({ ...stripePrice, tax_behavior: "unspecified" }, product)).not.toThrow();
  });

  it("blocks a checkout when amount, currency, interval or tax behavior differs", () => {
    expect(() => validateStripePrice({
      ...stripePrice,
      active: false,
      currency: "usd",
      recurring: { interval: "year" },
      tax_behavior: "exclusive",
      unit_amount: 1000,
    }, product)).toThrowError(new StripeCatalogMismatchError(["inactive", "amount", "currency", "interval", "tax-behavior"]));
  });
});

describe("checkoutErrorCode", () => {
  it("maps known checkout failures to safe public codes", () => {
    expect(checkoutErrorCode(new StripeCatalogMismatchError(["amount"]))).toBe("price-mismatch");
    expect(checkoutErrorCode(new Error("existing-subscription"))).toBe("existing-subscription");
    expect(checkoutErrorCode(new Error("no-customer"))).toBe("no-customer");
    expect(checkoutErrorCode(new Error("product-unavailable"))).toBe("product");
    expect(checkoutErrorCode(new Error("Stripe secret leaked here"))).toBe("config");
  });
});
