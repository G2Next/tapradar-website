"use server";
import { randomBytes, randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import sharp from "sharp";
import { getDashboardContext } from "@/lib/dashboard";
import { validateUploadedFile } from "@/lib/file-security";
import { createAdminClient } from "@/lib/supabase/admin";
import { isUuid, requiredText } from "@/lib/validation";

const offerTypes=["aktion","gutschein"];
const allowedFiles:Record<string,string>={"image/jpeg":"jpg","image/png":"png","image/webp":"webp","application/pdf":"pdf"};
type Context=Awaited<ReturnType<typeof getDashboardContext>>;
export type OfferActionState={error?:string};

function destination(offerType:string){return offerType==="gutschein"?"/dashboard/vouchers":"/dashboard/actions";}
function refreshOfferPages(){revalidatePath("/dashboard");revalidatePath("/dashboard/actions");revalidatePath("/dashboard/vouchers");}

type DatabaseError={code?:string;message?:string;details?:string;hint?:string};

function saveError(error:DatabaseError,operation:"create"|"update",organizationId:string){
  console.error("merchant-offer-save-failed",{operation,organizationId,code:error.code,message:error.message,details:error.details,hint:error.hint});
  if(error.code==="23505")return{error:"Dieser Kassencode wird bereits verwendet. Bitte gib einen anderen Kassencode ein."};
  if(error.code==="23503")return{error:"Die ausgewählte Filiale oder Datei ist nicht mehr verfügbar. Bitte lade die Seite neu."};
  if(error.code==="23514"||error.code==="22P02")return{error:"Bitte prüfe Gutscheinwert, Zeitraum und ausgewählte Filiale."};
  return{error:"Der Eintrag konnte nicht gespeichert werden. Bitte versuche es erneut."};
}

async function recordOfferAudit(userId:string,organizationId:string,action:string,offerId:string){
  const admin=createAdminClient();
  const{error}=await admin.from("audit_logs").insert({actor_user_id:userId,organization_id:organizationId,action,entity_type:"offer",entity_id:offerId,metadata:{source:"web-server-action"}});
  if(error)console.error("merchant-offer-audit-failed",{organizationId,action,code:error.code,message:error.message});
}

function payload(formData:FormData) {
  const type=requiredText(formData.get("offer_type"),20);
  const offerType=offerTypes.includes(type)?type:"aktion";
  const discountType=requiredText(formData.get("discount_type"),20);
  const discountValue=Number(formData.get("discount_value"));
  const minimumPurchase=Number(formData.get("minimum_purchase_amount"));
  return {title:requiredText(formData.get("title"),140),description:requiredText(formData.get("description"),1200),offer_type:offerType,discount_type:offerType==="gutschein"&&["fixed","percentage"].includes(discountType)?discountType:null,discount_value:offerType==="gutschein"&&Number.isFinite(discountValue)?discountValue:null,minimum_purchase_amount:Number.isFinite(minimumPurchase)&&minimumPurchase>0?minimumPurchase:null,redemption_code:offerType==="gutschein"?(requiredText(formData.get("redemption_code"),40).toUpperCase()||`TR-${randomBytes(3).toString("hex").toUpperCase()}`):null,conditions:requiredText(formData.get("conditions"),800)||null,starts_at:requiredText(formData.get("starts_at"),30)||null,ends_at:requiredText(formData.get("ends_at"),30)||null,is_active:formData.get("is_active")==="on",location_id:requiredText(formData.get("location_id"),40)||null};
}
function invalid(value:ReturnType<typeof payload>) { return !value.title||!value.description||Boolean(value.starts_at&&value.ends_at&&value.starts_at>=value.ends_at)||(value.offer_type==="gutschein"&&(!value.discount_type||!value.discount_value||value.discount_value<=0||(value.discount_type==="percentage"&&value.discount_value>100))); }
async function validLocation(context:Context,locationId:string|null){if(!locationId)return true;const{data}=await context.supabase.from("locations").select("id").eq("id",locationId).eq("organization_id",context.organizationId!).eq("is_active",true).maybeSingle();return Boolean(data);}

async function uploadOfferMedia(context:Context,formData:FormData) {
  const file=formData.get("media");
  if(!(file instanceof File)||file.size===0)return null;
  const extension=allowedFiles[file.type];
  if(!extension||file.size>5*1024*1024)throw new Error("invalid-media");
  const original=new Uint8Array(await file.arrayBuffer());
  await validateUploadedFile(original,file.type);
  const isPdf=file.type==="application/pdf";
  const bytes=isPdf?original:await sharp(original).rotate().resize(1200,630,{fit:"cover",position:"centre"}).webp({quality:86}).toBuffer();
  const storedType=isPdf?file.type:"image/webp";
  const storedExtension=isPdf?extension:"webp";
  const path=`${context.organizationId}/${randomUUID()}.${storedExtension}`;
  const {error:uploadError}=await context.supabase.storage.from("business-media").upload(path,bytes,{contentType:storedType,upsert:false});
  if(uploadError)throw uploadError;
  const {data:asset,error:assetError}=await context.supabase.from("organization_assets").insert({organization_id:context.organizationId,location_id:requiredText(formData.get("location_id"),40)||null,asset_type:"offer",storage_path:path,mime_type:storedType,file_size:bytes.byteLength,alt_text:requiredText(formData.get("media_alt_text"),160)||requiredText(formData.get("title"),140),is_public:true}).select("id,storage_path").single();
  if(assetError){await context.supabase.storage.from("business-media").remove([path]);throw assetError;}
  return asset;
}

async function cleanupAsset(context:Context,asset:{id:string;storage_path:string}|null){if(!asset)return;await context.supabase.storage.from("business-media").remove([asset.storage_path]);await context.supabase.from("organization_assets").delete().eq("id",asset.id).eq("organization_id",context.organizationId!);}

export async function createOffer(_:OfferActionState,formData:FormData):Promise<OfferActionState>{
  const context=await getDashboardContext();const value=payload(formData);
  if(!context.user||!context.organizationId||!["owner","manager"].includes(context.role??""))return{error:"Du hast keine Berechtigung, diesen Eintrag anzulegen."};
  if(invalid(value))return{error:"Bitte prüfe die Pflichtfelder, den Gutscheinwert und den Zeitraum."};
  if(!(await validLocation(context,value.location_id)))return{error:"Die ausgewählte Filiale ist nicht mehr verfügbar."};
  let media=null;try{media=await uploadOfferMedia(context,formData);}catch{return{error:"Die Datei ist ungültig oder konnte nicht hochgeladen werden. Erlaubt sind JPG, PNG, WebP oder PDF bis 5 MB."};}
  const admin=createAdminClient();
  const{data,error}=await admin.from("offers").insert({...value,media_asset_id:media?.id??null,organization_id:context.organizationId}).select("id").single();
  if(error){await cleanupAsset(context,media);return saveError(error,"create",context.organizationId);}
  await recordOfferAudit(context.user.id,context.organizationId,"offer.created",data.id);
  refreshOfferPages();redirect(`${destination(value.offer_type)}?saved=1`);
}

export async function updateOffer(_:OfferActionState,formData:FormData):Promise<OfferActionState>{
  const context=await getDashboardContext();const offerId=requiredText(formData.get("offer_id"),40);const value=payload(formData);
  if(!context.user||!context.organizationId||!["owner","manager"].includes(context.role??"")||!isUuid(offerId))return{error:"Du hast keine Berechtigung, diesen Eintrag zu bearbeiten."};
  if(invalid(value))return{error:"Bitte prüfe die Pflichtfelder, den Gutscheinwert und den Zeitraum."};
  if(!(await validLocation(context,value.location_id)))return{error:"Die ausgewählte Filiale ist nicht mehr verfügbar."};
  const admin=createAdminClient();
  const{data:existing}=await admin.from("offers").select("media_asset_id,organization_assets!offers_media_asset_id_fkey(id,storage_path)").eq("id",offerId).eq("organization_id",context.organizationId).maybeSingle();
  if(!existing)return{error:"Der Eintrag ist nicht mehr verfügbar. Bitte lade die Seite neu."};
  let media=null;try{media=await uploadOfferMedia(context,formData);}catch{return{error:"Die Datei ist ungültig oder konnte nicht hochgeladen werden. Erlaubt sind JPG, PNG, WebP oder PDF bis 5 MB."};}
  const{error}=await admin.from("offers").update({...value,...(media?{media_asset_id:media.id}:{})}).eq("id",offerId).eq("organization_id",context.organizationId);
  if(error){await cleanupAsset(context,media);return saveError(error,"update",context.organizationId);}
  const oldAsset=Array.isArray(existing?.organization_assets)?existing.organization_assets[0]:existing?.organization_assets;
  if(media&&oldAsset)await cleanupAsset(context,oldAsset);
  await recordOfferAudit(context.user.id,context.organizationId,"offer.updated",offerId);
  refreshOfferPages();redirect(`${destination(value.offer_type)}?saved=1`);
}
