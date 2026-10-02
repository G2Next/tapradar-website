"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePlatformAdmin } from "@/lib/admin";
import { recordAdminAudit } from "@/lib/admin-audit";
import { isAdminRole } from "@/lib/admin-permissions";
import { createAdminClient } from "@/lib/supabase/admin";
import { isUuid, requiredText } from "@/lib/validation";

export async function addPlatformAdmin(formData: FormData) {
  const { user } = await requirePlatformAdmin("team.manage");
  const email = requiredText(formData.get("email"), 254).toLowerCase();
  const role = requiredText(formData.get("role"), 30);
  if (!/^\S+@\S+\.\S+$/.test(email) || !isAdminRole(role)) redirect("/admin/team?error=invalid");
  const service = createAdminClient();
  const { data: profile } = await service.from("profiles").select("id,email").ilike("email", email).maybeSingle();
  if (!profile) redirect("/admin/team?error=user-not-found");
  const { error } = await service.from("platform_admins").upsert({ user_id: profile.id, role, is_active: true }, { onConflict: "user_id" });
  if (error) redirect("/admin/team?error=save");
  await recordAdminAudit(service,{actorUserId:user.id,action:"admin.team.member_added",entityType:"platform_admin",entityId:profile.id,metadata:{role}});
  revalidatePath("/admin/team");
  redirect("/admin/team?saved=added");
}

export async function updatePlatformAdmin(formData: FormData) {
  const { user } = await requirePlatformAdmin("team.manage");
  const targetId = requiredText(formData.get("user_id"), 40);
  const role = requiredText(formData.get("role"), 30);
  const active = formData.get("is_active") === "on";
  if (!isUuid(targetId) || !isAdminRole(role)) redirect("/admin/team?error=invalid");
  if (targetId === user.id && (!active || role !== "super_admin")) redirect("/admin/team?error=self-lockout");
  const service = createAdminClient();
  const { data: current } = await service.from("platform_admins").select("role,is_active").eq("user_id", targetId).maybeSingle();
  if (!current) redirect("/admin/team?error=missing");
  if (current.role === "super_admin" && current.is_active && (!active || role !== "super_admin")) {
    const { count } = await service.from("platform_admins").select("user_id", { count: "exact", head: true }).eq("role", "super_admin").eq("is_active", true);
    if ((count ?? 0) <= 1) redirect("/admin/team?error=last-super-admin");
  }
  const { error } = await service.from("platform_admins").update({ role, is_active: active }).eq("user_id", targetId);
  if (error) redirect("/admin/team?error=save");
  await recordAdminAudit(service,{actorUserId:user.id,action:"admin.team.member_updated",entityType:"platform_admin",entityId:targetId,metadata:{previous_role:current.role,role,active}});
  revalidatePath("/admin/team");
  redirect("/admin/team?saved=updated");
}
