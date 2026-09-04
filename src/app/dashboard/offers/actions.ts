"use server";
import { randomBytes, randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import sharp from "sharp";
import { createErrorReference, recordAppError } from "@/lib/app-errors";
import { getDashboardContext } from "@/lib/dashboard";
import { validateUploadedFile } from "@/lib/file-security";
import { isUuid, requiredText } from "@/lib/validation";
import { sendReviewRequestedPush } from "@/lib/marketing-push";

const offerTypes=["aktion","gutschein"];
const allowedFiles:Record<string,string>={"image/jpeg":"jpg","image/png":"png","image/webp":"webp","application/pdf":"pdf"};
type Context=Awaited<ReturnType<typeof getDashboardContext>>;
export type OfferActionState={error?:string};

function destination(offerType:string){return offerType==="gutschein"?"/dashboard/vouchers":"/dashboard/actions";}
function refreshOfferPages(){revalidatePath("/dashboard");revalidatePath("/dashboard/actions");revalidatePath("/dashboard/vouchers");}

type DatabaseError={code?:string;message?:string;details?:string;hint?:string};

async function saveError(error:DatabaseError,operation:"create"|"update",organizationId:string,userId:string){
  const errorReference=createErrorReference();
  console.error("merchant-offer-save-failed",{errorReference,operation,organizationId,code:error.code,message:error.message,details:error.details,hint:error.hint});
  await recordAppError({source:"merchant-offer",error,route:"/dashboard/offers",operation,errorCode:error.code,organizationId,userId,referenceCode:errorReference,context:{details:error.details??null,hint:error.hint??null}});
  if(error.code==="23505")return{error:"Dieser Kassencode wird bereits verwendet. Bitte gib einen anderen Kassencode ein."};
  if(error.code==="23503")return{error:"Die ausgewählte Filiale oder Datei ist nicht mehr verfügbar. Bitte lade die Seite neu."};
  if(error.code==="23514")return{error:"Gutscheinwert oder Zeitraum erfüllen die erlaubten Vorgaben nicht."};
  if(error.code==="23502")return{error:"Ein von der Datenbank benötigtes Pflichtfeld fehlt. Bitte prüfe alle markierten Felder."};
  if(error.code==="22007"||error.code==="22P02")return{error:"Start- oder Enddatum hat ein ungültiges Format."};
  if(error.code==="42501")return{error:"Dein Konto hat keine Berechtigung, diesen Eintrag zu speichern. Bitte melde dich neu an oder prüfe deine Rolle."};
  if(error.code==="PGRST204"||error.code==="PGRST205")return{error:`Website und Datenbank haben nicht denselben Stand. Fehlernummer: ${errorReference}`};
  return{error:`Technischer Speicherfehler. Deine Eingaben bleiben erhalten. Fehlernummer: ${errorReference}`};
}

function payload(formData:FormData) {
  const type=requiredText(formData.get("offer_type"),20);
  const offerType=offerTypes.includes(type)?type:"aktion";
  const discountType=requiredText(formData.get("discount_type"),20);
  const discountValue=Number(formData.get("discount_value"));
  const minimumPurchase=Number(formData.get("minimum_purchase_amount"));
  return {title:requiredText(formData.get("title"),140),description:requiredText(formData.get("description"),1200),offer_type:offerType,discount_type:offerType==="gutschein"&&["fixed","percentage"].includes(discountType)?discountType:null,discount_value:offerType==="gutschein"&&Number.isFinite(discountValue)?discountValue:null,minimum_purchase_amount:Number.isFinite(minimumPurchase)&&minimumPurchase>0?minimumPurchase:null,redemption_code:offerType==="gutschein"?(requiredText(formData.get("redemption_code"),40).toUpperCase()||`TR-${randomBytes(3).toString("hex").toUpperCase()}`):null,conditions:requiredText(formData.get("conditions"),800)||null,starts_at:requiredText(formData.get("starts_at"),30)||null,ends_at:requiredText(formData.get("ends_at"),30)||null,is_active:formData.get("is_active")==="on",location_id:requiredText(formData.get("location_id"),40)||null};
}
function validationError(value:ReturnType<typeof payload>) {
  const missing=[];
  if(!value.title)missing.push(value.offer_type==="gutschein"?"Gutschein-Titel":"Aktions-Titel");
  if(!value.description)missing.push("Beschreibung");
  if(value.offer_type==="gutschein"&&(!value.discount_type||!value.discount_value||value.discount_value<=0))missing.push("Gutscheinwert größer als 0");
  if(value.offer_type==="gutschein"&&value.discount_type==="percentage"&&(value.discount_value??0)>100)missing.push("Gutscheinwert höchstens 100 Prozent");
  if(value.starts_at&&value.ends_at&&value.starts_at>=value.ends_at)missing.push("Enddatum nach dem Startdatum");
  return missing.length?`Bitte korrigiere: ${missing.join(", ")}.`:null;
}
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
  const inputError=validationError(value);if(inputError)return{error:inputError};
  if(!(await validLocation(context,value.location_id)))return{error:"Die ausgewählte Filiale ist nicht mehr verfügbar."};
  let media=null;try{media=await uploadOfferMedia(context,formData);}catch{return{error:"Die Datei ist ungültig oder konnte nicht hochgeladen werden. Erlaubt sind JPG, PNG, WebP oder PDF bis 5 MB."};}
  const{error}=await context.supabase.from("offers").insert({...value,media_asset_id:media?.id??null,organization_id:context.organizationId});
  if(error){await cleanupAsset(context,media);return await saveError(error,"create",context.organizationId,context.user.id);}
  const {data:organization}=await context.supabase.from("organizations").select("name").eq("id",context.organizationId).single();
  await sendReviewRequestedPush({title:value.title,kind:value.offer_type==="gutschein"?"Gutschein":"Aktion",organizationName:organization?.name??"Geschäft"}).catch(()=>undefined);
  refreshOfferPages();redirect(`${destination(value.offer_type)}?saved=pending`);
}

export async function updateOffer(_:OfferActionState,formData:FormData):Promise<OfferActionState>{
  const context=await getDashboardContext();const offerId=requiredText(formData.get("offer_id"),40);const value=payload(formData);
  if(!context.user||!context.organizationId||!["owner","manager"].includes(context.role??"")||!isUuid(offerId))return{error:"Du hast keine Berechtigung, diesen Eintrag zu bearbeiten."};
  const inputError=validationError(value);if(inputError)return{error:inputError};
  if(!(await validLocation(context,value.location_id)))return{error:"Die ausgewählte Filiale ist nicht mehr verfügbar."};
  const{data:existing}=await context.supabase.from("offers").select("media_asset_id,organization_assets!offers_media_asset_id_fkey(id,storage_path)").eq("id",offerId).eq("organization_id",context.organizationId).maybeSingle();
  if(!existing)return{error:"Der Eintrag ist nicht mehr verfügbar. Bitte lade die Seite neu."};
  let media=null;try{media=await uploadOfferMedia(context,formData);}catch{return{error:"Die Datei ist ungültig oder konnte nicht hochgeladen werden. Erlaubt sind JPG, PNG, WebP oder PDF bis 5 MB."};}
  const{data:updated,error}=await context.supabase.from("offers").update({...value,...(media?{media_asset_id:media.id}:{})}).eq("id",offerId).eq("organization_id",context.organizationId).select("moderation_status").single();
  if(error){await cleanupAsset(context,media);return await saveError(error,"update",context.organizationId,context.user.id);}
  const oldAsset=Array.isArray(existing?.organization_assets)?existing.organization_assets[0]:existing?.organization_assets;
  if(media&&oldAsset)await cleanupAsset(context,oldAsset);
  if(updated?.moderation_status==="pending_review") { const {data:organization}=await context.supabase.from("organizations").select("name").eq("id",context.organizationId).single(); await sendReviewRequestedPush({title:value.title,kind:value.offer_type==="gutschein"?"Gutschein":"Aktion",organizationName:organization?.name??"Geschäft"}).catch(()=>undefined); }
  refreshOfferPages();redirect(`${destination(value.offer_type)}?saved=pending`);
}
