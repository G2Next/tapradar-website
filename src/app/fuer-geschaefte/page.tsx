import { PlanCards } from "@/components/PlanCards";
import { PlanComparisonTable } from "@/components/PlanComparisonTable";
import { Badge, PrimaryLink, SecondaryLink, SectionTitle } from "@/components/Ui";

const features = [
  ["🏷️", "Digitale Stempelkarte", "Ersetzen Sie Papierkarten durch ein modernes, fälschungssicheres System."],
  ["📊", "Echtzeit-Analytik", "Sehen Sie, wann Kunden kommen, wie oft sie wiederkehren und welche Kampagnen wirken."],
  ["⭐", "Verifizierte Bewertungen", "Nur echte Kunden können Bewertungen hinterlassen."],
  ["🪟", "QR-Schaufenster-Plakat", "Passanten sehen Bewertungen, Öffnungszeiten und Angebote ohne App."],
  ["🔔", "Push-Benachrichtigungen", "Informieren Sie Kunden direkt über Angebote und Aktionen."],
  ["👥", "Mitarbeiter-System", "Bis zu 15 Mitarbeiter mit eigenem PIN, sicher und nachvollziehbar."],
];

export default function BusinessPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] text-white">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Badge>TapRadar für Geschäfte</Badge>
          <h1 className="mt-6 text-5xl font-black leading-tight tracking-normal sm:text-6xl">Mehr Stammkunden. Weniger Aufwand.</h1>
          <p className="mt-4 text-xl font-black text-cyan-300">Ab 9,99 € pro Monat.</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            TapRadar ist die digitale Kundenbindungsplattform für lokale Geschäfte in Wien und Österreich. Mit einem NFC-Tag am Kassentisch verwandeln Sie jeden Besuch in Kundenbindung, ohne teure Hardware und ohne komplizierte Software.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryLink href="#tarife">Tarife ansehen</PrimaryLink>
            <SecondaryLink href="#wie-funktioniert">So funktioniert es</SecondaryLink>
          </div>
        </div>
        <aside className="rounded-[28px] border border-white/10 bg-white/[0.07] p-8">
          <h2 className="text-xl font-black">Alle Pläne beinhalten</h2>
          <ul className="mt-6 grid gap-4 text-sm leading-6 text-slate-300">
            {["NFC-Tag Support & QR-Backup", "Digitale Stempelkarte", "Verifizierte Bewertungen", "QR-Schaufenster-Plakat", "Basis-Statistik", "Mitarbeiter-PIN System"].map((item) => (
              <li key={item} className="flex gap-3 border-b border-white/10 pb-3">
                <span className="font-black text-cyan-300">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="wie-funktioniert" className="bg-white/[0.03] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle badge="So funktioniert es" title="In weniger als 10 Sekunden.">
            Kunde tappt NFC oder scannt QR. Der Stempel wird gespeichert. Die Belohnung wird direkt auf dem Handy sichtbar.
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["📱", "Kunde tappt NFC", "Smartphone ans NFC-Tag halten, Stempel wird sofort vergeben."],
              ["⭐", "Fortschritt gespeichert", "Alle Stempel werden in der App gespeichert und verifiziert."],
              ["🎁", "Belohnung einlösen", "Kunde zeigt QR-Code, Sie bestätigen, fertig in Sekunden."],
            ].map(([icon, title, text]) => (
              <article key={title} className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.07] p-8 text-center">
                <span className="text-4xl">{icon}</span>
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionTitle badge="Was Sie bekommen" title="Alles für moderne Kundenbindung." />
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(([icon, title, text]) => (
            <article key={title} className="rounded-[28px] border border-white/10 bg-white/[0.07] p-8">
              <span className="text-4xl">{icon}</span>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tarife" className="scroll-mt-24 bg-white/[0.03] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle badge="Tarifvergleich" title="Alle Funktionen im Überblick." />
          <PlanComparisonTable />
          <div className="mt-20">
            <SectionTitle badge="Preise" title="Monatlich kündbar. Schnell startklar." />
            <PlanCards />
          </div>
        </div>
      </section>
    </main>
  );
}
