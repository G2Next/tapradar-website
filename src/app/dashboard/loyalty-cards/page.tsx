import Link from "next/link";
import { getDashboardContext } from "@/lib/dashboard";
import { createLoyaltyCard, updateLoyaltyCard } from "./actions";

type SearchParams = Promise<{ saved?: string; error?: string }>;

export default async function LoyaltyCardsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const { supabase, user, organizationId } = await getDashboardContext();

  if (!user) {
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

  const { data: cards } = organizationId
    ? await supabase
        .from("loyalty_cards")
        .select("id, title, reward_title, earning_rule, verification_instructions, stamps_required, is_active, location_id")
        .eq("organization_id", organizationId)
        .order("created_at", { ascending: true })
    : { data: [] };
  const { data: locations } = organizationId
    ? await supabase.from("locations").select("id, name").eq("organization_id", organizationId).eq("is_active", true).order("is_primary", { ascending: false })
    : { data: [] };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <section className="mx-auto max-w-6xl">
        <Link href="/dashboard" className="font-black text-cyan-300">
          Zurück zum Dashboard
        </Link>
        <div className="mt-6">
          <span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-300">
            Kunden-App Belohnungen
          </span>
          <h1 className="mt-5 text-5xl font-black tracking-normal">Treuekarten verwalten</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Lege fest, wie viele Stempel Kunden sammeln und welche Belohnung sie in der App sehen.
          </p>
        </div>

        {params.saved ? (
          <p className="mt-8 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 font-bold text-emerald-100">
            Treuekarte gespeichert.
          </p>
        ) : null}
        {params.error ? (
          <p className="mt-8 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 font-bold text-red-100">
            Speichern nicht möglich. Bitte prüfe die Pflichtfelder.
          </p>
        ) : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-5">
            {(cards ?? []).map((card) => (
              <form
                key={card.id}
                action={updateLoyaltyCard}
                className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6"
              >
                <input type="hidden" name="card_id" value={card.id} />
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                    Kartenname
                    <input name="title" required defaultValue={card.title} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
                  </label>
                  <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                    Belohnung
                    <input name="reward_title" required defaultValue={card.reward_title} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
                  </label>
                  <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300 md:col-span-2">Voraussetzung pro Stempel<input name="earning_rule" required defaultValue={card.earning_rule ?? "1 teilnahmeberechtigtes Produkt kaufen"} placeholder="z. B. 1 Pizza kaufen = 1 Stempel" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white" /></label>
                  <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300 md:col-span-2">Prüfung im Geschäft<textarea name="verification_instructions" required defaultValue={card.verification_instructions ?? "Mitarbeiter prüft den Kaufbeleg und vergibt den Stempel über das TapRadar-Gerät."} placeholder="Wie prüft das Personal den Kauf?" className="min-h-20 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white" /></label>
                  <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                    Stempelanzahl
                    <input name="stamps_required" type="number" min="1" max="50" required defaultValue={card.stamps_required} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
                  </label>
                  <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                    Filiale
                    <select name="location_id" defaultValue={card.location_id ?? ""} className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case text-white">
                      <option value="">Alle Filialen</option>
                      {(locations ?? []).map((location) => <option key={location.id} value={location.id}>{location.name}</option>)}
                    </select>
                  </label>
                  <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-slate-200">
                    <input name="is_active" type="checkbox" defaultChecked={card.is_active} className="h-5 w-5 accent-cyan-300" />
                    In Kunden-App aktiv
                  </label>
                </div>
                <button className="mt-5 rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950">
                  Karte speichern
                </button>
              </form>
            ))}

            {cards?.length === 0 ? (
              <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-8">
                <h2 className="text-2xl font-black">Noch keine Treuekarte</h2>
                <p className="mt-3 leading-7 text-slate-300">Lege rechts deine erste digitale Stempelkarte an.</p>
              </div>
            ) : null}
          </div>

          <form action={createLoyaltyCard} className="h-fit rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
            <h2 className="text-2xl font-black">Neue Treuekarte</h2>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Kartenname
                <input name="title" required placeholder="Kaffee & Genuss" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Belohnung
                <input name="reward_title" required placeholder="Gratis Kaffee" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">Voraussetzung pro Stempel<input name="earning_rule" required placeholder="1 Pizza kaufen = 1 Stempel" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white" /></label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">Prüfung im Geschäft<textarea name="verification_instructions" required defaultValue="Mitarbeiter prüft den Kaufbeleg und vergibt den Stempel über das TapRadar-Gerät." className="min-h-20 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white" /></label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Stempelanzahl
                <input name="stamps_required" type="number" min="1" max="50" required defaultValue={10} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
                Filiale
                <select name="location_id" className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case text-white">
                  <option value="">Alle Filialen</option>
                  {(locations ?? []).map((location) => <option key={location.id} value={location.id}>{location.name}</option>)}
                </select>
              </label>
              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-slate-200">
                <input name="is_active" type="checkbox" defaultChecked className="h-5 w-5 accent-cyan-300" />
                Sofort aktiv
              </label>
              <button className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950">
                Treuekarte anlegen
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
