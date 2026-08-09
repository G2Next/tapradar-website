import { LegalPage } from "@/components/LegalPage";
import { LEGAL_VERSIONS } from "@/lib/legal-consent";
import { getLocale } from "@/i18n/server";
import { translateText, translateTree } from "@/i18n/translate";

export default async function WiderrufPage() {
  const locale = await getLocale();
  return translateTree(
    <LegalPage title="Widerrufsbelehrung" date={`${translateText(locale, "Stand: 8. August 2026")} · Version ${LEGAL_VERSIONS.withdrawal}`} locale={locale} germanHref="/de/widerrufsbelehrung">
      <h2>Widerrufsrecht</h2>
      <p>Wenn Sie einen Vertrag als Verbraucher abschließen, haben Sie grundsätzlich das Recht, diesen binnen vierzehn Tagen ohne Angabe von Gründen zu widerrufen. Für reine Unternehmensverträge besteht dieses gesetzliche Verbraucher-Widerrufsrecht grundsätzlich nicht.</p>
      <h2>Widerrufsfrist</h2>
      <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
      <h2>Ausübung des Widerrufs</h2>
      <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie die TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Österreich, E-Mail <a href="mailto:support@tapradar.app">support@tapradar.app</a>, mittels einer eindeutigen Erklärung über Ihren Entschluss informieren.</p>
      <h2>Folgen des Widerrufs</h2>
      <p>Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle erhaltenen Zahlungen nach den gesetzlichen Vorgaben zurück.</p>
      <h2>Beginn der Leistung während der Widerrufsfrist</h2>
      <p>Wenn Sie ausdrücklich verlangen, dass die Dienstleistung bereits während einer möglichen Widerrufsfrist beginnt, können bei einem wirksamen Widerruf gesetzliche Regelungen zum Wertersatz gelten.</p>
      <h2>Muster-Widerrufsformular</h2>
      <p>Wenn Sie den Vertrag widerrufen wollen, können Sie folgende Angaben an support@tapradar.app senden: bestellte Leistung, Bestelldatum, Name, Anschrift, Datum und eine eindeutige Erklärung des Widerrufs.</p>
    </LegalPage>, locale);
}
