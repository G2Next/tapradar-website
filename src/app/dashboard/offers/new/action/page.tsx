import Link from "next/link";
import { redirect } from "next/navigation";
import { OfferForm } from "@/app/dashboard/offers/OfferForm";
import { getDashboardContext } from "@/lib/dashboard";

export default async function NewActionPage() {
  const { supabase, user, organizationId, role } = await getDashboardContext();
  if (!user) redirect("/login?next=/dashboard/offers/new/action");
  if (!organizationId) redirect("/dashboard/onboarding");
  if (!role || !["owner", "manager"].includes(role)) redirect("/dashboard/offers");
  const { data: locations } = await supabase.from("locations").select("id,name").eq("organization_id", organizationId).eq("is_active", true).order("is_primary", { ascending: false });

  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#7c2d12_0%,#082032_34%,#020617_100%)] px-5 py-16 text-white sm:px-8"><section className="mx-auto max-w-3xl"><Link href="/dashboard/offers" className="font-black text-orange-200">← Zurück zu Aktionen & Gutscheinen</Link><span className="mt-7 inline-flex rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-2 text-sm font-black text-orange-200">🔥 Neue Aktion</span><h1 className="mt-5 text-5xl font-black">Kampagne ankündigen</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Erstelle eine zeitlich begrenzte Aktion oder Neuigkeit. Eine Aktion besitzt keinen festen Gutscheinwert und keinen Kassencode.</p><OfferForm locations={locations ?? []} fixedType="aktion" className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.07] p-6" /></section></main>;
}
