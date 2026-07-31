import { LegalPage } from "@/components/LegalPage";

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" date="Stand: Juni 2025">
      <h2>1. Verantwortlicher</h2>
      <p>TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Österreich. E-Mail: <a href="mailto:support@tapradar.app">support@tapradar.app</a></p>
      <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p>Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienstleistungen erforderlich ist.</p>
      <ul><li>Name und Kontaktdaten</li><li>Unternehmensdaten</li><li>Nutzungsdaten der TapRadar-Plattform</li><li>Zahlungsinformationen über Zahlungsdienstleister</li></ul>
      <h2>3. Zweck der Datenverarbeitung</h2>
      <p>Ihre Daten werden zur Bereitstellung Ihres Kontos, zur Zahlungsabwicklung, für Support und zur Erfüllung gesetzlicher Pflichten verwendet.</p>
      <h2>4. GPS und Standortdaten</h2>
      <p>TapRadar verwendet Standortdaten ausschließlich zur Verifizierung von Kundenbesuchen.</p>
      <h2>5. Ihre Rechte</h2>
      <p>Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch nach DSGVO.</p>
    </LegalPage>
  );
}
