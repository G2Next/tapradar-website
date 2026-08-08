import { LegalPage } from "@/components/LegalPage";
import { LEGAL_VERSIONS } from "@/lib/legal-consent";

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen" date={`Stand: 8. August 2026 · Version ${LEGAL_VERSIONS.terms}`}>
      <h2>1. Geltungsbereich</h2>
      <p>Diese AGB gelten für die Nutzung der TapRadar-Plattform durch Geschäftskunden und registrierte Nutzer. Für Geschäftstarife handelt der Besteller im Rahmen seiner unternehmerischen Tätigkeit.</p>
      <h2>2. Leistungen</h2>
      <p>TapRadar stellt digitale Stempelkarten, Kundenbindungsfunktionen, Bewertungen, Statistiken und Marketingfunktionen bereit.</p>
      <h2>3. Mitgliedschaften</h2>
      <p>Tarif, Gesamtpreis, Umsatzsteuer, Abrechnungsintervall und wesentliche Leistungen werden vor der zahlungspflichtigen Bestellung zusammengefasst. Die Zahlungsabwicklung kann über Stripe erfolgen.</p>
      <h2>4. Laufzeit und Kündigung</h2>
      <p>Abonnements verlängern sich entsprechend dem vor der Bestellung angezeigten Abrechnungsintervall. Monatliche Tarife sind monatlich kündbar, sofern in der Bestellübersicht nichts Abweichendes vereinbart wird.</p>
      <h2>5. Nutzerpflichten</h2>
      <p>Zugangsdaten, Geräte-Tokens und Einlösecodes sind vor unbefugtem Zugriff zu schützen. Manipulationen von Stempeln, Belohnungen oder technischen Schutzmaßnahmen sind unzulässig.</p>
      <h2>6. Verbraucherinformationen</h2>
      <p>Soweit ein Nutzer Verbraucher ist und ein gesetzliches Widerrufsrecht besteht, gelten die Informationen der Widerrufsbelehrung. Gesetzliche Verbraucherrechte werden durch diese AGB nicht eingeschränkt.</p>
      <h2>7. Kontakt</h2>
      <p>Bei Fragen erreichen Sie uns unter <a href="mailto:support@tapradar.app">support@tapradar.app</a>.</p>
    </LegalPage>
  );
}
