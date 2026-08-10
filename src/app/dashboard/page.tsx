import Link from "next/link";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { DashboardContextSwitcher } from "@/components/DashboardContextSwitcher";

type SearchParams = Promise<{ onboarded?: string; invited?: string; error?: string }>;

export default async function DashboardPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { supabase, user, organizationId, locationId, role, memberships, locations } = await getDashboardContext();
  if (!user) redirect("/login?next=/dashboard");
  if (!organizationId) {
    return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white"><section className="mx-auto max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.07] p-8 text-center"><p className="text-5xl">🏪</p><h1 className="mt-5 text-4xl font-black">Willkommen bei TapRadar</h1><p className="mt-4 leading-7 text-slate-300">Dieses Web-Dashboard ist ausschließlich für Geschäftskunden. Registriere jetzt dein Geschäft und die erste Filiale.</p><Link href="/dashboard/onboarding" className="mt-7 inline-flex rounded-2xl bg-cyan-300 px-6 py-4 font-black text-slate-950">Geschäft registrieren</Link></section></main>;
  }

  const [businessResult, locationsResult, cardsResult, offersResult, stampsResult, subscriptionResult] = await Promise.all([
    supabase.from("organizations").select("name, category, city, plan, public_status, logo_emoji").eq("id", organizationId).single(),
    supabase.from("locations").select("id", { count: "exact", head: true }).eq("organization_id", organizationId).eq("is_active", true),
    supabase.from("loyalty_cards").select("id", { count: "exact", head: true }).eq("organization_id", organizationId).eq("is_active", true),
    supabase.from("offers").select("id", { count: "exact", head: true }).eq("organization_id", organizationId).eq("is_active", true),
    supabase.from("stamp_events").select("id", { count: "exact", head: true }).eq("organization_id", organizationId),
    supabase.from("subscriptions").select("status, plan").eq("organization_id", organizationId).maybeSingle(),
  ]);
  const business = businessResult.data;
  const canManage = role === "owner" || role === "manager";

  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-14 text-white sm:px-8"><section className="mx-auto max-w-7xl">
    <div className="flex flex-wrap items-start justify-between gap-6"><div><span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-300">Geschäfts-Dashboard · {role}</span><h1 className="mt-5 text-5xl font-black">{business?.logo_emoji ?? "🏪"} {business?.name ?? "TapRadar"}</h1><p className="mt-3 text-slate-300">{business?.category}{business?.city ? ` · ${business.city}` : ""}</p></div><form action="/logout" method="post"><button type="submit" className="rounded-2xl bg-white/10 px-4 py-3 font-black">Abmelden</button></form></div>
    <div className="mt-6"><DashboardContextSwitcher memberships={memberships ?? []} organizationId={organizationId} locations={locations} locationId={locationId} /></div>
    {params.onboarded || params.invited ? <p className="mt-7 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-emerald-100">Einrichtung erfolgreich. Vervollständige jetzt Geschäft, Filiale und Treuekarte.</p> : null}
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"><Metric label="Filialen" value={locationsResult.count ?? 0} /><Metric label="Treuekarten" value={cardsResult.count ?? 0} /><Metric label="Aktive Angebote" value={offersResult.count ?? 0} /><Metric label="Stempel gesamt" value={stampsResult.count ?? 0} /><Metric label="Tarif" value={`${subscriptionResult.data?.plan ?? business?.plan ?? "bronze"}`} detail={subscriptionResult.data?.status ?? "incomplete"} /></div>
    <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-5"><p className="text-sm text-slate-400">Veröffentlichungsstatus</p><div className="mt-2 flex flex-wrap items-center gap-3"><strong className="capitalize">{business?.public_status ?? "hidden"}</strong>{business?.public_status !== "open" ? <span className="text-sm text-amber-200">Geschäft ist noch nicht öffentlich freigegeben.</span> : <span className="text-sm text-emerald-200">In der App sichtbar.</span>}</div></div>
    <h2 className="mt-10 text-3xl font-black">Verwaltung</h2><div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3"><Nav href="/dashboard/business" title="Geschäftsdaten" text="Firma, Rechnungsadresse, UID und Beschreibung." /><Nav href="/dashboard/locations" title="Filialen" text="Standorte, Öffnungszeiten und Sichtbarkeit." /><Nav href="/dashboard/loyalty-cards" title="Treuekarten & Belohnungen" text="Leistung, Stempelziel und verdiente Belohnung." /><Nav href="/dashboard/offers" title="Aktionen & Gutscheine" text="Kampagnen, Rabattwerte, Bilder und PDFs." /><Nav href="/dashboard/devices" title="QR / NFC Geräte" text="Sichere, widerrufbare Stempel-Zugänge." /><Nav href="/dashboard/redeem" title="Belohnung einlösen" text="Kundencode an der Kasse bestätigen." /><Nav href="/dashboard/analytics" title="Filialstatistik" text="Kennzahlen für die aktuell gewählte Filiale." /><Nav href="/dashboard/privacy" title="Datenschutz und Konto" text="Datenexport und Kontolöschung verwalten." />{canManage ? <><Nav href="/dashboard/team" title="Team und Rechte" text="Mitarbeiter einladen und verwalten." /><Nav href="/dashboard/media" title="Medien und Dateien" text="Bilder, Logos und PDF-Werbung." /><Nav href="/dashboard/billing" title="Tarif und Rechnungen" text="Rechnungsarchiv, Steuer und Zahlungsmittel." /></> : null}</div>
    <div className="mt-10 flex flex-wrap gap-5"><Link href="/dashboard/onboarding?new=1" className="font-black text-cyan-300">Weiteres Unternehmen anlegen</Link><Link href="/" className="font-black text-cyan-300">Zur Website</Link><a href="/api/v1/sync" className="font-black text-cyan-300">App-Sync API prüfen</a></div>
  </section></main>;
}

function Metric({ label, value, detail }: { label: string; value: number | string; detail?: string }) { return <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5"><p className="text-sm text-slate-400">{label}</p><p className="mt-2 text-3xl font-black capitalize">{value}</p>{detail ? <p className="mt-1 text-xs capitalize text-slate-500">{detail}</p> : null}</div>; }
function Nav({ href, title, text }: { href: string; title: string; text: string }) { return <Link href={href} className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6 transition hover:-translate-y-0.5 hover:border-cyan-300/40"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p><span className="mt-5 inline-flex font-black text-cyan-300">Öffnen →</span></Link>; }
