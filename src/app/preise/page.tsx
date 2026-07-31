import { PlanCards } from "@/components/PlanCards";
import { PrimaryLink, SecondaryLink, SectionTitle } from "@/components/Ui";

const rows = [
  ["Preis", "9,99€", "49,99€", "99,99€"],
  ["NFC/QR Stempelung", "✓", "✓", "✓"],
  ["Max. Mitarbeiter", "1", "5", "15"],
  ["Bild/PDF Werbung", "–", "2× /Monat", "4× /Monat"],
  ["Kampagnen", "–", "2× /Monat", "4× /Monat"],
  ["Push-Benachrichtigungen", "–", "–", "✓"],
  ["GPS-Proximity Werbung", "–", "–", "✓"],
  ["Erweiterte Analytik", "–", "–", "✓"],
  ["Prioritäts-Support 24h", "–", "–", "✓"],
];

export default function PricingPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle badge="Preise" title="Transparente Pakete.">
          Monatlich kündbar, kein Jahresvertrag und keine versteckten Kosten.
        </SectionTitle>
        <div className="overflow-x-auto rounded-3xl border border-white/15">
          <table className="w-full min-w-[720px] border-collapse bg-white/[0.05] text-sm">
            <thead>
              <tr className="bg-white/[0.08] text-left text-white">
                {["Feature", "Bronze", "Gold", "Platinum"].map((head) => (
                  <th key={head} className="px-5 py-4 font-black">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-200">
              {rows.map((row) => (
                <tr key={row[0]} className="border-t border-white/10">
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className={index === 0 ? "px-5 py-4 font-bold text-white" : "px-5 py-4"}>
                      {cell}
                    </td>
                  ))}
                </tr>
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
