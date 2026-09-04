"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function AppErrorScreen({
  error,
  reset,
  source,
  title = "Diese Seite konnte nicht geladen werden",
  homeHref = "/",
}: {
  error: Error & { digest?: string };
  reset: () => void;
  source: string;
  title?: string;
  homeHref?: string;
}) {
  const [referenceCode, setReferenceCode] = useState(error.digest ?? "");

  useEffect(() => {
    console.error(error);
    const controller = new AbortController();
    fetch("/api/errors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source, route: window.location.pathname, message: error.message, digest: error.digest }),
      signal: controller.signal,
    }).then(response => response.ok ? response.json() : null)
      .then(result => { if (result?.referenceCode) setReferenceCode(result.referenceCode); })
      .catch(() => undefined);
    return () => controller.abort();
  }, [error, source]);

  return <main className="min-h-screen bg-slate-950 px-5 py-20 text-white">
    <section className="mx-auto max-w-xl rounded-[32px] border border-white/10 bg-white/[0.07] p-8 text-center">
      <p className="text-5xl" aria-hidden>🛠️</p>
      <h1 className="mt-5 text-4xl font-black">{title}</h1>
      <p className="mt-4 leading-7 text-slate-300">Der Fehler wurde automatisch an die geschützte Fehlerzentrale gemeldet. Deine Passwörter und Formulareingaben werden dabei nicht gespeichert.</p>
      {referenceCode ? <p className="mt-4 rounded-xl bg-white/[0.06] px-4 py-3 font-mono text-sm text-amber-200">Fehlernummer: {referenceCode}</p> : null}
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <button onClick={reset} className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950">Erneut versuchen</button>
        <Link href={homeHref} className="rounded-2xl border border-white/15 px-5 py-3 font-black text-cyan-200">Zurück</Link>
      </div>
    </section>
  </main>;
}
