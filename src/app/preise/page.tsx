import { PlanCards } from "@/components/PlanCards";
import { PrimaryLink, SecondaryLink, SectionTitle } from "@/components/Ui";
import { Fragment } from "react";

const comparisonSections = [
  {
    title: "Grundfunktionen",
    rows: [
      ["NFC/QR Stempelung", "✓", "✓", "✓"],
      ["Kundenbelohnung vergeben", "✓", "✓", "✓"],
      ["QR-Schaufenster Download", "✓", "✓", "✓"],
      ["Basis-Statistik heute/Woche", "✓", "✓", "✓"],
    ],
  },
  {
    title: "Mitarbeiter",
    rows: [
      ["Max. Mitarbeiter", "1", "5", "15"],
      ["Mitarbeiter-PIN System", "✓", "✓", "✓"],
      ["Mitarbeiter-Aktivitätslog", "✓", "✓", "✓"],
    ],
  },
  {
    title: "Werbung & Medien",
    rows: [
      ["Bild/PDF Upload Werbung", "–", "2× /Monat", "4× /Monat"],
      ["Kampagnen", "–", "2× /Monat", "4× /Monat"],
      ["Proximity-Werbung GPS", "–", "–", "✓"],
    ],
  },
  {
    title: "Benachrichtigungen",
    rows: [
      ["Push-Benachrichtigungen", "–", "–", "✓"],
      ["Retargeting 30 Tage", "–", "–", "✓"],
      ["Kampagnen-Countdown Push", "–", "–", "✓"],
    ],
  },
  {
    title: "Analytik & Berichte",
    rows: [
      ["Basis-Statistik", "✓", "✓", "✓"],
      ["Erweiterte Analytik", "–", "–", "✓"],
      ["Werbe-Analytik CTR/CVR", "–", "–", "✓"],
      ["Wöchentlicher E-Mail-Bericht", "–", "✓", "✓"],
      ["Monatlicher PDF-Bericht", "–", "–", "✓"],
    ],
  },
  {
    title: "Support",
    rows: [
      ["Standard-Support", "✓", "✓", "✓"],
      ["White-Label QR-Plakat", "–", "–", "✓"],
      ["Prioritäts-Support 24h", "–", "–", "✓"],
    ],
  },
];

function ComparisonValue({ value }: { value: string }) {
  if (value === "✓") {
    return <span className="font-black text-cyan-300" aria-label="Enthalten">✓</span>;
  }

  if (value === "–") {
    return <span className="text-slate-500" aria-label="Nicht enthalten">–</span>;
  }

  return value;
}

export default function PricingPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle badge="Preise" title="Transparente Pakete.">
          Monatlich kündbar, kein Jahresvertrag und keine versteckten Kosten.
        </SectionTitle>
        <div className="overflow-x-auto rounded-3xl border border-white/15 shadow-2xl shadow-black/10">
          <table className="w-full min-w-[760px] border-collapse bg-white/[0.05] text-sm">
            <caption className="sr-only">Vergleich der Bronze-, Gold- und Platinum-Pakete</caption>
            <thead>
              <tr className="bg-white/[0.08] text-left text-white">
                {["Feature", "Bronze", "Gold", "Platinum"].map((head, index) => (
                  <th key={head} scope="col" className={`px-5 py-4 font-black ${index === 0 ? "w-[46%]" : "w-[18%]"}`}>
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-200">
              <tr className="border-t border-white/10 bg-white/[0.03]">
                <th scope="row" className="px-5 py-4 text-left font-bold text-white">Monatspreis</th>
                {[
                  "9,99€",
                  "49,99€",
                  "99,99€",
                ].map((price) => (
                  <td key={price} className="px-5 py-4 font-black text-white">{price}</td>
                ))}
              </tr>
              {comparisonSections.map((section) => (
                <Fragment key={section.title}>
                  <tr className="border-t border-white/15 bg-cyan-300/[0.09]">
                    <th colSpan={4} scope="colgroup" className="px-5 py-3 text-left text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                      {section.title}
                    </th>
                  </tr>
                  {section.rows.map(([feature, bronze, gold, platinum]) => (
                    <tr key={feature} className="border-t border-white/10 transition-colors hover:bg-white/[0.04]">
                      <th scope="row" className="px-5 py-4 text-left font-bold text-white">{feature}</th>
                      {[bronze, gold, platinum].map((value, index) => (
                        <td key={`${feature}-${index}`} className="px-5 py-4">
                          <ComparisonValue value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-14">
          <PlanCards />
        </div>
        <div className="mt-16 rounded-[32px] border border-white/15 bg-gradient-to-r from-cyan-300/15 to-blue-500/15 p-8 text-center sm:p-12">
          <h2 className="text-4xl font-black tracking-normal">Bereit für mehr Stammkunden?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">Erstelle dein Geschäftskonto und starte in wenigen Minuten.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryLink href="/kontakt">Jetzt registrieren</PrimaryLink>
            <SecondaryLink href="/kontakt">Kontakt aufnehmen</SecondaryLink>
          </div>
        </div>
      </div>
    </main>
  );
}
