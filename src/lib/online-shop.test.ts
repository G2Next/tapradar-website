import { describe, expect, it } from "vitest";
import { isShopUrl, onlineShopSchema } from "./online-shop";

const profile = { has_shop: true, name: "Mein Shop", url: "https://shop.example.at", platform: "woocommerce", description: "" };
describe("online shop profiles", () => {
  it("allows a business without a shop", () => {
    expect(onlineShopSchema.safeParse({ ...profile, has_shop: false, name: "", url: "" }).success).toBe(true);
  });
  it("requires a name and URL when the shop is enabled", () => {
    expect(onlineShopSchema.safeParse({ ...profile, name: " " }).success).toBe(false);
    expect(onlineShopSchema.safeParse({ ...profile, url: "" }).success).toBe(false);
  });
  it.each(["javascript:alert(1)", "data:text/html,test", "ftp://example.at", "https://user:secret@example.at", "//example.at", "not a url"])("rejects unsafe or malformed URL %s", url => {
    expect(isShopUrl(url)).toBe(false);
    expect(onlineShopSchema.safeParse({ ...profile, url }).success).toBe(false);
  });
  it("preserves shop details when the business disables its shop", () => {
    expect(onlineShopSchema.parse({ ...profile, has_shop: false })).toEqual({ ...profile, has_shop: false });
  });
  it("trims input and supports international addresses", () => {
    expect(onlineShopSchema.parse({ ...profile, name: "  Mein Shop  ", url: "https://bücher.at/shop" }).name).toBe("Mein Shop");
  });
  it("rejects unsupported systems and oversized data", () => {
    expect(onlineShopSchema.safeParse({ ...profile, platform: "fake" }).success).toBe(false);
    expect(onlineShopSchema.safeParse({ ...profile, name: "x".repeat(121) }).success).toBe(false);
    expect(onlineShopSchema.safeParse({ ...profile, description: "x".repeat(1501) }).success).toBe(false);
  });
});
