import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { localizedPath } from "@/i18n/config";
import { getLocale } from "@/i18n/server";
import { translateTree } from "@/i18n/translate";

export default async function AgbPage() {
  const locale = await getLocale();
  return translateTree(
    <LegalPage title="Allgemeine Geschäftsbedingungen" locale={locale}>
      <p>TapRadar hat zwei getrennte AGB-Dokumente, je nachdem, ob Sie die App als Endkundin bzw. Endkunde nutzen oder als Unternehmen einen kostenpflichtigen Tarif abonniert haben:</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href={localizedPath(locale, "/agb-verbraucher")} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/40 hover:bg-white/10">
          <span className="block text-lg font-black text-white">Verbraucher-AGB</span>
          <span className="mt-2 block text-sm text-slate-400">Für die kostenlose TapRadar-App (Endkundinnen und Endkunden).</span>
        </Link>
        <Link href={localizedPath(locale, "/agb-geschaeftskunden")} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/40 hover:bg-white/10">
          <span className="block text-lg font-black text-white">Geschäftskunden-AGB</span>
          <span className="mt-2 block text-sm text-slate-400">Für das kostenpflichtige TapRadar-Dashboard (Bronze, Gold, Platinum).</span>
        </Link>
      </div>
    </LegalPage>, locale);
}
