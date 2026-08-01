import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type PageParams = Promise<{ slug: string }>;

export default async function StampPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: business } = await supabase
    .from("businesses")
    .select("id, name, slug, category, city, address, postal_code, opening_hours, logo_emoji, public_status")
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (!business) {
    notFound();
  }

  const { data: loyaltyCards } = await supabase
    .from("loyalty_cards")
    .select("id, title, reward_title, stamps_required")
    .eq("business_id", business.id)
    .eq("is_active", true)
    .order("created_at", { ascending: true })
    .limit(1);

  const card = loyaltyCards?.[0];
  const addressParts = [
    business.address,
    [business.postal_code, business.city].filter(Boolean).join(" "),
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-[#f7f8ff] px-5 py-8 text-slate-950 sm:px-8">
      <section className="mx-auto max-w-xl">
        <Link href="/" className="inline-flex rounded-2xl border border-slate-200 bg-white px-4 py-3 font-black text-blue-700">
          Zurück
        </Link>

        <div className="mt-8 flex items-start gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-4xl">
            {business.logo_emoji ?? "🏪"}
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-normal">{business.name}</h1>
            <p className="mt-1 text-lg text-slate-500">{business.category}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-black text-emerald-700">
                {business.public_status === "open" ? "Geöffnet" : "Geschlossen"}
              </span>
              {business.opening_hours ? (
                <span className="text-slate-500">{business.opening_hours}</span>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-bold text-slate-500">Adresse</p>
          <p className="mt-2 text-xl">{addressParts.join(", ") || "Adresse folgt"}</p>
        </div>

        <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black">Treuekarte</h2>
            <span className="text-xl text-slate-500">0 / {card?.stamps_required ?? 10}</span>
          </div>
          <div className="mt-6 grid grid-cols-5 gap-3">
            {Array.from({ length: Math.min(card?.stamps_required ?? 10, 10) }).map((_, index) => (
              <div key={index} className="aspect-square rounded-full border border-slate-200 bg-slate-50" />
            ))}
          </div>
          <button className="mt-6 w-full rounded-2xl bg-emerald-600 px-5 py-4 text-lg font-black text-white">
            Ersten Stempel holen
          </button>
        </div>

        <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
          <p className="text-sm font-black">Belohnung</p>
          <p className="mt-2 text-xl">
            {card
              ? `${card.stamps_required} Stempel → ${card.reward_title}`
              : "Treuekarte wird noch eingerichtet"}
          </p>
        </div>

        <div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 text-center">
          <p className="text-4xl">✨</p>
          <h2 className="mt-3 text-2xl font-black">Stempelbuchung kommt als nächstes</h2>
          <p className="mt-3 leading-7 text-slate-500">
            Diese Seite ist die Grundlage für QR und NFC. Im nächsten Schritt speichern wir echte Stempel pro Kunde.
          </p>
        </div>
      </section>
    </main>
  );
}
