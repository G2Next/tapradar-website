import type { Metadata } from "next";
import Link from "next/link";
import { localizedPath } from "@/i18n/config";
import { getLocale } from "@/i18n/server";
import { translateTree } from "@/i18n/translate";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | TapRadar",
  description: "Die gesuchte TapRadar-Seite existiert nicht oder wurde verschoben.",
};

export default async function NotFound() {
  const locale = await getLocale();

  return translateTree(
    <main className="flex min-h-[70vh] items-center bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <section className="mx-auto w-full max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[.25em] text-cyan-300">Fehler 404</p>
        <h1 className="mt-5 text-5xl font-black sm:text-7xl">Diese Seite ist nicht auf dem Radar.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Die gesuchte Adresse existiert nicht oder wurde verschoben. Über die Startseite finden Sie schnell zurück.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href={localizedPath(locale, "/")} className="rounded-2xl bg-cyan-300 px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-200">
            Zur Startseite
          </Link>
          <Link href={localizedPath(locale, "/kontakt")} className="rounded-2xl border border-white/15 px-6 py-4 font-black text-white transition hover:border-cyan-300/50 hover:text-cyan-300">
            Kontakt & FAQ
          </Link>
        </div>
      </section>
    </main>,
    locale,
  );
}
