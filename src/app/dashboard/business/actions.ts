"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { inferVatTreatment } from "@/lib/tax";
import { requiredText } from "@/lib/validation";

export async function updateBusiness(formData:FormData) {
  const context=await getDashboardContext();
  const countryCode=requiredText(formData.get("billing_country_code"),2).toUpperCase();
  const taxId=requiredText(formData.get("tax_id"),80)||null;
  const payload={
    name:requiredText(formData.get("name"),120), legal_name:requiredText(formData.get("legal_name"),160)||null,
    category:requiredText(formData.get("category"),80), registration_number:requiredText(formData.get("registration_number"),80)||null,
    tax_id:taxId, billing_email:requiredText(formData.get("billing_email"),200)||null,
    billing_address:requiredText(formData.get("billing_address"),160), billing_postal_code:requiredText(formData.get("billing_postal_code"),20),
    billing_city:requiredText(formData.get("billing_city"),100), billing_country_code:countryCode,
    vat_treatment:inferVatTreatment(countryCode,taxId), vat_verified_at:null,
    website:requiredText(formData.get("website"),200)||null, description:requiredText(formData.get("description"),1500)||null,
    logo_emoji:requiredText(formData.get("logo_emoji"),10)||"🏪",
  };
  if(!context.organizationId||!["owner","manager"].includes(context.role??"")||!payload.name||!payload.category||!payload.billing_address||!payload.billing_postal_code||!payload.billing_city||!/^[A-Z]{2}$/.test(countryCode)) redirect("/dashboard/business?error=missing-fields");
  const{error}=await context.supabase.from("organizations").update(payload).eq("id",context.organizationId);
  if(error) redirect("/dashboard/business?error=save-failed");
  revalidatePath("/dashboard"); revalidatePath("/dashboard/business"); revalidatePath("/dashboard/billing"); redirect("/dashboard/business?saved=1");
}
