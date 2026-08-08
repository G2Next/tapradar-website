import { LegalPage } from "@/components/LegalPage";
import { LEGAL_VERSIONS } from "@/lib/legal-consent";

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" date={`Stand: 8. August 2026 · Version ${LEGAL_VERSIONS.privacy}`}>
      <h2>1. Verantwortlicher</h2>
      <p>TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Österreich. E-Mail: <a href="mailto:support@tapradar.app">support@tapradar.app</a></p>
      <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p>Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienstleistungen erforderlich ist.</p>
      <ul><li>Name und Kontaktdaten</li><li>Unternehmensdaten</li><li>Nutzungsdaten der TapRadar-Plattform</li><li>Zahlungsinformationen über Zahlungsdienstleister</li></ul>
      <h2>3. Zweck der Datenverarbeitung</h2>
      <p>Ihre Daten werden zur Vertragserfüllung, Bereitstellung und Absicherung des Kontos, Zahlungsabwicklung, Missbrauchsverhinderung, Bearbeitung von Supportanfragen und Erfüllung gesetzlicher Pflichten verarbeitet. Optionale Werbung erfolgt nur auf einer gesonderten Rechtsgrundlage.</p>
      <h2>4. GPS und Standortdaten</h2>
      <p>TapRadar verwendet Standortdaten ausschließlich zur Verifizierung von Kundenbesuchen.</p>
      <h2>5. Empfänger und Dienstleister</h2>
      <p>Soweit erforderlich, verarbeiten technische Dienstleister Daten für Hosting, Authentifizierung, E-Mail-Versand und Zahlungsabwicklung. Zahlungsdaten werden insbesondere durch den gewählten Zahlungsdienstleister verarbeitet.</p>
      <h2>6. Speicherdauer</h2>
      <p>Daten werden nur so lange gespeichert, wie dies für die genannten Zwecke, die Vertragserfüllung, Sicherheitsnachweise oder gesetzliche Aufbewahrungspflichten erforderlich ist.</p>
      <h2>7. Ihre Rechte</h2>
      <p>Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch nach DSGVO.</p>
      <h2>8. Kontakt und Beschwerde</h2>
      <p>Datenschutzanfragen können an <a href="mailto:support@tapradar.app">support@tapradar.app</a> gesendet werden. Daneben besteht ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde.</p>
    </LegalPage>
  );
}
