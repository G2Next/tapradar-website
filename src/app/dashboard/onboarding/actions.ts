"use server";

import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDashboardContext, LOCATION_COOKIE, ORGANIZATION_COOKIE } from "@/lib/dashboard";
import { enqueueNotification } from "@/lib/notifications";
import { recordSystemEvent } from "@/lib/system-events";
import { inferVatTreatment } from "@/lib/tax";
import { requiredText, slugify } from "@/lib/validation";

export async function createOrganization(formData: FormData) {
  const { supabase, user } = await getDashboardContext();
  if (!user) redirect("/login?next=/dashboard/onboarding");
  const name = requiredText(formData.get("name"), 120);
  const category = requiredText(formData.get("category"), 80);
  const billingEmail = requiredText(formData.get("billing_email"), 200).toLowerCase();
  const billingAddress = requiredText(formData.get("billing_address"), 160);
  const billingPostalCode = requiredText(formData.get("billing_postal_code"), 20);
  const billingCity = requiredText(formData.get("billing_city"), 100);
  const billingCountryCode = requiredText(formData.get("billing_country_code"), 2).toUpperCase();
  const taxId = requiredText(formData.get("tax_id"), 80);
  if (name.length < 2 || !category || !/^\S+@\S+\.\S+$/.test(billingEmail) || !billingAddress || !billingPostalCode || !billingCity || !/^[A-Z]{2}$/.test(billingCountryCode)) redirect("/dashboard/onboarding?error=organization");
  const { data: newOrganizationId, error } = await supabase.rpc("create_organization_with_owner", {
    organization_name: name,
    organization_slug: `${slugify(name) || "firma"}-${randomUUID().slice(0, 8)}`,
    organization_category: category,
    organization_legal_name: requiredText(formData.get("legal_name"), 160),
    organization_registration_number: requiredText(formData.get("registration_number"), 80),
    organization_tax_id: taxId,
    organization_billing_email: billingEmail,
  });
  if (error) redirect(`/dashboard/onboarding?error=${error.message.includes("confirmation") ? "email" : "organization"}`);
  const addressUpdate = await supabase.from("organizations").update({
    billing_address: billingAddress,
    billing_postal_code: billingPostalCode,
    billing_city: billingCity,
    billing_country_code: billingCountryCode,
    vat_treatment: inferVatTreatment(billingCountryCode, taxId),
  }).eq("id", newOrganizationId as string);
  if (addressUpdate.error) redirect("/dashboard/onboarding?error=organization-address");
  const cookieStore = await cookies();
  cookieStore.set(ORGANIZATION_COOKIE, newOrganizationId as string, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 365 });
  cookieStore.delete(LOCATION_COOKIE);
  redirect("/dashboard/onboarding?saved=organization");
}

function weeklyHours(formData: FormData) {
  return Object.fromEntries(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => [day, formData.get(`${day}_closed`) === "on" ? { closed: true } : { closed: false, open: requiredText(formData.get(`${day}_open`), 5), close: requiredText(formData.get(`${day}_close`), 5) }]));
}

export async function createFirstLocation(formData: FormData) {
  const { supabase, organizationId, role } = await getDashboardContext();
  if (!organizationId || role !== "owner") redirect("/dashboard/onboarding?error=permission");
  const name = requiredText(formData.get("name"), 120);
  const address = requiredText(formData.get("address"), 160);
  const postalCode = requiredText(formData.get("postal_code"), 20);
  const city = requiredText(formData.get("city"), 100);
  const countryCode = requiredText(formData.get("country_code"), 2).toUpperCase();
  const latitude = Number(formData.get("latitude"));
  const longitude = Number(formData.get("longitude"));
  if (!name || !address || !city || !/^[A-Z]{2}$/.test(countryCode) || !Number.isFinite(latitude) || !Number.isFinite(longitude)) redirect("/dashboard/onboarding?error=location");
  const { data: organization } = await supabase.from("organizations").select("slug").eq("id", organizationId).single();
  const { data: newLocationId, error } = await supabase.rpc("create_initial_location", {
    target_organization_id: organizationId,
    location_name: name,
    location_slug: `${organization?.slug ?? "filiale"}-${randomUUID().slice(0, 6)}`,
    location_address: address,
    location_postal_code: postalCode,
    location_city: city,
    location_phone: requiredText(formData.get("phone"), 40),
    location_email: requiredText(formData.get("email"), 200),
    location_latitude: latitude,
    location_longitude: longitude,
    location_opening_hours: weeklyHours(formData),
  });
  if (error) redirect("/dashboard/onboarding?error=location");
  const countryUpdate = await supabase.from("locations").update({ country_code: countryCode }).eq("id", newLocationId as string).eq("organization_id", organizationId);
  if (countryUpdate.error) redirect("/dashboard/onboarding?error=location-country");
  redirect("/dashboard/onboarding?saved=location");
}

export async function configureLoyalty(formData: FormData) {
  const { supabase, organizationId, locationId, role } = await getDashboardContext();
  const stamps = Number(formData.get("stamps_required"));
  if (!organizationId || !locationId || role !== "owner" || !Number.isInteger(stamps)) redirect("/dashboard/onboarding?error=loyalty");
  const { data: newCardId, error } = await supabase.rpc("configure_initial_loyalty_card", {
    target_organization_id: organizationId,
    target_location_id: locationId,
    card_title: requiredText(formData.get("title"), 120),
    card_reward_title: requiredText(formData.get("reward_title"), 160),
    card_stamps_required: stamps,
    applies_to_all_locations: formData.get("all_locations") === "on",
  });
  if (error) redirect("/dashboard/onboarding?error=loyalty");
  const ruleUpdate = await supabase.from("loyalty_cards").update({
    earning_rule: requiredText(formData.get("earning_rule"), 300),
    verification_instructions: requiredText(formData.get("verification_instructions"), 500),
  }).eq("id", newCardId as string).eq("organization_id", organizationId);
  if (ruleUpdate.error) redirect("/dashboard/onboarding?error=loyalty-rule");
  redirect("/dashboard/onboarding?saved=loyalty");
}

export async function choosePlan(formData: FormData) {
  const { supabase, organizationId, role } = await getDashboardContext();
  const plan = requiredText(formData.get("plan"), 20);
  if (!organizationId || role !== "owner" || !plan.match(/^[a-z0-9_-]{2,40}$/)) redirect("/dashboard/onboarding?error=plan");
  const { error } = await supabase.rpc("select_subscription_plan", { target_organization_id: organizationId, selected_plan: plan });
  if (error) redirect("/dashboard/onboarding?error=plan");
  redirect("/dashboard/onboarding?saved=plan");
}

export async function submitForReview() {
  const { supabase, user, organizationId, role } = await getDashboardContext();
  if (!organizationId || role !== "owner") redirect("/dashboard/onboarding?error=permission");
  const { error } = await supabase.rpc("submit_organization_for_review", { target_organization_id: organizationId });
  if (error) redirect(`/dashboard/onboarding?error=${error.message.includes("subscription") ? "payment" : "review"}`);
  const { data: organization } = await supabase.from("organizations").select("name, billing_email").eq("id", organizationId).single();
  try {
    await enqueueNotification({ organizationId, userId: user?.id, email: organization?.billing_email || user?.email || "", template: "review_submitted", payload: { organization_name: organization?.name } });
  } catch (notificationError) {
    await recordSystemEvent({ severity: "warning", source: "review-submission", message: notificationError instanceof Error ? notificationError.message : "Review email could not be queued", organizationId });
  }
  redirect("/dashboard/onboarding?submitted=1");
}
