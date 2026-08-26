export type SubscriptionProductForCheckout = {
  code: string;
  gross_amount: number;
  currency: string;
  billing_interval: string;
};

type StripePriceForValidation = {
  active: boolean;
  currency: string;
  recurring: { interval: string } | null;
  tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
  unit_amount: number | null;
};

export type StripeCatalogIssue =
  | "inactive"
  | "amount"
  | "currency"
  | "interval"
  | "tax-behavior";

export class StripeCatalogMismatchError extends Error {
  constructor(public readonly issues: StripeCatalogIssue[]) {
    super(`Stripe price does not match the TapRadar catalog: ${issues.join(", ")}`);
    this.name = "StripeCatalogMismatchError";
  }
}

export function validateStripePrice(
  price: StripePriceForValidation,
  product: SubscriptionProductForCheckout,
) {
  const issues: StripeCatalogIssue[] = [];
  if (!price.active) issues.push("inactive");
  if (price.unit_amount !== product.gross_amount) issues.push("amount");
  if (price.currency.toLowerCase() !== product.currency.toLowerCase()) issues.push("currency");
  if (!price.recurring || price.recurring.interval !== product.billing_interval) issues.push("interval");
  if (price.tax_behavior === "exclusive") issues.push("tax-behavior");
  if (issues.length) throw new StripeCatalogMismatchError(issues);
}

export function checkoutErrorCode(error: unknown) {
  if (error instanceof StripeCatalogMismatchError) return "price-mismatch";
  if (error instanceof Error && error.message === "existing-subscription") return "existing-subscription";
  if (error instanceof Error && error.message === "no-customer") return "no-customer";
  if (error instanceof Error && error.message === "product-unavailable") return "product";
  return "config";
}
