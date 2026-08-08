import Link from "next/link";
import { redirect } from "next/navigation";
import { LEGAL_VERSIONS, hasCurrentLegalAcceptance } from "@/lib/legal-consent";
import { createClient } from "@/lib/supabase/server";
import { safeNextPath } from "@/lib/validation";
import { acceptAccountLegal } from "./actions";

type SearchParams = Promise<{ next?: string; error?: string }>;

export default async function LegalConsentPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const next = safeNextPath(params.next ?? null, "/dashboard");
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect(`/login?next=${encodeURIComponent(next)}`);
  if (await hasCurrentLegalAcceptance(data.user.id, "account")) redirect(next);

  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-16 text-white sm:px-8">
    <section className="mx-auto max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/25 sm:p-9">
      <span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200">Rechtliche Bestätigung</span>
      <h1 className="mt-6 text-4xl font-black sm:text-5xl">Bevor du TapRadar verwendest</h1>
      <p className="mt-4 leading-7 text-slate-300">Bitte bestätige die aktuellen Dokumente für dein Konto. Diese Bestätigung gilt auch nach einer Anmeldung mit Google, Apple oder Passkey.</p>
      {params.error ? <p role="alert" className="mt-5 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-red-100">Die Bestätigung konnte nicht gespeichert werden. Bitte markiere beide Felder und versuche es erneut.</p> : null}
      <form action={acceptAccountLegal} className="mt-7 grid gap-4">
        <input type="hidden" name="next" value={next}/>
        <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 leading-6">
          <input name="terms_accepted" type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-cyan-300"/>
          <span>Ich akzeptiere die <Link href="/agb" target="_blank" rel="noopener noreferrer" className="font-black text-cyan-300 underline">Allgemeinen Geschäftsbedingungen</Link> (Version {LEGAL_VERSIONS.terms}).</span>
        </label>
        <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 leading-6">
          <input name="privacy_acknowledged" type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-cyan-300"/>
          <span>Ich habe die <Link href="/datenschutz" target="_blank" rel="noopener noreferrer" className="font-black text-cyan-300 underline">Datenschutzerklärung</Link> (Version {LEGAL_VERSIONS.privacy}) gelesen.</span>
        </label>
        <p className="text-sm leading-6 text-slate-400">Informationen für Verbraucher findest du zusätzlich in der <Link href="/widerrufsbelehrung" target="_blank" rel="noopener noreferrer" className="font-bold text-cyan-300 underline">Widerrufsbelehrung</Link>. Eine Zustimmung zu optionaler Werbung ist hiervon getrennt.</p>
        <button className="mt-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 text-lg font-black text-slate-950">Bestätigen und fortfahren</button>
      </form>
    </section>
  </main>;
}
