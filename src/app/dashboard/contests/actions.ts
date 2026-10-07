"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireApprovedDashboardContext } from "@/lib/dashboard";
import { isUuid, requiredText } from "@/lib/validation";

export type ContestActionState = { error?: string };

const taskTypes = new Set(["follow_instagram", "follow_facebook", "comment_post", "rate_app", "invite_friend", "in_app_sonstiges"]);
const prizeTypes = new Set(["product", "service", "discount", "coupon"]);

export async function createContest(_: ContestActionState, formData: FormData): Promise<ContestActionState> {
  const context = await requireApprovedDashboardContext();
  if (!context.user || !context.organizationId || !["owner", "manager"].includes(context.role ?? "")) return { error: "Du hast keine Berechtigung, ein Gewinnspiel anzulegen." };

  const contestType = requiredText(formData.get("contest_type"), 30);
  const title = requiredText(formData.get("title"), 140);
  const description = requiredText(formData.get("description"), 1200);
  const locationId = requiredText(formData.get("location_id"), 40) || null;
  const startAt = requiredText(formData.get("start_at"), 40);
  const endAt = requiredText(formData.get("end_at"), 40);
  const termsText = requiredText(formData.get("terms_text"), 5000);
  const maxPlays = Number(formData.get("max_plays"));
  if (!title || !description || !["task_challenge", "spin_wheel"].includes(contestType)) return { error: "Bitte Titel, Beschreibung und Spielart vollständig ausfüllen." };
  if (!startAt || !endAt || startAt >= endAt) return { error: "Das Enddatum muss nach dem Startdatum liegen." };
  if (termsText.length < 20) return { error: "Bitte vollständige Teilnahmebedingungen mit mindestens 20 Zeichen eintragen." };
  if (contestType === "spin_wheel" && (!Number.isInteger(maxPlays) || maxPlays < 1)) return { error: "Für das Glücksrad wird eine Gesamtzahl verfügbarer Drehs benötigt." };
  if (locationId && (!isUuid(locationId) || !context.locations.some(location => location.id === locationId))) return { error: "Die ausgewählte Filiale ist nicht verfügbar." };

  const tasks = Array.from({ length: 6 }, (_, index) => {
    const type = requiredText(formData.get(`task_type_${index}`), 30);
    const taskDescription = requiredText(formData.get(`task_description_${index}`), 300);
    const targetLink = requiredText(formData.get(`task_link_${index}`), 500) || null;
    return type && taskDescription && taskTypes.has(type) ? { task_type: type, description: taskDescription, target_link: targetLink, sort_order: index } : null;
  }).filter(Boolean) as { task_type: string; description: string; target_link: string | null; sort_order: number }[];

  const prizeRows = Array.from({ length: 6 }, (_, index) => {
    const prizeTitle = requiredText(formData.get(`prize_title_${index}`), 140);
    const prizeType = requiredText(formData.get(`prize_type_${index}`), 30);
    const quantity = Number(formData.get(`prize_quantity_${index}`));
    const units = Number(formData.get(`prize_units_${index}`));
    const discountType = requiredText(formData.get(`prize_discount_type_${index}`), 30) || null;
    const discountValue = Number(formData.get(`prize_discount_value_${index}`));
    const validityDays = Number(formData.get(`prize_validity_days_${index}`));
    if (!prizeTitle) return null;
    if (!prizeTypes.has(prizeType) || !Number.isInteger(quantity) || quantity < 1 || !Number.isInteger(units) || units < 1 || units > quantity) return { invalid: true } as const;
    return { title: prizeTitle, description: requiredText(formData.get(`prize_description_${index}`), 500) || null, prize_type: prizeType, quantity_initial: quantity, quantity_remaining: quantity, units_per_win: units, discount_type: ["discount", "coupon"].includes(prizeType) ? discountType : null, discount_value: ["discount", "coupon"].includes(prizeType) && Number.isFinite(discountValue) ? discountValue : null, validity_days: Number.isInteger(validityDays) && validityDays > 0 ? validityDays : 14, sort_order: index };
  });
  const prizes = prizeRows.filter((prize): prize is NonNullable<typeof prize> => prize !== null);

  if (contestType === "task_challenge" && tasks.length === 0) return { error: "Bitte mindestens eine Aufgabe hinzufügen." };
  if (prizes.length === 0 || prizes.some(prize => "invalid" in prize)) return { error: "Bitte mindestens einen Gewinn mit gültiger Menge und Einheiten pro Gewinn anlegen." };
  const validPrizes = prizes.filter((prize): prize is Exclude<(typeof prizes)[number], { readonly invalid: true }> => !("invalid" in prize));
  if (validPrizes.some(prize => ["discount", "coupon"].includes(prize.prize_type) && !prize.discount_type)) return { error: "Für Rabatt oder Gutschein muss eine Gutscheinart ausgewählt werden." };
  const awardCount = validPrizes.reduce((sum, prize) => sum + Math.floor(prize.quantity_initial / prize.units_per_win), 0);
  if (contestType === "spin_wheel" && awardCount > maxPlays) return { error: `Die Gewinne ergeben ${awardCount} mögliche Gewinner, aber es gibt nur ${maxPlays} Drehs. Erhöhe die Drehs oder reduziere die Mengen.` };

  const { data: contest, error } = await context.supabase.from("contests").insert({ organization_id: context.organizationId, location_id: locationId, title, description, image_url: requiredText(formData.get("image_url"), 1000) || null, contest_type: contestType, start_at: startAt, end_at: endAt, is_active: formData.get("is_active") === "on", terms_text: termsText, terms_version: Date.now().toString(), max_plays: contestType === "spin_wheel" ? maxPlays : null, created_by: context.user.id }).select("id").single();
  if (error || !contest) return { error: error?.message ?? "Gewinnspiel konnte nicht gespeichert werden." };

  const inserts = [
    context.supabase.from("contest_prizes").insert(validPrizes.map(prize => ({ ...prize, contest_id: contest.id }))),
    ...(tasks.length ? [context.supabase.from("contest_tasks").insert(tasks.map(task => ({ ...task, contest_id: contest.id })))] : []),
  ];
  const results = await Promise.all(inserts);
  const childError = results.find(result => result.error)?.error;
  if (childError) {
    await context.supabase.from("contests").delete().eq("id", contest.id).eq("organization_id", context.organizationId);
    return { error: childError.message };
  }
  revalidatePath("/dashboard/contests");
  revalidatePath("/dashboard");
  redirect("/dashboard/contests?saved=1");
}

export async function setContestActive(formData: FormData) {
  const context = await requireApprovedDashboardContext();
  const contestId = requiredText(formData.get("contest_id"), 40);
  if (!context.user || !context.organizationId || !["owner", "manager"].includes(context.role ?? "") || !isUuid(contestId)) return;
  await context.supabase.from("contests").update({ is_active: formData.get("active") === "true", updated_at: new Date().toISOString() }).eq("id", contestId).eq("organization_id", context.organizationId);
  revalidatePath("/dashboard/contests");
}
