"use server";

import { createHash } from "crypto";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { requiredText } from "@/lib/validation";

export async function submitContactMessage(formData: FormData) {
  if (requiredText(formData.get("company_website"), 100)) redirect("/kontakt?sent=1");
  const name = requiredText(formData.get("name"), 120);
  const email = requiredText(formData.get("email"), 254).toLowerCase();
  const subject = requiredText(formData.get("subject"), 120);
  const message = requiredText(formData.get("message"), 5000);
  if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || subject.length < 2 || message.length < 10) redirect("/kontakt?error=fields");
  const requestHeaders = await headers();
  const trustedForwarded = requestHeaders.get("x-vercel-forwarded-for");
  const developmentForwarded = process.env.NODE_ENV !== "production" ? requestHeaders.get("x-forwarded-for") : null;
  const ip = (trustedForwarded ?? requestHeaders.get("x-real-ip") ?? developmentForwarded)?.split(",")[0]?.trim() || "unknown";
  const key = createHash("sha256").update(`${ip}|${email}`).digest("hex");
  const admin = createAdminClient();
  const { data: limit, error: limitError } = await admin.rpc("consume_rate_limit", { rate_bucket: "contact-form", rate_key_hash: key, maximum_requests: 5, window_seconds: 3600 });
  const result = Array.isArray(limit) ? limit[0] : limit;
  if (limitError || !result?.allowed) redirect("/kontakt?error=limit");
  const { error } = await admin.from("contact_messages").insert({ name, email, subject, message });
  if (error) redirect("/kontakt?error=save");
  redirect("/kontakt?sent=1");
}
