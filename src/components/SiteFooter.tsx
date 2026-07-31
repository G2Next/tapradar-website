import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#010d1a] px-5 py-12 text-slate-400 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="mb-3 text-2xl font-black text-white">
            Tap<span className="text-cyan-300">Radar</span>
          </div>
          <p className="max-w-sm text-sm leading-6">
            Digitale Stempelkarte und Kundenbindung für lokale Geschäfte in Wien und Österreich.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-white">Produkt</h3>
          <div className="grid gap-3 text-sm">
            <Link href="/fuer-geschaefte" className="hover:text-cyan-300">Für Geschäfte</Link>
            <Link href="/preise" className="hover:text-cyan-300">Preise</Link>
            <Link href="/kontakt" className="hover:text-cyan-300">FAQ</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-white">Support</h3>
          <div className="grid gap-3 text-sm">
            <a href="mailto:support@tapradar.app" className="hover:text-cyan-300">support@tapradar.app</a>
            <Link href="/kontakt" className="hover:text-cyan-300">Kontakt aufnehmen</Link>
            <Link href="/impressum" className="hover:text-cyan-300">Impressum</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500">
        <p>© 2026 TapRadar. Alle Rechte vorbehalten.</p>
        <div className="flex gap-5">
          <Link href="/datenschutz" className="hover:text-cyan-300">Datenschutz</Link>
          <Link href="/agb" className="hover:text-cyan-300">AGB</Link>
          <Link href="/widerrufsbelehrung" className="hover:text-cyan-300">Widerruf</Link>
        </div>
      </div>
    </footer>
  );
}
