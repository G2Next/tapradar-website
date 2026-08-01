import Link from "next/link";
import { headers } from "next/headers";
import { StampQrCard } from "@/components/dashboard/StampQrCard";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  let email: string | undefined;
  let business:
    | {
        id: string;
        name: string;
        city: string | null;
        address: string | null;
        postal_code: string | null;
        category: string;
        plan: string;
        slug: string;
      }
    | undefined;
  let loyaltyCards:
    | {
        title: string;
        reward_title: string;
        stamps_required: number;
    }[]
    | undefined;
  let offersCount: number | undefined;
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";

  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    email = data.user?.email;

    if (data.user) {
      const { data: membership } = await supabase
        .from("business_members")
        .select("business_id")
        .eq("user_id", data.user.id)
        .eq("is_active", true)
        .maybeSingle();

      if (membership?.business_id) {
        const { data: businessData } = await supabase
          .from("businesses")
          .select("id, name, slug, city, address, postal_code, category, plan")
          .eq("id", membership.business_id)
          .maybeSingle();

        business = businessData ?? undefined;
      }

      if (business) {
        const { data: cards } = await supabase
          .from("loyalty_cards")
          .select("title, reward_title, stamps_required")
          .eq("business_id", business.id)
          .limit(3);

        loyaltyCards = cards ?? [];

        const { count } = await supabase
          .from("business_offers")
          .select("id", { count: "exact", head: true })
          .eq("business_id", business.id)
          .eq("is_active", true);

        offersCount = count ?? 0;
      }
    }
  } catch {
    email = undefined;
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <section className="mx-auto max-w-5xl">
        <span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-300">
          Dashboard
        </span>
        <h1 className="mt-6 text-5xl font-black tracking-normal">TapRadar Dashboard</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          {email
            ? `Angemeldet als ${email}.`
            : "Du bist noch nicht angemeldet. Bitte nutze den Login-Link aus deiner E-Mail oder sende dir einen neuen Link."}
        </p>
        {!email ? (
          <Link
            href="/login"
            className="mt-8 inline-flex rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950"
          >
            Zum Login
          </Link>
        ) : null}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
            <h2 className="text-xl font-black">Geschäft</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {business ? `${business.name}${business.city ? `, ${business.city}` : ""}` : "Noch kein Geschäft angelegt."}
            </p>
            {business ? (
              <Link href="/dashboard/business" className="mt-5 inline-flex font-black text-cyan-300">
                Bearbeiten
              </Link>
            ) : null}
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
            <h2 className="text-xl font-black">Plan</h2>
            <p className="mt-3 text-sm capitalize leading-6 text-slate-300">
              {business?.plan ?? "Noch nicht aktiv"}
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
            <h2 className="text-xl font-black">Treuekarten</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {loyaltyCards ? `${loyaltyCards.length} Karte(n)` : "Noch keine Datenbank verbunden."}
            </p>
            {business ? (
              <Link href="/dashboard/loyalty-cards" className="mt-5 inline-flex font-black text-cyan-300">
                Verwalten
              </Link>
            ) : null}
          </div>
        </div>
        {business ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Link
              href="/dashboard/loyalty-cards"
              className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6 transition hover:border-cyan-300/40"
            >
              <h2 className="text-xl font-black">Treuekarten verwalten</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Stempelanzahl, Kartenname und Belohnung bearbeiten.</p>
            </Link>
            <Link
              href="/dashboard/offers"
              className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6 transition hover:border-cyan-300/40"
            >
              <h2 className="text-xl font-black">Aktionen & Gutscheine</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {offersCount ?? 0} aktive Einträge für Kunden-App und Radar.
              </p>
            </Link>
          </div>
        ) : null}
        {business ? (
          <div className="mt-8">
            <StampQrCard stampUrl={`${protocol}://${host}/stamp/${business.slug}`} />
          </div>
        ) : null}
        {business ? (
          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
            <h2 className="text-xl font-black">Kunden-App Vorschau</h2>
            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.05] p-5">
              <p className="text-2xl font-black">{business.name}</p>
              <p className="mt-2 text-slate-300">
                {business.address || "Straße fehlt"}
                {business.postal_code || business.city ? `, ${[business.postal_code, business.city].filter(Boolean).join(" ")}` : ""}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-black">
                <span className="rounded-full bg-emerald-300/15 px-3 py-2 text-emerald-200">Open</span>
                <span className="rounded-full bg-cyan-300/15 px-3 py-2 text-cyan-200">{business.category}</span>
                <span className="rounded-full bg-yellow-300/15 px-3 py-2 text-yellow-200 capitalize">{business.plan}</span>
              </div>
            </div>
          </div>
        ) : null}
        {business && loyaltyCards?.length ? (
          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
            <h2 className="text-xl font-black">Aktive Treuekarten</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {loyaltyCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                  <h3 className="font-black">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {card.stamps_required} Stempel für {card.reward_title}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/dashboard/loyalty-cards" className="mt-6 inline-flex font-black text-cyan-300">
              Treuekarten bearbeiten
            </Link>
          </div>
        ) : null}
        <Link href="/" className="mt-10 inline-flex font-black text-cyan-300">
          Zurück zur Website
        </Link>
      </section>
    </main>
  );
}
