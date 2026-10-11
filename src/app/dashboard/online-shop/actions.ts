"use server";

import { revalidatePath } from "next/cache";
import { requireApprovedDashboardContext } from "@/lib/dashboard";
import { onlineShopSchema, type ShopFormState } from "@/lib/online-shop";

export async function saveOnlineShop(_previous: ShopFormState, formData: FormData): Promise<ShopFormState> {
  const context = await requireApprovedDashboardContext();
  if (!context.user || !context.organizationId || !["owner", "manager"].includes(context.role ?? "")) {
    return { status: "error", message: "Nur Inhaber und Manager können das Shop-Profil bearbeiten." };
  }
  if (formData.get("organization_id") !== context.organizationId) {
    return { status: "error", message: "Das aktive Unternehmen wurde geändert. Bitte lade die Seite neu." };
  }
  const parsed = onlineShopSchema.safeParse({
    has_shop: formData.get("has_shop") === "on",
    name: formData.get("name"), url: formData.get("url"),
    platform: formData.get("platform"), description: formData.get("description"),
  });
  if (!parsed.success) return { status: "error", message: parsed.error.issues[0].message };
  const { error } = await context.supabase.from("organization_online_shops").upsert({
    organization_id: context.organizationId, ...parsed.data,
  }, { onConflict: "organization_id" });
  if (error) return { status: "error", message: "Das Shop-Profil konnte nicht gespeichert werden. Bitte versuche es erneut." };
  revalidatePath("/dashboard/online-shop");
  return { status: "saved", message: "Shop-Profil gespeichert." };
}
