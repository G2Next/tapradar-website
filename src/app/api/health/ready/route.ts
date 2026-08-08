import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  const configuration = {
    database: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
    stripe: Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_WEBHOOK_SECRET),
    email: Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM),
  };
  if (!configuration.database) return NextResponse.json({ status: "not_ready" }, { status: 503 });
  const { error } = await createAdminClient().from("organizations").select("id", { head: true, count: "exact" }).limit(1);
  if (error) return NextResponse.json({ status: "not_ready" }, { status: 503 });
  const ready = configuration.stripe && configuration.email;
  return NextResponse.json({ status: ready ? "ready" : "degraded" }, { status: ready ? 200 : 503, headers: { "Cache-Control": "no-store" } });
}
