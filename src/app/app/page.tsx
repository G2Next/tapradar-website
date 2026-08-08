import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { hasCurrentLegalAcceptance } from "@/lib/legal-consent";
import { updateCustomerProfile } from "./actions";

type SearchParams = Promise<{ saved?: string; error?: string }>;

export default async function CustomerAppPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();
  if (!authData.user) redirect("/login?next=/app");
  if (!(await hasCurrentLegalAcceptance(authData.user.id, "account"))) redirect("/rechtliches?next=/app");

  const [{ data: profile }, { data: cards }, { data: rewards }] = await Promise.all([
    supabase.from("customer_profiles").select("display_name, marketing_consent").eq("user_id", authData.user.id).maybeSingle(),
    supabase.from("customer_loyalty_cards").select("id, stamps_balance, lifetime_stamps, loyalty_cards(title, reward_title, stamps_required, organizations(name, logo_emoji), locations(name, city))").eq("user_id", authData.user.id).order("updated_at", { ascending: false }),
    supabase.from("reward_entitlements").select("id, reward_title, redemption_code, status, expires_at, organizations(name), locations(name)").eq("user_id", authData.user.id).order("created_at", { ascending: false }),
  ]);

  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-12 text-white sm:px-8"><section className="mx-auto max-w-5xl">
    <div className="flex flex-wrap items-center justify-between gap-4"><div><span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-300">TapRadar Kunden-App</span><h1 className="mt-5 text-5xl font-black">Meine Wallet</h1></div><Link href="/" className="font-black text-cyan-300">Zur Website</Link></div>
    {params.saved ? <p className="mt-7 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-emerald-100">Profil gespeichert.</p> : null}
    <div className="mt-8 grid gap-6 md:grid-cols-2">{(cards ?? []).map((card) => { const loyalty = first(card.loyalty_cards); const business = first(loyalty?.organizations); const location = first(loyalty?.locations); const required = loyalty?.stamps_required ?? 10; return <article key={card.id} className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6"><div className="flex items-start justify-between gap-4"><div><p className="text-3xl">{business?.logo_emoji ?? "🏪"}</p><h2 className="mt-3 text-2xl font-black">{business?.name ?? "Geschäft"}</h2><p className="mt-1 text-sm text-slate-400">{location?.name}{location?.city ? ` · ${location.city}` : ""}</p></div><span className="rounded-full bg-cyan-300/15 px-3 py-2 font-black text-cyan-200">{card.stamps_balance} / {required}</span></div><p className="mt-5 font-black">{loyalty?.title}</p><div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" style={{ width: `${Math.min(100, (card.stamps_balance / required) * 100)}%` }} /></div><p className="mt-4 text-sm text-slate-300">Belohnung: {loyalty?.reward_title}</p><p className="mt-2 text-xs text-slate-500">Insgesamt {card.lifetime_stamps} Stempel gesammelt</p></article>; })}</div>
    {(cards ?? []).length === 0 ? <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.07] p-8"><h2 className="text-2xl font-black">Noch keine Treuekarte</h2><p className="mt-3 text-slate-300">Scanne den sicheren QR-Code einer TapRadar-Filiale, um deinen ersten Stempel zu sammeln.</p></div> : null}
    <section className="mt-10"><h2 className="text-3xl font-black">Belohnungen</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{(rewards ?? []).map((reward) => { const business = first(reward.organizations); const location = first(reward.locations); return <article key={reward.id} className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.08] p-6"><div className="flex items-center justify-between gap-3"><h3 className="text-xl font-black text-amber-100">{reward.reward_title}</h3><span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase">{reward.status}</span></div><p className="mt-2 text-sm text-slate-300">{business?.name} · {location?.name}</p>{reward.status === "available" ? <div className="mt-5 rounded-2xl bg-slate-950/60 p-4 text-center"><p className="text-xs font-black uppercase text-slate-400">Einlösecode</p><p className="mt-2 text-2xl font-black tracking-[.18em] text-white">{reward.redemption_code}</p></div> : null}</article>; })}</div></section>
    <form action={updateCustomerProfile} className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.07] p-6"><h2 className="text-2xl font-black">Kundenprofil</h2><div className="mt-5 grid gap-4 md:grid-cols-2"><label className="grid gap-2 text-xs font-black uppercase text-slate-300">Anzeigename<input name="display_name" defaultValue={profile?.display_name ?? ""} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case text-white" /></label><label className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 text-sm"><input name="marketing_consent" type="checkbox" defaultChecked={profile?.marketing_consent ?? false} className="h-5 w-5 accent-cyan-300" />Ich möchte optionale Angebote erhalten.</label></div><button className="mt-5 rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950">Profil speichern</button></form>
  </section></main>;
}

function first<T>(value: T | T[] | null | undefined): T | undefined { return Array.isArray(value) ? value[0] : value ?? undefined; }
