import Link from "next/link";
import { redirect } from "next/navigation";
import { OfferForm } from "@/app/dashboard/offers/OfferForm";
import { getDashboardContext } from "@/lib/dashboard";

export default async function NewVoucherPage() {
  const { supabase, user, organizationId, role } = await getDashboardContext();
  if (!user) redirect("/login?next=/dashboard/offers/new/voucher");
  if (!organizationId) redirect("/dashboard/onboarding");
  if (!role || !["owner", "manager"].includes(role)) redirect("/dashboard/offers");
  const { data: locations } = await supabase.from("locations").select("id,name").eq("organization_id", organizationId).eq("is_active", true).order("is_primary", { ascending: false });

  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#164e63_0%,#082032_34%,#020617_100%)] px-5 py-16 text-white sm:px-8"><section className="mx-auto max-w-7xl"><Link href="/dashboard/offers" className="font-black text-cyan-200">← Zurück zu Aktionen & Gutscheinen</Link><span className="mt-7 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200">🎟️ Neuer Gutschein</span><h1 className="mt-5 text-5xl font-black">Gutschein gestalten</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">Lege Wert, Gültigkeit und Bedingungen fest. Links siehst du sofort, wie der Gutschein für Kundinnen und Kunden wirkt.</p><OfferForm locations={locations ?? []} fixedType="gutschein" showVoucherPreview className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.06] p-6 lg:p-8" /></section></main>;
}
