import type { Locale } from "@/i18n/config";
import { callout, list, p, type LegalDocument } from "./types";

export const privacyContent: { de: LegalDocument } & Partial<Record<Locale, LegalDocument>> = {
  de: {
    title: "Datenschutzerklärung",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Stand: 9. August 2026 · Version 2026-08-09.2 (ausführliche Fassung)",
    intro: [
      p("Der Schutz Ihrer personenbezogenen Daten ist der TOY GmbH ein zentrales Anliegen. Diese Datenschutzerklärung informiert Sie umfassend und im Detail darüber, welche personenbezogenen Daten wir im Zusammenhang mit der Nutzung der TapRadar-App mit ihren vier Funktionsbereichen Radar, Stempel, Karten und Home, der TapRadar-Website sowie des TapRadar-Geschäftskunden-Dashboards (gemeinsam „TapRadar\" oder die „Plattform\") erheben, zu welchen Zwecken und auf welcher Rechtsgrundlage wir diese verarbeiten, an wen wir Daten weitergeben, wie lange wir sie speichern und welche Rechte Ihnen als betroffene Person zustehen. Diese Erklärung gilt sowohl für Endkundinnen und Endkunden, die die kostenlose TapRadar-App nutzen, als auch für Geschäftskundinnen und Geschäftskunden, die einen der kostenpflichtigen TapRadar-Tarife Bronze, Gold oder Platinum abonniert haben. Sie basiert auf der Verordnung (EU) 2016/679 (Datenschutz-Grundverordnung, „DSGVO\") sowie den einschlägigen österreichischen Ausführungsbestimmungen, insbesondere dem Datenschutzgesetz (DSG) und dem Telekommunikationsgesetz 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Verantwortlicher", blocks: [
          p("Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO ist:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Österreich", "UID-Nummer: ATU78882167", "E-Mail: support@tapradar.app", "Website: www.tapradar.app"]),
          p("Ein betrieblicher Datenschutzbeauftragter ist gesetzlich nicht bestellt, da die Voraussetzungen des Art. 37 DSGVO nicht vorliegen. Anfragen zum Datenschutz richten Sie bitte an die oben genannte E-Mail-Adresse; wir bearbeiten diese unverzüglich, spätestens jedoch innerhalb eines Monats ab Eingang."),
        ],
      },
      {
        heading: "2. Aufbau dieser Erklärung", blocks: [
          p("Damit Sie sich rasch orientieren können, gliedert sich diese Datenschutzerklärung in einen allgemeinen Teil (Ziffern 1 bis 4), einen besonderen Teil, der die vier Funktionsbereiche der App sowie Standort- und Push-Daten im Detail beschreibt (Ziffern 5 bis 7), einen Teil zu Geschäftskunden, Zahlungen und Bewertungen (Ziffern 8 bis 12), einen Teil zu Website, Empfängern, Drittlandtransfer und Speicherdauer (Ziffern 13 bis 16) sowie einen Teil zu Ihren Rechten, Datensicherheit und sonstigen Hinweisen (Ziffern 17 bis 22). Ein Quellenverzeichnis mit amtlichen Fundstellen findet sich am Ende des Dokuments."),
        ],
      },
      {
        heading: "3. Allgemeine Grundsätze der Datenverarbeitung", blocks: [
          p("Wir verarbeiten personenbezogene Daten unter Beachtung der Grundsätze der DSGVO, insbesondere der Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung sowie Integrität und Vertraulichkeit (Art. 5 DSGVO). Jede Verarbeitung personenbezogener Daten stützt sich auf mindestens eine der folgenden Rechtsgrundlagen:"),
          list([
            "Art. 6 Abs. 1 lit. a DSGVO – Einwilligung der betroffenen Person, insbesondere für die Freigabe von Standortdaten, den Erhalt von Push-Benachrichtigungen sowie die optionale Freunde- und Ranglistenfunktion",
            "Art. 6 Abs. 1 lit. b DSGVO – Erforderlichkeit zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen, etwa Bereitstellung der App-Funktionen Radar, Stempel, Karten und Home sowie Verwaltung von Abonnements",
            "Art. 6 Abs. 1 lit. c DSGVO – Erfüllung einer rechtlichen Verpflichtung, etwa steuer- und unternehmensrechtliche Aufbewahrungspflichten",
            "Art. 6 Abs. 1 lit. f DSGVO – Wahrung berechtigter Interessen, etwa Betrugs- und Missbrauchsprävention, IT-Sicherheit und Weiterentwicklung der Plattform, sofern diese nicht durch die Interessen oder Grundrechte der betroffenen Person überwogen werden",
          ]),
        ],
      },
      {
        heading: "4. Übersicht: Wer verarbeitet was?", blocks: [
          p("TapRadar verbindet zwei Nutzergruppen: Endkundinnen und Endkunden, die über die kostenlose App lokale Geschäfte entdecken und Stempel sammeln, sowie Geschäftskundinnen und Geschäftskunden, die über das kostenpflichtige Dashboard ihre Kundenbindung steuern. Beide Nutzergruppen erzeugen Daten, die teils ausschließlich von TOY GmbH, teils gemeinsam mit dem jeweiligen Vertragspartner verarbeitet werden. Die folgenden Ziffern 5 bis 12 beschreiben diese Datenflüsse im Detail, gegliedert nach den vier App-Bereichen sowie nach Standort-, Push-, Zahlungs- und Bewertungsdaten."),
        ],
      },
      {
        heading: "5.1 Radar – lokale Geschäfte entdecken", blocks: [
          p("Im Bereich Radar zeigen wir Ihnen auf einer Karte TapRadar-Partnerbetriebe in Ihrer Nähe an. Sie können die Ansicht über Filter (Aktion, Gutschein, Belohnung, Top, Umkreis 500 Meter) sowie über Kategorien wie Café, Restaurant, Friseur oder Markt eingrenzen. Zu jedem Partnerbetrieb werden Öffnungszeiten, Bewertungen und ein Plan-Badge angezeigt, das den von diesem Betrieb gewählten Tarif (Bronze, Gold oder Platinum) kennzeichnet; dieses Badge betrifft ausschließlich den Geschäftskunden und stellt kein personenbezogenes Datum von Ihnen dar."),
          p("Zur Bereitstellung dieser Funktion verarbeiten wir Ihren Standort (siehe Ziffer 6), die von Ihnen gewählten Filter- und Kategorieeinstellungen sowie Ihre Interaktionen mit angezeigten Partnerbetrieben, etwa das Aufrufen eines Betriebsprofils. Diese Interaktionsdaten nutzen wir, um die Trefferanzeige zu verbessern und die Relevanz der angezeigten Partnerbetriebe zu erhöhen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO für die Standortfreigabe, Art. 6 Abs. 1 lit. b und lit. f DSGVO für die Filter-, Kategorie- und Interaktionsdaten."),
        ],
      },
      {
        heading: "5.2 Stempel – digitale Stempelkarten sammeln", blocks: [
          p("Im Bereich Stempel können Sie durch Antippen eines NFC-Punkts oder alternativ durch Scannen eines QR-Codes am Kassentisch eines Partnerbetriebs automatisch einen digitalen Stempel erhalten. Ihr Fortschritt, etwa 7 von 10 Stempeln, wird unmittelbar angezeigt; bei Erreichen der erforderlichen Stempelanzahl können Sie die hinterlegte Belohnung, zum Beispiel einen Gratis-Kaffee oder einen Rabatt, einlösen. Für jeden Stempel erhalten Sie zusätzlich Punkte für Ihr Level im Bereich Home."),
          p("Wir verarbeiten hierzu Zeitpunkt und Ort jeder Stempelung, den betroffenen Partnerbetrieb, den aktuellen Stempelstand je Stempelkarte, eingelöste Belohnungen sowie den zugehörigen Einlösecode. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Zur Verifizierung, dass eine Stempelung tatsächlich vor Ort erfolgt ist, gleichen wir zusätzlich Ihren Gerätestandort ab; Näheres hierzu finden Sie in Ziffer 6."),
        ],
      },
      {
        heading: "5.3 Karten – digitale Brieftasche für bestehende Kundenkarten", blocks: [
          p("Im Bereich Karten können Sie bereits bestehende Kundenkarten von Drittunternehmen, etwa von Billa, DM, H&M, Spar oder Hofer, digital in Ihrer TapRadar-Brieftasche hinterlegen, indem Sie den jeweiligen Barcode oder QR-Code einscannen oder manuell eingeben, und diesen anschließend an der Kasse vorzeigen. Die genannten Marken dienen ausschließlich als Beispiele für von Ihnen selbst gespeicherte Karten; TapRadar ist mit diesen Unternehmen nicht verbunden und steht mit ihnen in keinem Datenaustausch."),
          callout("Wichtig", "Die in der Karten-Brieftasche hinterlegten Daten stammen ausschließlich von Ihnen selbst. Wir prüfen nicht, ob die eingegebenen Karten echt, gültig oder dem jeweiligen Drittunternehmen zuordenbar sind, und übernehmen keine Bonus- oder Kontodaten von diesen Unternehmen. Für die Richtigkeit der gespeicherten Kartendaten sowie deren Akzeptanz an der jeweiligen Kasse sind Sie selbst verantwortlich."),
          p("Die von Ihnen hinterlegten Karten- und Barcodedaten werden verschlüsselt gespeichert und ausschließlich zur Anzeige in Ihrer eigenen App verwendet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, da Sie uns durch Anlegen der Karte gezielt mit der Speicherung beauftragen."),
        ],
      },
      {
        heading: "5.4 Home – Profil und Gamification", blocks: [
          p("Im Bereich Home finden Sie Ihr Profil mit einem 20-stufigen Levelsystem von „Neuling\" bis „Champion\". Sie sammeln Punkte für gesetzte Stempel, abgegebene Bewertungen und eingeladene Freunde, verfolgen ein Wochenziel und profitieren von einem Streak-System, bei dem sieben aufeinanderfolgende aktive Tage einen Bonus auslösen. Zusätzlich können Sie Freundinnen und Freunde einladen und Ihren Fortschritt in einer Rangliste vergleichen."),
          p("Wir verarbeiten hierzu Ihren Punktestand, Ihr Level, den Zähler des Streak-Systems, Ihren Zielverlauf sowie – sofern Sie diese Funktion aktiv nutzen – die Liste der von Ihnen eingeladenen oder verbundenen Freunde und deren für Sie sichtbare, aggregierte Fortschrittsdaten, soweit diese Personen der gegenseitigen Sichtbarkeit ebenfalls zugestimmt haben. Rechtsgrundlage für die Kernfunktionen (Level, Punkte, Streak, Wochenziel): Art. 6 Abs. 1 lit. b DSGVO. Rechtsgrundlage für die optionale Freunde- und Ranglistenfunktion: Art. 6 Abs. 1 lit. a DSGVO, da hierdurch Daten gegenüber weiteren Personen sichtbar werden. Level, Punkte und Rangplätze haben keinen Geldwert und sind nicht übertragbar."),
        ],
      },
      {
        heading: "6. Standort- und GPS-Daten im Detail", blocks: [
          p("TapRadar verwendet Standortdaten Ihres Endgeräts für zwei getrennte Zwecke: (a) die Radar-Funktion zur Anzeige von Partnerbetrieben in Ihrer Nähe und (b) die Verifizierung von Kundenbesuchen, indem der Standort Ihres Geräts zum Zeitpunkt einer NFC- oder QR-Stempelung mit dem hinterlegten Standort des Partnerbetriebs abgeglichen wird, um eine Stempelung ohne physische Anwesenheit zu verhindern."),
          p("Je nach Betriebssystem können Sie die Standortfreigabe granular steuern, etwa mit den Optionen „immer\", „nur bei Nutzung der App\" oder „einmalig\". Für die Kernfunktion Stempel-Verifizierung genügt eine Freigabe während der Nutzung der App; eine dauerhafte Standortfreigabe im Hintergrund ist nur erforderlich, wenn Sie die Proximity-Werbung eines Platinum-Partnerbetriebs nutzen möchten (siehe Ziffer 7.2). Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit den Berechtigungseinstellungen Ihres Betriebssystems, hilfsweise unser berechtigtes Interesse an der Betrugsprävention gemäß Art. 6 Abs. 1 lit. f DSGVO. Sie können die Standortfreigabe jederzeit über die Einstellungen Ihres Geräts widerrufen; einzelne Funktionen, insbesondere die Stempelverifizierung und die Proximity-Werbung, stehen dann nicht oder nur eingeschränkt zur Verfügung."),
        ],
      },
      {
        heading: "7.1 Service-Benachrichtigungen von TapRadar", blocks: [
          p("Wir versenden Service-Push-Nachrichten in eigener Verantwortung, etwa zur Kontosicherheit, zu wesentlichen Änderungen der Plattform oder zur Bestätigung von Vorgängen. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. f DSGVO."),
        ],
      },
      {
        heading: "7.2 Marketing- und Kampagnen-Push von Geschäftskunden", blocks: [
          p("Geschäftskunden können über das Dashboard Kampagnen und Push-Benachrichtigungen an Endkundinnen und Endkunden versenden, die entweder bereits Kunde des jeweiligen Partnerbetriebs sind (mindestens ein gesetzter Stempel) oder sich – im Rahmen der ausschließlich im Platinum-Tarif verfügbaren Proximity-Werbung – in dessen Nähe befinden und hierfür eine Standortfreigabe erteilt haben. Push-Benachrichtigungen sind je nach Tarif auf eine bestimmte Frequenz begrenzt (Gold: bis zu 2 Bild-/PDF-Kampagnen pro Monat, keine Push-Benachrichtigungen; Platinum: bis zu 4 Kampagnen pro Monat zzgl. Push-Benachrichtigungen, Proximity-Auslösung, Kampagnen-Countdown und Retargeting innerhalb von 30 Tagen nach Ihrem letzten Besuch)."),
          callout("Verantwortlichkeit bei Push-Kampagnen", "Für den Inhalt, die Rechtmäßigkeit und die lauterkeitsrechtliche Zulässigkeit einer Kampagne ist der jeweilige Geschäftskunde verantwortlich. TOY GmbH stellt die technische Zustellinfrastruktur, die Einhaltung der Frequenzgrenzen sowie die Möglichkeit eines jederzeitigen Opt-outs sicher. Insoweit handeln TOY GmbH und der jeweilige Geschäftskunde hinsichtlich der Auslösung und Zustellung von Push-Kampagnen als gemeinsam Verantwortliche im Sinne des Art. 26 DSGVO; die Grundzüge dieser Verantwortungsteilung sind in dieser Ziffer zusammengefasst, das Wesentliche der Vereinbarung wird betroffenen Personen auf Anfrage an support@tapradar.app zur Verfügung gestellt."),
          p("Sie können den Erhalt von Marketing- und Kampagnen-Push jederzeit vollständig oder je Partnerbetrieb über die Geräteeinstellungen oder die In-App-Einstellungen deaktivieren, ohne dass Ihnen hierdurch der Zugang zu den Kernfunktionen der App verwehrt wird. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 174 TKG 2021."),
        ],
      },
      {
        heading: "8. Registrierung und Nutzerkonto (Endkundinnen und Endkunden)", blocks: [
          p("Bei der Registrierung in der TapRadar-App erheben wir E-Mail-Adresse, Passwort (verschlüsselt gespeichert), gewählten Anzeigenamen sowie optionale Profilangaben. Zweck: Einrichtung, Verwaltung und Absicherung Ihres Nutzerkontos. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO."),
        ],
      },
      {
        heading: "9. Registrierung, Konto und Unternehmensdaten (Geschäftskundinnen und Geschäftskunden)", blocks: [
          p("Für Geschäftskunden, die einen Bronze-, Gold- oder Platinum-Tarif abonnieren, verarbeiten wir zusätzlich: Firmenname, Rechtsform, Anschrift des Standorts, UID-Nummer, Ansprechpartner (Name, E-Mail, Telefonnummer), Öffnungszeiten, Kategorie und Beschreibung des Betriebs sowie hochgeladene Bild- und PDF-Werbematerialien und Kampagneninhalte. Zweck: Vertragserfüllung, Bereitstellung des Geschäftskunden-Dashboards, Rechnungsstellung. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. c DSGVO."),
        ],
      },
      {
        heading: "10. Mitarbeiter-PIN-System", blocks: [
          p("Geschäftskunden können je nach Tarif bis zu 15 (Platinum), 5 (Gold) bzw. 1 (Bronze) Mitarbeiterzugänge mit individuellem PIN-Code einrichten. Wir verarbeiten hierzu vom Geschäftskunden hinterlegte Mitarbeiter-Kürzel oder -Namen sowie ein automatisiert geführtes Aktivitätsprotokoll der über den jeweiligen PIN vorgenommenen Stempelungen und Einlösungen. Für die Rechtmäßigkeit dieser Verarbeitung gegenüber den betroffenen Mitarbeitenden ist der jeweilige Geschäftskunde als Arbeitgeber verantwortlich; TOY GmbH stellt insoweit die technische Infrastruktur zur Verfügung. Rechtsgrundlage aufseiten von TOY GmbH: Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. f DSGVO."),
        ],
      },
      {
        heading: "11. Zahlungsabwicklung", blocks: [
          p("Die Zahlungsabwicklung für kostenpflichtige Tarife erfolgt über unseren Zahlungsdienstleister Stripe. Wir selbst speichern keine vollständigen Zahlungskartendaten; diese werden ausschließlich von Stripe verarbeitet. Wir erhalten von Stripe Bestätigungen über den Zahlungsstatus und Rechnungsbeträge sowie gegebenenfalls die letzten vier Ziffern des verwendeten Zahlungsmittels zu Dokumentations- und Abrechnungszwecken. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. c DSGVO. Nähere Informationen zur Datenverarbeitung durch Stripe entnehmen Sie der Datenschutzerklärung von Stripe unter stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Bewertungen", blocks: [
          p("Wenn Sie als Endkundin oder Endkunde eine Bewertung zu einem Partnerbetrieb abgeben, verarbeiten wir den Bewertungstext, die Sternebewertung, den Zeitpunkt sowie den Nachweis eines verifizierten Besuchs (Stempelnachweis). Bewertungen werden dem Partnerbetrieb sowie anderen App-Nutzerinnen und -Nutzern mit Ihrem Anzeigenamen angezeigt. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO. Wird eine Bewertung als rechtswidrig gemeldet, etwa weil sie beleidigend ist oder erkennbar auf keinem tatsächlichen Besuch beruht, prüfen wir die Meldung und die betroffene Bewertung im Rahmen unseres Melde- und Prüfverfahrens und teilen der meldenden sowie der bewertenden Person das Ergebnis mit."),
        ],
      },
      {
        heading: "13. Nutzung der Website, Server-Logfiles und Cookies", blocks: [
          p("Beim Aufruf unserer Website www.tapradar.app verarbeitet unser Hosting-Anbieter automatisch technische Zugriffsdaten (IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, verwendeter Browser und Betriebssystem, Referrer-URL) in Server-Logfiles. Zweck: Gewährleistung eines störungsfreien Betriebs und der IT-Sicherheit. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Die Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind; auf Tracking- oder Marketing-Cookies wird derzeit verzichtet. Sollte sich dies künftig ändern, werden wir Sie über ein Cookie-Consent-Banner um Ihre Einwilligung ersuchen."),
        ],
      },
      {
        heading: "14. Empfänger und Auftragsverarbeiter", blocks: [
          p("Wir geben personenbezogene Daten nur weiter, soweit dies zur Leistungserbringung erforderlich ist oder wir gesetzlich dazu verpflichtet sind. Zu unseren Auftragsverarbeitern bzw. Empfängern zählen insbesondere:"),
          list([
            "Hosting- und Infrastrukturdienstleister (Server- und Datenbankbetrieb)",
            "Stripe (Zahlungsabwicklung)",
            "Anbieter von Push-Benachrichtigungsdiensten (z. B. Apple Push Notification Service, Firebase Cloud Messaging) für Service- und Kampagnen-Push",
            "E-Mail-Versanddienstleister (Transaktions- und Servicekommunikation)",
            "IT-Dienstleister im Rahmen von Wartung und Support",
          ]),
          p("Mit allen Auftragsverarbeitern haben wir, soweit gesetzlich erforderlich, Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO abgeschlossen. Sofern ein Partnerbetrieb (Geschäftskunde) Ihre Stempel-, Besuchs- oder Kampagnendaten im Rahmen der Vertragsdurchführung im Dashboard einsieht, handelt dieser insoweit als eigenständig Verantwortlicher bzw., im Fall von Push-Kampagnen, als gemeinsam Verantwortlicher gemäß Ziffer 7.2 dieser Erklärung."),
        ],
      },
      {
        heading: "15. Übermittlung in Drittländer", blocks: [
          p("Soweit einzelne der oben genannten Dienstleister Daten außerhalb des Europäischen Wirtschaftsraums (EWR) verarbeiten, was insbesondere bestimmte Cloud- und Push-Dienste US-amerikanischer Anbieter betreffen kann, stellen wir durch geeignete Garantien sicher, dass ein angemessenes Datenschutzniveau gewährleistet ist, insbesondere durch den Abschluss von EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO oder die Zertifizierung des Empfängers nach dem EU-U.S. Data Privacy Framework, soweit einschlägig."),
        ],
      },
      {
        heading: "16. Speicherdauer", blocks: [
          p("Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist:"),
          list([
            "Kontodaten (Endkunden und Geschäftskunden): für die Dauer des Bestehens des Nutzerkontos bzw. Vertragsverhältnisses; nach Löschung des Kontos werden Daten grundsätzlich binnen 30 Tagen gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen",
            "Stempel-, Belohnungs- und Einlösedaten: für die Dauer des Kontos beim jeweiligen Partnerbetrieb; nach Kündigung des Geschäftskunden-Vertrags werden zugehörige Stempelkarten als inaktiv gekennzeichnet und nach 12 Monaten gelöscht",
            "Karten-Wallet-Daten (Ziffer 5.3): bis zur eigenständigen Löschung durch Sie oder bis zur Löschung Ihres Kontos",
            "Gamification-Daten (Level, Punkte, Streak, Wochenziel): für die Dauer des Bestehens Ihres Kontos",
            "Freundesverknüpfungen und Rangliste: bis zur Entfernung durch Sie oder bis zur Löschung Ihres Kontos",
            "Rechnungs- und Zahlungsdaten: gemäß § 132 BAO und § 212 UGB 7 Jahre",
            "Push-Zustell- und Interaktionsprotokolle: 12 Monate",
            "Server-Logfiles: in der Regel 30 bis 90 Tage",
            "Standortdaten zur Stempelverifizierung: keine dauerhafte Speicherung; Verarbeitung nur für die Dauer der Verifizierung, anschließend Reduktion auf ein Ereignisprotokoll (Zeitpunkt, Ergebnis)",
            "Support-Kommunikation: 3 Jahre ab Abschluss des Vorgangs, sofern keine längere Aufbewahrung gesetzlich geboten ist",
          ]),
        ],
      },
      {
        heading: "17. Ihre Rechte als betroffene Person", blocks: [
          p("Ihnen stehen nach Maßgabe der gesetzlichen Voraussetzungen folgende Rechte zu:"),
          list([
            "Auskunftsrecht (Art. 15 DSGVO)",
            "Recht auf Berichtigung (Art. 16 DSGVO)",
            "Recht auf Löschung (Art. 17 DSGVO)",
            "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
            "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
            "Widerspruchsrecht gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. f DSGVO gestützt sind (Art. 21 DSGVO)",
            "Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)",
          ]),
          p("Zur Ausübung dieser Rechte genügt eine formlose Mitteilung an support@tapradar.app. Wir werden Ihr Anliegen unverzüglich, spätestens jedoch innerhalb eines Monats, bearbeiten; diese Frist kann bei komplexen oder zahlreichen Anfragen um weitere zwei Monate verlängert werden, worüber wir Sie informieren."),
        ],
      },
      {
        heading: "18. Datensicherheit", blocks: [
          p("Wir setzen angemessene technische und organisatorische Maßnahmen gemäß Art. 32 DSGVO ein, um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen, darunter Verschlüsselung der Datenübertragung (TLS), Verschlüsselung besonders sensibler gespeicherter Daten wie Passwörter und Karten-Wallet-Daten, Zugriffsbeschränkungen nach dem Prinzip der geringsten Berechtigung, regelmäßige Sicherheitsupdates sowie Protokollierung sicherheitsrelevanter Ereignisse. Unsere Sicherheitsmaßnahmen werden fortlaufend an den Stand der Technik angepasst."),
        ],
      },
      {
        heading: "19. Keine automatisierte Entscheidungsfindung, eingeschränktes Profiling", blocks: [
          p("Level, Punkte und Ranglisten innerhalb der App beruhen auf automatisierten, aber vollständig transparenten und nachvollziehbaren Regeln ohne rechtliche oder ähnlich erhebliche Wirkung im Sinne des Art. 22 DSGVO. Im Rahmen der Proximity-Werbung (Ziffer 7.2) findet eine begrenzte, standortbasierte Profilbildung statt, um Ihnen Benachrichtigungen von Partnerbetrieben in Ihrer Nähe anzuzeigen; diese Verarbeitung beruht ausschließlich auf Ihrer Einwilligung und hat keine rechtliche oder vergleichbar erhebliche Wirkung im Sinne des Art. 22 DSGVO. Eine automatisierte Entscheidungsfindung mit Rechtswirkung gegenüber Nutzerinnen und Nutzern findet nicht statt."),
        ],
      },
      {
        heading: "20. Schutz Minderjähriger", blocks: [
          p("TapRadar richtet sich nicht gezielt an Kinder unter 14 Jahren. Sollten wir feststellen, dass ohne Einwilligung eines Erziehungsberechtigten personenbezogene Daten eines Kindes unter dem nach nationalem Recht maßgeblichen Mindestalter erhoben wurden, werden wir diese Daten unverzüglich löschen."),
        ],
      },
      {
        heading: "21. Änderungen dieser Datenschutzerklärung", blocks: [
          p("Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder neue Funktionen der Plattform anzupassen. Es gilt jeweils die zum Zeitpunkt Ihres Besuchs bzw. Ihrer Nutzung aktuelle, unter www.tapradar.app/datenschutz veröffentlichte Fassung. Bei wesentlichen Änderungen, die auf einer geänderten Rechtsgrundlage wie einer erstmaligen Einwilligung beruhen, holen wir diese Einwilligung erneut ein."),
        ],
      },
      {
        heading: "22. Kontakt und Beschwerderecht", blocks: [
          p("Bei Fragen zum Datenschutz erreichen Sie uns unter support@tapradar.app. Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht zu, Beschwerde bei einer Aufsichtsbehörde einzulegen, insbesondere bei der für Österreich zuständigen Behörde:"),
          list(["Österreichische Datenschutzbehörde", "Barichgasse 40-42, 1030 Wien, Österreich", "Website: www.dsb.gv.at"]),
          callout("Mehrsprachigkeit", "Die Website der Österreichischen Datenschutzbehörde ist derzeit auf Deutsch sowie auszugsweise auf Englisch abrufbar. Sollte Deutsch nicht Ihre bevorzugte Sprache sein, können Sie sich zusätzlich jederzeit formlos an support@tapradar.app wenden; wir unterstützen Sie in den auf dieser Website verfügbaren Sprachen beim Kontakt mit der Aufsichtsbehörde."),
        ],
      },
    ],
    sourcesHeading: "Quellenverzeichnis",
    sourcesIntro: "Amtliche EU- und österreichische Fundstellen, die dieser Datenschutzerklärung zugrunde liegen:",
    sources: [
      { label: "Datenschutz-Grundverordnung (DSGVO / GDPR), Verordnung (EU) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Österreichische Datenschutzbehörde", url: "https://www.dsb.gv.at/" },
    ],
  },
  en: {
    title: "Privacy Policy",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Last updated: 9 August 2026 · Version 2026-08-09.2 (detailed version)",
    intro: [
      p("Protecting your personal data is a central concern for TOY GmbH. This privacy policy informs you comprehensively and in detail about which personal data we collect in connection with your use of the TapRadar app and its four functional areas Radar, Stamp, Cards and Home, the TapRadar website, and the TapRadar business-customer dashboard (together \"TapRadar\" or the \"Platform\"), for which purposes and on which legal basis we process this data, to whom we disclose data, how long we store it, and what rights you have as a data subject. This policy applies both to end customers using the free TapRadar app and to business customers who have subscribed to one of the paid TapRadar plans Bronze, Gold or Platinum. It is based on Regulation (EU) 2016/679 (General Data Protection Regulation, \"GDPR\") and the relevant Austrian implementing provisions, in particular the Data Protection Act (DSG) and the Telecommunications Act 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Controller", blocks: [
          p("The controller within the meaning of Art. 4(7) GDPR is:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austria", "VAT ID: ATU78882167", "Email: support@tapradar.app", "Website: www.tapradar.app"]),
          p("No company data protection officer has been appointed, as the requirements of Art. 37 GDPR are not met. Please direct privacy-related inquiries to the email address above; we process them without undue delay, and no later than one month after receipt."),
        ],
      },
      {
        heading: "2. Structure of this policy", blocks: [
          p("To help you navigate quickly, this privacy policy is divided into a general part (items 1 to 4), a specific part describing the four functional areas of the app as well as location and push data in detail (items 5 to 7), a part on business customers, payments and reviews (items 8 to 12), a part on the website, recipients, third-country transfers and retention periods (items 13 to 16), and a part on your rights, data security and other notices (items 17 to 22). A list of official sources can be found at the end of the document."),
        ],
      },
      {
        heading: "3. General principles of data processing", blocks: [
          p("We process personal data in accordance with the principles of the GDPR, in particular lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, and integrity and confidentiality (Art. 5 GDPR). Every processing of personal data is based on at least one of the following legal bases:"),
          list([
            "Art. 6(1)(a) GDPR – consent of the data subject, in particular for sharing location data, receiving push notifications, and the optional friends and leaderboard feature",
            "Art. 6(1)(b) GDPR – necessity for the performance of a contract or to take pre-contractual steps, such as providing the Radar, Stamp, Cards and Home app features and managing subscriptions",
            "Art. 6(1)(c) GDPR – compliance with a legal obligation, such as tax and corporate record-keeping requirements",
            "Art. 6(1)(f) GDPR – legitimate interests, such as fraud and abuse prevention, IT security, and further development of the platform, provided these are not overridden by the interests or fundamental rights of the data subject",
          ]),
        ],
      },
      {
        heading: "4. Overview: who processes what?", blocks: [
          p("TapRadar connects two user groups: end customers who discover local businesses and collect stamps through the free app, and business customers who manage their customer loyalty through the paid dashboard. Both groups generate data that is processed partly exclusively by TOY GmbH and partly jointly with the respective contractual partner. Items 5 to 12 below describe these data flows in detail, structured by the four app areas as well as by location, push, payment and review data."),
        ],
      },
      {
        heading: "5.1 Radar – discover local businesses", blocks: [
          p("In the Radar area, we show you TapRadar partner businesses near you on a map. You can narrow the view using filters (offer, voucher, reward, top-rated, 500-metre radius) and categories such as café, restaurant, hairdresser or market. For each partner business, opening hours, reviews and a plan badge indicating the tariff chosen by that business (Bronze, Gold or Platinum) are shown; this badge relates solely to the business customer and does not constitute personal data about you."),
          p("To provide this feature, we process your location (see item 6), the filter and category settings you choose, and your interactions with displayed partner businesses, such as opening a business profile. We use this interaction data to improve search results and increase the relevance of the partner businesses shown. Legal basis: Art. 6(1)(a) GDPR for sharing your location, Art. 6(1)(b) and (f) GDPR for filter, category and interaction data."),
        ],
      },
      {
        heading: "5.2 Stamp – collect digital loyalty stamps", blocks: [
          p("In the Stamp area, you can automatically receive a digital stamp by tapping an NFC point or, alternatively, by scanning a QR code at a partner business's till. Your progress, e.g. 7 of 10 stamps, is displayed immediately; once the required number of stamps is reached, you can redeem the stored reward, for example a free coffee or a discount. You also receive points toward your Home level for every stamp."),
          p("For this purpose, we process the time and location of each stamp, the partner business concerned, the current stamp count per loyalty card, redeemed rewards and the associated redemption code. Legal basis: Art. 6(1)(b) GDPR. To verify that a stamp was actually collected on site, we additionally match your device location; see item 6 for details."),
        ],
      },
      {
        heading: "5.3 Cards – digital wallet for existing loyalty cards", blocks: [
          p("In the Cards area, you can digitally store existing third-party loyalty cards, e.g. from Billa, DM, H&M, Spar or Hofer, in your TapRadar wallet by scanning or manually entering the respective barcode or QR code, and then present it at the till. The brands named are only examples of cards you store yourself; TapRadar is not affiliated with these companies and does not exchange any data with them."),
          callout("Important", "The data stored in the card wallet comes exclusively from you. We do not verify whether the entered cards are genuine, valid, or attributable to the respective third party, and we do not receive any bonus or account data from these companies. You are solely responsible for the accuracy of the stored card data and its acceptance at the respective till."),
          p("The card and barcode data you store is encrypted and used exclusively to display it within your own app. Legal basis: Art. 6(1)(b) GDPR, as you specifically instruct us to store the data by adding the card."),
        ],
      },
      {
        heading: "5.4 Home – profile and gamification", blocks: [
          p("In the Home area you will find your profile with a 20-tier level system ranging from \"Newcomer\" to \"Champion\". You earn points for stamps collected, reviews submitted and friends invited, track a weekly goal, and benefit from a streak system where seven consecutive active days trigger a bonus. You can also invite friends and compare your progress on a leaderboard."),
          p("For this purpose, we process your point balance, your level, your streak counter, your goal history, and – if you actively use this feature – the list of friends you have invited or connected with and their aggregated progress data visible to you, provided those persons have also consented to mutual visibility. Legal basis for the core features (level, points, streak, weekly goal): Art. 6(1)(b) GDPR. Legal basis for the optional friends and leaderboard feature: Art. 6(1)(a) GDPR, as this makes data visible to other persons. Levels, points and rankings have no monetary value and are not transferable."),
        ],
      },
      {
        heading: "6. Location and GPS data in detail", blocks: [
          p("TapRadar uses your device's location data for two separate purposes: (a) the Radar feature to show partner businesses near you, and (b) verifying customer visits by matching your device's location at the time of an NFC or QR stamp with the stored location of the partner business, to prevent stamping without physical presence."),
          p("Depending on your operating system, you can control location sharing granularly, e.g. with options such as \"always\", \"only while using the app\", or \"once\". For the core stamp-verification feature, sharing while using the app is sufficient; permanent background location sharing is only required if you want to use a Platinum partner business's proximity advertising (see item 7.2). Legal basis: Art. 6(1)(a) GDPR in conjunction with your operating system's permission settings, and alternatively our legitimate interest in fraud prevention under Art. 6(1)(f) GDPR. You may revoke location sharing at any time via your device settings; individual features, in particular stamp verification and proximity advertising, will then be unavailable or limited."),
        ],
      },
      {
        heading: "7.1 Service notifications from TapRadar", blocks: [
          p("We send service push messages under our own responsibility, e.g. regarding account security, material changes to the platform, or confirmation of transactions. Legal basis: Art. 6(1)(b) and (f) GDPR."),
        ],
      },
      {
        heading: "7.2 Marketing and campaign push notifications from business customers", blocks: [
          p("Business customers can send campaigns and push notifications via the dashboard to end customers who are either already customers of the respective partner business (at least one stamp collected) or who are nearby – within the proximity advertising feature available exclusively in the Platinum plan – and have granted location sharing for this purpose. Push notifications are limited to a certain frequency depending on the plan (Gold: up to 2 image/PDF campaigns per month, no push notifications; Platinum: up to 4 campaigns per month plus push notifications, proximity triggering, campaign countdown and retargeting within 30 days of your last visit)."),
          callout("Responsibility for push campaigns", "The respective business customer is responsible for the content, lawfulness and fair-trading compliance of a campaign. TOY GmbH provides the technical delivery infrastructure, ensures compliance with frequency limits, and ensures the possibility of opting out at any time. In this respect, TOY GmbH and the respective business customer act as joint controllers within the meaning of Art. 26 GDPR regarding the triggering and delivery of push campaigns; the essence of this allocation of responsibility is summarised in this item, and the substance of the arrangement is made available to data subjects on request to support@tapradar.app."),
          p("You can disable the receipt of marketing and campaign push notifications at any time, either completely or per partner business, via your device settings or the in-app settings, without losing access to the app's core features. Legal basis: Art. 6(1)(a) GDPR in conjunction with § 174 TKG 2021."),
        ],
      },
      {
        heading: "8. Registration and user account (end customers)", blocks: [
          p("When registering in the TapRadar app, we collect your email address, password (stored encrypted), chosen display name, and optional profile details. Purpose: setting up, managing and securing your user account. Legal basis: Art. 6(1)(b) GDPR."),
        ],
      },
      {
        heading: "9. Registration, account and company data (business customers)", blocks: [
          p("For business customers subscribing to a Bronze, Gold or Platinum plan, we additionally process: company name, legal form, business address, VAT ID, contact person (name, email, phone number), opening hours, category and description of the business, as well as uploaded image and PDF advertising material and campaign content. Purpose: contract performance, provision of the business dashboard, invoicing. Legal basis: Art. 6(1)(b) and (c) GDPR."),
        ],
      },
      {
        heading: "10. Employee PIN system", blocks: [
          p("Depending on their plan, business customers can set up up to 15 (Platinum), 5 (Gold) or 1 (Bronze) employee accounts with an individual PIN code. For this purpose, we process employee initials or names entered by the business customer, as well as an automated activity log of the stamps and redemptions carried out via the respective PIN. The respective business customer, as employer, is responsible for the lawfulness of this processing towards the employees concerned; TOY GmbH provides the technical infrastructure in this respect. Legal basis on the part of TOY GmbH: Art. 6(1)(b) GDPR and Art. 6(1)(f) GDPR."),
        ],
      },
      {
        heading: "11. Payment processing", blocks: [
          p("Payment processing for paid plans is carried out via our payment service provider, Stripe. We ourselves do not store complete payment card data; this is processed exclusively by Stripe. We receive confirmations of payment status and invoice amounts from Stripe, as well as, where applicable, the last four digits of the payment method used, for documentation and billing purposes. Legal basis: Art. 6(1)(b) and (c) GDPR. For further information on data processing by Stripe, please refer to Stripe's privacy policy at stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Reviews", blocks: [
          p("When you, as an end customer, submit a review of a partner business, we process the review text, the star rating, the time, and proof of a verified visit (stamp proof). Reviews are shown to the partner business and to other app users together with your display name. Legal basis: Art. 6(1)(a) GDPR in conjunction with Art. 6(1)(f) GDPR. If a review is reported as unlawful, e.g. because it is insulting or evidently not based on an actual visit, we examine the report and the review concerned as part of our reporting and review procedure and inform both the reporting person and the reviewer of the outcome."),
        ],
      },
      {
        heading: "13. Use of the website, server log files and cookies", blocks: [
          p("When you access our website www.tapradar.app, our hosting provider automatically processes technical access data (IP address, date and time of access, page accessed, browser and operating system used, referrer URL) in server log files. Purpose: ensuring smooth operation and IT security. Legal basis: Art. 6(1)(f) GDPR. The website uses only technically necessary cookies required for the site to function; we currently do not use tracking or marketing cookies. Should this change in future, we will ask for your consent via a cookie consent banner."),
        ],
      },
      {
        heading: "14. Recipients and processors", blocks: [
          p("We only disclose personal data to the extent necessary to provide our services or where we are legally obliged to do so. Our processors and recipients include in particular:"),
          list([
            "Hosting and infrastructure providers (server and database operation)",
            "Stripe (payment processing)",
            "Push notification service providers (e.g. Apple Push Notification Service, Firebase Cloud Messaging) for service and campaign push",
            "Email delivery service providers (transactional and service communication)",
            "IT service providers for maintenance and support",
          ]),
          p("We have entered into data processing agreements pursuant to Art. 28 GDPR with all processors, where legally required. Where a partner business (business customer) views your stamp, visit or campaign data in the dashboard as part of contract performance, it acts in this respect as an independent controller or, in the case of push campaigns, as a joint controller pursuant to item 7.2 of this policy."),
        ],
      },
      {
        heading: "15. Transfers to third countries", blocks: [
          p("To the extent that any of the service providers named above process data outside the European Economic Area (EEA), which may in particular concern certain cloud and push services of US providers, we ensure through appropriate safeguards that an adequate level of data protection is maintained, in particular through the conclusion of EU Standard Contractual Clauses pursuant to Art. 46(2)(c) GDPR or the recipient's certification under the EU-U.S. Data Privacy Framework, where applicable."),
        ],
      },
      {
        heading: "16. Retention periods", blocks: [
          p("We store personal data only for as long as necessary for the respective purposes:"),
          list([
            "Account data (end customers and business customers): for the duration of the user account or contractual relationship; after account deletion, data is generally deleted within 30 days, unless statutory retention obligations prevent this",
            "Stamp, reward and redemption data: for the duration of the account with the respective partner business; after termination of the business customer contract, related loyalty cards are marked inactive and deleted after 12 months",
            "Card wallet data (item 5.3): until independently deleted by you or until your account is deleted",
            "Gamification data (level, points, streak, weekly goal): for the duration of your account",
            "Friend connections and leaderboard: until removed by you or until your account is deleted",
            "Invoice and payment data: 7 years pursuant to § 132 BAO and § 212 UGB",
            "Push delivery and interaction logs: 12 months",
            "Server log files: generally 30 to 90 days",
            "Location data for stamp verification: no permanent storage; processed only for the duration of verification, then reduced to an event log (time, result)",
            "Support communications: 3 years from closure of the case, unless a longer retention period is legally required",
          ]),
        ],
      },
      {
        heading: "17. Your rights as a data subject", blocks: [
          p("Subject to the statutory requirements, you have the following rights:"),
          list([
            "Right of access (Art. 15 GDPR)",
            "Right to rectification (Art. 16 GDPR)",
            "Right to erasure (Art. 17 GDPR)",
            "Right to restriction of processing (Art. 18 GDPR)",
            "Right to data portability (Art. 20 GDPR)",
            "Right to object to processing based on Art. 6(1)(f) GDPR (Art. 21 GDPR)",
            "Right to withdraw consent given, with effect for the future (Art. 7(3) GDPR)",
          ]),
          p("To exercise these rights, an informal message to support@tapradar.app is sufficient. We will process your request without undue delay, and no later than within one month; this period may be extended by a further two months for complex or numerous requests, of which we will inform you."),
        ],
      },
      {
        heading: "18. Data security", blocks: [
          p("We employ appropriate technical and organisational measures pursuant to Art. 32 GDPR to protect your data against loss, misuse and unauthorised access, including encryption of data in transit (TLS), encryption of particularly sensitive stored data such as passwords and card wallet data, access restrictions based on the principle of least privilege, regular security updates, and logging of security-relevant events. Our security measures are continuously adapted to the state of the art."),
        ],
      },
      {
        heading: "19. No automated decision-making, limited profiling", blocks: [
          p("Levels, points and leaderboards within the app are based on automated, but fully transparent and comprehensible rules, without any legal or similarly significant effect within the meaning of Art. 22 GDPR. Within the proximity advertising feature (item 7.2), limited, location-based profiling takes place to show you notifications from nearby partner businesses; this processing is based exclusively on your consent and has no legal or similarly significant effect within the meaning of Art. 22 GDPR. No automated decision-making with legal effect on users takes place."),
        ],
      },
      {
        heading: "20. Protection of minors", blocks: [
          p("TapRadar is not specifically directed at children under 14 years of age. Should we become aware that personal data of a child under the minimum age applicable under national law has been collected without the consent of a legal guardian, we will delete such data without undue delay."),
        ],
      },
      {
        heading: "21. Changes to this privacy policy", blocks: [
          p("We reserve the right to amend this privacy policy in order to adapt it to changed legal requirements or new platform features. The version published at www.tapradar.app/datenschutz at the time of your visit or use applies. In the case of material changes based on a changed legal basis, such as an initial consent, we will obtain that consent again."),
        ],
      },
      {
        heading: "22. Contact and right to lodge a complaint", blocks: [
          p("For privacy-related questions, you can reach us at support@tapradar.app. Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority, in particular the authority responsible for Austria:"),
          list(["Austrian Data Protection Authority (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Vienna, Austria", "Website: www.dsb.gv.at"]),
          callout("Multiple languages", "The Austrian Data Protection Authority's website is currently available in German, with information also available in English. If neither German nor English is your preferred language, you can always contact us informally at support@tapradar.app; we will assist you, in the languages available on this website, in reaching the supervisory authority."),
        ],
      },
    ],
    sourcesHeading: "Sources",
    sourcesIntro: "Official EU and Austrian sources underlying this privacy policy:",
    sources: [
      { label: "General Data Protection Regulation (GDPR), Regulation (EU) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Austrian Data Protection Authority", url: "https://www.dsb.gv.at/" },
    ],
  },
  tr: {
    title: "Gizlilik Politikası",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Güncelleme: 9 Ağustos 2026 · Sürüm 2026-08-09.2 (ayrıntılı sürüm)",
    intro: [
      p("Kişisel verilerinizin korunması TOY GmbH için önemli bir konudur. Bu gizlilik politikası; Radar, Stempel (Damga), Kartlar ve Home olmak üzere dört işlev alanına sahip TapRadar uygulamasını, TapRadar web sitesini ve TapRadar işletme müşterisi panelini (birlikte \"TapRadar\" veya \"Platform\") kullanmanızla bağlantılı olarak hangi kişisel verileri topladığımızı, bunları hangi amaçlarla ve hangi hukuki dayanakla işlediğimizi, verileri kime aktardığımızı, ne kadar süreyle sakladığımızı ve ilgili kişi olarak size hangi hakların tanındığını ayrıntılı olarak açıklar. Bu politika, hem ücretsiz TapRadar uygulamasını kullanan son kullanıcılar için hem de Bronze, Gold veya Platinum ücretli TapRadar planlarından birine abone olan işletme müşterileri için geçerlidir. Politika, (AB) 2016/679 sayılı Tüzük (Genel Veri Koruma Tüzüğü, \"GDPR\") ile ilgili Avusturya uygulama hükümlerine, özellikle Veri Koruma Kanunu (DSG) ve 2021 Telekomünikasyon Kanunu'na (TKG 2021) dayanmaktadır."),
    ],
    sections: [
      {
        heading: "1. Veri sorumlusu", blocks: [
          p("GDPR madde 4/7 anlamında veri sorumlusu:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Avusturya", "Vergi No: ATU78882167", "E-posta: support@tapradar.app", "Web sitesi: www.tapradar.app"]),
          p("GDPR madde 37'deki koşullar sağlanmadığından şirket içi bir veri koruma görevlisi atanmamıştır. Gizlilikle ilgili taleplerinizi lütfen yukarıdaki e-posta adresine iletin; taleplerinizi gecikmeksizin, en geç bir ay içinde yanıtlıyoruz."),
        ],
      },
      {
        heading: "2. Bu politikanın yapısı", blocks: [
          p("Hızlıca yönünüzü bulabilmeniz için bu gizlilik politikası; genel bir bölüm (1-4. maddeler), uygulamanın dört işlev alanını ile konum ve push verilerini ayrıntılı olarak açıklayan özel bir bölüm (5-7. maddeler), işletme müşterileri, ödemeler ve değerlendirmelerle ilgili bir bölüm (8-12. maddeler), web sitesi, alıcılar, üçüncü ülkelere aktarım ve saklama süreleriyle ilgili bir bölüm (13-16. maddeler) ile haklarınız, veri güvenliği ve diğer açıklamalarla ilgili bir bölüme (17-22. maddeler) ayrılmıştır. Resmi kaynakların listesi belgenin sonunda yer almaktadır."),
        ],
      },
      {
        heading: "3. Veri işlemenin genel ilkeleri", blocks: [
          p("Kişisel verileri; hukuka uygunluk, dürüstlük, şeffaflık, amaçla sınırlılık, veri minimizasyonu, doğruluk, saklama süresinin sınırlandırılması ile bütünlük ve gizlilik ilkeleri (GDPR md. 5) başta olmak üzere GDPR ilkelerine uygun şekilde işliyoruz. Her veri işleme faaliyeti aşağıdaki hukuki dayanaklardan en az birine dayanır:"),
          list([
            "GDPR md. 6/1(a) – ilgili kişinin rızası; özellikle konum verilerinin paylaşılması, push bildirimlerinin alınması ve isteğe bağlı arkadaş/liderlik tablosu özelliği için",
            "GDPR md. 6/1(b) – bir sözleşmenin ifası veya sözleşme öncesi adımların atılması için gereklilik; örneğin Radar, Stempel, Kartlar ve Home uygulama özelliklerinin sağlanması ile aboneliklerin yönetimi",
            "GDPR md. 6/1(c) – yasal bir yükümlülüğün yerine getirilmesi; örneğin vergi ve ticaret hukuku kapsamındaki saklama yükümlülükleri",
            "GDPR md. 6/1(f) – meşru menfaatlerin korunması; örneğin dolandırıcılık ve kötüye kullanımın önlenmesi, BT güvenliği ve platformun geliştirilmesi, ilgili kişinin menfaat veya temel haklarının bu menfaatlere üstün gelmemesi kaydıyla",
          ]),
        ],
      },
      {
        heading: "4. Genel bakış: kim neyi işliyor?", blocks: [
          p("TapRadar iki kullanıcı grubunu birbirine bağlar: ücretsiz uygulama üzerinden yerel işletmeleri keşfeden ve damga toplayan son kullanıcılar ile ücretli panel üzerinden müşteri sadakatini yöneten işletme müşterileri. Her iki grup da, kısmen yalnızca TOY GmbH tarafından, kısmen de ilgili sözleşme tarafıyla birlikte işlenen veriler üretir. Aşağıdaki 5-12. maddeler, bu veri akışlarını dört uygulama alanına ve konum, push, ödeme ile değerlendirme verilerine göre ayrıntılı olarak açıklamaktadır."),
        ],
      },
      {
        heading: "5.1 Radar – yerel işletmeleri keşfedin", blocks: [
          p("Radar alanında size yakınınızdaki TapRadar iş ortaklarını bir harita üzerinde gösteriyoruz. Görünümü filtreler (aktion, kupon, ödül, en iyi, 500 metre yarıçap) ve kafe, restoran, kuaför veya market gibi kategorilerle daraltabilirsiniz. Her iş ortağı için çalışma saatleri, değerlendirmeler ve o işletmenin seçtiği planı (Bronze, Gold veya Platinum) gösteren bir plan rozeti görüntülenir; bu rozet yalnızca işletme müşterisiyle ilgilidir ve sizinle ilgili kişisel bir veri teşkil etmez."),
          p("Bu özelliği sunmak için konumunuzu (bkz. madde 6), seçtiğiniz filtre ve kategori ayarlarını ve görüntülenen iş ortaklarıyla etkileşimlerinizi (örneğin bir işletme profilini açmanızı) işliyoruz. Bu etkileşim verilerini arama sonuçlarını iyileştirmek ve gösterilen iş ortaklarının uygunluğunu artırmak için kullanıyoruz. Hukuki dayanak: konum paylaşımı için GDPR md. 6/1(a), filtre, kategori ve etkileşim verileri için GDPR md. 6/1(b) ve (f)."),
        ],
      },
      {
        heading: "5.2 Stempel – dijital damga toplayın", blocks: [
          p("Stempel alanında, bir NFC noktasına dokunarak veya alternatif olarak bir iş ortağının kasasında QR kodunu okutarak otomatik olarak dijital bir damga alabilirsiniz. İlerlemeniz, örneğin 10 üzerinden 7 damga, anında gösterilir; gerekli damga sayısına ulaştığınızda kayıtlı ödülü, örneğin ücretsiz bir kahveyi veya indirimi kullanabilirsiniz. Topladığınız her damga için ayrıca Home bölümündeki seviyeniz için puan kazanırsınız."),
          p("Bu amaçla, her damganın zamanını ve yerini, ilgili iş ortağını, her sadakat kartındaki güncel damga sayısını, kullanılan ödülleri ve ilgili kullanım kodunu işliyoruz. Hukuki dayanak: GDPR md. 6/1(b). Bir damganın gerçekten yerinde alındığını doğrulamak için ayrıca cihaz konumunuzu karşılaştırıyoruz; ayrıntılar için madde 6'ya bakınız."),
        ],
      },
      {
        heading: "5.3 Kartlar – mevcut müşteri kartları için dijital cüzdan", blocks: [
          p("Kartlar alanında, örneğin Billa, DM, H&M, Spar veya Hofer gibi üçüncü taraflara ait mevcut müşteri kartlarınızı, ilgili barkodu veya QR kodunu tarayarak veya manuel olarak girerek TapRadar cüzdanınıza dijital olarak kaydedebilir ve ardından kasada gösterebilirsiniz. Belirtilen markalar yalnızca kendinizin sakladığı kartlara örnek teşkil etmektedir; TapRadar bu şirketlerle bağlantılı değildir ve bu şirketlerle herhangi bir veri alışverişinde bulunmaz."),
          callout("Önemli", "Kart cüzdanında saklanan veriler yalnızca sizin tarafınızdan girilmektedir. Girilen kartların gerçek, geçerli olup olmadığını veya ilgili üçüncü tarafla eşleşip eşleşmediğini kontrol etmiyoruz ve bu şirketlerden herhangi bir bonus veya hesap verisi almıyoruz. Kayıtlı kart verilerinin doğruluğundan ve ilgili kasada kabul edilmesinden yalnızca siz sorumlusunuz."),
          p("Kaydettiğiniz kart ve barkod verileri şifrelenerek saklanır ve yalnızca kendi uygulamanızda görüntülenmek amacıyla kullanılır. Hukuki dayanak: GDPR md. 6/1(b), zira kartı eklemeniz yoluyla bizi bu verileri saklamakla açıkça görevlendirmiş olursunuz."),
        ],
      },
      {
        heading: "5.4 Home – profil ve oyunlaştırma", blocks: [
          p("Home alanında, \"Acemi\"den \"Şampiyon\"a kadar 20 seviyeli bir seviye sisteminden oluşan profilinizi bulabilirsiniz. Toplanan damgalar, verilen değerlendirmeler ve davet edilen arkadaşlar için puan kazanır, haftalık bir hedefi takip eder ve yedi ardışık aktif günün bonus tetiklediği bir seri (streak) sisteminden yararlanırsınız. Ayrıca arkadaşlarınızı davet edebilir ve ilerlemenizi bir liderlik tablosunda karşılaştırabilirsiniz."),
          p("Bu amaçla, puan durumunuzu, seviyenizi, seri sayacınızı, hedef geçmişinizi ve bu özelliği aktif olarak kullanmanız halinde davet ettiğiniz veya bağlandığınız arkadaşların listesini ve bu kişilerin karşılıklı görünürlüğe de onay vermiş olmaları kaydıyla sizin görebileceğiniz toplu ilerleme verilerini işliyoruz. Temel özellikler (seviye, puan, seri, haftalık hedef) için hukuki dayanak: GDPR md. 6/1(b). İsteğe bağlı arkadaş ve liderlik tablosu özelliği için hukuki dayanak: GDPR md. 6/1(a), zira bu özellik verileri diğer kişilere görünür kılar. Seviyeler, puanlar ve sıralamalar herhangi bir parasal değere sahip değildir ve devredilemez."),
        ],
      },
      {
        heading: "6. Konum ve GPS verileri ayrıntılı olarak", blocks: [
          p("TapRadar, cihazınızın konum verilerini iki ayrı amaç için kullanır: (a) yakınınızdaki iş ortaklarını göstermek için Radar özelliği ve (b) bir NFC veya QR damgası sırasında cihazınızın konumunu iş ortağının kayıtlı konumuyla karşılaştırarak, fiziksel olarak orada bulunmadan damga alınmasını önlemek amacıyla müşteri ziyaretlerinin doğrulanması."),
          p("İşletim sisteminize bağlı olarak konum paylaşımını \"her zaman\", \"yalnızca uygulama kullanılırken\" veya \"yalnızca bir kez\" gibi seçeneklerle ayrıntılı biçimde denetleyebilirsiniz. Temel damga doğrulama işlevi için uygulama kullanılırken paylaşım yeterlidir; sürekli arka plan konum paylaşımı yalnızca bir Platinum iş ortağının yakınlık (proximity) reklamlarını kullanmak istemeniz halinde gereklidir (bkz. madde 7.2). Hukuki dayanak: işletim sisteminizin izin ayarlarıyla bağlantılı olarak GDPR md. 6/1(a), alternatif olarak GDPR md. 6/1(f) uyarınca dolandırıcılığın önlenmesindeki meşru menfaatimiz. Konum paylaşımını cihaz ayarlarınız üzerinden istediğiniz zaman geri alabilirsiniz; bu durumda özellikle damga doğrulama ve yakınlık reklamları gibi bazı özellikler kullanılamaz veya sınırlı olarak kullanılabilir."),
        ],
      },
      {
        heading: "7.1 TapRadar'dan servis bildirimleri", blocks: [
          p("Hesap güvenliği, platformdaki önemli değişiklikler veya işlemlerin onaylanması gibi konularda kendi sorumluluğumuz altında servis push mesajları gönderiyoruz. Hukuki dayanak: GDPR md. 6/1(b) ve (f)."),
        ],
      },
      {
        heading: "7.2 İşletme müşterilerinden pazarlama ve kampanya push bildirimleri", blocks: [
          p("İşletme müşterileri, panel üzerinden, ilgili iş ortağının zaten müşterisi olan (en az bir damga toplamış) veya yalnızca Platinum planda sunulan yakınlık reklamları kapsamında yakınında bulunan ve bunun için konum paylaşımı vermiş olan son kullanıcılara kampanya ve push bildirimleri gönderebilir. Push bildirimleri plana bağlı olarak belirli bir sıklıkla sınırlıdır (Gold: ayda en fazla 2 görsel/PDF kampanyası, push bildirimi yok; Platinum: ayda en fazla 4 kampanya, ayrıca push bildirimleri, yakınlık tetikleme, kampanya geri sayımı ve son ziyaretinizden itibaren 30 gün içinde yeniden hedefleme)."),
          callout("Push kampanyalarında sorumluluk", "Bir kampanyanın içeriğinden, hukuka uygunluğundan ve haksız rekabet hukuku açısından uygunluğundan ilgili işletme müşterisi sorumludur. TOY GmbH, teknik teslimat altyapısını, sıklık sınırlarına uyulmasını ve her zaman vazgeçme (opt-out) imkânını sağlar. Bu kapsamda TOY GmbH ve ilgili işletme müşterisi, push kampanyalarının tetiklenmesi ve teslimi bakımından GDPR md. 26 anlamında birlikte veri sorumlusu olarak hareket eder; bu sorumluluk paylaşımının ana hatları bu maddede özetlenmiştir, düzenlemenin esası talep üzerine support@tapradar.app adresinden ilgili kişilere sunulur."),
          p("Pazarlama ve kampanya push bildirimlerini istediğiniz zaman, tamamen veya iş ortağı bazında, cihaz ayarlarınız veya uygulama içi ayarlar üzerinden devre dışı bırakabilirsiniz; bu durumda uygulamanın temel özelliklerine erişiminiz kısıtlanmaz. Hukuki dayanak: TKG 2021 § 174 ile bağlantılı olarak GDPR md. 6/1(a)."),
        ],
      },
      {
        heading: "8. Kayıt ve kullanıcı hesabı (son kullanıcılar)", blocks: [
          p("TapRadar uygulamasına kayıt olurken e-posta adresinizi, şifrenizi (şifrelenmiş olarak saklanır), seçtiğiniz görünen adı ve isteğe bağlı profil bilgilerini topluyoruz. Amaç: kullanıcı hesabınızın kurulması, yönetilmesi ve güvence altına alınması. Hukuki dayanak: GDPR md. 6/1(b)."),
        ],
      },
      {
        heading: "9. Kayıt, hesap ve şirket verileri (işletme müşterileri)", blocks: [
          p("Bronze, Gold veya Platinum plana abone olan işletme müşterileri için ayrıca şunları işliyoruz: şirket adı, hukuki yapı, işletme adresi, vergi numarası, iletişim kişisi (ad, e-posta, telefon numarası), çalışma saatleri, işletme kategorisi ve açıklaması ile yüklenen görsel ve PDF reklam materyalleri ve kampanya içerikleri. Amaç: sözleşmenin ifası, işletme panelinin sağlanması, faturalandırma. Hukuki dayanak: GDPR md. 6/1(b) ve (c)."),
        ],
      },
      {
        heading: "10. Çalışan PIN sistemi", blocks: [
          p("İşletme müşterileri, planlarına bağlı olarak en fazla 15 (Platinum), 5 (Gold) veya 1 (Bronze) çalışana bireysel PIN koduyla erişim tanımlayabilir. Bu amaçla, işletme müşterisi tarafından girilen çalışan kısaltmaları veya adlarını ile ilgili PIN üzerinden gerçekleştirilen damgalama ve kullanım işlemlerinin otomatik olarak tutulan bir etkinlik kaydını işliyoruz. Bu işlemenin ilgili çalışanlara karşı hukuka uygunluğundan işveren sıfatıyla ilgili işletme müşterisi sorumludur; TOY GmbH bu kapsamda yalnızca teknik altyapıyı sağlar. TOY GmbH tarafındaki hukuki dayanak: GDPR md. 6/1(b) ve GDPR md. 6/1(f)."),
        ],
      },
      {
        heading: "11. Ödeme işlemleri", blocks: [
          p("Ücretli planlar için ödeme işlemleri, ödeme hizmet sağlayıcımız Stripe üzerinden yürütülür. Tam ödeme kartı verilerini kendimiz saklamıyoruz; bu veriler yalnızca Stripe tarafından işlenir. Stripe'tan, belgeleme ve faturalandırma amacıyla ödeme durumuna ve fatura tutarlarına ilişkin onayları ve gerektiğinde kullanılan ödeme yönteminin son dört hanesini alıyoruz. Hukuki dayanak: GDPR md. 6/1(b) ve (c). Stripe'ın veri işleme faaliyetleri hakkında daha fazla bilgi için stripe.com/privacy adresindeki Stripe gizlilik politikasına bakınız."),
        ],
      },
      {
        heading: "12. Değerlendirmeler", blocks: [
          p("Son kullanıcı olarak bir iş ortağı hakkında değerlendirme yaptığınızda, değerlendirme metnini, yıldız puanını, zamanı ve doğrulanmış bir ziyaretin kanıtını (damga kanıtı) işliyoruz. Değerlendirmeler, görünen adınızla birlikte ilgili iş ortağına ve diğer uygulama kullanıcılarına gösterilir. Hukuki dayanak: GDPR md. 6/1(f) ile bağlantılı olarak md. 6/1(a). Bir değerlendirme hukuka aykırı olarak bildirildiğinde, örneğin hakaret içeriyorsa veya açıkça gerçek bir ziyarete dayanmıyorsa, bildirim ve söz konusu değerlendirmeyi bildirim ve inceleme prosedürümüz kapsamında değerlendirir, sonucu bildirimde bulunan kişiye ve değerlendirmeyi yapan kişiye iletiriz."),
        ],
      },
      {
        heading: "13. Web sitesinin kullanımı, sunucu günlük dosyaları ve çerezler", blocks: [
          p("www.tapradar.app web sitemize erişildiğinde, barındırma sağlayıcımız teknik erişim verilerini (IP adresi, erişim tarihi ve saati, erişilen sayfa, kullanılan tarayıcı ve işletim sistemi, yönlendiren URL) otomatik olarak sunucu günlük dosyalarında işler. Amaç: kesintisiz işletim ve BT güvenliğinin sağlanması. Hukuki dayanak: GDPR md. 6/1(f). Web sitesi yalnızca sitenin çalışması için gerekli olan teknik olarak zorunlu çerezleri kullanır; şu anda izleme veya pazarlama çerezleri kullanılmamaktadır. Bu durum ileride değişirse, bir çerez onay banner'ı aracılığıyla rızanızı talep edeceğiz."),
        ],
      },
      {
        heading: "14. Alıcılar ve veri işleyenler", blocks: [
          p("Kişisel verileri yalnızca hizmet ifası için gerekli olduğu ölçüde veya yasal olarak yükümlü olduğumuz durumlarda aktarıyoruz. Veri işleyenlerimiz ve alıcılarımız arasında özellikle şunlar yer almaktadır:"),
          list([
            "Barındırma ve altyapı sağlayıcıları (sunucu ve veritabanı işletimi)",
            "Stripe (ödeme işlemleri)",
            "Servis ve kampanya push bildirimleri için push bildirim hizmet sağlayıcıları (örn. Apple Push Notification Service, Firebase Cloud Messaging)",
            "E-posta gönderim hizmet sağlayıcıları (işlem ve servis iletişimi)",
            "Bakım ve destek kapsamında BT hizmet sağlayıcıları",
          ]),
          p("Yasal olarak gerekli olduğu ölçüde tüm veri işleyenlerle GDPR md. 28 uyarınca veri işleme sözleşmeleri imzaladık. Bir iş ortağının (işletme müşterisinin) sözleşmenin ifası kapsamında panelde damga, ziyaret veya kampanya verilerinizi görüntülemesi halinde, bu işletme bu kapsamda bağımsız bir veri sorumlusu olarak veya push kampanyaları söz konusu olduğunda bu politikanın 7.2. maddesi uyarınca birlikte veri sorumlusu olarak hareket eder."),
        ],
      },
      {
        heading: "15. Üçüncü ülkelere aktarım", blocks: [
          p("Yukarıda belirtilen hizmet sağlayıcılardan bazılarının verileri Avrupa Ekonomik Alanı (AEA) dışında işlemesi halinde – ki bu özellikle bazı ABD'li sağlayıcıların bulut ve push hizmetlerini ilgilendirebilir – uygun bir veri koruma düzeyinin sağlanması için, özellikle GDPR md. 46/2(c) uyarınca AB Standart Sözleşme Maddelerinin akdedilmesi veya geçerli olduğu ölçüde alıcının AB-ABD Veri Gizliliği Çerçevesi kapsamında sertifikalandırılması yoluyla uygun güvenceler sağlıyoruz."),
        ],
      },
      {
        heading: "16. Saklama süreleri", blocks: [
          p("Kişisel verileri yalnızca ilgili amaçlar için gerekli olduğu süre boyunca saklıyoruz:"),
          list([
            "Hesap verileri (son kullanıcılar ve işletme müşterileri): kullanıcı hesabı veya sözleşme ilişkisinin devamı süresince; hesap silindikten sonra, yasal saklama yükümlülükleri engel olmadığı sürece veriler genellikle 30 gün içinde silinir",
            "Damga, ödül ve kullanım verileri: ilgili iş ortağı nezdindeki hesabın devamı süresince; işletme müşterisi sözleşmesinin feshinden sonra ilgili sadakat kartları etkin olmayan olarak işaretlenir ve 12 ay sonra silinir",
            "Kart cüzdanı verileri (madde 5.3): sizin tarafınızdan silinene veya hesabınız silinene kadar",
            "Oyunlaştırma verileri (seviye, puan, seri, haftalık hedef): hesabınızın devamı süresince",
            "Arkadaş bağlantıları ve liderlik tablosu: sizin tarafınızdan kaldırılana veya hesabınız silinene kadar",
            "Fatura ve ödeme verileri: § 132 BAO ve § 212 UGB uyarınca 7 yıl",
            "Push teslimat ve etkileşim kayıtları: 12 ay",
            "Sunucu günlük dosyaları: genellikle 30 ila 90 gün",
            "Damga doğrulaması için konum verileri: kalıcı olarak saklanmaz; yalnızca doğrulama süresince işlenir, ardından bir olay kaydına (zaman, sonuç) indirgenir",
            "Destek iletişimi: yasal olarak daha uzun bir saklama gerekmediği sürece, işlemin kapanmasından itibaren 3 yıl",
          ]),
        ],
      },
      {
        heading: "17. İlgili kişi olarak haklarınız", blocks: [
          p("Yasal koşullar çerçevesinde aşağıdaki haklara sahipsiniz:"),
          list([
            "Erişim hakkı (GDPR md. 15)",
            "Düzeltme hakkı (GDPR md. 16)",
            "Silme hakkı (GDPR md. 17)",
            "İşlemenin kısıtlanmasını isteme hakkı (GDPR md. 18)",
            "Veri taşınabilirliği hakkı (GDPR md. 20)",
            "GDPR md. 6/1(f)'ye dayanan işlemelere itiraz hakkı (GDPR md. 21)",
            "Verilen rızayı gelecekte etkili olacak şekilde geri alma hakkı (GDPR md. 7/3)",
          ]),
          p("Bu hakları kullanmak için support@tapradar.app adresine gönderilecek şekilsiz bir bildirim yeterlidir. Talebinizi gecikmeksizin, en geç bir ay içinde işleme alacağız; bu süre karmaşık veya çok sayıda talep söz konusu olduğunda, sizi bilgilendirerek iki ay daha uzatılabilir."),
        ],
      },
      {
        heading: "18. Veri güvenliği", blocks: [
          p("Verilerinizi kayıp, kötüye kullanım ve yetkisiz erişime karşı korumak için GDPR md. 32 uyarınca uygun teknik ve organizasyonel önlemler alıyoruz; bunlar arasında veri aktarımının şifrelenmesi (TLS), şifreler ve kart cüzdanı verileri gibi özellikle hassas saklanan verilerin şifrelenmesi, en az yetki ilkesine dayalı erişim kısıtlamaları, düzenli güvenlik güncellemeleri ve güvenlikle ilgili olayların kaydedilmesi yer alır. Güvenlik önlemlerimiz teknolojinin güncel durumuna sürekli olarak uyarlanmaktadır."),
        ],
      },
      {
        heading: "19. Otomatik karar alma yok, sınırlı profil oluşturma", blocks: [
          p("Uygulama içindeki seviyeler, puanlar ve liderlik tabloları, GDPR md. 22 anlamında herhangi bir hukuki veya benzer şekilde önemli bir etkisi olmayan, otomatik ancak tamamen şeffaf ve anlaşılır kurallara dayanmaktadır. Yakınlık reklamları (madde 7.2) kapsamında, size yakınınızdaki iş ortaklarından bildirimler göstermek amacıyla sınırlı, konum tabanlı bir profil oluşturma gerçekleşir; bu işleme yalnızca rızanıza dayanır ve GDPR md. 22 anlamında herhangi bir hukuki veya benzer şekilde önemli bir etkisi yoktur. Kullanıcılar açısından hukuki etki doğuran otomatik bir karar alma süreci bulunmamaktadır."),
        ],
      },
      {
        heading: "20. Küçüklerin korunması", blocks: [
          p("TapRadar özellikle 14 yaşın altındaki çocuklara yönelik değildir. Ulusal hukuka göre geçerli olan asgari yaşın altındaki bir çocuğa ait kişisel verilerin, bir veli veya vasinin rızası olmaksızın toplandığını tespit etmemiz halinde, bu verileri gecikmeksizin sileriz."),
        ],
      },
      {
        heading: "21. Bu gizlilik politikasındaki değişiklikler", blocks: [
          p("Bu gizlilik politikasını, değişen hukuki koşullara veya platformun yeni özelliklerine uyarlamak amacıyla değiştirme hakkımızı saklı tutuyoruz. Ziyaretiniz veya kullanımınız sırasında www.tapradar.app/datenschutz adresinde yayımlanan güncel sürüm geçerlidir. İlk kez alınan bir rıza gibi değişen bir hukuki dayanağa bağlı önemli değişiklikler söz konusu olduğunda, bu rızayı yeniden alırız."),
        ],
      },
      {
        heading: "22. İletişim ve şikâyet hakkı", blocks: [
          p("Gizlilikle ilgili sorularınız için support@tapradar.app adresinden bize ulaşabilirsiniz. Diğer idari veya adli başvuru yollarına halel gelmeksizin, özellikle Avusturya için yetkili makam olmak üzere bir denetim makamına şikâyette bulunma hakkına sahipsiniz:"),
          list(["Avusturya Veri Koruma Kurumu (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Viyana, Avusturya", "Web sitesi: www.dsb.gv.at"]),
          callout("Çok dillilik", "Avusturya Veri Koruma Kurumu'nun web sitesi şu anda Almanca olarak, bazı bilgiler ise ayrıca İngilizce olarak sunulmaktadır. Almanca veya İngilizce tercih ettiğiniz dil değilse, her zaman support@tapradar.app adresinden bizimle şekilsiz olarak iletişime geçebilirsiniz; bu web sitesinde sunulan dillerde denetim makamıyla iletişiminizde size destek oluruz."),
        ],
      },
    ],
    sourcesHeading: "Kaynakça",
    sourcesIntro: "Bu gizlilik politikasının dayandığı resmi AB ve Avusturya kaynakları:",
    sources: [
      { label: "Genel Veri Koruma Tüzüğü (GDPR), (AB) 2016/679 sayılı Tüzük", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Avusturya Veri Koruma Kurumu", url: "https://www.dsb.gv.at/" },
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Mise à jour : 9 août 2026 · Version 2026-08-09.2 (version détaillée)",
    intro: [
      p("La protection de vos données à caractère personnel est une priorité pour TOY GmbH. Cette politique de confidentialité vous informe de manière complète et détaillée sur les données à caractère personnel que nous collectons dans le cadre de l'utilisation de l'application TapRadar et de ses quatre domaines fonctionnels Radar, Tampon, Cartes et Home, du site web TapRadar ainsi que du tableau de bord TapRadar pour clients professionnels (ensemble « TapRadar » ou la « Plateforme »), les finalités et la base juridique de ce traitement, les destinataires auxquels nous transmettons des données, la durée de conservation et les droits dont vous disposez en tant que personne concernée. Cette politique s'applique tant aux clients finaux utilisant l'application gratuite TapRadar qu'aux clients professionnels ayant souscrit à l'une des formules payantes Bronze, Gold ou Platinum. Elle repose sur le règlement (UE) 2016/679 (règlement général sur la protection des données, « RGPD ») ainsi que sur les dispositions d'application autrichiennes pertinentes, notamment la loi sur la protection des données (DSG) et la loi de 2021 sur les télécommunications (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Responsable du traitement", blocks: [
          p("Le responsable du traitement au sens de l'art. 4, point 7, du RGPD est :"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Autriche", "Numéro de TVA : ATU78882167", "E-mail : support@tapradar.app", "Site web : www.tapradar.app"]),
          p("Aucun délégué à la protection des données n'a été désigné, les conditions de l'art. 37 du RGPD n'étant pas réunies. Veuillez adresser vos demandes relatives à la protection des données à l'adresse e-mail ci-dessus ; nous les traitons sans délai, au plus tard dans un délai d'un mois à compter de leur réception."),
        ],
      },
      {
        heading: "2. Structure de cette politique", blocks: [
          p("Afin de vous permettre de vous orienter rapidement, cette politique de confidentialité se divise en une partie générale (points 1 à 4), une partie spécifique décrivant en détail les quatre domaines fonctionnels de l'application ainsi que les données de localisation et de notification push (points 5 à 7), une partie relative aux clients professionnels, aux paiements et aux avis (points 8 à 12), une partie relative au site web, aux destinataires, aux transferts vers des pays tiers et aux durées de conservation (points 13 à 16), ainsi qu'une partie relative à vos droits, à la sécurité des données et à d'autres informations (points 17 à 22). Une liste des sources officielles figure à la fin du document."),
        ],
      },
      {
        heading: "3. Principes généraux du traitement des données", blocks: [
          p("Nous traitons les données à caractère personnel dans le respect des principes du RGPD, notamment la licéité, la loyauté, la transparence, la limitation des finalités, la minimisation des données, l'exactitude, la limitation de la conservation ainsi que l'intégrité et la confidentialité (art. 5 du RGPD). Tout traitement de données à caractère personnel repose sur au moins l'une des bases juridiques suivantes :"),
          list([
            "Art. 6, § 1, point a) du RGPD – le consentement de la personne concernée, notamment pour le partage des données de localisation, la réception de notifications push et la fonction facultative d'amis et de classement",
            "Art. 6, § 1, point b) du RGPD – la nécessité à l'exécution d'un contrat ou à des mesures précontractuelles, par exemple la mise à disposition des fonctions Radar, Tampon, Cartes et Home ainsi que la gestion des abonnements",
            "Art. 6, § 1, point c) du RGPD – le respect d'une obligation légale, par exemple les obligations de conservation fiscales et commerciales",
            "Art. 6, § 1, point f) du RGPD – la protection d'intérêts légitimes, par exemple la prévention de la fraude et des abus, la sécurité informatique et le développement de la plateforme, dans la mesure où ces intérêts ne sont pas supplantés par les intérêts ou les droits fondamentaux de la personne concernée",
          ]),
        ],
      },
      {
        heading: "4. Vue d'ensemble : qui traite quoi ?", blocks: [
          p("TapRadar relie deux groupes d'utilisateurs : les clients finaux qui découvrent des commerces locaux et collectent des tampons via l'application gratuite, et les clients professionnels qui gèrent leur fidélisation client via le tableau de bord payant. Les deux groupes génèrent des données qui sont traitées en partie exclusivement par TOY GmbH, en partie conjointement avec le partenaire contractuel concerné. Les points 5 à 12 ci-dessous décrivent ces flux de données en détail, structurés selon les quatre domaines de l'application ainsi que selon les données de localisation, de notification push, de paiement et d'avis."),
        ],
      },
      {
        heading: "5.1 Radar – découvrir des commerces locaux", blocks: [
          p("Dans la section Radar, nous vous présentons sur une carte les commerces partenaires TapRadar situés à proximité. Vous pouvez affiner l'affichage à l'aide de filtres (offre, bon, récompense, mieux notés, rayon de 500 mètres) et de catégories telles que café, restaurant, coiffeur ou marché. Pour chaque commerce partenaire, les horaires d'ouverture, les avis et un badge indiquant la formule choisie par ce commerce (Bronze, Gold ou Platinum) sont affichés ; ce badge concerne exclusivement le client professionnel et ne constitue pas une donnée à caractère personnel vous concernant."),
          p("Pour fournir cette fonctionnalité, nous traitons votre localisation (voir point 6), les filtres et catégories que vous choisissez, ainsi que vos interactions avec les commerces partenaires affichés, par exemple la consultation du profil d'un commerce. Nous utilisons ces données d'interaction pour améliorer les résultats de recherche et augmenter la pertinence des commerces partenaires affichés. Base juridique : art. 6, § 1, point a) du RGPD pour le partage de la localisation, art. 6, § 1, points b) et f) du RGPD pour les données de filtre, de catégorie et d'interaction."),
        ],
      },
      {
        heading: "5.2 Tampon – collecter des tampons numériques", blocks: [
          p("Dans la section Tampon, vous pouvez recevoir automatiquement un tampon numérique en touchant un point NFC ou, alternativement, en scannant un code QR à la caisse d'un commerce partenaire. Votre progression, par exemple 7 tampons sur 10, s'affiche immédiatement ; une fois le nombre de tampons requis atteint, vous pouvez utiliser la récompense enregistrée, par exemple un café gratuit ou une réduction. Vous recevez également des points pour votre niveau dans la section Home pour chaque tampon."),
          p("À cette fin, nous traitons l'heure et le lieu de chaque tamponnage, le commerce partenaire concerné, le nombre actuel de tampons par carte de fidélité, les récompenses utilisées ainsi que le code d'utilisation correspondant. Base juridique : art. 6, § 1, point b) du RGPD. Afin de vérifier qu'un tamponnage a effectivement eu lieu sur place, nous comparons en outre la localisation de votre appareil ; voir le point 6 pour plus de détails."),
        ],
      },
      {
        heading: "5.3 Cartes – portefeuille numérique pour cartes de fidélité existantes", blocks: [
          p("Dans la section Cartes, vous pouvez enregistrer numériquement dans votre portefeuille TapRadar des cartes de fidélité de tiers déjà existantes, par exemple de Billa, DM, H&M, Spar ou Hofer, en scannant ou en saisissant manuellement le code-barres ou le code QR correspondant, puis en la présentant à la caisse. Les marques citées ne sont que des exemples de cartes que vous enregistrez vous-même ; TapRadar n'est affilié à aucune de ces entreprises et n'échange aucune donnée avec elles."),
          callout("Important", "Les données enregistrées dans le portefeuille de cartes proviennent exclusivement de vous. Nous ne vérifions pas si les cartes saisies sont authentiques, valides ou attribuables au tiers concerné, et nous ne recevons aucune donnée de bonus ou de compte de la part de ces entreprises. Vous êtes seul responsable de l'exactitude des données de carte enregistrées et de leur acceptation à la caisse concernée."),
          p("Les données de carte et de code-barres que vous enregistrez sont stockées de manière chiffrée et utilisées exclusivement pour l'affichage dans votre propre application. Base juridique : art. 6, § 1, point b) du RGPD, car vous nous chargez spécifiquement de ce stockage en ajoutant la carte."),
        ],
      },
      {
        heading: "5.4 Home – profil et gamification", blocks: [
          p("Dans la section Home, vous trouverez votre profil avec un système de niveaux à 20 échelons allant de « Débutant » à « Champion ». Vous gagnez des points pour les tampons collectés, les avis publiés et les amis invités, suivez un objectif hebdomadaire et profitez d'un système de séries dans lequel sept jours actifs consécutifs déclenchent un bonus. Vous pouvez également inviter des amis et comparer votre progression dans un classement."),
          p("À cette fin, nous traitons votre solde de points, votre niveau, votre compteur de série, votre historique d'objectifs ainsi que – si vous utilisez activement cette fonction – la liste des amis que vous avez invités ou avec qui vous êtes connecté, et leurs données de progression agrégées visibles pour vous, dans la mesure où ces personnes ont également consenti à la visibilité mutuelle. Base juridique pour les fonctions principales (niveau, points, série, objectif hebdomadaire) : art. 6, § 1, point b) du RGPD. Base juridique pour la fonction facultative d'amis et de classement : art. 6, § 1, point a) du RGPD, car cela rend des données visibles à d'autres personnes. Les niveaux, points et classements n'ont aucune valeur monétaire et ne sont pas transférables."),
        ],
      },
      {
        heading: "6. Données de localisation et GPS en détail", blocks: [
          p("TapRadar utilise les données de localisation de votre appareil à deux fins distinctes : (a) la fonction Radar pour afficher les commerces partenaires à proximité, et (b) la vérification des visites clients, en comparant la localisation de votre appareil au moment d'un tamponnage NFC ou QR avec la localisation enregistrée du commerce partenaire, afin d'empêcher un tamponnage sans présence physique."),
          p("Selon votre système d'exploitation, vous pouvez contrôler le partage de localisation de manière granulaire, par exemple avec les options « toujours », « uniquement pendant l'utilisation de l'application » ou « une seule fois ». Pour la fonction principale de vérification des tampons, un partage pendant l'utilisation de l'application suffit ; un partage permanent de la localisation en arrière-plan n'est nécessaire que si vous souhaitez utiliser la publicité de proximité d'un commerce partenaire Platinum (voir point 7.2). Base juridique : art. 6, § 1, point a) du RGPD en lien avec les paramètres d'autorisation de votre système d'exploitation, subsidiairement notre intérêt légitime à la prévention de la fraude conformément à l'art. 6, § 1, point f) du RGPD. Vous pouvez révoquer le partage de localisation à tout moment via les paramètres de votre appareil ; certaines fonctions, notamment la vérification des tampons et la publicité de proximité, ne seront alors plus disponibles ou seulement de manière limitée."),
        ],
      },
      {
        heading: "7.1 Notifications de service de TapRadar", blocks: [
          p("Nous envoyons des notifications push de service sous notre propre responsabilité, par exemple concernant la sécurité du compte, des modifications importantes de la plateforme ou la confirmation d'opérations. Base juridique : art. 6, § 1, points b) et f) du RGPD."),
        ],
      },
      {
        heading: "7.2 Notifications push marketing et campagnes des clients professionnels", blocks: [
          p("Les clients professionnels peuvent envoyer, via le tableau de bord, des campagnes et des notifications push aux clients finaux qui sont déjà clients du commerce partenaire concerné (au moins un tampon collecté) ou qui se trouvent à proximité – dans le cadre de la publicité de proximité disponible exclusivement dans la formule Platinum – et qui ont accordé un partage de localisation à cet effet. Les notifications push sont limitées à une certaine fréquence selon la formule (Gold : jusqu'à 2 campagnes image/PDF par mois, pas de notifications push ; Platinum : jusqu'à 4 campagnes par mois, plus notifications push, déclenchement de proximité, compte à rebours de campagne et reciblage dans les 30 jours suivant votre dernière visite)."),
          callout("Responsabilité pour les campagnes push", "Le client professionnel concerné est responsable du contenu, de la licéité et de la conformité au droit de la concurrence déloyale d'une campagne. TOY GmbH fournit l'infrastructure technique de diffusion, veille au respect des limites de fréquence ainsi qu'à la possibilité de se désinscrire à tout moment. À cet égard, TOY GmbH et le client professionnel concerné agissent en tant que responsables conjoints du traitement au sens de l'art. 26 du RGPD s'agissant du déclenchement et de la diffusion des campagnes push ; les grandes lignes de ce partage de responsabilité sont résumées dans le présent point, l'essentiel de l'accord étant mis à la disposition des personnes concernées sur demande à support@tapradar.app."),
          p("Vous pouvez désactiver à tout moment la réception de notifications push marketing et de campagnes, en totalité ou par commerce partenaire, via les paramètres de votre appareil ou les paramètres de l'application, sans que cela ne vous prive de l'accès aux fonctions principales de l'application. Base juridique : art. 6, § 1, point a) du RGPD en lien avec l'art. 174 du TKG 2021."),
        ],
      },
      {
        heading: "8. Inscription et compte utilisateur (clients finaux)", blocks: [
          p("Lors de l'inscription dans l'application TapRadar, nous collectons votre adresse e-mail, votre mot de passe (stocké de manière chiffrée), le nom d'affichage choisi ainsi que des informations de profil facultatives. Finalité : création, gestion et sécurisation de votre compte utilisateur. Base juridique : art. 6, § 1, point b) du RGPD."),
        ],
      },
      {
        heading: "9. Inscription, compte et données d'entreprise (clients professionnels)", blocks: [
          p("Pour les clients professionnels souscrivant à une formule Bronze, Gold ou Platinum, nous traitons en outre : le nom de l'entreprise, la forme juridique, l'adresse du commerce, le numéro de TVA, la personne de contact (nom, e-mail, numéro de téléphone), les horaires d'ouverture, la catégorie et la description du commerce, ainsi que les images et documents PDF publicitaires téléchargés et le contenu des campagnes. Finalité : exécution du contrat, mise à disposition du tableau de bord professionnel, facturation. Base juridique : art. 6, § 1, points b) et c) du RGPD."),
        ],
      },
      {
        heading: "10. Système de code PIN pour employés", blocks: [
          p("Selon leur formule, les clients professionnels peuvent créer jusqu'à 15 (Platinum), 5 (Gold) ou 1 (Bronze) accès employés avec un code PIN individuel. À cette fin, nous traitons les initiales ou noms d'employés saisis par le client professionnel, ainsi qu'un journal d'activité automatisé des tamponnages et utilisations effectués via le code PIN concerné. Le client professionnel concerné, en tant qu'employeur, est responsable de la licéité de ce traitement vis-à-vis des employés concernés ; TOY GmbH fournit à cet égard uniquement l'infrastructure technique. Base juridique du côté de TOY GmbH : art. 6, § 1, point b) du RGPD ainsi qu'art. 6, § 1, point f) du RGPD."),
        ],
      },
      {
        heading: "11. Traitement des paiements", blocks: [
          p("Le traitement des paiements pour les formules payantes s'effectue via notre prestataire de services de paiement Stripe. Nous ne stockons pas nous-mêmes de données de carte de paiement complètes ; celles-ci sont traitées exclusivement par Stripe. Nous recevons de Stripe des confirmations du statut de paiement et des montants de facture, ainsi que, le cas échéant, les quatre derniers chiffres du moyen de paiement utilisé, à des fins de documentation et de facturation. Base juridique : art. 6, § 1, points b) et c) du RGPD. Pour plus d'informations sur le traitement des données par Stripe, veuillez consulter la politique de confidentialité de Stripe sur stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Avis", blocks: [
          p("Lorsque vous, en tant que client final, publiez un avis sur un commerce partenaire, nous traitons le texte de l'avis, la notation par étoiles, l'horodatage ainsi que la preuve d'une visite vérifiée (justificatif de tampon). Les avis sont affichés au commerce partenaire ainsi qu'aux autres utilisateurs de l'application avec votre nom d'affichage. Base juridique : art. 6, § 1, point a) du RGPD en lien avec l'art. 6, § 1, point f) du RGPD. Si un avis est signalé comme illicite, par exemple parce qu'il est insultant ou manifestement non fondé sur une visite réelle, nous examinons le signalement et l'avis concerné dans le cadre de notre procédure de signalement et d'examen, et communiquons le résultat à la personne ayant signalé l'avis ainsi qu'à son auteur."),
        ],
      },
      {
        heading: "13. Utilisation du site web, fichiers journaux du serveur et cookies", blocks: [
          p("Lors de la consultation de notre site web www.tapradar.app, notre hébergeur traite automatiquement des données d'accès techniques (adresse IP, date et heure d'accès, page consultée, navigateur et système d'exploitation utilisés, URL de référence) dans des fichiers journaux du serveur. Finalité : garantir un fonctionnement sans incident et la sécurité informatique. Base juridique : art. 6, § 1, point f) du RGPD. Le site web utilise uniquement des cookies techniquement nécessaires au fonctionnement du site ; nous n'utilisons actuellement pas de cookies de suivi ou marketing. Si cela devait changer à l'avenir, nous solliciterons votre consentement via une bannière de consentement aux cookies."),
        ],
      },
      {
        heading: "14. Destinataires et sous-traitants", blocks: [
          p("Nous ne transmettons des données à caractère personnel que dans la mesure nécessaire à la fourniture de nos services ou lorsque nous y sommes légalement tenus. Nos sous-traitants ou destinataires comprennent notamment :"),
          list([
            "prestataires d'hébergement et d'infrastructure (exploitation des serveurs et bases de données)",
            "Stripe (traitement des paiements)",
            "prestataires de services de notification push (par ex. Apple Push Notification Service, Firebase Cloud Messaging) pour les notifications de service et de campagne",
            "prestataires d'envoi d'e-mails (communication transactionnelle et de service)",
            "prestataires informatiques dans le cadre de la maintenance et du support",
          ]),
          p("Nous avons conclu, dans la mesure légalement requise, des contrats de sous-traitance conformément à l'art. 28 du RGPD avec tous nos sous-traitants. Dans la mesure où un commerce partenaire (client professionnel) consulte vos données de tampon, de visite ou de campagne dans le tableau de bord dans le cadre de l'exécution du contrat, il agit à cet égard en tant que responsable de traitement indépendant ou, dans le cas de campagnes push, en tant que responsable conjoint conformément au point 7.2 de la présente politique."),
        ],
      },
      {
        heading: "15. Transferts vers des pays tiers", blocks: [
          p("Dans la mesure où certains des prestataires mentionnés ci-dessus traitent des données en dehors de l'Espace économique européen (EEE), ce qui peut notamment concerner certains services cloud et de notification push de prestataires américains, nous garantissons, par des garanties appropriées, un niveau de protection des données adéquat, notamment par la conclusion de clauses contractuelles types de l'UE conformément à l'art. 46, § 2, point c) du RGPD ou la certification du destinataire dans le cadre du Data Privacy Framework UE-États-Unis, le cas échéant."),
        ],
      },
      {
        heading: "16. Durées de conservation", blocks: [
          p("Nous ne conservons les données à caractère personnel que le temps nécessaire aux finalités respectives :"),
          list([
            "Données de compte (clients finaux et professionnels) : pendant la durée d'existence du compte utilisateur ou de la relation contractuelle ; après suppression du compte, les données sont en principe supprimées dans un délai de 30 jours, sauf obligations légales de conservation contraires",
            "Données de tampon, de récompense et d'utilisation : pendant la durée du compte auprès du commerce partenaire concerné ; après résiliation du contrat client professionnel, les cartes de fidélité correspondantes sont marquées comme inactives et supprimées après 12 mois",
            "Données du portefeuille de cartes (point 5.3) : jusqu'à leur suppression par vos soins ou jusqu'à la suppression de votre compte",
            "Données de gamification (niveau, points, série, objectif hebdomadaire) : pendant la durée d'existence de votre compte",
            "Connexions d'amis et classement : jusqu'à leur suppression par vos soins ou jusqu'à la suppression de votre compte",
            "Données de facturation et de paiement : 7 ans conformément au § 132 BAO et au § 212 UGB",
            "Journaux de diffusion et d'interaction push : 12 mois",
            "Fichiers journaux du serveur : généralement 30 à 90 jours",
            "Données de localisation pour la vérification des tampons : pas de stockage permanent ; traitement uniquement pendant la durée de la vérification, puis réduction à un journal d'événements (heure, résultat)",
            "Communications d'assistance : 3 ans à compter de la clôture du dossier, sauf conservation plus longue légalement requise",
          ]),
        ],
      },
      {
        heading: "17. Vos droits en tant que personne concernée", blocks: [
          p("Sous réserve des conditions légales, vous disposez des droits suivants :"),
          list([
            "droit d'accès (art. 15 du RGPD)",
            "droit de rectification (art. 16 du RGPD)",
            "droit à l'effacement (art. 17 du RGPD)",
            "droit à la limitation du traitement (art. 18 du RGPD)",
            "droit à la portabilité des données (art. 20 du RGPD)",
            "droit d'opposition aux traitements fondés sur l'art. 6, § 1, point f) du RGPD (art. 21 du RGPD)",
            "droit de retirer un consentement donné, avec effet pour l'avenir (art. 7, § 3, du RGPD)",
          ]),
          p("Pour exercer ces droits, un message informel à support@tapradar.app suffit. Nous traiterons votre demande sans délai, au plus tard dans un délai d'un mois ; ce délai peut être prolongé de deux mois supplémentaires en cas de demandes complexes ou nombreuses, ce dont nous vous informerons."),
        ],
      },
      {
        heading: "18. Sécurité des données", blocks: [
          p("Nous mettons en œuvre des mesures techniques et organisationnelles appropriées conformément à l'art. 32 du RGPD afin de protéger vos données contre la perte, l'utilisation abusive et l'accès non autorisé, notamment le chiffrement de la transmission des données (TLS), le chiffrement des données particulièrement sensibles stockées telles que les mots de passe et les données du portefeuille de cartes, des restrictions d'accès selon le principe du moindre privilège, des mises à jour de sécurité régulières ainsi que la journalisation des événements pertinents pour la sécurité. Nos mesures de sécurité sont continuellement adaptées à l'état de l'art."),
        ],
      },
      {
        heading: "19. Absence de décision automatisée, profilage limité", blocks: [
          p("Les niveaux, points et classements au sein de l'application reposent sur des règles automatisées, mais entièrement transparentes et compréhensibles, sans effet juridique ou effet significatif similaire au sens de l'art. 22 du RGPD. Dans le cadre de la publicité de proximité (point 7.2), un profilage limité basé sur la localisation a lieu afin de vous afficher des notifications de commerces partenaires à proximité ; ce traitement repose exclusivement sur votre consentement et n'a aucun effet juridique ou effet significatif similaire au sens de l'art. 22 du RGPD. Aucune décision automatisée ayant un effet juridique à l'égard des utilisateurs n'a lieu."),
        ],
      },
      {
        heading: "20. Protection des mineurs", blocks: [
          p("TapRadar ne s'adresse pas spécifiquement aux enfants de moins de 14 ans. Si nous constatons que des données à caractère personnel d'un enfant n'ayant pas atteint l'âge minimum applicable en vertu du droit national ont été collectées sans le consentement d'un représentant légal, nous supprimerons ces données sans délai."),
        ],
      },
      {
        heading: "21. Modifications de cette politique de confidentialité", blocks: [
          p("Nous nous réservons le droit de modifier cette politique de confidentialité afin de l'adapter à l'évolution du cadre juridique ou aux nouvelles fonctionnalités de la plateforme. La version publiée sur www.tapradar.app/datenschutz au moment de votre visite ou utilisation fait foi. En cas de modifications substantielles reposant sur une base juridique modifiée, telle qu'un consentement initial, nous recueillerons à nouveau ce consentement."),
        ],
      },
      {
        heading: "22. Contact et droit de réclamation", blocks: [
          p("Pour toute question relative à la protection des données, vous pouvez nous contacter à support@tapradar.app. Sans préjudice de tout autre recours administratif ou judiciaire, vous avez le droit d'introduire une réclamation auprès d'une autorité de contrôle, notamment l'autorité compétente pour l'Autriche :"),
          list(["Autorité autrichienne de protection des données (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Vienne, Autriche", "Site web : www.dsb.gv.at"]),
          callout("Multilinguisme", "Le site web de l'autorité autrichienne de protection des données est actuellement disponible en allemand, avec certaines informations également en anglais. Si ni l'allemand ni l'anglais ne sont votre langue préférée, vous pouvez toujours nous contacter de manière informelle à support@tapradar.app ; nous vous assisterons, dans les langues disponibles sur ce site, dans vos démarches auprès de l'autorité de contrôle."),
        ],
      },
    ],
    sourcesHeading: "Sources",
    sourcesIntro: "Sources officielles de l'UE et autrichiennes sur lesquelles repose cette politique de confidentialité :",
    sources: [
      { label: "Règlement général sur la protection des données (RGPD), règlement (UE) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Autorité autrichienne de protection des données", url: "https://www.dsb.gv.at/" },
    ],
  },
  it: {
    title: "Informativa sulla privacy",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Aggiornamento: 9 agosto 2026 · Versione 2026-08-09.2 (versione dettagliata)",
    intro: [
      p("La tutela dei tuoi dati personali è un aspetto centrale per TOY GmbH. La presente informativa sulla privacy ti informa in modo completo e dettagliato su quali dati personali raccogliamo in relazione all'utilizzo dell'app TapRadar con le sue quattro aree funzionali Radar, Timbro, Carte e Home, del sito web TapRadar nonché della dashboard TapRadar per clienti commerciali (congiuntamente \"TapRadar\" o la \"Piattaforma\"), per quali finalità e su quale base giuridica li trattiamo, a chi trasmettiamo i dati, per quanto tempo li conserviamo e quali diritti ti spettano in qualità di interessato. La presente informativa si applica sia ai clienti finali che utilizzano l'app gratuita TapRadar, sia ai clienti commerciali che hanno sottoscritto uno dei piani a pagamento Bronze, Gold o Platinum. Si basa sul Regolamento (UE) 2016/679 (Regolamento generale sulla protezione dei dati, \"GDPR\") nonché sulle relative disposizioni di attuazione austriache, in particolare la legge sulla protezione dei dati (DSG) e la legge sulle telecomunicazioni 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Titolare del trattamento", blocks: [
          p("Il titolare del trattamento ai sensi dell'art. 4, n. 7, del GDPR è:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austria", "Partita IVA: ATU78882167", "E-mail: support@tapradar.app", "Sito web: www.tapradar.app"]),
          p("Non è stato nominato un responsabile della protezione dei dati aziendale, poiché non sussistono i presupposti di cui all'art. 37 del GDPR. Si prega di inviare le richieste relative alla privacy all'indirizzo e-mail sopra indicato; le tratteremo senza ritardo e comunque entro un mese dal ricevimento."),
        ],
      },
      {
        heading: "2. Struttura della presente informativa", blocks: [
          p("Per consentirti di orientarti rapidamente, questa informativa sulla privacy è suddivisa in una parte generale (punti 1-4), una parte specifica che descrive in dettaglio le quattro aree funzionali dell'app nonché i dati di localizzazione e push (punti 5-7), una parte relativa ai clienti commerciali, ai pagamenti e alle recensioni (punti 8-12), una parte relativa al sito web, ai destinatari, al trasferimento verso paesi terzi e ai periodi di conservazione (punti 13-16), nonché una parte relativa ai tuoi diritti, alla sicurezza dei dati e ad altre informazioni (punti 17-22). Un elenco delle fonti ufficiali è riportato alla fine del documento."),
        ],
      },
      {
        heading: "3. Principi generali del trattamento dei dati", blocks: [
          p("Trattiamo i dati personali nel rispetto dei principi del GDPR, in particolare liceità, correttezza, trasparenza, limitazione della finalità, minimizzazione dei dati, esattezza, limitazione della conservazione, nonché integrità e riservatezza (art. 5 del GDPR). Ogni trattamento di dati personali si basa su almeno una delle seguenti basi giuridiche:"),
          list([
            "Art. 6, par. 1, lett. a) del GDPR – consenso dell'interessato, in particolare per la condivisione dei dati di localizzazione, la ricezione di notifiche push e la funzione facoltativa di amici e classifica",
            "Art. 6, par. 1, lett. b) del GDPR – necessità per l'esecuzione di un contratto o per l'adozione di misure precontrattuali, ad esempio la fornitura delle funzioni Radar, Timbro, Carte e Home dell'app nonché la gestione degli abbonamenti",
            "Art. 6, par. 1, lett. c) del GDPR – adempimento di un obbligo legale, ad esempio obblighi di conservazione fiscali e societari",
            "Art. 6, par. 1, lett. f) del GDPR – tutela di legittimi interessi, ad esempio prevenzione di frodi e abusi, sicurezza informatica e sviluppo della piattaforma, purché tali interessi non siano prevalenti rispetto agli interessi o ai diritti fondamentali dell'interessato",
          ]),
        ],
      },
      {
        heading: "4. Panoramica: chi tratta cosa?", blocks: [
          p("TapRadar collega due gruppi di utenti: i clienti finali che scoprono attività commerciali locali e raccolgono timbri tramite l'app gratuita, e i clienti commerciali che gestiscono la fidelizzazione dei clienti tramite la dashboard a pagamento. Entrambi i gruppi generano dati che vengono trattati in parte esclusivamente da TOY GmbH, in parte congiuntamente con il rispettivo partner contrattuale. I punti 5-12 seguenti descrivono in dettaglio questi flussi di dati, suddivisi per le quattro aree dell'app nonché per i dati di localizzazione, push, pagamento e recensioni."),
        ],
      },
      {
        heading: "5.1 Radar – scoprire attività commerciali locali", blocks: [
          p("Nell'area Radar ti mostriamo su una mappa le attività partner TapRadar nelle tue vicinanze. Puoi restringere la visualizzazione tramite filtri (offerta, buono, ricompensa, meglio valutati, raggio di 500 metri) e categorie come caffè, ristorante, parrucchiere o mercato. Per ogni attività partner vengono visualizzati gli orari di apertura, le recensioni e un badge del piano che indica la tariffa scelta da tale attività (Bronze, Gold o Platinum); questo badge riguarda esclusivamente il cliente commerciale e non costituisce un dato personale che ti riguarda."),
          p("Per fornire questa funzione, trattiamo la tua posizione (vedi punto 6), le impostazioni di filtro e categoria da te scelte, nonché le tue interazioni con le attività partner visualizzate, ad esempio l'apertura del profilo di un'attività. Utilizziamo questi dati di interazione per migliorare i risultati di ricerca e aumentare la pertinenza delle attività partner visualizzate. Base giuridica: art. 6, par. 1, lett. a) del GDPR per la condivisione della posizione, art. 6, par. 1, lett. b) e f) del GDPR per i dati di filtro, categoria e interazione."),
        ],
      },
      {
        heading: "5.2 Timbro – raccogliere timbri digitali", blocks: [
          p("Nell'area Timbro puoi ricevere automaticamente un timbro digitale toccando un punto NFC o, in alternativa, scansionando un codice QR alla cassa di un'attività partner. I tuoi progressi, ad esempio 7 timbri su 10, vengono visualizzati immediatamente; al raggiungimento del numero di timbri richiesto puoi riscattare la ricompensa memorizzata, ad esempio un caffè gratis o uno sconto. Per ogni timbro ricevi inoltre punti per il tuo livello nell'area Home."),
          p("A tal fine trattiamo l'ora e il luogo di ogni timbratura, l'attività partner interessata, il numero attuale di timbri per ciascuna carta fedeltà, le ricompense riscattate nonché il relativo codice di riscatto. Base giuridica: art. 6, par. 1, lett. b) del GDPR. Per verificare che una timbratura sia effettivamente avvenuta sul posto, confrontiamo inoltre la posizione del tuo dispositivo; per maggiori dettagli vedi il punto 6."),
        ],
      },
      {
        heading: "5.3 Carte – portafoglio digitale per carte fedeltà esistenti", blocks: [
          p("Nell'area Carte puoi memorizzare digitalmente nel tuo portafoglio TapRadar carte fedeltà di terzi già esistenti, ad esempio di Billa, DM, H&M, Spar o Hofer, scansionando o inserendo manualmente il rispettivo codice a barre o codice QR, per poi mostrarla alla cassa. I marchi citati sono solo esempi di carte che memorizzi tu stesso; TapRadar non è collegata a queste aziende e non effettua alcuno scambio di dati con esse."),
          callout("Importante", "I dati memorizzati nel portafoglio carte provengono esclusivamente da te. Non verifichiamo se le carte inserite sono autentiche, valide o riconducibili al rispettivo terzo, e non riceviamo alcun dato bonus o account da queste aziende. Sei tu il solo responsabile dell'esattezza dei dati delle carte memorizzate e della loro accettazione presso la rispettiva cassa."),
          p("I dati delle carte e dei codici a barre da te memorizzati vengono conservati in forma crittografata e utilizzati esclusivamente per la visualizzazione nella tua app. Base giuridica: art. 6, par. 1, lett. b) del GDPR, poiché ci incarichi specificamente della memorizzazione aggiungendo la carta."),
        ],
      },
      {
        heading: "5.4 Home – profilo e gamification", blocks: [
          p("Nell'area Home trovi il tuo profilo con un sistema di livelli a 20 gradini che va da \"Principiante\" a \"Campione\". Guadagni punti per i timbri raccolti, le recensioni pubblicate e gli amici invitati, segui un obiettivo settimanale e usufruisci di un sistema di serie (streak) in cui sette giorni attivi consecutivi attivano un bonus. Inoltre puoi invitare amici e confrontare i tuoi progressi in una classifica."),
          p("A tal fine trattiamo il tuo saldo punti, il tuo livello, il contatore della serie, la cronologia dei tuoi obiettivi nonché – se utilizzi attivamente questa funzione – l'elenco degli amici da te invitati o collegati e i relativi dati di progresso aggregati a te visibili, purché anche tali persone abbiano acconsentito alla reciproca visibilità. Base giuridica per le funzioni principali (livello, punti, serie, obiettivo settimanale): art. 6, par. 1, lett. b) del GDPR. Base giuridica per la funzione facoltativa di amici e classifica: art. 6, par. 1, lett. a) del GDPR, poiché ciò rende visibili dati ad altre persone. Livelli, punti e posizioni in classifica non hanno alcun valore monetario e non sono trasferibili."),
        ],
      },
      {
        heading: "6. Dati di localizzazione e GPS in dettaglio", blocks: [
          p("TapRadar utilizza i dati di localizzazione del tuo dispositivo per due finalità distinte: (a) la funzione Radar per mostrare le attività partner nelle tue vicinanze e (b) la verifica delle visite dei clienti, confrontando la posizione del tuo dispositivo al momento di una timbratura NFC o QR con la posizione memorizzata dell'attività partner, al fine di impedire una timbratura senza presenza fisica."),
          p("A seconda del sistema operativo, puoi controllare la condivisione della posizione in modo granulare, ad esempio con le opzioni \"sempre\", \"solo durante l'utilizzo dell'app\" o \"una sola volta\". Per la funzione principale di verifica dei timbri è sufficiente la condivisione durante l'utilizzo dell'app; una condivisione permanente della posizione in background è necessaria solo se desideri utilizzare la pubblicità di prossimità di un'attività partner Platinum (vedi punto 7.2). Base giuridica: art. 6, par. 1, lett. a) del GDPR in combinato disposto con le impostazioni di autorizzazione del tuo sistema operativo, in via subordinata il nostro legittimo interesse alla prevenzione delle frodi ai sensi dell'art. 6, par. 1, lett. f) del GDPR. Puoi revocare la condivisione della posizione in qualsiasi momento tramite le impostazioni del tuo dispositivo; alcune funzioni, in particolare la verifica dei timbri e la pubblicità di prossimità, non saranno più disponibili o lo saranno solo in modo limitato."),
        ],
      },
      {
        heading: "7.1 Notifiche di servizio da TapRadar", blocks: [
          p("Inviamo notifiche push di servizio sotto la nostra responsabilità, ad esempio in merito alla sicurezza dell'account, a modifiche sostanziali della piattaforma o alla conferma di operazioni. Base giuridica: art. 6, par. 1, lett. b) e f) del GDPR."),
        ],
      },
      {
        heading: "7.2 Notifiche push marketing e di campagna dei clienti commerciali", blocks: [
          p("I clienti commerciali possono inviare tramite la dashboard campagne e notifiche push ai clienti finali che sono già clienti dell'attività partner interessata (almeno un timbro raccolto) o che si trovano nelle vicinanze – nell'ambito della pubblicità di prossimità disponibile esclusivamente nel piano Platinum – e che hanno concesso a tal fine la condivisione della posizione. Le notifiche push sono limitate a una determinata frequenza a seconda del piano (Gold: fino a 2 campagne immagine/PDF al mese, nessuna notifica push; Platinum: fino a 4 campagne al mese oltre a notifiche push, attivazione di prossimità, conto alla rovescia della campagna e retargeting entro 30 giorni dall'ultima visita)."),
          callout("Responsabilità per le campagne push", "Il rispettivo cliente commerciale è responsabile del contenuto, della liceità e della conformità di una campagna al diritto della concorrenza sleale. TOY GmbH fornisce l'infrastruttura tecnica di distribuzione, garantisce il rispetto dei limiti di frequenza nonché la possibilità di disattivazione in qualsiasi momento. A tale riguardo, TOY GmbH e il rispettivo cliente commerciale agiscono come contitolari del trattamento ai sensi dell'art. 26 del GDPR per quanto riguarda l'attivazione e la distribuzione delle campagne push; le linee essenziali di questa ripartizione di responsabilità sono riassunte nel presente punto, mentre gli elementi essenziali dell'accordo vengono messi a disposizione degli interessati su richiesta a support@tapradar.app."),
          p("Puoi disattivare in qualsiasi momento la ricezione di notifiche push di marketing e campagna, completamente o per singola attività partner, tramite le impostazioni del tuo dispositivo o le impostazioni all'interno dell'app, senza che ciò comporti la perdita dell'accesso alle funzioni principali dell'app. Base giuridica: art. 6, par. 1, lett. a) del GDPR in combinato disposto con il § 174 del TKG 2021."),
        ],
      },
      {
        heading: "8. Registrazione e account utente (clienti finali)", blocks: [
          p("Al momento della registrazione nell'app TapRadar raccogliamo l'indirizzo e-mail, la password (memorizzata in forma crittografata), il nome visualizzato scelto nonché informazioni facoltative sul profilo. Finalità: creazione, gestione e protezione del tuo account utente. Base giuridica: art. 6, par. 1, lett. b) del GDPR."),
        ],
      },
      {
        heading: "9. Registrazione, account e dati aziendali (clienti commerciali)", blocks: [
          p("Per i clienti commerciali che sottoscrivono un piano Bronze, Gold o Platinum, trattiamo inoltre: ragione sociale, forma giuridica, indirizzo della sede, partita IVA, referente (nome, e-mail, numero di telefono), orari di apertura, categoria e descrizione dell'attività, nonché materiale pubblicitario in immagini e PDF caricato e contenuti delle campagne. Finalità: esecuzione del contratto, fornitura della dashboard per clienti commerciali, fatturazione. Base giuridica: art. 6, par. 1, lett. b) e c) del GDPR."),
        ],
      },
      {
        heading: "10. Sistema PIN per i dipendenti", blocks: [
          p("A seconda del piano, i clienti commerciali possono configurare fino a 15 (Platinum), 5 (Gold) o 1 (Bronze) accessi per dipendenti con un codice PIN individuale. A tal fine trattiamo le iniziali o i nomi dei dipendenti inseriti dal cliente commerciale, nonché un registro delle attività, gestito automaticamente, delle timbrature e dei riscatti effettuati tramite il rispettivo PIN. Il rispettivo cliente commerciale, in qualità di datore di lavoro, è responsabile della liceità di questo trattamento nei confronti dei dipendenti interessati; TOY GmbH fornisce a tal riguardo esclusivamente l'infrastruttura tecnica. Base giuridica per TOY GmbH: art. 6, par. 1, lett. b) del GDPR nonché art. 6, par. 1, lett. f) del GDPR."),
        ],
      },
      {
        heading: "11. Elaborazione dei pagamenti", blocks: [
          p("L'elaborazione dei pagamenti per i piani a pagamento avviene tramite il nostro fornitore di servizi di pagamento Stripe. Noi stessi non memorizziamo dati completi delle carte di pagamento; questi vengono trattati esclusivamente da Stripe. Riceviamo da Stripe conferme sullo stato del pagamento e sugli importi delle fatture, nonché, se del caso, le ultime quattro cifre del mezzo di pagamento utilizzato, a fini di documentazione e fatturazione. Base giuridica: art. 6, par. 1, lett. b) e c) del GDPR. Per ulteriori informazioni sul trattamento dei dati da parte di Stripe, consulta l'informativa sulla privacy di Stripe su stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Recensioni", blocks: [
          p("Quando tu, in qualità di cliente finale, pubblichi una recensione su un'attività partner, trattiamo il testo della recensione, la valutazione in stelle, l'orario nonché la prova di una visita verificata (prova del timbro). Le recensioni vengono mostrate all'attività partner e ad altri utenti dell'app insieme al tuo nome visualizzato. Base giuridica: art. 6, par. 1, lett. a) del GDPR in combinato disposto con l'art. 6, par. 1, lett. f) del GDPR. Se una recensione viene segnalata come illecita, ad esempio perché offensiva o palesemente non basata su una visita reale, esaminiamo la segnalazione e la recensione interessata nell'ambito della nostra procedura di segnalazione ed esame e comunichiamo l'esito sia alla persona che ha effettuato la segnalazione sia all'autore della recensione."),
        ],
      },
      {
        heading: "13. Utilizzo del sito web, file di log del server e cookie", blocks: [
          p("Quando visiti il nostro sito web www.tapradar.app, il nostro provider di hosting elabora automaticamente dati di accesso tecnici (indirizzo IP, data e ora dell'accesso, pagina visitata, browser e sistema operativo utilizzati, URL di riferimento) in file di log del server. Finalità: garantire un funzionamento privo di interruzioni e la sicurezza informatica. Base giuridica: art. 6, par. 1, lett. f) del GDPR. Il sito web utilizza esclusivamente cookie tecnicamente necessari per il funzionamento del sito; attualmente non vengono utilizzati cookie di tracciamento o marketing. Qualora ciò dovesse cambiare in futuro, richiederemo il tuo consenso tramite un banner di consenso ai cookie."),
        ],
      },
      {
        heading: "14. Destinatari e responsabili del trattamento", blocks: [
          p("Trasmettiamo i dati personali solo nella misura necessaria per l'erogazione dei nostri servizi o laddove siamo legalmente obbligati a farlo. I nostri responsabili del trattamento o destinatari comprendono in particolare:"),
          list([
            "fornitori di servizi di hosting e infrastruttura (gestione di server e database)",
            "Stripe (elaborazione dei pagamenti)",
            "fornitori di servizi di notifica push (ad es. Apple Push Notification Service, Firebase Cloud Messaging) per notifiche push di servizio e campagna",
            "fornitori di servizi di invio e-mail (comunicazione transazionale e di servizio)",
            "fornitori di servizi IT nell'ambito di manutenzione e supporto",
          ]),
          p("Con tutti i responsabili del trattamento abbiamo concluso, nella misura legalmente richiesta, accordi sul trattamento dei dati ai sensi dell'art. 28 del GDPR. Nella misura in cui un'attività partner (cliente commerciale) visualizza nella dashboard i tuoi dati relativi a timbri, visite o campagne nell'ambito dell'esecuzione del contratto, essa agisce a tal riguardo come titolare autonomo del trattamento oppure, nel caso di campagne push, come contitolare ai sensi del punto 7.2 della presente informativa."),
        ],
      },
      {
        heading: "15. Trasferimento verso paesi terzi", blocks: [
          p("Nella misura in cui alcuni dei fornitori di servizi sopra citati trattano dati al di fuori dello Spazio economico europeo (SEE), il che può riguardare in particolare determinati servizi cloud e di notifica push di fornitori statunitensi, garantiamo, mediante garanzie adeguate, un livello adeguato di protezione dei dati, in particolare tramite la conclusione di clausole contrattuali standard dell'UE ai sensi dell'art. 46, par. 2, lett. c) del GDPR o la certificazione del destinatario nell'ambito del Data Privacy Framework UE-USA, ove applicabile."),
        ],
      },
      {
        heading: "16. Periodi di conservazione", blocks: [
          p("Conserviamo i dati personali solo per il tempo necessario alle rispettive finalità:"),
          list([
            "Dati dell'account (clienti finali e commerciali): per la durata dell'esistenza dell'account utente o del rapporto contrattuale; dopo la cancellazione dell'account, i dati vengono di norma cancellati entro 30 giorni, salvo obblighi legali di conservazione contrari",
            "Dati relativi a timbri, ricompense e riscatti: per la durata dell'account presso la rispettiva attività partner; dopo la risoluzione del contratto con il cliente commerciale, le relative carte fedeltà vengono contrassegnate come inattive e cancellate dopo 12 mesi",
            "Dati del portafoglio carte (punto 5.3): fino alla cancellazione autonoma da parte tua o fino alla cancellazione del tuo account",
            "Dati di gamification (livello, punti, serie, obiettivo settimanale): per la durata dell'esistenza del tuo account",
            "Collegamenti con amici e classifica: fino alla rimozione da parte tua o fino alla cancellazione del tuo account",
            "Dati di fatturazione e pagamento: 7 anni ai sensi del § 132 BAO e del § 212 UGB",
            "Registri di distribuzione e interazione push: 12 mesi",
            "File di log del server: generalmente da 30 a 90 giorni",
            "Dati di localizzazione per la verifica dei timbri: nessuna conservazione permanente; trattamento solo per la durata della verifica, successivamente ridotti a un registro degli eventi (ora, esito)",
            "Comunicazioni di assistenza: 3 anni dalla chiusura della pratica, salvo conservazione più lunga legalmente prescritta",
          ]),
        ],
      },
      {
        heading: "17. I tuoi diritti in qualità di interessato", blocks: [
          p("Fatti salvi i presupposti di legge, ti spettano i seguenti diritti:"),
          list([
            "diritto di accesso (art. 15 del GDPR)",
            "diritto di rettifica (art. 16 del GDPR)",
            "diritto alla cancellazione (art. 17 del GDPR)",
            "diritto di limitazione del trattamento (art. 18 del GDPR)",
            "diritto alla portabilità dei dati (art. 20 del GDPR)",
            "diritto di opposizione ai trattamenti basati sull'art. 6, par. 1, lett. f) del GDPR (art. 21 del GDPR)",
            "diritto di revocare un consenso prestato, con effetto per il futuro (art. 7, par. 3, del GDPR)",
          ]),
          p("Per esercitare questi diritti è sufficiente una comunicazione informale a support@tapradar.app. Tratteremo la tua richiesta senza ritardo e comunque entro un mese; tale termine può essere prorogato di ulteriori due mesi in caso di richieste complesse o numerose, di cui ti informeremo."),
        ],
      },
      {
        heading: "18. Sicurezza dei dati", blocks: [
          p("Adottiamo misure tecniche e organizzative adeguate ai sensi dell'art. 32 del GDPR per proteggere i tuoi dati da perdita, uso improprio e accesso non autorizzato, tra cui la crittografia della trasmissione dei dati (TLS), la crittografia di dati memorizzati particolarmente sensibili come password e dati del portafoglio carte, restrizioni di accesso secondo il principio del privilegio minimo, aggiornamenti di sicurezza regolari nonché la registrazione di eventi rilevanti per la sicurezza. Le nostre misure di sicurezza vengono costantemente adeguate allo stato dell'arte."),
        ],
      },
      {
        heading: "19. Nessuna decisione automatizzata, profilazione limitata", blocks: [
          p("Livelli, punti e classifiche all'interno dell'app si basano su regole automatizzate ma pienamente trasparenti e comprensibili, prive di effetti giuridici o di effetti analogamente significativi ai sensi dell'art. 22 del GDPR. Nell'ambito della pubblicità di prossimità (punto 7.2) ha luogo una profilazione limitata basata sulla posizione, al fine di mostrarti notifiche di attività partner nelle vicinanze; questo trattamento si basa esclusivamente sul tuo consenso e non ha alcun effetto giuridico o effetto analogamente significativo ai sensi dell'art. 22 del GDPR. Non ha luogo alcuna decisione automatizzata con effetti giuridici nei confronti degli utenti."),
        ],
      },
      {
        heading: "20. Tutela dei minori", blocks: [
          p("TapRadar non è specificamente rivolta a bambini di età inferiore ai 14 anni. Qualora venissimo a conoscenza del fatto che dati personali di un minore al di sotto dell'età minima rilevante ai sensi del diritto nazionale sono stati raccolti senza il consenso di un genitore o tutore, provvederemo a cancellare tali dati senza ritardo."),
        ],
      },
      {
        heading: "21. Modifiche alla presente informativa sulla privacy", blocks: [
          p("Ci riserviamo il diritto di modificare la presente informativa sulla privacy per adeguarla a mutate condizioni giuridiche o a nuove funzionalità della piattaforma. Fa fede di volta in volta la versione pubblicata su www.tapradar.app/datenschutz al momento della tua visita o del tuo utilizzo. In caso di modifiche sostanziali basate su una base giuridica modificata, come un consenso inizialmente prestato, richiederemo nuovamente tale consenso."),
        ],
      },
      {
        heading: "22. Contatti e diritto di reclamo", blocks: [
          p("Per domande relative alla privacy puoi contattarci all'indirizzo support@tapradar.app. Fatto salvo ogni altro rimedio amministrativo o giurisdizionale, hai il diritto di proporre reclamo a un'autorità di controllo, in particolare all'autorità competente per l'Austria:"),
          list(["Autorità austriaca per la protezione dei dati (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Vienna, Austria", "Sito web: www.dsb.gv.at"]),
          callout("Multilinguismo", "Il sito web dell'autorità austriaca per la protezione dei dati è attualmente disponibile in tedesco, con alcune informazioni disponibili anche in inglese. Se né il tedesco né l'inglese sono la tua lingua preferita, puoi comunque contattarci in modo informale in qualsiasi momento all'indirizzo support@tapradar.app; ti assisteremo, nelle lingue disponibili su questo sito, nei contatti con l'autorità di controllo."),
        ],
      },
    ],
    sourcesHeading: "Fonti",
    sourcesIntro: "Fonti ufficiali dell'UE e austriache alla base della presente informativa sulla privacy:",
    sources: [
      { label: "Regolamento generale sulla protezione dei dati (GDPR), Regolamento (UE) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Autorità austriaca per la protezione dei dati", url: "https://www.dsb.gv.at/" },
    ],
  },
  es: {
    title: "Política de privacidad",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Actualizado: 9 de agosto de 2026 · Versión 2026-08-09.2 (versión detallada)",
    intro: [
      p("La protección de sus datos personales es una prioridad para TOY GmbH. Esta política de privacidad le informa de manera completa y detallada sobre qué datos personales recopilamos en relación con el uso de la aplicación TapRadar y sus cuatro áreas funcionales Radar, Sello, Tarjetas y Home, del sitio web de TapRadar y del panel de TapRadar para clientes comerciales (conjuntamente \"TapRadar\" o la \"Plataforma\"), con qué finalidades y sobre qué base jurídica los tratamos, a quién transmitimos los datos, cuánto tiempo los conservamos y qué derechos le corresponden como interesado. Esta política se aplica tanto a los clientes finales que utilizan la aplicación gratuita TapRadar como a los clientes comerciales que se han suscrito a uno de los planes de pago Bronze, Gold o Platinum. Se basa en el Reglamento (UE) 2016/679 (Reglamento General de Protección de Datos, «RGPD») así como en las disposiciones de aplicación austriacas pertinentes, en particular la Ley de Protección de Datos (DSG) y la Ley de Telecomunicaciones de 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Responsable del tratamiento", blocks: [
          p("El responsable del tratamiento en el sentido del art. 4, apartado 7, del RGPD es:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austria", "NIF-IVA: ATU78882167", "Correo electrónico: support@tapradar.app", "Sitio web: www.tapradar.app"]),
          p("No se ha designado un delegado de protección de datos, ya que no se cumplen los requisitos del art. 37 del RGPD. Diríjanos sus consultas sobre protección de datos a la dirección de correo electrónico indicada; las procesaremos sin demora indebida y, a más tardar, en el plazo de un mes desde su recepción."),
        ],
      },
      {
        heading: "2. Estructura de esta política", blocks: [
          p("Para que pueda orientarse rápidamente, esta política de privacidad se divide en una parte general (puntos 1 a 4), una parte específica que describe en detalle las cuatro áreas funcionales de la aplicación así como los datos de ubicación y notificaciones push (puntos 5 a 7), una parte relativa a los clientes comerciales, los pagos y las reseñas (puntos 8 a 12), una parte relativa al sitio web, los destinatarios, la transferencia a terceros países y los plazos de conservación (puntos 13 a 16), así como una parte relativa a sus derechos, la seguridad de los datos y otras indicaciones (puntos 17 a 22). Al final del documento encontrará un listado de fuentes oficiales."),
        ],
      },
      {
        heading: "3. Principios generales del tratamiento de datos", blocks: [
          p("Tratamos los datos personales respetando los principios del RGPD, en particular la licitud, la lealtad, la transparencia, la limitación de la finalidad, la minimización de datos, la exactitud, la limitación del plazo de conservación, así como la integridad y confidencialidad (art. 5 del RGPD). Todo tratamiento de datos personales se basa en al menos una de las siguientes bases jurídicas:"),
          list([
            "Art. 6, apartado 1, letra a) del RGPD – consentimiento del interesado, en particular para compartir datos de ubicación, recibir notificaciones push y la función opcional de amigos y clasificación",
            "Art. 6, apartado 1, letra b) del RGPD – necesidad para la ejecución de un contrato o para la adopción de medidas precontractuales, por ejemplo, la provisión de las funciones Radar, Sello, Tarjetas y Home de la aplicación, así como la gestión de suscripciones",
            "Art. 6, apartado 1, letra c) del RGPD – cumplimiento de una obligación legal, por ejemplo, obligaciones de conservación fiscal y mercantil",
            "Art. 6, apartado 1, letra f) del RGPD – salvaguarda de intereses legítimos, por ejemplo, la prevención del fraude y el abuso, la seguridad informática y el desarrollo de la plataforma, siempre que estos intereses no sean superados por los intereses o derechos fundamentales del interesado",
          ]),
        ],
      },
      {
        heading: "4. Resumen: ¿quién trata qué?", blocks: [
          p("TapRadar conecta a dos grupos de usuarios: los clientes finales que descubren comercios locales y recogen sellos a través de la aplicación gratuita, y los clientes comerciales que gestionan la fidelización de sus clientes a través del panel de pago. Ambos grupos generan datos que se tratan en parte exclusivamente por TOY GmbH y en parte conjuntamente con el respectivo socio contractual. Los puntos 5 a 12 siguientes describen en detalle estos flujos de datos, estructurados según las cuatro áreas de la aplicación, así como según los datos de ubicación, notificaciones push, pago y reseñas."),
        ],
      },
      {
        heading: "5.1 Radar – descubrir comercios locales", blocks: [
          p("En el área Radar le mostramos en un mapa los comercios asociados a TapRadar cercanos a usted. Puede acotar la vista mediante filtros (oferta, cupón, recompensa, mejor valorados, radio de 500 metros) y categorías como cafetería, restaurante, peluquería o mercado. Para cada comercio asociado se muestran el horario de apertura, las reseñas y una insignia de plan que indica la tarifa elegida por dicho comercio (Bronze, Gold o Platinum); esta insignia se refiere exclusivamente al cliente comercial y no constituye un dato personal suyo."),
          p("Para prestar esta función tratamos su ubicación (véase el punto 6), los ajustes de filtro y categoría que usted elija, así como sus interacciones con los comercios asociados mostrados, por ejemplo, abrir el perfil de un comercio. Utilizamos estos datos de interacción para mejorar los resultados de búsqueda y aumentar la relevancia de los comercios asociados mostrados. Base jurídica: art. 6, apartado 1, letra a) del RGPD para compartir la ubicación, art. 6, apartado 1, letras b) y f) del RGPD para los datos de filtro, categoría e interacción."),
        ],
      },
      {
        heading: "5.2 Sello – recoger sellos digitales", blocks: [
          p("En el área Sello puede recibir automáticamente un sello digital tocando un punto NFC o, alternativamente, escaneando un código QR en la caja de un comercio asociado. Su progreso, por ejemplo 7 de 10 sellos, se muestra de inmediato; al alcanzar el número de sellos requerido, puede canjear la recompensa almacenada, por ejemplo un café gratis o un descuento. Por cada sello recibe además puntos para su nivel en el área Home."),
          p("Para ello tratamos la hora y el lugar de cada sellado, el comercio asociado correspondiente, el número actual de sellos por tarjeta de fidelidad, las recompensas canjeadas y el código de canje correspondiente. Base jurídica: art. 6, apartado 1, letra b) del RGPD. Para verificar que un sellado ha tenido lugar realmente en el establecimiento, comparamos además la ubicación de su dispositivo; para más información véase el punto 6."),
        ],
      },
      {
        heading: "5.3 Tarjetas – cartera digital para tarjetas de fidelidad existentes", blocks: [
          p("En el área Tarjetas puede guardar digitalmente en su cartera TapRadar tarjetas de fidelidad de terceros ya existentes, por ejemplo de Billa, DM, H&M, Spar o Hofer, escaneando o introduciendo manualmente el código de barras o el código QR correspondiente, para luego mostrarla en caja. Las marcas mencionadas son solo ejemplos de tarjetas que usted mismo guarda; TapRadar no está afiliada a estas empresas y no realiza ningún intercambio de datos con ellas."),
          callout("Importante", "Los datos almacenados en la cartera de tarjetas proceden exclusivamente de usted. No comprobamos si las tarjetas introducidas son auténticas, válidas o atribuibles al tercero correspondiente, y no recibimos ningún dato de bonificación o de cuenta de estas empresas. Usted es el único responsable de la exactitud de los datos de las tarjetas almacenadas y de su aceptación en la caja correspondiente."),
          p("Los datos de tarjeta y código de barras que usted almacena se guardan de forma cifrada y se utilizan exclusivamente para mostrarlos en su propia aplicación. Base jurídica: art. 6, apartado 1, letra b) del RGPD, ya que usted nos encarga específicamente dicho almacenamiento al añadir la tarjeta."),
        ],
      },
      {
        heading: "5.4 Home – perfil y gamificación", blocks: [
          p("En el área Home encontrará su perfil con un sistema de niveles de 20 escalones que va desde \"Principiante\" hasta \"Campeón\". Gana puntos por los sellos recogidos, las reseñas publicadas y los amigos invitados, sigue un objetivo semanal y se beneficia de un sistema de rachas en el que siete días activos consecutivos activan una bonificación. Además, puede invitar a amigos y comparar su progreso en una clasificación."),
          p("Para ello tratamos su saldo de puntos, su nivel, el contador de la racha, su historial de objetivos y, si utiliza activamente esta función, la lista de amigos que ha invitado o con los que está conectado y sus datos de progreso agregados visibles para usted, siempre que estas personas también hayan consentido la visibilidad mutua. Base jurídica para las funciones principales (nivel, puntos, racha, objetivo semanal): art. 6, apartado 1, letra b) del RGPD. Base jurídica para la función opcional de amigos y clasificación: art. 6, apartado 1, letra a) del RGPD, ya que esto hace visibles los datos a otras personas. Los niveles, puntos y clasificaciones no tienen valor monetario ni son transferibles."),
        ],
      },
      {
        heading: "6. Datos de ubicación y GPS en detalle", blocks: [
          p("TapRadar utiliza los datos de ubicación de su dispositivo para dos finalidades distintas: (a) la función Radar para mostrar comercios asociados cercanos a usted, y (b) la verificación de las visitas de clientes, comparando la ubicación de su dispositivo en el momento de un sellado NFC o QR con la ubicación registrada del comercio asociado, para evitar un sellado sin presencia física."),
          p("Según su sistema operativo, puede controlar de forma granular el uso compartido de la ubicación, por ejemplo con las opciones \"siempre\", \"solo mientras se usa la aplicación\" o \"una sola vez\". Para la función principal de verificación de sellos basta con compartir la ubicación mientras se usa la aplicación; el uso compartido permanente de la ubicación en segundo plano solo es necesario si desea utilizar la publicidad de proximidad de un comercio asociado Platinum (véase el punto 7.2). Base jurídica: art. 6, apartado 1, letra a) del RGPD en relación con los ajustes de permisos de su sistema operativo, y subsidiariamente nuestro interés legítimo en la prevención del fraude conforme al art. 6, apartado 1, letra f) del RGPD. Puede revocar el uso compartido de la ubicación en cualquier momento a través de los ajustes de su dispositivo; algunas funciones, en particular la verificación de sellos y la publicidad de proximidad, dejarán de estar disponibles o lo estarán de forma limitada."),
        ],
      },
      {
        heading: "7.1 Notificaciones de servicio de TapRadar", blocks: [
          p("Enviamos notificaciones push de servicio bajo nuestra propia responsabilidad, por ejemplo relativas a la seguridad de la cuenta, a cambios sustanciales en la plataforma o a la confirmación de operaciones. Base jurídica: art. 6, apartado 1, letras b) y f) del RGPD."),
        ],
      },
      {
        heading: "7.2 Notificaciones push de marketing y campañas de clientes comerciales", blocks: [
          p("Los clientes comerciales pueden enviar, a través del panel, campañas y notificaciones push a clientes finales que ya sean clientes del comercio asociado correspondiente (al menos un sello recogido) o que se encuentren cerca de él —en el marco de la publicidad de proximidad disponible exclusivamente en el plan Platinum— y hayan concedido a tal efecto el uso compartido de la ubicación. Las notificaciones push están limitadas a una frecuencia determinada según el plan (Gold: hasta 2 campañas de imagen/PDF al mes, sin notificaciones push; Platinum: hasta 4 campañas al mes además de notificaciones push, activación por proximidad, cuenta atrás de campaña y retargeting dentro de los 30 días posteriores a su última visita)."),
          callout("Responsabilidad en las campañas push", "El respectivo cliente comercial es responsable del contenido, la licitud y la conformidad de una campaña con el derecho de competencia desleal. TOY GmbH proporciona la infraestructura técnica de entrega, garantiza el cumplimiento de los límites de frecuencia y la posibilidad de darse de baja en cualquier momento. A este respecto, TOY GmbH y el respectivo cliente comercial actúan como corresponsables del tratamiento en el sentido del art. 26 del RGPD en lo relativo a la activación y entrega de las campañas push; las líneas generales de este reparto de responsabilidades se resumen en este punto, y la esencia del acuerdo se pone a disposición de los interesados que lo soliciten en support@tapradar.app."),
          p("Puede desactivar en cualquier momento la recepción de notificaciones push de marketing y campañas, ya sea por completo o por comercio asociado, a través de los ajustes de su dispositivo o de la aplicación, sin que ello le prive del acceso a las funciones principales de la aplicación. Base jurídica: art. 6, apartado 1, letra a) del RGPD en relación con el § 174 de la TKG 2021."),
        ],
      },
      {
        heading: "8. Registro y cuenta de usuario (clientes finales)", blocks: [
          p("Al registrarse en la aplicación TapRadar recopilamos su dirección de correo electrónico, contraseña (almacenada de forma cifrada), el nombre visible elegido y datos de perfil opcionales. Finalidad: creación, gestión y protección de su cuenta de usuario. Base jurídica: art. 6, apartado 1, letra b) del RGPD."),
        ],
      },
      {
        heading: "9. Registro, cuenta y datos de la empresa (clientes comerciales)", blocks: [
          p("Para los clientes comerciales que se suscriban a un plan Bronze, Gold o Platinum, tratamos además: nombre de la empresa, forma jurídica, dirección del establecimiento, NIF-IVA, persona de contacto (nombre, correo electrónico, número de teléfono), horario de apertura, categoría y descripción del negocio, así como el material publicitario en imágenes y PDF cargado y el contenido de las campañas. Finalidad: ejecución del contrato, provisión del panel para clientes comerciales, facturación. Base jurídica: art. 6, apartado 1, letras b) y c) del RGPD."),
        ],
      },
      {
        heading: "10. Sistema de PIN para empleados", blocks: [
          p("Según su plan, los clientes comerciales pueden configurar hasta 15 (Platinum), 5 (Gold) o 1 (Bronze) accesos de empleado con un código PIN individual. Para ello tratamos las iniciales o nombres de empleados registrados por el cliente comercial, así como un registro de actividad gestionado automáticamente de los sellados y canjes realizados a través del PIN correspondiente. El respectivo cliente comercial, en su condición de empleador, es responsable de la licitud de este tratamiento frente a los empleados afectados; TOY GmbH proporciona a este respecto únicamente la infraestructura técnica. Base jurídica por parte de TOY GmbH: art. 6, apartado 1, letra b) del RGPD y art. 6, apartado 1, letra f) del RGPD."),
        ],
      },
      {
        heading: "11. Procesamiento de pagos", blocks: [
          p("El procesamiento de pagos para los planes de pago se realiza a través de nuestro proveedor de servicios de pago Stripe. Nosotros mismos no almacenamos datos completos de tarjetas de pago; estos son tratados exclusivamente por Stripe. Recibimos de Stripe confirmaciones sobre el estado del pago e importes de facturación, así como, en su caso, los últimos cuatro dígitos del medio de pago utilizado, a efectos de documentación y facturación. Base jurídica: art. 6, apartado 1, letras b) y c) del RGPD. Para más información sobre el tratamiento de datos por parte de Stripe, consulte la política de privacidad de Stripe en stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Reseñas", blocks: [
          p("Cuando usted, como cliente final, publica una reseña sobre un comercio asociado, tratamos el texto de la reseña, la valoración por estrellas, la hora y la prueba de una visita verificada (comprobante de sello). Las reseñas se muestran al comercio asociado y a otros usuarios de la aplicación junto con su nombre visible. Base jurídica: art. 6, apartado 1, letra a) del RGPD en relación con el art. 6, apartado 1, letra f) del RGPD. Si se denuncia una reseña como ilícita, por ejemplo por ser insultante o por no basarse manifiestamente en una visita real, examinamos la denuncia y la reseña en cuestión en el marco de nuestro procedimiento de denuncia y revisión, y comunicamos el resultado tanto a la persona que la denunció como a la autora de la reseña."),
        ],
      },
      {
        heading: "13. Uso del sitio web, archivos de registro del servidor y cookies", blocks: [
          p("Al acceder a nuestro sitio web www.tapradar.app, nuestro proveedor de alojamiento procesa automáticamente datos de acceso técnicos (dirección IP, fecha y hora del acceso, página consultada, navegador y sistema operativo utilizados, URL de referencia) en archivos de registro del servidor. Finalidad: garantizar un funcionamiento sin incidencias y la seguridad informática. Base jurídica: art. 6, apartado 1, letra f) del RGPD. El sitio web utiliza exclusivamente cookies técnicamente necesarias para su funcionamiento; actualmente no se utilizan cookies de seguimiento ni de marketing. Si esto cambiara en el futuro, le solicitaremos su consentimiento a través de un banner de consentimiento de cookies."),
        ],
      },
      {
        heading: "14. Destinatarios y encargados del tratamiento", blocks: [
          p("Solo transmitimos datos personales en la medida necesaria para la prestación de nuestros servicios o cuando estamos legalmente obligados a ello. Entre nuestros encargados del tratamiento o destinatarios se incluyen en particular:"),
          list([
            "proveedores de alojamiento e infraestructura (operación de servidores y bases de datos)",
            "Stripe (procesamiento de pagos)",
            "proveedores de servicios de notificaciones push (por ejemplo, Apple Push Notification Service, Firebase Cloud Messaging) para notificaciones push de servicio y campañas",
            "proveedores de servicios de envío de correo electrónico (comunicación transaccional y de servicio)",
            "proveedores de servicios informáticos en el marco del mantenimiento y soporte",
          ]),
          p("Con todos los encargados del tratamiento hemos celebrado, en la medida legalmente exigida, contratos de encargo del tratamiento conforme al art. 28 del RGPD. En la medida en que un comercio asociado (cliente comercial) consulte en el panel sus datos de sellos, visitas o campañas en el marco de la ejecución del contrato, actuará a este respecto como responsable independiente del tratamiento o, en el caso de campañas push, como corresponsable conforme al punto 7.2 de esta política."),
        ],
      },
      {
        heading: "15. Transferencia a terceros países", blocks: [
          p("En la medida en que alguno de los proveedores de servicios mencionados trate datos fuera del Espacio Económico Europeo (EEE), lo que puede afectar en particular a determinados servicios en la nube y de notificaciones push de proveedores estadounidenses, garantizamos, mediante las garantías adecuadas, un nivel de protección de datos adecuado, en particular mediante la celebración de cláusulas contractuales tipo de la UE conforme al art. 46, apartado 2, letra c) del RGPD o la certificación del destinatario en el marco del Data Privacy Framework UE-EE. UU., cuando corresponda."),
        ],
      },
      {
        heading: "16. Plazos de conservación", blocks: [
          p("Conservamos los datos personales solo durante el tiempo necesario para las finalidades respectivas:"),
          list([
            "Datos de cuenta (clientes finales y comerciales): durante la existencia de la cuenta de usuario o de la relación contractual; tras la eliminación de la cuenta, los datos se eliminan por regla general en un plazo de 30 días, salvo que existan obligaciones legales de conservación en contrario",
            "Datos de sellos, recompensas y canjes: durante la existencia de la cuenta en el comercio asociado correspondiente; tras la finalización del contrato con el cliente comercial, las tarjetas de fidelidad correspondientes se marcan como inactivas y se eliminan después de 12 meses",
            "Datos de la cartera de tarjetas (punto 5.3): hasta su eliminación por usted mismo o hasta la eliminación de su cuenta",
            "Datos de gamificación (nivel, puntos, racha, objetivo semanal): durante la existencia de su cuenta",
            "Conexiones de amigos y clasificación: hasta su eliminación por usted o hasta la eliminación de su cuenta",
            "Datos de facturación y pago: 7 años conforme al § 132 BAO y al § 212 UGB",
            "Registros de entrega e interacción push: 12 meses",
            "Archivos de registro del servidor: generalmente entre 30 y 90 días",
            "Datos de ubicación para la verificación de sellos: sin almacenamiento permanente; tratamiento solo durante la verificación, tras lo cual se reducen a un registro de eventos (hora, resultado)",
            "Comunicaciones de soporte: 3 años desde el cierre del caso, salvo que se exija legalmente una conservación más prolongada",
          ]),
        ],
      },
      {
        heading: "17. Sus derechos como interesado", blocks: [
          p("De acuerdo con los requisitos legales, le corresponden los siguientes derechos:"),
          list([
            "derecho de acceso (art. 15 del RGPD)",
            "derecho de rectificación (art. 16 del RGPD)",
            "derecho de supresión (art. 17 del RGPD)",
            "derecho a la limitación del tratamiento (art. 18 del RGPD)",
            "derecho a la portabilidad de los datos (art. 20 del RGPD)",
            "derecho de oposición a los tratamientos basados en el art. 6, apartado 1, letra f) del RGPD (art. 21 del RGPD)",
            "derecho a retirar el consentimiento prestado, con efectos para el futuro (art. 7, apartado 3, del RGPD)",
          ]),
          p("Para ejercer estos derechos basta con un mensaje informal a support@tapradar.app. Tramitaremos su solicitud sin demora indebida y, a más tardar, en el plazo de un mes; este plazo podrá prorrogarse dos meses más en caso de solicitudes complejas o numerosas, de lo cual le informaremos."),
        ],
      },
      {
        heading: "18. Seguridad de los datos", blocks: [
          p("Aplicamos medidas técnicas y organizativas adecuadas conforme al art. 32 del RGPD para proteger sus datos frente a la pérdida, el uso indebido y el acceso no autorizado, entre ellas el cifrado de la transmisión de datos (TLS), el cifrado de datos almacenados especialmente sensibles como contraseñas y datos de la cartera de tarjetas, restricciones de acceso conforme al principio del mínimo privilegio, actualizaciones de seguridad periódicas y el registro de eventos relevantes para la seguridad. Nuestras medidas de seguridad se adaptan continuamente al estado de la técnica."),
        ],
      },
      {
        heading: "19. Sin decisiones automatizadas, elaboración de perfiles limitada", blocks: [
          p("Los niveles, puntos y clasificaciones dentro de la aplicación se basan en reglas automatizadas, pero plenamente transparentes y comprensibles, sin efectos jurídicos ni efectos significativos similares en el sentido del art. 22 del RGPD. En el marco de la publicidad de proximidad (punto 7.2) tiene lugar una elaboración de perfiles limitada y basada en la ubicación, con el fin de mostrarle notificaciones de comercios asociados cercanos; este tratamiento se basa exclusivamente en su consentimiento y no tiene ningún efecto jurídico ni efecto significativo similar en el sentido del art. 22 del RGPD. No tiene lugar ninguna decisión automatizada con efectos jurídicos frente a los usuarios."),
        ],
      },
      {
        heading: "20. Protección de menores", blocks: [
          p("TapRadar no se dirige específicamente a niños menores de 14 años. Si tuviéramos conocimiento de que se han recopilado datos personales de un menor por debajo de la edad mínima aplicable conforme al derecho nacional sin el consentimiento de un tutor legal, eliminaremos dichos datos sin demora indebida."),
        ],
      },
      {
        heading: "21. Modificaciones de esta política de privacidad", blocks: [
          p("Nos reservamos el derecho de modificar esta política de privacidad para adaptarla a la evolución del marco jurídico o a nuevas funciones de la plataforma. Será de aplicación en cada momento la versión publicada en www.tapradar.app/datenschutz vigente en el momento de su visita o uso. En caso de modificaciones sustanciales basadas en una base jurídica modificada, como un consentimiento inicial, volveremos a recabar dicho consentimiento."),
        ],
      },
      {
        heading: "22. Contacto y derecho a presentar una reclamación", blocks: [
          p("Para consultas relacionadas con la protección de datos puede ponerse en contacto con nosotros en support@tapradar.app. Sin perjuicio de cualquier otro recurso administrativo o judicial, tiene derecho a presentar una reclamación ante una autoridad de control, en particular ante la autoridad competente para Austria:"),
          list(["Autoridad Austriaca de Protección de Datos (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Viena, Austria", "Sitio web: www.dsb.gv.at"]),
          callout("Multilingüismo", "El sitio web de la Autoridad Austriaca de Protección de Datos está actualmente disponible en alemán, con parte de la información también disponible en inglés. Si ni el alemán ni el inglés son su idioma preferido, siempre puede ponerse en contacto con nosotros de manera informal en support@tapradar.app; le ayudaremos, en los idiomas disponibles en este sitio web, en su contacto con la autoridad de control."),
        ],
      },
    ],
    sourcesHeading: "Fuentes",
    sourcesIntro: "Fuentes oficiales de la UE y de Austria en las que se basa esta política de privacidad:",
    sources: [
      { label: "Reglamento General de Protección de Datos (RGPD), Reglamento (UE) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Autoridad Austriaca de Protección de Datos", url: "https://www.dsb.gv.at/" },
    ],
  },
  pl: {
    title: "Polityka prywatności",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Stan na: 9 sierpnia 2026 r. · Wersja 2026-08-09.2 (wersja szczegółowa)",
    intro: [
      p("Ochrona Państwa danych osobowych jest dla TOY GmbH sprawą priorytetową. Niniejsza polityka prywatności informuje Państwa w sposób wyczerpujący i szczegółowy o tym, jakie dane osobowe gromadzimy w związku z korzystaniem z aplikacji TapRadar wraz z jej czterema obszarami funkcjonalnymi Radar, Pieczątka, Karty i Home, ze strony internetowej TapRadar oraz z panelu TapRadar dla klientów biznesowych (łącznie „TapRadar” lub „Platforma”), w jakich celach i na jakiej podstawie prawnej je przetwarzamy, komu przekazujemy dane, jak długo je przechowujemy oraz jakie prawa przysługują Państwu jako osobie, której dane dotyczą. Niniejsza polityka dotyczy zarówno klientów końcowych korzystających z bezpłatnej aplikacji TapRadar, jak i klientów biznesowych, którzy wykupili jeden z płatnych planów TapRadar: Bronze, Gold lub Platinum. Opiera się ona na rozporządzeniu (UE) 2016/679 (ogólne rozporządzenie o ochronie danych, „RODO”) oraz na odpowiednich austriackich przepisach wykonawczych, w szczególności na ustawie o ochronie danych (DSG) oraz ustawie o telekomunikacji z 2021 r. (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Administrator danych", blocks: [
          p("Administratorem w rozumieniu art. 4 pkt 7 RODO jest:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austria", "Numer VAT: ATU78882167", "E-mail: support@tapradar.app", "Strona internetowa: www.tapradar.app"]),
          p("Nie powołano firmowego inspektora ochrony danych, ponieważ nie zostały spełnione przesłanki z art. 37 RODO. Prosimy kierować zapytania dotyczące ochrony danych na powyższy adres e-mail; rozpatrujemy je niezwłocznie, nie później jednak niż w ciągu miesiąca od ich otrzymania."),
        ],
      },
      {
        heading: "2. Struktura niniejszej polityki", blocks: [
          p("Aby ułatwić Państwu szybkie zorientowanie się w treści, niniejsza polityka prywatności podzielona jest na część ogólną (punkty 1–4), część szczegółową opisującą cztery obszary funkcjonalne aplikacji oraz dane lokalizacyjne i dane push (punkty 5–7), część dotyczącą klientów biznesowych, płatności i opinii (punkty 8–12), część dotyczącą strony internetowej, odbiorców, przekazywania danych do państw trzecich i okresów przechowywania (punkty 13–16) oraz część dotyczącą Państwa praw, bezpieczeństwa danych i innych informacji (punkty 17–22). Wykaz oficjalnych źródeł znajduje się na końcu dokumentu."),
        ],
      },
      {
        heading: "3. Ogólne zasady przetwarzania danych", blocks: [
          p("Przetwarzamy dane osobowe z poszanowaniem zasad RODO, w szczególności zgodności z prawem, rzetelności, przejrzystości, ograniczenia celu, minimalizacji danych, prawidłowości, ograniczenia przechowywania oraz integralności i poufności (art. 5 RODO). Każde przetwarzanie danych osobowych opiera się na co najmniej jednej z poniższych podstaw prawnych:"),
          list([
            "art. 6 ust. 1 lit. a) RODO – zgoda osoby, której dane dotyczą, w szczególności na udostępnianie danych lokalizacyjnych, otrzymywanie powiadomień push oraz opcjonalną funkcję znajomych i rankingu",
            "art. 6 ust. 1 lit. b) RODO – niezbędność do wykonania umowy lub podjęcia działań przed jej zawarciem, np. udostępnienie funkcji aplikacji Radar, Pieczątka, Karty i Home oraz zarządzanie subskrypcjami",
            "art. 6 ust. 1 lit. c) RODO – wypełnienie obowiązku prawnego, np. obowiązków przechowywania wynikających z przepisów podatkowych i prawa handlowego",
            "art. 6 ust. 1 lit. f) RODO – ochrona prawnie uzasadnionych interesów, np. zapobieganie oszustwom i nadużyciom, bezpieczeństwo IT oraz dalszy rozwój platformy, o ile interesy te nie są nadrzędne wobec interesów lub praw podstawowych osoby, której dane dotyczą",
          ]),
        ],
      },
      {
        heading: "4. Przegląd: kto przetwarza co?", blocks: [
          p("TapRadar łączy dwie grupy użytkowników: klientów końcowych, którzy za pomocą bezpłatnej aplikacji odkrywają lokalne firmy i zbierają pieczątki, oraz klientów biznesowych, którzy za pomocą płatnego panelu zarządzają lojalnością swoich klientów. Obie grupy generują dane, które są przetwarzane częściowo wyłącznie przez TOY GmbH, a częściowo wspólnie z danym partnerem umownym. Poniższe punkty 5–12 opisują te przepływy danych szczegółowo, w podziale na cztery obszary aplikacji oraz na dane lokalizacyjne, push, płatnicze i dotyczące opinii."),
        ],
      },
      {
        heading: "5.1 Radar – odkrywaj lokalne firmy", blocks: [
          p("W obszarze Radar pokazujemy Państwu na mapie partnerskie firmy TapRadar w pobliżu. Widok można zawęzić za pomocą filtrów (akcja, kupon, nagroda, najlepiej oceniane, promień 500 metrów) oraz kategorii, takich jak kawiarnia, restauracja, fryzjer czy targ. Przy każdej firmie partnerskiej wyświetlane są godziny otwarcia, opinie oraz odznaka planu wskazująca wykupioną przez tę firmę taryfę (Bronze, Gold lub Platinum); odznaka ta dotyczy wyłącznie klienta biznesowego i nie stanowi dotyczących Państwa danych osobowych."),
          p("W celu udostępnienia tej funkcji przetwarzamy Państwa lokalizację (patrz punkt 6), wybrane przez Państwa ustawienia filtrów i kategorii oraz Państwa interakcje z wyświetlanymi firmami partnerskimi, np. otwarcie profilu firmy. Wykorzystujemy te dane interakcji, aby poprawić wyniki wyszukiwania i zwiększyć trafność wyświetlanych firm partnerskich. Podstawa prawna: art. 6 ust. 1 lit. a) RODO w zakresie udostępnienia lokalizacji, art. 6 ust. 1 lit. b) i f) RODO w zakresie danych filtrów, kategorii i interakcji."),
        ],
      },
      {
        heading: "5.2 Pieczątka – zbieraj cyfrowe pieczątki", blocks: [
          p("W obszarze Pieczątka mogą Państwo automatycznie otrzymać cyfrową pieczątkę, dotykając punktu NFC lub alternatywnie skanując kod QR przy kasie firmy partnerskiej. Postęp, np. 7 z 10 pieczątek, wyświetlany jest natychmiast; po osiągnięciu wymaganej liczby pieczątek mogą Państwo wykorzystać zapisaną nagrodę, np. darmową kawę lub zniżkę. Za każdą pieczątkę otrzymują Państwo dodatkowo punkty do swojego poziomu w obszarze Home."),
          p("W tym celu przetwarzamy czas i miejsce każdego pieczętowania, daną firmę partnerską, aktualny stan pieczątek dla danej karty lojalnościowej, wykorzystane nagrody oraz odpowiedni kod realizacji. Podstawa prawna: art. 6 ust. 1 lit. b) RODO. Aby zweryfikować, że pieczętowanie rzeczywiście miało miejsce na terenie firmy, dodatkowo porównujemy lokalizację Państwa urządzenia; więcej informacji w punkcie 6."),
        ],
      },
      {
        heading: "5.3 Karty – cyfrowy portfel dla istniejących kart klienta", blocks: [
          p("W obszarze Karty mogą Państwo cyfrowo zapisać w swoim portfelu TapRadar istniejące już karty klienta podmiotów trzecich, np. Billa, DM, H&M, Spar lub Hofer, skanując lub ręcznie wprowadzając odpowiedni kod kreskowy lub kod QR, a następnie okazać ją przy kasie. Wymienione marki służą wyłącznie jako przykłady kart zapisywanych samodzielnie przez Państwa; TapRadar nie jest powiązany z tymi przedsiębiorstwami i nie prowadzi z nimi żadnej wymiany danych."),
          callout("Ważne", "Dane zapisane w portfelu kart pochodzą wyłącznie od Państwa. Nie sprawdzamy, czy wprowadzone karty są autentyczne, ważne lub przypisane do danego podmiotu trzeciego, i nie otrzymujemy od tych przedsiębiorstw żadnych danych dotyczących bonusów lub konta. Za prawidłowość zapisanych danych karty oraz jej akceptację przy danej kasie odpowiadają wyłącznie Państwo."),
          p("Zapisane przez Państwa dane karty i kodu kreskowego są przechowywane w formie zaszyfrowanej i wykorzystywane wyłącznie do wyświetlania we własnej aplikacji. Podstawa prawna: art. 6 ust. 1 lit. b) RODO, ponieważ dodając kartę, wyraźnie zlecają nam Państwo jej przechowywanie."),
        ],
      },
      {
        heading: "5.4 Home – profil i grywalizacja", blocks: [
          p("W obszarze Home znajdą Państwo swój profil z 20-stopniowym systemem poziomów – od „Nowicjusza” do „Mistrza”. Zdobywają Państwo punkty za zebrane pieczątki, wystawione opinie i zaproszonych znajomych, śledzą cel tygodniowy i korzystają z systemu serii, w którym siedem kolejnych aktywnych dni uruchamia bonus. Dodatkowo mogą Państwo zapraszać znajomych i porównywać swoje postępy w rankingu."),
          p("W tym celu przetwarzamy Państwa stan punktów, poziom, licznik serii, historię celów oraz – jeśli aktywnie korzystają Państwo z tej funkcji – listę zaproszonych lub połączonych znajomych oraz ich widoczne dla Państwa zagregowane dane postępów, o ile osoby te również wyraziły zgodę na wzajemną widoczność. Podstawa prawna dla funkcji podstawowych (poziom, punkty, seria, cel tygodniowy): art. 6 ust. 1 lit. b) RODO. Podstawa prawna dla opcjonalnej funkcji znajomych i rankingu: art. 6 ust. 1 lit. a) RODO, ponieważ dane stają się dzięki temu widoczne dla innych osób. Poziomy, punkty i miejsca w rankingu nie mają wartości pieniężnej i nie podlegają przeniesieniu."),
        ],
      },
      {
        heading: "6. Dane lokalizacyjne i GPS szczegółowo", blocks: [
          p("TapRadar wykorzystuje dane lokalizacyjne Państwa urządzenia do dwóch odrębnych celów: (a) funkcji Radar w celu wyświetlania firm partnerskich w pobliżu oraz (b) weryfikacji wizyt klientów poprzez porównanie lokalizacji Państwa urządzenia w momencie pieczętowania NFC lub QR z zapisaną lokalizacją firmy partnerskiej, aby zapobiec pieczętowaniu bez fizycznej obecności."),
          p("W zależności od systemu operacyjnego mogą Państwo szczegółowo kontrolować udostępnianie lokalizacji, np. za pomocą opcji „zawsze”, „tylko podczas korzystania z aplikacji” lub „jednorazowo”. Dla podstawowej funkcji weryfikacji pieczątek wystarczające jest udostępnianie podczas korzystania z aplikacji; stałe udostępnianie lokalizacji w tle jest konieczne tylko wtedy, gdy chcą Państwo korzystać z reklamy opartej na bliskości firmy partnerskiej Platinum (patrz punkt 7.2). Podstawa prawna: art. 6 ust. 1 lit. a) RODO w związku z ustawieniami uprawnień Państwa systemu operacyjnego, pomocniczo nasz prawnie uzasadniony interes w zapobieganiu oszustwom zgodnie z art. 6 ust. 1 lit. f) RODO. Mogą Państwo w każdej chwili cofnąć udostępnianie lokalizacji za pomocą ustawień swojego urządzenia; niektóre funkcje, w szczególności weryfikacja pieczątek i reklama oparta na bliskości, nie będą wówczas dostępne lub będą dostępne w ograniczonym zakresie."),
        ],
      },
      {
        heading: "7.1 Powiadomienia serwisowe od TapRadar", blocks: [
          p("Wysyłamy serwisowe wiadomości push na własną odpowiedzialność, np. dotyczące bezpieczeństwa konta, istotnych zmian na platformie lub potwierdzenia operacji. Podstawa prawna: art. 6 ust. 1 lit. b) i f) RODO."),
        ],
      },
      {
        heading: "7.2 Marketingowe i kampanijne powiadomienia push od klientów biznesowych", blocks: [
          p("Klienci biznesowi mogą za pośrednictwem panelu wysyłać kampanie i powiadomienia push do klientów końcowych, którzy są już klientami danej firmy partnerskiej (co najmniej jedna zebrana pieczątka) lub którzy – w ramach reklamy opartej na bliskości, dostępnej wyłącznie w planie Platinum – znajdują się w jej pobliżu i wyrazili na to zgodę poprzez udostępnienie lokalizacji. Powiadomienia push są ograniczone do określonej częstotliwości w zależności od planu (Gold: do 2 kampanii graficznych/PDF miesięcznie, brak powiadomień push; Platinum: do 4 kampanii miesięcznie oraz powiadomienia push, aktywacja oparta na bliskości, odliczanie kampanii i retargeting w ciągu 30 dni od ostatniej wizyty)."),
          callout("Odpowiedzialność za kampanie push", "Za treść, zgodność z prawem oraz dopuszczalność kampanii w świetle prawa uczciwej konkurencji odpowiada dany klient biznesowy. TOY GmbH zapewnia techniczną infrastrukturę dostarczania, przestrzeganie limitów częstotliwości oraz możliwość rezygnacji w każdej chwili. W tym zakresie TOY GmbH i dany klient biznesowy działają jako współadministratorzy w rozumieniu art. 26 RODO w odniesieniu do uruchamiania i dostarczania kampanii push; główne założenia tego podziału odpowiedzialności zostały podsumowane w niniejszym punkcie, a istotne elementy porozumienia udostępniane są osobom, których dane dotyczą, na żądanie, pod adresem support@tapradar.app."),
          p("Mogą Państwo w każdej chwili wyłączyć otrzymywanie powiadomień push o charakterze marketingowym i kampanijnym, całkowicie lub dla poszczególnych firm partnerskich, za pomocą ustawień urządzenia lub ustawień w aplikacji, bez utraty dostępu do podstawowych funkcji aplikacji. Podstawa prawna: art. 6 ust. 1 lit. a) RODO w związku z § 174 TKG 2021."),
        ],
      },
      {
        heading: "8. Rejestracja i konto użytkownika (klienci końcowi)", blocks: [
          p("Podczas rejestracji w aplikacji TapRadar zbieramy adres e-mail, hasło (przechowywane w formie zaszyfrowanej), wybraną nazwę wyświetlaną oraz opcjonalne dane profilu. Cel: utworzenie, zarządzanie i zabezpieczenie Państwa konta użytkownika. Podstawa prawna: art. 6 ust. 1 lit. b) RODO."),
        ],
      },
      {
        heading: "9. Rejestracja, konto i dane firmy (klienci biznesowi)", blocks: [
          p("W przypadku klientów biznesowych, którzy wykupują plan Bronze, Gold lub Platinum, przetwarzamy dodatkowo: nazwę firmy, formę prawną, adres siedziby, numer VAT, osobę kontaktową (imię i nazwisko, e-mail, numer telefonu), godziny otwarcia, kategorię i opis działalności, a także przesłane materiały reklamowe w formie obrazów i plików PDF oraz treści kampanii. Cel: wykonanie umowy, udostępnienie panelu dla klientów biznesowych, fakturowanie. Podstawa prawna: art. 6 ust. 1 lit. b) i c) RODO."),
        ],
      },
      {
        heading: "10. System PIN dla pracowników", blocks: [
          p("W zależności od planu klienci biznesowi mogą skonfigurować do 15 (Platinum), 5 (Gold) lub 1 (Bronze) dostępów dla pracowników z indywidualnym kodem PIN. W tym celu przetwarzamy wprowadzone przez klienta biznesowego inicjały lub nazwiska pracowników oraz automatycznie prowadzony rejestr aktywności dotyczący pieczętowań i realizacji dokonanych za pomocą danego kodu PIN. Za zgodność z prawem tego przetwarzania wobec danych pracowników odpowiada dany klient biznesowy jako pracodawca; TOY GmbH udostępnia w tym zakresie wyłącznie infrastrukturę techniczną. Podstawa prawna po stronie TOY GmbH: art. 6 ust. 1 lit. b) RODO oraz art. 6 ust. 1 lit. f) RODO."),
        ],
      },
      {
        heading: "11. Przetwarzanie płatności", blocks: [
          p("Przetwarzanie płatności za plany płatne odbywa się za pośrednictwem naszego dostawcy usług płatniczych Stripe. Sami nie przechowujemy pełnych danych kart płatniczych; są one przetwarzane wyłącznie przez Stripe. Otrzymujemy od Stripe potwierdzenia dotyczące statusu płatności i kwot faktur, a także w razie potrzeby ostatnie cztery cyfry użytego środka płatniczego, do celów dokumentacyjnych i rozliczeniowych. Podstawa prawna: art. 6 ust. 1 lit. b) i c) RODO. Więcej informacji na temat przetwarzania danych przez Stripe znajdą Państwo w polityce prywatności Stripe pod adresem stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Opinie", blocks: [
          p("Gdy jako klient końcowy wystawiają Państwo opinię o firmie partnerskiej, przetwarzamy treść opinii, ocenę w gwiazdkach, czas jej wystawienia oraz dowód zweryfikowanej wizyty (dowód pieczątki). Opinie są wyświetlane firmie partnerskiej oraz innym użytkownikom aplikacji wraz z Państwa nazwą wyświetlaną. Podstawa prawna: art. 6 ust. 1 lit. a) RODO w związku z art. 6 ust. 1 lit. f) RODO. Jeśli opinia zostanie zgłoszona jako niezgodna z prawem, np. ponieważ jest obraźliwa lub wyraźnie nie opiera się na rzeczywistej wizycie, sprawdzamy zgłoszenie i daną opinię w ramach naszej procedury zgłaszania i weryfikacji oraz informujemy o wyniku zarówno osobę zgłaszającą, jak i autora opinii."),
        ],
      },
      {
        heading: "13. Korzystanie ze strony internetowej, pliki dziennika serwera i pliki cookie", blocks: [
          p("Podczas wejścia na naszą stronę internetową www.tapradar.app nasz dostawca hostingu automatycznie przetwarza techniczne dane dostępu (adres IP, data i godzina dostępu, wyświetlona strona, użyta przeglądarka i system operacyjny, adres URL strony odsyłającej) w plikach dziennika serwera. Cel: zapewnienie bezawaryjnego działania oraz bezpieczeństwa IT. Podstawa prawna: art. 6 ust. 1 lit. f) RODO. Strona internetowa wykorzystuje wyłącznie technicznie niezbędne pliki cookie, konieczne do jej działania; obecnie nie stosujemy plików cookie do celów śledzenia ani marketingowych. Gdyby miało się to zmienić w przyszłości, poprosimy Państwa o zgodę za pomocą banera zgody na pliki cookie."),
        ],
      },
      {
        heading: "14. Odbiorcy i podmioty przetwarzające", blocks: [
          p("Dane osobowe przekazujemy wyłącznie w zakresie niezbędnym do świadczenia naszych usług lub gdy jesteśmy do tego zobowiązani prawnie. Do naszych podmiotów przetwarzających lub odbiorców należą w szczególności:"),
          list([
            "dostawcy usług hostingowych i infrastrukturalnych (obsługa serwerów i baz danych)",
            "Stripe (przetwarzanie płatności)",
            "dostawcy usług powiadomień push (np. Apple Push Notification Service, Firebase Cloud Messaging) dla powiadomień serwisowych i kampanijnych",
            "dostawcy usług wysyłki e-maili (komunikacja transakcyjna i serwisowa)",
            "dostawcy usług IT w ramach utrzymania i wsparcia",
          ]),
          p("Ze wszystkimi podmiotami przetwarzającymi zawarliśmy, w zakresie wymaganym prawnie, umowy powierzenia przetwarzania danych zgodnie z art. 28 RODO. O ile firma partnerska (klient biznesowy) przegląda w panelu Państwa dane dotyczące pieczątek, wizyt lub kampanii w ramach realizacji umowy, działa ona w tym zakresie jako niezależny administrator lub – w przypadku kampanii push – jako współadministrator zgodnie z punktem 7.2 niniejszej polityki."),
        ],
      },
      {
        heading: "15. Przekazywanie danych do państw trzecich", blocks: [
          p("O ile niektórzy z wymienionych powyżej dostawców usług przetwarzają dane poza Europejskim Obszarem Gospodarczym (EOG), co może dotyczyć w szczególności niektórych usług chmurowych i push dostawców amerykańskich, zapewniamy poprzez odpowiednie zabezpieczenia odpowiedni poziom ochrony danych, w szczególności poprzez zawarcie standardowych klauzul umownych UE zgodnie z art. 46 ust. 2 lit. c) RODO lub certyfikację odbiorcy w ramach Data Privacy Framework UE-USA, o ile ma to zastosowanie."),
        ],
      },
      {
        heading: "16. Okresy przechowywania", blocks: [
          p("Dane osobowe przechowujemy wyłącznie przez czas niezbędny do realizacji danych celów:"),
          list([
            "Dane konta (klienci końcowi i biznesowi): przez okres istnienia konta użytkownika lub stosunku umownego; po usunięciu konta dane są zasadniczo usuwane w ciągu 30 dni, o ile nie stoją temu na przeszkodzie ustawowe obowiązki przechowywania",
            "Dane dotyczące pieczątek, nagród i realizacji: przez okres istnienia konta w danej firmie partnerskiej; po rozwiązaniu umowy z klientem biznesowym odpowiednie karty lojalnościowe są oznaczane jako nieaktywne i usuwane po 12 miesiącach",
            "Dane portfela kart (punkt 5.3): do samodzielnego usunięcia przez Państwa lub do usunięcia Państwa konta",
            "Dane grywalizacji (poziom, punkty, seria, cel tygodniowy): przez okres istnienia Państwa konta",
            "Połączenia ze znajomymi i ranking: do usunięcia przez Państwa lub do usunięcia Państwa konta",
            "Dane rozliczeniowe i płatnicze: 7 lat zgodnie z § 132 BAO i § 212 UGB",
            "Dzienniki dostarczania i interakcji push: 12 miesięcy",
            "Pliki dziennika serwera: z reguły od 30 do 90 dni",
            "Dane lokalizacyjne do weryfikacji pieczątek: brak trwałego przechowywania; przetwarzanie tylko przez czas trwania weryfikacji, następnie ograniczenie do dziennika zdarzeń (czas, wynik)",
            "Komunikacja wsparcia: 3 lata od zakończenia sprawy, o ile przepisy prawa nie wymagają dłuższego przechowywania",
          ]),
        ],
      },
      {
        heading: "17. Państwa prawa jako osoby, której dane dotyczą", blocks: [
          p("Zgodnie z wymogami ustawowymi przysługują Państwu następujące prawa:"),
          list([
            "prawo dostępu do danych (art. 15 RODO)",
            "prawo do sprostowania (art. 16 RODO)",
            "prawo do usunięcia danych (art. 17 RODO)",
            "prawo do ograniczenia przetwarzania (art. 18 RODO)",
            "prawo do przenoszenia danych (art. 20 RODO)",
            "prawo do sprzeciwu wobec przetwarzania opartego na art. 6 ust. 1 lit. f) RODO (art. 21 RODO)",
            "prawo do cofnięcia udzielonej zgody ze skutkiem na przyszłość (art. 7 ust. 3 RODO)",
          ]),
          p("Do skorzystania z tych praw wystarczy nieformalna wiadomość na adres support@tapradar.app. Rozpatrzymy Państwa wniosek niezwłocznie, nie później jednak niż w ciągu miesiąca; termin ten może zostać przedłużony o kolejne dwa miesiące w przypadku złożonych lub licznych wniosków, o czym Państwa poinformujemy."),
        ],
      },
      {
        heading: "18. Bezpieczeństwo danych", blocks: [
          p("Stosujemy odpowiednie środki techniczne i organizacyjne zgodnie z art. 32 RODO w celu ochrony Państwa danych przed utratą, nadużyciem i nieuprawnionym dostępem, w tym szyfrowanie transmisji danych (TLS), szyfrowanie szczególnie wrażliwych przechowywanych danych, takich jak hasła i dane portfela kart, ograniczenia dostępu zgodnie z zasadą najmniejszych uprawnień, regularne aktualizacje zabezpieczeń oraz rejestrowanie zdarzeń istotnych dla bezpieczeństwa. Nasze środki bezpieczeństwa są na bieżąco dostosowywane do aktualnego stanu wiedzy technicznej."),
        ],
      },
      {
        heading: "19. Brak zautomatyzowanego podejmowania decyzji, ograniczone profilowanie", blocks: [
          p("Poziomy, punkty i rankingi w aplikacji opierają się na zautomatyzowanych, ale w pełni przejrzystych i zrozumiałych zasadach, bez skutku prawnego lub podobnie istotnego skutku w rozumieniu art. 22 RODO. W ramach reklamy opartej na bliskości (punkt 7.2) ma miejsce ograniczone profilowanie oparte na lokalizacji, mające na celu wyświetlanie Państwu powiadomień od pobliskich firm partnerskich; przetwarzanie to opiera się wyłącznie na Państwa zgodzie i nie wywołuje skutku prawnego ani podobnie istotnego skutku w rozumieniu art. 22 RODO. Wobec użytkowników nie ma miejsca żadne zautomatyzowane podejmowanie decyzji wywołujące skutki prawne."),
        ],
      },
      {
        heading: "20. Ochrona małoletnich", blocks: [
          p("TapRadar nie jest skierowany specjalnie do dzieci poniżej 14 roku życia. Jeśli stwierdzimy, że dane osobowe dziecka poniżej minimalnego wieku określonego przepisami prawa krajowego zostały zebrane bez zgody opiekuna prawnego, niezwłocznie je usuniemy."),
        ],
      },
      {
        heading: "21. Zmiany niniejszej polityki prywatności", blocks: [
          p("Zastrzegamy sobie prawo do dostosowania niniejszej polityki prywatności w celu jej dopasowania do zmieniających się przepisów prawa lub nowych funkcji platformy. Obowiązuje każdorazowo wersja opublikowana na stronie www.tapradar.app/datenschutz, aktualna w momencie Państwa wizyty lub korzystania z usług. W przypadku istotnych zmian opartych na zmienionej podstawie prawnej, takiej jak pierwotna zgoda, ponownie uzyskamy taką zgodę."),
        ],
      },
      {
        heading: "22. Kontakt i prawo do wniesienia skargi", blocks: [
          p("W sprawach dotyczących ochrony danych mogą się Państwo z nami skontaktować pod adresem support@tapradar.app. Bez uszczerbku dla innych administracyjnych lub sądowych środków odwoławczych, przysługuje Państwu prawo wniesienia skargi do organu nadzorczego, w szczególności do organu właściwego dla Austrii:"),
          list(["Austriacki Organ Ochrony Danych (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Wiedeń, Austria", "Strona internetowa: www.dsb.gv.at"]),
          callout("Wielojęzyczność", "Strona internetowa austriackiego Organu Ochrony Danych jest obecnie dostępna w języku niemieckim, a częściowo również w języku angielskim. Jeśli ani niemiecki, ani angielski nie są Państwa preferowanym językiem, mogą Państwo zawsze skontaktować się z nami nieformalnie pod adresem support@tapradar.app; wesprzemy Państwa, w językach dostępnych na tej stronie internetowej, w kontakcie z organem nadzorczym."),
        ],
      },
    ],
    sourcesHeading: "Wykaz źródeł",
    sourcesIntro: "Oficjalne źródła unijne i austriackie, na których opiera się niniejsza polityka prywatności:",
    sources: [
      { label: "Ogólne rozporządzenie o ochronie danych (RODO), rozporządzenie (UE) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Austriacki Organ Ochrony Danych", url: "https://www.dsb.gv.at/" },
    ],
  },
  cs: {
    title: "Zásady ochrany osobních údajů",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Aktualizováno: 9. srpna 2026 · Verze 2026-08-09.2 (podrobná verze)",
    intro: [
      p("Ochrana vašich osobních údajů je pro společnost TOY GmbH zásadní záležitostí. Tyto zásady ochrany osobních údajů vás komplexně a podrobně informují o tom, jaké osobní údaje shromažďujeme v souvislosti s používáním aplikace TapRadar a jejích čtyř funkčních oblastí Radar, Razítko, Karty a Home, webových stránek TapRadar a dashboardu TapRadar pro obchodní zákazníky (společně „TapRadar“ nebo „Platforma“), za jakými účely a na jakém právním základě je zpracováváme, komu údaje předáváme, jak dlouho je uchováváme a jaká práva vám jako subjektu údajů náleží. Tyto zásady se vztahují jak na koncové zákazníky, kteří používají bezplatnou aplikaci TapRadar, tak na obchodní zákazníky, kteří si předplatili některý z placených tarifů TapRadar Bronze, Gold nebo Platinum. Vycházejí z nařízení (EU) 2016/679 (obecné nařízení o ochraně osobních údajů, „GDPR“) a příslušných rakouských prováděcích předpisů, zejména zákona o ochraně osobních údajů (DSG) a zákona o telekomunikacích 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Správce údajů", blocks: [
          p("Správcem ve smyslu čl. 4 bodu 7 GDPR je:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Rakousko", "DIČ: ATU78882167", "E-mail: support@tapradar.app", "Web: www.tapradar.app"]),
          p("Firemní pověřenec pro ochranu osobních údajů nebyl jmenován, protože nejsou splněny podmínky čl. 37 GDPR. Dotazy týkající se ochrany osobních údajů zasílejte na výše uvedenou e-mailovou adresu; vyřídíme je bez zbytečného odkladu, nejpozději však do jednoho měsíce od doručení."),
        ],
      },
      {
        heading: "2. Struktura těchto zásad", blocks: [
          p("Aby se v nich mohli rychle zorientovat, jsou tyto zásady ochrany osobních údajů rozděleny na obecnou část (body 1 až 4), zvláštní část podrobně popisující čtyři funkční oblasti aplikace a údaje o poloze a push notifikacích (body 5 až 7), část týkající se obchodních zákazníků, plateb a recenzí (body 8 až 12), část týkající se webových stránek, příjemců, předávání do třetích zemí a doby uchovávání (body 13 až 16) a část týkající se vašich práv, bezpečnosti údajů a dalších informací (body 17 až 22). Seznam úředních zdrojů se nachází na konci dokumentu."),
        ],
      },
      {
        heading: "3. Obecné zásady zpracování údajů", blocks: [
          p("Osobní údaje zpracováváme v souladu se zásadami GDPR, zejména zákonností, korektností, transparentností, účelovým omezením, minimalizací údajů, přesností, omezením uložení a integritou a důvěrností (čl. 5 GDPR). Každé zpracování osobních údajů se opírá alespoň o jeden z následujících právních základů:"),
          list([
            "čl. 6 odst. 1 písm. a) GDPR – souhlas subjektu údajů, zejména pro sdílení údajů o poloze, přijímání push notifikací a volitelnou funkci přátel a žebříčku",
            "čl. 6 odst. 1 písm. b) GDPR – nezbytnost pro plnění smlouvy nebo provedení opatření před uzavřením smlouvy, například poskytování funkcí aplikace Radar, Razítko, Karty a Home a správa předplatných",
            "čl. 6 odst. 1 písm. c) GDPR – splnění právní povinnosti, například daňových a obchodněprávních povinností uchovávání",
            "čl. 6 odst. 1 písm. f) GDPR – ochrana oprávněných zájmů, například prevence podvodů a zneužití, bezpečnost IT a další rozvoj platformy, pokud tyto zájmy nepřevažují nad zájmy nebo základními právy subjektu údajů",
          ]),
        ],
      },
      {
        heading: "4. Přehled: kdo zpracovává co?", blocks: [
          p("TapRadar propojuje dvě skupiny uživatelů: koncové zákazníky, kteří prostřednictvím bezplatné aplikace objevují místní podniky a sbírají razítka, a obchodní zákazníky, kteří prostřednictvím placeného dashboardu řídí věrnost svých zákazníků. Obě skupiny generují údaje, které jsou zpracovávány zčásti výhradně společností TOY GmbH, zčásti společně s příslušným smluvním partnerem. Následující body 5 až 12 tyto toky údajů podrobně popisují, strukturovány podle čtyř oblastí aplikace a podle údajů o poloze, push notifikacích, platbách a recenzích."),
        ],
      },
      {
        heading: "5.1 Radar – objevujte místní podniky", blocks: [
          p("V oblasti Radar vám na mapě zobrazujeme partnerské podniky TapRadar ve vaší blízkosti. Zobrazení můžete zúžit pomocí filtrů (akce, kupón, odměna, nejlépe hodnocené, okruh 500 metrů) a kategorií, jako je kavárna, restaurace, kadeřnictví nebo trh. U každého partnerského podniku se zobrazuje otevírací doba, recenze a odznak tarifu, který označuje tarif zvolený tímto podnikem (Bronze, Gold nebo Platinum); tento odznak se týká výhradně obchodního zákazníka a nepředstavuje žádný váš osobní údaj."),
          p("Pro poskytování této funkce zpracováváme vaši polohu (viz bod 6), vámi zvolená nastavení filtrů a kategorií a vaše interakce se zobrazenými partnerskými podniky, například otevření profilu podniku. Tyto interakční údaje využíváme ke zlepšení zobrazení výsledků a zvýšení relevance zobrazovaných partnerských podniků. Právní základ: čl. 6 odst. 1 písm. a) GDPR pro sdílení polohy, čl. 6 odst. 1 písm. b) a f) GDPR pro údaje o filtrech, kategoriích a interakcích."),
        ],
      },
      {
        heading: "5.2 Razítko – sbírejte digitální razítka", blocks: [
          p("V oblasti Razítko můžete automaticky získat digitální razítko dotykem na NFC bod nebo alternativně naskenováním QR kódu u pokladny partnerského podniku. Váš postup, například 7 z 10 razítek, se zobrazí okamžitě; po dosažení požadovaného počtu razítek si můžete uplatnit uloženou odměnu, například kávu zdarma nebo slevu. Za každé razítko navíc získáváte body pro svou úroveň v oblasti Home."),
          p("Za tímto účelem zpracováváme čas a místo každého razítkování, dotčený partnerský podnik, aktuální stav razítek na jednotlivé věrnostní kartě, uplatněné odměny a příslušný kód uplatnění. Právní základ: čl. 6 odst. 1 písm. b) GDPR. Za účelem ověření, že razítkování skutečně proběhlo na místě, navíc porovnáváme polohu vašeho zařízení; podrobnosti viz bod 6."),
        ],
      },
      {
        heading: "5.3 Karty – digitální peněženka pro stávající zákaznické karty", blocks: [
          p("V oblasti Karty můžete do své peněženky TapRadar digitálně uložit již existující zákaznické karty třetích stran, například Billa, DM, H&M, Spar nebo Hofer, naskenováním nebo ručním zadáním příslušného čárového nebo QR kódu, a následně je předložit u pokladny. Uvedené značky slouží pouze jako příklady karet, které si sami ukládáte; TapRadar není s těmito společnostmi propojen a nevyměňuje si s nimi žádné údaje."),
          callout("Důležité", "Údaje uložené v peněžence karet pocházejí výhradně od vás. Neověřujeme, zda jsou zadané karty pravé, platné nebo přiřaditelné příslušné třetí straně, a nezískáváme od těchto společností žádné bonusové nebo účetní údaje. Za správnost uložených údajů o kartě a jejich přijetí u příslušné pokladny odpovídáte výhradně vy."),
          p("Vámi uložené údaje o kartě a čárovém kódu jsou ukládány v zašifrované podobě a používány výhradně k zobrazení ve vaší vlastní aplikaci. Právní základ: čl. 6 odst. 1 písm. b) GDPR, jelikož nás přidáním karty konkrétně pověřujete jejím uložením."),
        ],
      },
      {
        heading: "5.4 Home – profil a gamifikace", blocks: [
          p("V oblasti Home najdete svůj profil s 20úrovňovým systémem úrovní od „Nováčka“ po „Šampiona“. Sbíráte body za nasbíraná razítka, odeslané recenze a pozvané přátele, sledujete týdenní cíl a využíváte systém série, kdy sedm po sobě jdoucích aktivních dnů spouští bonus. Kromě toho můžete zvát přátele a porovnávat svůj pokrok v žebříčku."),
          p("Za tímto účelem zpracováváme váš stav bodů, vaši úroveň, počítadlo série, historii vašich cílů a – pokud tuto funkci aktivně používáte – seznam vámi pozvaných nebo propojených přátel a jejich souhrnné údaje o pokroku, které jsou pro vás viditelné, pokud tyto osoby rovněž souhlasily se vzájemnou viditelností. Právní základ pro základní funkce (úroveň, body, série, týdenní cíl): čl. 6 odst. 1 písm. b) GDPR. Právní základ pro volitelnou funkci přátel a žebříčku: čl. 6 odst. 1 písm. a) GDPR, jelikož tím jsou údaje zpřístupněny dalším osobám. Úrovně, body a pořadí v žebříčku nemají žádnou peněžní hodnotu a nejsou převoditelné."),
        ],
      },
      {
        heading: "6. Údaje o poloze a GPS podrobně", blocks: [
          p("TapRadar používá údaje o poloze vašeho zařízení pro dva samostatné účely: (a) funkci Radar pro zobrazení partnerských podniků ve vaší blízkosti a (b) ověřování návštěv zákazníků porovnáním polohy vašeho zařízení v okamžiku razítkování NFC nebo QR s uloženou polohou partnerského podniku, aby se zabránilo razítkování bez fyzické přítomnosti."),
          p("V závislosti na operačním systému můžete sdílení polohy podrobně nastavit, například pomocí možností „vždy“, „pouze při používání aplikace“ nebo „jednorázově“. Pro základní funkci ověřování razítek postačí sdílení během používání aplikace; trvalé sdílení polohy na pozadí je nutné pouze v případě, že chcete využívat reklamu na základě blízkosti partnerského podniku s tarifem Platinum (viz bod 7.2). Právní základ: čl. 6 odst. 1 písm. a) GDPR ve spojení s nastavením oprávnění vašeho operačního systému, podpůrně náš oprávněný zájem na prevenci podvodů podle čl. 6 odst. 1 písm. f) GDPR. Sdílení polohy můžete kdykoli odvolat prostřednictvím nastavení svého zařízení; některé funkce, zejména ověřování razítek a reklama na základě blízkosti, pak nebudou k dispozici nebo budou k dispozici pouze v omezené míře."),
        ],
      },
      {
        heading: "7.1 Servisní oznámení od TapRadar", blocks: [
          p("Servisní push zprávy zasíláme na vlastní odpovědnost, například ohledně zabezpečení účtu, podstatných změn platformy nebo potvrzení transakcí. Právní základ: čl. 6 odst. 1 písm. b) a f) GDPR."),
        ],
      },
      {
        heading: "7.2 Marketingová a kampaňová push oznámení obchodních zákazníků", blocks: [
          p("Obchodní zákazníci mohou prostřednictvím dashboardu zasílat kampaně a push oznámení koncovým zákazníkům, kteří jsou již zákazníky příslušného partnerského podniku (alespoň jedno nasbírané razítko) nebo kteří se – v rámci reklamy na základě blízkosti dostupné výhradně v tarifu Platinum – nacházejí v jeho blízkosti a k tomuto účelu udělili sdílení polohy. Push oznámení jsou v závislosti na tarifu omezena na určitou frekvenci (Gold: až 2 obrázkové/PDF kampaně měsíčně, žádná push oznámení; Platinum: až 4 kampaně měsíčně navíc s push oznámeními, spouštěním na základě blízkosti, odpočtem kampaně a retargetingem do 30 dnů od vaší poslední návštěvy)."),
          callout("Odpovědnost za push kampaně", "Za obsah, zákonnost a soulad kampaně s právem hospodářské soutěže odpovídá příslušný obchodní zákazník. TOY GmbH zajišťuje technickou infrastrukturu doručování, dodržování frekvenčních limitů a možnost kdykoli se odhlásit. V tomto ohledu jednají TOY GmbH a příslušný obchodní zákazník ve vztahu ke spouštění a doručování push kampaní jako společní správci ve smyslu čl. 26 GDPR; hlavní zásady tohoto rozdělení odpovědnosti jsou shrnuty v tomto bodě, podstata dohody je subjektům údajů na vyžádání poskytnuta na adrese support@tapradar.app."),
          p("Příjem marketingových a kampaňových push oznámení můžete kdykoli zcela nebo pro jednotlivé partnerské podniky deaktivovat prostřednictvím nastavení zařízení nebo nastavení v aplikaci, aniž by vám tím byl znemožněn přístup k základním funkcím aplikace. Právní základ: čl. 6 odst. 1 písm. a) GDPR ve spojení s § 174 TKG 2021."),
        ],
      },
      {
        heading: "8. Registrace a uživatelský účet (koncoví zákazníci)", blocks: [
          p("Při registraci v aplikaci TapRadar shromažďujeme vaši e-mailovou adresu, heslo (uložené v zašifrované podobě), zvolené zobrazované jméno a volitelné údaje o profilu. Účel: zřízení, správa a zabezpečení vašeho uživatelského účtu. Právní základ: čl. 6 odst. 1 písm. b) GDPR."),
        ],
      },
      {
        heading: "9. Registrace, účet a firemní údaje (obchodní zákazníci)", blocks: [
          p("U obchodních zákazníků, kteří si předplatí tarif Bronze, Gold nebo Platinum, navíc zpracováváme: název firmy, právní formu, adresu provozovny, DIČ, kontaktní osobu (jméno, e-mail, telefonní číslo), otevírací dobu, kategorii a popis podniku, jakož i nahraný obrázkový a PDF reklamní materiál a obsah kampaní. Účel: plnění smlouvy, poskytování dashboardu pro obchodní zákazníky, fakturace. Právní základ: čl. 6 odst. 1 písm. b) a c) GDPR."),
        ],
      },
      {
        heading: "10. Systém PIN pro zaměstnance", blocks: [
          p("Obchodní zákazníci mohou v závislosti na tarifu zřídit až 15 (Platinum), 5 (Gold), respektive 1 (Bronze) přístup pro zaměstnance s individuálním PIN kódem. Za tímto účelem zpracováváme obchodním zákazníkem zadané zkratky nebo jména zaměstnanců, jakož i automaticky vedený protokol aktivit razítkování a uplatnění provedených prostřednictvím příslušného PIN. Za zákonnost tohoto zpracování vůči dotčeným zaměstnancům odpovídá příslušný obchodní zákazník jako zaměstnavatel; TOY GmbH v tomto ohledu poskytuje pouze technickou infrastrukturu. Právní základ na straně TOY GmbH: čl. 6 odst. 1 písm. b) GDPR a čl. 6 odst. 1 písm. f) GDPR."),
        ],
      },
      {
        heading: "11. Zpracování plateb", blocks: [
          p("Zpracování plateb za placené tarify probíhá prostřednictvím našeho poskytovatele platebních služeb Stripe. My sami neukládáme úplné údaje o platebních kartách; ty jsou zpracovávány výhradně společností Stripe. Od Stripe dostáváme potvrzení o stavu platby a fakturovaných částkách, případně poslední čtyři číslice použitého platebního prostředku, pro účely dokumentace a vyúčtování. Právní základ: čl. 6 odst. 1 písm. b) a c) GDPR. Další informace o zpracování údajů společností Stripe naleznete v zásadách ochrany osobních údajů Stripe na stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Recenze", blocks: [
          p("Pokud jako koncový zákazník zveřejníte recenzi partnerského podniku, zpracováváme text recenze, hodnocení hvězdičkami, čas a doklad o ověřené návštěvě (doklad o razítku). Recenze se zobrazují partnerskému podniku a dalším uživatelům aplikace spolu s vaším zobrazovaným jménem. Právní základ: čl. 6 odst. 1 písm. a) GDPR ve spojení s čl. 6 odst. 1 písm. f) GDPR. Pokud je recenze nahlášena jako protiprávní, například protože je urážlivá nebo zjevně nevychází ze skutečné návštěvy, přezkoumáme nahlášení a dotčenou recenzi v rámci našeho postupu nahlašování a přezkumu a sdělíme výsledek jak osobě, která nahlášení podala, tak autorovi recenze."),
        ],
      },
      {
        heading: "13. Používání webových stránek, serverové log soubory a cookies", blocks: [
          p("Při návštěvě našich webových stránek www.tapradar.app náš poskytovatel hostingu automaticky zpracovává technické přístupové údaje (IP adresa, datum a čas přístupu, navštívená stránka, použitý prohlížeč a operační systém, referrer URL) v serverových log souborech. Účel: zajištění bezporuchového provozu a bezpečnosti IT. Právní základ: čl. 6 odst. 1 písm. f) GDPR. Webové stránky používají výhradně technicky nezbytné cookies potřebné pro provoz stránky; sledovací nebo marketingové cookies v současné době nepoužíváme. Pokud by se to v budoucnu změnilo, požádáme vás o souhlas prostřednictvím banneru pro souhlas s cookies."),
        ],
      },
      {
        heading: "14. Příjemci a zpracovatelé", blocks: [
          p("Osobní údaje předáváme pouze v rozsahu nezbytném pro poskytování našich služeb nebo v případě, že jsme k tomu zákonně povinni. Mezi naše zpracovatele, resp. příjemce, patří zejména:"),
          list([
            "poskytovatelé hostingu a infrastruktury (provoz serverů a databází)",
            "Stripe (zpracování plateb)",
            "poskytovatelé služeb push notifikací (např. Apple Push Notification Service, Firebase Cloud Messaging) pro servisní a kampaňová push oznámení",
            "poskytovatelé služeb odesílání e-mailů (transakční a servisní komunikace)",
            "poskytovatelé IT služeb v rámci údržby a podpory",
          ]),
          p("Se všemi zpracovateli jsme, pokud to zákon vyžaduje, uzavřeli smlouvy o zpracování údajů podle čl. 28 GDPR. Pokud partnerský podnik (obchodní zákazník) v rámci plnění smlouvy nahlíží v dashboardu na vaše údaje o razítkách, návštěvách nebo kampaních, jedná v tomto rozsahu jako samostatný správce, respektive v případě push kampaní jako společný správce podle bodu 7.2 těchto zásad."),
        ],
      },
      {
        heading: "15. Předávání do třetích zemí", blocks: [
          p("Pokud jednotliví výše uvedení poskytovatelé služeb zpracovávají údaje mimo Evropský hospodářský prostor (EHP), což se může týkat zejména některých cloudových a push služeb amerických poskytovatelů, zajišťujeme prostřednictvím vhodných záruk odpovídající úroveň ochrany údajů, zejména uzavřením standardních smluvních doložek EU podle čl. 46 odst. 2 písm. c) GDPR nebo certifikací příjemce v rámci Data Privacy Framework EU-USA, je-li to relevantní."),
        ],
      },
      {
        heading: "16. Doba uchovávání", blocks: [
          p("Osobní údaje uchováváme pouze po dobu nezbytnou pro příslušné účely:"),
          list([
            "Údaje o účtu (koncoví a obchodní zákazníci): po dobu trvání uživatelského účtu, resp. smluvního vztahu; po zrušení účtu jsou údaje zásadně vymazány do 30 dnů, pokud tomu nebrání zákonné povinnosti uchovávání",
            "Údaje o razítkách, odměnách a uplatněních: po dobu trvání účtu u příslušného partnerského podniku; po ukončení smlouvy s obchodním zákazníkem jsou příslušné věrnostní karty označeny jako neaktivní a po 12 měsících vymazány",
            "Údaje o peněžence karet (bod 5.3): až do vlastního vymazání vámi nebo do zrušení vašeho účtu",
            "Údaje o gamifikaci (úroveň, body, série, týdenní cíl): po dobu trvání vašeho účtu",
            "Propojení s přáteli a žebříček: až do odstranění vámi nebo do zrušení vašeho účtu",
            "Fakturační a platební údaje: 7 let podle § 132 BAO a § 212 UGB",
            "Protokoly doručování a interakcí push: 12 měsíců",
            "Serverové log soubory: zpravidla 30 až 90 dní",
            "Údaje o poloze pro ověřování razítek: bez trvalého uložení; zpracování pouze po dobu ověřování, poté redukce na protokol události (čas, výsledek)",
            "Komunikace s podporou: 3 roky od uzavření případu, pokud zákon nevyžaduje delší uchovávání",
          ]),
        ],
      },
      {
        heading: "17. Vaše práva jako subjektu údajů", blocks: [
          p("Za podmínek stanovených zákonem vám náleží následující práva:"),
          list([
            "právo na přístup (čl. 15 GDPR)",
            "právo na opravu (čl. 16 GDPR)",
            "právo na výmaz (čl. 17 GDPR)",
            "právo na omezení zpracování (čl. 18 GDPR)",
            "právo na přenositelnost údajů (čl. 20 GDPR)",
            "právo vznést námitku proti zpracování založenému na čl. 6 odst. 1 písm. f) GDPR (čl. 21 GDPR)",
            "právo odvolat udělený souhlas s účinkem do budoucna (čl. 7 odst. 3 GDPR)",
          ]),
          p("K uplatnění těchto práv postačí neformální zpráva na support@tapradar.app. Vaši žádost vyřídíme bez zbytečného odkladu, nejpozději však do jednoho měsíce; tato lhůta může být u složitých nebo četných žádostí prodloužena o další dva měsíce, o čemž vás budeme informovat."),
        ],
      },
      {
        heading: "18. Bezpečnost údajů", blocks: [
          p("K ochraně vašich údajů před ztrátou, zneužitím a neoprávněným přístupem uplatňujeme přiměřená technická a organizační opatření podle čl. 32 GDPR, mezi něž patří šifrování přenosu dat (TLS), šifrování zvláště citlivých uložených údajů, jako jsou hesla a údaje o peněžence karet, omezení přístupu podle zásady nejnižších oprávnění, pravidelné bezpečnostní aktualizace a protokolování bezpečnostně relevantních událostí. Naše bezpečnostní opatření průběžně přizpůsobujeme aktuálnímu stavu techniky."),
        ],
      },
      {
        heading: "19. Žádné automatizované rozhodování, omezené profilování", blocks: [
          p("Úrovně, body a žebříčky v rámci aplikace vycházejí z automatizovaných, avšak plně transparentních a srozumitelných pravidel bez právního nebo obdobně významného účinku ve smyslu čl. 22 GDPR. V rámci reklamy na základě blízkosti (bod 7.2) dochází k omezenému profilování na základě polohy, aby vám mohla být zobrazena oznámení od partnerských podniků ve vaší blízkosti; toto zpracování se opírá výhradně o váš souhlas a nemá žádný právní nebo obdobně významný účinek ve smyslu čl. 22 GDPR. Automatizované rozhodování s právním účinkem vůči uživatelům neprobíhá."),
        ],
      },
      {
        heading: "20. Ochrana nezletilých", blocks: [
          p("TapRadar se cíleně nezaměřuje na děti mladší 14 let. Pokud zjistíme, že byly bez souhlasu zákonného zástupce shromážděny osobní údaje dítěte mladšího minimálního věku stanoveného vnitrostátním právem, tyto údaje neprodleně vymažeme."),
        ],
      },
      {
        heading: "21. Změny těchto zásad ochrany osobních údajů", blocks: [
          p("Vyhrazujeme si právo tyto zásady ochrany osobních údajů upravit tak, aby odpovídaly změněné právní situaci nebo novým funkcím platformy. Vždy platí aktuální verze zveřejněná na www.tapradar.app/datenschutz v okamžiku vaší návštěvy, resp. používání. V případě podstatných změn založených na změněném právním základu, jako je prvotní souhlas, si tento souhlas vyžádáme znovu."),
        ],
      },
      {
        heading: "22. Kontakt a právo podat stížnost", blocks: [
          p("V případě dotazů týkajících se ochrany osobních údajů nás můžete kontaktovat na adrese support@tapradar.app. Bez ohledu na jiný správní nebo soudní opravný prostředek máte právo podat stížnost u dozorového úřadu, zejména u úřadu příslušného pro Rakousko:"),
          list(["Rakouský úřad pro ochranu osobních údajů (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Vídeň, Rakousko", "Web: www.dsb.gv.at"]),
          callout("Vícejazyčnost", "Webové stránky rakouského Úřadu pro ochranu osobních údajů jsou v současné době dostupné v němčině, částečně také v angličtině. Pokud němčina ani angličtina nejsou vaším preferovaným jazykem, můžete se na nás kdykoli neformálně obrátit na adrese support@tapradar.app; v jazycích dostupných na těchto webových stránkách vám pomůžeme s kontaktováním dozorového úřadu."),
        ],
      },
    ],
    sourcesHeading: "Seznam zdrojů",
    sourcesIntro: "Úřední zdroje EU a Rakouska, ze kterých tyto zásady ochrany osobních údajů vycházejí:",
    sources: [
      { label: "Obecné nařízení o ochraně osobních údajů (GDPR), nařízení (EU) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Rakouský úřad pro ochranu osobních údajů", url: "https://www.dsb.gv.at/" },
    ],
  },
  hu: {
    title: "Adatvédelmi tájékoztató",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Frissítve: 2026. augusztus 9. · 2026-08-09.2 verzió (részletes változat)",
    intro: [
      p("Személyes adatainak védelme kiemelten fontos a TOY GmbH számára. Ez az adatvédelmi tájékoztató átfogóan és részletesen tájékoztatja Önt arról, hogy a TapRadar alkalmazás – Radar, Bélyegző, Kártyák és Home négy funkcionális területével –, a TapRadar weboldal, valamint a TapRadar üzleti ügyfél irányítópult (együttesen „TapRadar” vagy a „Platform”) használatával összefüggésben milyen személyes adatokat gyűjtünk, milyen célból és milyen jogalapon kezeljük azokat, kinek adjuk tovább az adatokat, meddig tároljuk azokat, és milyen jogok illetik meg Önt érintettként. Ez a tájékoztató mind az ingyenes TapRadar alkalmazást használó végfelhasználókra, mind a Bronze, Gold vagy Platinum fizetős TapRadar csomagok valamelyikére előfizető üzleti ügyfelekre vonatkozik. Az (EU) 2016/679 rendeleten (általános adatvédelmi rendelet, „GDPR”), valamint a vonatkozó osztrák végrehajtási rendelkezéseken, különösen az adatvédelmi törvényen (DSG) és a 2021. évi távközlési törvényen (TKG 2021) alapul."),
    ],
    sections: [
      {
        heading: "1. Adatkezelő", blocks: [
          p("A GDPR 4. cikk 7. pontja szerinti adatkezelő:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Ausztria", "Adószám: ATU78882167", "E-mail: support@tapradar.app", "Weboldal: www.tapradar.app"]),
          p("Vállalati adatvédelmi tisztviselőt nem neveztünk ki, mivel a GDPR 37. cikkében foglalt feltételek nem állnak fenn. Adatvédelmi kérdéseivel kérjük, a fenti e-mail címhez forduljon; megkeresését késedelem nélkül, de legkésőbb a beérkezéstől számított egy hónapon belül feldolgozzuk."),
        ],
      },
      {
        heading: "2. E tájékoztató felépítése", blocks: [
          p("A gyors tájékozódás érdekében ez az adatvédelmi tájékoztató egy általános részre (1–4. pont), az alkalmazás négy funkcionális területét, valamint a helymeghatározási és push adatokat részletesen bemutató különös részre (5–7. pont), az üzleti ügyfelekkel, fizetésekkel és értékelésekkel foglalkozó részre (8–12. pont), a weboldalra, a címzettekre, a harmadik országba történő továbbításra és a tárolási időre vonatkozó részre (13–16. pont), valamint az Ön jogaira, az adatbiztonságra és egyéb tudnivalókra vonatkozó részre (17–22. pont) tagolódik. A hivatalos forrásjegyzék a dokumentum végén található."),
        ],
      },
      {
        heading: "3. Az adatkezelés általános elvei", blocks: [
          p("A személyes adatokat a GDPR elveinek, különösen a jogszerűség, tisztességes eljárás, átláthatóság, célhoz kötöttség, adattakarékosság, pontosság, korlátozott tárolhatóság, valamint integritás és bizalmas jelleg elvének (GDPR 5. cikk) betartásával kezeljük. A személyes adatok minden kezelése legalább az alábbi jogalapok egyikén alapul:"),
          list([
            "GDPR 6. cikk (1) bekezdés a) pont – az érintett hozzájárulása, különösen a helyadatok megosztásához, push értesítések fogadásához, valamint az opcionális barát- és ranglistafunkcióhoz",
            "GDPR 6. cikk (1) bekezdés b) pont – szerződés teljesítéséhez vagy szerződéskötést megelőző lépések megtételéhez szükséges adatkezelés, például a Radar, Bélyegző, Kártyák és Home alkalmazásfunkciók biztosítása, valamint az előfizetések kezelése",
            "GDPR 6. cikk (1) bekezdés c) pont – jogi kötelezettség teljesítése, például adójogi és társasági jogi megőrzési kötelezettségek",
            "GDPR 6. cikk (1) bekezdés f) pont – jogos érdekek érvényesítése, például csalás- és visszaélés-megelőzés, informatikai biztonság és a platform továbbfejlesztése, amennyiben ezen érdekeket nem írják felül az érintett érdekei vagy alapvető jogai",
          ]),
        ],
      },
      {
        heading: "4. Áttekintés: ki mit kezel?", blocks: [
          p("A TapRadar két felhasználói csoportot köt össze: a végfelhasználókat, akik az ingyenes alkalmazáson keresztül fedeznek fel helyi üzleteket és gyűjtenek bélyegzőket, valamint az üzleti ügyfeleket, akik a fizetős irányítópulton keresztül kezelik ügyfélhűségüket. Mindkét csoport olyan adatokat generál, amelyeket részben kizárólag a TOY GmbH, részben az adott szerződéses partnerrel közösen kezelünk. Az alábbi 5–12. pontok ezeket az adatáramlásokat részletesen bemutatják, az alkalmazás négy területe, valamint a helymeghatározási, push, fizetési és értékelési adatok szerint tagolva."),
        ],
      },
      {
        heading: "5.1 Radar – fedezze fel a helyi üzleteket", blocks: [
          p("A Radar területen térképen mutatjuk meg az Ön közelében található TapRadar partnerüzleteket. A nézetet szűrők (akció, kupon, jutalom, legjobbra értékelt, 500 méteres körzet) és kategóriák, például kávézó, étterem, fodrász vagy piac szerint szűkítheti. Minden partnerüzletnél megjelenik a nyitvatartási idő, az értékelések, valamint az adott üzlet által választott csomagot (Bronze, Gold vagy Platinum) jelző csomagjelvény; ez a jelvény kizárólag az üzleti ügyfélre vonatkozik, és nem minősül az Önre vonatkozó személyes adatnak."),
          p("E funkció biztosításához kezeljük az Ön helyadatait (lásd 6. pont), az Ön által kiválasztott szűrő- és kategóriabeállításokat, valamint a megjelenített partnerüzletekkel folytatott interakcióit, például egy üzlet profiljának megnyitását. Ezeket az interakciós adatokat a találatok megjelenítésének javítására és a megjelenített partnerüzletek relevanciájának növelésére használjuk. Jogalap: GDPR 6. cikk (1) bekezdés a) pont a helymegosztáshoz, GDPR 6. cikk (1) bekezdés b) és f) pont a szűrő-, kategória- és interakciós adatokhoz."),
        ],
      },
      {
        heading: "5.2 Bélyegző – gyűjtsön digitális bélyegzőket", blocks: [
          p("A Bélyegző területen egy NFC pont megérintésével vagy alternatívaként egy partnerüzlet pénztáránál QR-kód beolvasásával automatikusan digitális bélyegzőt kaphat. Az előrehaladása, például 7 a 10-ből, azonnal megjelenik; a szükséges bélyegzőszám elérésekor beválthatja a tárolt jutalmat, például egy ingyenes kávét vagy kedvezményt. Minden bélyegzőért emellett pontokat is kap a Home területen elért szintjéhez."),
          p("Ehhez kezeljük az egyes bélyegzések időpontját és helyét, az érintett partnerüzletet, az adott hűségkártyán lévő aktuális bélyegzőszámot, a beváltott jutalmakat, valamint a hozzá tartozó beváltási kódot. Jogalap: GDPR 6. cikk (1) bekezdés b) pont. Annak ellenőrzésére, hogy a bélyegzés valóban a helyszínen történt-e, emellett összevetjük az Ön eszközének helyadatait; részletekért lásd a 6. pontot."),
        ],
      },
      {
        heading: "5.3 Kártyák – digitális tárca a meglévő ügyfélkártyákhoz", blocks: [
          p("A Kártyák területen a már meglévő, harmadik felek – például Billa, DM, H&M, Spar vagy Hofer – ügyfélkártyáit digitálisan elmentheti TapRadar tárcájában az adott vonalkód vagy QR-kód beolvasásával vagy manuális megadásával, majd bemutathatja azt a pénztárnál. A megnevezett márkák kizárólag példaként szolgálnak az Ön által saját maga tárolt kártyákra; a TapRadar nem áll kapcsolatban ezekkel a vállalatokkal, és nem folytat velük semmilyen adatcserét."),
          callout("Fontos", "A kártyatárcában tárolt adatok kizárólag Öntől származnak. Nem ellenőrizzük, hogy a megadott kártyák valódiak, érvényesek-e, vagy hozzárendelhetők-e az adott harmadik félhez, és semmilyen bónusz- vagy fiókadatot nem kapunk ezektől a vállalatoktól. A tárolt kártyaadatok pontosságáért, valamint azok adott pénztárnál történő elfogadásáért kizárólag Ön felel."),
          p("Az Ön által tárolt kártya- és vonalkódadatokat titkosítva tároljuk, és kizárólag a saját alkalmazásában történő megjelenítésre használjuk. Jogalap: GDPR 6. cikk (1) bekezdés b) pont, mivel a kártya hozzáadásával kifejezetten megbíz minket az adatok tárolásával."),
        ],
      },
      {
        heading: "5.4 Home – profil és játékosítás", blocks: [
          p("A Home területen megtalálja profilját egy 20 szintből álló, „Kezdő”-től „Bajnok”-ig terjedő szintrendszerrel. Pontokat gyűjthet a beváltott bélyegzőkért, leadott értékelésekért és meghívott barátokért, heti célt követhet nyomon, és részesülhet egy sorozatrendszer előnyeiből, amelyben hét egymást követő aktív nap bónuszt vált ki. Emellett meghívhat barátokat, és összehasonlíthatja előrehaladását egy ranglistán."),
          p("Ehhez kezeljük az Ön pontállását, szintjét, sorozatszámlálóját, célelőzményeit, valamint – ha aktívan használja ezt a funkciót – az Ön által meghívott vagy összekapcsolt barátok listáját és az Önnek látható, összesített előrehaladási adataikat, amennyiben ezek a személyek is hozzájárultak a kölcsönös láthatósághoz. Jogalap az alapfunkciókhoz (szint, pontok, sorozat, heti cél): GDPR 6. cikk (1) bekezdés b) pont. Jogalap az opcionális barát- és ranglistafunkcióhoz: GDPR 6. cikk (1) bekezdés a) pont, mivel ez adatokat tesz láthatóvá más személyek számára. A szintek, pontok és ranglistahelyezések nem rendelkeznek pénzbeli értékkel, és nem ruházhatók át."),
        ],
      },
      {
        heading: "6. Helymeghatározási és GPS-adatok részletesen", blocks: [
          p("A TapRadar az eszköze helyadatait két különálló célra használja: (a) a Radar funkcióhoz, hogy megjelenítse az Ön közelében található partnerüzleteket, és (b) az ügyféllátogatások ellenőrzéséhez, amikor egy NFC- vagy QR-bélyegzés időpontjában az eszköze helyét összeveti a partnerüzlet tárolt helyével, hogy megakadályozza a fizikai jelenlét nélküli bélyegzést."),
          p("Operációs rendszerétől függően a helymegosztást részletesen szabályozhatja, például „mindig”, „csak az alkalmazás használata közben” vagy „egyszeri” beállítással. A bélyegző-ellenőrzés alapfunkciójához elegendő a megosztás az alkalmazás használata közben; a tartós, háttérben történő helymegosztás csak akkor szükséges, ha egy Platinum partnerüzlet közelségi hirdetését szeretné használni (lásd 7.2. pont). Jogalap: az operációs rendszer engedélybeállításaival összefüggésben a GDPR 6. cikk (1) bekezdés a) pontja, másodlagosan a csalás megelőzéséhez fűződő jogos érdekünk a GDPR 6. cikk (1) bekezdés f) pontja alapján. A helymegosztást bármikor visszavonhatja eszköze beállításain keresztül; ez esetben egyes funkciók, különösen a bélyegző-ellenőrzés és a közelségi hirdetés, nem vagy csak korlátozottan állnak rendelkezésre."),
        ],
      },
      {
        heading: "7.1 Szolgáltatási értesítések a TapRadartól", blocks: [
          p("Szolgáltatási push üzeneteket saját felelősségünkre küldünk, például fiókbiztonsággal, a platform lényeges változásaival vagy tranzakciók megerősítésével kapcsolatban. Jogalap: GDPR 6. cikk (1) bekezdés b) és f) pont."),
        ],
      },
      {
        heading: "7.2 Üzleti ügyfelek marketing- és kampány push értesítései", blocks: [
          p("Az üzleti ügyfelek az irányítópulton keresztül kampányokat és push értesítéseket küldhetnek olyan végfelhasználóknak, akik már ügyfelei az adott partnerüzletnek (legalább egy beváltott bélyegzővel), vagy akik – kizárólag a Platinum csomagban elérhető közelségi hirdetés keretében – annak közelében tartózkodnak, és ehhez helymegosztást adtak. A push értesítések csomagtól függően meghatározott gyakoriságra korlátozottak (Gold: legfeljebb 2 kép-/PDF-kampány havonta, push értesítés nélkül; Platinum: legfeljebb 4 kampány havonta, valamint push értesítések, közelségi aktiválás, kampány visszaszámlálás és retargeting az utolsó látogatástól számított 30 napon belül)."),
          callout("Felelősség a push kampányokért", "A kampány tartalmáért, jogszerűségéért és versenyjogi megfelelőségéért az adott üzleti ügyfél felel. A TOY GmbH biztosítja a technikai kézbesítési infrastruktúrát, a gyakorisági korlátok betartását, valamint a bármikori leiratkozás lehetőségét. Ebben a tekintetben a TOY GmbH és az adott üzleti ügyfél a push kampányok elindítása és kézbesítése vonatkozásában a GDPR 26. cikke szerinti közös adatkezelőként jár el; ennek a felelősségmegosztásnak az alapvonalait ez a pont foglalja össze, a megállapodás lényege kérésre az érintettek rendelkezésére áll a support@tapradar.app címen."),
          p("A marketing- és kampány push értesítések fogadását bármikor, teljesen vagy partnerüzletenként, letilthatja eszközbeállításain vagy az alkalmazáson belüli beállításokon keresztül, anélkül hogy ez megakadályozná az alkalmazás alapfunkcióihoz való hozzáférését. Jogalap: GDPR 6. cikk (1) bekezdés a) pont a TKG 2021 174. §-ával összefüggésben."),
        ],
      },
      {
        heading: "8. Regisztráció és felhasználói fiók (végfelhasználók)", blocks: [
          p("A TapRadar alkalmazásba történő regisztrációkor gyűjtjük az Ön e-mail címét, jelszavát (titkosítva tárolva), a választott megjelenített nevet, valamint opcionális profiladatokat. Cél: felhasználói fiókjának létrehozása, kezelése és biztosítása. Jogalap: GDPR 6. cikk (1) bekezdés b) pont."),
        ],
      },
      {
        heading: "9. Regisztráció, fiók és céges adatok (üzleti ügyfelek)", blocks: [
          p("A Bronze, Gold vagy Platinum csomagra előfizető üzleti ügyfelek esetében emellett kezeljük: a cég nevét, jogi formáját, telephelyének címét, adószámát, kapcsolattartóját (név, e-mail, telefonszám), nyitvatartási idejét, az üzlet kategóriáját és leírását, valamint a feltöltött kép- és PDF-reklámanyagokat és kampánytartalmakat. Cél: szerződés teljesítése, az üzleti ügyfél irányítópult biztosítása, számlázás. Jogalap: GDPR 6. cikk (1) bekezdés b) és c) pont."),
        ],
      },
      {
        heading: "10. Alkalmazotti PIN-rendszer", blocks: [
          p("Az üzleti ügyfelek csomagtól függően akár 15 (Platinum), 5 (Gold), illetve 1 (Bronze) alkalmazotti hozzáférést hozhatnak létre egyéni PIN-kóddal. Ehhez kezeljük az üzleti ügyfél által megadott alkalmazotti monogramokat vagy neveket, valamint az adott PIN-kódon keresztül végzett bélyegzések és beváltások automatikusan vezetett tevékenységnaplóját. Az érintett alkalmazottakkal szembeni adatkezelés jogszerűségéért munkáltatóként az adott üzleti ügyfél felelős; a TOY GmbH ebben a tekintetben kizárólag a technikai infrastruktúrát biztosítja. Jogalap a TOY GmbH oldalán: GDPR 6. cikk (1) bekezdés b) pont, valamint GDPR 6. cikk (1) bekezdés f) pont."),
        ],
      },
      {
        heading: "11. Fizetésfeldolgozás", blocks: [
          p("A fizetős csomagok fizetésfeldolgozása a fizetési szolgáltatónkon, a Stripe-on keresztül történik. Mi magunk nem tárolunk teljes fizetőkártya-adatokat; ezeket kizárólag a Stripe kezeli. A Stripe-tól visszaigazolásokat kapunk a fizetés állapotáról és a számlaösszegekről, valamint adott esetben a használt fizetőeszköz utolsó négy számjegyéről, dokumentációs és elszámolási célból. Jogalap: GDPR 6. cikk (1) bekezdés b) és c) pont. A Stripe általi adatkezelésről bővebb információt a Stripe adatvédelmi tájékoztatójában talál a stripe.com/privacy oldalon."),
        ],
      },
      {
        heading: "12. Értékelések", blocks: [
          p("Ha végfelhasználóként értékelést ad egy partnerüzletről, kezeljük az értékelés szövegét, a csillagos értékelést, az időpontot, valamint az ellenőrzött látogatás igazolását (bélyegzőigazolás). Az értékelések az Ön megjelenített nevével együtt megjelennek a partnerüzletnek és más alkalmazásfelhasználóknak. Jogalap: GDPR 6. cikk (1) bekezdés a) pont a GDPR 6. cikk (1) bekezdés f) pontjával összefüggésben. Ha egy értékelést jogellenesként jelentenek be, például mert sértő, vagy nyilvánvalóan nem tényleges látogatáson alapul, a bejelentést és az érintett értékelést bejelentési és felülvizsgálati eljárásunk keretében megvizsgáljuk, és az eredményről tájékoztatjuk mind a bejelentőt, mind az értékelőt."),
        ],
      },
      {
        heading: "13. A weboldal használata, szerver naplófájlok és sütik", blocks: [
          p("A www.tapradar.app weboldalunk meglátogatásakor tárhelyszolgáltatónk automatikusan feldolgozza a technikai hozzáférési adatokat (IP-cím, a hozzáférés dátuma és időpontja, a megtekintett oldal, a használt böngésző és operációs rendszer, a hivatkozó URL) szerver naplófájlokban. Cél: a zavartalan üzemeltetés és az informatikai biztonság biztosítása. Jogalap: GDPR 6. cikk (1) bekezdés f) pont. A weboldal kizárólag a működéséhez szükséges, technikailag elengedhetetlen sütiket használ; jelenleg nem alkalmazunk követési vagy marketingsütiket. Amennyiben ez a jövőben megváltozna, sütikre vonatkozó hozzájárulási bannerrel kérjük az Ön hozzájárulását."),
        ],
      },
      {
        heading: "14. Címzettek és adatfeldolgozók", blocks: [
          p("Személyes adatokat csak a szolgáltatásaink nyújtásához szükséges mértékben, vagy ha erre jogszabály kötelez minket, adunk tovább. Adatfeldolgozóink, illetve címzettjeink közé tartoznak különösen:"),
          list([
            "tárhely- és infrastruktúra-szolgáltatók (szerver- és adatbázis-üzemeltetés)",
            "Stripe (fizetésfeldolgozás)",
            "push értesítési szolgáltatók (pl. Apple Push Notification Service, Firebase Cloud Messaging) szolgáltatási és kampány push célokra",
            "e-mail küldő szolgáltatók (tranzakciós és szolgáltatási kommunikáció)",
            "IT-szolgáltatók karbantartás és támogatás keretében",
          ]),
          p("Minden adatfeldolgozóval, amennyiben jogszabály előírja, a GDPR 28. cikke szerinti adatfeldolgozási szerződést kötöttünk. Amennyiben egy partnerüzlet (üzleti ügyfél) a szerződés teljesítése keretében az irányítópulton betekint az Ön bélyegző-, látogatási vagy kampányadataiba, ebben a tekintetben önálló adatkezelőként, push kampányok esetén pedig e tájékoztató 7.2. pontja szerinti közös adatkezelőként jár el."),
        ],
      },
      {
        heading: "15. Harmadik országba történő továbbítás", blocks: [
          p("Amennyiben a fent megnevezett szolgáltatók egyike az Európai Gazdasági Térségen (EGT) kívül kezel adatokat, ami különösen egyes amerikai szolgáltatók felhő- és push szolgáltatásait érintheti, megfelelő garanciákkal biztosítjuk a megfelelő adatvédelmi szintet, különösen az uniós standard szerződési feltételek megkötésével a GDPR 46. cikk (2) bekezdés c) pontja alapján, vagy a címzett tanúsításával az EU–USA adatvédelmi keretrendszer (Data Privacy Framework) alapján, amennyiben ez releváns."),
        ],
      },
      {
        heading: "16. Tárolási idő", blocks: [
          p("A személyes adatokat csak az adott célok eléréséhez szükséges ideig tároljuk:"),
          list([
            "Fiókadatok (végfelhasználók és üzleti ügyfelek): a felhasználói fiók, illetve a szerződéses jogviszony fennállásának időtartama alatt; a fiók törlését követően az adatokat elvben 30 napon belül töröljük, amennyiben ezt jogszabályi megőrzési kötelezettségek nem akadályozzák",
            "Bélyegző-, jutalom- és beváltási adatok: az adott partnerüzletnél vezetett fiók fennállásának időtartama alatt; az üzleti ügyfél szerződésének megszűnését követően a kapcsolódó hűségkártyák inaktívként kerülnek megjelölésre, és 12 hónap után törlésre kerülnek",
            "Kártyatárca-adatok (5.3. pont): az Ön általi önálló törlésig vagy fiókja törléséig",
            "Játékosítási adatok (szint, pontok, sorozat, heti cél): fiókja fennállásának időtartama alatt",
            "Baráti kapcsolatok és ranglista: az Ön általi eltávolításig vagy fiókja törléséig",
            "Számlázási és fizetési adatok: 7 év a § 132 BAO és § 212 UGB szerint",
            "Push kézbesítési és interakciós naplók: 12 hónap",
            "Szerver naplófájlok: általában 30–90 nap",
            "Helyadatok a bélyegző-ellenőrzéshez: nincs tartós tárolás; kezelés csak az ellenőrzés időtartamára, ezt követően eseménynaplóra (időpont, eredmény) korlátozva",
            "Ügyfélszolgálati kommunikáció: az ügy lezárásától számított 3 év, amennyiben jogszabály nem ír elő hosszabb megőrzési időt",
          ]),
        ],
      },
      {
        heading: "17. Az Ön mint érintett jogai", blocks: [
          p("A törvényi feltételek szerint az alábbi jogok illetik meg Önt:"),
          list([
            "hozzáférési jog (GDPR 15. cikk)",
            "helyesbítéshez való jog (GDPR 16. cikk)",
            "törléshez való jog (GDPR 17. cikk)",
            "az adatkezelés korlátozásához való jog (GDPR 18. cikk)",
            "adathordozhatósághoz való jog (GDPR 20. cikk)",
            "tiltakozási jog a GDPR 6. cikk (1) bekezdés f) pontján alapuló adatkezelés ellen (GDPR 21. cikk)",
            "az adott hozzájárulás jövőre nézve történő visszavonásához való jog (GDPR 7. cikk (3) bekezdés)",
          ]),
          p("E jogok gyakorlásához elegendő egy informális üzenet a support@tapradar.app címre. Kérését késedelem nélkül, de legkésőbb egy hónapon belül feldolgozzuk; ez a határidő összetett vagy nagyszámú kérés esetén további két hónappal meghosszabbítható, amiről tájékoztatjuk Önt."),
        ],
      },
      {
        heading: "18. Adatbiztonság", blocks: [
          p("A GDPR 32. cikke szerint megfelelő technikai és szervezési intézkedéseket alkalmazunk annak érdekében, hogy adatait megvédjük az elvesztéstől, visszaéléstől és jogosulatlan hozzáféréstől, ideértve az adatátvitel titkosítását (TLS), a különösen érzékeny tárolt adatok, például jelszavak és kártyatárca-adatok titkosítását, a legkisebb jogosultság elve szerinti hozzáférés-korlátozást, rendszeres biztonsági frissítéseket, valamint a biztonsági szempontból releváns események naplózását. Biztonsági intézkedéseinket folyamatosan a technika aktuális állásához igazítjuk."),
        ],
      },
      {
        heading: "19. Automatizált döntéshozatal hiánya, korlátozott profilalkotás", blocks: [
          p("Az alkalmazáson belüli szintek, pontok és ranglisták automatizált, de teljes mértékben átlátható és érthető szabályokon alapulnak, a GDPR 22. cikke szerinti jogi vagy hasonlóan jelentős hatás nélkül. A közelségi hirdetés (7.2. pont) keretében korlátozott, helyalapú profilalkotás történik annak érdekében, hogy megjeleníthessük Önnek a közeli partnerüzletek értesítéseit; ez az adatkezelés kizárólag az Ön hozzájárulásán alapul, és nincs a GDPR 22. cikke szerinti jogi vagy hasonlóan jelentős hatása. A felhasználókkal szemben jogi hatással járó automatizált döntéshozatal nem történik."),
        ],
      },
      {
        heading: "20. Kiskorúak védelme", blocks: [
          p("A TapRadar nem kifejezetten 14 éven aluli gyermekeket céloz meg. Amennyiben tudomásunkra jut, hogy a nemzeti jog szerint irányadó minimális életkor alatti gyermek személyes adatait törvényes képviselőjének hozzájárulása nélkül gyűjtöttük, ezeket az adatokat haladéktalanul töröljük."),
        ],
      },
      {
        heading: "21. Ezen adatvédelmi tájékoztató módosításai", blocks: [
          p("Fenntartjuk a jogot, hogy ezt az adatvédelmi tájékoztatót a megváltozott jogi helyzethez vagy a platform új funkcióihoz igazítsuk. Mindenkor a www.tapradar.app/datenschutz oldalon az Ön látogatásának, illetve használatának időpontjában közzétett aktuális változat az irányadó. Ha a lényeges módosítások megváltozott jogalapon, például egy első alkalommal adott hozzájáruláson alapulnak, ezt a hozzájárulást ismételten beszerezzük."),
        ],
      },
      {
        heading: "22. Kapcsolat és panasztételi jog", blocks: [
          p("Adatvédelmi kérdéseivel a support@tapradar.app címen érhet el minket. Egyéb közigazgatási vagy bírósági jogorvoslati lehetőségek sérelme nélkül Önt megilleti a jog, hogy panaszt nyújtson be egy felügyeleti hatóságnál, különösen az Ausztriáért felelős hatóságnál:"),
          list(["Osztrák Adatvédelmi Hatóság (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Bécs, Ausztria", "Weboldal: www.dsb.gv.at"]),
          callout("Többnyelvűség", "Az Osztrák Adatvédelmi Hatóság weboldala jelenleg németül, valamint részben angolul érhető el. Ha sem a német, sem az angol nem az Ön preferált nyelve, bármikor informálisan is kapcsolatba léphet velünk a support@tapradar.app címen; a weboldalon elérhető nyelveken segítünk Önnek a felügyeleti hatósággal való kapcsolatfelvételben."),
        ],
      },
    ],
    sourcesHeading: "Forrásjegyzék",
    sourcesIntro: "Az uniós és osztrák hivatalos források, amelyeken ez az adatvédelmi tájékoztató alapul:",
    sources: [
      { label: "Általános adatvédelmi rendelet (GDPR), (EU) 2016/679 rendelet", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Osztrák Adatvédelmi Hatóság", url: "https://www.dsb.gv.at/" },
    ],
  },
  sk: {
    title: "Zásady ochrany osobných údajov",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Aktualizované: 9. augusta 2026 · Verzia 2026-08-09.2 (podrobná verzia)",
    intro: [
      p("Ochrana vašich osobných údajov je pre spoločnosť TOY GmbH kľúčovou záležitosťou. Tieto zásady ochrany osobných údajov vás komplexne a podrobne informujú o tom, aké osobné údaje zhromažďujeme v súvislosti s používaním aplikácie TapRadar a jej štyroch funkčných oblastí Radar, Pečiatka, Karty a Home, webovej stránky TapRadar, ako aj dashboardu TapRadar pre obchodných zákazníkov (spoločne „TapRadar“ alebo „Platforma“), na aké účely a na akom právnom základe ich spracúvame, komu údaje odovzdávame, ako dlho ich uchovávame a aké práva vám ako dotknutej osobe prináležia. Tieto zásady sa vzťahujú tak na koncových zákazníkov, ktorí používajú bezplatnú aplikáciu TapRadar, ako aj na obchodných zákazníkov, ktorí si predplatili niektorý z platených tarifov TapRadar Bronze, Gold alebo Platinum. Vychádzajú z nariadenia (EÚ) 2016/679 (všeobecné nariadenie o ochrane údajov, „GDPR“), ako aj z príslušných rakúskych vykonávacích predpisov, najmä zákona o ochrane osobných údajov (DSG) a zákona o telekomunikáciách 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Prevádzkovateľ", blocks: [
          p("Prevádzkovateľom v zmysle čl. 4 bodu 7 GDPR je:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Rakúsko", "IČ DPH: ATU78882167", "E-mail: support@tapradar.app", "Webová stránka: www.tapradar.app"]),
          p("Firemný zodpovedná osoba nebola vymenovaná, keďže nie sú splnené podmienky čl. 37 GDPR. Otázky týkajúce sa ochrany osobných údajov adresujte prosím na vyššie uvedenú e-mailovú adresu; vybavíme ich bezodkladne, najneskôr však do jedného mesiaca od doručenia."),
        ],
      },
      {
        heading: "2. Štruktúra týchto zásad", blocks: [
          p("Aby ste sa mohli rýchlo zorientovať, tieto zásady ochrany osobných údajov sú rozdelené na všeobecnú časť (body 1 až 4), osobitnú časť podrobne opisujúcu štyri funkčné oblasti aplikácie, ako aj údaje o polohe a push notifikáciách (body 5 až 7), časť týkajúcu sa obchodných zákazníkov, platieb a recenzií (body 8 až 12), časť týkajúcu sa webovej stránky, príjemcov, prenosu do tretích krajín a doby uchovávania (body 13 až 16), ako aj časť týkajúcu sa vašich práv, bezpečnosti údajov a ďalších informácií (body 17 až 22). Zoznam úradných zdrojov sa nachádza na konci dokumentu."),
        ],
      },
      {
        heading: "3. Všeobecné zásady spracúvania údajov", blocks: [
          p("Osobné údaje spracúvame v súlade so zásadami GDPR, najmä zákonnosťou, spravodlivým zaobchádzaním, transparentnosťou, obmedzením účelu, minimalizáciou údajov, presnosťou, obmedzením uloženia, ako aj integritou a dôvernosťou (čl. 5 GDPR). Každé spracúvanie osobných údajov sa opiera aspoň o jeden z nasledujúcich právnych základov:"),
          list([
            "čl. 6 ods. 1 písm. a) GDPR – súhlas dotknutej osoby, najmä na zdieľanie údajov o polohe, prijímanie push notifikácií a voliteľnú funkciu priateľov a rebríčka",
            "čl. 6 ods. 1 písm. b) GDPR – nevyhnutnosť na plnenie zmluvy alebo vykonanie opatrení pred uzatvorením zmluvy, napríklad poskytovanie funkcií aplikácie Radar, Pečiatka, Karty a Home a správa predplatných",
            "čl. 6 ods. 1 písm. c) GDPR – splnenie zákonnej povinnosti, napríklad daňových a obchodnoprávnych povinností uchovávania",
            "čl. 6 ods. 1 písm. f) GDPR – ochrana oprávnených záujmov, napríklad prevencia podvodov a zneužitia, bezpečnosť IT a ďalší rozvoj platformy, pokiaľ tieto záujmy neprevažujú nad záujmami alebo základnými právami dotknutej osoby",
          ]),
        ],
      },
      {
        heading: "4. Prehľad: kto spracúva čo?", blocks: [
          p("TapRadar spája dve skupiny používateľov: koncových zákazníkov, ktorí prostredníctvom bezplatnej aplikácie objavujú miestne podniky a zbierajú pečiatky, a obchodných zákazníkov, ktorí prostredníctvom plateného dashboardu riadia vernosť svojich zákazníkov. Obe skupiny generujú údaje, ktoré sú spracúvané čiastočne výlučne spoločnosťou TOY GmbH, čiastočne spoločne s príslušným zmluvným partnerom. Nasledujúce body 5 až 12 tieto toky údajov podrobne opisujú, štruktúrované podľa štyroch oblastí aplikácie a podľa údajov o polohe, push notifikáciách, platbách a recenziách."),
        ],
      },
      {
        heading: "5.1 Radar – objavujte miestne podniky", blocks: [
          p("V oblasti Radar vám na mape zobrazujeme partnerské podniky TapRadar vo vašej blízkosti. Zobrazenie môžete zúžiť pomocou filtrov (akcia, kupón, odmena, najlepšie hodnotené, okruh 500 metrov) a kategórií, ako je kaviareň, reštaurácia, kaderníctvo alebo trh. Pri každom partnerskom podniku sa zobrazuje otváracia doba, recenzie a odznak tarifu, ktorý označuje tarif zvolený týmto podnikom (Bronze, Gold alebo Platinum); tento odznak sa týka výlučne obchodného zákazníka a nepredstavuje žiadny váš osobný údaj."),
          p("Na poskytovanie tejto funkcie spracúvame vašu polohu (pozri bod 6), vami zvolené nastavenia filtrov a kategórií a vaše interakcie so zobrazenými partnerskými podnikmi, napríklad otvorenie profilu podniku. Tieto interakčné údaje využívame na zlepšenie zobrazenia výsledkov a zvýšenie relevantnosti zobrazovaných partnerských podnikov. Právny základ: čl. 6 ods. 1 písm. a) GDPR pre zdieľanie polohy, čl. 6 ods. 1 písm. b) a f) GDPR pre údaje o filtroch, kategóriách a interakciách."),
        ],
      },
      {
        heading: "5.2 Pečiatka – zbierajte digitálne pečiatky", blocks: [
          p("V oblasti Pečiatka môžete automaticky získať digitálnu pečiatku dotykom na NFC bod alebo alternatívne naskenovaním QR kódu pri pokladni partnerského podniku. Váš postup, napríklad 7 z 10 pečiatok, sa zobrazí okamžite; po dosiahnutí požadovaného počtu pečiatok si môžete uplatniť uloženú odmenu, napríklad kávu zadarmo alebo zľavu. Za každú pečiatku navyše získavate body pre svoju úroveň v oblasti Home."),
          p("Na tento účel spracúvame čas a miesto každého pečiatkovania, dotknutý partnerský podnik, aktuálny stav pečiatok na jednotlivej vernostnej karte, uplatnené odmeny a príslušný kód uplatnenia. Právny základ: čl. 6 ods. 1 písm. b) GDPR. Na overenie, že pečiatkovanie skutočne prebehlo na mieste, navyše porovnávame polohu vášho zariadenia; podrobnosti nájdete v bode 6."),
        ],
      },
      {
        heading: "5.3 Karty – digitálna peňaženka pre existujúce zákaznícke karty", blocks: [
          p("V oblasti Karty môžete do svojej peňaženky TapRadar digitálne uložiť už existujúce zákaznícke karty tretích strán, napríklad Billa, DM, H&M, Spar alebo Hofer, naskenovaním alebo ručným zadaním príslušného čiarového alebo QR kódu, a následne ich predložiť pri pokladni. Uvedené značky slúžia len ako príklady kariet, ktoré si sami ukladáte; TapRadar nie je s týmito spoločnosťami prepojený a nevymieňa si s nimi žiadne údaje."),
          callout("Dôležité", "Údaje uložené v peňaženke kariet pochádzajú výlučne od vás. Neoverujeme, či sú zadané karty pravé, platné alebo priraditeľné príslušnej tretej strane, a nezískavame od týchto spoločností žiadne bonusové ani účtovné údaje. Za správnosť uložených údajov o karte a ich prijatie pri príslušnej pokladni zodpovedáte výlučne vy."),
          p("Vami uložené údaje o karte a čiarovom kóde sú uložené v zašifrovanej podobe a používané výlučne na zobrazenie vo vašej vlastnej aplikácii. Právny základ: čl. 6 ods. 1 písm. b) GDPR, keďže nás pridaním karty konkrétne poverujete jej uložením."),
        ],
      },
      {
        heading: "5.4 Home – profil a gamifikácia", blocks: [
          p("V oblasti Home nájdete svoj profil s 20-úrovňovým systémom úrovní od „Nováčika“ po „Šampióna“. Zbierate body za nazbierané pečiatky, odoslané recenzie a pozvaných priateľov, sledujete týždenný cieľ a využívate systém série, kde sedem po sebe nasledujúcich aktívnych dní spúšťa bonus. Okrem toho môžete pozývať priateľov a porovnávať svoj pokrok v rebríčku."),
          p("Na tento účel spracúvame váš stav bodov, vašu úroveň, počítadlo série, históriu vašich cieľov a – ak túto funkciu aktívne používate – zoznam vami pozvaných alebo prepojených priateľov a ich súhrnné údaje o pokroku, ktoré sú pre vás viditeľné, pokiaľ tieto osoby tiež súhlasili so vzájomnou viditeľnosťou. Právny základ pre základné funkcie (úroveň, body, séria, týždenný cieľ): čl. 6 ods. 1 písm. b) GDPR. Právny základ pre voliteľnú funkciu priateľov a rebríčka: čl. 6 ods. 1 písm. a) GDPR, keďže tým sú údaje sprístupnené ďalším osobám. Úrovne, body a poradie v rebríčku nemajú žiadnu peňažnú hodnotu a nie sú prevoditeľné."),
        ],
      },
      {
        heading: "6. Údaje o polohe a GPS podrobne", blocks: [
          p("TapRadar používa údaje o polohe vášho zariadenia na dva samostatné účely: (a) funkciu Radar na zobrazenie partnerských podnikov vo vašej blízkosti a (b) overovanie návštev zákazníkov porovnaním polohy vášho zariadenia v okamihu pečiatkovania NFC alebo QR s uloženou polohou partnerského podniku, aby sa zabránilo pečiatkovaniu bez fyzickej prítomnosti."),
          p("V závislosti od operačného systému môžete zdieľanie polohy podrobne nastaviť, napríklad pomocou možností „vždy“, „len pri používaní aplikácie“ alebo „jednorazovo“. Pre základnú funkciu overovania pečiatok postačuje zdieľanie počas používania aplikácie; trvalé zdieľanie polohy na pozadí je potrebné iba vtedy, ak chcete využívať reklamu na základe blízkosti partnerského podniku s tarifom Platinum (pozri bod 7.2). Právny základ: čl. 6 ods. 1 písm. a) GDPR v spojení s nastavením oprávnení vášho operačného systému, subsidiárne náš oprávnený záujem na prevencii podvodov podľa čl. 6 ods. 1 písm. f) GDPR. Zdieľanie polohy môžete kedykoľvek odvolať prostredníctvom nastavení svojho zariadenia; niektoré funkcie, najmä overovanie pečiatok a reklama na základe blízkosti, potom nebudú k dispozícii alebo budú k dispozícii len v obmedzenej miere."),
        ],
      },
      {
        heading: "7.1 Servisné oznámenia od TapRadar", blocks: [
          p("Servisné push správy zasielame na vlastnú zodpovednosť, napríklad v súvislosti so zabezpečením účtu, podstatnými zmenami platformy alebo potvrdením transakcií. Právny základ: čl. 6 ods. 1 písm. b) a f) GDPR."),
        ],
      },
      {
        heading: "7.2 Marketingové a kampaňové push oznámenia obchodných zákazníkov", blocks: [
          p("Obchodní zákazníci môžu prostredníctvom dashboardu zasielať kampane a push oznámenia koncovým zákazníkom, ktorí sú už zákazníkmi príslušného partnerského podniku (aspoň jedna nazbieraná pečiatka) alebo ktorí sa – v rámci reklamy na základe blízkosti dostupnej výlučne v tarife Platinum – nachádzajú v jeho blízkosti a na tento účel udelili zdieľanie polohy. Push oznámenia sú v závislosti od tarifu obmedzené na určitú frekvenciu (Gold: až 2 obrázkové/PDF kampane mesačne, žiadne push oznámenia; Platinum: až 4 kampane mesačne naviac s push oznámeniami, spúšťaním na základe blízkosti, odpočtom kampane a retargetingom do 30 dní od vašej poslednej návštevy)."),
          callout("Zodpovednosť za push kampane", "Za obsah, zákonnosť a súlad kampane s právom hospodárskej súťaže zodpovedá príslušný obchodný zákazník. TOY GmbH zabezpečuje technickú infraštruktúru doručovania, dodržiavanie frekvenčných limitov a možnosť kedykoľvek sa odhlásiť. V tomto ohľade konajú TOY GmbH a príslušný obchodný zákazník vo vzťahu k spúšťaniu a doručovaniu push kampaní ako spoloční prevádzkovatelia v zmysle čl. 26 GDPR; hlavné zásady tohto rozdelenia zodpovednosti sú zhrnuté v tomto bode, podstata dohody je dotknutým osobám na požiadanie poskytnutá na adrese support@tapradar.app."),
          p("Príjem marketingových a kampaňových push oznámení môžete kedykoľvek úplne alebo pre jednotlivé partnerské podniky deaktivovať prostredníctvom nastavení zariadenia alebo nastavení v aplikácii, bez toho, aby vám tým bol znemožnený prístup k základným funkciám aplikácie. Právny základ: čl. 6 ods. 1 písm. a) GDPR v spojení s § 174 TKG 2021."),
        ],
      },
      {
        heading: "8. Registrácia a používateľský účet (koncoví zákazníci)", blocks: [
          p("Pri registrácii v aplikácii TapRadar zhromažďujeme vašu e-mailovú adresu, heslo (uložené v zašifrovanej podobe), zvolené zobrazované meno a voliteľné údaje o profile. Účel: zriadenie, správa a zabezpečenie vášho používateľského účtu. Právny základ: čl. 6 ods. 1 písm. b) GDPR."),
        ],
      },
      {
        heading: "9. Registrácia, účet a firemné údaje (obchodní zákazníci)", blocks: [
          p("Pri obchodných zákazníkoch, ktorí si predplatia tarif Bronze, Gold alebo Platinum, navyše spracúvame: názov firmy, právnu formu, adresu prevádzky, IČ DPH, kontaktnú osobu (meno, e-mail, telefónne číslo), otváracie hodiny, kategóriu a opis podniku, ako aj nahraný obrázkový a PDF reklamný materiál a obsah kampaní. Účel: plnenie zmluvy, poskytovanie dashboardu pre obchodných zákazníkov, fakturácia. Právny základ: čl. 6 ods. 1 písm. b) a c) GDPR."),
        ],
      },
      {
        heading: "10. Systém PIN pre zamestnancov", blocks: [
          p("Obchodní zákazníci môžu v závislosti od tarifu zriadiť až 15 (Platinum), 5 (Gold), resp. 1 (Bronze) prístup pre zamestnancov s individuálnym PIN kódom. Na tento účel spracúvame obchodným zákazníkom zadané skratky alebo mená zamestnancov, ako aj automaticky vedený protokol aktivít pečiatkovania a uplatnení vykonaných prostredníctvom príslušného PIN. Za zákonnosť tohto spracúvania voči dotknutým zamestnancom zodpovedá príslušný obchodný zákazník ako zamestnávateľ; TOY GmbH v tomto ohľade poskytuje iba technickú infraštruktúru. Právny základ na strane TOY GmbH: čl. 6 ods. 1 písm. b) GDPR a čl. 6 ods. 1 písm. f) GDPR."),
        ],
      },
      {
        heading: "11. Spracovanie platieb", blocks: [
          p("Spracovanie platieb za platené tarify prebieha prostredníctvom nášho poskytovateľa platobných služieb Stripe. My sami neukladáme úplné údaje o platobných kartách; tie sú spracúvané výlučne spoločnosťou Stripe. Od Stripe dostávame potvrdenia o stave platby a fakturovaných sumách, prípadne posledné štyri číslice použitého platobného prostriedku, na účely dokumentácie a vyúčtovania. Právny základ: čl. 6 ods. 1 písm. b) a c) GDPR. Ďalšie informácie o spracúvaní údajov spoločnosťou Stripe nájdete v zásadách ochrany osobných údajov Stripe na stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Recenzie", blocks: [
          p("Ak ako koncový zákazník zverejníte recenziu partnerského podniku, spracúvame text recenzie, hodnotenie hviezdičkami, čas a doklad o overenej návšteve (doklad o pečiatke). Recenzie sa zobrazujú partnerskému podniku a ďalším používateľom aplikácie spolu s vaším zobrazovaným menom. Právny základ: čl. 6 ods. 1 písm. a) GDPR v spojení s čl. 6 ods. 1 písm. f) GDPR. Ak je recenzia nahlásená ako protiprávna, napríklad preto, že je urážlivá alebo zjavne nevychádza zo skutočnej návštevy, preskúmame nahlásenie a dotknutú recenziu v rámci nášho postupu nahlasovania a preskúmania a oznámime výsledok tak osobe, ktorá nahlásenie podala, ako aj autorovi recenzie."),
        ],
      },
      {
        heading: "13. Používanie webovej stránky, serverové log súbory a cookies", blocks: [
          p("Pri návšteve našej webovej stránky www.tapradar.app náš poskytovateľ hostingu automaticky spracúva technické prístupové údaje (IP adresa, dátum a čas prístupu, navštívená stránka, použitý prehliadač a operačný systém, referrer URL) v serverových log súboroch. Účel: zaistenie bezporuchovej prevádzky a bezpečnosti IT. Právny základ: čl. 6 ods. 1 písm. f) GDPR. Webová stránka používa výlučne technicky nevyhnutné cookies potrebné na prevádzku stránky; sledovacie alebo marketingové cookies v súčasnosti nepoužívame. Ak by sa to v budúcnosti zmenilo, požiadame vás o súhlas prostredníctvom bannera pre súhlas s cookies."),
        ],
      },
      {
        heading: "14. Príjemcovia a sprostredkovatelia", blocks: [
          p("Osobné údaje odovzdávame len v rozsahu nevyhnutnom na poskytovanie našich služieb alebo v prípade, že sme na to zo zákona povinní. Medzi našich sprostredkovateľov, resp. príjemcov, patria najmä:"),
          list([
            "poskytovatelia hostingu a infraštruktúry (prevádzka serverov a databáz)",
            "Stripe (spracovanie platieb)",
            "poskytovatelia služieb push notifikácií (napr. Apple Push Notification Service, Firebase Cloud Messaging) pre servisné a kampaňové push oznámenia",
            "poskytovatelia služieb odosielania e-mailov (transakčná a servisná komunikácia)",
            "poskytovatelia IT služieb v rámci údržby a podpory",
          ]),
          p("So všetkými sprostredkovateľmi sme, pokiaľ to zákon vyžaduje, uzatvorili zmluvy o spracúvaní údajov podľa čl. 28 GDPR. Ak partnerský podnik (obchodný zákazník) v rámci plnenia zmluvy nahliada v dashboarde do vašich údajov o pečiatkach, návštevách alebo kampaniach, koná v tomto rozsahu ako samostatný prevádzkovateľ, resp. v prípade push kampaní ako spoločný prevádzkovateľ podľa bodu 7.2 týchto zásad."),
        ],
      },
      {
        heading: "15. Prenos do tretích krajín", blocks: [
          p("Pokiaľ jednotliví vyššie uvedení poskytovatelia služieb spracúvajú údaje mimo Európskeho hospodárskeho priestoru (EHP), čo sa môže týkať najmä niektorých cloudových a push služieb amerických poskytovateľov, zaisťujeme prostredníctvom vhodných záruk zodpovedajúcu úroveň ochrany údajov, najmä uzatvorením štandardných zmluvných doložiek EÚ podľa čl. 46 ods. 2 písm. c) GDPR alebo certifikáciou príjemcu v rámci Data Privacy Framework EÚ – USA, ak je to relevantné."),
        ],
      },
      {
        heading: "16. Doba uchovávania", blocks: [
          p("Osobné údaje uchovávame len po dobu nevyhnutnú na dosiahnutie príslušných účelov:"),
          list([
            "Údaje o účte (koncoví a obchodní zákazníci): počas trvania používateľského účtu, resp. zmluvného vzťahu; po zrušení účtu sa údaje spravidla vymažú do 30 dní, pokiaľ tomu nebránia zákonné povinnosti uchovávania",
            "Údaje o pečiatkach, odmenách a uplatneniach: počas trvania účtu u príslušného partnerského podniku; po ukončení zmluvy s obchodným zákazníkom sa príslušné vernostné karty označia ako neaktívne a po 12 mesiacoch vymažú",
            "Údaje o peňaženke kariet (bod 5.3): až do vlastného vymazania vami alebo do zrušenia vášho účtu",
            "Údaje o gamifikácii (úroveň, body, séria, týždenný cieľ): počas trvania vášho účtu",
            "Prepojenia s priateľmi a rebríček: až do odstránenia vami alebo do zrušenia vášho účtu",
            "Fakturačné a platobné údaje: 7 rokov podľa § 132 BAO a § 212 UGB",
            "Protokoly doručovania a interakcií push: 12 mesiacov",
            "Serverové log súbory: spravidla 30 až 90 dní",
            "Údaje o polohe na overovanie pečiatok: bez trvalého uloženia; spracovanie len počas doby overovania, potom redukcia na protokol udalosti (čas, výsledok)",
            "Komunikácia s podporou: 3 roky od uzavretia prípadu, pokiaľ zákon nevyžaduje dlhšie uchovávanie",
          ]),
        ],
      },
      {
        heading: "17. Vaše práva ako dotknutej osoby", blocks: [
          p("Za podmienok stanovených zákonom vám prináležia nasledujúce práva:"),
          list([
            "právo na prístup (čl. 15 GDPR)",
            "právo na opravu (čl. 16 GDPR)",
            "právo na vymazanie (čl. 17 GDPR)",
            "právo na obmedzenie spracúvania (čl. 18 GDPR)",
            "právo na prenosnosť údajov (čl. 20 GDPR)",
            "právo namietať proti spracúvaniu založenému na čl. 6 ods. 1 písm. f) GDPR (čl. 21 GDPR)",
            "právo odvolať udelený súhlas s účinnosťou do budúcnosti (čl. 7 ods. 3 GDPR)",
          ]),
          p("Na uplatnenie týchto práv postačí neformálna správa na support@tapradar.app. Vašu žiadosť vybavíme bezodkladne, najneskôr však do jedného mesiaca; táto lehota môže byť pri zložitých alebo početných žiadostiach predĺžená o ďalšie dva mesiace, o čom vás budeme informovať."),
        ],
      },
      {
        heading: "18. Bezpečnosť údajov", blocks: [
          p("Na ochranu vašich údajov pred stratou, zneužitím a neoprávneným prístupom uplatňujeme primerané technické a organizačné opatrenia podľa čl. 32 GDPR, medzi ktoré patrí šifrovanie prenosu údajov (TLS), šifrovanie osobitne citlivých uložených údajov, ako sú heslá a údaje o peňaženke kariet, obmedzenia prístupu podľa zásady najnižších oprávnení, pravidelné bezpečnostné aktualizácie a protokolovanie bezpečnostne relevantných udalostí. Naše bezpečnostné opatrenia priebežne prispôsobujeme aktuálnemu stavu techniky."),
        ],
      },
      {
        heading: "19. Žiadne automatizované rozhodovanie, obmedzené profilovanie", blocks: [
          p("Úrovne, body a rebríčky v rámci aplikácie vychádzajú z automatizovaných, no plne transparentných a zrozumiteľných pravidiel bez právneho alebo obdobne významného účinku v zmysle čl. 22 GDPR. V rámci reklamy na základe blízkosti (bod 7.2) dochádza k obmedzenému profilovaniu na základe polohy, aby vám mohli byť zobrazené oznámenia od partnerských podnikov vo vašej blízkosti; toto spracúvanie sa opiera výlučne o váš súhlas a nemá žiadny právny alebo obdobne významný účinok v zmysle čl. 22 GDPR. Automatizované rozhodovanie s právnym účinkom voči používateľom neprebieha."),
        ],
      },
      {
        heading: "20. Ochrana maloletých", blocks: [
          p("TapRadar sa cielene nezameriava na deti mladšie ako 14 rokov. Ak zistíme, že bez súhlasu zákonného zástupcu boli zhromaždené osobné údaje dieťaťa mladšieho, ako je minimálny vek stanovený vnútroštátnym právom, tieto údaje bezodkladne vymažeme."),
        ],
      },
      {
        heading: "21. Zmeny týchto zásad ochrany osobných údajov", blocks: [
          p("Vyhradzujeme si právo tieto zásady ochrany osobných údajov upraviť tak, aby zodpovedali zmenenej právnej situácii alebo novým funkciám platformy. Vždy platí aktuálna verzia zverejnená na www.tapradar.app/datenschutz v okamihu vašej návštevy, resp. používania. V prípade podstatných zmien založených na zmenenom právnom základe, ako je prvotný súhlas, si tento súhlas vyžiadame znovu."),
        ],
      },
      {
        heading: "22. Kontakt a právo podať sťažnosť", blocks: [
          p("V prípade otázok týkajúcich sa ochrany osobných údajov nás môžete kontaktovať na adrese support@tapradar.app. Bez ohľadu na iný správny alebo súdny opravný prostriedok máte právo podať sťažnosť dozornému orgánu, najmä orgánu príslušnému pre Rakúsko:"),
          list(["Rakúsky úrad na ochranu osobných údajov (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Viedeň, Rakúsko", "Webová stránka: www.dsb.gv.at"]),
          callout("Viacjazyčnosť", "Webová stránka rakúskeho Úradu na ochranu osobných údajov je v súčasnosti dostupná v nemčine, čiastočne aj v angličtine. Ak nemčina ani angličtina nie sú vaším preferovaným jazykom, môžete sa na nás kedykoľvek neformálne obrátiť na adrese support@tapradar.app; v jazykoch dostupných na tejto webovej stránke vám pomôžeme s kontaktovaním dozorného orgánu."),
        ],
      },
    ],
    sourcesHeading: "Zoznam zdrojov",
    sourcesIntro: "Úradné zdroje EÚ a Rakúska, z ktorých tieto zásady ochrany osobných údajov vychádzajú:",
    sources: [
      { label: "Všeobecné nariadenie o ochrane údajov (GDPR), nariadenie (EÚ) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Rakúsky úrad na ochranu osobných údajov", url: "https://www.dsb.gv.at/" },
    ],
  },
  "sr-Latn": {
    title: "Politika privatnosti",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Ažurirano: 9. avgust 2026 · Verzija 2026-08-09.2 (detaljna verzija)",
    intro: [
      p("Zaštita vaših ličnih podataka je od centralnog značaja za TOY GmbH. Ova politika privatnosti vas sveobuhvatno i detaljno informiše o tome koje lične podatke prikupljamo u vezi sa korišćenjem aplikacije TapRadar sa njena četiri funkcionalna dela Radar, Pečat, Kartice i Home, veb-sajta TapRadar, kao i kontrolne table TapRadar za poslovne korisnike (zajedno „TapRadar“ ili „Platforma“), u koje svrhe i na kom pravnom osnovu ih obrađujemo, kome podatke prosleđujemo, koliko dugo ih čuvamo i koja prava vam pripadaju kao licu na koje se podaci odnose. Ova izjava važi i za krajnje korisnike koji koriste besplatnu aplikaciju TapRadar, kao i za poslovne korisnike koji su se pretplatili na neki od plaćenih paketa TapRadar Bronze, Gold ili Platinum. Zasniva se na Uredbi (EU) 2016/679 (Opšta uredba o zaštiti podataka, „GDPR“), kao i na relevantnim austrijskim sprovedbenim propisima, posebno Zakonu o zaštiti podataka (DSG) i Zakonu o telekomunikacijama 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Rukovalac podacima", blocks: [
          p("Rukovalac u smislu člana 4. tačke 7. GDPR je:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austrija", "PIB: ATU78882167", "E-pošta: support@tapradar.app", "Veb-sajt: www.tapradar.app"]),
          p("Interni službenik za zaštitu podataka nije imenovan, jer nisu ispunjeni uslovi iz člana 37. GDPR. Pitanja u vezi sa zaštitom podataka pošaljite na gore navedenu e-adresu; obradićemo ih bez odlaganja, a najkasnije u roku od mesec dana od prijema."),
        ],
      },
      {
        heading: "2. Struktura ove izjave", blocks: [
          p("Kako biste se brzo snašli, ova politika privatnosti podeljena je na opšti deo (tačke 1–4), poseban deo koji detaljno opisuje četiri funkcionalna dela aplikacije, kao i podatke o lokaciji i push obaveštenjima (tačke 5–7), deo o poslovnim korisnicima, plaćanjima i recenzijama (tačke 8–12), deo o veb-sajtu, primaocima, prenosu u treće zemlje i periodu čuvanja (tačke 13–16), kao i deo o vašim pravima, bezbednosti podataka i ostalim napomenama (tačke 17–22). Spisak zvaničnih izvora nalazi se na kraju dokumenta."),
        ],
      },
      {
        heading: "3. Opšta načela obrade podataka", blocks: [
          p("Lične podatke obrađujemo poštujući načela GDPR, posebno zakonitost, poštenje, transparentnost, ograničenje svrhe, minimizaciju podataka, tačnost, ograničenje čuvanja, kao i integritet i poverljivost (član 5. GDPR). Svaka obrada ličnih podataka zasniva se na najmanje jednom od sledećih pravnih osnova:"),
          list([
            "član 6. stav 1. tačka a) GDPR – saglasnost lica na koje se podaci odnose, posebno za deljenje podataka o lokaciji, primanje push obaveštenja i opcionu funkciju prijatelja i rang-liste",
            "član 6. stav 1. tačka b) GDPR – neophodnost za izvršenje ugovora ili preduzimanje mera pre zaključenja ugovora, na primer pružanje funkcija aplikacije Radar, Pečat, Kartice i Home, kao i upravljanje pretplatama",
            "član 6. stav 1. tačka c) GDPR – ispunjenje pravne obaveze, na primer poreskih i privrednopravnih obaveza čuvanja",
            "član 6. stav 1. tačka f) GDPR – zaštita legitimnih interesa, na primer sprečavanje prevare i zloupotrebe, IT bezbednost i dalji razvoj platforme, ukoliko ti interesi ne prevagnu nad interesima ili osnovnim pravima lica na koje se podaci odnose",
          ]),
        ],
      },
      {
        heading: "4. Pregled: ko obrađuje šta?", blocks: [
          p("TapRadar povezuje dve grupe korisnika: krajnje korisnike koji putem besplatne aplikacije otkrivaju lokalne radnje i sakupljaju pečate, i poslovne korisnike koji putem plaćene kontrolne table upravljaju lojalnošću svojih kupaca. Obe grupe generišu podatke koji se delom obrađuju isključivo od strane TOY GmbH, a delom zajedno sa relevantnim ugovornim partnerom. Sledeće tačke 5–12 detaljno opisuju te tokove podataka, strukturirane prema četiri oblasti aplikacije, kao i prema podacima o lokaciji, push obaveštenjima, plaćanju i recenzijama."),
        ],
      },
      {
        heading: "5.1 Radar – otkrijte lokalne radnje", blocks: [
          p("U delu Radar prikazujemo vam na mapi partnerske radnje TapRadar u vašoj blizini. Prikaz možete suziti pomoću filtera (akcija, kupon, nagrada, najbolje ocenjeno, radijus od 500 metara) i kategorija poput kafića, restorana, frizerskog salona ili pijace. Za svaku partnersku radnju prikazuju se radno vreme, recenzije i oznaka paketa koja označava paket koji je ta radnja izabrala (Bronze, Gold ili Platinum); ova oznaka odnosi se isključivo na poslovnog korisnika i ne predstavlja vaš lični podatak."),
          p("Za pružanje ove funkcije obrađujemo vašu lokaciju (vidi tačku 6), podešavanja filtera i kategorija koje ste izabrali, kao i vaše interakcije sa prikazanim partnerskim radnjama, na primer otvaranje profila radnje. Ove podatke o interakciji koristimo za poboljšanje prikaza rezultata i povećanje relevantnosti prikazanih partnerskih radnji. Pravni osnov: član 6. stav 1. tačka a) GDPR za deljenje lokacije, član 6. stav 1. tačke b) i f) GDPR za podatke o filterima, kategorijama i interakciji."),
        ],
      },
      {
        heading: "5.2 Pečat – sakupljajte digitalne pečate", blocks: [
          p("U delu Pečat možete automatski dobiti digitalni pečat dodirom NFC tačke ili, alternativno, skeniranjem QR koda na kasi partnerske radnje. Vaš napredak, na primer 7 od 10 pečata, prikazuje se odmah; po dostizanju potrebnog broja pečata možete iskoristiti sačuvanu nagradu, na primer besplatnu kafu ili popust. Za svaki pečat dobijate i poene za svoj nivo u delu Home."),
          p("U tu svrhu obrađujemo vreme i mesto svakog pečatiranja, relevantnu partnersku radnju, trenutni broj pečata po pojedinačnoj kartici lojalnosti, iskorišćene nagrade, kao i pripadajući kod za korišćenje. Pravni osnov: član 6. stav 1. tačka b) GDPR. Kako bismo proverili da je pečatiranje zaista obavljeno na licu mesta, dodatno upoređujemo lokaciju vašeg uređaja; detalje pogledajte u tački 6."),
        ],
      },
      {
        heading: "5.3 Kartice – digitalni novčanik za postojeće korisničke kartice", blocks: [
          p("U delu Kartice možete digitalno sačuvati u svom TapRadar novčaniku već postojeće korisničke kartice trećih strana, na primer Billa, DM, H&M, Spar ili Hofer, skeniranjem ili ručnim unosom odgovarajućeg barkoda ili QR koda, a zatim ih pokazati na kasi. Navedeni brendovi služe samo kao primeri kartica koje sami čuvate; TapRadar nije povezan sa tim kompanijama i ne razmenjuje sa njima nikakve podatke."),
          callout("Važno", "Podaci sačuvani u novčaniku kartica potiču isključivo od vas. Ne proveravamo da li su unete kartice autentične, važeće ili se mogu pripisati relevantnoj trećoj strani, i ne dobijamo od tih kompanija nikakve podatke o bonusima ili nalozima. Za tačnost sačuvanih podataka o kartici, kao i njihovo prihvatanje na relevantnoj kasi, odgovorni ste isključivo vi."),
          p("Podaci o kartici i barkodu koje sačuvate čuvaju se u šifrovanom obliku i koriste se isključivo za prikaz u vašoj sopstvenoj aplikaciji. Pravni osnov: član 6. stav 1. tačka b) GDPR, jer nas dodavanjem kartice konkretno zadužujete za njeno čuvanje."),
        ],
      },
      {
        heading: "5.4 Home – profil i gamifikacija", blocks: [
          p("U delu Home nalazi se vaš profil sa sistemom od 20 nivoa, od „Početnika“ do „Šampiona“. Sakupljate poene za sakupljene pečate, date recenzije i pozvane prijatelje, pratite nedeljni cilj i koristite sistem serija u kojem sedam uzastopnih aktivnih dana pokreće bonus. Pored toga, možete pozivati prijatelje i upoređivati svoj napredak na rang-listi."),
          p("U tu svrhu obrađujemo vaš broj poena, vaš nivo, brojač serija, istoriju vaših ciljeva, kao i – ako aktivno koristite ovu funkciju – listu prijatelja koje ste pozvali ili sa kojima ste povezani, kao i njihove agregirane podatke o napretku koji su vidljivi vama, ukoliko su i ta lica pristala na uzajamnu vidljivost. Pravni osnov za osnovne funkcije (nivo, poeni, serija, nedeljni cilj): član 6. stav 1. tačka b) GDPR. Pravni osnov za opcionu funkciju prijatelja i rang-liste: član 6. stav 1. tačka a) GDPR, jer time podaci postaju vidljivi drugim licima. Nivoi, poeni i pozicije na rang-listi nemaju novčanu vrednost i nisu prenosivi."),
        ],
      },
      {
        heading: "6. Podaci o lokaciji i GPS detaljno", blocks: [
          p("TapRadar koristi podatke o lokaciji vašeg uređaja u dve odvojene svrhe: (a) funkciju Radar za prikaz partnerskih radnji u vašoj blizini i (b) proveru poseta kupaca, upoređivanjem lokacije vašeg uređaja u trenutku NFC ili QR pečatiranja sa sačuvanom lokacijom partnerske radnje, kako bi se sprečilo pečatiranje bez fizičkog prisustva."),
          p("U zavisnosti od operativnog sistema, možete detaljno kontrolisati deljenje lokacije, na primer opcijama „uvek“, „samo tokom korišćenja aplikacije“ ili „jednokratno“. Za osnovnu funkciju provere pečata dovoljno je deljenje tokom korišćenja aplikacije; trajno deljenje lokacije u pozadini potrebno je samo ako želite da koristite reklamu zasnovanu na blizini partnerske radnje sa Platinum paketom (vidi tačku 7.2). Pravni osnov: član 6. stav 1. tačka a) GDPR u vezi sa podešavanjima dozvola vašeg operativnog sistema, supsidijarno naš legitimni interes za sprečavanje prevare prema članu 6. stav 1. tačka f) GDPR. Deljenje lokacije možete u svakom trenutku opozvati putem podešavanja vašeg uređaja; pojedine funkcije, posebno provera pečata i reklama zasnovana na blizini, tada neće biti dostupne ili će biti dostupne samo ograničeno."),
        ],
      },
      {
        heading: "7.1 Servisna obaveštenja od TapRadar", blocks: [
          p("Servisne push poruke šaljemo na sopstvenu odgovornost, na primer u vezi sa bezbednošću naloga, bitnim promenama platforme ili potvrdom transakcija. Pravni osnov: član 6. stav 1. tačke b) i f) GDPR."),
        ],
      },
      {
        heading: "7.2 Marketinška i kampanjska push obaveštenja poslovnih korisnika", blocks: [
          p("Poslovni korisnici mogu putem kontrolne table slati kampanje i push obaveštenja krajnjim korisnicima koji su već kupci relevantne partnerske radnje (najmanje jedan sakupljen pečat) ili koji se – u okviru reklame zasnovane na blizini, dostupne isključivo u Platinum paketu – nalaze u njenoj blizini i za to su dali saglasnost za deljenje lokacije. Push obaveštenja su, u zavisnosti od paketa, ograničena na određenu učestalost (Gold: do 2 slikovne/PDF kampanje mesečno, bez push obaveštenja; Platinum: do 4 kampanje mesečno, uz push obaveštenja, aktiviranje na osnovu blizine, odbrojavanje kampanje i retargeting u roku od 30 dana od vaše poslednje posete)."),
          callout("Odgovornost za push kampanje", "Za sadržaj, zakonitost i usklađenost kampanje sa pravom nelojalne konkurencije odgovoran je relevantni poslovni korisnik. TOY GmbH obezbeđuje tehničku infrastrukturu za isporuku, poštovanje ograničenja učestalosti, kao i mogućnost odjave u svakom trenutku. U tom pogledu TOY GmbH i relevantni poslovni korisnik deluju kao zajednički rukovaoci u smislu člana 26. GDPR u pogledu pokretanja i isporuke push kampanja; osnovne crte ove podele odgovornosti sažete su u ovoj tački, a suština dogovora dostupna je licima na koje se podaci odnose na zahtev, na adresi support@tapradar.app."),
          p("Prijem marketinških i kampanjskih push obaveštenja možete u svakom trenutku potpuno ili po pojedinačnoj partnerskoj radnji deaktivirati putem podešavanja uređaja ili podešavanja u aplikaciji, a da vam se time ne onemogući pristup osnovnim funkcijama aplikacije. Pravni osnov: član 6. stav 1. tačka a) GDPR u vezi sa § 174 TKG 2021."),
        ],
      },
      {
        heading: "8. Registracija i korisnički nalog (krajnji korisnici)", blocks: [
          p("Prilikom registracije u aplikaciji TapRadar prikupljamo vašu e-adresu, lozinku (sačuvanu u šifrovanom obliku), izabrano prikazano ime, kao i opcione podatke o profilu. Svrha: uspostavljanje, upravljanje i obezbeđivanje vašeg korisničkog naloga. Pravni osnov: član 6. stav 1. tačka b) GDPR."),
        ],
      },
      {
        heading: "9. Registracija, nalog i podaci o firmi (poslovni korisnici)", blocks: [
          p("Za poslovne korisnike koji se pretplate na Bronze, Gold ili Platinum paket, dodatno obrađujemo: naziv firme, pravni oblik, adresu poslovnice, PIB, kontakt osobu (ime, e-pošta, broj telefona), radno vreme, kategoriju i opis radnje, kao i otpremljen slikovni i PDF reklamni materijal i sadržaj kampanja. Svrha: izvršenje ugovora, pružanje kontrolne table za poslovne korisnike, fakturisanje. Pravni osnov: član 6. stav 1. tačke b) i c) GDPR."),
        ],
      },
      {
        heading: "10. Sistem PIN-a za zaposlene", blocks: [
          p("Poslovni korisnici mogu, u zavisnosti od paketa, uspostaviti do 15 (Platinum), 5 (Gold), odnosno 1 (Bronze) pristupa za zaposlene sa pojedinačnim PIN kodom. U tu svrhu obrađujemo od poslovnog korisnika unete inicijale ili imena zaposlenih, kao i automatski vođen dnevnik aktivnosti pečatiranja i korišćenja obavljenih putem relevantnog PIN-a. Za zakonitost ove obrade prema relevantnim zaposlenima odgovoran je relevantni poslovni korisnik kao poslodavac; TOY GmbH u tom pogledu obezbeđuje samo tehničku infrastrukturu. Pravni osnov na strani TOY GmbH: član 6. stav 1. tačka b) GDPR, kao i član 6. stav 1. tačka f) GDPR."),
        ],
      },
      {
        heading: "11. Obrada plaćanja", blocks: [
          p("Obrada plaćanja za plaćene pakete odvija se preko našeg pružaoca usluga plaćanja Stripe. Mi sami ne čuvamo potpune podatke o platnim karticama; njih obrađuje isključivo Stripe. Od Stripe dobijamo potvrde o statusu plaćanja i iznosima faktura, kao i, po potrebi, poslednje četiri cifre korišćenog sredstva plaćanja, u svrhu dokumentacije i obračuna. Pravni osnov: član 6. stav 1. tačke b) i c) GDPR. Više informacija o obradi podataka od strane Stripe potražite u politici privatnosti Stripe na stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Recenzije", blocks: [
          p("Kada kao krajnji korisnik date recenziju o partnerskoj radnji, obrađujemo tekst recenzije, ocenu zvezdicama, vreme, kao i dokaz o proverenoj poseti (dokaz o pečatu). Recenzije se prikazuju partnerskoj radnji, kao i drugim korisnicima aplikacije, uz vaše prikazano ime. Pravni osnov: član 6. stav 1. tačka a) GDPR u vezi sa članom 6. stav 1. tačka f) GDPR. Ako se recenzija prijavi kao nezakonita, na primer jer je uvredljiva ili očigledno ne počiva na stvarnoj poseti, prijavu i predmetnu recenziju proveravamo u okviru našeg postupka prijave i provere, a rezultat saopštavamo i licu koje je podnelo prijavu i autoru recenzije."),
        ],
      },
      {
        heading: "13. Korišćenje veb-sajta, log fajlovi servera i kolačići", blocks: [
          p("Prilikom posete našem veb-sajtu www.tapradar.app, naš pružalac hostinga automatski obrađuje tehničke podatke o pristupu (IP adresa, datum i vreme pristupa, posećena stranica, korišćeni pregledač i operativni sistem, referentni URL) u log fajlovima servera. Svrha: obezbeđivanje neometanog rada i IT bezbednosti. Pravni osnov: član 6. stav 1. tačka f) GDPR. Veb-sajt koristi isključivo tehnički neophodne kolačiće potrebne za rad sajta; trenutno se ne koriste kolačići za praćenje ili marketing. Ako se to u budućnosti promeni, tražićemo vašu saglasnost putem baner obaveštenja o saglasnosti na kolačiće."),
        ],
      },
      {
        heading: "14. Primaoci i obrađivači", blocks: [
          p("Lične podatke prosleđujemo samo u meri neophodnoj za pružanje naših usluga ili kada smo zakonski obavezni. Naši obrađivači, odnosno primaoci, uključuju posebno:"),
          list([
            "pružaoce usluga hostinga i infrastrukture (rad servera i baza podataka)",
            "Stripe (obrada plaćanja)",
            "pružaoce usluga push obaveštenja (npr. Apple Push Notification Service, Firebase Cloud Messaging) za servisna i kampanjska push obaveštenja",
            "pružaoce usluga slanja e-pošte (transakciona i servisna komunikacija)",
            "IT pružaoce usluga u okviru održavanja i podrške",
          ]),
          p("Sa svim obrađivačima smo, u meri u kojoj je to zakonski potrebno, zaključili ugovore o obradi podataka u skladu sa članom 28. GDPR. Ukoliko partnerska radnja (poslovni korisnik) u okviru izvršenja ugovora uvidi vaše podatke o pečatima, posetama ili kampanjama na kontrolnoj tabli, ona u tom pogledu deluje kao samostalni rukovalac, odnosno, u slučaju push kampanja, kao zajednički rukovalac u skladu sa tačkom 7.2 ove izjave."),
        ],
      },
      {
        heading: "15. Prenos u treće zemlje", blocks: [
          p("Ukoliko pojedini od gore navedenih pružalaca usluga obrađuju podatke van Evropskog ekonomskog prostora (EEP), što se posebno može odnositi na određene cloud i push usluge američkih pružalaca, odgovarajućim garancijama obezbeđujemo adekvatan nivo zaštite podataka, posebno zaključenjem standardnih ugovornih klauzula EU u skladu sa članom 46. stav 2. tačka c) GDPR ili sertifikacijom primaoca u okviru okvira za zaštitu podataka EU–SAD (Data Privacy Framework), gde je to primenljivo."),
        ],
      },
      {
        heading: "16. Period čuvanja", blocks: [
          p("Lične podatke čuvamo samo onoliko dugo koliko je neophodno za relevantne svrhe:"),
          list([
            "Podaci o nalogu (krajnji korisnici i poslovni korisnici): za vreme trajanja korisničkog naloga, odnosno ugovornog odnosa; nakon brisanja naloga, podaci se u principu brišu u roku od 30 dana, ukoliko tome ne stoje na putu zakonske obaveze čuvanja",
            "Podaci o pečatima, nagradama i korišćenju: za vreme trajanja naloga kod relevantne partnerske radnje; nakon raskida ugovora sa poslovnim korisnikom, relevantne kartice lojalnosti označavaju se kao neaktivne i brišu se nakon 12 meseci",
            "Podaci o novčaniku kartica (tačka 5.3): do samostalnog brisanja od strane vas ili do brisanja vašeg naloga",
            "Podaci o gamifikaciji (nivo, poeni, serija, nedeljni cilj): za vreme trajanja vašeg naloga",
            "Povezivanja sa prijateljima i rang-lista: do uklanjanja od strane vas ili do brisanja vašeg naloga",
            "Podaci o fakturisanju i plaćanju: 7 godina u skladu sa § 132 BAO i § 212 UGB",
            "Dnevnici isporuke i interakcije push obaveštenja: 12 meseci",
            "Log fajlovi servera: po pravilu 30 do 90 dana",
            "Podaci o lokaciji za proveru pečata: bez trajnog čuvanja; obrada samo za vreme trajanja provere, nakon čega se svode na dnevnik događaja (vreme, rezultat)",
            "Komunikacija sa podrškom: 3 godine od okončanja predmeta, ukoliko zakon ne propisuje duže čuvanje",
          ]),
        ],
      },
      {
        heading: "17. Vaša prava kao lica na koje se podaci odnose", blocks: [
          p("U skladu sa zakonskim uslovima, pripadaju vam sledeća prava:"),
          list([
            "pravo na pristup (član 15. GDPR)",
            "pravo na ispravku (član 16. GDPR)",
            "pravo na brisanje (član 17. GDPR)",
            "pravo na ograničenje obrade (član 18. GDPR)",
            "pravo na prenosivost podataka (član 20. GDPR)",
            "pravo na prigovor na obradu zasnovanu na članu 6. stav 1. tačka f) GDPR (član 21. GDPR)",
            "pravo na opoziv date saglasnosti sa dejstvom ubuduće (član 7. stav 3. GDPR)",
          ]),
          p("Za ostvarivanje ovih prava dovoljna je neformalna poruka na support@tapradar.app. Vaš zahtev obradićemo bez odlaganja, a najkasnije u roku od mesec dana; taj rok se kod složenih ili brojnih zahteva može produžiti za dodatna dva meseca, o čemu ćemo vas obavestiti."),
        ],
      },
      {
        heading: "18. Bezbednost podataka", blocks: [
          p("Primenjujemo odgovarajuće tehničke i organizacione mere u skladu sa članom 32. GDPR kako bismo zaštitili vaše podatke od gubitka, zloupotrebe i neovlašćenog pristupa, uključujući šifrovanje prenosa podataka (TLS), šifrovanje posebno osetljivih sačuvanih podataka poput lozinki i podataka novčanika kartica, ograničenja pristupa prema principu najmanjih ovlašćenja, redovna bezbednosna ažuriranja, kao i evidentiranje bezbednosno relevantnih događaja. Naše bezbednosne mere neprekidno prilagođavamo trenutnom stanju tehnike."),
        ],
      },
      {
        heading: "19. Bez automatizovanog donošenja odluka, ograničeno profilisanje", blocks: [
          p("Nivoi, poeni i rang-liste unutar aplikacije zasnovani su na automatizovanim, ali potpuno transparentnim i razumljivim pravilima, bez pravnog ili slično značajnog dejstva u smislu člana 22. GDPR. U okviru reklame zasnovane na blizini (tačka 7.2) odvija se ograničeno profilisanje zasnovano na lokaciji, kako bi vam se prikazala obaveštenja od partnerskih radnji u vašoj blizini; ova obrada zasniva se isključivo na vašoj saglasnosti i nema pravno ili slično značajno dejstvo u smislu člana 22. GDPR. Automatizovano donošenje odluka sa pravnim dejstvom prema korisnicima ne odvija se."),
        ],
      },
      {
        heading: "20. Zaštita maloletnika", blocks: [
          p("TapRadar nije ciljano usmeren na decu mlađu od 14 godina. Ukoliko utvrdimo da su bez saglasnosti zakonskog zastupnika prikupljeni lični podaci deteta mlađeg od minimalnog uzrasta koji je relevantan prema nacionalnom pravu, te ćemo podatke bez odlaganja obrisati."),
        ],
      },
      {
        heading: "21. Izmene ove politike privatnosti", blocks: [
          p("Zadržavamo pravo da izmenimo ovu politiku privatnosti kako bismo je prilagodili izmenjenoj pravnoj situaciji ili novim funkcijama platforme. Uvek važi aktuelna verzija objavljena na www.tapradar.app/datenschutz u trenutku vaše posete, odnosno korišćenja. U slučaju bitnih izmena zasnovanih na izmenjenom pravnom osnovu, poput prvobitne saglasnosti, tu saglasnost ćemo ponovo pribaviti."),
        ],
      },
      {
        heading: "22. Kontakt i pravo na žalbu", blocks: [
          p("Za pitanja u vezi sa zaštitom podataka možete nas kontaktirati na support@tapradar.app. Bez uticaja na drugi upravni ili sudski pravni lek, imate pravo da podnesete žalbu nadzornom telu, posebno telu nadležnom za Austriju:"),
          list(["Austrijsko telo za zaštitu podataka (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Beč, Austrija", "Veb-sajt: www.dsb.gv.at"]),
          callout("Višejezičnost", "Veb-sajt austrijskog Tela za zaštitu podataka trenutno je dostupan na nemačkom, a delimično i na engleskom jeziku. Ukoliko ni nemački ni engleski nisu vaš preferirani jezik, uvek nam se možete neformalno obratiti na support@tapradar.app; pomoći ćemo vam, na jezicima dostupnim na ovom veb-sajtu, u kontaktu sa nadzornim telom."),
        ],
      },
    ],
    sourcesHeading: "Spisak izvora",
    sourcesIntro: "Zvanični izvori EU i Austrije na kojima se zasniva ova politika privatnosti:",
    sources: [
      { label: "Opšta uredba o zaštiti podataka (GDPR), Uredba (EU) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Austrijsko telo za zaštitu podataka", url: "https://www.dsb.gv.at/" },
    ],
  },
  bs: {
    title: "Politika privatnosti",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Ažurirano: 9. august 2026 · Verzija 2026-08-09.2 (detaljna verzija)",
    intro: [
      p("Zaštita vaših ličnih podataka je od centralnog značaja za TOY GmbH. Ova politika privatnosti vas sveobuhvatno i detaljno informiše o tome koje lične podatke prikupljamo u vezi sa korištenjem aplikacije TapRadar sa njena četiri funkcionalna dijela Radar, Pečat, Kartice i Home, web stranice TapRadar, kao i kontrolne table TapRadar za poslovne korisnike (zajedno „TapRadar“ ili „Platforma“), u koje svrhe i na kojoj pravnoj osnovi ih obrađujemo, kome podatke prosljeđujemo, koliko dugo ih čuvamo i koja prava vam pripadaju kao licu na koje se podaci odnose. Ova izjava vrijedi i za krajnje korisnike koji koriste besplatnu aplikaciju TapRadar, kao i za poslovne korisnike koji su se pretplatili na neki od plaćenih paketa TapRadar Bronze, Gold ili Platinum. Zasniva se na Uredbi (EU) 2016/679 (Opća uredba o zaštiti podataka, „GDPR“), kao i na relevantnim austrijskim provedbenim propisima, posebno Zakonu o zaštiti podataka (DSG) i Zakonu o telekomunikacijama 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Voditelj obrade", blocks: [
          p("Voditelj obrade u smislu člana 4. tačke 7. GDPR je:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austrija", "PDV broj: ATU78882167", "E-pošta: support@tapradar.app", "Web stranica: www.tapradar.app"]),
          p("Interni službenik za zaštitu podataka nije imenovan, jer nisu ispunjeni uvjeti iz člana 37. GDPR. Pitanja u vezi sa zaštitom podataka pošaljite na gore navedenu e-adresu; obradit ćemo ih bez odgode, a najkasnije u roku od mjesec dana od prijema."),
        ],
      },
      {
        heading: "2. Struktura ove izjave", blocks: [
          p("Kako biste se brzo snašli, ova politika privatnosti podijeljena je na opći dio (tačke 1–4), poseban dio koji detaljno opisuje četiri funkcionalna dijela aplikacije, kao i podatke o lokaciji i push obavještenjima (tačke 5–7), dio o poslovnim korisnicima, plaćanjima i recenzijama (tačke 8–12), dio o web stranici, primaocima, prijenosu u treće zemlje i periodu čuvanja (tačke 13–16), kao i dio o vašim pravima, sigurnosti podataka i ostalim napomenama (tačke 17–22). Popis zvaničnih izvora nalazi se na kraju dokumenta."),
        ],
      },
      {
        heading: "3. Opća načela obrade podataka", blocks: [
          p("Lične podatke obrađujemo poštujući načela GDPR, posebno zakonitost, poštenje, transparentnost, ograničenje svrhe, minimizaciju podataka, tačnost, ograničenje čuvanja, kao i integritet i povjerljivost (član 5. GDPR). Svaka obrada ličnih podataka zasniva se na najmanje jednoj od sljedećih pravnih osnova:"),
          list([
            "član 6. stav 1. tačka a) GDPR – saglasnost lica na koje se podaci odnose, posebno za dijeljenje podataka o lokaciji, primanje push obavještenja i opcionu funkciju prijatelja i rang-liste",
            "član 6. stav 1. tačka b) GDPR – neophodnost za izvršenje ugovora ili poduzimanje mjera prije zaključenja ugovora, na primjer pružanje funkcija aplikacije Radar, Pečat, Kartice i Home, kao i upravljanje pretplatama",
            "član 6. stav 1. tačka c) GDPR – ispunjenje pravne obaveze, na primjer poreznih i privrednopravnih obaveza čuvanja",
            "član 6. stav 1. tačka f) GDPR – zaštita legitimnih interesa, na primjer sprječavanje prevare i zloupotrebe, IT sigurnost i daljnji razvoj platforme, ukoliko ti interesi ne prevagnu nad interesima ili osnovnim pravima lica na koje se podaci odnose",
          ]),
        ],
      },
      {
        heading: "4. Pregled: ko obrađuje šta?", blocks: [
          p("TapRadar povezuje dvije grupe korisnika: krajnje korisnike koji putem besplatne aplikacije otkrivaju lokalne firme i sakupljaju pečate, i poslovne korisnike koji putem plaćene kontrolne table upravljaju lojalnošću svojih kupaca. Obje grupe generiraju podatke koji se dijelom obrađuju isključivo od strane TOY GmbH, a dijelom zajedno sa relevantnim ugovornim partnerom. Sljedeće tačke 5–12 detaljno opisuju te tokove podataka, strukturirane prema četiri oblasti aplikacije, kao i prema podacima o lokaciji, push obavještenjima, plaćanju i recenzijama."),
        ],
      },
      {
        heading: "5.1 Radar – otkrijte lokalne firme", blocks: [
          p("U dijelu Radar prikazujemo vam na mapi partnerske firme TapRadar u vašoj blizini. Prikaz možete suziti pomoću filtera (akcija, kupon, nagrada, najbolje ocijenjeno, radijus od 500 metara) i kategorija poput kafića, restorana, frizerskog salona ili pijace. Za svaku partnersku firmu prikazuju se radno vrijeme, recenzije i oznaka paketa koja označava paket koji je ta firma izabrala (Bronze, Gold ili Platinum); ova oznaka odnosi se isključivo na poslovnog korisnika i ne predstavlja vaš lični podatak."),
          p("Za pružanje ove funkcije obrađujemo vašu lokaciju (vidi tačku 6), podešavanja filtera i kategorija koje ste izabrali, kao i vaše interakcije sa prikazanim partnerskim firmama, na primjer otvaranje profila firme. Ove podatke o interakciji koristimo za poboljšanje prikaza rezultata i povećanje relevantnosti prikazanih partnerskih firmi. Pravna osnova: član 6. stav 1. tačka a) GDPR za dijeljenje lokacije, član 6. stav 1. tačke b) i f) GDPR za podatke o filterima, kategorijama i interakciji."),
        ],
      },
      {
        heading: "5.2 Pečat – sakupljajte digitalne pečate", blocks: [
          p("U dijelu Pečat možete automatski dobiti digitalni pečat dodirom NFC tačke ili, alternativno, skeniranjem QR koda na kasi partnerske firme. Vaš napredak, na primjer 7 od 10 pečata, prikazuje se odmah; po dostizanju potrebnog broja pečata možete iskoristiti sačuvanu nagradu, na primjer besplatnu kafu ili popust. Za svaki pečat dobijate i bodove za svoj nivo u dijelu Home."),
          p("U tu svrhu obrađujemo vrijeme i mjesto svakog pečatiranja, relevantnu partnersku firmu, trenutni broj pečata po pojedinačnoj kartici lojalnosti, iskorištene nagrade, kao i pripadajući kod za korištenje. Pravna osnova: član 6. stav 1. tačka b) GDPR. Kako bismo provjerili da je pečatiranje zaista obavljeno na licu mjesta, dodatno upoređujemo lokaciju vašeg uređaja; detalje pogledajte u tački 6."),
        ],
      },
      {
        heading: "5.3 Kartice – digitalni novčanik za postojeće korisničke kartice", blocks: [
          p("U dijelu Kartice možete digitalno sačuvati u svom TapRadar novčaniku već postojeće korisničke kartice trećih strana, na primjer Billa, DM, H&M, Spar ili Hofer, skeniranjem ili ručnim unosom odgovarajućeg barkoda ili QR koda, a zatim ih pokazati na kasi. Navedeni brendovi služe samo kao primjeri kartica koje sami čuvate; TapRadar nije povezan sa tim kompanijama i ne razmjenjuje sa njima nikakve podatke."),
          callout("Važno", "Podaci sačuvani u novčaniku kartica potiču isključivo od vas. Ne provjeravamo da li su unesene kartice autentične, važeće ili se mogu pripisati relevantnoj trećoj strani, i ne dobijamo od tih kompanija nikakve podatke o bonusima ili nalozima. Za tačnost sačuvanih podataka o kartici, kao i njihovo prihvatanje na relevantnoj kasi, odgovorni ste isključivo vi."),
          p("Podaci o kartici i barkodu koje sačuvate čuvaju se u šifriranom obliku i koriste se isključivo za prikaz u vašoj vlastitoj aplikaciji. Pravna osnova: član 6. stav 1. tačka b) GDPR, jer nas dodavanjem kartice konkretno zadužujete za njeno čuvanje."),
        ],
      },
      {
        heading: "5.4 Home – profil i gamifikacija", blocks: [
          p("U dijelu Home nalazi se vaš profil sa sistemom od 20 nivoa, od „Početnika“ do „Šampiona“. Sakupljate bodove za sakupljene pečate, date recenzije i pozvane prijatelje, pratite sedmični cilj i koristite sistem serija u kojem sedam uzastopnih aktivnih dana pokreće bonus. Pored toga, možete pozivati prijatelje i upoređivati svoj napredak na rang-listi."),
          p("U tu svrhu obrađujemo vaš broj bodova, vaš nivo, brojač serija, historiju vaših ciljeva, kao i – ako aktivno koristite ovu funkciju – listu prijatelja koje ste pozvali ili sa kojima ste povezani, kao i njihove agregirane podatke o napretku koji su vidljivi vama, ukoliko su i ta lica pristala na uzajamnu vidljivost. Pravna osnova za osnovne funkcije (nivo, bodovi, serija, sedmični cilj): član 6. stav 1. tačka b) GDPR. Pravna osnova za opcionu funkciju prijatelja i rang-liste: član 6. stav 1. tačka a) GDPR, jer time podaci postaju vidljivi drugim licima. Nivoi, bodovi i pozicije na rang-listi nemaju novčanu vrijednost i nisu prenosivi."),
        ],
      },
      {
        heading: "6. Podaci o lokaciji i GPS detaljno", blocks: [
          p("TapRadar koristi podatke o lokaciji vašeg uređaja u dvije odvojene svrhe: (a) funkciju Radar za prikaz partnerskih firmi u vašoj blizini i (b) provjeru posjeta kupaca, upoređivanjem lokacije vašeg uređaja u trenutku NFC ili QR pečatiranja sa sačuvanom lokacijom partnerske firme, kako bi se spriječilo pečatiranje bez fizičkog prisustva."),
          p("U zavisnosti od operativnog sistema, možete detaljno kontrolisati dijeljenje lokacije, na primjer opcijama „uvijek“, „samo tokom korištenja aplikacije“ ili „jednokratno“. Za osnovnu funkciju provjere pečata dovoljno je dijeljenje tokom korištenja aplikacije; trajno dijeljenje lokacije u pozadini potrebno je samo ako želite koristiti reklamu zasnovanu na blizini partnerske firme sa Platinum paketom (vidi tačku 7.2). Pravna osnova: član 6. stav 1. tačka a) GDPR u vezi sa podešavanjima dozvola vašeg operativnog sistema, supsidijarno naš legitimni interes za sprječavanje prevare prema članu 6. stav 1. tačka f) GDPR. Dijeljenje lokacije možete u svakom trenutku opozvati putem podešavanja vašeg uređaja; pojedine funkcije, posebno provjera pečata i reklama zasnovana na blizini, tada neće biti dostupne ili će biti dostupne samo ograničeno."),
        ],
      },
      {
        heading: "7.1 Servisna obavještenja od TapRadar", blocks: [
          p("Servisne push poruke šaljemo na vlastitu odgovornost, na primjer u vezi sa sigurnošću naloga, bitnim promjenama platforme ili potvrdom transakcija. Pravna osnova: član 6. stav 1. tačke b) i f) GDPR."),
        ],
      },
      {
        heading: "7.2 Marketinška i kampanjska push obavještenja poslovnih korisnika", blocks: [
          p("Poslovni korisnici mogu putem kontrolne table slati kampanje i push obavještenja krajnjim korisnicima koji su već kupci relevantne partnerske firme (najmanje jedan sakupljen pečat) ili koji se – u okviru reklame zasnovane na blizini, dostupne isključivo u Platinum paketu – nalaze u njenoj blizini i za to su dali saglasnost za dijeljenje lokacije. Push obavještenja su, u zavisnosti od paketa, ograničena na određenu učestalost (Gold: do 2 slikovne/PDF kampanje mjesečno, bez push obavještenja; Platinum: do 4 kampanje mjesečno, uz push obavještenja, aktiviranje na osnovu blizine, odbrojavanje kampanje i retargeting u roku od 30 dana od vaše posljednje posjete)."),
          callout("Odgovornost za push kampanje", "Za sadržaj, zakonitost i usklađenost kampanje sa pravom nelojalne konkurencije odgovoran je relevantni poslovni korisnik. TOY GmbH osigurava tehničku infrastrukturu za isporuku, poštivanje ograničenja učestalosti, kao i mogućnost odjave u svakom trenutku. U tom pogledu TOY GmbH i relevantni poslovni korisnik djeluju kao zajednički voditelji obrade u smislu člana 26. GDPR u pogledu pokretanja i isporuke push kampanja; osnovne crte ove podjele odgovornosti sažete su u ovoj tački, a suština dogovora dostupna je licima na koje se podaci odnose na zahtjev, na adresi support@tapradar.app."),
          p("Prijem marketinških i kampanjskih push obavještenja možete u svakom trenutku potpuno ili po pojedinačnoj partnerskoj firmi deaktivirati putem podešavanja uređaja ili podešavanja u aplikaciji, a da vam se time ne onemogući pristup osnovnim funkcijama aplikacije. Pravna osnova: član 6. stav 1. tačka a) GDPR u vezi sa § 174 TKG 2021."),
        ],
      },
      {
        heading: "8. Registracija i korisnički nalog (krajnji korisnici)", blocks: [
          p("Prilikom registracije u aplikaciji TapRadar prikupljamo vašu e-adresu, lozinku (sačuvanu u šifriranom obliku), izabrano prikazano ime, kao i opcione podatke o profilu. Svrha: uspostavljanje, upravljanje i osiguranje vašeg korisničkog naloga. Pravna osnova: član 6. stav 1. tačka b) GDPR."),
        ],
      },
      {
        heading: "9. Registracija, nalog i podaci o firmi (poslovni korisnici)", blocks: [
          p("Za poslovne korisnike koji se pretplate na Bronze, Gold ili Platinum paket, dodatno obrađujemo: naziv firme, pravni oblik, adresu poslovnice, PDV broj, kontakt osobu (ime, e-pošta, broj telefona), radno vrijeme, kategoriju i opis firme, kao i otpremljen slikovni i PDF reklamni materijal i sadržaj kampanja. Svrha: izvršenje ugovora, pružanje kontrolne table za poslovne korisnike, fakturisanje. Pravna osnova: član 6. stav 1. tačke b) i c) GDPR."),
        ],
      },
      {
        heading: "10. Sistem PIN-a za zaposlene", blocks: [
          p("Poslovni korisnici mogu, u zavisnosti od paketa, uspostaviti do 15 (Platinum), 5 (Gold), odnosno 1 (Bronze) pristupa za zaposlene sa pojedinačnim PIN kodom. U tu svrhu obrađujemo od poslovnog korisnika unesene inicijale ili imena zaposlenih, kao i automatski vođen dnevnik aktivnosti pečatiranja i korištenja obavljenih putem relevantnog PIN-a. Za zakonitost ove obrade prema relevantnim zaposlenima odgovoran je relevantni poslovni korisnik kao poslodavac; TOY GmbH u tom pogledu osigurava samo tehničku infrastrukturu. Pravna osnova na strani TOY GmbH: član 6. stav 1. tačka b) GDPR, kao i član 6. stav 1. tačka f) GDPR."),
        ],
      },
      {
        heading: "11. Obrada plaćanja", blocks: [
          p("Obrada plaćanja za plaćene pakete odvija se preko našeg pružaoca usluga plaćanja Stripe. Mi sami ne čuvamo potpune podatke o platnim karticama; njih obrađuje isključivo Stripe. Od Stripe dobijamo potvrde o statusu plaćanja i iznosima faktura, kao i, po potrebi, posljednje četiri cifre korištenog sredstva plaćanja, u svrhu dokumentacije i obračuna. Pravna osnova: član 6. stav 1. tačke b) i c) GDPR. Više informacija o obradi podataka od strane Stripe potražite u politici privatnosti Stripe na stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Recenzije", blocks: [
          p("Kada kao krajnji korisnik date recenziju o partnerskoj firmi, obrađujemo tekst recenzije, ocjenu zvjezdicama, vrijeme, kao i dokaz o provjerenoj posjeti (dokaz o pečatu). Recenzije se prikazuju partnerskoj firmi, kao i drugim korisnicima aplikacije, uz vaše prikazano ime. Pravna osnova: član 6. stav 1. tačka a) GDPR u vezi sa članom 6. stav 1. tačka f) GDPR. Ako se recenzija prijavi kao nezakonita, na primjer jer je uvredljiva ili očigledno ne počiva na stvarnoj posjeti, prijavu i predmetnu recenziju provjeravamo u okviru našeg postupka prijave i provjere, a rezultat saopćavamo i licu koje je podnijelo prijavu i autoru recenzije."),
        ],
      },
      {
        heading: "13. Korištenje web stranice, log fajlovi servera i kolačići", blocks: [
          p("Prilikom posjete našoj web stranici www.tapradar.app, naš pružalac hostinga automatski obrađuje tehničke podatke o pristupu (IP adresa, datum i vrijeme pristupa, posjećena stranica, korišteni preglednik i operativni sistem, referentni URL) u log fajlovima servera. Svrha: osiguravanje neometanog rada i IT sigurnosti. Pravna osnova: član 6. stav 1. tačka f) GDPR. Web stranica koristi isključivo tehnički neophodne kolačiće potrebne za rad stranice; trenutno se ne koriste kolačići za praćenje ili marketing. Ako se to u budućnosti promijeni, tražit ćemo vašu saglasnost putem baner obavještenja o saglasnosti na kolačiće."),
        ],
      },
      {
        heading: "14. Primaoci i obrađivači", blocks: [
          p("Lične podatke prosljeđujemo samo u mjeri neophodnoj za pružanje naših usluga ili kada smo zakonski obavezni. Naši obrađivači, odnosno primaoci, uključuju posebno:"),
          list([
            "pružaoce usluga hostinga i infrastrukture (rad servera i baza podataka)",
            "Stripe (obrada plaćanja)",
            "pružaoce usluga push obavještenja (npr. Apple Push Notification Service, Firebase Cloud Messaging) za servisna i kampanjska push obavještenja",
            "pružaoce usluga slanja e-pošte (transakcijska i servisna komunikacija)",
            "IT pružaoce usluga u okviru održavanja i podrške",
          ]),
          p("Sa svim obrađivačima smo, u mjeri u kojoj je to zakonski potrebno, zaključili ugovore o obradi podataka u skladu sa članom 28. GDPR. Ukoliko partnerska firma (poslovni korisnik) u okviru izvršenja ugovora uvidi vaše podatke o pečatima, posjetama ili kampanjama na kontrolnoj tabli, ona u tom pogledu djeluje kao samostalni voditelj obrade, odnosno, u slučaju push kampanja, kao zajednički voditelj obrade u skladu sa tačkom 7.2 ove izjave."),
        ],
      },
      {
        heading: "15. Prijenos u treće zemlje", blocks: [
          p("Ukoliko pojedini od gore navedenih pružalaca usluga obrađuju podatke van Evropskog ekonomskog prostora (EEP), što se posebno može odnositi na određene cloud i push usluge američkih pružalaca, odgovarajućim garancijama osiguravamo adekvatan nivo zaštite podataka, posebno zaključenjem standardnih ugovornih klauzula EU u skladu sa članom 46. stav 2. tačka c) GDPR ili certifikacijom primaoca u okviru okvira za zaštitu podataka EU–SAD (Data Privacy Framework), gdje je to primjenjivo."),
        ],
      },
      {
        heading: "16. Period čuvanja", blocks: [
          p("Lične podatke čuvamo samo onoliko dugo koliko je neophodno za relevantne svrhe:"),
          list([
            "Podaci o nalogu (krajnji korisnici i poslovni korisnici): za vrijeme trajanja korisničkog naloga, odnosno ugovornog odnosa; nakon brisanja naloga, podaci se u principu brišu u roku od 30 dana, ukoliko tome ne stoje na putu zakonske obaveze čuvanja",
            "Podaci o pečatima, nagradama i korištenju: za vrijeme trajanja naloga kod relevantne partnerske firme; nakon raskida ugovora sa poslovnim korisnikom, relevantne kartice lojalnosti označavaju se kao neaktivne i brišu se nakon 12 mjeseci",
            "Podaci o novčaniku kartica (tačka 5.3): do samostalnog brisanja od strane vas ili do brisanja vašeg naloga",
            "Podaci o gamifikaciji (nivo, bodovi, serija, sedmični cilj): za vrijeme trajanja vašeg naloga",
            "Povezivanja sa prijateljima i rang-lista: do uklanjanja od strane vas ili do brisanja vašeg naloga",
            "Podaci o fakturisanju i plaćanju: 7 godina u skladu sa § 132 BAO i § 212 UGB",
            "Dnevnici isporuke i interakcije push obavještenja: 12 mjeseci",
            "Log fajlovi servera: po pravilu 30 do 90 dana",
            "Podaci o lokaciji za provjeru pečata: bez trajnog čuvanja; obrada samo za vrijeme trajanja provjere, nakon čega se svode na dnevnik događaja (vrijeme, rezultat)",
            "Komunikacija sa podrškom: 3 godine od okončanja predmeta, ukoliko zakon ne propisuje duže čuvanje",
          ]),
        ],
      },
      {
        heading: "17. Vaša prava kao lica na koje se podaci odnose", blocks: [
          p("U skladu sa zakonskim uvjetima, pripadaju vam sljedeća prava:"),
          list([
            "pravo na pristup (član 15. GDPR)",
            "pravo na ispravku (član 16. GDPR)",
            "pravo na brisanje (član 17. GDPR)",
            "pravo na ograničenje obrade (član 18. GDPR)",
            "pravo na prenosivost podataka (član 20. GDPR)",
            "pravo na prigovor na obradu zasnovanu na članu 6. stav 1. tačka f) GDPR (član 21. GDPR)",
            "pravo na opoziv date saglasnosti sa dejstvom ubuduće (član 7. stav 3. GDPR)",
          ]),
          p("Za ostvarivanje ovih prava dovoljna je neformalna poruka na support@tapradar.app. Vaš zahtjev obradit ćemo bez odgode, a najkasnije u roku od mjesec dana; taj rok se kod složenih ili brojnih zahtjeva može produžiti za dodatna dva mjeseca, o čemu ćemo vas obavijestiti."),
        ],
      },
      {
        heading: "18. Sigurnost podataka", blocks: [
          p("Primjenjujemo odgovarajuće tehničke i organizacione mjere u skladu sa članom 32. GDPR kako bismo zaštitili vaše podatke od gubitka, zloupotrebe i neovlaštenog pristupa, uključujući šifriranje prijenosa podataka (TLS), šifriranje posebno osjetljivih sačuvanih podataka poput lozinki i podataka novčanika kartica, ograničenja pristupa prema principu najmanjih ovlaštenja, redovna sigurnosna ažuriranja, kao i evidentiranje sigurnosno relevantnih događaja. Naše sigurnosne mjere neprekidno prilagođavamo trenutnom stanju tehnike."),
        ],
      },
      {
        heading: "19. Bez automatiziranog donošenja odluka, ograničeno profiliranje", blocks: [
          p("Nivoi, bodovi i rang-liste unutar aplikacije zasnovani su na automatiziranim, ali potpuno transparentnim i razumljivim pravilima, bez pravnog ili slično značajnog dejstva u smislu člana 22. GDPR. U okviru reklame zasnovane na blizini (tačka 7.2) odvija se ograničeno profiliranje zasnovano na lokaciji, kako bi vam se prikazala obavještenja od partnerskih firmi u vašoj blizini; ova obrada zasniva se isključivo na vašoj saglasnosti i nema pravno ili slično značajno dejstvo u smislu člana 22. GDPR. Automatizirano donošenje odluka sa pravnim dejstvom prema korisnicima ne odvija se."),
        ],
      },
      {
        heading: "20. Zaštita maloljetnika", blocks: [
          p("TapRadar nije ciljano usmjeren na djecu mlađu od 14 godina. Ukoliko utvrdimo da su bez saglasnosti zakonskog zastupnika prikupljeni lični podaci djeteta mlađeg od minimalne dobi koja je relevantna prema nacionalnom pravu, te ćemo podatke bez odgode obrisati."),
        ],
      },
      {
        heading: "21. Izmjene ove politike privatnosti", blocks: [
          p("Zadržavamo pravo da izmijenimo ovu politiku privatnosti kako bismo je prilagodili izmijenjenoj pravnoj situaciji ili novim funkcijama platforme. Uvijek vrijedi aktuelna verzija objavljena na www.tapradar.app/datenschutz u trenutku vaše posjete, odnosno korištenja. U slučaju bitnih izmjena zasnovanih na izmijenjenoj pravnoj osnovi, poput prvobitne saglasnosti, tu saglasnost ćemo ponovo pribaviti."),
        ],
      },
      {
        heading: "22. Kontakt i pravo na žalbu", blocks: [
          p("Za pitanja u vezi sa zaštitom podataka možete nas kontaktirati na support@tapradar.app. Bez uticaja na drugi upravni ili sudski pravni lijek, imate pravo da podnesete žalbu nadzornom tijelu, posebno tijelu nadležnom za Austriju:"),
          list(["Austrijsko tijelo za zaštitu podataka (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Beč, Austrija", "Web stranica: www.dsb.gv.at"]),
          callout("Višejezičnost", "Web stranica austrijskog Tijela za zaštitu podataka trenutno je dostupna na njemačkom, a djelimično i na engleskom jeziku. Ukoliko ni njemački ni engleski nisu vaš preferirani jezik, uvijek nam se možete neformalno obratiti na support@tapradar.app; pomoći ćemo vam, na jezicima dostupnim na ovoj web stranici, u kontaktu sa nadzornim tijelom."),
        ],
      },
    ],
    sourcesHeading: "Popis izvora",
    sourcesIntro: "Zvanični izvori EU i Austrije na kojima se zasniva ova politika privatnosti:",
    sources: [
      { label: "Opća uredba o zaštiti podataka (GDPR), Uredba (EU) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Austrijsko tijelo za zaštitu podataka", url: "https://www.dsb.gv.at/" },
    ],
  },
  hr: {
    title: "Politika privatnosti",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Ažurirano: 9. kolovoza 2026. · Verzija 2026-08-09.2 (detaljna verzija)",
    intro: [
      p("Zaštita vaših osobnih podataka od središnje je važnosti za TOY GmbH. Ova politika privatnosti sveobuhvatno vas i detaljno informira o tome koje osobne podatke prikupljamo u vezi s korištenjem aplikacije TapRadar s njezina četiri funkcionalna dijela Radar, Pečat, Kartice i Home, web-stranice TapRadar te nadzorne ploče TapRadar za poslovne korisnike (zajedno „TapRadar” ili „Platforma”), u koje svrhe i na kojoj pravnoj osnovi ih obrađujemo, kome podatke prosljeđujemo, koliko dugo ih čuvamo te koja vam prava pripadaju kao ispitaniku. Ova izjava vrijedi i za krajnje korisnike koji koriste besplatnu aplikaciju TapRadar te za poslovne korisnike koji su se pretplatili na neki od plaćenih paketa TapRadar Bronze, Gold ili Platinum. Temelji se na Uredbi (EU) 2016/679 (Opća uredba o zaštiti podataka, „GDPR”) te relevantnim austrijskim provedbenim propisima, posebice Zakonu o zaštiti podataka (DSG) i Zakonu o telekomunikacijama 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Voditelj obrade", blocks: [
          p("Voditelj obrade u smislu čl. 4. t. 7. GDPR-a je:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austrija", "OIB/PDV broj: ATU78882167", "E-pošta: support@tapradar.app", "Web-stranica: www.tapradar.app"]),
          p("Interni službenik za zaštitu podataka nije imenovan jer nisu ispunjeni uvjeti iz čl. 37. GDPR-a. Pitanja vezana uz zaštitu podataka pošaljite na gore navedenu e-adresu; obradit ćemo ih bez odgode, a najkasnije u roku od mjesec dana od zaprimanja."),
        ],
      },
      {
        heading: "2. Struktura ove izjave", blocks: [
          p("Kako biste se brzo snašli, ova politika privatnosti podijeljena je na opći dio (točke 1. do 4.), poseban dio koji detaljno opisuje četiri funkcionalna dijela aplikacije te podatke o lokaciji i push obavijestima (točke 5. do 7.), dio o poslovnim korisnicima, plaćanjima i recenzijama (točke 8. do 12.), dio o web-stranici, primateljima, prijenosu u treće zemlje i razdoblju čuvanja (točke 13. do 16.) te dio o vašim pravima, sigurnosti podataka i ostalim napomenama (točke 17. do 22.). Popis službenih izvora nalazi se na kraju dokumenta."),
        ],
      },
      {
        heading: "3. Opća načela obrade podataka", blocks: [
          p("Osobne podatke obrađujemo poštujući načela GDPR-a, posebice zakonitost, poštenost, transparentnost, ograničavanje svrhe, smanjenje količine podataka, točnost, ograničenje pohrane te cjelovitost i povjerljivost (čl. 5. GDPR-a). Svaka obrada osobnih podataka temelji se na barem jednoj od sljedećih pravnih osnova:"),
          list([
            "čl. 6. st. 1. t. a) GDPR-a – privola ispitanika, posebice za dijeljenje podataka o lokaciji, primanje push obavijesti te opcionalnu funkciju prijatelja i ljestvice",
            "čl. 6. st. 1. t. b) GDPR-a – nužnost za izvršenje ugovora ili poduzimanje mjera prije sklapanja ugovora, primjerice pružanje funkcija aplikacije Radar, Pečat, Kartice i Home te upravljanje pretplatama",
            "čl. 6. st. 1. t. c) GDPR-a – ispunjenje pravne obveze, primjerice poreznih i trgovačkopravnih obveza čuvanja",
            "čl. 6. st. 1. t. f) GDPR-a – zaštita legitimnih interesa, primjerice sprječavanje prijevare i zlouporabe, IT sigurnost i daljnji razvoj platforme, ako ti interesi ne prevladaju nad interesima ili temeljnim pravima ispitanika",
          ]),
        ],
      },
      {
        heading: "4. Pregled: tko obrađuje što?", blocks: [
          p("TapRadar povezuje dvije skupine korisnika: krajnje korisnike koji putem besplatne aplikacije otkrivaju lokalne poslovne subjekte i sakupljaju pečate te poslovne korisnike koji putem plaćene nadzorne ploče upravljaju lojalnošću svojih kupaca. Obje skupine generiraju podatke koji se dijelom obrađuju isključivo od strane TOY GmbH, a dijelom zajedno s relevantnim ugovornim partnerom. Sljedeće točke 5. do 12. detaljno opisuju te tokove podataka, strukturirane prema četiri područja aplikacije te prema podacima o lokaciji, push obavijestima, plaćanju i recenzijama."),
        ],
      },
      {
        heading: "5.1 Radar – otkrijte lokalne poslovne subjekte", blocks: [
          p("U dijelu Radar prikazujemo vam na karti partnerske poslovne subjekte TapRadar u vašoj blizini. Prikaz možete suziti pomoću filtara (akcija, kupon, nagrada, najbolje ocijenjeno, radijus od 500 metara) i kategorija poput kafića, restorana, frizerskog salona ili tržnice. Za svaki partnerski poslovni subjekt prikazuju se radno vrijeme, recenzije i oznaka paketa koja označava paket koji je taj subjekt odabrao (Bronze, Gold ili Platinum); ova oznaka odnosi se isključivo na poslovnog korisnika i ne predstavlja vaš osobni podatak."),
          p("Za pružanje ove funkcije obrađujemo vašu lokaciju (vidi točku 6.), postavke filtara i kategorija koje ste odabrali te vaše interakcije s prikazanim partnerskim poslovnim subjektima, primjerice otvaranje profila poslovnog subjekta. Ove podatke o interakciji koristimo za poboljšanje prikaza rezultata i povećanje relevantnosti prikazanih partnerskih poslovnih subjekata. Pravna osnova: čl. 6. st. 1. t. a) GDPR-a za dijeljenje lokacije, čl. 6. st. 1. t. b) i f) GDPR-a za podatke o filtrima, kategorijama i interakciji."),
        ],
      },
      {
        heading: "5.2 Pečat – sakupljajte digitalne pečate", blocks: [
          p("U dijelu Pečat možete automatski dobiti digitalni pečat dodirom na NFC točku ili, alternativno, skeniranjem QR koda na blagajni partnerskog poslovnog subjekta. Vaš napredak, primjerice 7 od 10 pečata, prikazuje se odmah; po dostizanju potrebnog broja pečata možete iskoristiti pohranjenu nagradu, primjerice besplatnu kavu ili popust. Za svaki pečat dobivate i bodove za svoju razinu u dijelu Home."),
          p("U tu svrhu obrađujemo vrijeme i mjesto svakog pečatiranja, relevantni partnerski poslovni subjekt, trenutačni broj pečata po pojedinačnoj kartici vjernosti, iskorištene nagrade te pripadajući kod za iskorištavanje. Pravna osnova: čl. 6. st. 1. t. b) GDPR-a. Kako bismo provjerili da je pečatiranje doista obavljeno na licu mjesta, dodatno uspoređujemo lokaciju vašeg uređaja; pojedinosti pogledajte u točki 6."),
        ],
      },
      {
        heading: "5.3 Kartice – digitalni novčanik za postojeće korisničke kartice", blocks: [
          p("U dijelu Kartice možete digitalno pohraniti u svoj TapRadar novčanik već postojeće korisničke kartice trećih strana, primjerice Billa, DM, H&M, Spar ili Hofer, skeniranjem ili ručnim unosom odgovarajućeg crtičnog ili QR koda, a zatim ih pokazati na blagajni. Navedeni brendovi služe samo kao primjeri kartica koje sami pohranjujete; TapRadar nije povezan s tim tvrtkama i ne razmjenjuje s njima nikakve podatke."),
          callout("Važno", "Podaci pohranjeni u novčaniku kartica potječu isključivo od vas. Ne provjeravamo jesu li unesene kartice autentične, valjane ili se mogu pripisati relevantnoj trećoj strani, i ne dobivamo od tih tvrtki nikakve podatke o bonusima ili računima. Za točnost pohranjenih podataka o kartici te njihovo prihvaćanje na relevantnoj blagajni odgovorni ste isključivo vi."),
          p("Podaci o kartici i crtičnom kodu koje pohranite čuvaju se u šifriranom obliku i koriste se isključivo za prikaz u vašoj vlastitoj aplikaciji. Pravna osnova: čl. 6. st. 1. t. b) GDPR-a, jer nas dodavanjem kartice konkretno zadužujete za njezino pohranjivanje."),
        ],
      },
      {
        heading: "5.4 Home – profil i gamifikacija", blocks: [
          p("U dijelu Home nalazi se vaš profil sa sustavom od 20 razina, od „Početnika” do „Prvaka”. Sakupljate bodove za sakupljene pečate, dane recenzije i pozvane prijatelje, pratite tjedni cilj i koristite sustav nizova u kojem sedam uzastopnih aktivnih dana pokreće bonus. Osim toga, možete pozivati prijatelje i uspoređivati svoj napredak na ljestvici."),
          p("U tu svrhu obrađujemo vaš broj bodova, vašu razinu, brojač niza, povijest vaših ciljeva te – ako aktivno koristite ovu funkciju – popis prijatelja koje ste pozvali ili s kojima ste povezani te njihove agregirane podatke o napretku koji su vidljivi vama, ako su i te osobe pristale na uzajamnu vidljivost. Pravna osnova za osnovne funkcije (razina, bodovi, niz, tjedni cilj): čl. 6. st. 1. t. b) GDPR-a. Pravna osnova za opcionalnu funkciju prijatelja i ljestvice: čl. 6. st. 1. t. a) GDPR-a, jer time podaci postaju vidljivi drugim osobama. Razine, bodovi i pozicije na ljestvici nemaju novčanu vrijednost i nisu prenosivi."),
        ],
      },
      {
        heading: "6. Podaci o lokaciji i GPS detaljno", blocks: [
          p("TapRadar koristi podatke o lokaciji vašeg uređaja u dvije odvojene svrhe: (a) funkciju Radar za prikaz partnerskih poslovnih subjekata u vašoj blizini i (b) provjeru posjeta kupaca, uspoređivanjem lokacije vašeg uređaja u trenutku NFC ili QR pečatiranja sa spremljenom lokacijom partnerskog poslovnog subjekta, kako bi se spriječilo pečatiranje bez fizičke prisutnosti."),
          p("Ovisno o operacijskom sustavu, dijeljenje lokacije možete detaljno kontrolirati, primjerice opcijama „uvijek”, „samo tijekom korištenja aplikacije” ili „jednokratno”. Za osnovnu funkciju provjere pečata dovoljno je dijeljenje tijekom korištenja aplikacije; trajno dijeljenje lokacije u pozadini potrebno je samo ako želite koristiti oglašavanje temeljeno na blizini partnerskog poslovnog subjekta s Platinum paketom (vidi točku 7.2). Pravna osnova: čl. 6. st. 1. t. a) GDPR-a u vezi s postavkama dozvola vašeg operacijskog sustava, podredno naš legitimni interes za sprječavanje prijevare prema čl. 6. st. 1. t. f) GDPR-a. Dijeljenje lokacije možete u svakom trenutku opozvati putem postavki vašeg uređaja; pojedine funkcije, posebice provjera pečata i oglašavanje temeljeno na blizini, tada neće biti dostupne ili će biti dostupne samo ograničeno."),
        ],
      },
      {
        heading: "7.1 Servisne obavijesti od TapRadar", blocks: [
          p("Servisne push poruke šaljemo na vlastitu odgovornost, primjerice u vezi sa sigurnošću računa, bitnim promjenama platforme ili potvrdom transakcija. Pravna osnova: čl. 6. st. 1. t. b) i f) GDPR-a."),
        ],
      },
      {
        heading: "7.2 Marketinške i kampanjske push obavijesti poslovnih korisnika", blocks: [
          p("Poslovni korisnici mogu putem nadzorne ploče slati kampanje i push obavijesti krajnjim korisnicima koji su već kupci relevantnog partnerskog poslovnog subjekta (barem jedan sakupljen pečat) ili koji se – u okviru oglašavanja temeljenog na blizini, dostupnog isključivo u Platinum paketu – nalaze u njegovoj blizini i za to su dali privolu za dijeljenje lokacije. Push obavijesti su, ovisno o paketu, ograničene na određenu učestalost (Gold: do 2 slikovne/PDF kampanje mjesečno, bez push obavijesti; Platinum: do 4 kampanje mjesečno, uz push obavijesti, aktiviranje na temelju blizine, odbrojavanje kampanje i retargeting u roku od 30 dana od vašeg posljednjeg posjeta)."),
          callout("Odgovornost za push kampanje", "Za sadržaj, zakonitost i usklađenost kampanje s pravom nelojalne konkurencije odgovoran je relevantni poslovni korisnik. TOY GmbH osigurava tehničku infrastrukturu za isporuku, poštivanje ograničenja učestalosti te mogućnost odjave u svakom trenutku. U tom pogledu TOY GmbH i relevantni poslovni korisnik djeluju kao zajednički voditelji obrade u smislu čl. 26. GDPR-a u pogledu pokretanja i isporuke push kampanja; osnovne crte ove podjele odgovornosti sažete su u ovoj točki, a bit dogovora dostupna je ispitanicima na zahtjev, na adresi support@tapradar.app."),
          p("Primanje marketinških i kampanjskih push obavijesti možete u svakom trenutku potpuno ili po pojedinačnom partnerskom poslovnom subjektu deaktivirati putem postavki uređaja ili postavki u aplikaciji, a da vam se time ne onemogući pristup osnovnim funkcijama aplikacije. Pravna osnova: čl. 6. st. 1. t. a) GDPR-a u vezi s § 174 TKG 2021."),
        ],
      },
      {
        heading: "8. Registracija i korisnički račun (krajnji korisnici)", blocks: [
          p("Prilikom registracije u aplikaciji TapRadar prikupljamo vašu e-adresu, lozinku (pohranjenu u šifriranom obliku), odabrano prikazano ime te opcionalne podatke o profilu. Svrha: uspostava, upravljanje i osiguranje vašeg korisničkog računa. Pravna osnova: čl. 6. st. 1. t. b) GDPR-a."),
        ],
      },
      {
        heading: "9. Registracija, račun i podaci o tvrtki (poslovni korisnici)", blocks: [
          p("Za poslovne korisnike koji se pretplate na Bronze, Gold ili Platinum paket, dodatno obrađujemo: naziv tvrtke, pravni oblik, adresu poslovnice, OIB/PDV broj, kontakt osobu (ime, e-pošta, broj telefona), radno vrijeme, kategoriju i opis poslovnog subjekta te otpremljeni slikovni i PDF reklamni materijal i sadržaj kampanja. Svrha: izvršenje ugovora, pružanje nadzorne ploče za poslovne korisnike, fakturiranje. Pravna osnova: čl. 6. st. 1. t. b) i c) GDPR-a."),
        ],
      },
      {
        heading: "10. Sustav PIN-a za zaposlenike", blocks: [
          p("Poslovni korisnici mogu, ovisno o paketu, uspostaviti do 15 (Platinum), 5 (Gold), odnosno 1 (Bronze) pristup za zaposlenike s pojedinačnim PIN kodom. U tu svrhu obrađujemo od poslovnog korisnika unesene inicijale ili imena zaposlenika te automatski vođen dnevnik aktivnosti pečatiranja i iskorištavanja obavljenih putem relevantnog PIN-a. Za zakonitost ove obrade prema relevantnim zaposlenicima odgovoran je relevantni poslovni korisnik kao poslodavac; TOY GmbH u tom pogledu osigurava samo tehničku infrastrukturu. Pravna osnova na strani TOY GmbH: čl. 6. st. 1. t. b) GDPR-a te čl. 6. st. 1. t. f) GDPR-a."),
        ],
      },
      {
        heading: "11. Obrada plaćanja", blocks: [
          p("Obrada plaćanja za plaćene pakete odvija se putem našeg pružatelja usluga plaćanja Stripe. Mi sami ne pohranjujemo potpune podatke o platnim karticama; njih obrađuje isključivo Stripe. Od Stripea dobivamo potvrde o statusu plaćanja i iznosima računa te, po potrebi, posljednje četiri znamenke korištenog sredstva plaćanja, u svrhu dokumentacije i obračuna. Pravna osnova: čl. 6. st. 1. t. b) i c) GDPR-a. Više informacija o obradi podataka od strane Stripea potražite u politici privatnosti Stripea na stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Recenzije", blocks: [
          p("Kada kao krajnji korisnik date recenziju o partnerskom poslovnom subjektu, obrađujemo tekst recenzije, ocjenu zvjezdicama, vrijeme te dokaz o provjerenom posjetu (dokaz o pečatu). Recenzije se prikazuju partnerskom poslovnom subjektu te drugim korisnicima aplikacije uz vaše prikazano ime. Pravna osnova: čl. 6. st. 1. t. a) GDPR-a u vezi s čl. 6. st. 1. t. f) GDPR-a. Ako se recenzija prijavi kao protupravna, primjerice jer je uvredljiva ili očito ne počiva na stvarnom posjetu, prijavu i predmetnu recenziju provjeravamo u okviru našeg postupka prijave i provjere te rezultat priopćavamo i osobi koja je podnijela prijavu i autoru recenzije."),
        ],
      },
      {
        heading: "13. Korištenje web-stranice, log datoteke poslužitelja i kolačići", blocks: [
          p("Prilikom posjeta našoj web-stranici www.tapradar.app naš pružatelj hostinga automatski obrađuje tehničke podatke o pristupu (IP adresa, datum i vrijeme pristupa, posjećena stranica, korišteni preglednik i operacijski sustav, referentni URL) u log datotekama poslužitelja. Svrha: osiguravanje neometanog rada i IT sigurnosti. Pravna osnova: čl. 6. st. 1. t. f) GDPR-a. Web-stranica koristi isključivo tehnički nužne kolačiće potrebne za rad stranice; trenutačno se ne koriste kolačići za praćenje ili marketing. Ako se to u budućnosti promijeni, zatražit ćemo vašu privolu putem banera za privolu na kolačiće."),
        ],
      },
      {
        heading: "14. Primatelji i izvršitelji obrade", blocks: [
          p("Osobne podatke prosljeđujemo samo u mjeri nužnoj za pružanje naših usluga ili kada smo na to zakonski obvezni. Naši izvršitelji obrade, odnosno primatelji, uključuju posebice:"),
          list([
            "pružatelje usluga hostinga i infrastrukture (rad poslužitelja i baza podataka)",
            "Stripe (obrada plaćanja)",
            "pružatelje usluga push obavijesti (npr. Apple Push Notification Service, Firebase Cloud Messaging) za servisne i kampanjske push obavijesti",
            "pružatelje usluga slanja e-pošte (transakcijska i servisna komunikacija)",
            "IT pružatelje usluga u okviru održavanja i podrške",
          ]),
          p("Sa svim izvršiteljima obrade sklopili smo, u mjeri u kojoj je to zakonski potrebno, ugovore o obradi podataka sukladno čl. 28. GDPR-a. Ako partnerski poslovni subjekt (poslovni korisnik) u okviru izvršenja ugovora uvidi vaše podatke o pečatima, posjetima ili kampanjama na nadzornoj ploči, on u tom pogledu djeluje kao samostalni voditelj obrade, odnosno, u slučaju push kampanja, kao zajednički voditelj obrade sukladno točki 7.2 ove izjave."),
        ],
      },
      {
        heading: "15. Prijenos u treće zemlje", blocks: [
          p("Ako pojedini od gore navedenih pružatelja usluga obrađuju podatke izvan Europskog gospodarskog prostora (EGP), što se posebice može odnositi na određene cloud i push usluge američkih pružatelja, odgovarajućim jamstvima osiguravamo primjerenu razinu zaštite podataka, posebice sklapanjem standardnih ugovornih klauzula EU-a sukladno čl. 46. st. 2. t. c) GDPR-a ili certifikacijom primatelja u okviru okvira za zaštitu podataka EU-SAD (Data Privacy Framework), gdje je to primjenjivo."),
        ],
      },
      {
        heading: "16. Razdoblje čuvanja", blocks: [
          p("Osobne podatke čuvamo samo onoliko dugo koliko je nužno za relevantne svrhe:"),
          list([
            "Podaci o računu (krajnji korisnici i poslovni korisnici): za vrijeme trajanja korisničkog računa, odnosno ugovornog odnosa; nakon brisanja računa podaci se u pravilu brišu u roku od 30 dana, ako tomu ne stoje na putu zakonske obveze čuvanja",
            "Podaci o pečatima, nagradama i iskorištavanjima: za vrijeme trajanja računa kod relevantnog partnerskog poslovnog subjekta; nakon raskida ugovora s poslovnim korisnikom relevantne kartice vjernosti označavaju se kao neaktivne i brišu se nakon 12 mjeseci",
            "Podaci o novčaniku kartica (točka 5.3): do samostalnog brisanja od strane vas ili do brisanja vašeg računa",
            "Podaci o gamifikaciji (razina, bodovi, niz, tjedni cilj): za vrijeme trajanja vašeg računa",
            "Povezivanja s prijateljima i ljestvica: do uklanjanja od strane vas ili do brisanja vašeg računa",
            "Podaci o fakturiranju i plaćanju: 7 godina sukladno § 132 BAO i § 212 UGB",
            "Dnevnici isporuke i interakcije push obavijesti: 12 mjeseci",
            "Log datoteke poslužitelja: u pravilu 30 do 90 dana",
            "Podaci o lokaciji za provjeru pečata: bez trajne pohrane; obrada samo za vrijeme trajanja provjere, nakon čega se svode na dnevnik događaja (vrijeme, rezultat)",
            "Komunikacija s podrškom: 3 godine od okončanja predmeta, ako zakon ne propisuje dulje čuvanje",
          ]),
        ],
      },
      {
        heading: "17. Vaša prava kao ispitanika", blocks: [
          p("Sukladno zakonskim uvjetima, pripadaju vam sljedeća prava:"),
          list([
            "pravo na pristup (čl. 15. GDPR-a)",
            "pravo na ispravak (čl. 16. GDPR-a)",
            "pravo na brisanje (čl. 17. GDPR-a)",
            "pravo na ograničenje obrade (čl. 18. GDPR-a)",
            "pravo na prenosivost podataka (čl. 20. GDPR-a)",
            "pravo na prigovor na obradu temeljenu na čl. 6. st. 1. t. f) GDPR-a (čl. 21. GDPR-a)",
            "pravo na opoziv dane privole s učinkom ubuduće (čl. 7. st. 3. GDPR-a)",
          ]),
          p("Za ostvarivanje ovih prava dovoljna je neformalna poruka na support@tapradar.app. Vaš zahtjev obradit ćemo bez odgode, a najkasnije u roku od mjesec dana; taj se rok kod složenih ili brojnih zahtjeva može produžiti za dodatna dva mjeseca, o čemu ćemo vas obavijestiti."),
        ],
      },
      {
        heading: "18. Sigurnost podataka", blocks: [
          p("Primjenjujemo odgovarajuće tehničke i organizacijske mjere sukladno čl. 32. GDPR-a kako bismo zaštitili vaše podatke od gubitka, zlouporabe i neovlaštenog pristupa, uključujući šifriranje prijenosa podataka (TLS), šifriranje posebno osjetljivih pohranjenih podataka poput lozinki i podataka novčanika kartica, ograničenja pristupa prema načelu najmanjih ovlasti, redovita sigurnosna ažuriranja te bilježenje sigurnosno relevantnih događaja. Naše sigurnosne mjere neprekidno prilagođavamo trenutačnom stanju tehnike."),
        ],
      },
      {
        heading: "19. Bez automatiziranog donošenja odluka, ograničeno profiliranje", blocks: [
          p("Razine, bodovi i ljestvice unutar aplikacije temelje se na automatiziranim, ali potpuno transparentnim i razumljivim pravilima, bez pravnog ili slično značajnog učinka u smislu čl. 22. GDPR-a. U okviru oglašavanja temeljenog na blizini (točka 7.2) odvija se ograničeno profiliranje temeljeno na lokaciji, kako bi vam se prikazale obavijesti od partnerskih poslovnih subjekata u vašoj blizini; ova obrada temelji se isključivo na vašoj privoli i nema pravni ili slično značajan učinak u smislu čl. 22. GDPR-a. Automatizirano donošenje odluka s pravnim učinkom prema korisnicima ne odvija se."),
        ],
      },
      {
        heading: "20. Zaštita maloljetnika", blocks: [
          p("TapRadar nije ciljano usmjeren na djecu mlađu od 14 godina. Ako utvrdimo da su bez privole zakonskog zastupnika prikupljeni osobni podaci djeteta mlađeg od minimalne dobi koja je relevantna prema nacionalnom pravu, te ćemo podatke bez odgode izbrisati."),
        ],
      },
      {
        heading: "21. Izmjene ove politike privatnosti", blocks: [
          p("Pridržavamo pravo izmijeniti ovu politiku privatnosti kako bismo je prilagodili izmijenjenoj pravnoj situaciji ili novim funkcijama platforme. Uvijek vrijedi aktualna verzija objavljena na www.tapradar.app/datenschutz u trenutku vašeg posjeta, odnosno korištenja. U slučaju bitnih izmjena temeljenih na izmijenjenoj pravnoj osnovi, poput prvotne privole, tu ćemo privolu ponovno pribaviti."),
        ],
      },
      {
        heading: "22. Kontakt i pravo na pritužbu", blocks: [
          p("Za pitanja vezana uz zaštitu podataka možete nas kontaktirati na support@tapradar.app. Ne dovodeći u pitanje drugi upravni ili sudski pravni lijek, imate pravo podnijeti pritužbu nadzornom tijelu, posebice tijelu nadležnom za Austriju:"),
          list(["Austrijsko tijelo za zaštitu podataka (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Beč, Austrija", "Web-stranica: www.dsb.gv.at"]),
          callout("Višejezičnost", "Web-stranica austrijskog Tijela za zaštitu podataka trenutačno je dostupna na njemačkom jeziku, a dijelom i na engleskom. Ako vam ni njemački ni engleski nisu preferirani jezik, uvijek nam se možete neformalno obratiti na support@tapradar.app; pomoći ćemo vam, na jezicima dostupnima na ovoj web-stranici, u kontaktu s nadzornim tijelom."),
        ],
      },
    ],
    sourcesHeading: "Popis izvora",
    sourcesIntro: "Službeni izvori EU-a i Austrije na kojima se temelji ova politika privatnosti:",
    sources: [
      { label: "Opća uredba o zaštiti podataka (GDPR), Uredba (EU) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Austrijsko tijelo za zaštitu podataka", url: "https://www.dsb.gv.at/" },
    ],
  },
  ro: {
    title: "Politica de confidențialitate",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Actualizat: 9 august 2026 · Versiunea 2026-08-09.2 (versiune detaliată)",
    intro: [
      p("Protecția datelor dumneavoastră cu caracter personal este o preocupare centrală pentru TOY GmbH. Prezenta politică de confidențialitate vă informează în mod cuprinzător și detaliat despre ce date cu caracter personal colectăm în legătură cu utilizarea aplicației TapRadar, cu cele patru domenii funcționale ale sale Radar, Ștampilă, Carduri și Home, a site-ului web TapRadar, precum și a panoului de control TapRadar pentru clienți comerciali (denumite împreună „TapRadar” sau „Platforma”), în ce scopuri și pe ce temei juridic le prelucrăm, cui transmitem datele, cât timp le păstrăm și ce drepturi vă revin în calitate de persoană vizată. Prezenta declarație se aplică atât clienților finali care utilizează aplicația gratuită TapRadar, cât și clienților comerciali care s-au abonat la unul dintre planurile plătite TapRadar Bronze, Gold sau Platinum. Aceasta se bazează pe Regulamentul (UE) 2016/679 (Regulamentul general privind protecția datelor, „GDPR”), precum și pe dispozițiile de punere în aplicare austriece relevante, în special Legea privind protecția datelor (DSG) și Legea telecomunicațiilor 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Operator de date", blocks: [
          p("Operatorul de date în sensul art. 4 pct. 7 din GDPR este:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austria", "Cod TVA: ATU78882167", "E-mail: support@tapradar.app", "Website: www.tapradar.app"]),
          p("Nu a fost numit un responsabil intern cu protecția datelor, deoarece nu sunt îndeplinite condițiile art. 37 din GDPR. Vă rugăm să adresați solicitările privind protecția datelor la adresa de e-mail de mai sus; le vom procesa fără întârzieri nejustificate, cel târziu în termen de o lună de la primire."),
        ],
      },
      {
        heading: "2. Structura prezentei declarații", blocks: [
          p("Pentru a vă orienta rapid, prezenta politică de confidențialitate este structurată într-o parte generală (pct. 1–4), o parte specială care descrie detaliat cele patru domenii funcționale ale aplicației, precum și datele de localizare și de tip push (pct. 5–7), o parte privind clienții comerciali, plățile și recenziile (pct. 8–12), o parte privind site-ul web, destinatarii, transferul către țări terțe și perioadele de stocare (pct. 13–16), precum și o parte privind drepturile dumneavoastră, securitatea datelor și alte informații (pct. 17–22). O listă a surselor oficiale se află la finalul documentului."),
        ],
      },
      {
        heading: "3. Principii generale ale prelucrării datelor", blocks: [
          p("Prelucrăm datele cu caracter personal cu respectarea principiilor GDPR, în special legalitate, echitate, transparență, limitarea scopului, reducerea la minimum a datelor, exactitate, limitarea stocării, precum și integritate și confidențialitate (art. 5 din GDPR). Fiecare prelucrare de date cu caracter personal se bazează pe cel puțin unul dintre următoarele temeiuri juridice:"),
          list([
            "art. 6 alin. (1) lit. a) din GDPR – consimțământul persoanei vizate, în special pentru partajarea datelor de localizare, primirea notificărilor push și funcția opțională de prieteni și clasament",
            "art. 6 alin. (1) lit. b) din GDPR – necesitatea pentru executarea unui contract sau pentru a face demersuri precontractuale, de exemplu furnizarea funcțiilor aplicației Radar, Ștampilă, Carduri și Home, precum și gestionarea abonamentelor",
            "art. 6 alin. (1) lit. c) din GDPR – îndeplinirea unei obligații legale, de exemplu obligații fiscale și de drept comercial de păstrare a documentelor",
            "art. 6 alin. (1) lit. f) din GDPR – protejarea intereselor legitime, de exemplu prevenirea fraudei și a abuzurilor, securitatea IT și dezvoltarea în continuare a platformei, în măsura în care aceste interese nu sunt depășite de interesele sau drepturile fundamentale ale persoanei vizate",
          ]),
        ],
      },
      {
        heading: "4. Prezentare generală: cine prelucrează ce?", blocks: [
          p("TapRadar conectează două grupuri de utilizatori: clienții finali, care descoperă afaceri locale și colectează ștampile prin intermediul aplicației gratuite, și clienții comerciali, care își gestionează fidelizarea clienților prin intermediul panoului de control plătit. Ambele grupuri generează date care sunt prelucrate parțial exclusiv de TOY GmbH, parțial împreună cu partenerul contractual respectiv. Punctele 5–12 de mai jos descriu în detaliu aceste fluxuri de date, structurate pe cele patru domenii ale aplicației, precum și pe date de localizare, push, plată și recenzii."),
        ],
      },
      {
        heading: "5.1 Radar – descoperiți afaceri locale", blocks: [
          p("În secțiunea Radar vă arătăm pe o hartă afacerile partenere TapRadar din apropierea dumneavoastră. Puteți restrânge vizualizarea folosind filtre (ofertă, cupon, recompensă, cel mai bine cotate, rază de 500 de metri) și categorii precum cafenea, restaurant, frizerie sau piață. Pentru fiecare afacere parteneră se afișează programul de funcționare, recenziile și o insignă de plan care indică tariful ales de acea afacere (Bronze, Gold sau Platinum); această insignă privește exclusiv clientul comercial și nu constituie o dată cu caracter personal despre dumneavoastră."),
          p("Pentru a furniza această funcție, prelucrăm locația dumneavoastră (a se vedea pct. 6), setările de filtre și categorii pe care le alegeți, precum și interacțiunile dumneavoastră cu afacerile partenere afișate, de exemplu deschiderea profilului unei afaceri. Utilizăm aceste date de interacțiune pentru a îmbunătăți afișarea rezultatelor și pentru a crește relevanța afacerilor partenere afișate. Temei juridic: art. 6 alin. (1) lit. a) din GDPR pentru partajarea locației, art. 6 alin. (1) lit. b) și f) din GDPR pentru datele privind filtrele, categoriile și interacțiunile."),
        ],
      },
      {
        heading: "5.2 Ștampilă – colectați ștampile digitale", blocks: [
          p("În secțiunea Ștampilă puteți primi automat o ștampilă digitală atingând un punct NFC sau, alternativ, scanând un cod QR la casa unei afaceri partenere. Progresul dumneavoastră, de exemplu 7 din 10 ștampile, este afișat imediat; la atingerea numărului necesar de ștampile, puteți valorifica recompensa salvată, de exemplu o cafea gratuită sau o reducere. Pentru fiecare ștampilă primiți suplimentar puncte pentru nivelul dumneavoastră în secțiunea Home."),
          p("În acest scop prelucrăm ora și locul fiecărei ștampilări, afacerea parteneră vizată, numărul curent de ștampile pentru fiecare card de fidelitate, recompensele valorificate, precum și codul de valorificare aferent. Temei juridic: art. 6 alin. (1) lit. b) din GDPR. Pentru a verifica dacă o ștampilare a avut loc efectiv la fața locului, comparăm suplimentar locația dispozitivului dumneavoastră; detalii găsiți la pct. 6."),
        ],
      },
      {
        heading: "5.3 Carduri – portofel digital pentru cardurile de client existente", blocks: [
          p("În secțiunea Carduri puteți salva digital în portofelul dumneavoastră TapRadar carduri de client ale unor terți deja existente, de exemplu de la Billa, DM, H&M, Spar sau Hofer, prin scanarea sau introducerea manuală a codului de bare sau QR respectiv, iar apoi le puteți prezenta la casă. Mărcile menționate servesc doar ca exemple de carduri pe care le salvați dumneavoastră înșivă; TapRadar nu este afiliat acestor companii și nu face niciun schimb de date cu ele."),
          callout("Important", "Datele salvate în portofelul de carduri provin exclusiv de la dumneavoastră. Nu verificăm dacă cardurile introduse sunt autentice, valabile sau atribuibile terțului respectiv și nu primim de la aceste companii niciun fel de date privind bonusuri sau conturi. Dumneavoastră sunteți singurul responsabil pentru exactitatea datelor cardului salvat, precum și pentru acceptarea acestuia la casa respectivă."),
          p("Datele privind cardul și codul de bare pe care le salvați sunt stocate criptat și utilizate exclusiv pentru afișare în propria dumneavoastră aplicație. Temei juridic: art. 6 alin. (1) lit. b) din GDPR, întrucât ne însărcinați în mod specific cu stocarea prin adăugarea cardului."),
        ],
      },
      {
        heading: "5.4 Home – profil și gamificare", blocks: [
          p("În secțiunea Home găsiți profilul dumneavoastră cu un sistem de 20 de niveluri, de la „Începător” la „Campion”. Colectați puncte pentru ștampilele adunate, recenziile trimise și prietenii invitați, urmăriți un obiectiv săptămânal și beneficiați de un sistem de serii în care șapte zile active consecutive declanșează un bonus. În plus, puteți invita prieteni și vă puteți compara progresul într-un clasament."),
          p("În acest scop prelucrăm soldul dumneavoastră de puncte, nivelul, contorul seriei, istoricul obiectivelor dumneavoastră, precum și – dacă utilizați activ această funcție – lista prietenilor invitați sau conectați de dumneavoastră și datele lor agregate privind progresul, vizibile pentru dumneavoastră, în măsura în care și aceste persoane au consimțit la vizibilitatea reciprocă. Temei juridic pentru funcțiile de bază (nivel, puncte, serie, obiectiv săptămânal): art. 6 alin. (1) lit. b) din GDPR. Temei juridic pentru funcția opțională de prieteni și clasament: art. 6 alin. (1) lit. a) din GDPR, întrucât astfel datele devin vizibile pentru alte persoane. Nivelurile, punctele și pozițiile din clasament nu au valoare monetară și nu sunt transferabile."),
        ],
      },
      {
        heading: "6. Date de localizare și GPS în detaliu", blocks: [
          p("TapRadar utilizează datele de localizare ale dispozitivului dumneavoastră în două scopuri distincte: (a) funcția Radar pentru a afișa afacerile partenere din apropierea dumneavoastră și (b) verificarea vizitelor clienților, prin compararea locației dispozitivului dumneavoastră la momentul unei ștampilări NFC sau QR cu locația salvată a afacerii partenere, pentru a preveni o ștampilare fără prezență fizică."),
          p("În funcție de sistemul de operare, puteți controla în detaliu partajarea locației, de exemplu cu opțiunile „întotdeauna”, „doar în timpul utilizării aplicației” sau „o singură dată”. Pentru funcția de bază de verificare a ștampilelor, este suficientă partajarea în timpul utilizării aplicației; partajarea permanentă a locației în fundal este necesară doar dacă doriți să utilizați publicitatea bazată pe proximitate a unei afaceri partenere cu planul Platinum (a se vedea pct. 7.2). Temei juridic: art. 6 alin. (1) lit. a) din GDPR coroborat cu setările de permisiuni ale sistemului dumneavoastră de operare, în subsidiar interesul nostru legitim în prevenirea fraudei conform art. 6 alin. (1) lit. f) din GDPR. Puteți revoca partajarea locației în orice moment prin setările dispozitivului dumneavoastră; anumite funcții, în special verificarea ștampilelor și publicitatea bazată pe proximitate, nu vor mai fi disponibile sau vor fi disponibile doar limitat."),
        ],
      },
      {
        heading: "7.1 Notificări de serviciu de la TapRadar", blocks: [
          p("Trimitem notificări push de serviciu pe propria răspundere, de exemplu privind securitatea contului, modificări semnificative ale platformei sau confirmarea tranzacțiilor. Temei juridic: art. 6 alin. (1) lit. b) și f) din GDPR."),
        ],
      },
      {
        heading: "7.2 Notificări push de marketing și campanii ale clienților comerciali", blocks: [
          p("Clienții comerciali pot trimite, prin intermediul panoului de control, campanii și notificări push clienților finali care sunt deja clienți ai afacerii partenere respective (cel puțin o ștampilă colectată) sau care se află – în cadrul publicității bazate pe proximitate, disponibilă exclusiv în planul Platinum – în apropierea acesteia și au acordat în acest scop partajarea locației. Notificările push sunt limitate, în funcție de plan, la o anumită frecvență (Gold: până la 2 campanii cu imagine/PDF pe lună, fără notificări push; Platinum: până la 4 campanii pe lună, plus notificări push, declanșare pe bază de proximitate, numărătoare inversă pentru campanie și retargeting în termen de 30 de zile de la ultima dumneavoastră vizită)."),
          callout("Responsabilitatea pentru campaniile push", "Clientul comercial respectiv este responsabil pentru conținutul, legalitatea și conformitatea unei campanii cu legislația privind concurența neloială. TOY GmbH asigură infrastructura tehnică de livrare, respectarea limitelor de frecvență, precum și posibilitatea de dezabonare în orice moment. În acest sens, TOY GmbH și clientul comercial respectiv acționează ca operatori asociați în sensul art. 26 din GDPR în ceea ce privește declanșarea și livrarea campaniilor push; liniile generale ale acestei partajări a responsabilității sunt rezumate în acest punct, iar esența acordului este pusă la dispoziția persoanelor vizate, la cerere, la adresa support@tapradar.app."),
          p("Puteți dezactiva în orice moment primirea notificărilor push de marketing și de campanie, integral sau pentru fiecare afacere parteneră în parte, prin setările dispozitivului sau setările din aplicație, fără ca prin aceasta să vi se refuze accesul la funcțiile de bază ale aplicației. Temei juridic: art. 6 alin. (1) lit. a) din GDPR coroborat cu § 174 din TKG 2021."),
        ],
      },
      {
        heading: "8. Înregistrare și cont de utilizator (clienți finali)", blocks: [
          p("La înregistrarea în aplicația TapRadar colectăm adresa dumneavoastră de e-mail, parola (stocată criptat), numele de afișare ales, precum și date opționale de profil. Scop: crearea, gestionarea și securizarea contului dumneavoastră de utilizator. Temei juridic: art. 6 alin. (1) lit. b) din GDPR."),
        ],
      },
      {
        heading: "9. Înregistrare, cont și date ale companiei (clienți comerciali)", blocks: [
          p("Pentru clienții comerciali care se abonează la un plan Bronze, Gold sau Platinum, prelucrăm suplimentar: denumirea companiei, forma juridică, adresa punctului de lucru, codul TVA, persoana de contact (nume, e-mail, număr de telefon), programul de funcționare, categoria și descrierea afacerii, precum și materialele publicitare încărcate în format imagine și PDF și conținutul campaniilor. Scop: executarea contractului, furnizarea panoului de control pentru clienți comerciali, facturare. Temei juridic: art. 6 alin. (1) lit. b) și c) din GDPR."),
        ],
      },
      {
        heading: "10. Sistemul de PIN pentru angajați", blocks: [
          p("Clienții comerciali pot, în funcție de plan, configura până la 15 (Platinum), 5 (Gold), respectiv 1 (Bronze) acces pentru angajați cu un cod PIN individual. În acest scop prelucrăm inițialele sau numele angajaților introduse de clientul comercial, precum și un jurnal de activitate gestionat automat al ștampilărilor și valorificărilor efectuate prin PIN-ul respectiv. Pentru legalitatea acestei prelucrări față de angajații vizați este responsabil clientul comercial respectiv, în calitate de angajator; TOY GmbH pune la dispoziție, în acest sens, doar infrastructura tehnică. Temei juridic din partea TOY GmbH: art. 6 alin. (1) lit. b) din GDPR, precum și art. 6 alin. (1) lit. f) din GDPR."),
        ],
      },
      {
        heading: "11. Procesarea plăților", blocks: [
          p("Procesarea plăților pentru planurile plătite se realizează prin intermediul furnizorului nostru de servicii de plată, Stripe. Noi înșine nu stocăm date complete despre cardurile de plată; acestea sunt prelucrate exclusiv de Stripe. Primim de la Stripe confirmări privind starea plății și sumele facturate, precum și, dacă este cazul, ultimele patru cifre ale mijlocului de plată utilizat, în scopuri de documentare și facturare. Temei juridic: art. 6 alin. (1) lit. b) și c) din GDPR. Pentru mai multe informații privind prelucrarea datelor de către Stripe, consultați politica de confidențialitate Stripe la stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Recenzii", blocks: [
          p("Când dumneavoastră, în calitate de client final, publicați o recenzie despre o afacere parteneră, prelucrăm textul recenziei, evaluarea prin stele, momentul, precum și dovada unei vizite verificate (dovada ștampilei). Recenziile sunt afișate afacerii partenere, precum și altor utilizatori ai aplicației, împreună cu numele dumneavoastră de afișare. Temei juridic: art. 6 alin. (1) lit. a) din GDPR coroborat cu art. 6 alin. (1) lit. f) din GDPR. Dacă o recenzie este semnalată ca ilegală, de exemplu deoarece este ofensatoare sau în mod evident nu se bazează pe o vizită reală, examinăm sesizarea și recenzia vizată în cadrul procedurii noastre de sesizare și examinare și comunicăm rezultatul atât persoanei care a făcut sesizarea, cât și autorului recenziei."),
        ],
      },
      {
        heading: "13. Utilizarea site-ului web, fișiere jurnal ale serverului și module cookie", blocks: [
          p("La accesarea site-ului nostru web www.tapradar.app, furnizorul nostru de găzduire prelucrează automat date tehnice de acces (adresa IP, data și ora accesării, pagina accesată, browserul și sistemul de operare utilizate, URL-ul de referință) în fișiere jurnal ale serverului. Scop: asigurarea unei funcționări fără probleme și a securității IT. Temei juridic: art. 6 alin. (1) lit. f) din GDPR. Site-ul web utilizează exclusiv module cookie strict necesare din punct de vedere tehnic pentru funcționarea site-ului; în prezent nu utilizăm module cookie de urmărire sau marketing. Dacă acest lucru se va schimba în viitor, vă vom solicita consimțământul printr-un banner de consimțământ pentru module cookie."),
        ],
      },
      {
        heading: "14. Destinatari și persoane împuternicite", blocks: [
          p("Transmitem datele cu caracter personal doar în măsura necesară pentru furnizarea serviciilor noastre sau atunci când suntem obligați legal să o facem. Persoanele împuternicite, respectiv destinatarii noștri, includ în special:"),
          list([
            "furnizori de servicii de găzduire și infrastructură (operarea serverelor și a bazelor de date)",
            "Stripe (procesarea plăților)",
            "furnizori de servicii de notificări push (de ex. Apple Push Notification Service, Firebase Cloud Messaging) pentru notificări push de serviciu și campanie",
            "furnizori de servicii de expediere a e-mailurilor (comunicare tranzacțională și de serviciu)",
            "furnizori de servicii IT în cadrul întreținerii și asistenței",
          ]),
          p("Am încheiat, în măsura în care legea impune acest lucru, contracte de prelucrare a datelor cu toate persoanele împuternicite, conform art. 28 din GDPR. În măsura în care o afacere parteneră (client comercial) vizualizează în panoul de control datele dumneavoastră privind ștampilele, vizitele sau campaniile în cadrul executării contractului, aceasta acționează în acest sens ca operator de date independent sau, în cazul campaniilor push, ca operator asociat conform pct. 7.2 din prezenta declarație."),
        ],
      },
      {
        heading: "15. Transferul către țări terțe", blocks: [
          p("În măsura în care unii dintre furnizorii de servicii menționați mai sus prelucrează date în afara Spațiului Economic European (SEE), ceea ce poate afecta în special anumite servicii cloud și push ale furnizorilor din SUA, asigurăm printr-o garanție adecvată un nivel corespunzător de protecție a datelor, în special prin încheierea de clauze contractuale standard UE conform art. 46 alin. (2) lit. c) din GDPR sau prin certificarea destinatarului în cadrul Cadrului UE-SUA privind confidențialitatea datelor (Data Privacy Framework), acolo unde este relevant."),
        ],
      },
      {
        heading: "16. Perioade de stocare", blocks: [
          p("Stocăm datele cu caracter personal numai atât timp cât este necesar pentru scopurile respective:"),
          list([
            "Date de cont (clienți finali și comerciali): pe durata existenței contului de utilizator, respectiv a raportului contractual; după ștergerea contului, datele sunt în principiu șterse în termen de 30 de zile, în măsura în care nu se opun obligații legale de păstrare",
            "Date privind ștampilele, recompensele și valorificările: pe durata contului la afacerea parteneră respectivă; după încetarea contractului cu clientul comercial, cardurile de fidelitate aferente sunt marcate ca inactive și șterse după 12 luni",
            "Date privind portofelul de carduri (pct. 5.3): până la ștergerea de către dumneavoastră sau până la ștergerea contului dumneavoastră",
            "Date de gamificare (nivel, puncte, serie, obiectiv săptămânal): pe durata existenței contului dumneavoastră",
            "Conexiuni cu prietenii și clasament: până la eliminarea de către dumneavoastră sau până la ștergerea contului dumneavoastră",
            "Date de facturare și plată: 7 ani conform § 132 BAO și § 212 UGB",
            "Jurnale de livrare și interacțiune push: 12 luni",
            "Fișiere jurnal ale serverului: de regulă 30–90 de zile",
            "Date de localizare pentru verificarea ștampilelor: fără stocare permanentă; prelucrare doar pe durata verificării, ulterior redusă la un jurnal de evenimente (moment, rezultat)",
            "Comunicare cu asistența: 3 ani de la închiderea cazului, cu excepția cazului în care legea impune o perioadă de păstrare mai lungă",
          ]),
        ],
      },
      {
        heading: "17. Drepturile dumneavoastră ca persoană vizată", blocks: [
          p("Sub rezerva condițiilor legale, vă revin următoarele drepturi:"),
          list([
            "dreptul de acces (art. 15 din GDPR)",
            "dreptul la rectificare (art. 16 din GDPR)",
            "dreptul la ștergerea datelor (art. 17 din GDPR)",
            "dreptul la restricționarea prelucrării (art. 18 din GDPR)",
            "dreptul la portabilitatea datelor (art. 20 din GDPR)",
            "dreptul de opoziție la prelucrările întemeiate pe art. 6 alin. (1) lit. f) din GDPR (art. 21 din GDPR)",
            "dreptul de a retrage un consimțământ acordat, cu efect pentru viitor (art. 7 alin. (3) din GDPR)",
          ]),
          p("Pentru exercitarea acestor drepturi este suficientă o comunicare informală la adresa support@tapradar.app. Vom soluționa solicitarea dumneavoastră fără întârzieri nejustificate, cel târziu însă în termen de o lună; acest termen poate fi prelungit cu încă două luni în cazul solicitărilor complexe sau numeroase, despre care vă vom informa."),
        ],
      },
      {
        heading: "18. Securitatea datelor", blocks: [
          p("Aplicăm măsuri tehnice și organizatorice adecvate conform art. 32 din GDPR pentru a vă proteja datele împotriva pierderii, utilizării abuzive și accesului neautorizat, printre care criptarea transmisiei de date (TLS), criptarea datelor stocate deosebit de sensibile, cum ar fi parolele și datele portofelului de carduri, restricții de acces conform principiului privilegiului minim, actualizări periodice de securitate, precum și înregistrarea evenimentelor relevante pentru securitate. Măsurile noastre de securitate sunt adaptate continuu la stadiul actual al tehnicii."),
        ],
      },
      {
        heading: "19. Fără luare automată a deciziilor, profilare limitată", blocks: [
          p("Nivelurile, punctele și clasamentele din cadrul aplicației se bazează pe reguli automatizate, dar pe deplin transparente și inteligibile, fără niciun efect juridic sau efect similar semnificativ în sensul art. 22 din GDPR. În cadrul publicității bazate pe proximitate (pct. 7.2) are loc o profilare limitată bazată pe locație, pentru a vă afișa notificări de la afaceri partenere din apropiere; această prelucrare se bazează exclusiv pe consimțământul dumneavoastră și nu are niciun efect juridic sau efect similar semnificativ în sensul art. 22 din GDPR. Nu are loc nicio luare automată a deciziilor cu efect juridic asupra utilizatorilor."),
        ],
      },
      {
        heading: "20. Protecția minorilor", blocks: [
          p("TapRadar nu se adresează în mod special copiilor sub 14 ani. În cazul în care constatăm că au fost colectate date cu caracter personal ale unui copil sub vârsta minimă relevantă conform dreptului național, fără consimțământul unui reprezentant legal, vom șterge aceste date fără întârzieri nejustificate."),
        ],
      },
      {
        heading: "21. Modificări ale prezentei politici de confidențialitate", blocks: [
          p("Ne rezervăm dreptul de a adapta prezenta politică de confidențialitate pentru a o ajusta la situația juridică modificată sau la noile funcții ale platformei. Se aplică întotdeauna versiunea actuală publicată pe www.tapradar.app/datenschutz la momentul vizitei, respectiv utilizării dumneavoastră. În cazul modificărilor substanțiale bazate pe un temei juridic modificat, cum ar fi un consimțământ inițial, vom obține din nou acest consimțământ."),
        ],
      },
      {
        heading: "22. Contact și dreptul de a depune o plângere", blocks: [
          p("Pentru întrebări privind protecția datelor ne puteți contacta la adresa support@tapradar.app. Fără a aduce atingere oricărei alte căi de atac administrative sau judiciare, aveți dreptul de a depune o plângere la o autoritate de supraveghere, în special la autoritatea competentă pentru Austria:"),
          list(["Autoritatea austriacă pentru protecția datelor (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Viena, Austria", "Website: www.dsb.gv.at"]),
          callout("Multilingvism", "Site-ul web al Autorității austriece pentru protecția datelor este în prezent disponibil în limba germană, iar unele informații sunt disponibile și în limba engleză. Dacă nici germana, nici engleza nu sunt limba dumneavoastră preferată, ne puteți contacta oricând, în mod informal, la adresa support@tapradar.app; vă vom asista, în limbile disponibile pe acest site web, în relația dumneavoastră cu autoritatea de supraveghere."),
        ],
      },
    ],
    sourcesHeading: "Listă de surse",
    sourcesIntro: "Surse oficiale UE și austriece pe care se bazează prezenta politică de confidențialitate:",
    sources: [
      { label: "Regulamentul general privind protecția datelor (GDPR), Regulamentul (UE) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Autoritatea austriacă pentru protecția datelor", url: "https://www.dsb.gv.at/" },
    ],
  },
  bg: {
    title: "Политика за поверителност",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Актуализирано на: 9 август 2026 г. · Версия 2026-08-09.2 (подробна версия)",
    intro: [
      p("Защитата на Вашите лични данни е от централно значение за TOY GmbH. Настоящата политика за поверителност Ви информира изчерпателно и подробно за това какви лични данни събираме във връзка с използването на приложението TapRadar с неговите четири функционални области Радар, Печат, Карти и Home, уебсайта TapRadar, както и таблото за бизнес клиенти на TapRadar (заедно „TapRadar“ или „Платформата“), за какви цели и на какво правно основание ги обработваме, на кого предаваме данни, колко дълго ги съхраняваме и какви права Ви се полагат като субект на данни. Настоящата декларация важи както за крайните клиенти, използващи безплатното приложение TapRadar, така и за бизнес клиентите, абонирали се за някой от платените тарифни планове на TapRadar – Bronze, Gold или Platinum. Тя се основава на Регламент (ЕС) 2016/679 (Общ регламент относно защитата на данните, „GDPR“), както и на съответните австрийски разпоредби за прилагане, по-специално Закона за защита на данните (DSG) и Закона за далекосъобщенията 2021 (TKG 2021)."),
    ],
    sections: [
      {
        heading: "1. Администратор на данни", blocks: [
          p("Администратор по смисъла на чл. 4, т. 7 от GDPR е:"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Австрия", "ДДС номер: ATU78882167", "Имейл: support@tapradar.app", "Уебсайт: www.tapradar.app"]),
          p("Не е назначено вътрешно длъжностно лице по защита на данните, тъй като не са изпълнени условията по чл. 37 от GDPR. Моля, отправяйте запитвания, свързани със защитата на данните, на посочения по-горе имейл адрес; ще ги обработим без ненужно забавяне, но не по-късно от един месец от получаването им."),
        ],
      },
      {
        heading: "2. Структура на настоящата декларация", blocks: [
          p("За да можете бързо да се ориентирате, настоящата политика за поверителност е разделена на обща част (точки 1–4), специална част, описваща подробно четирите функционални области на приложението, както и данните за местоположение и push известията (точки 5–7), част относно бизнес клиентите, плащанията и отзивите (точки 8–12), част относно уебсайта, получателите, предаването в трети държави и сроковете на съхранение (точки 13–16), както и част относно Вашите права, сигурността на данните и други указания (точки 17–22). Списък с официалните източници се намира в края на документа."),
        ],
      },
      {
        heading: "3. Общи принципи на обработване на данните", blocks: [
          p("Обработваме личните данни при спазване на принципите на GDPR, по-специално законосъобразност, добросъвестност, прозрачност, ограничение на целите, свеждане на данните до минимум, точност, ограничение на съхранението, както и цялостност и поверителност (чл. 5 от GDPR). Всяко обработване на лични данни се основава на поне едно от следните правни основания:"),
          list([
            "чл. 6, параграф 1, буква а) от GDPR – съгласие на субекта на данни, по-специално за споделяне на данни за местоположение, получаване на push известия и незадължителната функция за приятели и класация",
            "чл. 6, параграф 1, буква б) от GDPR – необходимост за изпълнение на договор или предприемане на действия преди сключване на договор, например предоставяне на функциите на приложението Радар, Печат, Карти и Home, както и управление на абонаментите",
            "чл. 6, параграф 1, буква в) от GDPR – изпълнение на правно задължение, например данъчни и търговскоправни задължения за съхранение",
            "чл. 6, параграф 1, буква е) от GDPR – защита на легитимни интереси, например предотвратяване на измами и злоупотреби, ИТ сигурност и по-нататъшно развитие на платформата, доколкото тези интереси не се преимуществат от интересите или основните права на субекта на данни",
          ]),
        ],
      },
      {
        heading: "4. Общ преглед: кой какво обработва?", blocks: [
          p("TapRadar свързва две групи потребители: крайни клиенти, които чрез безплатното приложение откриват местни търговски обекти и събират печати, и бизнес клиенти, които чрез платеното табло управляват лоялността на своите клиенти. И двете групи генерират данни, които се обработват отчасти изключително от TOY GmbH, отчасти съвместно със съответния договорен партньор. Следващите точки 5–12 описват подробно тези потоци от данни, структурирани по четирите области на приложението, както и по данни за местоположение, push, плащания и отзиви."),
        ],
      },
      {
        heading: "5.1 Радар – открийте местни търговски обекти", blocks: [
          p("В областта Радар Ви показваме на карта партньорски обекти на TapRadar в близост до Вас. Изгледа можете да стесните чрез филтри (акция, купон, награда, най-добре оценени, радиус 500 метра) и категории като кафене, ресторант, фризьорски салон или пазар. За всеки партньорски обект се показват работно време, отзиви и значка за тарифен план, обозначаваща избрания от този обект план (Bronze, Gold или Platinum); тази значка се отнася изключително до бизнес клиента и не представлява Ваш личен данни."),
          p("За предоставянето на тази функция обработваме Вашето местоположение (вж. точка 6), избраните от Вас настройки за филтри и категории, както и Вашите взаимодействия с показаните партньорски обекти, например отваряне на профил на обект. Използваме тези данни за взаимодействие, за да подобрим показването на резултатите и да увеличим релевантността на показваните партньорски обекти. Правно основание: чл. 6, параграф 1, буква а) от GDPR за споделяне на местоположението, чл. 6, параграф 1, букви б) и е) от GDPR за данните за филтри, категории и взаимодействие."),
        ],
      },
      {
        heading: "5.2 Печат – събирайте цифрови печати", blocks: [
          p("В областта Печат можете автоматично да получите цифров печат, като докоснете NFC точка или алтернативно сканирате QR код на касата на партньорски обект. Вашият напредък, например 7 от 10 печата, се показва веднага; при достигане на необходимия брой печати можете да осребрите запазената награда, например безплатно кафе или отстъпка. За всеки печат получавате и точки за нивото си в областта Home."),
          p("За тази цел обработваме времето и мястото на всяко печатане, съответния партньорски обект, текущия брой печати за всяка карта за лоялност, осребрените награди, както и съответния код за осребряване. Правно основание: чл. 6, параграф 1, буква б) от GDPR. За да проверим дали печатането действително е извършено на място, допълнително сравняваме местоположението на Вашето устройство; подробности вж. в точка 6."),
        ],
      },
      {
        heading: "5.3 Карти – цифров портфейл за съществуващи клиентски карти", blocks: [
          p("В областта Карти можете цифрово да запазите в своя портфейл в TapRadar вече съществуващи клиентски карти на трети страни, например на Billa, DM, H&M, Spar или Hofer, като сканирате или ръчно въведете съответния баркод или QR код, а след това да ги покажете на касата. Посочените марки служат само като примери за карти, които сами съхранявате; TapRadar не е свързан с тези компании и не осъществява никакъв обмен на данни с тях."),
          callout("Важно", "Данните, съхранени в портфейла с карти, произхождат изключително от Вас. Не проверяваме дали въведените карти са автентични, валидни или могат да бъдат отнесени към съответната трета страна, и не получаваме от тези компании никакви данни за бонуси или сметки. За точността на съхранените данни за картата, както и за приемането ѝ на съответната каса, отговаряте единствено Вие."),
          p("Данните за карта и баркод, които съхранявате, се запазват в криптиран вид и се използват изключително за показване в собственото Ви приложение. Правно основание: чл. 6, параграф 1, буква б) от GDPR, тъй като чрез добавянето на картата специално ни възлагате нейното съхранение."),
        ],
      },
      {
        heading: "5.4 Home – профил и геймификация", blocks: [
          p("В областта Home ще намерите своя профил със система от 20 нива, от „Начинаещ“ до „Шампион“. Събирате точки за събрани печати, подадени отзиви и поканени приятели, следите седмична цел и се възползвате от система на серии, при която седем последователни активни дни задействат бонус. Освен това можете да каните приятели и да сравнявате напредъка си в класация."),
          p("За тази цел обработваме Вашия точков баланс, нивото Ви, брояча на серии, историята на Вашите цели, както и – ако активно използвате тази функция – списъка на поканените или свързаните от Вас приятели и техните обобщени данни за напредък, видими за Вас, доколкото и тези лица са се съгласили на взаимна видимост. Правно основание за основните функции (ниво, точки, серия, седмична цел): чл. 6, параграф 1, буква б) от GDPR. Правно основание за незадължителната функция за приятели и класация: чл. 6, параграф 1, буква а) от GDPR, тъй като по този начин данни стават видими за други лица. Нивата, точките и класирането нямат парична стойност и не подлежат на прехвърляне."),
        ],
      },
      {
        heading: "6. Данни за местоположение и GPS подробно", blocks: [
          p("TapRadar използва данните за местоположението на Вашето устройство за две отделни цели: (а) функцията Радар за показване на партньорски обекти в близост до Вас и (б) проверка на посещения на клиенти, като местоположението на Вашето устройство в момента на печатане чрез NFC или QR се сравнява със запазеното местоположение на партньорския обект, за да се предотврати печатане без физическо присъствие."),
          p("В зависимост от операционната система можете подробно да контролирате споделянето на местоположението, например с опциите „винаги“, „само при използване на приложението“ или „еднократно“. За основната функция за проверка на печати е достатъчно споделяне по време на използване на приложението; постоянното споделяне на местоположение във фонов режим е необходимо само ако желаете да използвате реклама на базата на близост от партньорски обект с план Platinum (вж. точка 7.2). Правно основание: чл. 6, параграф 1, буква а) от GDPR във връзка с настройките за разрешения на Вашата операционна система, при условията на евентуалност нашият легитимен интерес от предотвратяване на измами съгласно чл. 6, параграф 1, буква е) от GDPR. Можете по всяко време да оттеглите споделянето на местоположение чрез настройките на Вашето устройство; отделни функции, по-специално проверката на печати и рекламата на базата на близост, тогава няма да бъдат налични или ще бъдат налични само ограничено."),
        ],
      },
      {
        heading: "7.1 Сервизни известия от TapRadar", blocks: [
          p("Изпращаме сервизни push съобщения на собствена отговорност, например относно сигурността на акаунта, съществени промени в платформата или потвърждение на транзакции. Правно основание: чл. 6, параграф 1, букви б) и е) от GDPR."),
        ],
      },
      {
        heading: "7.2 Маркетингови и кампанийни push известия от бизнес клиенти", blocks: [
          p("Бизнес клиентите могат чрез таблото да изпращат кампании и push известия на крайни клиенти, които вече са клиенти на съответния партньорски обект (поне един събран печат) или които – в рамките на рекламата на базата на близост, налична изключително в плана Platinum – се намират в близост до него и са дали съгласие за споделяне на местоположение за тази цел. Push известията са ограничени, в зависимост от плана, до определена честота (Gold: до 2 кампании с изображение/PDF месечно, без push известия; Platinum: до 4 кампании месечно плюс push известия, задействане на базата на близост, обратно броене на кампанията и ретаргетинг в рамките на 30 дни от последното Ви посещение)."),
          callout("Отговорност за push кампаниите", "За съдържанието, законосъобразността и съответствието на кампанията с правото за нелоялна конкуренция отговаря съответният бизнес клиент. TOY GmbH осигурява техническата инфраструктура за доставка, спазването на ограниченията на честотата, както и възможността за отказ по всяко време. В това отношение TOY GmbH и съответният бизнес клиент действат като съвместни администратори по смисъла на чл. 26 от GDPR по отношение на задействането и доставката на push кампании; основните насоки на това разпределение на отговорност са обобщени в тази точка, а същността на споразумението се предоставя на субектите на данни при поискване на адрес support@tapradar.app."),
          p("Можете по всяко време да деактивирате получаването на маркетингови и кампанийни push известия, изцяло или за отделен партньорски обект, чрез настройките на устройството или настройките в приложението, без по този начин да Ви бъде отказан достъп до основните функции на приложението. Правно основание: чл. 6, параграф 1, буква а) от GDPR във връзка с § 174 от TKG 2021."),
        ],
      },
      {
        heading: "8. Регистрация и потребителски акаунт (крайни клиенти)", blocks: [
          p("При регистрация в приложението TapRadar събираме Вашия имейл адрес, парола (съхранявана в криптиран вид), избраното показвано име, както и незадължителни данни за профила. Цел: създаване, управление и обезопасяване на Вашия потребителски акаунт. Правно основание: чл. 6, параграф 1, буква б) от GDPR."),
        ],
      },
      {
        heading: "9. Регистрация, акаунт и фирмени данни (бизнес клиенти)", blocks: [
          p("За бизнес клиенти, които се абонират за план Bronze, Gold или Platinum, обработваме допълнително: наименование на фирмата, правна форма, адрес на обекта, ДДС номер, лице за контакт (име, имейл, телефонен номер), работно време, категория и описание на обекта, както и качени изображения и PDF рекламни материали и съдържание на кампании. Цел: изпълнение на договора, предоставяне на таблото за бизнес клиенти, фактуриране. Правно основание: чл. 6, параграф 1, букви б) и в) от GDPR."),
        ],
      },
      {
        heading: "10. Система с ПИН за служители", blocks: [
          p("Бизнес клиентите могат, в зависимост от плана, да настроят до 15 (Platinum), 5 (Gold), респ. 1 (Bronze) достъпа за служители с индивидуален ПИН код. За тази цел обработваме въведените от бизнес клиента инициали или имена на служители, както и автоматично поддържан дневник на дейностите по печатане и осребряване, извършени чрез съответния ПИН. За законосъобразността на тази обработка спрямо съответните служители отговаря съответният бизнес клиент в качеството си на работодател; TOY GmbH предоставя в това отношение само техническата инфраструктура. Правно основание от страна на TOY GmbH: чл. 6, параграф 1, буква б) от GDPR, както и чл. 6, параграф 1, буква е) от GDPR."),
        ],
      },
      {
        heading: "11. Обработка на плащанията", blocks: [
          p("Обработката на плащанията за платените планове се извършва чрез нашия доставчик на платежни услуги Stripe. Ние самите не съхраняваме пълни данни за платежни карти; те се обработват изключително от Stripe. Получаваме от Stripe потвърждения за статуса на плащането и сумите по фактурите, както и при необходимост последните четири цифри на използваното платежно средство, за документационни и отчетни цели. Правно основание: чл. 6, параграф 1, букви б) и в) от GDPR. За повече информация относно обработката на данни от Stripe вижте политиката за поверителност на Stripe на stripe.com/privacy."),
        ],
      },
      {
        heading: "12. Отзиви", blocks: [
          p("Когато като краен клиент публикувате отзив за партньорски обект, обработваме текста на отзива, оценката със звезди, времето, както и доказателство за проверено посещение (доказателство за печат). Отзивите се показват на партньорския обект, както и на други потребители на приложението, заедно с Вашето показвано име. Правно основание: чл. 6, параграф 1, буква а) от GDPR във връзка с чл. 6, параграф 1, буква е) от GDPR. Ако отзив бъде докладван като незаконосъобразен, например защото е обиден или очевидно не се основава на действително посещение, разглеждаме сигнала и съответния отзив в рамките на нашата процедура за докладване и преглед и съобщаваме резултата както на подалото сигнала лице, така и на автора на отзива."),
        ],
      },
      {
        heading: "13. Използване на уебсайта, лог файлове на сървъра и бисквитки", blocks: [
          p("При посещение на нашия уебсайт www.tapradar.app доставчикът ни на хостинг автоматично обработва технически данни за достъп (IP адрес, дата и час на достъпа, посетената страница, използваният браузър и операционна система, реферер URL) в лог файлове на сървъра. Цел: осигуряване на безпроблемна работа и ИТ сигурност. Правно основание: чл. 6, параграф 1, буква е) от GDPR. Уебсайтът използва изключително технически необходими бисквитки, необходими за работата на сайта; понастоящем не използваме проследяващи или маркетингови бисквитки. Ако това се промени в бъдеще, ще поискаме Вашето съгласие чрез банер за съгласие с бисквитки."),
        ],
      },
      {
        heading: "14. Получатели и обработващи лица", blocks: [
          p("Предаваме лични данни само доколкото това е необходимо за предоставянето на нашите услуги или когато сме законово задължени за това. Към нашите обработващи лица, респ. получатели, спадат по-специално:"),
          list([
            "доставчици на хостинг и инфраструктурни услуги (експлоатация на сървъри и бази данни)",
            "Stripe (обработка на плащания)",
            "доставчици на услуги за push известия (напр. Apple Push Notification Service, Firebase Cloud Messaging) за сервизни и кампанийни push известия",
            "доставчици на услуги за изпращане на имейли (транзакционна и сервизна комуникация)",
            "ИТ доставчици на услуги в рамките на поддръжка и подкрепа",
          ]),
          p("С всички обработващи лица сме сключили, доколкото това се изисква от закона, споразумения за обработка на данни съгласно чл. 28 от GDPR. Доколкото партньорски обект (бизнес клиент) преглежда в таблото Вашите данни за печати, посещения или кампании в рамките на изпълнението на договора, той действа в това отношение като самостоятелен администратор, респ., в случай на push кампании, като съвместен администратор съгласно точка 7.2 от настоящата декларация."),
        ],
      },
      {
        heading: "15. Предаване в трети държави", blocks: [
          p("Доколкото отделни от гореспоменатите доставчици на услуги обработват данни извън Европейското икономическо пространство (ЕИП), което може да засегне по-специално определени облачни и push услуги на американски доставчици, чрез подходящи гаранции осигуряваме подходящо ниво на защита на данните, по-специално чрез сключване на стандартни договорни клаузи на ЕС съгласно чл. 46, параграф 2, буква в) от GDPR или сертифициране на получателя в рамките на Рамката за защита на данните между ЕС и САЩ (Data Privacy Framework), доколкото е приложимо."),
        ],
      },
      {
        heading: "16. Срокове на съхранение", blocks: [
          p("Съхраняваме личните данни само толкова дълго, колкото е необходимо за съответните цели:"),
          list([
            "Данни за акаунта (крайни клиенти и бизнес клиенти): за периода на съществуване на потребителския акаунт, респ. на договорното правоотношение; след изтриване на акаунта данните по правило се изтриват в рамките на 30 дни, доколкото на това не пречат законови задължения за съхранение",
            "Данни за печати, награди и осребрявания: за периода на съществуване на акаунта при съответния партньорски обект; след прекратяване на договора с бизнес клиента съответните карти за лоялност се маркират като неактивни и се изтриват след 12 месеца",
            "Данни за портфейла с карти (точка 5.3): до самостоятелно изтриване от Вас или до изтриване на Вашия акаунт",
            "Данни за геймификация (ниво, точки, серия, седмична цел): за периода на съществуване на Вашия акаунт",
            "Връзки с приятели и класация: до премахване от Вас или до изтриване на Вашия акаунт",
            "Данни за фактуриране и плащания: 7 години съгласно § 132 BAO и § 212 UGB",
            "Дневници за доставка и взаимодействие с push известия: 12 месеца",
            "Лог файлове на сървъра: по правило 30 до 90 дни",
            "Данни за местоположение за проверка на печати: без постоянно съхранение; обработка само за периода на проверката, след което се свежда до дневник на събитията (време, резултат)",
            "Комуникация с поддръжката: 3 години от приключването на случая, доколкото законът не изисква по-дълго съхранение",
          ]),
        ],
      },
      {
        heading: "17. Вашите права като субект на данни", blocks: [
          p("В съответствие със законовите изисквания Ви се полагат следните права:"),
          list([
            "право на достъп (чл. 15 от GDPR)",
            "право на коригиране (чл. 16 от GDPR)",
            "право на изтриване (чл. 17 от GDPR)",
            "право на ограничаване на обработването (чл. 18 от GDPR)",
            "право на преносимост на данните (чл. 20 от GDPR)",
            "право на възражение срещу обработване, основано на чл. 6, параграф 1, буква е) от GDPR (чл. 21 от GDPR)",
            "право на оттегляне на дадено съгласие с действие занапред (чл. 7, параграф 3 от GDPR)",
          ]),
          p("За упражняването на тези права е достатъчно неформално съобщение до support@tapradar.app. Ще обработим Вашето искане без ненужно забавяне, но не по-късно от един месец; този срок може да бъде удължен с още два месеца при сложни или многобройни искания, за което ще Ви уведомим."),
        ],
      },
      {
        heading: "18. Сигурност на данните", blocks: [
          p("Прилагаме подходящи технически и организационни мерки съгласно чл. 32 от GDPR, за да защитим Вашите данни от загуба, злоупотреба и неоторизиран достъп, включително криптиране на предаването на данни (TLS), криптиране на особено чувствителни съхранявани данни като пароли и данни на портфейла с карти, ограничения на достъпа съгласно принципа на най-малко привилегии, редовни актуализации на сигурността, както и регистриране на събития, свързани със сигурността. Нашите мерки за сигурност непрекъснато се адаптират към актуалното състояние на техниката."),
        ],
      },
      {
        heading: "19. Липса на автоматизирано вземане на решения, ограничено профилиране", blocks: [
          p("Нивата, точките и класациите в приложението се основават на автоматизирани, но напълно прозрачни и разбираеми правила, без правно или подобно значимо въздействие по смисъла на чл. 22 от GDPR. В рамките на рекламата на базата на близост (точка 7.2) се извършва ограничено профилиране на базата на местоположение, за да Ви се показват известия от партньорски обекти в близост; тази обработка се основава изключително на Вашето съгласие и няма правно или подобно значимо въздействие по смисъла на чл. 22 от GDPR. Не се извършва автоматизирано вземане на решения с правно въздействие спрямо потребителите."),
        ],
      },
      {
        heading: "20. Защита на непълнолетни лица", blocks: [
          p("TapRadar не е насочен целенасочено към деца под 14 години. Ако установим, че без съгласието на законен представител са събрани лични данни на дете под минималната възраст, приложима съгласно националното право, ще изтрием тези данни без ненужно забавяне."),
        ],
      },
      {
        heading: "21. Промени в настоящата политика за поверителност", blocks: [
          p("Запазваме си правото да адаптираме настоящата политика за поверителност, за да я приведем в съответствие с променената правна ситуация или нови функции на платформата. Винаги важи актуалната версия, публикувана на www.tapradar.app/datenschutz към момента на Вашето посещение, респ. използване. При съществени промени, основани на променено правно основание, като например първоначално съгласие, ще получим отново това съгласие."),
        ],
      },
      {
        heading: "22. Контакт и право на жалба", blocks: [
          p("За въпроси, свързани със защитата на данните, можете да се свържете с нас на support@tapradar.app. Без да се засяга друго административно или съдебно средство за защита, имате право да подадете жалба до надзорен орган, по-специално до компетентния за Австрия орган:"),
          list(["Австрийски орган за защита на данните (Österreichische Datenschutzbehörde)", "Barichgasse 40-42, 1030 Виена, Австрия", "Уебсайт: www.dsb.gv.at"]),
          callout("Многоезичие", "Уебсайтът на австрийския Орган за защита на данните понастоящем е достъпен на немски, а частично и на английски език. Ако нито немският, нито английският са Вашият предпочитан език, можете по всяко време да се свържете с нас неформално на support@tapradar.app; ще Ви съдействаме, на наличните на този уебсайт езици, при контакта с надзорния орган."),
        ],
      },
    ],
    sourcesHeading: "Списък на източниците",
    sourcesIntro: "Официални източници на ЕС и Австрия, на които се основава настоящата политика за поверителност:",
    sources: [
      { label: "Общ регламент относно защитата на данните (GDPR), Регламент (ЕС) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Австрийски орган за защита на данните", url: "https://www.dsb.gv.at/" },
    ],
  },
};
