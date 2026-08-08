import { Fragment } from "react";
import Link from "next/link";

const comparisonSections = [
  { title: "Grundfunktionen", rows: [["NFC/QR Stempelung", "✓", "✓", "✓"], ["Kundenbelohnung vergeben", "✓", "✓", "✓"], ["QR-Schaufenster Download", "✓", "✓", "✓"], ["Basis-Statistik heute/Woche", "✓", "✓", "✓"]] },
  { title: "Mitarbeiter", rows: [["Max. Mitarbeiter", "1", "5", "15"], ["Mitarbeiter-PIN System", "✓", "✓", "✓"], ["Mitarbeiter-Aktivitätslog", "✓", "✓", "✓"]] },
  { title: "Werbung & Medien", rows: [["Bild/PDF Upload Werbung", "✗", "2× /Monat", "4× /Monat"], ["Kampagnen", "✗", "2× /Monat", "4× /Monat"], ["Proximity-Werbung GPS", "✗", "✗", "✓"]] },
  { title: "Benachrichtigungen", rows: [["Push-Benachrichtigungen", "✗", "✗", "✓"], ["Retargeting 30 Tage", "✗", "✗", "✓"], ["Kampagnen-Countdown Push", "✗", "✗", "✓"]] },
  { title: "Analytik & Berichte", rows: [["Basis-Statistik", "✓", "✓", "✓"], ["Erweiterte Analytik", "✗", "✗", "✓"], ["Werbe-Analytik CTR/CVR", "✗", "✗", "✓"], ["Wöchentlicher E-Mail-Bericht", "✗", "✓", "✓"], ["Monatlicher PDF-Bericht", "✗", "✗", "✓"]] },
  { title: "Support", rows: [["Standard-Support", "✓", "✓", "✓"], ["White-Label QR-Plakat", "✗", "✗", "✓"], ["Prioritäts-Support 24h", "✗", "✗", "✓"]] },
];

function ComparisonValue({ value }: { value: string }) {
  if (value === "✓") return <span className="font-black text-cyan-300" aria-label="Enthalten">✓</span>;
  if (value === "✗") return <span className="text-slate-500" aria-label="Nicht enthalten">✗</span>;
  return value;
}

export function PlanComparisonTable({ showPrices = false }: { showPrices?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-white/15 shadow-2xl shadow-black/10">
      <table className="w-full min-w-[760px] border-collapse bg-white/[0.05] text-sm">
        <caption className="sr-only">Vergleich der Bronze-, Gold- und Platinum-Pakete</caption>
        <thead>
          <tr className="bg-white/[0.08] text-left text-white">
            {["Feature", "Bronze", "Gold", "Platinum"].map((head, index) => (
              <th key={head} scope="col" className={`px-5 py-4 font-black ${index === 0 ? "w-[46%]" : "w-[18%]"}`}>
                <span className="inline-flex items-center gap-2">{head}{head === "Gold" ? <span className="rounded-full bg-yellow-300 px-2 py-1 text-[10px] font-black text-yellow-950">Beliebt</span> : null}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-200">
          {showPrices ? <tr className="border-t border-white/10 bg-white/[0.03]">
            <th scope="row" className="px-5 py-4 text-left font-bold text-white">Monatspreis</th>
            {["9,99 €", "49,99 €", "99,99 €"].map(price => <td key={price} className="px-5 py-4 font-black text-white">{price}</td>)}
          </tr> : null}
          {comparisonSections.map(section => <Fragment key={section.title}>
            <tr className="border-t border-white/15 bg-cyan-300/[0.09]"><th colSpan={4} scope="colgroup" className="px-5 py-3 text-left text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{section.title}</th></tr>
            {section.rows.map(([feature, bronze, gold, platinum]) => <tr key={feature} className="border-t border-white/10 transition-colors hover:bg-white/[0.04]">
              <th scope="row" className="px-5 py-4 text-left font-bold text-white">{feature}</th>
              {[bronze, gold, platinum].map((value, index) => <td key={`${feature}-${index}`} className="px-5 py-4"><ComparisonValue value={value} /></td>)}
            </tr>)}
          </Fragment>)}
        </tbody>
        {showPrices ? <tfoot>
          <tr className="border-t-2 border-cyan-300/35 bg-slate-950/55">
            <th scope="row" className="px-5 py-7 text-left text-base font-black text-white">Preis pro Monat</th>
            {["9,99 €", "49,99 €", "99,99 €"].map(price => <td key={price} className="px-5 py-7"><strong className="block whitespace-nowrap text-3xl font-black text-white lg:text-4xl">{price}</strong><span className="mt-1 block text-xs text-slate-400">/Monat</span></td>)}
          </tr>
          <tr className="bg-slate-950/55">
            <th scope="row" className="px-5 pb-7 text-left text-sm font-normal text-slate-400">Direkt online starten</th>
            {["Bronze wählen", "Gold testen", "Platinum testen"].map((label, index) => <td key={label} className="px-5 pb-7"><Link href="/login" className={`inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 ${index === 1 ? "bg-yellow-300 text-yellow-950 hover:bg-yellow-200" : "bg-cyan-300 text-slate-950 hover:bg-cyan-200"}`}>{label}</Link></td>)}
          </tr>
        </tfoot> : null}
      </table>
    </div>
  );
}
