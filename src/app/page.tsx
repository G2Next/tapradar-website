import { PlanCards } from "@/components/PlanCards";
import { Badge, PrimaryLink, SecondaryLink, SectionTitle } from "@/components/Ui";

const benefits = [
  ["📱", "Digital statt Papier", "Treuekarten direkt in der TapRadar App, immer dabei und nie vergessen."],
  ["⚡", "Schnell sammeln", "QR-Code scannen oder NFC nutzen und Stempel sofort erhalten."],
  ["🎁", "Belohnungen erhalten", "Stempel sammeln und Rewards direkt in der App einlösen."],
];

const steps = [
  ["01", "Geschäft besuchen", "Besuche ein teilnehmendes lokales Geschäft in deiner Nähe."],
  ["02", "Stempel sammeln", "Scanne den QR-Code oder nutze NFC direkt an der Kasse."],
  ["03", "Belohnung sichern", "Erreiche dein Ziel und erhalte deine Prämie sofort."],
];

export default function Home() {
  return (
    <main className="bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] text-white">
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge>Digitale Treuekarten-App</Badge>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-none tracking-normal sm:text-7xl lg:text-8xl">
            Sammeln. Belohnen. Entdecken.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            Mit TapRadar sammelst du digitale Stempel bei lokalen Geschäften und erhältst exklusive Belohnungen, einfach per QR-Code oder NFC.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <SecondaryLink href="/kontakt">App Store bald verfügbar</SecondaryLink>
            <SecondaryLink href="/kontakt">Google Play bald verfügbar</SecondaryLink>
          </div>
          <p className="mt-5 text-sm text-slate-500">Download bald verfügbar.</p>
        </div>

        <div className="relative flex min-h-[520px] items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="relative w-[285px] rotate-3 rounded-[44px] border-[10px] border-slate-950 bg-gradient-to-b from-slate-50 to-blue-100 p-6 text-slate-900 shadow-2xl shadow-black/50">
            <div className="mx-auto mb-9 h-2 w-20 rounded-full bg-slate-900" />
            <h2 className="text-xl font-black">Meine Stempelkarte</h2>
            <p className="mt-1 text-sm text-slate-500">Kaffee & Genuss</p>
            <div className="my-6 grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="flex aspect-square items-center justify-center rounded-full border-2 border-dashed border-cyan-500 text-lg font-black text-cyan-600"
                >
                  {index < 5 ? "✓" : ""}
                </div>
              ))}
            </div>
            <div className="rounded-[22px] bg-slate-900 p-5 text-white">
              <p className="text-xs text-cyan-100/70">Deine Belohnung</p>
              <strong className="mt-2 block text-xl">Gratis Kaffee</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionTitle badge="Warum TapRadar?" title="Alle Treuekarten in einer App.">
          Keine Papierkarten mehr. Keine verlorenen Stempel. Alles digital und einfach.
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map(([icon, title, text]) => (
            <article key={title} className="rounded-[28px] border border-white/10 bg-white/[0.07] p-8">
              <span className="text-4xl">{icon}</span>
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle badge="So funktioniert's" title="In 3 Schritten zur Belohnung." />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <article key={number} className="rounded-[28px] border border-white/10 bg-white/[0.07] p-8">
                <strong className="text-4xl font-black text-cyan-300">{number}</strong>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionTitle badge="Für lokale Geschäfte" title="Mehr Stammkunden. Weniger Aufwand.">
          Digitale Treuekarten, Kampagnen und Kundenbindung für Betriebe in Österreich.
        </SectionTitle>
        <PlanCards />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="rounded-[32px] border border-white/15 bg-gradient-to-r from-cyan-300/15 to-blue-500/15 p-8 sm:p-12 md:flex md:items-center md:justify-between md:gap-10">
          <div>
            <Badge>Für Geschäfte</Badge>
            <h2 className="mt-5 text-4xl font-black tracking-normal text-white sm:text-5xl">Betreibst du ein Geschäft?</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Mit TapRadar erreichst du mehr Stammkunden durch digitale Treuekarten, Kampagnen und Kundenbindung.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <PrimaryLink href="/fuer-geschaefte">Für Geschäfte ansehen</PrimaryLink>
          </div>
        </div>
      </section>
    </main>
  );
}
