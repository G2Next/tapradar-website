"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const supabase = createClient();
      await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent("/passwort-zuruecksetzen")}`,
      });
      setMessage("Falls ein Konto zu dieser E-Mail-Adresse existiert, wurde ein Link zum Zurücksetzen gesendet.");
    } catch {
      setMessage("Die Anfrage konnte gerade nicht verarbeitet werden. Bitte versuche es später erneut.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <section className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-white/[0.07] p-8 shadow-2xl shadow-black/20">
        <Link href="/login?mode=signin&next=/dashboard" className="text-sm font-black text-cyan-300">Zur Anmeldung</Link>
        <h1 className="mt-6 text-4xl font-black">Passwort vergessen</h1>
        <p className="mt-3 leading-7 text-slate-300">Wir senden dir einen sicheren Link, mit dem du ein neues Passwort festlegen kannst.</p>
        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
            E-Mail
            <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" placeholder="name@firma.at" />
          </label>
          <button disabled={isLoading} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950 disabled:opacity-60">
            {isLoading ? "Bitte warten..." : "Link senden"}
          </button>
        </form>
        {message ? <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-slate-200">{message}</p> : null}
      </section>
    </main>
  );
}
