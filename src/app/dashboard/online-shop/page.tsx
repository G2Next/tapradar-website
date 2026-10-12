import Link from "next/link";
import { redirect } from "next/navigation";
import { requireApprovedDashboardContext } from "@/lib/dashboard";
import type { OnlineShopProfile } from "@/lib/online-shop";
import { ShopForm } from "./ShopForm";

export default async function OnlineShopPage() {
  const context = await requireApprovedDashboardContext();
  if (!context.user) redirect("/login?next=/dashboard/online-shop");
  if (!context.organizationId) redirect("/dashboard/onboarding");
  const { data, error } = await context.supabase.from("organization_online_shops")
    .select("has_shop,name,url,platform,description").eq("organization_id", context.organizationId).maybeSingle();
  const membership = context.memberships.find(item => item.organization_id === context.organizationId);
  const organization = Array.isArray(membership?.organizations) ? membership.organizations[0] : membership?.organizations;
  const profile: OnlineShopProfile = data ?? { has_shop: false, name: "", url: "", platform: "undecided", description: "" };
  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white"><section className="mx-auto max-w-4xl">
    <Link href="/dashboard" className="font-black text-cyan-300">Zurück zum Dashboard</Link>
    <p className="mt-6 text-xs font-bold uppercase tracking-widest text-cyan-200">Verkauf & Kanäle · {organization?.name}</p>
    <h1 className="mt-3 text-4xl font-black sm:text-5xl">Onlineshop</h1>
    <p className="mt-4 max-w-2xl leading-7 text-slate-300">Verwalte den Onlineshop deines Unternehmens an einem Ort. Hinterlege die Shop-Adresse, das verwendete System und eine eigene Beschreibung.</p>
    {error ? <div role="alert" className="mt-8 rounded-2xl bg-red-300/10 p-5 text-red-100">Das Shop-Profil konnte nicht geladen werden. Bitte lade die Seite erneut. <Link href="/dashboard/online-shop" className="underline">Erneut versuchen</Link></div> : <ShopForm key={context.organizationId} organizationId={context.organizationId} profile={profile} canManage={["owner", "manager"].includes(context.role ?? "")}/>}
    <aside className="mt-6 rounded-3xl border border-white/10 p-6"><div className="flex flex-wrap items-center gap-3"><h2 className="text-xl font-black">Shop-Anbindungen</h2><span className="rounded-full bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-100">Geplant</span></div><p className="mt-3 text-sm leading-6 text-slate-300">Eine automatische Anbindung, zum Beispiel an WooCommerce, folgt später. Aktuell werden nur deine Shop-Angaben gespeichert. Produkte und Bestellungen werden noch nicht synchronisiert.</p></aside>
  </section></main>;
}
