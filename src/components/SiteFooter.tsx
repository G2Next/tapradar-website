import Link from "next/link";
import { localizedPath } from "@/i18n/config";
import { getLocale } from "@/i18n/server";
import { translateTree } from "@/i18n/translate";

export async function SiteFooter() {
  const locale = await getLocale();
  return translateTree(
    <footer className="border-t border-white/10 bg-[#010d1a] px-5 py-12 text-slate-400 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="mb-3 text-2xl font-black text-white">
            Tap<span className="text-cyan-300">Radar</span>
          </div>
          <p className="max-w-sm text-sm leading-6">
            Die kostenlose App für digitale Stempelkarten, lokale Entdeckungen und Belohnungen.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-white">Für Kunden</h3>
          <div className="grid gap-3 text-sm">
            <Link href={localizedPath(locale, "/#app")} className="hover:text-cyan-300">App entdecken</Link>
            <Link href={localizedPath(locale, "/#so-funktionierts")} className="hover:text-cyan-300">So funktioniert&apos;s</Link>
            <Link href={localizedPath(locale, "/fuer-geschaefte")} className="hover:text-cyan-300">Für Geschäfte</Link>
            <Link href={localizedPath(locale, "/kontakt")} className="hover:text-cyan-300">FAQ</Link>
            <Link href="/login" className="hover:text-cyan-300">Anmelden</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-white">Support</h3>
          <div className="grid gap-3 text-sm">
            <a href="mailto:support@tapradar.app" className="hover:text-cyan-300">support@tapradar.app</a>
            <Link href={localizedPath(locale, "/kontakt")} className="hover:text-cyan-300">Kontakt aufnehmen</Link>
            <Link href={localizedPath(locale, "/impressum")} className="hover:text-cyan-300">Impressum</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500">
        <p>© 2026 TapRadar. Alle Rechte vorbehalten.</p>
        <div className="flex gap-5">
          <Link href={localizedPath(locale, "/datenschutz")} className="hover:text-cyan-300">Datenschutz</Link>
          <Link href={localizedPath(locale, "/agb")} className="hover:text-cyan-300">AGB</Link>
          <Link href={localizedPath(locale, "/widerrufsbelehrung")} className="hover:text-cyan-300">Widerruf</Link>
        </div>
      </div>
    </footer>,
    locale,
  );
}
