import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type PageParams = Promise<{ slug: string }>;

export default async function StampPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: business } = await supabase
    .from("organizations")
    .select("id, name, slug, category, logo_emoji, public_status")
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (!business) {
    notFound();
  }

  const [{ data: loyaltyCards }, { data: location }] = await Promise.all([supabase
    .from("loyalty_cards")
    .select("id, title, reward_title, stamps_required")
    .eq("organization_id", business.id)
    .eq("is_active", true)
    .order("created_at", { ascending: true })
    .limit(1), supabase.from("locations").select("id, name, city, address, postal_code, opening_hours, public_status").eq("organization_id", business.id).eq("is_primary", true).eq("is_active", true).maybeSingle()]);

  const card = loyaltyCards?.[0];
  const addressParts = [
    location?.address,
    [location?.postal_code, location?.city].filter(Boolean).join(" "),
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-10 text-white sm:px-8">
      <section className="mx-auto max-w-xl">
        <Link href="/" className="inline-flex rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 font-black text-cyan-300">
          Zurück
        </Link>

        <div className="mt-8 flex items-start gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.08] text-4xl">
            {business.logo_emoji ?? "🏪"}
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-normal">{business.name}</h1>
            <p className="mt-1 text-lg text-slate-300">{business.category}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-sm font-black text-emerald-200">
                {location?.public_status === "open" ? "Geöffnet" : "Geschlossen"}
              </span>
              {location ? <span className="text-slate-300">{location.name}</span> : null}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-bold text-slate-400">Adresse</p>
          <p className="mt-2 text-xl text-white">{addressParts.join(", ") || "Adresse folgt"}</p>
        </div>

        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black">Treuekarte</h2>
            <span className="text-xl text-slate-300">0 / {card?.stamps_required ?? 10}</span>
          </div>
          <div className="mt-6 grid grid-cols-5 gap-3">
            {Array.from({ length: Math.min(card?.stamps_required ?? 10, 10) }).map((_, index) => (
              <div key={index} className="aspect-square rounded-full border border-white/15 bg-white/[0.05]" />
            ))}
          </div>
          <p className="mt-6 rounded-2xl bg-emerald-500/15 px-5 py-4 text-center font-black text-emerald-100">Stempel werden über den sicheren QR-/NFC-Code der Filiale gebucht.</p>
        </div>

        <div className="mt-6 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-5 text-amber-100">
          <p className="text-sm font-black text-amber-200">Belohnung</p>
          <p className="mt-2 text-xl">
            {card
              ? `${card.stamps_required} Stempel → ${card.reward_title}`
              : "Treuekarte wird noch eingerichtet"}
          </p>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.07] p-6 text-center">
          <p className="text-4xl">✨</p>
          <h2 className="mt-3 text-2xl font-black">Sicheres Stempeln aktiv</h2>
          <p className="mt-3 leading-7 text-slate-300">
            Jeder Stempel wird unveränderlich protokolliert, gegen Doppelbuchungen geschützt und mit Filiale und Gerät verknüpft.
          </p>
        </div>
      </section>
    </main>
  );
}
