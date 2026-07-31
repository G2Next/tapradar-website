import Link from "next/link";
import { getCurrentBusinessId } from "@/lib/dashboard";
import { createOffer, updateOffer } from "./actions";

type SearchParams = Promise<{ saved?: string; error?: string }>;

const offerTypes = [
  { value: "aktion", label: "Aktion", icon: "🔥" },
  { value: "gutschein", label: "Gutschein", icon: "🎟️" },
  { value: "belohnung", label: "Belohnung", icon: "🎁" },
];

function toDateTimeLocal(value: string | null) {
  if (!value) return "";
  return value.slice(0, 16);
}

export default async function OffersPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const { supabase, user, businessId } = await getCurrentBusinessId();

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

  const { data: offers } = businessId
    ? await supabase
        .from("business_offers")
        .select("id, title, description, offer_type, starts_at, ends_at, is_active")
        .eq("business_id", businessId)
        .order("created_at", { ascending: false })
    : { data: [] };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <section className="mx-auto max-w-6xl">
        <Link href="/dashboard" className="font-black text-cyan-300">
          Zurück zum Dashboard
        </Link>
        <div className="mt-6">
          <span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-300">
            Kunden-App Angebote
          </span>
          <h1 className="mt-5 text-5xl font-black tracking-normal">Aktionen & Gutscheine</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Diese Inhalte erscheinen später in der Kunden-App auf der Geschäftsseite und im Radar-Filter.
          </p>
        </div>

        {params.saved ? (
          <p className="mt-8 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 font-bold text-emerald-100">
            Eintrag gespeichert.
          </p>
        ) : null}
        {params.error ? (
          <p className="mt-8 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 font-bold text-red-100">
            Speichern nicht möglich. Bitte prüfe Titel und Geschäft.
          </p>
        ) : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-5">
            {(offers ?? []).map((offer) => {
              const currentType = offerTypes.find((type) => type.value === offer.offer_type);

              return (
                <form
                  key={offer.id}
                  action={updateOffer}
                  className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6"
                >
                  <input type="hidden" name="offer_id" value={offer.id} />
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-white/[0.08] px-3 py-2 text-sm font-black text-cyan-200">
                      {currentType?.icon ?? "🔥"} {currentType?.label ?? "Aktion"}
                    </span>
                    <span className={offer.is_active ? "text-sm font-black text-emerald-200" : "text-sm font-black text-slate-400"}>
                      {offer.is_active ? "Aktiv" : "Inaktiv"}
                    </span>
                  </div>
                  <OfferFields offer={offer} />
                  <button className="mt-5 rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950">
                    Eintrag speichern
                  </button>
                </form>
              );
            })}

            {offers?.length === 0 ? (
              <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-8">
                <h2 className="text-2xl font-black">Noch keine Aktion</h2>
                <p className="mt-3 leading-7 text-slate-300">Lege rechts dein erstes Angebot, Gutschein oder Belohnungs-Highlight an.</p>
              </div>
            ) : null}
          </div>

          <form action={createOffer} className="h-fit rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
            <h2 className="text-2xl font-black">Neuer Eintrag</h2>
            <div className="mt-5">
              <OfferFields />
              <button className="mt-5 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950">
                Eintrag anlegen
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function OfferFields({
  offer,
}: {
  offer?: {
    title: string;
    description: string | null;
    offer_type: string;
    starts_at: string | null;
    ends_at: string | null;
    is_active: boolean;
  };
}) {
  return (
    <div className="grid gap-4">
      <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
        Typ
        <select name="offer_type" defaultValue={offer?.offer_type ?? "aktion"} className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300">
          {offerTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.icon} {type.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
        Titel
        <input name="title" required defaultValue={offer?.title ?? ""} placeholder="Sommer-Aktion" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
      </label>
      <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
        Beschreibung
        <textarea name="description" defaultValue={offer?.description ?? ""} placeholder="Was sieht der Kunde in der App?" className="min-h-24 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
          Start
          <input name="starts_at" type="datetime-local" defaultValue={toDateTimeLocal(offer?.starts_at ?? null)} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
        </label>
        <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
          Ende
          <input name="ends_at" type="datetime-local" defaultValue={toDateTimeLocal(offer?.ends_at ?? null)} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" />
        </label>
      </div>
      <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-slate-200">
        <input name="is_active" type="checkbox" defaultChecked={offer?.is_active ?? true} className="h-5 w-5 accent-cyan-300" />
        In Kunden-App aktiv
      </label>
    </div>
  );
}
