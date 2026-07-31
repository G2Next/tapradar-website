import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  let email: string | undefined;

  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    email = data.user?.email;
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
          {["Geschäfte", "Treuekarten", "Analytics"].map((item) => (
            <div key={item} className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
              <h2 className="text-xl font-black">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Kommt im nächsten Schritt.</p>
            </div>
          ))}
        </div>
        <Link href="/" className="mt-10 inline-flex font-black text-cyan-300">
          Zurück zur Website
        </Link>
      </section>
    </main>
  );
}
