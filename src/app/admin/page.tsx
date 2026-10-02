import Link from "next/link";
import { requirePlatformAdmin } from "@/lib/admin";

export default async function AdminDashboardPage() {
  const { supabase, admin } = await requirePlatformAdmin();
  const [organizations, customers, stamps, invoices, organizationReviews, customerReviews, offerReviews, pushReviews, failedPayments] = await Promise.all([
    supabase.from("organizations").select("id", { count: "exact", head: true }),
    supabase.from("customer_profiles").select("user_id", { count: "exact", head: true }),
    supabase.from("stamp_events").select("id", { count: "exact", head: true }),
    supabase.from("billing_invoices").select("id", { count: "exact", head: true }),
    supabase.from("organizations").select("id", { count: "exact", head: true }).eq("onboarding_status", "review"),
    supabase.from("customer_profiles").select("user_id", { count: "exact", head: true }).eq("approval_status", "pending"),
    supabase.from("offers").select("id", { count: "exact", head: true }).eq("moderation_status", "pending_review"),
    supabase.from("push_messages").select("id", { count: "exact", head: true }).eq("moderation_status", "pending_review"),
    supabase.from("subscriptions").select("id", { count: "exact", head: true }).in("status", ["past_due", "unpaid"]),
  ]);

  const openApprovals = (organizationReviews.count ?? 0) + (customerReviews.count ?? 0) + (offerReviews.count ?? 0) + (pushReviews.count ?? 0);
  return <main className="min-h-screen bg-slate-950 px-5 py-12 text-white sm:px-8"><section className="mx-auto max-w-7xl">
    <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-black uppercase tracking-[.2em] text-purple-200">TapRadar Plattform</p><h1 className="mt-3 text-4xl font-black sm:text-5xl">Admin-Dashboard</h1><p className="mt-4 text-slate-400">Zentrale Übersicht für Plattformbetrieb, Freigaben und Umsatz.</p></div><span className="rounded-full border border-purple-300/20 bg-purple-300/10 px-4 py-2 text-sm font-black text-purple-100">Rolle: {roleLabel(admin.role)}</span></div>

    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Metric label="Unternehmen" value={organizations.count ?? 0} href="/admin/organizations" icon="▣"/><Metric label="Kunden" value={customers.count ?? 0} href="/admin/customers" icon="♙"/><Metric label="Stempel gesamt" value={stamps.count ?? 0} href="/admin/organizations" icon="★"/><Metric label="Rechnungen" value={invoices.count ?? 0} href="/admin/billing" icon="▤"/></div>

    <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
      <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"><div className="flex items-center justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.18em] text-amber-200">Aufgaben</p><h2 className="mt-2 text-2xl font-black">Benötigt Aufmerksamkeit</h2></div><span className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-black text-amber-100">{openApprovals + (failedPayments.count ?? 0)} offen</span></div><div className="mt-5 grid gap-3"><Task href="/admin/organizations?status=review" label="Unternehmens-Freigaben" value={organizationReviews.count ?? 0}/><Task href="/admin/customers?status=pending" label="Kunden-Freigaben" value={customerReviews.count ?? 0}/><Task href="/admin/marketing" label="Marketing und Push prüfen" value={(offerReviews.count ?? 0) + (pushReviews.count ?? 0)}/><Task href="/admin/billing" label="Fehlgeschlagene Zahlungen" value={failedPayments.count ?? 0} danger/></div></section>
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-400/[.09] to-cyan-300/[.04] p-6"><p className="text-xs font-black uppercase tracking-[.18em] text-cyan-200">Schnellzugriff</p><h2 className="mt-2 text-2xl font-black">Häufig verwendet</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1"><QuickLink href="/admin/messages" icon="✉" label="Support-Nachrichten"/><QuickLink href="/admin/operations" icon="◈" label="Betrieb & Datenschutz"/><QuickLink href="/admin/captcha" icon="◫" label="reCAPTCHA-Einstellungen"/><QuickLink href="/admin/errors" icon="⚠" label="Fehlerzentrale"/></div></section>
    </div>
  </section></main>;
}

function Metric({label,value,href,icon}:{label:string;value:number;href:string;icon:string}){return <Link href={href} className="group rounded-3xl border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-0.5 hover:border-purple-300/35 hover:bg-white/[0.075]"><div className="flex items-center justify-between"><span className="text-sm text-slate-400">{label}</span><span className="rounded-xl bg-white/[0.06] px-3 py-2 text-lg text-purple-200">{icon}</span></div><p className="mt-3 text-4xl font-black">{value}</p><p className="mt-3 text-xs font-bold text-slate-500 group-hover:text-purple-200">Öffnen →</p></Link>}
function Task({href,label,value,danger=false}:{href:string;label:string;value:number;danger?:boolean}){return <Link href={href} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 transition hover:border-purple-300/35"><span className="font-bold text-slate-200">{label}</span><span className={`min-w-9 rounded-full px-3 py-1 text-center text-sm font-black ${value===0?"bg-emerald-300/10 text-emerald-100":danger?"bg-red-300/15 text-red-100":"bg-amber-300/15 text-amber-100"}`}>{value}</span></Link>}
function QuickLink({href,icon,label}:{href:string;icon:string;label:string}){return <Link href={href} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 font-bold transition hover:border-cyan-300/35 hover:text-cyan-100"><span className="w-7 text-center text-lg text-cyan-200">{icon}</span>{label}</Link>}
function roleLabel(role:string){return role==="super_admin"?"Super Admin":role==="operations"?"Betrieb":"Support"}
