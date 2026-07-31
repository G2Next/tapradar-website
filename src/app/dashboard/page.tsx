import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  let email: string | undefined;
  let business:
    | {
        name: string;
        city: string | null;
        plan: string;
      }
    | undefined;
  let loyaltyCards:
    | {
        title: string;
        reward_title: string;
        stamps_required: number;
      }[]
    | undefined;

  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    email = data.user?.email;

    if (data.user) {
      const { data: membership } = await supabase
        .from("business_members")
        .select("business:businesses(name, city, plan)")
        .eq("user_id", data.user.id)
        .eq("is_active", true)
        .maybeSingle();

      business = Array.isArray(membership?.business)
        ? membership.business[0]
        : membership?.business;

      if (business) {
        const { data: cards } = await supabase
          .from("loyalty_cards")
          .select("title, reward_title, stamps_required")
          .limit(3);

        loyaltyCards = cards ?? [];
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
          </div>
        </div>
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
          </div>
        ) : null}
        <Link href="/" className="mt-10 inline-flex font-black text-cyan-300">
          Zurück zur Website
        </Link>
      </section>
    </main>
  );
}
