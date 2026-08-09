import { LegalPage } from "@/components/LegalPage";
import { getLocale } from "@/i18n/server";
import { translateTree } from "@/i18n/translate";

export default async function ImpressumPage() {
  const locale = await getLocale();
  return translateTree(
    <LegalPage title="Impressum" locale={locale} germanHref="/de/impressum">
      <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-8">
        <p><strong>TOY GmbH</strong><br />Dr. Adolf-Schärf-Straße 1/2/24<br />2353 Guntramsdorf<br />Österreich</p>
      </div>
      <h2>Kontakt</h2>
      <p>E-Mail: <a href="mailto:support@tapradar.app">support@tapradar.app</a><br />Website: <a href="https://www.tapradar.app">www.tapradar.app</a></p>
      <h2>Unternehmensangaben</h2>
      <p>Unternehmensgegenstand: Digitale Kundenbindungsplattform für lokale Geschäfte<br />UID-Nummer: ATU78882167<br />Rechtsform: Gesellschaft mit beschränkter Haftung (GmbH)<br />Firmensitz: Guntramsdorf, Österreich</p>
      <h2>Aufsichtsbehörde</h2>
      <p>Bezirkshauptmannschaft Mödling<br />Zuständige Kammer: Wirtschaftskammer Niederösterreich</p>
    </LegalPage>, locale);
}
