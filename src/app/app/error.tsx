"use client";

import Link from "next/link";
export default function CustomerAppError({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <main className="min-h-screen bg-slate-950 px-5 py-20 text-white"><section className="mx-auto max-w-xl rounded-[32px] border border-white/10 bg-white/[0.07] p-8 text-center"><p className="text-5xl">📱</p><h1 className="mt-5 text-4xl font-black">Wallet nicht erreichbar</h1><p className="mt-4 text-slate-300">Bitte prüfe deine Verbindung und versuche es erneut.</p><button onClick={reset} className="mt-7 rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950">Erneut versuchen</button><Link href="/" className="mt-5 block font-black text-cyan-300">Zur Website</Link></section></main>; }
