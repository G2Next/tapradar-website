import Link from "next/link";
import { redirect } from "next/navigation";
import { OfferForm } from "@/app/dashboard/offers/OfferForm";
import { getDashboardContext } from "@/lib/dashboard";

export default async function NewVoucherPage() {
  const { supabase, user, organizationId, role, locations } = await getDashboardContext();
  if (!user) redirect("/login?next=/dashboard/vouchers/new");
  if (!organizationId) redirect("/dashboard/onboarding");
  if (!role || !["owner", "manager"].includes(role)) redirect("/dashboard/vouchers");
  const { data: organization } = await supabase.from("organizations").select("name").eq("id", organizationId).single();

  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#164e63_0%,#082032_34%,#020617_100%)] px-5 py-16 text-white sm:px-8"><section className="mx-auto max-w-[1500px]"><Link href="/dashboard/vouchers" className="font-black text-cyan-200">← Zurück zu Gutscheinen</Link><span className="mt-7 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200">🎟️ Neuer Gutschein</span><h1 className="mt-5 text-5xl font-black">Gutschein gestalten</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">Lege Wert, Gültigkeit und Bedingungen fest. Links siehst du sofort die freigegebene Gutschein-Ansicht.</p><OfferForm locations={locations} fixedType="gutschein" showVoucherPreview previewBusinessName={organization?.name ?? "Firmenname"} className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.06] p-5 lg:p-8" /></section></main>;
}
