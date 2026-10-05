import type { Metadata } from "next";
import { Badge, PrimaryLink, SecondaryLink, SectionTitle } from "@/components/Ui";
import { localizedPath } from "@/i18n/config";
import { getLocale } from "@/i18n/server";
import { translateTree } from "@/i18n/translate";
import { createPublicPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPublicPageMetadata(
    locale,
    "/gewinnspiele",
    "Gewinnspiele & Glücksrad für lokale Geschäfte | TapRadar",
    "Mit TapRadar Aufgaben-Gewinnspiele und Glücksräder erstellen, Bestände automatisch steuern und Kunden mit digitalen Belohnungen zurückbringen.",
  );
}

const customerSteps = [
  ["01", "Gewinnspiel auswählen", "In der TapRadar-App sieht der Kunde laufende Aktionen von Geschäften in seiner Nähe."],
  ["02", "Bedingungen akzeptieren", "Vor der Teilnahme werden Zeitraum, Voraussetzungen und Gewinne transparent angezeigt."],
  ["03", "Mitmachen", "Je nach Aktion erledigt der Kunde Aufgaben oder dreht das Glücksrad selbst in der App."],
  ["04", "Gewinn erhalten", "Die Belohnung landet automatisch unter Karten bei Gutscheinen und Aktionen."],
];

const merchantBenefits = [
  ["📦", "Bestand statt Bauchgefühl", "Menge und Einheiten pro Gewinner werden festgelegt. Ausverkaufte Gewinne werden nicht mehr ausgegeben."],
  ["🔐", "Sichere Ziehung", "Das Ergebnis des Glücksrads wird serverseitig bestimmt und gespeichert – nicht manipulierbar im Smartphone."],
  ["🎁", "Flexible Gewinne", "Produkte, Dienstleistungen, prozentuale Rabatte und Gutscheine lassen sich frei kombinieren."],
  ["📈", "Klare Übersicht", "Teilnahmen, abgeschlossene Aktionen, Drehs und verbleibende Mengen bleiben im Merchant-Dashboard sichtbar."],
];

export default async function ContestsMarketingPage() {
  const locale = await getLocale();
  return translateTree(
    <main className="overflow-hidden bg-[radial-gradient(circle_at_top_right,#581c87_0%,#10203b_40%,#020617_100%)] text-white">
      <section className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-purple-400/15 blur-3xl" />
        <div className="relative z-10">
          <Badge>Neu in TapRadar</Badge>
          <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl">Mehr Besuche mit <span className="text-purple-300">Gewinnspielen.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Geschäfte erstellen eine garantierte Aufgaben-Challenge oder ein Glücksrad. Kunden machen direkt in der App mit und erhalten ihre Belohnung automatisch.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryLink href={localizedPath(locale, "/registrieren")}>Als Geschäft starten</PrimaryLink>
            <SecondaryLink href="#modelle">Modelle ansehen</SecondaryLink>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-300"><span>✓ Kostenlose Teilnahme</span><span>✓ Transparente Bedingungen</span><span>✓ Bestand geschützt</span></div>
        </div>
        <WheelPreview />
      </section>

      <section id="modelle" className="border-y border-white/10 bg-white/[0.035] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle badge="Zwei Modelle" title="Passend für deine Aktion.">Der Händler entscheidet, ob alle erfolgreichen Teilnehmer gewinnen oder das Glücksrad aus einem vorher festgelegten Bestand zieht.</SectionTitle>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[32px] border border-emerald-300/20 bg-emerald-300/[0.07] p-8 sm:p-10"><span className="text-5xl">✓</span><p className="mt-6 text-xs font-black uppercase tracking-[.2em] text-emerald-200">Garantierter Gewinn</p><h2 className="mt-3 text-3xl font-black">Aufgaben-Checkliste</h2><p className="mt-4 leading-7 text-slate-300">Der Kunde erfüllt alle festgelegten Aufgaben und bekommt die Belohnung sicher. Ideal für Bewertungen, Social-Media-Aktionen oder andere In-App-Aufgaben.</p><ul className="mt-6 grid gap-3 text-sm text-slate-300"><li>✓ Klarer Fortschritt je Aufgabe</li><li>✓ Social-Aufgaben transparent als Selbstauskunft</li><li>✓ Automatische Belohnung nach Abschluss</li></ul></article>
            <article className="rounded-[32px] border border-purple-300/25 bg-purple-300/[0.09] p-8 sm:p-10"><span className="text-5xl">🎡</span><p className="mt-6 text-xs font-black uppercase tracking-[.2em] text-purple-200">Spielerisches Erlebnis</p><h2 className="mt-3 text-3xl font-black">Glücksrad</h2><p className="mt-4 leading-7 text-slate-300">Der Kunde dreht selbst. Die tatsächliche Ziehung erfolgt sicher auf dem Server. Gewinnmengen und die Anzahl verfügbarer Drehs bestimmen automatisch die Verteilung.</p><ul className="mt-6 grid gap-3 text-sm text-slate-300"><li>✓ Ein sicher gespeichertes Ergebnis pro Teilnahme</li><li>✓ Mehrere Gewinne und „Leider nichts“ möglich</li><li>✓ Keine Ausgabe nach aufgebrauchtem Bestand</li></ul></article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><SectionTitle badge="Für Geschäfte" title="Volle Kontrolle über jeden Gewinn." /><div className="grid gap-5 sm:grid-cols-2">{merchantBenefits.map(([icon, title, text]) => <article key={title} className="rounded-[26px] border border-white/10 bg-white/[0.06] p-7"><span className="text-4xl">{icon}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></article>)}</div></section>

      <section className="bg-white/[0.03] px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><SectionTitle badge="In der Kunden-App" title="Vom Entdecken bis zur Belohnung.">Der gesamte Ablauf bleibt in TapRadar und ist für den Kunden jederzeit nachvollziehbar.</SectionTitle><div className="grid gap-5 md:grid-cols-4">{customerSteps.map(([number, title, text]) => <article key={number} className="rounded-[26px] border border-white/10 bg-slate-950/45 p-6"><strong className="text-4xl font-black text-purple-300">{number}</strong><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8"><div className="rounded-[36px] border border-purple-300/20 bg-gradient-to-br from-purple-300/[0.13] to-cyan-300/[0.08] p-9 sm:p-14"><p className="text-sm font-black uppercase tracking-[.2em] text-purple-200">Bereit für deine erste Aktion?</p><h2 className="mt-5 text-4xl font-black sm:text-5xl">Gewinne festlegen. Veröffentlichen. Kunden begeistern.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">Nach der Registrierung kannst du dein Gewinnspiel im Merchant-Dashboard erstellen, Teilnahmebedingungen hinterlegen und die verfügbaren Mengen festlegen.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><PrimaryLink href={localizedPath(locale, "/registrieren")}>Geschäft registrieren</PrimaryLink><SecondaryLink href={localizedPath(locale, "/login")}>Zum Merchant-Login</SecondaryLink></div></div><p className="mt-6 text-xs leading-5 text-slate-500">Gewinnspiele müssen kostenlos zugänglich sein. Der Veranstalter ist für vollständige Teilnahmebedingungen und die rechtliche Prüfung seiner Aktion verantwortlich.</p></section>
    </main>,
    locale,
  );
}

function WheelPreview() {
  const colors = ["#facc15", "#f97316", "#22c55e", "#0ea5e9", "#6366f1", "#a855f7", "#ef4444", "#14b8a6"];
  return <div className="relative z-10 flex min-h-[480px] items-center justify-center"><div className="absolute h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" /><div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full border-[16px] border-amber-300 bg-slate-900 shadow-2xl shadow-purple-950/60 sm:h-[420px] sm:w-[420px]"><div className="absolute -top-9 z-20 h-0 w-0 border-x-[28px] border-t-[54px] border-x-transparent border-t-red-500 drop-shadow-lg" /><div className="absolute inset-2 overflow-hidden rounded-full">{colors.map((color, index) => <span key={color} className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-top-left" style={{ backgroundColor: color, transform: `rotate(${index * 45}deg) skewY(-45deg)`, transformOrigin: "0 0" }} />)}</div><div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-8 border-amber-200 bg-amber-400 text-4xl shadow-xl">★</div></div></div>;
}
