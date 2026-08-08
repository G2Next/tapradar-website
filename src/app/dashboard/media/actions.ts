"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { validateUploadedFile } from "@/lib/file-security";
import { isUuid, requiredText } from "@/lib/validation";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]);
const extensions: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "application/pdf": "pdf" };

export async function uploadBusinessAsset(formData: FormData) {
  const { supabase, organizationId, role } = await getDashboardContext();
  const file = formData.get("file");
  const locationIdValue = requiredText(formData.get("location_id"), 40);
  const locationId = isUuid(locationIdValue) ? locationIdValue : null;
  const assetTypeValue = requiredText(formData.get("asset_type"), 20);
  const assetType = ["logo", "cover", "gallery", "offer", "document"].includes(assetTypeValue) ? assetTypeValue : "gallery";
  if (!organizationId || !["owner", "manager"].includes(role ?? "") || !(file instanceof File)) redirect("/dashboard/media?error=permission");
  if (!allowedTypes.has(file.type) || file.size < 1 || file.size > 5 * 1024 * 1024) redirect("/dashboard/media?error=file");
  if (locationId) {
    const { data: location } = await supabase.from("locations").select("id").eq("id", locationId).eq("organization_id", organizationId).maybeSingle();
    if (!location) redirect("/dashboard/media?error=location");
  }
  const path = `${organizationId}/${randomUUID()}.${extensions[file.type]}`;
  const bytes = new Uint8Array(await file.arrayBuffer());
  try { await validateUploadedFile(bytes, file.type); }
  catch { redirect("/dashboard/media?error=file"); }
  const { error: uploadError } = await supabase.storage.from("business-media").upload(path, bytes, { contentType: file.type, upsert: false });
  if (uploadError) redirect("/dashboard/media?error=upload");
  const { error: recordError } = await supabase.from("organization_assets").insert({ organization_id: organizationId, location_id: locationId, asset_type: assetType, storage_path: path, mime_type: file.type, file_size: file.size, alt_text: requiredText(formData.get("alt_text"), 160), is_public: true });
  if (recordError) {
    await supabase.storage.from("business-media").remove([path]);
    redirect("/dashboard/media?error=save");
  }
  revalidatePath("/dashboard/media"); redirect("/dashboard/media?saved=1");
}

export async function deleteBusinessAsset(formData: FormData) {
  const { supabase, organizationId, role } = await getDashboardContext(); const assetId = requiredText(formData.get("asset_id"), 40);
  if (!organizationId || !isUuid(assetId) || !["owner", "manager"].includes(role ?? "")) redirect("/dashboard/media?error=permission");
  const { data: asset } = await supabase.from("organization_assets").select("storage_path").eq("id", assetId).eq("organization_id", organizationId).maybeSingle();
  if (!asset) redirect("/dashboard/media?error=missing");
  const { error } = await supabase.storage.from("business-media").remove([asset.storage_path]);
  if (error) redirect("/dashboard/media?error=delete");
  await supabase.from("organization_assets").delete().eq("id", assetId).eq("organization_id", organizationId);
  revalidatePath("/dashboard/media"); redirect("/dashboard/media?deleted=1");
}
