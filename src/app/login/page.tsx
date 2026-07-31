"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState<"signin" | "signup" | "magic">("signin");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const supabase = createClient();
      const { error } =
        mode === "magic"
          ? await supabase.auth.signInWithOtp({
              email,
              options: {
                emailRedirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
              },
            })
          : mode === "signup"
            ? await supabase.auth.signUp({
                email,
                password,
                options: {
                  emailRedirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
                },
              })
            : await supabase.auth.signInWithPassword({
                email,
                password,
              });

      if (error) {
        setMessage(error.message);
        return;
      }

      if (mode === "magic") {
        setMessage("Login-Link wurde gesendet. Bitte prüfe dein E-Mail-Postfach.");
        return;
      }

      if (mode === "signup") {
        setMessage("Konto wurde erstellt. Falls Supabase eine Bestätigung verlangt, prüfe bitte dein E-Mail-Postfach.");
        return;
      }

      window.location.href = "/dashboard";
    } catch {
      setMessage("Supabase ist noch nicht verbunden. Bitte trage zuerst die Umgebungsvariablen ein.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <section className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-white/[0.07] p-8 shadow-2xl shadow-black/20">
        <Link href="/" className="text-sm font-black text-cyan-300">
          Zurück zur Website
        </Link>
        <h1 className="mt-6 text-4xl font-black tracking-normal">Anmelden</h1>
        <p className="mt-3 leading-7 text-slate-300">
          Melde dich mit E-Mail und Passwort an. Für Tests kannst du auch ein neues Konto erstellen.
        </p>
        <div className="mt-7 grid grid-cols-3 rounded-2xl border border-white/10 bg-white/[0.05] p-1 text-sm font-black">
          {[
            ["signin", "Login"],
            ["signup", "Neu"],
            ["magic", "Link"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setMode(value as "signin" | "signup" | "magic");
                setMessage("");
              }}
              className={`rounded-xl px-3 py-2 transition ${
                mode === value ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
            E-Mail
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300"
              placeholder="name@firma.at"
            />
          </label>
          {mode !== "magic" ? (
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
              Passwort
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300"
                placeholder="Mindestens 6 Zeichen"
              />
            </label>
          ) : null}
          <button
            disabled={isLoading}
            className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading
              ? "Bitte warten..."
              : mode === "magic"
                ? "Login-Link senden"
                : mode === "signup"
                  ? "Konto erstellen"
                  : "Anmelden"}
          </button>
        </form>
        {message ? <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-slate-200">{message}</p> : null}
      </section>
    </main>
  );
}
