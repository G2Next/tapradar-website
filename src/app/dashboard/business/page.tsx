import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { updateBusiness } from "./actions";

type SearchParams = Promise<{ saved?: string; error?: string }>;

const categories = [
  "Gastronomie",
  "Einzelhandel",
  "Beauty",
  "Fitness",
  "Dienstleistung",
  "Andere",
];

export default async function BusinessSettingsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
        <section className="mx-auto max-w-xl rounded-[28px] border border-white/10 bg-white/[0.07] p-8">
          <h1 className="text-3xl font-black">Bitte anmelden</h1>
          <Link href="/login" className="mt-6 inline-flex rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950">
            Zum Login
          </Link>
        </section>
      </main>
    );
  }

  const { data: membership } = await supabase
    .from("business_members")
    .select(
      "business:businesses(id, name, category, city, address, phone, website, description, opening_hours, logo_emoji, public_status, plan)",
    )
    .eq("user_id", userData.user.id)
    .eq("is_active", true)
    .maybeSingle();

  const business = Array.isArray(membership?.business)
    ? membership.business[0]
    : membership?.business;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <section className="mx-auto max-w-5xl">
        <Link href="/dashboard" className="font-black text-cyan-300">
          Zurück zum Dashboard
        </Link>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-300">
              Kunden-App Daten
            </span>
            <h1 className="mt-5 text-5xl font-black tracking-normal">Geschäft bearbeiten</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Diese Daten sieht der Kunde später in der TapRadar App: Radar, Karte, Detailseite, Aktionen und Treuekarte.
            </p>
          </div>
        </div>

        {params.saved ? (
          <p className="mt-8 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 font-bold text-emerald-100">
            Geschäft gespeichert.
          </p>
        ) : null}
        {params.error ? (
          <p className="mt-8 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 font-bold text-red-100">
            Speichern nicht möglich. Bitte prüfe die Pflichtfelder.
          </p>
        ) : null}

        {business ? (
          <form action={updateBusiness} className="mt-8 grid gap-6 rounded-[28px] border border-white/10 bg-white/[0.07] p-6 sm:p-8">
            <input type="hidden" name="business_id" value={business.id} />
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Geschäftsname
                <input name="name" required defaultValue={business.name} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Kategorie
                <select name="category" required defaultValue={business.category} className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300">
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Stadt
                <input name="city" defaultValue={business.city ?? ""} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Adresse
                <input name="address" defaultValue={business.address ?? ""} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Telefon
                <input name="phone" defaultValue={business.phone ?? ""} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Website
                <input name="website" defaultValue={business.website ?? ""} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Öffnungszeiten
                <input name="opening_hours" defaultValue={business.opening_hours ?? ""} placeholder="08:00 - 20:00" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                App Symbol
                <input name="logo_emoji" defaultValue={business.logo_emoji ?? "🏪"} maxLength={4} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300 md:col-span-2">
                Beschreibung
                <textarea name="description" defaultValue={business.description ?? ""} className="min-h-28 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Sichtbarkeit in App
                <select name="public_status" defaultValue={business.public_status} className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300">
                  <option value="open">Open</option>
                  <option value="closed">Geschlossen anzeigen</option>
                  <option value="hidden">Verstecken</option>
                </select>
              </label>
            </div>
            <button className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950">
              Geschäft speichern
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.07] p-8">
            <h2 className="text-2xl font-black">Noch kein Geschäft verbunden</h2>
            <p className="mt-3 leading-7 text-slate-300">Lege zuerst ein Geschäft in Supabase an oder verbinde deinen Account als Besitzer.</p>
          </div>
        )}
      </section>
    </main>
  );
}
