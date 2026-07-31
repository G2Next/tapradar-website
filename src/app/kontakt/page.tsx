const faqs = [
  ["Was ist TapRadar?", "TapRadar ist eine digitale Kundenbindungs- und Marketingplattform für lokale Geschäfte."],
  ["Wie funktioniert die digitale Stempelkarte?", "Kunden sammeln digitale Stempel über NFC oder QR-Code und erhalten nach dem Ziel automatisch eine Belohnung."],
  ["Benötige ich zusätzliche Hardware?", "Nein. Ein Smartphone oder Tablet reicht. NFC-Tags und QR-Codes können optional eingesetzt werden."],
  ["Kann ich TapRadar kostenlos testen?", "Ja. Neue Geschäfte können TapRadar testen und die Funktionen kennenlernen."],
  ["Welche Mitgliedschaften gibt es?", "Bronze für den Einstieg, Gold für aktives Marketing und Platinum für erweiterte Analysen und Premium-Funktionen."],
  ["Kann ich jederzeit kündigen?", "Ja. Die Mitgliedschaften sind monatlich kündbar."],
  ["Für welche Branchen eignet sich TapRadar?", "Cafés, Restaurants, Friseure, Kosmetikstudios, Bäckereien, Einzelhandel, Fitnessstudios und lokale Dienstleister."],
];

export default function ContactPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <section className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-300">
          Kontakt & FAQ
        </span>
        <h1 className="mt-6 text-5xl font-black tracking-normal sm:text-6xl">Wie können wir helfen?</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Finden Sie Antworten auf häufige Fragen oder schreiben Sie uns direkt.
        </p>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="mb-6 text-3xl font-black">Häufig gestellte Fragen</h2>
          <div className="divide-y divide-white/10">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-black text-white transition hover:text-cyan-300">
                  {question}
                  <span className="text-xl text-cyan-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{answer}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="rounded-[28px] border border-white/10 bg-white/[0.07] p-8 lg:sticky lg:top-28">
          <h2 className="text-3xl font-black">Nachricht senden</h2>
          <p className="mt-3 leading-7 text-slate-300">Wir antworten in der Regel innerhalb von 24 Stunden.</p>
          <form className="mt-8 grid gap-5">
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
              Name
              <input className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" placeholder="Ihr Name" />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
              E-Mail
              <input type="email" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" placeholder="name@firma.at" />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
              Thema
              <select className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300">
                <option>Geschäft registrieren</option>
                <option>Preise & Pakete</option>
                <option>Support</option>
                <option>Sonstiges</option>
              </select>
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">
              Nachricht
              <textarea className="min-h-32 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" placeholder="Wie können wir helfen?" />
            </label>
            <button className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950" type="button">
              Nachricht senden
            </button>
          </form>
          <div className="mt-7 border-t border-white/10 pt-6">
            <a href="mailto:support@tapradar.app" className="font-black text-cyan-300">support@tapradar.app</a>
            <p className="mt-2 text-sm text-slate-300">Montag bis Freitag, 9:00 bis 18:00 Uhr</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
