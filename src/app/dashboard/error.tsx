"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function DashboardError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  const configurationMissing = error.message.includes("Supabase environment variables");
  return <main className="min-h-screen bg-slate-950 px-5 py-20 text-white"><section className="mx-auto max-w-xl rounded-[32px] border border-white/10 bg-white/[0.07] p-8 text-center"><p className="text-5xl">{configurationMissing ? "⚙️" : "🛠️"}</p><h1 className="mt-5 text-4xl font-black">{configurationMissing ? "Datenbank noch nicht verbunden" : "Dashboard konnte nicht geladen werden"}</h1><p className="mt-4 leading-7 text-slate-300">{configurationMissing ? "Für die lokale Entwicklung müssen die Supabase-Werte aus .env.example in .env.local eingetragen werden." : "Bitte versuche es erneut. Wenn der Fehler bleibt, kontaktiere den TapRadar-Support."}</p><div className="mt-7 flex flex-wrap justify-center gap-3"><button onClick={reset} className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950">Erneut versuchen</button><Link href="/" className="rounded-2xl border border-white/15 px-5 py-3 font-black text-cyan-200">Zur Website</Link></div></section></main>;
}
