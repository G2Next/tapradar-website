import { z } from "zod";

export const shopSystems = ["woocommerce", "shopify", "shopware", "magento", "other", "undecided"] as const;
export const shopSystemLabels: Record<typeof shopSystems[number], string> = {
  woocommerce: "WooCommerce", shopify: "Shopify", shopware: "Shopware", magento: "Magento / Adobe Commerce", other: "Anderes System", undecided: "Noch nicht gewählt",
};

export function isShopUrl(value: string) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) && Boolean(url.hostname) && !url.username && !url.password;
  } catch { return false; }
}

export const onlineShopSchema = z.object({
  has_shop: z.boolean(),
  name: z.string().trim().max(120, "Der Shopname darf maximal 120 Zeichen enthalten."),
  url: z.string().trim().max(500, "Die Shop-Adresse ist zu lang.").refine(value => !value || isShopUrl(value), "Bitte eine gültige Shop-Adresse mit https:// oder http:// ohne Zugangsdaten eingeben."),
  platform: z.enum(shopSystems),
  description: z.string().trim().max(1500, "Die Beschreibung darf maximal 1.500 Zeichen enthalten."),
}).superRefine((value, context) => {
  if (value.has_shop && !value.name) context.addIssue({ code: "custom", path: ["name"], message: "Bitte einen Shopnamen eingeben." });
  if (value.has_shop && !value.url) context.addIssue({ code: "custom", path: ["url"], message: "Bitte die Shop-Adresse eingeben." });
});

export type OnlineShopProfile = z.infer<typeof onlineShopSchema>;
export type ShopFormState = { status: "idle" | "error" | "saved"; message?: string };
