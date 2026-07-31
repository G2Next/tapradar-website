import { PrimaryLink, SecondaryLink } from "./Ui";

const plans = [
  {
    name: "Bronze",
    price: "9,99€",
    description: "Für den Einstieg in digitale Kundenbindung.",
    items: ["NFC/QR Stempelung", "Kundenbelohnung", "QR-Schaufenster Download", "Basis-Statistik", "1 Mitarbeiter"],
    highlight: "border-amber-700/60",
    cta: "Bronze wählen",
  },
  {
    name: "Gold",
    price: "49,99€",
    description: "Für Geschäfte, die Marketing aktiv nutzen.",
    items: ["Alles aus Bronze", "5 Mitarbeiter", "2 Werbungen pro Monat", "2 Kampagnen pro Monat", "Wöchentlicher E-Mail-Bericht"],
    highlight: "border-yellow-300/70 -translate-y-0 md:-translate-y-3",
    cta: "Gold testen",
    popular: true,
  },
  {
    name: "Platinum",
    price: "99,99€",
    description: "Maximale Reichweite, Werbung und Wachstum.",
    items: ["Alles aus Gold", "15 Mitarbeiter", "Push-Benachrichtigungen", "GPS-Proximity Werbung", "Erweiterte Analytik"],
    highlight: "border-slate-200/60",
    cta: "Platinum wählen",
  },
];

export function PlanCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={`relative rounded-[28px] border bg-white/[0.07] p-8 shadow-2xl shadow-black/10 ${plan.highlight}`}
        >
          {plan.popular ? (
            <span className="absolute right-5 top-5 rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-yellow-950">
              Beliebt
            </span>
          ) : null}
          <h3 className="text-3xl font-black text-white">{plan.name}</h3>
          <div className="mt-4 text-5xl font-black text-white">
            {plan.price} <span className="text-base font-normal text-slate-300">/Monat</span>
          </div>
          <p className="mt-4 min-h-12 text-sm leading-6 text-slate-300">{plan.description}</p>
          <ul className="my-7 grid gap-3 text-sm text-slate-300">
            {plan.items.map((item) => (
              <li key={item} className="flex gap-2 border-b border-white/10 pb-3">
                <span className="font-black text-cyan-300">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {plan.popular ? (
            <PrimaryLink href="/kontakt">{plan.cta}</PrimaryLink>
          ) : (
            <SecondaryLink href="/kontakt">{plan.cta}</SecondaryLink>
          )}
        </article>
      ))}
    </div>
  );
}
