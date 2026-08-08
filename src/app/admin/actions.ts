"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { enqueueNotification } from "@/lib/notifications";
import { recordSystemEvent } from "@/lib/system-events";
import { inferVatTreatment } from "@/lib/tax";
import { isUuid, requiredText } from "@/lib/validation";

function destination(formData:FormData,fallback="/admin") {
  const value=requiredText(formData.get("return_to"),300);
  return value.startsWith("/admin")&&!value.startsWith("//")?value:fallback;
}

export async function setBusinessApproval(formData:FormData) {
  const{supabase,user}=await requirePlatformAdmin();const organizationId=requiredText(formData.get("organization_id"),40);const decision=requiredText(formData.get("decision"),20);const returnTo=destination(formData);
  if(!isUuid(organizationId)||!["approve","reject","suspend","hide"].includes(decision))redirect(`${returnTo}?error=invalid`);
  const rejectionReason=requiredText(formData.get("rejection_reason"),500);if(decision==="reject"&&!rejectionReason)redirect(`${returnTo}?error=reason`);
  const values=decision==="approve"?{is_active:true,public_status:"open",onboarding_status:"approved",approved_at:new Date().toISOString(),rejected_at:null,rejection_reason:null}:decision==="reject"?{is_active:true,public_status:"hidden",onboarding_status:"rejected",rejected_at:new Date().toISOString(),rejection_reason:rejectionReason}:decision==="suspend"?{is_active:false,public_status:"hidden"}:{is_active:true,public_status:"hidden"};
  if(decision==="approve"){const locationUpdate=await supabase.from("locations").update({public_status:"open"}).eq("organization_id",organizationId).eq("is_primary",true);if(locationUpdate.error)redirect(`${returnTo}?error=save`);}
  const{error}=await supabase.from("organizations").update(values).eq("id",organizationId);if(error)redirect(`${returnTo}?error=save`);
  await supabase.from("audit_logs").insert({actor_user_id:user.id,organization_id:organizationId,action:`admin.organization.${decision}`,entity_type:"organization",entity_id:organizationId,metadata:decision==="reject"?{reason:rejectionReason}:{}});
  if(["approve","reject"].includes(decision)){const{data:organization}=await supabase.from("organizations").select("name,billing_email").eq("id",organizationId).single();if(organization?.billing_email){try{await enqueueNotification({organizationId,email:organization.billing_email,template:decision==="approve"?"organization_approved":"organization_rejected",payload:{organization_name:organization.name,reason:rejectionReason}});}catch(notificationError){await recordSystemEvent({severity:"warning",source:"admin-approval",message:notificationError instanceof Error?notificationError.message:"Approval email could not be queued",organizationId});}}}
  revalidatePath("/admin");revalidatePath(`/admin/organizations/${organizationId}`);redirect(`${returnTo}${returnTo.includes("?")?"&":"?"}saved=status`);
}

export async function updateOrganizationAsAdmin(formData:FormData) {
  const{supabase,user}=await requirePlatformAdmin();const organizationId=requiredText(formData.get("organization_id"),40);const returnTo=destination(formData);
  const country=requiredText(formData.get("billing_country_code"),2).toUpperCase();const taxId=requiredText(formData.get("tax_id"),80)||null;
  if(!isUuid(organizationId)||!/^[A-Z]{2}$/.test(country))redirect(`${returnTo}?error=fields`);
  const payload={name:requiredText(formData.get("name"),120),legal_name:requiredText(formData.get("legal_name"),160)||null,category:requiredText(formData.get("category"),80),billing_email:requiredText(formData.get("billing_email"),200)||null,billing_address:requiredText(formData.get("billing_address"),160)||null,billing_postal_code:requiredText(formData.get("billing_postal_code"),20)||null,billing_city:requiredText(formData.get("billing_city"),100)||null,billing_country_code:country,registration_number:requiredText(formData.get("registration_number"),80)||null,tax_id:taxId,website:requiredText(formData.get("website"),200)||null,description:requiredText(formData.get("description"),1500)||null,vat_treatment:inferVatTreatment(country,taxId),vat_validation_status:"pending",vat_validated_at:null,vat_validated_by:null};
  if(!payload.name||!payload.category)redirect(`${returnTo}?error=fields`);const{error}=await supabase.from("organizations").update(payload).eq("id",organizationId);if(error)redirect(`${returnTo}?error=save`);
  await supabase.from("audit_logs").insert({actor_user_id:user.id,organization_id:organizationId,action:"admin.organization.updated",entity_type:"organization",entity_id:organizationId});revalidatePath(returnTo);redirect(`${returnTo}?saved=organization`);
}

export async function setVatValidation(formData:FormData) {
  const{supabase,user}=await requirePlatformAdmin();const organizationId=requiredText(formData.get("organization_id"),40);const status=requiredText(formData.get("status"),20);const returnTo=destination(formData);
  if(!isUuid(organizationId)||!["valid","invalid","pending","not_required"].includes(status))redirect(`${returnTo}?error=vat`);
  const now=status==="valid"||status==="invalid"?new Date().toISOString():null;const{error}=await supabase.from("organizations").update({vat_validation_status:status,vat_validated_at:now,vat_validated_by:now?user.id:null,vat_verified_at:status==="valid"?now:null,vat_validation_note:requiredText(formData.get("note"),500)||null}).eq("id",organizationId);if(error)redirect(`${returnTo}?error=vat-save`);
  await supabase.from("audit_logs").insert({actor_user_id:user.id,organization_id:organizationId,action:`admin.vat.${status}`,entity_type:"organization",entity_id:organizationId,metadata:{note:requiredText(formData.get("note"),500)}});revalidatePath(returnTo);revalidatePath("/admin");redirect(`${returnTo}?saved=vat`);
}

export async function updateLocationAsAdmin(formData:FormData) {
  const{supabase}=await requirePlatformAdmin();const organizationId=requiredText(formData.get("organization_id"),40);const locationId=requiredText(formData.get("location_id"),40);const returnTo=destination(formData);
  const latitude=Number(formData.get("latitude"));const longitude=Number(formData.get("longitude"));const status=requiredText(formData.get("public_status"),20);
  if(!isUuid(organizationId)||!isUuid(locationId)||!Number.isFinite(latitude)||!Number.isFinite(longitude))redirect(`${returnTo}?error=location`);
  const{error}=await supabase.from("locations").update({name:requiredText(formData.get("name"),120),address:requiredText(formData.get("address"),160),postal_code:requiredText(formData.get("postal_code"),20),city:requiredText(formData.get("city"),100),country_code:requiredText(formData.get("country_code"),2).toUpperCase(),phone:requiredText(formData.get("phone"),40)||null,email:requiredText(formData.get("email"),200)||null,latitude,longitude,public_status:["draft","open","closed","hidden"].includes(status)?status:"draft",is_active:formData.get("is_active")==="on"}).eq("id",locationId).eq("organization_id",organizationId);if(error)redirect(`${returnTo}?error=location-save`);revalidatePath(returnTo);redirect(`${returnTo}?saved=location`);
}

export async function assignSubscriptionProduct(formData:FormData) {
  const{supabase,user}=await requirePlatformAdmin();const organizationId=requiredText(formData.get("organization_id"),40);const productId=requiredText(formData.get("product_id"),40);const returnTo=destination(formData);
  if(!isUuid(organizationId)||!isUuid(productId))redirect(`${returnTo}?error=product`);const{data:product}=await supabase.from("subscription_products").select("id,code").eq("id",productId).single();if(!product)redirect(`${returnTo}?error=product-missing`);
  const[organizationUpdate,subscriptionUpdate]=await Promise.all([supabase.from("organizations").update({plan:product.code,subscription_product_id:product.id}).eq("id",organizationId),supabase.from("subscriptions").update({plan:product.code,product_id:product.id}).eq("organization_id",organizationId)]);if(organizationUpdate.error||subscriptionUpdate.error)redirect(`${returnTo}?error=product-save`);
  await supabase.from("audit_logs").insert({actor_user_id:user.id,organization_id:organizationId,action:"admin.subscription.product_assigned",entity_type:"subscription_product",entity_id:product.id,metadata:{code:product.code}});revalidatePath(returnTo);revalidatePath("/dashboard/billing");redirect(`${returnTo}?saved=product`);
}

export async function deleteAssetAsAdmin(formData:FormData) {
  const{supabase}=await requirePlatformAdmin();const organizationId=requiredText(formData.get("organization_id"),40);const assetId=requiredText(formData.get("asset_id"),40);const returnTo=destination(formData);
  if(!isUuid(organizationId)||!isUuid(assetId))redirect(`${returnTo}?error=asset`);const{data:asset}=await supabase.from("organization_assets").select("storage_path").eq("id",assetId).eq("organization_id",organizationId).maybeSingle();if(!asset)redirect(`${returnTo}?error=asset-missing`);await supabase.storage.from("business-media").remove([asset.storage_path]);const{error}=await supabase.from("organization_assets").delete().eq("id",assetId).eq("organization_id",organizationId);if(error)redirect(`${returnTo}?error=asset-delete`);revalidatePath(returnTo);redirect(`${returnTo}?saved=asset-deleted`);
}

export async function saveSubscriptionProduct(formData:FormData) {
  const{supabase}=await requirePlatformAdmin();const productId=requiredText(formData.get("product_id"),40);const code=requiredText(formData.get("code"),40).toLowerCase();const euros=Number(requiredText(formData.get("gross_price"),20).replace(",","."));const vatRate=Number(requiredText(formData.get("vat_rate"),10).replace(",","."));
  if(!/^[a-z0-9][a-z0-9_-]{1,39}$/.test(code)||!Number.isFinite(euros)||euros<0||!Number.isFinite(vatRate)||vatRate<0||vatRate>100)redirect("/admin/products?error=fields");
  const payload={code,name:requiredText(formData.get("name"),100),description:requiredText(formData.get("description"),500)||null,gross_amount:Math.round(euros*100),currency:"eur",vat_rate:vatRate,billing_interval:requiredText(formData.get("billing_interval"),10)==="year"?"year":"month",stripe_price_id:requiredText(formData.get("stripe_price_id"),100)||null,location_limit:Math.max(1,Number(formData.get("location_limit"))||1),staff_limit:Math.max(1,Number(formData.get("staff_limit"))||1),media_limit:Math.max(0,Number(formData.get("media_limit"))||0),features:requiredText(formData.get("features"),2000).split("\n").map(value=>value.trim()).filter(Boolean),is_active:formData.get("is_active")==="on",sort_order:Number(formData.get("sort_order"))||100};
  if(!payload.name)redirect("/admin/products?error=fields");const query=productId&&isUuid(productId)?supabase.from("subscription_products").update(payload).eq("id",productId):supabase.from("subscription_products").insert(payload);const{error}=await query;if(error)redirect(`/admin/products?error=${error.code==="23505"?"duplicate":"save"}`);revalidatePath("/admin/products");revalidatePath("/dashboard/billing");revalidatePath("/fuer-geschaefte");redirect("/admin/products?saved=1");
}
