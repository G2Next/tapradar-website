import type { Locale } from "@/i18n/config";
import { callout, p, table, type LegalDocument } from "./types";

export const termsBusinessContent: { de: LegalDocument } & Partial<Record<Locale, LegalDocument>> = {
  de: {
    title: "Geschäftskunden-AGB",
    subtitle: "Allgemeine Geschäftsbedingungen für das TapRadar-Dashboard (Geschäftskundinnen und Geschäftskunden) – TOY GmbH",
    stand: "Stand: 9. August 2026 · Version 2026-08-09.2",
    intro: [
      p("Die TOY GmbH mit Sitz in Guntramsdorf, Österreich (nachfolgend „TapRadar\", „wir\" oder „uns\"), betreibt die digitale Plattform TapRadar, bestehend aus einer kostenlosen mobilen Anwendung für Endkundinnen und Endkunden (Radar, Stempel, Karten, Home) sowie einem kostenpflichtigen Dashboard für Geschäftskundinnen und Geschäftskunden zur digitalen Kundenbindung mittels NFC- und QR-basierter Stempelkarten. Über das Radar-Modul der Endkunden-App vermittelt TapRadar Ihre Angebote, Aktionen und Bewertungen an Endkundinnen und Endkunden und ist insoweit ein Online-Vermittlungsdienst im Sinne der Verordnung (EU) 2019/1150 (P2B-Verordnung). Diese Geschäftskunden-AGB regeln das Vertragsverhältnis zwischen TapRadar und Unternehmen, die einen kostenpflichtigen Tarif abonnieren (nachfolgend „Geschäftskunden\")."),
    ],
    sections: [
      {
        heading: "§ 1 Geltungsbereich und Vertragspartner", blocks: [
          p("(1) Diese AGB gelten ausschließlich für Unternehmen, die im Rahmen ihrer gewerblichen oder selbständigen beruflichen Tätigkeit einen kostenpflichtigen TapRadar-Tarif (Bronze, Gold oder Platinum) abonnieren (Unternehmer im Sinne des § 1 KSchG bzw. § 1 UGB). Die Bestimmungen des Konsumentenschutzgesetzes (KSchG) gelten für Geschäftskunden daher grundsätzlich nicht, soweit gesetzlich zulässig."),
          p("(2) Für natürliche Personen, die zur Gründung eines Unternehmens erstmals einen Tarif abschließen (Existenzgründer im Sinne des § 1 Abs. 3 KSchG), gelten ergänzend die Hinweise zum Widerrufsrecht in der Verbraucher-Widerrufsbelehrung unter www.tapradar.app/widerrufsbelehrung."),
          p("(3) Entgegenstehenden oder von diesen AGB abweichenden Bedingungen wird widersprochen; sie werden nicht Vertragsbestandteil, es sei denn, TapRadar stimmt ihrer Geltung ausdrücklich schriftlich zu."),
          p("(4) Vertragspartner ist die TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Österreich, UID-Nummer ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Leistungsbeschreibung", blocks: [
          p("TapRadar stellt Ihnen je nach gewähltem Tarif eine digitale Kundenbindungsplattform zur Verfügung, insbesondere: NFC-Tag- und QR-Code-Unterstützung zur Vergabe digitaler Stempel, Erstellung und Verwaltung digitaler Stempelkarten, Sichtbarkeit im Radar-Modul der Endkunden-App inklusive Anzeige in Kategorien und Filtern (Aktion, Gutschein, Belohnung, Top, Umkreis 500 m), Anzeige verifizierter Kundenbewertungen, Bereitstellung eines QR-Schaufenster-Plakats, Basis- bzw. erweiterte Statistiken und Analytik, ein Mitarbeiter-PIN-System sowie – je nach Tarif – Werbe- und Kampagnenfunktionen, Proximity-Werbung, Push-Benachrichtigungen an Endkunden und Berichte."),
          p("Der jeweilige Funktionsumfang der einzelnen Tarife ergibt sich aus der nachfolgenden Übersicht sowie aus der zum Zeitpunkt des Vertragsschlusses auf www.tapradar.app/fuer-geschaefte veröffentlichten Tarifübersicht, die Bestandteil dieser AGB ist."),
          table(
            ["Leistung", "Bronze", "Gold", "Platinum"],
            [
              ["Monatspreis", "€ 9,99", "€ 49,99", "€ 99,99"],
              ["Standorte", "1", "1", "1"],
              ["Mitarbeiterzugänge", "1", "5", "15"],
              ["NFC/QR-Stempelung", "ja", "ja", "ja"],
              ["QR-Schaufenster-Plakat", "ja", "ja", "ja"],
              ["Basis-Statistik", "ja", "ja", "ja"],
              ["Bild/PDF-Werbung", "nein", "2×/Monat", "4×/Monat"],
              ["Proximity-Werbung (GPS)", "nein", "nein", "ja"],
              ["Push-Benachrichtigungen", "nein", "nein", "ja"],
              ["Retargeting (30 Tage)", "nein", "nein", "ja"],
              ["Erweiterte Analytik", "nein", "nein", "ja"],
              ["Wöchentlicher E-Mail-Bericht", "nein", "ja", "ja"],
              ["Monatlicher PDF-Bericht", "nein", "nein", "ja"],
              ["Support", "Standard", "Standard", "Priorität 24h"],
            ],
          ),
          p("TapRadar erbringt keine eigenen Waren- oder Dienstleistungen gegenüber den Endkunden Ihres Betriebs und ist an den zwischen Ihnen und Ihren Kunden zustande kommenden Rechtsgeschäften, insbesondere der Einlösung von Belohnungen, nicht beteiligt."),
        ],
      },
      {
        heading: "§ 3 Registrierung und Vertragsschluss", blocks: [
          p("(1) Der kostenpflichtige Tarifvertrag kommt zustande, indem Sie im Bestellprozess einen Tarif auswählen, die erforderlichen Unternehmens- und Zahlungsdaten angeben und die Bestellung durch Anklicken der Schaltfläche „zahlungspflichtig bestellen\" oder einer gleichbedeutenden Formulierung abschließen. Vor Abgabe der Bestellung werden Tarif, Gesamtpreis (inklusive Umsatzsteuer), Abrechnungsintervall und die wesentlichen Leistungsmerkmale des gewählten Tarifs in einer Bestellübersicht zusammengefasst."),
          p("(2) TapRadar bestätigt den Vertragsschluss durch Übersendung einer Bestätigungs-E-Mail sowie durch Freischaltung des Dashboards."),
          callout("Verifizierung Ihrer Geschäftsidentität (Know-Your-Business-Customer)", "Gemäß Art. 30 der Verordnung (EU) 2022/2065 (Digital Services Act) sind Betreiber von Online-Marktplätzen, die Verträge zwischen Unternehmen und Verbrauchern vermitteln, verpflichtet, bestimmte Identitätsangaben ihrer gewerblichen Nutzer einzuholen und, soweit zumutbar, deren Plausibilität zu prüfen. TapRadar erhebt daher bei der Registrierung von Geschäftskunden mindestens: Firmenname und Rechtsform, Anschrift, UID-Nummer bzw. Firmenbuchnummer, Namen und Kontaktdaten der vertretungsbefugten Person sowie eine Selbstauskunft zur Rechtmäßigkeit der angebotenen Waren und Dienstleistungen. Sie sind verpflichtet, diese Angaben vollständig, richtig zu machen und Änderungen unverzüglich mitzuteilen. Werden uns Anhaltspunkte bekannt, dass die Angaben unrichtig oder irreführend sind, sind wir berechtigt, den Zugang zum Dashboard bis zur Klärung auszusetzen."),
          p("(3) TapRadar behält sich vor, Registrierungen ohne Angabe von Gründen abzulehnen, insbesondere bei begründetem Verdacht auf missbräuchliche Nutzung, unrichtige Angaben oder Verstöße gegen diese AGB."),
        ],
      },
      {
        heading: "§ 4 Tarife, Preise und Zahlungsbedingungen", blocks: [
          p("(1) Es gelten die in § 2 genannten monatlichen Tarifpreise, jeweils zzgl. der gesetzlichen Umsatzsteuer, soweit anwendbar. Die jeweils aktuellen Preise sind der Tarifübersicht auf www.tapradar.app/fuer-geschaefte zu entnehmen, die zum Zeitpunkt der Bestellung maßgeblich ist."),
          p("(2) Die Zahlungsabwicklung erfolgt über den Zahlungsdienstleister Stripe. Mit Abschluss der Bestellung ermächtigen Sie TapRadar, den jeweiligen Abo-Betrag zu Beginn jedes Abrechnungsintervalls über das hinterlegte Zahlungsmittel einzuziehen."),
          p("(3) Geraten Sie mit einer fälligen Zahlung in Verzug, ist TapRadar berechtigt, nach vorheriger Mahnung den Zugang zum Dashboard vorübergehend zu sperren, bis der ausstehende Betrag beglichen ist; das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt."),
          p("(4) TapRadar ist berechtigt, die Tarifpreise mit Wirkung für zukünftige Abrechnungsintervalle anzupassen. Preisänderungen werden Ihnen mindestens 30 Tage vor Inkrafttreten in Textform mitgeteilt. Widersprechen Sie der Preisänderung nicht bis zu deren Inkrafttreten, gilt die Änderung als angenommen; im Fall des Widerspruchs steht Ihnen ein außerordentliches Kündigungsrecht zum Zeitpunkt des Wirksamwerdens der Preisänderung zu, worauf TapRadar in der Mitteilung gesondert hinweisen wird."),
        ],
      },
      {
        heading: "§ 5 Vertragslaufzeit und Kündigung", blocks: [
          p("(1) Tarifverträge werden auf unbestimmte Zeit geschlossen und verlängern sich automatisch um das jeweils vereinbarte Abrechnungsintervall, in der Regel einen Monat, sofern sie nicht rechtzeitig gekündigt werden."),
          p("(2) Monatliche Tarife können von beiden Seiten jederzeit zum Ende des laufenden Abrechnungsintervalls gekündigt werden, sofern in der Bestellübersicht zum Zeitpunkt des Vertragsschlusses keine abweichende Mindestlaufzeit vereinbart wurde. Die Kündigung kann über das Dashboard oder per E-Mail an support@tapradar.app erklärt werden."),
          p("(3) Das Recht beider Parteien zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt."),
          callout("Kündigung, Aussetzung und Beschränkung des Zugangs gemäß P2B-Verordnung", "Gemäß Art. 4 der Verordnung (EU) 2019/1150 (P2B-Verordnung) begründen wir jede Entscheidung, Ihren Zugang zum Dashboard einzuschränken, auszusetzen oder zu beenden, mit einer Sachverhaltsdarstellung oder den Umständen, die zu dieser Entscheidung geführt haben, und übermitteln Ihnen diese vor oder zum Zeitpunkt des Wirksamwerdens der Maßnahme, es sei denn, wir unterliegen einer rechtlichen oder regulatorischen Verpflichtung, die dem entgegensteht, oder es besteht Gefahr im Verzug, etwa bei schwerwiegendem oder wiederholtem Verstoß gegen diese AGB oder bei Gefährdung der Sicherheit der Plattform oder Dritter. In diesen Ausnahmefällen erfolgt die Begründung unverzüglich nach Wirksamwerden der Maßnahme."),
          p("(4) Nach wirksamer Beendigung des Vertragsverhältnisses wird der Zugang zum Dashboard deaktiviert; bereits gesammelte Endkunden-Stempel und -Bewertungen zu Ihrem Betrieb können in der Endkunden-App als inaktiv gekennzeichnet werden. Die Bestimmungen zur Speicherdauer in der Datenschutzerklärung bleiben unberührt."),
        ],
      },
      {
        heading: "§ 6 Sichtbarkeit und Ranking im Radar-Modul", blocks: [
          callout("Transparenz der Ranking-Parameter gemäß Art. 5 P2B-Verordnung", "Die Reihenfolge, in der Partnerbetriebe im Radar-Modul der Endkunden-App angezeigt werden, richtet sich hauptsächlich nach der Entfernung zum Standort der Endkundin bzw. des Endkunden, den von dieser Person gewählten Filtern (Aktion, Gutschein, Belohnung, Top, Umkreis 500 m) und Kategorien, der Aktualität und Anzahl verifizierter Bewertungen sowie ergänzend nach dem gebuchten Tarif, da bestimmte Sichtbarkeits- und Werbefunktionen (etwa hervorgehobene Kampagnen) ausschließlich Gold- und Platinum-Kunden zur Verfügung stehen. Eine gegen Entgelt erkaufte, von den vorgenannten Kriterien unabhängige Ranking-Bevorzugung findet nicht statt."),
          p("Das im Radar-Modul angezeigte Plan-Badge kennzeichnet Ihren gebuchten Tarif gegenüber Endkunden. TapRadar behält sich vor, die Ranking-Parameter im Rahmen der Weiterentwicklung der Plattform anzupassen; wesentliche Änderungen werden gemäß § 13 angekündigt."),
        ],
      },
      {
        heading: "§ 7 Pflichten der Geschäftskunden", blocks: [
          p("(1) Sie sind verpflichtet, Ihre Unternehmens- und Kontaktdaten vollständig, richtig und aktuell zu halten und uns Änderungen unverzüglich mitzuteilen."),
          p("(2) Für die Sicherheit der Mitarbeiter-PIN-Codes sind Sie verantwortlich. Handlungen, die über einen Ihnen zugeordneten Mitarbeiterzugang vorgenommen werden, werden Ihnen zugerechnet. Sie sind verpflichtet, Mitarbeiter-PINs bei Ausscheiden der betreffenden Person unverzüglich zu deaktivieren."),
          p("(3) Über die Plattform hochgeladene Werbe- und Kampagneninhalte, wie Bilder, PDFs, Texte und Push-Mitteilungen, müssen rechtmäßig sein und dürfen insbesondere keine Rechte Dritter (Urheber-, Marken- oder Persönlichkeitsrechte), lauterkeitsrechtliche Vorschriften des UWG oder sonstige gesetzliche Bestimmungen verletzen. Sie stellen TapRadar von sämtlichen Ansprüchen Dritter frei, die auf einer Verletzung dieser Pflicht beruhen."),
          p("(4) Die Einlösung von in der App angezeigten Belohnungen und die Erfüllung der beworbenen Angebote gegenüber Endkunden obliegt ausschließlich Ihnen als Geschäftskunde."),
        ],
      },
      {
        heading: "§ 8 Push-Benachrichtigungen und Kampagnen an Endkunden", blocks: [
          p("(1) Push-Benachrichtigungen und Kampagnen können Sie im Rahmen des gebuchten Tarifs an Endkundinnen und Endkunden richten, die bereits Kunde Ihres Betriebs sind (mindestens ein gesetzter Stempel) oder die sich – ausschließlich im Platinum-Tarif über die Proximity-Werbung – in der Nähe Ihres Standorts befinden und hierfür eine Standortfreigabe erteilt haben."),
          p("(2) Für den Inhalt und die Rechtmäßigkeit dieser Kampagnen, insbesondere die Einhaltung des UWG, des Kennzeichnungsrechts für Werbung und der zulässigen Frequenz gemäß der Tarifübersicht (Gold: bis zu 2 Kampagnen/Monat; Platinum: bis zu 4 Kampagnen/Monat inkl. Push), sind Sie verantwortlich. TapRadar stellt lediglich die technische Zustellinfrastruktur und die Einhaltung der Frequenzgrenzen sicher. Näheres zur datenschutzrechtlichen Verantwortungsteilung finden Sie in der Datenschutzerklärung unter www.tapradar.app/datenschutz."),
          p("(3) TapRadar ist berechtigt, einzelne Kampagneninhalte vor Versand stichprobenartig zu prüfen und rechtswidrige oder gegen diese AGB verstoßende Inhalte zurückzuweisen."),
        ],
      },
      {
        heading: "§ 9 Bewertungen und Verbot manipulierter Bewertungen", blocks: [
          p("(1) Bewertungen können ausschließlich von Endkundinnen und Endkunden abgegeben werden, deren Besuch durch einen tatsächlich gesetzten Stempel verifiziert wurde."),
          callout("Verbot von Fake-Bewertungen", "Nach den lauterkeitsrechtlichen Bestimmungen des UWG in der durch die Omnibus-Richtlinie (Richtlinie (EU) 2019/2161) geänderten Fassung ist es unzulässig, gefälschte Bewertungen zu veröffentlichen oder in Auftrag zu geben, echte Bewertungen zu verfälschen oder andere Unternehmen mit der Fälschung von Bewertungen zu beauftragen. Sie sind verpflichtet, weder selbst noch durch Dritte, insbesondere nicht über Ihre Mitarbeiter-PIN-Zugänge, Bewertungen zu Ihrem eigenen Betrieb zu manipulieren, zu kaufen oder Kundinnen und Kunden im Gegenzug für positive Bewertungen zu incentivieren. Verstöße berechtigen TapRadar zur Entfernung der betroffenen Bewertungen sowie zur außerordentlichen Kündigung."),
          p("(2) Sie können einzelne Bewertungen über das Dashboard als rechtswidrig, beleidigend oder erkennbar unwahr melden; TapRadar prüft jede Meldung und teilt Ihnen sowie der bewertenden Person das Ergebnis mit."),
        ],
      },
      {
        heading: "§ 10 Rechte an Inhalten", blocks: [
          p("(1) TapRadar räumt Ihnen für die Dauer des Vertragsverhältnisses ein einfaches, nicht übertragbares Recht zur Nutzung der Plattform im vertraglich vorgesehenen Umfang ein."),
          p("(2) Für von Ihnen hochgeladene Inhalte, wie Logos, Bilder, Texte und Werbematerial, räumen Sie TapRadar ein einfaches, auf die Vertragsdauer beschränktes Recht ein, diese Inhalte im Rahmen der vereinbarten Leistungen zu nutzen, insbesondere zur Anzeige in der App, im QR-Schaufenster-Plakat und in Push-Benachrichtigungen. Sie versichern, über die erforderlichen Rechte an den hochgeladenen Inhalten zu verfügen."),
          p("(3) Sämtliche Rechte an der TapRadar-Software, -Marke und -Plattform selbst verbleiben bei TOY GmbH bzw. deren Lizenzgebern."),
        ],
      },
      {
        heading: "§ 11 Zugang zu Daten", blocks: [
          callout("Datenzugang gemäß Art. 9 P2B-Verordnung", "Gemäß Art. 9 P2B-Verordnung informieren wir Sie, dass Sie über das Dashboard Zugang zu den im Rahmen Ihres Tarifs erhobenen Statistik- und Analysedaten (Basis- bzw. erweiterte Analytik) zu Ihren eigenen Endkunden erhalten, insbesondere zu Besuchsfrequenz, Stempel- und Einlösedaten sowie, im Platinum-Tarif, zu werbebezogenen Kennzahlen (CTR/CVR). Ein darüberhinausgehender Zugang zu personenbezogenen Rohdaten einzelner Endkunden wird nicht gewährt; die aggregierte Auswertung erfolgt unter Beachtung der Datenschutzerklärung."),
        ],
      },
      {
        heading: "§ 12 Internes Beschwerdemanagement und Mediation", blocks: [
          callout("Beschwerdemanagement gemäß Art. 11 und 12 P2B-Verordnung", "Gemäß Art. 11 P2B-Verordnung stellt TapRadar Ihnen ein kostenloses internes Beschwerdemanagementsystem zur Verfügung. Beschwerden im Zusammenhang mit der Nichteinhaltung dieser AGB, technischen Problemen mit unmittelbarem Bezug zur Bereitstellung des Dienstes sowie mit Maßnahmen gemäß §§ 5 und 6 können Sie jederzeit an beschwerde@tapradar.app richten. Wir bearbeiten jede Beschwerde zeitnah, angemessen und teilen Ihnen das Ergebnis in Textform mit. Gemäß Art. 12 P2B-Verordnung weisen wir Sie darauf hin, dass für kleine Unternehmen wie TOY GmbH die Pflicht zur Benennung konkreter Mediatoren entfallen kann; sollte eine gütliche außergerichtliche Einigung im Einzelfall nicht gelingen, stehen Ihnen unbeschadet dessen die ordentlichen Gerichte gemäß § 15 offen."),
        ],
      },
      {
        heading: "§ 13 Verfügbarkeit und Änderungen der Plattform", blocks: [
          p("(1) TapRadar ist bemüht, eine hohe Verfügbarkeit der Plattform sicherzustellen, kann jedoch keine unterbrechungsfreie Verfügbarkeit garantieren. Wartungsarbeiten, technische Störungen oder Weiterentwicklungen können zu vorübergehenden Einschränkungen führen."),
          p("(2) TapRadar ist berechtigt, einzelne Funktionen der Plattform im Rahmen der Weiterentwicklung anzupassen, zu ergänzen oder einzustellen, sofern der vertraglich geschuldete Kernleistungsumfang dadurch nicht unzumutbar beeinträchtigt wird. Wesentliche Änderungen, einschließlich Änderungen der Ranking-Parameter gemäß § 6, werden Ihnen mindestens 15 Tage vor Inkrafttreten in Textform angekündigt, soweit nicht eine kürzere Frist aus rechtlichen oder Sicherheitsgründen erforderlich ist."),
        ],
      },
      {
        heading: "§ 14 Haftung", blocks: [
          p("(1) TapRadar haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen, sowie nach den zwingenden Bestimmungen des Produkthaftungsgesetzes."),
          p("(2) Für leicht fahrlässig verursachte Schäden haftet TapRadar nur bei der Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung Sie regelmäßig vertrauen dürfen; in diesem Fall ist die Haftung der Höhe nach auf den vertragstypisch vorhersehbaren Schaden begrenzt."),
          p("(3) Im Übrigen ist die Haftung für leicht fahrlässig verursachte Schäden ausgeschlossen, soweit gesetzlich zulässig."),
          p("(4) TapRadar haftet nicht für Handlungen Ihrer Endkunden, für die Richtigkeit von Bewertungen sowie nicht für entgangenen Umsatz infolge einer nach § 5 oder § 6 begründeten Einschränkung, Aussetzung oder Beendigung des Zugangs."),
          p("(5) Die vorstehenden Haftungsbeschränkungen gelten in gleichem Umfang zugunsten der Erfüllungsgehilfen von TapRadar."),
        ],
      },
      {
        heading: "§ 15 Schlussbestimmungen", blocks: [
          p("(1) Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts (CISG) und der Verweisungsnormen des internationalen Privatrechts."),
          p("(2) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist das für 2353 Guntramsdorf sachlich zuständige Gericht."),
          p("(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. An die Stelle der unwirksamen Bestimmung tritt eine Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt."),
          p("(4) Nebenabreden bestehen nicht. Änderungen und Ergänzungen dieses Vertrags bedürfen der Textform, soweit in diesen AGB nichts anderes bestimmt ist."),
        ],
      },
    ],
    sourcesHeading: "Quellenverzeichnis",
    sourcesIntro: "Amtliche EU- und österreichische Fundstellen, die diesen Geschäftskunden-AGB zugrunde liegen:",
    sources: [
      { label: "Platform-to-Business-Verordnung (P2B-VO), Verordnung (EU) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Digital Services Act, Verordnung (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Verbraucherrechte-Richtlinie, Richtlinie 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Österreichisches Fern- und Auswärtsgeschäfte-Gesetz (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  en: {
    title: "Business Customer Terms",
    subtitle: "General Terms and Conditions for the TapRadar Dashboard (Business Customers) – TOY GmbH",
    stand: "Last updated: 9 August 2026 · Version 2026-08-09.2",
    intro: [
      p("TOY GmbH, based in Guntramsdorf, Austria (hereinafter \"TapRadar\", \"we\" or \"us\"), operates the digital platform TapRadar, consisting of a free mobile application for end customers (Radar, Stamp, Cards, Home) and a paid dashboard for business customers for digital customer loyalty using NFC- and QR-based loyalty cards. Through the Radar module of the end-customer app, TapRadar mediates your offers, promotions and reviews to end customers and is, in this respect, an online intermediation service within the meaning of Regulation (EU) 2019/1150 (P2B Regulation). These Business Customer Terms govern the contractual relationship between TapRadar and businesses that subscribe to a paid plan (hereinafter \"business customers\")."),
    ],
    sections: [
      {
        heading: "§ 1 Scope and contracting parties", blocks: [
          p("(1) These terms apply exclusively to businesses that subscribe to a paid TapRadar plan (Bronze, Gold or Platinum) as part of their commercial or independent professional activity (entrepreneurs within the meaning of § 1 KSchG and § 1 UGB). The provisions of the Austrian Consumer Protection Act (KSchG) therefore generally do not apply to business customers, to the extent legally permissible."),
          p("(2) For natural persons who conclude a plan for the first time in order to set up a business (start-up founders within the meaning of § 1(3) KSchG), the notices on the right of withdrawal in the Consumer Withdrawal Notice at www.tapradar.app/widerrufsbelehrung apply additionally."),
          p("(3) We object to any conflicting terms or terms deviating from these terms; they do not become part of the contract unless TapRadar expressly agrees to their validity in writing."),
          p("(4) The contracting party is TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, VAT ID ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Description of services", blocks: [
          p("Depending on the plan chosen, TapRadar provides you with a digital customer loyalty platform, in particular: NFC tag and QR code support for issuing digital stamps, creation and management of digital loyalty cards, visibility in the Radar module of the end-customer app including display in categories and filters (offer, voucher, reward, top-rated, 500 m radius), display of verified customer reviews, provision of a QR shop-window poster, basic or advanced statistics and analytics, an employee PIN system, and – depending on the plan – advertising and campaign features, proximity advertising, push notifications to end customers, and reports."),
          p("The specific scope of features for each plan is set out in the table below and in the plan overview published at www.tapradar.app/fuer-geschaefte at the time the contract is concluded, which forms part of these terms."),
          table(
            ["Feature", "Bronze", "Gold", "Platinum"],
            [
              ["Monthly price", "€9.99", "€49.99", "€99.99"],
              ["Locations", "1", "1", "1"],
              ["Employee accounts", "1", "5", "15"],
              ["NFC/QR stamping", "yes", "yes", "yes"],
              ["QR shop-window poster", "yes", "yes", "yes"],
              ["Basic statistics", "yes", "yes", "yes"],
              ["Image/PDF advertising", "no", "2×/month", "4×/month"],
              ["Proximity advertising (GPS)", "no", "no", "yes"],
              ["Push notifications", "no", "no", "yes"],
              ["Retargeting (30 days)", "no", "no", "yes"],
              ["Advanced analytics", "no", "no", "yes"],
              ["Weekly email report", "no", "yes", "yes"],
              ["Monthly PDF report", "no", "no", "yes"],
              ["Support", "Standard", "Standard", "Priority 24h"],
            ],
          ),
          p("TapRadar does not itself provide any goods or services to your business's end customers and is not a party to the transactions concluded between you and your customers, in particular the redemption of rewards."),
        ],
      },
      {
        heading: "§ 3 Registration and conclusion of contract", blocks: [
          p("(1) The paid plan contract is concluded by selecting a plan during the order process, providing the required business and payment details, and completing the order by clicking the \"order with obligation to pay\" button or an equivalent wording. Before submitting the order, the plan, total price (including VAT), billing interval, and key features of the chosen plan are summarised in an order overview."),
          p("(2) TapRadar confirms the conclusion of the contract by sending a confirmation email and by activating the dashboard."),
          callout("Verifying your business identity (Know-Your-Business-Customer)", "Pursuant to Art. 30 of Regulation (EU) 2022/2065 (Digital Services Act), operators of online marketplaces that facilitate contracts between businesses and consumers are required to obtain certain identification details from their commercial users and, where feasible, to verify their plausibility. TapRadar therefore collects, at a minimum, upon registration of business customers: company name and legal form, address, VAT ID or company register number, name and contact details of the authorised representative, and self-declaration regarding the lawfulness of the goods and services offered. You are obliged to provide this information completely and accurately and to notify us of any changes without delay. If we become aware of indications that the information provided is incorrect or misleading, we are entitled to suspend access to the dashboard pending clarification."),
          p("(3) TapRadar reserves the right to reject registrations without giving reasons, in particular where there is a justified suspicion of abusive use, incorrect information, or violations of these terms."),
        ],
      },
      {
        heading: "§ 4 Plans, prices and payment terms", blocks: [
          p("(1) The monthly plan prices set out in § 2 apply, plus statutory VAT where applicable. The current prices can be found in the plan overview at www.tapradar.app/fuer-geschaefte, which is authoritative at the time of ordering."),
          p("(2) Payment processing is carried out via the payment service provider Stripe. By completing the order, you authorise TapRadar to collect the respective subscription amount at the start of each billing interval via the stored payment method."),
          p("(3) If you fall into arrears with a due payment, TapRadar is entitled, after prior reminder, to temporarily block access to the dashboard until the outstanding amount has been settled; the right to extraordinary termination for good cause remains unaffected."),
          p("(4) TapRadar is entitled to adjust the plan prices with effect for future billing intervals. Price changes will be communicated to you in text form at least 30 days before they take effect. If you do not object to the price change before it takes effect, the change is deemed accepted; in the event of an objection, you are entitled to extraordinary termination as of the date the price change takes effect, which TapRadar will separately point out in the notice."),
        ],
      },
      {
        heading: "§ 5 Contract term and termination", blocks: [
          p("(1) Plan contracts are concluded for an indefinite period and automatically renew for the respective agreed billing interval, generally one month, unless terminated in due time."),
          p("(2) Monthly plans may be terminated by either party at any time, effective at the end of the current billing interval, unless a different minimum term was agreed in the order overview at the time the contract was concluded. Termination may be declared via the dashboard or by email to support@tapradar.app."),
          p("(3) The right of either party to extraordinary termination for good cause remains unaffected."),
          callout("Termination, suspension and restriction of access under the P2B Regulation", "Pursuant to Art. 4 of Regulation (EU) 2019/1150 (P2B Regulation), we give reasons – a statement of facts or the circumstances leading to the decision – for any decision to restrict, suspend or terminate your access to the dashboard, and provide these to you before or at the time the measure takes effect, unless we are subject to a legal or regulatory obligation preventing this, or there is imminent danger, e.g. in the case of a serious or repeated breach of these terms or a threat to the security of the platform or third parties. In such exceptional cases, the statement of reasons is provided without undue delay after the measure takes effect."),
          p("(4) After the contractual relationship has been effectively terminated, access to the dashboard is deactivated; end-customer stamps and reviews already collected for your business may be marked as inactive in the end-customer app. The retention provisions in the privacy policy remain unaffected."),
        ],
      },
      {
        heading: "§ 6 Visibility and ranking in the Radar module", blocks: [
          callout("Transparency of ranking parameters pursuant to Art. 5 P2B Regulation", "The order in which partner businesses are displayed in the Radar module of the end-customer app is determined primarily by the distance to the end customer's location, the filters they have selected (offer, voucher, reward, top-rated, 500 m radius) and categories, the recency and number of verified reviews, and additionally by the plan booked, since certain visibility and advertising features (such as featured campaigns) are available exclusively to Gold and Platinum customers. There is no paid ranking preference independent of the criteria stated above."),
          p("The plan badge shown in the Radar module identifies your booked plan to end customers. TapRadar reserves the right to adjust the ranking parameters as part of the ongoing development of the platform; material changes will be announced pursuant to § 13."),
        ],
      },
      {
        heading: "§ 7 Obligations of business customers", blocks: [
          p("(1) You are obliged to keep your company and contact details complete, accurate and up to date, and to notify us of any changes without delay."),
          p("(2) You are responsible for the security of employee PIN codes. Actions carried out via an employee access assigned to you are attributed to you. You are obliged to deactivate employee PINs without delay when the respective person leaves."),
          p("(3) Advertising and campaign content uploaded via the platform, such as images, PDFs, texts and push messages, must be lawful and must not infringe any third-party rights (copyright, trademark or personality rights), fair-trading provisions of the Austrian UWG, or other statutory provisions. You indemnify TapRadar against all third-party claims arising from a breach of this obligation."),
          p("(4) The redemption of rewards displayed in the app and the fulfilment of advertised offers towards end customers is your sole responsibility as a business customer."),
        ],
      },
      {
        heading: "§ 8 Push notifications and campaigns to end customers", blocks: [
          p("(1) You may send push notifications and campaigns, within the scope of your booked plan, to end customers who are already customers of your business (at least one stamp collected) or who – exclusively under the Platinum plan's proximity advertising – are near your location and have granted location sharing for this purpose."),
          p("(2) You are responsible for the content and lawfulness of these campaigns, in particular compliance with the UWG, advertising labelling requirements, and the permitted frequency under the plan overview (Gold: up to 2 campaigns/month; Platinum: up to 4 campaigns/month including push). TapRadar merely provides the technical delivery infrastructure and ensures compliance with frequency limits. For more information on the allocation of responsibility under data protection law, see the privacy policy at www.tapradar.app/datenschutz."),
          p("(3) TapRadar is entitled to spot-check individual campaign content before dispatch and to reject unlawful content or content that violates these terms."),
        ],
      },
      {
        heading: "§ 9 Reviews and prohibition of manipulated reviews", blocks: [
          p("(1) Reviews may only be submitted by end customers whose visit has been verified by an actually collected stamp."),
          callout("Prohibition of fake reviews", "Under the fair-trading provisions of the UWG, as amended by the Omnibus Directive (Directive (EU) 2019/2161), it is unlawful to publish or commission fake reviews, to falsify genuine reviews, or to commission other businesses to falsify reviews. You are obliged, neither yourself nor through third parties – in particular not via your employee PIN accesses – to manipulate or purchase reviews of your own business, nor to incentivise customers in exchange for positive reviews. Violations entitle TapRadar to remove the affected reviews and to terminate the contract for good cause."),
          p("(2) You may report individual reviews via the dashboard as unlawful, insulting, or evidently untrue; TapRadar reviews every report and informs you and the reviewer of the outcome."),
        ],
      },
      {
        heading: "§ 10 Rights to content", blocks: [
          p("(1) For the duration of the contractual relationship, TapRadar grants you a simple, non-transferable right to use the platform to the extent provided for under the contract."),
          p("(2) For content you upload, such as logos, images, texts and advertising material, you grant TapRadar a simple right, limited to the contract term, to use this content as part of the agreed services, in particular for display in the app, in the QR shop-window poster, and in push notifications. You warrant that you hold the necessary rights to the uploaded content."),
          p("(3) All rights to the TapRadar software, brand and platform itself remain with TOY GmbH or its licensors."),
        ],
      },
      {
        heading: "§ 11 Access to data", blocks: [
          callout("Data access pursuant to Art. 9 P2B Regulation", "Pursuant to Art. 9 P2B Regulation, we inform you that you have access, via the dashboard, to the statistical and analytical data (basic or advanced analytics) collected under your plan regarding your own end customers, in particular regarding visit frequency, stamp and redemption data, and, under the Platinum plan, advertising-related metrics (CTR/CVR). No further access to raw personal data of individual end customers is granted; aggregated evaluation is carried out in compliance with the privacy policy."),
        ],
      },
      {
        heading: "§ 12 Internal complaint-handling and mediation", blocks: [
          callout("Complaint handling pursuant to Art. 11 and 12 P2B Regulation", "Pursuant to Art. 11 P2B Regulation, TapRadar provides you with a free internal complaint-handling system. Complaints relating to non-compliance with these terms, technical issues directly related to the provision of the service, and measures pursuant to §§ 5 and 6 may be sent to beschwerde@tapradar.app at any time. We process every complaint promptly and appropriately and inform you of the outcome in text form. Pursuant to Art. 12 P2B Regulation, we note that small businesses such as TOY GmbH may be exempt from the obligation to name specific mediators; should an amicable out-of-court settlement not be reached in an individual case, you retain unrestricted access to the ordinary courts pursuant to § 15."),
        ],
      },
      {
        heading: "§ 13 Availability and changes to the platform", blocks: [
          p("(1) TapRadar strives to ensure high availability of the platform but cannot guarantee uninterrupted availability. Maintenance work, technical faults, or further development may lead to temporary restrictions."),
          p("(2) TapRadar is entitled to adjust, supplement or discontinue individual platform features as part of its ongoing development, provided the contractually owed core scope of services is not unreasonably impaired as a result. Material changes, including changes to the ranking parameters pursuant to § 6, will be announced to you in text form at least 15 days before they take effect, unless a shorter period is required for legal or security reasons."),
        ],
      },
      {
        heading: "§ 14 Liability", blocks: [
          p("(1) TapRadar is liable without limitation for damages arising from injury to life, body or health, as well as for damages based on intent or gross negligence, and pursuant to the mandatory provisions of the Product Liability Act."),
          p("(2) For damages caused by slight negligence, TapRadar is only liable for breach of material contractual obligations (cardinal obligations), the fulfilment of which is essential for the proper performance of the contract in the first place and on whose observance you may regularly rely; in this case, liability is limited in amount to the damage typically foreseeable for this type of contract."),
          p("(3) Otherwise, liability for damages caused by slight negligence is excluded, to the extent legally permissible."),
          p("(4) TapRadar is not liable for the actions of your end customers, for the accuracy of reviews, or for lost revenue resulting from a restriction, suspension or termination of access under § 5 or § 6."),
          p("(5) The above limitations of liability apply to the same extent for the benefit of TapRadar's vicarious agents."),
        ],
      },
      {
        heading: "§ 15 Final provisions", blocks: [
          p("(1) Austrian law applies, excluding the UN Convention on Contracts for the International Sale of Goods (CISG) and the conflict-of-laws rules of private international law."),
          p("(2) The exclusive place of jurisdiction for all disputes arising from or in connection with this contract is the court with subject-matter jurisdiction for 2353 Guntramsdorf."),
          p("(3) Should individual provisions of these terms be or become invalid, the validity of the remaining provisions shall remain unaffected. The invalid provision shall be replaced by a provision that comes closest to the economic purpose of the invalid provision."),
          p("(4) There are no side agreements. Amendments and supplements to this contract require text form, unless otherwise specified in these terms."),
        ],
      },
    ],
    sourcesHeading: "Sources",
    sourcesIntro: "Official EU and Austrian sources underlying these Business Customer Terms:",
    sources: [
      { label: "Platform-to-Business Regulation (P2B Regulation), Regulation (EU) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Digital Services Act, Regulation (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Consumer Rights Directive, Directive 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Austrian Distance and Off-Premises Contracts Act (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  fr: {
    title: "Conditions générales pour clients professionnels",
    subtitle: "Conditions générales pour le tableau de bord TapRadar (clients professionnels) – TOY GmbH",
    stand: "Mise à jour : 9 août 2026 · Version 2026-08-09.2",
    intro: [
      p("TOY GmbH, dont le siège est à Guntramsdorf, en Autriche (ci-après « TapRadar », « nous »), exploite la plateforme numérique TapRadar, composée d'une application mobile gratuite pour les clients finaux (Radar, Tampon, Cartes, Home) et d'un tableau de bord payant pour les clients professionnels destiné à la fidélisation numérique de la clientèle au moyen de cartes de fidélité basées sur la technologie NFC et QR. Par l'intermédiaire du module Radar de l'application client final, TapRadar transmet vos offres, promotions et avis aux clients finaux et constitue à cet égard un service d'intermédiation en ligne au sens du règlement (UE) 2019/1150 (règlement P2B). Les présentes conditions générales pour clients professionnels régissent la relation contractuelle entre TapRadar et les entreprises qui souscrivent une formule payante (ci-après « clients professionnels »)."),
    ],
    sections: [
      {
        heading: "§ 1 Champ d'application et parties au contrat", blocks: [
          p("(1) Les présentes conditions s'appliquent exclusivement aux entreprises qui souscrivent une formule TapRadar payante (Bronze, Gold ou Platinum) dans le cadre de leur activité commerciale ou professionnelle indépendante (entrepreneurs au sens du § 1 KSchG et du § 1 UGB). Les dispositions de la loi autrichienne sur la protection des consommateurs (KSchG) ne s'appliquent donc en principe pas aux clients professionnels, dans la mesure permise par la loi."),
          p("(2) Pour les personnes physiques qui concluent pour la première fois une formule en vue de créer une entreprise (créateurs d'entreprise au sens du § 1, al. 3, KSchG), les informations relatives au droit de rétractation figurant dans la notice de rétractation destinée aux consommateurs, disponible sur www.tapradar.app/widerrufsbelehrung, s'appliquent en complément."),
          p("(3) Nous nous opposons à toute condition contraire ou divergente des présentes conditions ; ces conditions ne deviennent pas partie intégrante du contrat, sauf si TapRadar en accepte expressément et par écrit la validité."),
          p("(4) Le cocontractant est TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Autriche, numéro de TVA ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Description des prestations", blocks: [
          p("Selon la formule choisie, TapRadar met à votre disposition une plateforme numérique de fidélisation client comprenant notamment : la prise en charge des tags NFC et des codes QR pour l'attribution de tampons numériques, la création et la gestion de cartes de fidélité numériques, la visibilité dans le module Radar de l'application client final, y compris l'affichage dans les catégories et filtres (offre, bon, récompense, mieux notés, rayon de 500 m), l'affichage des avis clients vérifiés, la fourniture d'une affiche vitrine à code QR, des statistiques et analyses de base ou avancées, un système de code PIN pour employés ainsi que, selon la formule, des fonctions publicitaires et de campagne, la publicité de proximité, les notifications push aux clients finaux et des rapports."),
          p("L'étendue exacte des fonctionnalités de chaque formule résulte du tableau ci-dessous ainsi que de l'aperçu des formules publié sur www.tapradar.app/fuer-geschaefte au moment de la conclusion du contrat, lequel fait partie intégrante des présentes conditions."),
          table(
            ["Prestation", "Bronze", "Gold", "Platinum"],
            [
              ["Prix mensuel", "9,99 €", "49,99 €", "99,99 €"],
              ["Établissements", "1", "1", "1"],
              ["Accès employés", "1", "5", "15"],
              ["Tamponnage NFC/QR", "oui", "oui", "oui"],
              ["Affiche vitrine QR", "oui", "oui", "oui"],
              ["Statistiques de base", "oui", "oui", "oui"],
              ["Publicité image/PDF", "non", "2×/mois", "4×/mois"],
              ["Publicité de proximité (GPS)", "non", "non", "oui"],
              ["Notifications push", "non", "non", "oui"],
              ["Reciblage (30 jours)", "non", "non", "oui"],
              ["Analyses avancées", "non", "non", "oui"],
              ["Rapport hebdomadaire par e-mail", "non", "oui", "oui"],
              ["Rapport PDF mensuel", "non", "non", "oui"],
              ["Support", "Standard", "Standard", "Prioritaire 24h"],
            ],
          ),
          p("TapRadar ne fournit elle-même aucun bien ni service aux clients finaux de votre établissement et n'est pas partie aux transactions conclues entre vous et vos clients, notamment l'utilisation des récompenses."),
        ],
      },
      {
        heading: "§ 3 Inscription et conclusion du contrat", blocks: [
          p("(1) Le contrat de formule payante est conclu lorsque vous sélectionnez une formule au cours du processus de commande, indiquez les informations d'entreprise et de paiement requises, et finalisez la commande en cliquant sur le bouton « commander avec obligation de paiement » ou une formulation équivalente. Avant la validation de la commande, la formule, le prix total (TVA incluse), l'intervalle de facturation et les principales caractéristiques de la formule choisie sont récapitulés dans un aperçu de la commande."),
          p("(2) TapRadar confirme la conclusion du contrat en envoyant un e-mail de confirmation et en activant le tableau de bord."),
          callout("Vérification de votre identité professionnelle (Know-Your-Business-Customer)", "Conformément à l'art. 30 du règlement (UE) 2022/2065 (Digital Services Act), les exploitants de places de marché en ligne qui facilitent la conclusion de contrats entre entreprises et consommateurs sont tenus de recueillir certaines informations d'identification de leurs utilisateurs professionnels et, dans la mesure du raisonnable, d'en vérifier la plausibilité. TapRadar collecte donc au minimum, lors de l'inscription des clients professionnels : le nom et la forme juridique de l'entreprise, l'adresse, le numéro de TVA ou le numéro d'immatriculation au registre du commerce, le nom et les coordonnées de la personne habilitée à représenter l'entreprise, ainsi qu'une auto-déclaration relative à la licéité des biens et services proposés. Vous êtes tenu de fournir ces informations de manière complète et exacte et de nous informer sans délai de toute modification. Si nous prenons connaissance d'indices selon lesquels les informations fournies sont inexactes ou trompeuses, nous sommes en droit de suspendre l'accès au tableau de bord jusqu'à clarification."),
          p("(3) TapRadar se réserve le droit de refuser des inscriptions sans indication de motif, notamment en cas de soupçon fondé d'utilisation abusive, d'informations inexactes ou de violation des présentes conditions."),
        ],
      },
      {
        heading: "§ 4 Formules, prix et conditions de paiement", blocks: [
          p("(1) Les prix mensuels des formules indiqués au § 2 s'appliquent, majorés de la TVA légale le cas échéant. Les prix actuels figurent dans l'aperçu des formules disponible sur www.tapradar.app/fuer-geschaefte, qui fait foi au moment de la commande."),
          p("(2) Le traitement des paiements s'effectue via le prestataire de services de paiement Stripe. En finalisant la commande, vous autorisez TapRadar à prélever le montant de l'abonnement au début de chaque intervalle de facturation via le moyen de paiement enregistré."),
          p("(3) Si vous êtes en retard de paiement pour un montant dû, TapRadar est en droit, après relance préalable, de bloquer temporairement l'accès au tableau de bord jusqu'au règlement du montant dû ; le droit de résiliation extraordinaire pour motif grave demeure réservé."),
          p("(4) TapRadar est en droit d'adapter les prix des formules avec effet pour les intervalles de facturation futurs. Les modifications de prix vous seront communiquées par écrit au moins 30 jours avant leur entrée en vigueur. Si vous ne vous opposez pas à la modification de prix avant son entrée en vigueur, celle-ci est réputée acceptée ; en cas d'opposition, vous disposez d'un droit de résiliation extraordinaire à la date d'entrée en vigueur de la modification de prix, ce que TapRadar signalera spécifiquement dans la communication."),
        ],
      },
      {
        heading: "§ 5 Durée du contrat et résiliation", blocks: [
          p("(1) Les contrats de formule sont conclus pour une durée indéterminée et se renouvellent automatiquement pour l'intervalle de facturation convenu, généralement un mois, sauf résiliation en temps utile."),
          p("(2) Les formules mensuelles peuvent être résiliées par chacune des parties à tout moment, avec effet à la fin de l'intervalle de facturation en cours, sauf si une durée minimale différente a été convenue dans l'aperçu de la commande au moment de la conclusion du contrat. La résiliation peut être déclarée via le tableau de bord ou par e-mail à support@tapradar.app."),
          p("(3) Le droit de chacune des parties à une résiliation extraordinaire pour motif grave demeure réservé."),
          callout("Résiliation, suspension et restriction de l'accès conformément au règlement P2B", "Conformément à l'art. 4 du règlement (UE) 2019/1150 (règlement P2B), nous motivons toute décision de restreindre, suspendre ou mettre fin à votre accès au tableau de bord par un exposé des faits ou des circonstances ayant conduit à cette décision, et nous vous la communiquons avant ou au moment de la prise d'effet de la mesure, sauf si nous sommes soumis à une obligation légale ou réglementaire s'y opposant, ou en cas de péril en la demeure, par exemple en cas de violation grave ou répétée des présentes conditions ou de menace pour la sécurité de la plateforme ou de tiers. Dans ces cas exceptionnels, la motivation est fournie sans délai après la prise d'effet de la mesure."),
          p("(4) Après la fin effective de la relation contractuelle, l'accès au tableau de bord est désactivé ; les tampons et avis de clients finaux déjà collectés pour votre établissement peuvent être marqués comme inactifs dans l'application client final. Les dispositions relatives à la durée de conservation figurant dans la politique de confidentialité demeurent inchangées."),
        ],
      },
      {
        heading: "§ 6 Visibilité et classement dans le module Radar", blocks: [
          callout("Transparence des paramètres de classement conformément à l'art. 5 du règlement P2B", "L'ordre dans lequel les établissements partenaires sont affichés dans le module Radar de l'application client final dépend principalement de la distance par rapport à l'emplacement du client final, des filtres qu'il a sélectionnés (offre, bon, récompense, mieux notés, rayon de 500 m) et des catégories, de l'actualité et du nombre d'avis vérifiés, ainsi que, à titre complémentaire, de la formule souscrite, certaines fonctions de visibilité et de publicité (par exemple les campagnes mises en avant) étant réservées exclusivement aux clients Gold et Platinum. Il n'existe pas de préférence de classement rémunérée, indépendante des critères susmentionnés."),
          p("Le badge de formule affiché dans le module Radar indique aux clients finaux la formule que vous avez souscrite. TapRadar se réserve le droit d'adapter les paramètres de classement dans le cadre du développement continu de la plateforme ; les modifications substantielles seront annoncées conformément au § 13."),
        ],
      },
      {
        heading: "§ 7 Obligations des clients professionnels", blocks: [
          p("(1) Vous êtes tenu de maintenir vos coordonnées d'entreprise et de contact complètes, exactes et à jour, et de nous informer sans délai de toute modification."),
          p("(2) Vous êtes responsable de la sécurité des codes PIN des employés. Les actions effectuées via un accès employé qui vous est attribué vous sont imputées. Vous êtes tenu de désactiver sans délai les codes PIN des employés lorsque la personne concernée quitte l'entreprise."),
          p("(3) Les contenus publicitaires et de campagne téléchargés via la plateforme, tels qu'images, PDF, textes et messages push, doivent être licites et ne doivent notamment porter atteinte à aucun droit de tiers (droits d'auteur, de marque ou de la personnalité), aux dispositions du droit de la concurrence déloyale (UWG) ou à d'autres dispositions légales. Vous garantissez TapRadar contre toute réclamation de tiers résultant d'une violation de cette obligation."),
          p("(4) L'utilisation des récompenses affichées dans l'application et l'exécution des offres publicitaires vis-à-vis des clients finaux relèvent exclusivement de votre responsabilité en tant que client professionnel."),
        ],
      },
      {
        heading: "§ 8 Notifications push et campagnes destinées aux clients finaux", blocks: [
          p("(1) Vous pouvez, dans le cadre de la formule souscrite, adresser des notifications push et des campagnes aux clients finaux déjà clients de votre établissement (au moins un tampon collecté) ou qui – exclusivement dans le cadre de la publicité de proximité de la formule Platinum – se trouvent à proximité de votre établissement et ont accordé à cet effet le partage de leur localisation."),
          p("(2) Vous êtes responsable du contenu et de la licéité de ces campagnes, notamment du respect de l'UWG, du droit de l'identification publicitaire et de la fréquence autorisée selon l'aperçu des formules (Gold : jusqu'à 2 campagnes/mois ; Platinum : jusqu'à 4 campagnes/mois, y compris push). TapRadar fournit uniquement l'infrastructure technique de diffusion et veille au respect des limites de fréquence. Pour plus d'informations sur la répartition des responsabilités en matière de protection des données, voir la politique de confidentialité sur www.tapradar.app/datenschutz."),
          p("(3) TapRadar est en droit de contrôler par sondage certains contenus de campagne avant leur envoi et de refuser les contenus illicites ou contraires aux présentes conditions."),
        ],
      },
      {
        heading: "§ 9 Avis et interdiction des avis manipulés", blocks: [
          p("(1) Les avis ne peuvent être déposés que par des clients finaux dont la visite a été vérifiée par un tampon effectivement collecté."),
          callout("Interdiction des faux avis", "Conformément aux dispositions du droit de la concurrence déloyale (UWG), telles que modifiées par la directive Omnibus (directive (UE) 2019/2161), il est interdit de publier ou de commanditer de faux avis, de falsifier des avis authentiques ou de charger d'autres entreprises de falsifier des avis. Vous vous engagez, ni vous-même ni par l'intermédiaire de tiers – notamment via vos accès employés par code PIN –, à ne pas manipuler ni acheter d'avis concernant votre propre établissement, ni à inciter des clients en échange d'avis positifs. Toute violation autorise TapRadar à supprimer les avis concernés et à procéder à une résiliation extraordinaire."),
          p("(2) Vous pouvez signaler des avis individuels via le tableau de bord comme illicites, insultants ou manifestement faux ; TapRadar examine chaque signalement et vous communique le résultat, ainsi qu'à l'auteur de l'avis."),
        ],
      },
      {
        heading: "§ 10 Droits sur les contenus", blocks: [
          p("(1) TapRadar vous accorde, pour la durée de la relation contractuelle, un droit simple et non cessible d'utiliser la plateforme dans la mesure prévue contractuellement."),
          p("(2) Pour les contenus que vous téléchargez, tels que logos, images, textes et matériel publicitaire, vous accordez à TapRadar un droit simple, limité à la durée du contrat, d'utiliser ces contenus dans le cadre des prestations convenues, notamment pour l'affichage dans l'application, dans l'affiche vitrine à code QR et dans les notifications push. Vous garantissez disposer des droits nécessaires sur les contenus téléchargés."),
          p("(3) Tous les droits sur le logiciel, la marque et la plateforme TapRadar elle-même demeurent la propriété de TOY GmbH ou de ses concédants de licence."),
        ],
      },
      {
        heading: "§ 11 Accès aux données", blocks: [
          callout("Accès aux données conformément à l'art. 9 du règlement P2B", "Conformément à l'art. 9 du règlement P2B, nous vous informons que vous avez accès, via le tableau de bord, aux données statistiques et analytiques (analyses de base ou avancées) collectées dans le cadre de votre formule concernant vos propres clients finaux, notamment la fréquence des visites, les données de tampon et d'utilisation ainsi que, dans la formule Platinum, les indicateurs liés à la publicité (CTR/CVR). Aucun accès supplémentaire aux données brutes à caractère personnel de clients finaux individuels n'est accordé ; l'exploitation agrégée est effectuée dans le respect de la politique de confidentialité."),
        ],
      },
      {
        heading: "§ 12 Gestion interne des réclamations et médiation", blocks: [
          callout("Gestion des réclamations conformément aux art. 11 et 12 du règlement P2B", "Conformément à l'art. 11 du règlement P2B, TapRadar met à votre disposition un système interne gratuit de gestion des réclamations. Les réclamations relatives au non-respect des présentes conditions, aux problèmes techniques directement liés à la fourniture du service, ainsi qu'aux mesures prises conformément aux §§ 5 et 6, peuvent être adressées à tout moment à beschwerde@tapradar.app. Nous traitons chaque réclamation rapidement et de manière appropriée et vous communiquons le résultat par écrit. Conformément à l'art. 12 du règlement P2B, nous vous informons que les petites entreprises telles que TOY GmbH peuvent être exemptées de l'obligation de désigner des médiateurs spécifiques ; si un règlement amiable extrajudiciaire ne peut être trouvé dans un cas particulier, vous conservez néanmoins un accès sans restriction aux tribunaux ordinaires conformément au § 15."),
        ],
      },
      {
        heading: "§ 13 Disponibilité et modifications de la plateforme", blocks: [
          p("(1) TapRadar s'efforce d'assurer une disponibilité élevée de la plateforme, mais ne peut garantir une disponibilité ininterrompue. Les travaux de maintenance, les dysfonctionnements techniques ou le développement de la plateforme peuvent entraîner des restrictions temporaires."),
          p("(2) TapRadar est en droit d'adapter, de compléter ou de supprimer certaines fonctions de la plateforme dans le cadre de son développement continu, pour autant que le périmètre essentiel des prestations dues contractuellement n'en soit pas affecté de manière déraisonnable. Les modifications substantielles, y compris les modifications des paramètres de classement conformément au § 6, vous seront annoncées par écrit au moins 15 jours avant leur entrée en vigueur, sauf si un délai plus court est nécessaire pour des raisons juridiques ou de sécurité."),
        ],
      },
      {
        heading: "§ 14 Responsabilité", blocks: [
          p("(1) TapRadar est responsable sans limitation des dommages résultant d'une atteinte à la vie, au corps ou à la santé, ainsi que des dommages résultant d'un dol ou d'une faute lourde, et conformément aux dispositions impératives de la loi sur la responsabilité du fait des produits."),
          p("(2) Pour les dommages causés par négligence légère, TapRadar n'est responsable qu'en cas de violation d'obligations contractuelles essentielles (obligations cardinales), dont l'exécution est indispensable à la bonne exécution du contrat et sur le respect desquelles vous pouvez régulièrement compter ; dans ce cas, la responsabilité est limitée, quant à son montant, au dommage typiquement prévisible pour ce type de contrat."),
          p("(3) Pour le surplus, la responsabilité pour les dommages causés par négligence légère est exclue, dans la mesure permise par la loi."),
          p("(4) TapRadar n'est pas responsable des actes de vos clients finaux, de l'exactitude des avis, ni de la perte de chiffre d'affaires résultant d'une restriction, suspension ou résiliation de l'accès fondée sur le § 5 ou le § 6."),
          p("(5) Les limitations de responsabilité ci-dessus s'appliquent dans la même mesure au profit des auxiliaires d'exécution de TapRadar."),
        ],
      },
      {
        heading: "§ 15 Dispositions finales", blocks: [
          p("(1) Le droit autrichien s'applique, à l'exclusion de la Convention des Nations Unies sur les contrats de vente internationale de marchandises (CVIM) et des règles de conflit de lois du droit international privé."),
          p("(2) Le tribunal exclusivement compétent pour tous les litiges découlant de ce contrat ou en relation avec celui-ci est le tribunal matériellement compétent pour 2353 Guntramsdorf."),
          p("(3) Si certaines dispositions des présentes conditions sont ou deviennent invalides, la validité des autres dispositions n'en est pas affectée. La disposition invalide est remplacée par une réglementation se rapprochant le plus possible de l'objectif économique de la disposition invalide."),
          p("(4) Il n'existe aucun accord accessoire. Les modifications et compléments au présent contrat requièrent la forme écrite, sauf disposition contraire des présentes conditions."),
        ],
      },
    ],
    sourcesHeading: "Sources",
    sourcesIntro: "Sources officielles de l'UE et autrichiennes sur lesquelles reposent les présentes conditions pour clients professionnels :",
    sources: [
      { label: "Règlement Platform-to-Business (règlement P2B), règlement (UE) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Digital Services Act, règlement (UE) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Directive relative aux droits des consommateurs, directive 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Loi autrichienne sur les contrats à distance et hors établissement (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  it: {
    title: "Condizioni per i clienti commerciali",
    subtitle: "Condizioni generali per la dashboard TapRadar (clienti commerciali) – TOY GmbH",
    stand: "Aggiornamento: 9 agosto 2026 · Versione 2026-08-09.2",
    intro: [
      p("TOY GmbH, con sede a Guntramsdorf, Austria (di seguito \"TapRadar\", \"noi\"), gestisce la piattaforma digitale TapRadar, composta da un'applicazione mobile gratuita per i clienti finali (Radar, Timbro, Carte, Home) e da una dashboard a pagamento per i clienti commerciali per la fidelizzazione digitale della clientela mediante carte fedeltà basate su NFC e QR. Tramite il modulo Radar dell'app per clienti finali, TapRadar veicola le tue offerte, promozioni e recensioni ai clienti finali ed è pertanto un servizio di intermediazione online ai sensi del Regolamento (UE) 2019/1150 (Regolamento P2B). Le presenti condizioni per i clienti commerciali disciplinano il rapporto contrattuale tra TapRadar e le aziende che sottoscrivono un piano a pagamento (di seguito \"clienti commerciali\")."),
    ],
    sections: [
      {
        heading: "§ 1 Ambito di applicazione e parti contraenti", blocks: [
          p("(1) Le presenti condizioni si applicano esclusivamente alle aziende che sottoscrivono un piano TapRadar a pagamento (Bronze, Gold o Platinum) nell'ambito della loro attività commerciale o professionale autonoma (imprenditori ai sensi del § 1 KSchG e del § 1 UGB). Le disposizioni della legge austriaca sulla tutela dei consumatori (KSchG) non si applicano quindi in linea di principio ai clienti commerciali, nella misura consentita dalla legge."),
          p("(2) Per le persone fisiche che sottoscrivono per la prima volta un piano al fine di avviare un'attività (nuovi imprenditori ai sensi del § 1, comma 3, KSchG), si applicano inoltre le indicazioni relative al diritto di recesso contenute nell'informativa sul recesso per i consumatori disponibile su www.tapradar.app/widerrufsbelehrung."),
          p("(3) Ci opponiamo a qualsiasi condizione contrastante o divergente rispetto alle presenti condizioni; tali condizioni non diventano parte del contratto, salvo espresso consenso scritto di TapRadar alla loro validità."),
          p("(4) La controparte contrattuale è TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, partita IVA ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Descrizione dei servizi", blocks: [
          p("A seconda del piano scelto, TapRadar mette a disposizione una piattaforma digitale di fidelizzazione della clientela che comprende in particolare: supporto per tag NFC e codici QR per l'assegnazione di timbri digitali, creazione e gestione di carte fedeltà digitali, visibilità nel modulo Radar dell'app per clienti finali, inclusa la visualizzazione in categorie e filtri (offerta, buono, ricompensa, meglio valutati, raggio di 500 m), visualizzazione delle recensioni verificate dei clienti, fornitura di un poster vetrina con codice QR, statistiche e analisi di base o avanzate, un sistema PIN per i dipendenti nonché, a seconda del piano, funzioni pubblicitarie e di campagna, pubblicità di prossimità, notifiche push ai clienti finali e report."),
          p("L'esatto ambito delle funzioni di ciascun piano risulta dalla tabella seguente nonché dalla panoramica dei piani pubblicata su www.tapradar.app/fuer-geschaefte al momento della conclusione del contratto, che costituisce parte integrante delle presenti condizioni."),
          table(
            ["Servizio", "Bronze", "Gold", "Platinum"],
            [
              ["Prezzo mensile", "9,99 €", "49,99 €", "99,99 €"],
              ["Sedi", "1", "1", "1"],
              ["Accessi dipendenti", "1", "5", "15"],
              ["Timbratura NFC/QR", "sì", "sì", "sì"],
              ["Poster vetrina QR", "sì", "sì", "sì"],
              ["Statistiche di base", "sì", "sì", "sì"],
              ["Pubblicità immagine/PDF", "no", "2×/mese", "4×/mese"],
              ["Pubblicità di prossimità (GPS)", "no", "no", "sì"],
              ["Notifiche push", "no", "no", "sì"],
              ["Retargeting (30 giorni)", "no", "no", "sì"],
              ["Analisi avanzate", "no", "no", "sì"],
              ["Report settimanale via e-mail", "no", "sì", "sì"],
              ["Report PDF mensile", "no", "no", "sì"],
              ["Supporto", "Standard", "Standard", "Prioritario 24h"],
            ],
          ),
          p("TapRadar non fornisce essa stessa beni o servizi ai clienti finali della tua attività e non è parte delle transazioni concluse tra te e i tuoi clienti, in particolare per quanto riguarda il riscatto delle ricompense."),
        ],
      },
      {
        heading: "§ 3 Registrazione e conclusione del contratto", blocks: [
          p("(1) Il contratto per il piano a pagamento si perfeziona selezionando un piano nel processo d'ordine, fornendo i dati aziendali e di pagamento richiesti e completando l'ordine cliccando sul pulsante \"ordina con obbligo di pagamento\" o una formulazione equivalente. Prima dell'invio dell'ordine, il piano, il prezzo totale (IVA inclusa), l'intervallo di fatturazione e le principali caratteristiche del piano scelto vengono riepilogati in una panoramica dell'ordine."),
          p("(2) TapRadar conferma la conclusione del contratto inviando un'e-mail di conferma e attivando la dashboard."),
          callout("Verifica della tua identità aziendale (Know-Your-Business-Customer)", "Ai sensi dell'art. 30 del Regolamento (UE) 2022/2065 (Digital Services Act), i gestori di mercati online che facilitano la conclusione di contratti tra imprese e consumatori sono tenuti a raccogliere determinati dati identificativi dei propri utenti commerciali e, per quanto ragionevole, a verificarne la plausibilità. TapRadar raccoglie pertanto, al momento della registrazione dei clienti commerciali, almeno: ragione sociale e forma giuridica, indirizzo, partita IVA o numero di iscrizione al registro delle imprese, nome e recapiti della persona autorizzata a rappresentare l'azienda, nonché un'autodichiarazione sulla liceità dei beni e servizi offerti. Sei tenuto a fornire tali informazioni in modo completo e corretto e a comunicarci tempestivamente eventuali modifiche. Qualora venissimo a conoscenza di indizi che le informazioni fornite siano errate o fuorvianti, siamo autorizzati a sospendere l'accesso alla dashboard fino al chiarimento."),
          p("(3) TapRadar si riserva il diritto di rifiutare registrazioni senza indicazione di motivi, in particolare in caso di fondato sospetto di uso improprio, informazioni errate o violazioni delle presenti condizioni."),
        ],
      },
      {
        heading: "§ 4 Piani, prezzi e condizioni di pagamento", blocks: [
          p("(1) Si applicano i prezzi mensili dei piani indicati al § 2, maggiorati dell'IVA di legge ove applicabile. I prezzi attuali sono riportati nella panoramica dei piani su www.tapradar.app/fuer-geschaefte, valida al momento dell'ordine."),
          p("(2) L'elaborazione dei pagamenti avviene tramite il fornitore di servizi di pagamento Stripe. Completando l'ordine, autorizzi TapRadar ad addebitare l'importo dell'abbonamento all'inizio di ogni intervallo di fatturazione tramite il metodo di pagamento memorizzato."),
          p("(3) In caso di ritardo nel pagamento di un importo dovuto, TapRadar è autorizzata, previo sollecito, a bloccare temporaneamente l'accesso alla dashboard fino al saldo dell'importo dovuto; resta impregiudicato il diritto di recesso straordinario per giusta causa."),
          p("(4) TapRadar è autorizzata ad adeguare i prezzi dei piani con effetto per i futuri intervalli di fatturazione. Le variazioni di prezzo ti saranno comunicate per iscritto almeno 30 giorni prima della loro entrata in vigore. Se non ti opponi alla variazione di prezzo prima della sua entrata in vigore, la modifica si considera accettata; in caso di opposizione, hai diritto a un recesso straordinario a decorrere dalla data di efficacia della variazione di prezzo, circostanza su cui TapRadar richiamerà espressamente la tua attenzione nella comunicazione."),
        ],
      },
      {
        heading: "§ 5 Durata del contratto e recesso", blocks: [
          p("(1) I contratti relativi ai piani sono conclusi a tempo indeterminato e si rinnovano automaticamente per l'intervallo di fatturazione concordato, generalmente un mese, salvo disdetta tempestiva."),
          p("(2) I piani mensili possono essere disdetti da entrambe le parti in qualsiasi momento con effetto alla fine dell'intervallo di fatturazione in corso, salvo che nella panoramica dell'ordine al momento della conclusione del contratto sia stata concordata una durata minima diversa. La disdetta può essere comunicata tramite la dashboard o via e-mail a support@tapradar.app."),
          p("(3) Resta impregiudicato il diritto di entrambe le parti al recesso straordinario per giusta causa."),
          callout("Recesso, sospensione e limitazione dell'accesso ai sensi del Regolamento P2B", "Ai sensi dell'art. 4 del Regolamento (UE) 2019/1150 (Regolamento P2B), motiviamo ogni decisione di limitare, sospendere o porre fine al tuo accesso alla dashboard con un'esposizione dei fatti o delle circostanze che hanno condotto a tale decisione, e te la comunichiamo prima o al momento dell'efficacia della misura, salvo che siamo soggetti a un obbligo legale o regolamentare contrario, o in caso di pericolo nel ritardo, ad esempio in caso di violazione grave o ripetuta delle presenti condizioni o di minaccia alla sicurezza della piattaforma o di terzi. In tali casi eccezionali, la motivazione viene fornita senza indugio dopo l'efficacia della misura."),
          p("(4) Dopo la valida cessazione del rapporto contrattuale, l'accesso alla dashboard viene disattivato; i timbri e le recensioni dei clienti finali già raccolti per la tua attività possono essere contrassegnati come inattivi nell'app per clienti finali. Le disposizioni sui periodi di conservazione contenute nell'informativa sulla privacy restano impregiudicate."),
        ],
      },
      {
        heading: "§ 6 Visibilità e posizionamento nel modulo Radar", blocks: [
          callout("Trasparenza dei parametri di posizionamento ai sensi dell'art. 5 del Regolamento P2B", "L'ordine in cui le attività partner vengono visualizzate nel modulo Radar dell'app per clienti finali dipende principalmente dalla distanza dalla posizione del cliente finale, dai filtri da questi selezionati (offerta, buono, ricompensa, meglio valutati, raggio di 500 m) e dalle categorie, dall'attualità e dal numero di recensioni verificate, nonché, in via complementare, dal piano sottoscritto, poiché determinate funzioni di visibilità e pubblicitarie (ad esempio le campagne in evidenza) sono disponibili esclusivamente per i clienti Gold e Platinum. Non esiste alcuna preferenza di posizionamento a pagamento indipendente dai criteri sopra indicati."),
          p("Il badge del piano visualizzato nel modulo Radar indica ai clienti finali il piano da te sottoscritto. TapRadar si riserva il diritto di adeguare i parametri di posizionamento nell'ambito dello sviluppo continuo della piattaforma; le modifiche sostanziali saranno annunciate ai sensi del § 13."),
        ],
      },
      {
        heading: "§ 7 Obblighi dei clienti commerciali", blocks: [
          p("(1) Sei tenuto a mantenere i tuoi dati aziendali e di contatto completi, corretti e aggiornati e a comunicarci tempestivamente eventuali modifiche."),
          p("(2) Sei responsabile della sicurezza dei codici PIN dei dipendenti. Le azioni effettuate tramite un accesso dipendente a te attribuito ti vengono imputate. Sei tenuto a disattivare tempestivamente i PIN dei dipendenti quando la persona interessata lascia l'azienda."),
          p("(3) I contenuti pubblicitari e di campagna caricati tramite la piattaforma, come immagini, PDF, testi e messaggi push, devono essere leciti e non devono violare in particolare diritti di terzi (diritti d'autore, di marchio o della personalità), le disposizioni della legge sulla concorrenza sleale (UWG) o altre disposizioni di legge. Manlevi TapRadar da qualsiasi pretesa di terzi derivante dalla violazione di tale obbligo."),
          p("(4) Il riscatto delle ricompense visualizzate nell'app e l'adempimento delle offerte pubblicizzate nei confronti dei clienti finali sono di tua esclusiva responsabilità in qualità di cliente commerciale."),
        ],
      },
      {
        heading: "§ 8 Notifiche push e campagne rivolte ai clienti finali", blocks: [
          p("(1) Nell'ambito del piano sottoscritto, puoi inviare notifiche push e campagne a clienti finali già clienti della tua attività (almeno un timbro raccolto) o che – esclusivamente nel piano Platinum tramite la pubblicità di prossimità – si trovano nelle vicinanze della tua sede e hanno concesso a tal fine la condivisione della posizione."),
          p("(2) Sei responsabile del contenuto e della liceità di tali campagne, in particolare del rispetto dell'UWG, delle norme sull'identificazione pubblicitaria e della frequenza consentita secondo la panoramica dei piani (Gold: fino a 2 campagne/mese; Platinum: fino a 4 campagne/mese incluso push). TapRadar fornisce esclusivamente l'infrastruttura tecnica di distribuzione e garantisce il rispetto dei limiti di frequenza. Per maggiori informazioni sulla ripartizione delle responsabilità in materia di protezione dei dati, consulta l'informativa sulla privacy su www.tapradar.app/datenschutz."),
          p("(3) TapRadar è autorizzata a verificare a campione i contenuti delle campagne prima dell'invio e a rifiutare contenuti illeciti o contrari alle presenti condizioni."),
        ],
      },
      {
        heading: "§ 9 Recensioni e divieto di recensioni manipolate", blocks: [
          p("(1) Le recensioni possono essere rilasciate esclusivamente da clienti finali la cui visita sia stata verificata tramite un timbro effettivamente raccolto."),
          callout("Divieto di recensioni false", "Ai sensi delle disposizioni della legge sulla concorrenza sleale (UWG), come modificata dalla direttiva Omnibus (direttiva (UE) 2019/2161), è vietato pubblicare o commissionare recensioni false, falsificare recensioni autentiche o incaricare altre aziende di falsificare recensioni. Ti impegni, né personalmente né tramite terzi – in particolare non tramite i tuoi accessi PIN per dipendenti – a non manipolare né acquistare recensioni relative alla tua attività, né a incentivare i clienti in cambio di recensioni positive. Le violazioni autorizzano TapRadar a rimuovere le recensioni interessate e a procedere al recesso straordinario."),
          p("(2) Puoi segnalare singole recensioni tramite la dashboard come illecite, offensive o manifestamente false; TapRadar esamina ogni segnalazione e comunica l'esito sia a te sia all'autore della recensione."),
        ],
      },
      {
        heading: "§ 10 Diritti sui contenuti", blocks: [
          p("(1) TapRadar ti concede, per la durata del rapporto contrattuale, un diritto semplice e non trasferibile di utilizzare la piattaforma nella misura prevista dal contratto."),
          p("(2) Per i contenuti da te caricati, come loghi, immagini, testi e materiale pubblicitario, concedi a TapRadar un diritto semplice, limitato alla durata del contratto, di utilizzare tali contenuti nell'ambito dei servizi concordati, in particolare per la visualizzazione nell'app, nel poster vetrina QR e nelle notifiche push. Garantisci di disporre dei diritti necessari sui contenuti caricati."),
          p("(3) Tutti i diritti sul software, sul marchio e sulla piattaforma TapRadar stessa rimangono di proprietà di TOY GmbH o dei suoi licenzianti."),
        ],
      },
      {
        heading: "§ 11 Accesso ai dati", blocks: [
          callout("Accesso ai dati ai sensi dell'art. 9 del Regolamento P2B", "Ai sensi dell'art. 9 del Regolamento P2B, ti informiamo che hai accesso, tramite la dashboard, ai dati statistici e analitici (analisi di base o avanzate) raccolti nell'ambito del tuo piano relativamente ai tuoi clienti finali, in particolare frequenza delle visite, dati sui timbri e sui riscatti nonché, nel piano Platinum, metriche relative alla pubblicità (CTR/CVR). Non viene concesso alcun ulteriore accesso ai dati grezzi personali dei singoli clienti finali; la valutazione aggregata avviene nel rispetto dell'informativa sulla privacy."),
        ],
      },
      {
        heading: "§ 12 Gestione interna dei reclami e mediazione", blocks: [
          callout("Gestione dei reclami ai sensi degli artt. 11 e 12 del Regolamento P2B", "Ai sensi dell'art. 11 del Regolamento P2B, TapRadar mette a tua disposizione un sistema interno gratuito di gestione dei reclami. I reclami relativi al mancato rispetto delle presenti condizioni, a problemi tecnici direttamente connessi alla fornitura del servizio nonché a misure ai sensi dei §§ 5 e 6 possono essere inviati in qualsiasi momento a beschwerde@tapradar.app. Trattiamo ogni reclamo in modo tempestivo e adeguato e ti comunichiamo l'esito per iscritto. Ai sensi dell'art. 12 del Regolamento P2B, ti informiamo che le piccole imprese come TOY GmbH possono essere esentate dall'obbligo di designare mediatori specifici; qualora in un singolo caso non si riesca a raggiungere una composizione amichevole stragiudiziale, resta comunque impregiudicato il tuo accesso ai tribunali ordinari ai sensi del § 15."),
        ],
      },
      {
        heading: "§ 13 Disponibilità e modifiche della piattaforma", blocks: [
          p("(1) TapRadar si adopera per garantire un'elevata disponibilità della piattaforma, ma non può garantire una disponibilità ininterrotta. Interventi di manutenzione, guasti tecnici o sviluppi possono comportare limitazioni temporanee."),
          p("(2) TapRadar è autorizzata ad adeguare, integrare o dismettere singole funzioni della piattaforma nell'ambito del suo sviluppo continuo, purché ciò non pregiudichi in modo irragionevole l'ambito essenziale delle prestazioni dovute contrattualmente. Le modifiche sostanziali, incluse le modifiche dei parametri di posizionamento ai sensi del § 6, ti saranno comunicate per iscritto almeno 15 giorni prima della loro entrata in vigore, salvo che un termine più breve sia necessario per motivi legali o di sicurezza."),
        ],
      },
      {
        heading: "§ 14 Responsabilità", blocks: [
          p("(1) TapRadar risponde senza limitazioni per i danni derivanti da lesione della vita, del corpo o della salute, nonché per i danni basati su dolo o colpa grave, e ai sensi delle disposizioni imperative della legge sulla responsabilità del prodotto."),
          p("(2) Per i danni causati da colpa lieve, TapRadar risponde solo in caso di violazione di obblighi contrattuali essenziali (obblighi cardine), il cui adempimento rende possibile in primo luogo la corretta esecuzione del contratto e sul cui rispetto puoi normalmente fare affidamento; in tal caso la responsabilità è limitata, nell'importo, al danno tipicamente prevedibile per questo tipo di contratto."),
          p("(3) Per il resto, la responsabilità per i danni causati da colpa lieve è esclusa, nella misura consentita dalla legge."),
          p("(4) TapRadar non risponde delle azioni dei tuoi clienti finali, dell'esattezza delle recensioni, né della perdita di fatturato derivante da una limitazione, sospensione o cessazione dell'accesso ai sensi del § 5 o del § 6."),
          p("(5) Le suddette limitazioni di responsabilità si applicano nella stessa misura a favore degli ausiliari di TapRadar."),
        ],
      },
      {
        heading: "§ 15 Disposizioni finali", blocks: [
          p("(1) Si applica il diritto austriaco, con esclusione della Convenzione delle Nazioni Unite sui contratti di vendita internazionale di merci (CISG) e delle norme di rinvio del diritto internazionale privato."),
          p("(2) Il foro esclusivamente competente per tutte le controversie derivanti da o in connessione con il presente contratto è il tribunale territorialmente competente per 2353 Guntramsdorf."),
          p("(3) Qualora singole disposizioni delle presenti condizioni siano o divengano invalide, la validità delle restanti disposizioni non ne risulta pregiudicata. Al posto della disposizione invalida subentra una disposizione che si avvicini il più possibile allo scopo economico di quella invalida."),
          p("(4) Non esistono accordi accessori. Modifiche e integrazioni al presente contratto richiedono la forma scritta, salvo diversa disposizione delle presenti condizioni."),
        ],
      },
    ],
    sourcesHeading: "Fonti",
    sourcesIntro: "Fonti ufficiali dell'UE e austriache alla base delle presenti condizioni per i clienti commerciali:",
    sources: [
      { label: "Regolamento Platform-to-Business (Regolamento P2B), Regolamento (UE) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Digital Services Act, Regolamento (UE) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Direttiva sui diritti dei consumatori, Direttiva 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Legge austriaca sui contratti a distanza e fuori dei locali commerciali (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  cs: {
    title: "Podmínky pro obchodní zákazníky",
    subtitle: "Všeobecné obchodní podmínky pro dashboard TapRadar (obchodní zákazníci) – TOY GmbH",
    stand: "Aktualizováno: 9. srpna 2026 · Verze 2026-08-09.2",
    intro: [
      p("Společnost TOY GmbH se sídlem v Guntramsdorfu, Rakousko (dále jen „TapRadar“, „my“), provozuje digitální platformu TapRadar, kterou tvoří bezplatná mobilní aplikace pro koncové zákazníky (Radar, Razítko, Karty, Home) a placený dashboard pro obchodní zákazníky určený k digitální podpoře loajality zákazníků prostřednictvím věrnostních karet založených na technologii NFC a QR. Prostřednictvím modulu Radar aplikace pro koncové zákazníky TapRadar zprostředkovává vaše nabídky, akce a recenze koncovým zákazníkům, a v tomto ohledu představuje online zprostředkovatelskou službu ve smyslu nařízení (EU) 2019/1150 (nařízení P2B). Tyto podmínky pro obchodní zákazníky upravují smluvní vztah mezi TapRadar a podniky, které si předplatí placený tarif (dále jen „obchodní zákazníci“)."),
    ],
    sections: [
      {
        heading: "§ 1 Rozsah platnosti a smluvní strany", blocks: [
          p("(1) Tyto podmínky se vztahují výhradně na podniky, které si v rámci své podnikatelské nebo samostatné výdělečné činnosti předplatí placený tarif TapRadar (Bronze, Gold nebo Platinum) (podnikatelé ve smyslu § 1 KSchG a § 1 UGB). Ustanovení rakouského zákona o ochraně spotřebitele (KSchG) se proto na obchodní zákazníky zásadně nevztahují, pokud to zákon umožňuje."),
          p("(2) Pro fyzické osoby, které si poprvé sjednávají tarif za účelem založení podniku (nové podnikatele ve smyslu § 1 odst. 3 KSchG), platí navíc pokyny týkající se práva na odstoupení uvedené v informaci o odstoupení pro spotřebitele na www.tapradar.app/widerrufsbelehrung."),
          p("(3) Vylučujeme platnost jakýchkoli protichůdných nebo od těchto podmínek odchylných podmínek; tyto se nestávají součástí smlouvy, pokud TapRadar výslovně písemně nesouhlasí s jejich platností."),
          p("(4) Smluvní stranou je TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Rakousko, DIČ ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Popis služeb", blocks: [
          p("V závislosti na zvoleném tarifu vám TapRadar poskytuje digitální platformu pro podporu loajality zákazníků, zejména: podporu NFC tagů a QR kódů pro přidělování digitálních razítek, vytváření a správu digitálních věrnostních karet, viditelnost v modulu Radar aplikace pro koncové zákazníky včetně zobrazení v kategoriích a filtrech (akce, kupón, odměna, nejlépe hodnocené, okruh 500 m), zobrazení ověřených recenzí zákazníků, poskytnutí QR výlohového plakátu, základní, resp. rozšířené statistiky a analytiku, systém PIN pro zaměstnance a – v závislosti na tarifu – reklamní a kampaňové funkce, reklamu na základě blízkosti, push oznámení koncovým zákazníkům a reporty."),
          p("Přesný rozsah funkcí jednotlivých tarifů vyplývá z níže uvedeného přehledu a z přehledu tarifů zveřejněného na www.tapradar.app/fuer-geschaefte v okamžiku uzavření smlouvy, který je součástí těchto podmínek."),
          table(
            ["Služba", "Bronze", "Gold", "Platinum"],
            [
              ["Měsíční cena", "9,99 €", "49,99 €", "99,99 €"],
              ["Provozovny", "1", "1", "1"],
              ["Přístupy pro zaměstnance", "1", "5", "15"],
              ["Razítkování NFC/QR", "ano", "ano", "ano"],
              ["QR výlohový plakát", "ano", "ano", "ano"],
              ["Základní statistika", "ano", "ano", "ano"],
              ["Obrázková/PDF reklama", "ne", "2×/měsíc", "4×/měsíc"],
              ["Reklama na základě blízkosti (GPS)", "ne", "ne", "ano"],
              ["Push oznámení", "ne", "ne", "ano"],
              ["Retargeting (30 dní)", "ne", "ne", "ano"],
              ["Rozšířená analytika", "ne", "ne", "ano"],
              ["Týdenní e-mailový report", "ne", "ano", "ano"],
              ["Měsíční PDF report", "ne", "ne", "ano"],
              ["Podpora", "Standardní", "Standardní", "Prioritní 24h"],
            ],
          ),
          p("TapRadar sám neposkytuje žádné zboží ani služby koncovým zákazníkům vašeho podniku a není účastníkem právních vztahů vznikajících mezi vámi a vašimi zákazníky, zejména při uplatnění odměn."),
        ],
      },
      {
        heading: "§ 3 Registrace a uzavření smlouvy", blocks: [
          p("(1) Smlouva o placeném tarifu vzniká výběrem tarifu v rámci objednávkového procesu, uvedením potřebných firemních a platebních údajů a dokončením objednávky kliknutím na tlačítko „objednat s povinností platby“ nebo obdobnou formulací. Před odesláním objednávky jsou tarif, celková cena (včetně DPH), fakturační interval a hlavní vlastnosti zvoleného tarifu shrnuty v přehledu objednávky."),
          p("(2) TapRadar potvrzuje uzavření smlouvy zasláním potvrzovacího e-mailu a aktivací dashboardu."),
          callout("Ověření vaší podnikatelské identity (Know-Your-Business-Customer)", "Podle čl. 30 nařízení (EU) 2022/2065 (akt o digitálních službách) jsou provozovatelé online tržišť, kteří zprostředkovávají smlouvy mezi podniky a spotřebiteli, povinni získat určité identifikační údaje svých obchodních uživatelů a v přiměřeném rozsahu ověřit jejich věrohodnost. TapRadar proto při registraci obchodních zákazníků shromažďuje minimálně: obchodní firmu a právní formu, adresu, DIČ nebo číslo obchodního rejstříku, jméno a kontaktní údaje osoby oprávněné k zastupování, jakož i vlastní prohlášení o zákonnosti nabízeného zboží a služeb. Jste povinni uvádět tyto údaje úplně a správně a neprodleně nám sdělovat jejich změny. Pokud se dozvíme skutečnosti nasvědčující tomu, že uvedené údaje jsou nesprávné nebo zavádějící, jsme oprávněni pozastavit přístup k dashboardu až do vyjasnění."),
          p("(3) TapRadar si vyhrazuje právo odmítnout registrace bez udání důvodu, zejména při odůvodněném podezření na zneužívající užívání, nesprávné údaje nebo porušení těchto podmínek."),
        ],
      },
      {
        heading: "§ 4 Tarify, ceny a platební podmínky", blocks: [
          p("(1) Platí měsíční ceny tarifů uvedené v § 2, zvýšené o případnou zákonnou DPH. Aktuální ceny naleznete v přehledu tarifů na www.tapradar.app/fuer-geschaefte, který je rozhodný v okamžiku objednávky."),
          p("(2) Zpracování plateb probíhá prostřednictvím poskytovatele platebních služeb Stripe. Dokončením objednávky opravňujete TapRadar k inkasu příslušné částky předplatného na začátku každého fakturačního intervalu prostřednictvím uloženého platebního prostředku."),
          p("(3) Pokud se dostanete do prodlení se splatnou platbou, je TapRadar oprávněn po předchozí upomínce dočasně zablokovat přístup k dashboardu, dokud nebude dlužná částka uhrazena; právo na mimořádnou výpověď z důležitého důvodu zůstává nedotčeno."),
          p("(4) TapRadar je oprávněn upravovat ceny tarifů s účinností pro budoucí fakturační intervaly. Změny cen vám budou sděleny v textové podobě nejméně 30 dní před jejich účinností. Pokud proti změně ceny nevznesete námitku do doby její účinnosti, považuje se změna za přijatou; v případě námitky vám vzniká právo na mimořádnou výpověď k okamžiku účinnosti změny ceny, na což vás TapRadar v oznámení zvlášť upozorní."),
        ],
      },
      {
        heading: "§ 5 Doba trvání smlouvy a výpověď", blocks: [
          p("(1) Smlouvy o tarifu se uzavírají na dobu neurčitou a automaticky se prodlužují o sjednaný fakturační interval, zpravidla o jeden měsíc, pokud nejsou včas vypovězeny."),
          p("(2) Měsíční tarify mohou obě strany kdykoli vypovědět s účinností ke konci běžícího fakturačního intervalu, pokud v přehledu objednávky nebyla v okamžiku uzavření smlouvy sjednána odlišná minimální doba trvání. Výpověď lze podat prostřednictvím dashboardu nebo e-mailem na support@tapradar.app."),
          p("(3) Právo obou stran na mimořádnou výpověď z důležitého důvodu zůstává nedotčeno."),
          callout("Výpověď, pozastavení a omezení přístupu podle nařízení P2B", "Podle čl. 4 nařízení (EU) 2019/1150 (nařízení P2B) každé rozhodnutí o omezení, pozastavení nebo ukončení vašeho přístupu k dashboardu odůvodňujeme popisem skutečností nebo okolností, které k tomuto rozhodnutí vedly, a sdělujeme vám je před nebo v okamžiku nabytí účinnosti opatření, pokud nám v tom nebrání právní nebo regulatorní povinnost nebo pokud nehrozí nebezpečí z prodlení, například při závažném nebo opakovaném porušení těchto podmínek nebo při ohrožení bezpečnosti platformy či třetích osob. V těchto výjimečných případech je odůvodnění poskytnuto bez zbytečného odkladu po nabytí účinnosti opatření."),
          p("(4) Po platném ukončení smluvního vztahu je přístup k dashboardu deaktivován; již nasbíraná razítka a recenze koncových zákazníků týkající se vašeho podniku mohou být v aplikaci pro koncové zákazníky označeny jako neaktivní. Ustanovení o době uchovávání v zásadách ochrany osobních údajů zůstávají nedotčena."),
        ],
      },
      {
        heading: "§ 6 Viditelnost a pořadí v modulu Radar", blocks: [
          callout("Transparentnost parametrů řazení podle čl. 5 nařízení P2B", "Pořadí, v jakém jsou partnerské podniky zobrazovány v modulu Radar aplikace pro koncové zákazníky, se řídí především vzdáleností od polohy koncového zákazníka, jím zvolenými filtry (akce, kupón, odměna, nejlépe hodnocené, okruh 500 m) a kategoriemi, aktuálností a počtem ověřených recenzí a doplňkově zakoupeným tarifem, jelikož některé funkce viditelnosti a reklamy (např. zvýrazněné kampaně) jsou k dispozici výhradně zákazníkům s tarifem Gold a Platinum. Placené zvýhodnění pořadí nezávislé na výše uvedených kritériích neexistuje."),
          p("Odznak tarifu zobrazený v modulu Radar informuje koncové zákazníky o vámi zakoupeném tarifu. TapRadar si vyhrazuje právo upravovat parametry řazení v rámci dalšího rozvoje platformy; podstatné změny budou oznámeny podle § 13."),
        ],
      },
      {
        heading: "§ 7 Povinnosti obchodních zákazníků", blocks: [
          p("(1) Jste povinni udržovat své firemní a kontaktní údaje úplné, správné a aktuální a neprodleně nám sdělovat jejich změny."),
          p("(2) Za bezpečnost PIN kódů zaměstnanců odpovídáte vy. Jednání provedená prostřednictvím přístupu zaměstnance přiřazeného vám jsou vám přičítána. Jste povinni neprodleně deaktivovat PIN zaměstnanců při odchodu příslušné osoby."),
          p("(3) Reklamní a kampaňové obsahy nahrané prostřednictvím platformy, jako jsou obrázky, PDF, texty a push zprávy, musí být zákonné a zejména nesmí porušovat práva třetích osob (autorská, ochranné známky nebo osobnostní práva), předpisy zákona o nekalé soutěži (UWG) nebo jiná zákonná ustanovení. Zavazujete se odškodnit TapRadar za veškeré nároky třetích osob vyplývající z porušení této povinnosti."),
          p("(4) Uplatnění odměn zobrazených v aplikaci a splnění inzerovaných nabídek vůči koncovým zákazníkům je výhradně vaší odpovědností jako obchodního zákazníka."),
        ],
      },
      {
        heading: "§ 8 Push oznámení a kampaně určené koncovým zákazníkům", blocks: [
          p("(1) V rámci zakoupeného tarifu můžete zasílat push oznámení a kampaně koncovým zákazníkům, kteří jsou již zákazníky vašeho podniku (alespoň jedno nasbírané razítko) nebo kteří se – výhradně u tarifu Platinum prostřednictvím reklamy na základě blízkosti – nacházejí v blízkosti vaší provozovny a udělili k tomu sdílení polohy."),
          p("(2) Za obsah a zákonnost těchto kampaní, zejména dodržování UWG, práva na označování reklamy a povolené frekvence podle přehledu tarifů (Gold: až 2 kampaně/měsíc; Platinum: až 4 kampaně/měsíc včetně push), odpovídáte vy. TapRadar zajišťuje pouze technickou doručovací infrastrukturu a dodržování frekvenčních limitů. Podrobnosti o rozdělení odpovědnosti v oblasti ochrany osobních údajů naleznete v zásadách ochrany osobních údajů na www.tapradar.app/datenschutz."),
          p("(3) TapRadar je oprávněn před odesláním namátkově kontrolovat jednotlivé obsahy kampaní a odmítnout protiprávní obsahy nebo obsahy porušující tyto podmínky."),
        ],
      },
      {
        heading: "§ 9 Recenze a zákaz manipulovaných recenzí", blocks: [
          p("(1) Recenze mohou zadávat výhradně koncoví zákazníci, jejichž návštěva byla ověřena skutečně nasbíraným razítkem."),
          callout("Zákaz falešných recenzí", "Podle ustanovení zákona o nekalé soutěži (UWG) ve znění pozměněném směrnicí Omnibus (směrnice (EU) 2019/2161) je nepřípustné zveřejňovat nebo objednávat falešné recenze, pozměňovat pravé recenze nebo pověřovat jiné podniky falšováním recenzí. Zavazujete se, že ani vy sami, ani prostřednictvím třetích osob – zejména ne prostřednictvím přístupů PIN vašich zaměstnanců – nebudete manipulovat s recenzemi týkajícími se vašeho vlastního podniku, kupovat je ani motivovat zákazníky k pozitivním recenzím. Porušení opravňuje TapRadar k odstranění dotčených recenzí a k mimořádné výpovědi."),
          p("(2) Jednotlivé recenze můžete prostřednictvím dashboardu nahlásit jako protiprávní, urážlivé nebo zjevně nepravdivé; TapRadar každé nahlášení přezkoumá a sdělí výsledek vám i autorovi recenze."),
        ],
      },
      {
        heading: "§ 10 Práva k obsahu", blocks: [
          p("(1) TapRadar vám po dobu trvání smluvního vztahu poskytuje jednoduché, nepřevoditelné právo užívat platformu v rozsahu stanoveném smlouvou."),
          p("(2) K vámi nahranému obsahu, jako jsou loga, obrázky, texty a reklamní materiály, poskytujete TapRadar jednoduché právo, omezené na dobu trvání smlouvy, tento obsah využívat v rámci sjednaných služeb, zejména k zobrazení v aplikaci, na QR výlohovém plakátu a v push oznámeních. Zaručujete, že disponujete potřebnými právy k nahranému obsahu."),
          p("(3) Veškerá práva k softwaru, značce a samotné platformě TapRadar zůstávají společnosti TOY GmbH, resp. jejím poskytovatelům licence."),
        ],
      },
      {
        heading: "§ 11 Přístup k údajům", blocks: [
          callout("Přístup k údajům podle čl. 9 nařízení P2B", "Podle čl. 9 nařízení P2B vás informujeme, že máte prostřednictvím dashboardu přístup ke statistickým a analytickým údajům (základní, resp. rozšířená analytika) shromážděným v rámci vašeho tarifu o vašich vlastních koncových zákaznících, zejména o frekvenci návštěv, údajích o razítkách a uplatněních, a u tarifu Platinum také o metrikách souvisejících s reklamou (CTR/CVR). Další přístup k osobním nezpracovaným údajům jednotlivých koncových zákazníků není poskytován; souhrnné vyhodnocení probíhá v souladu se zásadami ochrany osobních údajů."),
        ],
      },
      {
        heading: "§ 12 Interní vyřizování stížností a mediace", blocks: [
          callout("Vyřizování stížností podle čl. 11 a 12 nařízení P2B", "Podle čl. 11 nařízení P2B vám TapRadar poskytuje bezplatný interní systém vyřizování stížností. Stížnosti týkající se nedodržování těchto podmínek, technických problémů přímo souvisejících s poskytováním služby, jakož i opatření podle §§ 5 a 6 lze kdykoli zaslat na beschwerde@tapradar.app. Každou stížnost zpracujeme včas a přiměřeně a výsledek vám sdělíme v textové podobě. Podle čl. 12 nařízení P2B vás upozorňujeme, že u malých podniků, jako je TOY GmbH, může odpadnout povinnost jmenovat konkrétní mediátory; pokud se v jednotlivém případě nepodaří dosáhnout smírného mimosoudního urovnání, zůstává vám i tak zachován přístup k obecným soudům podle § 15."),
        ],
      },
      {
        heading: "§ 13 Dostupnost a změny platformy", blocks: [
          p("(1) TapRadar usiluje o zajištění vysoké dostupnosti platformy, nemůže však zaručit nepřerušenou dostupnost. Údržbové práce, technické poruchy nebo další rozvoj mohou vést k dočasným omezením."),
          p("(2) TapRadar je oprávněn v rámci dalšího rozvoje upravovat, doplňovat nebo rušit jednotlivé funkce platformy, pokud tím není nepřiměřeně dotčen smluvně dlužený základní rozsah služeb. Podstatné změny, včetně změn parametrů řazení podle § 6, vám budou oznámeny v textové podobě nejméně 15 dní před jejich účinností, pokud kratší lhůta není nutná z právních nebo bezpečnostních důvodů."),
        ],
      },
      {
        heading: "§ 14 Odpovědnost", blocks: [
          p("(1) TapRadar odpovídá bez omezení za škody vzniklé porušením života, těla nebo zdraví, jakož i za škody způsobené úmyslně nebo hrubou nedbalostí, a podle kogentních ustanovení zákona o odpovědnosti za výrobek."),
          p("(2) Za škody způsobené lehkou nedbalostí odpovídá TapRadar pouze při porušení podstatných smluvních povinností (kardinálních povinností), jejichž splnění vůbec umožňuje řádné plnění smlouvy a na jejichž dodržování se zpravidla můžete spoléhat; v takovém případě je odpovědnost co do výše omezena na škodu typicky předvídatelnou pro tento typ smlouvy."),
          p("(3) Ve zbytku je odpovědnost za škody způsobené lehkou nedbalostí vyloučena, pokud to zákon umožňuje."),
          p("(4) TapRadar neodpovídá za jednání vašich koncových zákazníků, za správnost recenzí ani za ušlý zisk v důsledku omezení, pozastavení nebo ukončení přístupu podle § 5 nebo § 6."),
          p("(5) Výše uvedená omezení odpovědnosti platí ve stejném rozsahu ve prospěch osob, kterých TapRadar používá k plnění."),
        ],
      },
      {
        heading: "§ 15 Závěrečná ustanovení", blocks: [
          p("(1) Platí rakouské právo s vyloučením Úmluvy OSN o smlouvách o mezinárodní koupi zboží (CISG) a kolizních norem mezinárodního práva soukromého."),
          p("(2) Výlučně příslušným soudem pro všechny spory vzniklé z této smlouvy nebo v souvislosti s ní je věcně příslušný soud pro 2353 Guntramsdorf."),
          p("(3) Pokud by jednotlivá ustanovení těchto podmínek byla nebo se stala neplatnými, zůstává tím platnost ostatních ustanovení nedotčena. Namísto neplatného ustanovení nastoupí úprava, která se nejvíce blíží hospodářskému účelu neplatného ustanovení."),
          p("(4) Vedlejší ujednání neexistují. Změny a doplňky této smlouvy vyžadují textovou formu, pokud tyto podmínky nestanoví jinak."),
        ],
      },
    ],
    sourcesHeading: "Seznam zdrojů",
    sourcesIntro: "Úřední zdroje EU a Rakouska, ze kterých tyto podmínky pro obchodní zákazníky vycházejí:",
    sources: [
      { label: "Nařízení o vztazích mezi platformami a podniky (nařízení P2B), nařízení (EU) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Akt o digitálních službách, nařízení (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Směrnice o právech spotřebitelů, směrnice 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Rakouský zákon o smlouvách uzavíraných na dálku a mimo obchodní prostory (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  tr: {
    title: "İşletme Müşterisi Sözleşme Şartları",
    subtitle: "TapRadar Paneli için Genel Şartlar (İşletme Müşterileri) – TOY GmbH",
    stand: "Güncelleme: 9 Ağustos 2026 · Sürüm 2026-08-09.2",
    intro: [
      p("Merkezi Guntramsdorf, Avusturya'da bulunan TOY GmbH (bundan sonra \"TapRadar\", \"biz\" olarak anılacaktır), son kullanıcılar için ücretsiz bir mobil uygulama (Radar, Stempel, Kartlar, Home) ile NFC ve QR tabanlı dijital sadakat kartları aracılığıyla dijital müşteri sadakati sağlayan işletme müşterileri için ücretli bir panelden oluşan dijital TapRadar platformunu işletmektedir. TapRadar, son kullanıcı uygulamasının Radar modülü üzerinden tekliflerinizi, kampanyalarınızı ve değerlendirmelerinizi son kullanıcılara ulaştırır ve bu kapsamda (AB) 2019/1150 sayılı Tüzük (P2B Tüzüğü) anlamında bir çevrimiçi aracılık hizmetidir. Bu İşletme Müşterisi Sözleşme Şartları, ücretli bir plana abone olan işletmeler (bundan sonra \"işletme müşterileri\") ile TapRadar arasındaki sözleşme ilişkisini düzenler."),
    ],
    sections: [
      {
        heading: "§ 1 Kapsam ve sözleşme tarafları", blocks: [
          p("(1) Bu şartlar yalnızca, ticari veya bağımsız mesleki faaliyetleri kapsamında ücretli bir TapRadar planına (Bronze, Gold veya Platinum) abone olan işletmeler için geçerlidir (KSchG § 1 ve UGB § 1 anlamında tacirler). Bu nedenle, yasal olarak izin verildiği ölçüde, Avusturya Tüketici Koruma Kanunu (KSchG) hükümleri işletme müşterileri için genel olarak uygulanmaz."),
          p("(2) Bir işletme kurmak amacıyla ilk kez bir plana abone olan gerçek kişiler için (KSchG § 1/3 anlamında yeni girişimciler), www.tapradar.app/widerrufsbelehrung adresindeki Tüketici Cayma Bildirimi'nde yer alan cayma hakkına ilişkin açıklamalar ek olarak geçerlidir."),
          p("(3) Bu şartlarla çelişen veya bu şartlardan farklı koşullara itiraz edilir; TapRadar bunların geçerliliğini yazılı olarak açıkça kabul etmedikçe, bu koşullar sözleşmenin bir parçası haline gelmez."),
          p("(4) Sözleşme tarafı, TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Avusturya, Vergi No ATU78882167'dir."),
        ],
      },
      {
        heading: "§ 2 Hizmet tanımı", blocks: [
          p("TapRadar, seçilen plana bağlı olarak size özellikle şunları içeren dijital bir müşteri sadakati platformu sunar: dijital damga verilmesi için NFC etiketi ve QR kodu desteği, dijital sadakat kartlarının oluşturulması ve yönetimi, son kullanıcı uygulamasının Radar modülünde görünürlük (aktion, kupon, ödül, en iyi, 500 m yarıçap kategorileri ve filtrelerinde görüntülenme dahil), doğrulanmış müşteri değerlendirmelerinin görüntülenmesi, bir QR vitrin posteri sağlanması, temel veya gelişmiş istatistik ve analitik, bir çalışan PIN sistemi ve plana bağlı olarak reklam ve kampanya özellikleri, yakınlık reklamları, son kullanıcılara push bildirimleri ve raporlar."),
          p("Her planın kapsamı aşağıdaki tablodan ve sözleşmenin kurulduğu tarihte www.tapradar.app/fuer-geschaefte adresinde yayımlanan ve bu şartların bir parçası olan plan genel bakışından anlaşılır."),
          table(
            ["Hizmet", "Bronze", "Gold", "Platinum"],
            [
              ["Aylık ücret", "9,99 €", "49,99 €", "99,99 €"],
              ["Konum sayısı", "1", "1", "1"],
              ["Çalışan erişimi", "1", "5", "15"],
              ["NFC/QR damgalama", "evet", "evet", "evet"],
              ["QR vitrin posteri", "evet", "evet", "evet"],
              ["Temel istatistik", "evet", "evet", "evet"],
              ["Görsel/PDF reklam", "hayır", "ayda 2×", "ayda 4×"],
              ["Yakınlık reklamı (GPS)", "hayır", "hayır", "evet"],
              ["Push bildirimleri", "hayır", "hayır", "evet"],
              ["Yeniden hedefleme (30 gün)", "hayır", "hayır", "evet"],
              ["Gelişmiş analitik", "hayır", "hayır", "evet"],
              ["Haftalık e-posta raporu", "hayır", "evet", "evet"],
              ["Aylık PDF raporu", "hayır", "hayır", "evet"],
              ["Destek", "Standart", "Standart", "Öncelikli 24 sa."],
            ],
          ),
          p("TapRadar, işletmenizin son kullanıcılarına kendi malını veya hizmetini sunmaz ve sizinle müşterileriniz arasında kurulan işlemlere, özellikle ödüllerin kullanımına, taraf değildir."),
        ],
      },
      {
        heading: "§ 3 Kayıt ve sözleşmenin kurulması", blocks: [
          p("(1) Ücretli plan sözleşmesi, sipariş sürecinde bir plan seçmeniz, gerekli şirket ve ödeme bilgilerini girmeniz ve siparişi \"ödeme yükümlülüğü ile sipariş ver\" düğmesine veya eşdeğer bir ifadeye tıklayarak tamamlamanızla kurulur. Sipariş verilmeden önce, plan, toplam fiyat (KDV dahil), faturalandırma aralığı ve seçilen planın temel özellikleri bir sipariş özetinde bir araya getirilir."),
          p("(2) TapRadar, sözleşmenin kurulduğunu bir onay e-postası göndererek ve paneli etkinleştirerek teyit eder."),
          callout("İşletme kimliğinizin doğrulanması (Know-Your-Business-Customer)", "(AB) 2022/2065 sayılı Tüzük (Dijital Hizmetler Yasası) madde 30 uyarınca, işletmeler ile tüketiciler arasında sözleşme kurulmasına aracılık eden çevrimiçi pazar yeri işletmecileri, ticari kullanıcılarından belirli kimlik bilgilerini almak ve makul ölçüde bunların doğruluğunu kontrol etmekle yükümlüdür. Bu nedenle TapRadar, işletme müşterilerinin kaydı sırasında en az şunları toplar: şirket adı ve hukuki yapısı, adres, vergi numarası veya ticaret sicil numarası, temsile yetkili kişinin adı ve iletişim bilgileri ile sunulan mal ve hizmetlerin hukuka uygunluğuna ilişkin bir öz beyan. Bu bilgileri eksiksiz ve doğru şekilde vermekle ve değişiklikleri gecikmeksizin bildirmekle yükümlüsünüz. Verilen bilgilerin yanlış veya yanıltıcı olduğuna dair emarelerle karşılaşmamız halinde, durum netleşene kadar panele erişimi askıya alma hakkına sahibiz."),
          p("(3) TapRadar, özellikle kötüye kullanım şüphesi, yanlış bilgi veya bu şartların ihlali durumunda, gerekçe göstermeksizin kayıtları reddetme hakkını saklı tutar."),
        ],
      },
      {
        heading: "§ 4 Planlar, fiyatlar ve ödeme koşulları", blocks: [
          p("(1) § 2'de belirtilen aylık plan fiyatları, geçerli olduğu ölçüde yasal KDV eklenerek uygulanır. Güncel fiyatlar, sipariş anında geçerli olan www.tapradar.app/fuer-geschaefte adresindeki plan genel bakışından öğrenilebilir."),
          p("(2) Ödeme işlemleri, ödeme hizmet sağlayıcısı Stripe üzerinden yürütülür. Siparişi tamamlayarak, TapRadar'ı her faturalandırma döneminin başında kayıtlı ödeme yöntemi üzerinden ilgili abonelik tutarını tahsil etmeye yetkilendirmiş olursunuz."),
          p("(3) Vadesi gelen bir ödemede temerrüde düşmeniz halinde, TapRadar önceden ihtarda bulunarak, borç kapatılana kadar panele erişimi geçici olarak engelleme hakkına sahiptir; haklı nedenle olağanüstü fesih hakkı saklıdır."),
          p("(4) TapRadar, gelecekteki faturalandırma dönemleri için geçerli olmak üzere plan fiyatlarını değiştirme hakkına sahiptir. Fiyat değişiklikleri yürürlüğe girmeden en az 30 gün önce yazılı şekilde size bildirilir. Fiyat değişikliğine yürürlüğe girene kadar itiraz etmezseniz, değişiklik kabul edilmiş sayılır; itiraz halinde, fiyat değişikliğinin yürürlüğe girdiği tarihte olağanüstü fesih hakkına sahip olursunuz; TapRadar bu duruma bildirimde ayrıca dikkat çekecektir."),
        ],
      },
      {
        heading: "§ 5 Sözleşme süresi ve fesih", blocks: [
          p("(1) Plan sözleşmeleri belirsiz süreli olarak kurulur ve zamanında feshedilmediği sürece, kararlaştırılan faturalandırma aralığı (genellikle bir ay) kadar otomatik olarak uzar."),
          p("(2) Sözleşmenin kurulduğu tarihte sipariş özetinde farklı bir asgari süre kararlaştırılmadığı sürece, aylık planlar her iki taraf tarafından da her zaman cari faturalandırma döneminin sonu itibarıyla feshedilebilir. Fesih, panel üzerinden veya support@tapradar.app adresine e-posta ile bildirilebilir."),
          p("(3) Her iki tarafın haklı nedenle olağanüstü fesih hakkı saklıdır."),
          callout("P2B Tüzüğü uyarınca fesih, askıya alma ve erişim kısıtlaması", "(AB) 2019/1150 sayılı Tüzük (P2B Tüzüğü) madde 4 uyarınca, panele erişiminizi kısıtlama, askıya alma veya sonlandırma yönündeki her kararımızı, bu karara yol açan olgular veya koşullara ilişkin bir açıklamayla gerekçelendirir ve bunu, önleyici bir yasal veya düzenleyici yükümlülüğe tabi olmadığımız veya gecikmenin tehlike oluşturduğu durumlar (örn. bu şartların ağır veya tekrarlanan şekilde ihlali ya da platformun veya üçüncü kişilerin güvenliğinin tehlikeye girmesi) dışında, önlemin yürürlüğe girmesinden önce veya girdiği anda size iletiriz. Bu istisnai durumlarda gerekçe, önlemin yürürlüğe girmesinden sonra gecikmeksizin sunulur."),
          p("(4) Sözleşme ilişkisinin geçerli şekilde sona ermesinin ardından panele erişim devre dışı bırakılır; işletmenize ait daha önce toplanmış son kullanıcı damgaları ve değerlendirmeleri son kullanıcı uygulamasında etkin olmayan olarak işaretlenebilir. Gizlilik politikasındaki saklama süresi hükümleri etkilenmez."),
        ],
      },
      {
        heading: "§ 6 Radar modülünde görünürlük ve sıralama", blocks: [
          callout("P2B Tüzüğü madde 5 uyarınca sıralama parametrelerinin şeffaflığı", "İş ortaklarının son kullanıcı uygulamasının Radar modülünde görüntülenme sırası, öncelikle son kullanıcının konumuna olan uzaklığa, bu kişinin seçtiği filtrelere (aktion, kupon, ödül, en iyi, 500 m yarıçap) ve kategorilere, doğrulanmış değerlendirmelerin güncelliğine ve sayısına, ayrıca belirli görünürlük ve reklam özelliklerinin (örneğin öne çıkarılan kampanyalar) yalnızca Gold ve Platinum müşterilerine sunulması nedeniyle rezerve edilen plana göre belirlenir. Yukarıda belirtilen kriterlerden bağımsız, ücret karşılığında satın alınan bir sıralama önceliği söz konusu değildir."),
          p("Radar modülünde gösterilen plan rozeti, rezerve ettiğiniz planı son kullanıcılara işaret eder. TapRadar, platformun geliştirilmesi kapsamında sıralama parametrelerini değiştirme hakkını saklı tutar; önemli değişiklikler § 13 uyarınca duyurulur."),
        ],
      },
      {
        heading: "§ 7 İşletme müşterilerinin yükümlülükleri", blocks: [
          p("(1) Şirket ve iletişim bilgilerinizi eksiksiz, doğru ve güncel tutmak ve değişiklikleri gecikmeksizin bize bildirmekle yükümlüsünüz."),
          p("(2) Çalışan PIN kodlarının güvenliğinden siz sorumlusunuz. Size atanmış bir çalışan erişimi üzerinden gerçekleştirilen işlemler size atfedilir. İlgili kişinin işten ayrılması durumunda çalışan PIN'lerini gecikmeksizin devre dışı bırakmakla yükümlüsünüz."),
          p("(3) Platform üzerinden yüklenen görseller, PDF'ler, metinler ve push mesajları gibi reklam ve kampanya içerikleri hukuka uygun olmalı ve özellikle üçüncü kişilerin haklarını (telif, marka veya kişilik hakları), UWG'nin haksız rekabet hükümlerini veya diğer yasal düzenlemeleri ihlal etmemelidir. Bu yükümlülüğün ihlalinden kaynaklanan tüm üçüncü kişi taleplerine karşı TapRadar'ı tazmin edersiniz."),
          p("(4) Uygulamada gösterilen ödüllerin kullanımı ve son kullanıcılara karşı reklamı yapılan tekliflerin yerine getirilmesi yalnızca işletme müşterisi olarak size aittir."),
        ],
      },
      {
        heading: "§ 8 Push bildirimleri ve son kullanıcılara yönelik kampanyalar", blocks: [
          p("(1) Rezerve ettiğiniz plan kapsamında, işletmenizin zaten müşterisi olan (en az bir damga toplamış) veya yalnızca Platinum planda sunulan yakınlık reklamları aracılığıyla konumunuza yakın olan ve bunun için konum paylaşımı vermiş olan son kullanıcılara push bildirimleri ve kampanyalar gönderebilirsiniz."),
          p("(2) Bu kampanyaların içeriğinden ve hukuka uygunluğundan, özellikle UWG'ye, reklam işaretleme mevzuatına ve plan genel bakışında belirtilen izin verilen sıklığa (Gold: ayda en fazla 2 kampanya; Platinum: push dahil ayda en fazla 4 kampanya) uyulmasından siz sorumlusunuz. TapRadar yalnızca teknik teslimat altyapısını ve sıklık sınırlarına uyulmasını sağlar. Veri koruma hukuku kapsamındaki sorumluluk paylaşımı hakkında ayrıntılı bilgi için www.tapradar.app/datenschutz adresindeki gizlilik politikasına bakınız."),
          p("(3) TapRadar, gönderim öncesinde bazı kampanya içeriklerini örnekleme yoluyla inceleme ve bu şartlara aykırı veya hukuka aykırı içerikleri reddetme hakkına sahiptir."),
        ],
      },
      {
        heading: "§ 9 Değerlendirmeler ve manipüle edilmiş değerlendirmelerin yasaklanması", blocks: [
          p("(1) Değerlendirmeler yalnızca, ziyareti gerçekten toplanmış bir damgayla doğrulanmış son kullanıcılar tarafından yapılabilir."),
          callout("Sahte değerlendirme yasağı", "Omnibus Direktifi (AB (2019/2161) sayılı Direktif) ile değiştirilen UWG'nin haksız rekabet hükümleri uyarınca, sahte değerlendirmeler yayımlamak veya sipariş etmek, gerçek değerlendirmeleri tahrif etmek veya başka işletmeleri değerlendirme sahteciliği yapmakla görevlendirmek hukuka aykırıdır. Ne kendiniz ne de üçüncü kişiler aracılığıyla, özellikle çalışan PIN erişimleriniz üzerinden, kendi işletmenize ait değerlendirmeleri manipüle etmemek, satın almamak veya olumlu değerlendirmeler karşılığında müşterilere teşvik sunmamakla yükümlüsünüz. İhlaller, TapRadar'a ilgili değerlendirmeleri kaldırma ve haklı nedenle olağanüstü fesih hakkı tanır."),
          p("(2) Tekil değerlendirmeleri panel üzerinden hukuka aykırı, hakaret içeren veya açıkça asılsız olarak bildirebilirsiniz; TapRadar her bildirimi inceler ve sonucu hem size hem de değerlendirmeyi yapan kişiye bildirir."),
        ],
      },
      {
        heading: "§ 10 İçerik hakları", blocks: [
          p("(1) TapRadar, sözleşme ilişkisinin süresi boyunca size, platformu sözleşmede öngörülen kapsamda kullanma konusunda basit, devredilemez bir hak tanır."),
          p("(2) Yüklediğiniz logo, görsel, metin ve reklam malzemesi gibi içerikler için, sözleşme süresiyle sınırlı olarak, bu içerikleri kararlaştırılan hizmetler kapsamında, özellikle uygulamada, QR vitrin posterinde ve push bildirimlerinde görüntülemek amacıyla kullanma hakkını TapRadar'a basit şekilde tanırsınız. Yüklediğiniz içerikler üzerinde gerekli haklara sahip olduğunuzu garanti edersiniz."),
          p("(3) TapRadar yazılımı, markası ve platformunun kendisine ilişkin tüm haklar TOY GmbH'de veya lisans verenlerinde kalır."),
        ],
      },
      {
        heading: "§ 11 Verilere erişim", blocks: [
          callout("P2B Tüzüğü madde 9 uyarınca veri erişimi", "P2B Tüzüğü madde 9 uyarınca, planınız kapsamında toplanan ve kendi son kullanıcılarınıza ilişkin istatistik ve analiz verilerine (temel veya gelişmiş analitik), özellikle ziyaret sıklığına, damga ve kullanım verilerine ve Platinum planında reklamla ilgili metriklere (CTR/CVR) panel üzerinden erişebileceğinizi bildiririz. Bunun ötesinde, tekil son kullanıcılara ait kişisel ham verilere erişim sağlanmaz; toplu değerlendirme gizlilik politikasına uygun şekilde yapılır."),
        ],
      },
      {
        heading: "§ 12 Dahili şikâyet yönetimi ve arabuluculuk", blocks: [
          callout("P2B Tüzüğü madde 11 ve 12 uyarınca şikâyet yönetimi", "P2B Tüzüğü madde 11 uyarınca TapRadar size ücretsiz bir dahili şikâyet yönetim sistemi sunar. Bu şartlara uyulmamasıyla ilgili şikâyetler, hizmetin sunumuyla doğrudan ilgili teknik sorunlar ve §§ 5 ve 6 uyarınca alınan önlemlerle ilgili şikâyetler her zaman beschwerde@tapradar.app adresine iletilebilir. Her şikâyeti zamanında ve uygun şekilde ele alır, sonucu size yazılı olarak bildiririz. P2B Tüzüğü madde 12 uyarınca, TOY GmbH gibi küçük işletmeler için belirli arabulucuların belirlenmesi yükümlülüğünün kalkabileceğini belirtiriz; bireysel bir durumda dostane bir uzlaşmaya varılamaması halinde, § 15 uyarınca genel mahkemelere başvurma hakkınız saklıdır."),
        ],
      },
      {
        heading: "§ 13 Kullanılabilirlik ve platform değişiklikleri", blocks: [
          p("(1) TapRadar, platformun yüksek düzeyde kullanılabilirliğini sağlamaya çalışır, ancak kesintisiz kullanılabilirlik garanti edemez. Bakım çalışmaları, teknik arızalar veya geliştirme çalışmaları geçici kısıtlamalara yol açabilir."),
          p("(2) TapRadar, sözleşmeyle taahhüt edilen temel hizmet kapsamının makul olmayan şekilde etkilenmemesi kaydıyla, platformun geliştirilmesi kapsamında tek tek özellikleri değiştirme, tamamlama veya sonlandırma hakkına sahiptir. § 6 uyarınca sıralama parametrelerindeki değişiklikler de dahil olmak üzere önemli değişiklikler, hukuki veya güvenlik nedenleriyle daha kısa bir süre gerekmediği sürece, yürürlüğe girmeden en az 15 gün önce yazılı olarak size duyurulur."),
        ],
      },
      {
        heading: "§ 14 Sorumluluk", blocks: [
          p("(1) TapRadar; yaşam, beden veya sağlığın ihlalinden kaynaklanan zararlardan, kast veya ağır ihmale dayanan zararlardan ve Ürün Sorumluluğu Kanunu'nun emredici hükümlerinden doğan zararlardan sınırsız olarak sorumludur."),
          p("(2) Hafif ihmalden kaynaklanan zararlar için TapRadar, yalnızca sözleşmenin usulüne uygun ifasını mümkün kılan ve düzenli olarak güvenebileceğiniz esaslı sözleşme yükümlülüklerinin (kardinal yükümlülükler) ihlali halinde sorumludur; bu durumda sorumluluk, sözleşme türü için tipik olarak öngörülebilir zararla sınırlıdır."),
          p("(3) Bunun dışında, yasal olarak izin verildiği ölçüde, hafif ihmalden kaynaklanan zararlar için sorumluluk hariç tutulmuştur."),
          p("(4) TapRadar; son kullanıcılarınızın eylemlerinden, değerlendirmelerin doğruluğundan ve § 5 veya § 6 uyarınca erişimin kısıtlanması, askıya alınması veya sonlandırılmasından kaynaklanan gelir kayıplarından sorumlu değildir."),
          p("(5) Yukarıdaki sorumluluk sınırlamaları, TapRadar'ın yardımcı kişileri lehine de aynı ölçüde geçerlidir."),
        ],
      },
      {
        heading: "§ 15 Son hükümler", blocks: [
          p("(1) BM Satış Sözleşmesi (CISG) ve milletlerarası özel hukukun atıf kuralları hariç olmak üzere Avusturya hukuku geçerlidir."),
          p("(2) Bu sözleşmeden veya bu sözleşmeyle bağlantılı olarak doğan tüm uyuşmazlıklar için münhasır yetkili mahkeme, 2353 Guntramsdorf için maddi olarak yetkili mahkemedir."),
          p("(3) Bu şartların tek tek hükümlerinin geçersiz olması veya geçersiz hale gelmesi durumunda, diğer hükümlerin geçerliliği bundan etkilenmez. Geçersiz hükmün yerine, geçersiz hükmün ekonomik amacına en yakın düzenleme geçer."),
          p("(4) Yan anlaşma bulunmamaktadır. Bu şartlarda aksi belirtilmedikçe, bu sözleşmede yapılacak değişiklik ve eklemeler yazılı şekil şartına tabidir."),
        ],
      },
    ],
    sourcesHeading: "Kaynakça",
    sourcesIntro: "Bu İşletme Müşterisi Sözleşme Şartlarının dayandığı resmi AB ve Avusturya kaynakları:",
    sources: [
      { label: "Platform-İşletme İlişkileri Tüzüğü (P2B Tüzüğü), (AB) 2019/1150 sayılı Tüzük", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Dijital Hizmetler Yasası, (AB) 2022/2065 sayılı Tüzük", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Tüketici Hakları Direktifi, 2011/83/AB sayılı Direktif", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Avusturya Mesafeli ve İş Yeri Dışı Sözleşmeler Kanunu (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  es: {
    title: "Condiciones para clientes comerciales",
    subtitle: "Condiciones generales para el panel de TapRadar (clientes comerciales) – TOY GmbH",
    stand: "Actualizado: 9 de agosto de 2026 · Versión 2026-08-09.2",
    intro: [
      p("TOY GmbH, con domicilio en Guntramsdorf, Austria (en adelante, «TapRadar», «nosotros»), opera la plataforma digital TapRadar, compuesta por una aplicación móvil gratuita para clientes finales (Radar, Sello, Tarjetas, Home) y un panel de pago para clientes comerciales destinado a la fidelización digital de clientes mediante tarjetas de fidelidad basadas en NFC y QR. A través del módulo Radar de la aplicación para clientes finales, TapRadar difunde sus ofertas, promociones y reseñas a los clientes finales, constituyendo a este respecto un servicio de intermediación en línea en el sentido del Reglamento (UE) 2019/1150 (Reglamento P2B). Las presentes condiciones para clientes comerciales regulan la relación contractual entre TapRadar y las empresas que se suscriben a un plan de pago (en adelante, «clientes comerciales»)."),
    ],
    sections: [
      {
        heading: "§ 1 Ámbito de aplicación y partes contratantes", blocks: [
          p("(1) Estas condiciones se aplican exclusivamente a las empresas que se suscriban a un plan TapRadar de pago (Bronze, Gold o Platinum) en el marco de su actividad comercial o profesional independiente (empresarios en el sentido del § 1 KSchG y del § 1 UGB). Por tanto, las disposiciones de la Ley austriaca de protección de los consumidores (KSchG) no se aplican en principio a los clientes comerciales, en la medida permitida por la ley."),
          p("(2) Para las personas físicas que contraten por primera vez un plan con el fin de fundar una empresa (nuevos emprendedores en el sentido del § 1, apartado 3, KSchG), se aplicarán adicionalmente las indicaciones sobre el derecho de desistimiento contenidas en la información de desistimiento para consumidores disponible en www.tapradar.app/widerrufsbelehrung."),
          p("(3) Nos oponemos a cualquier condición contraria o divergente de las presentes condiciones; dichas condiciones no pasarán a formar parte del contrato, salvo que TapRadar acepte expresamente su validez por escrito."),
          p("(4) La contraparte contractual es TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, NIF-IVA ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Descripción de los servicios", blocks: [
          p("Según el plan elegido, TapRadar le proporciona una plataforma digital de fidelización de clientes que incluye, en particular: compatibilidad con etiquetas NFC y códigos QR para la asignación de sellos digitales, creación y gestión de tarjetas de fidelidad digitales, visibilidad en el módulo Radar de la aplicación para clientes finales, incluida la aparición en categorías y filtros (oferta, cupón, recompensa, mejor valorados, radio de 500 m), visualización de reseñas de clientes verificadas, un cartel de escaparate con código QR, estadísticas y análisis básicos o avanzados, un sistema de PIN para empleados y, según el plan, funciones publicitarias y de campaña, publicidad de proximidad, notificaciones push a clientes finales e informes."),
          p("El alcance exacto de las funciones de cada plan se recoge en la siguiente tabla y en el resumen de planes publicado en www.tapradar.app/fuer-geschaefte en el momento de la celebración del contrato, que forma parte integrante de las presentes condiciones."),
          table(
            ["Servicio", "Bronze", "Gold", "Platinum"],
            [
              ["Precio mensual", "9,99 €", "49,99 €", "99,99 €"],
              ["Establecimientos", "1", "1", "1"],
              ["Accesos de empleados", "1", "5", "15"],
              ["Sellado NFC/QR", "sí", "sí", "sí"],
              ["Cartel de escaparate QR", "sí", "sí", "sí"],
              ["Estadísticas básicas", "sí", "sí", "sí"],
              ["Publicidad imagen/PDF", "no", "2×/mes", "4×/mes"],
              ["Publicidad de proximidad (GPS)", "no", "no", "sí"],
              ["Notificaciones push", "no", "no", "sí"],
              ["Retargeting (30 días)", "no", "no", "sí"],
              ["Análisis avanzados", "no", "no", "sí"],
              ["Informe semanal por correo", "no", "sí", "sí"],
              ["Informe PDF mensual", "no", "no", "sí"],
              ["Soporte", "Estándar", "Estándar", "Prioritario 24h"],
            ],
          ),
          p("TapRadar no presta por sí misma bienes ni servicios a los clientes finales de su establecimiento y no es parte en las transacciones celebradas entre usted y sus clientes, en particular en lo relativo al canje de recompensas."),
        ],
      },
      {
        heading: "§ 3 Registro y celebración del contrato", blocks: [
          p("(1) El contrato del plan de pago se celebra seleccionando un plan durante el proceso de pedido, facilitando los datos de empresa y pago requeridos y completando el pedido al hacer clic en el botón «pedido con obligación de pago» o una formulación equivalente. Antes de realizar el pedido, se resumen en una vista general del pedido el plan, el precio total (IVA incluido), el intervalo de facturación y las principales características del plan elegido."),
          p("(2) TapRadar confirma la celebración del contrato mediante el envío de un correo electrónico de confirmación y la activación del panel."),
          callout("Verificación de su identidad comercial (Know-Your-Business-Customer)", "Conforme al art. 30 del Reglamento (UE) 2022/2065 (Ley de Servicios Digitales), los operadores de mercados en línea que facilitan la celebración de contratos entre empresas y consumidores están obligados a obtener determinados datos identificativos de sus usuarios comerciales y, en la medida razonable, a verificar su plausibilidad. Por ello, TapRadar recopila, como mínimo, al registrar a los clientes comerciales: nombre y forma jurídica de la empresa, dirección, NIF-IVA o número de registro mercantil, nombre y datos de contacto de la persona autorizada para representar a la empresa, así como una autodeclaración sobre la licitud de los bienes y servicios ofrecidos. Usted está obligado a proporcionar estos datos de forma completa y correcta y a comunicarnos sin demora cualquier modificación. Si tuviéramos indicios de que la información proporcionada es incorrecta o engañosa, estaremos facultados para suspender el acceso al panel hasta su aclaración."),
          p("(3) TapRadar se reserva el derecho de rechazar registros sin indicar los motivos, en particular en caso de sospecha fundada de uso indebido, información incorrecta o infracciones de las presentes condiciones."),
        ],
      },
      {
        heading: "§ 4 Planes, precios y condiciones de pago", blocks: [
          p("(1) Se aplican los precios mensuales de los planes indicados en el § 2, más el IVA legal cuando corresponda. Los precios actuales pueden consultarse en el resumen de planes en www.tapradar.app/fuer-geschaefte, que será determinante en el momento del pedido."),
          p("(2) El procesamiento de pagos se realiza a través del proveedor de servicios de pago Stripe. Al completar el pedido, usted autoriza a TapRadar a cobrar el importe de la suscripción correspondiente al inicio de cada intervalo de facturación mediante el medio de pago registrado."),
          p("(3) Si incurre en mora respecto de un pago vencido, TapRadar estará facultada, previo requerimiento, a bloquear temporalmente el acceso al panel hasta que se salde el importe pendiente; queda a salvo el derecho de resolución extraordinaria por causa justificada."),
          p("(4) TapRadar está facultada para ajustar los precios de los planes con efecto para futuros intervalos de facturación. Los cambios de precio se le comunicarán por escrito con al menos 30 días de antelación a su entrada en vigor. Si no se opone al cambio de precio antes de su entrada en vigor, este se considerará aceptado; en caso de oposición, tendrá derecho a la resolución extraordinaria en la fecha de efectividad del cambio de precio, extremo sobre el cual TapRadar le informará expresamente en la comunicación."),
        ],
      },
      {
        heading: "§ 5 Duración del contrato y resolución", blocks: [
          p("(1) Los contratos de plan se celebran por tiempo indefinido y se renuevan automáticamente por el intervalo de facturación acordado, generalmente un mes, salvo que se resuelvan a tiempo."),
          p("(2) Los planes mensuales pueden resolverse por cualquiera de las partes en cualquier momento, con efecto al final del intervalo de facturación en curso, salvo que en el resumen del pedido, en el momento de la celebración del contrato, se hubiera acordado una duración mínima distinta. La resolución puede declararse a través del panel o por correo electrónico a support@tapradar.app."),
          p("(3) Queda a salvo el derecho de cualquiera de las partes a la resolución extraordinaria por causa justificada."),
          callout("Resolución, suspensión y restricción del acceso conforme al Reglamento P2B", "Conforme al art. 4 del Reglamento (UE) 2019/1150 (Reglamento P2B), motivamos toda decisión de restringir, suspender o poner fin a su acceso al panel mediante una exposición de los hechos o circunstancias que hayan dado lugar a dicha decisión, y se la comunicamos antes o en el momento en que la medida surta efecto, salvo que estemos sujetos a una obligación legal o reglamentaria que lo impida, o exista peligro en la demora, por ejemplo en caso de infracción grave o reiterada de las presentes condiciones o de amenaza a la seguridad de la plataforma o de terceros. En estos casos excepcionales, la motivación se facilitará sin demora indebida tras la efectividad de la medida."),
          p("(4) Tras la finalización efectiva de la relación contractual, se desactivará el acceso al panel; los sellos y reseñas de clientes finales ya recopilados para su establecimiento podrán marcarse como inactivos en la aplicación para clientes finales. Las disposiciones sobre los plazos de conservación de la política de privacidad no se ven afectadas."),
        ],
      },
      {
        heading: "§ 6 Visibilidad y clasificación en el módulo Radar", blocks: [
          callout("Transparencia de los parámetros de clasificación conforme al art. 5 del Reglamento P2B", "El orden en que se muestran los establecimientos asociados en el módulo Radar de la aplicación para clientes finales depende principalmente de la distancia a la ubicación del cliente final, de los filtros seleccionados por dicha persona (oferta, cupón, recompensa, mejor valorados, radio de 500 m) y de las categorías, de la actualidad y el número de reseñas verificadas, y adicionalmente del plan contratado, ya que determinadas funciones de visibilidad y publicidad (por ejemplo, campañas destacadas) están disponibles exclusivamente para clientes Gold y Platinum. No existe una preferencia de clasificación remunerada e independiente de los criterios antes mencionados."),
          p("La insignia de plan mostrada en el módulo Radar indica a los clientes finales el plan que usted ha contratado. TapRadar se reserva el derecho de ajustar los parámetros de clasificación en el marco del desarrollo continuo de la plataforma; los cambios sustanciales se anunciarán conforme al § 13."),
        ],
      },
      {
        heading: "§ 7 Obligaciones de los clientes comerciales", blocks: [
          p("(1) Está obligado a mantener sus datos de empresa y contacto completos, correctos y actualizados, y a comunicarnos sin demora cualquier modificación."),
          p("(2) Usted es responsable de la seguridad de los códigos PIN de los empleados. Las acciones realizadas a través de un acceso de empleado que le haya sido asignado se le imputarán a usted. Está obligado a desactivar sin demora los PIN de los empleados cuando la persona correspondiente deje la empresa."),
          p("(3) Los contenidos publicitarios y de campaña cargados a través de la plataforma, como imágenes, PDF, textos y mensajes push, deben ser lícitos y no deben vulnerar, en particular, derechos de terceros (derechos de autor, de marca o de la personalidad), las disposiciones de la ley de competencia desleal (UWG) u otras disposiciones legales. Usted mantendrá indemne a TapRadar frente a cualquier reclamación de terceros derivada del incumplimiento de esta obligación."),
          p("(4) El canje de las recompensas mostradas en la aplicación y el cumplimiento de las ofertas anunciadas frente a los clientes finales son responsabilidad exclusiva suya como cliente comercial."),
        ],
      },
      {
        heading: "§ 8 Notificaciones push y campañas dirigidas a clientes finales", blocks: [
          p("(1) En el marco del plan contratado, puede dirigir notificaciones push y campañas a clientes finales que ya sean clientes de su establecimiento (al menos un sello recogido) o que —exclusivamente en el plan Platinum a través de la publicidad de proximidad— se encuentren cerca de su ubicación y hayan concedido a tal efecto el uso compartido de su ubicación."),
          p("(2) Usted es responsable del contenido y la licitud de estas campañas, en particular del cumplimiento de la UWG, del derecho de identificación publicitaria y de la frecuencia permitida según el resumen de planes (Gold: hasta 2 campañas/mes; Platinum: hasta 4 campañas/mes, incluido push). TapRadar únicamente proporciona la infraestructura técnica de distribución y garantiza el cumplimiento de los límites de frecuencia. Para más información sobre el reparto de responsabilidades en materia de protección de datos, consulte la política de privacidad en www.tapradar.app/datenschutz."),
          p("(3) TapRadar está facultada para revisar de forma aleatoria determinados contenidos de campaña antes de su envío y para rechazar contenidos ilícitos o contrarios a las presentes condiciones."),
        ],
      },
      {
        heading: "§ 9 Reseñas y prohibición de reseñas manipuladas", blocks: [
          p("(1) Las reseñas solo pueden ser publicadas por clientes finales cuya visita haya sido verificada mediante un sello efectivamente recogido."),
          callout("Prohibición de reseñas falsas", "Conforme a las disposiciones de la ley de competencia desleal (UWG), en su versión modificada por la Directiva Ómnibus (Directiva (UE) 2019/2161), está prohibido publicar o encargar reseñas falsas, falsificar reseñas auténticas o encargar a otras empresas la falsificación de reseñas. Usted se compromete a no manipular ni comprar, ni por sí mismo ni a través de terceros —en particular no a través de sus accesos de PIN de empleados—, reseñas relativas a su propio establecimiento, ni a incentivar a los clientes a cambio de reseñas positivas. Las infracciones facultan a TapRadar a eliminar las reseñas afectadas y a proceder a la resolución extraordinaria."),
          p("(2) Puede denunciar reseñas individuales a través del panel como ilícitas, ofensivas o manifiestamente falsas; TapRadar examina cada denuncia y le comunica el resultado, así como a la persona autora de la reseña."),
        ],
      },
      {
        heading: "§ 10 Derechos sobre los contenidos", blocks: [
          p("(1) TapRadar le concede, durante la vigencia de la relación contractual, un derecho simple e intransferible de uso de la plataforma en la medida prevista contractualmente."),
          p("(2) Respecto de los contenidos que usted cargue, como logotipos, imágenes, textos y material publicitario, usted concede a TapRadar un derecho simple, limitado a la duración del contrato, de utilizar dichos contenidos en el marco de los servicios acordados, en particular para su visualización en la aplicación, en el cartel de escaparate QR y en las notificaciones push. Usted garantiza disponer de los derechos necesarios sobre los contenidos cargados."),
          p("(3) Todos los derechos sobre el software, la marca y la propia plataforma TapRadar permanecen en TOY GmbH o en sus licenciantes."),
        ],
      },
      {
        heading: "§ 11 Acceso a los datos", blocks: [
          callout("Acceso a los datos conforme al art. 9 del Reglamento P2B", "Conforme al art. 9 del Reglamento P2B, le informamos de que tiene acceso, a través del panel, a los datos estadísticos y analíticos (análisis básicos o avanzados) recopilados en el marco de su plan sobre sus propios clientes finales, en particular sobre la frecuencia de visitas, los datos de sellos y canjes y, en el plan Platinum, sobre indicadores relacionados con la publicidad (CTR/CVR). No se concede ningún acceso adicional a datos personales sin procesar de clientes finales individuales; la evaluación agregada se realiza respetando la política de privacidad."),
        ],
      },
      {
        heading: "§ 12 Gestión interna de reclamaciones y mediación", blocks: [
          callout("Gestión de reclamaciones conforme a los arts. 11 y 12 del Reglamento P2B", "Conforme al art. 11 del Reglamento P2B, TapRadar pone a su disposición un sistema interno gratuito de gestión de reclamaciones. Las reclamaciones relacionadas con el incumplimiento de las presentes condiciones, con problemas técnicos directamente relacionados con la prestación del servicio, así como con medidas adoptadas conforme a los §§ 5 y 6, pueden dirigirse en cualquier momento a beschwerde@tapradar.app. Tramitamos cada reclamación con prontitud y de forma adecuada, y le comunicamos el resultado por escrito. Conforme al art. 12 del Reglamento P2B, le informamos de que las pequeñas empresas como TOY GmbH pueden estar exentas de la obligación de designar mediadores concretos; si en un caso concreto no se logra un acuerdo amistoso extrajudicial, usted conserva no obstante el acceso a los tribunales ordinarios conforme al § 15."),
        ],
      },
      {
        heading: "§ 13 Disponibilidad y modificaciones de la plataforma", blocks: [
          p("(1) TapRadar se esfuerza por garantizar una alta disponibilidad de la plataforma, pero no puede garantizar una disponibilidad ininterrumpida. Los trabajos de mantenimiento, los fallos técnicos o el desarrollo continuo pueden dar lugar a restricciones temporales."),
          p("(2) TapRadar está facultada para ajustar, complementar o suprimir determinadas funciones de la plataforma en el marco de su desarrollo continuo, siempre que ello no afecte de forma irrazonable al alcance esencial de las prestaciones debidas contractualmente. Los cambios sustanciales, incluidos los cambios en los parámetros de clasificación conforme al § 6, se le anunciarán por escrito con al menos 15 días de antelación a su entrada en vigor, salvo que sea necesario un plazo más breve por motivos legales o de seguridad."),
        ],
      },
      {
        heading: "§ 14 Responsabilidad", blocks: [
          p("(1) TapRadar responde sin limitación por los daños derivados de la lesión de la vida, el cuerpo o la salud, así como por los daños basados en dolo o negligencia grave, y conforme a las disposiciones imperativas de la Ley de responsabilidad por productos."),
          p("(2) Por los daños causados por negligencia leve, TapRadar solo responde en caso de incumplimiento de obligaciones contractuales esenciales (obligaciones cardinales), cuyo cumplimiento posibilita en primer lugar la correcta ejecución del contrato y en cuyo cumplimiento usted puede confiar habitualmente; en tal caso, la responsabilidad se limita, en su cuantía, al daño típicamente previsible para este tipo de contrato."),
          p("(3) Por lo demás, queda excluida la responsabilidad por los daños causados por negligencia leve, en la medida permitida por la ley."),
          p("(4) TapRadar no responde de los actos de sus clientes finales, de la exactitud de las reseñas, ni de la pérdida de ingresos resultante de una restricción, suspensión o finalización del acceso conforme al § 5 o al § 6."),
          p("(5) Las limitaciones de responsabilidad anteriores se aplican en la misma medida en beneficio de los auxiliares de TapRadar."),
        ],
      },
      {
        heading: "§ 15 Disposiciones finales", blocks: [
          p("(1) Se aplica el derecho austriaco, con exclusión de la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías (CISG) y de las normas de conflicto del derecho internacional privado."),
          p("(2) El tribunal exclusivamente competente para todas las controversias derivadas de este contrato o en relación con él es el tribunal materialmente competente para 2353 Guntramsdorf."),
          p("(3) Si alguna de las disposiciones de las presentes condiciones fuera o llegara a ser inválida, la validez de las restantes disposiciones no se verá afectada. La disposición inválida será sustituida por una regulación que se aproxime lo más posible a la finalidad económica de la disposición inválida."),
          p("(4) No existen acuerdos accesorios. Las modificaciones y complementos a este contrato requerirán la forma escrita, salvo que en las presentes condiciones se disponga otra cosa."),
        ],
      },
    ],
    sourcesHeading: "Fuentes",
    sourcesIntro: "Fuentes oficiales de la UE y de Austria en las que se basan las presentes condiciones para clientes comerciales:",
    sources: [
      { label: "Reglamento sobre las relaciones entre plataformas y empresas (Reglamento P2B), Reglamento (UE) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Ley de Servicios Digitales, Reglamento (UE) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Directiva sobre los derechos de los consumidores, Directiva 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Ley austriaca de contratos a distancia y celebrados fuera del establecimiento (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  pl: {
    title: "Warunki dla klientów biznesowych",
    subtitle: "Ogólne warunki korzystania z panelu TapRadar (klienci biznesowi) – TOY GmbH",
    stand: "Stan na: 9 sierpnia 2026 r. · Wersja 2026-08-09.2",
    intro: [
      p("TOY GmbH z siedzibą w Guntramsdorf w Austrii (dalej „TapRadar”, „my”) prowadzi cyfrową platformę TapRadar, składającą się z bezpłatnej aplikacji mobilnej dla klientów końcowych (Radar, Pieczątka, Karty, Home) oraz płatnego panelu dla klientów biznesowych służącego do cyfrowego budowania lojalności klientów za pomocą kart lojalnościowych opartych na technologii NFC i QR. Za pośrednictwem modułu Radar aplikacji dla klientów końcowych TapRadar udostępnia Państwa oferty, akcje i opinie klientom końcowym i w tym zakresie stanowi usługę pośrednictwa internetowego w rozumieniu rozporządzenia (UE) 2019/1150 (rozporządzenie P2B). Niniejsze warunki dla klientów biznesowych regulują stosunek umowny między TapRadar a przedsiębiorstwami, które wykupują płatny plan (dalej „klienci biznesowi”)."),
    ],
    sections: [
      {
        heading: "§ 1 Zakres obowiązywania i strony umowy", blocks: [
          p("(1) Niniejsze warunki mają zastosowanie wyłącznie do przedsiębiorstw, które w ramach swojej działalności gospodarczej lub samodzielnej działalności zawodowej wykupują płatny plan TapRadar (Bronze, Gold lub Platinum) (przedsiębiorcy w rozumieniu § 1 KSchG i § 1 UGB). Przepisy austriackiej ustawy o ochronie konsumentów (KSchG) w związku z tym co do zasady nie mają zastosowania do klientów biznesowych, o ile jest to prawnie dopuszczalne."),
          p("(2) W przypadku osób fizycznych, które po raz pierwszy wykupują plan w celu założenia przedsiębiorstwa (nowi przedsiębiorcy w rozumieniu § 1 ust. 3 KSchG), dodatkowo zastosowanie mają wskazówki dotyczące prawa odstąpienia zawarte w informacji o odstąpieniu dla konsumentów dostępnej pod adresem www.tapradar.app/widerrufsbelehrung."),
          p("(3) Sprzeciwiamy się wszelkim sprzecznym lub odbiegającym od niniejszych warunków postanowieniom; nie stają się one częścią umowy, chyba że TapRadar wyraźnie i na piśmie zaakceptuje ich obowiązywanie."),
          p("(4) Stroną umowy jest TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, numer VAT ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Opis usług", blocks: [
          p("W zależności od wybranego planu TapRadar udostępnia Państwu cyfrową platformę do budowania lojalności klientów, obejmującą w szczególności: obsługę tagów NFC i kodów QR do przyznawania cyfrowych pieczątek, tworzenie i zarządzanie cyfrowymi kartami lojalnościowymi, widoczność w module Radar aplikacji dla klientów końcowych, w tym wyświetlanie w kategoriach i filtrach (akcja, kupon, nagroda, najlepiej oceniane, promień 500 m), wyświetlanie zweryfikowanych opinii klientów, udostępnienie plakatu witrynowego z kodem QR, podstawowe lub rozszerzone statystyki i analitykę, system PIN dla pracowników oraz – w zależności od planu – funkcje reklamowe i kampanijne, reklamę opartą na bliskości, powiadomienia push dla klientów końcowych oraz raporty."),
          p("Dokładny zakres funkcji poszczególnych planów wynika z poniższej tabeli oraz z przeglądu planów opublikowanego na www.tapradar.app/fuer-geschaefte w chwili zawarcia umowy, który stanowi część niniejszych warunków."),
          table(
            ["Usługa", "Bronze", "Gold", "Platinum"],
            [
              ["Cena miesięczna", "9,99 €", "49,99 €", "99,99 €"],
              ["Lokalizacje", "1", "1", "1"],
              ["Dostępy dla pracowników", "1", "5", "15"],
              ["Pieczętowanie NFC/QR", "tak", "tak", "tak"],
              ["Plakat witrynowy QR", "tak", "tak", "tak"],
              ["Statystyki podstawowe", "tak", "tak", "tak"],
              ["Reklama graficzna/PDF", "nie", "2×/miesiąc", "4×/miesiąc"],
              ["Reklama oparta na bliskości (GPS)", "nie", "nie", "tak"],
              ["Powiadomienia push", "nie", "nie", "tak"],
              ["Retargeting (30 dni)", "nie", "nie", "tak"],
              ["Rozszerzona analityka", "nie", "nie", "tak"],
              ["Cotygodniowy raport e-mail", "nie", "tak", "tak"],
              ["Miesięczny raport PDF", "nie", "nie", "tak"],
              ["Wsparcie", "Standardowe", "Standardowe", "Priorytetowe 24h"],
            ],
          ),
          p("TapRadar nie świadczy samodzielnie żadnych towarów ani usług na rzecz klientów końcowych Państwa firmy i nie jest stroną transakcji zawieranych między Państwem a Państwa klientami, w szczególności w zakresie realizacji nagród."),
        ],
      },
      {
        heading: "§ 3 Rejestracja i zawarcie umowy", blocks: [
          p("(1) Umowa dotycząca płatnego planu zostaje zawarta poprzez wybór planu w procesie zamawiania, podanie wymaganych danych firmowych i płatniczych oraz finalizację zamówienia poprzez kliknięcie przycisku „zamów z obowiązkiem zapłaty” lub sformułowania o równoważnym znaczeniu. Przed złożeniem zamówienia plan, cena całkowita (w tym VAT), interwał rozliczeniowy oraz istotne cechy wybranego planu są podsumowywane w przeglądzie zamówienia."),
          p("(2) TapRadar potwierdza zawarcie umowy poprzez wysłanie wiadomości e-mail z potwierdzeniem oraz aktywację panelu."),
          callout("Weryfikacja Państwa tożsamości biznesowej (Know-Your-Business-Customer)", "Zgodnie z art. 30 rozporządzenia (UE) 2022/2065 (akt o usługach cyfrowych) operatorzy internetowych platform handlowych, którzy ułatwiają zawieranie umów między przedsiębiorstwami a konsumentami, są zobowiązani do pozyskiwania określonych danych identyfikacyjnych od swoich użytkowników biznesowych oraz, w rozsądnym zakresie, do weryfikacji ich wiarygodności. TapRadar zbiera zatem przy rejestracji klientów biznesowych co najmniej: nazwę firmy i formę prawną, adres, numer VAT lub numer rejestru handlowego, imię i nazwisko oraz dane kontaktowe osoby uprawnionej do reprezentacji, a także oświadczenie własne dotyczące zgodności z prawem oferowanych towarów i usług. Są Państwo zobowiązani do podania tych danych w sposób kompletny i prawidłowy oraz do niezwłocznego zgłaszania nam wszelkich zmian. Jeśli powezmiemy informacje wskazujące, że podane dane są nieprawidłowe lub wprowadzające w błąd, jesteśmy uprawnieni do zawieszenia dostępu do panelu do czasu wyjaśnienia sprawy."),
          p("(3) TapRadar zastrzega sobie prawo do odrzucenia rejestracji bez podania przyczyn, w szczególności w przypadku uzasadnionego podejrzenia nadużycia, nieprawidłowych danych lub naruszenia niniejszych warunków."),
        ],
      },
      {
        heading: "§ 4 Plany, ceny i warunki płatności", blocks: [
          p("(1) Obowiązują ceny miesięczne planów wskazane w § 2, powiększone o ustawowy VAT, o ile ma zastosowanie. Aktualne ceny znajdują się w przeglądzie planów na www.tapradar.app/fuer-geschaefte, obowiązującym w chwili złożenia zamówienia."),
          p("(2) Przetwarzanie płatności odbywa się za pośrednictwem dostawcy usług płatniczych Stripe. Finalizując zamówienie, upoważniają Państwo TapRadar do pobierania odpowiedniej kwoty subskrypcji na początku każdego okresu rozliczeniowego za pomocą zapisanego środka płatniczego."),
          p("(3) W przypadku zwłoki w płatności należnej kwoty, TapRadar jest uprawniony, po uprzednim upomnieniu, do tymczasowego zablokowania dostępu do panelu do czasu uregulowania zaległej kwoty; prawo do nadzwyczajnego wypowiedzenia z ważnego powodu pozostaje nienaruszone."),
          p("(4) TapRadar jest uprawniony do dostosowywania cen planów ze skutkiem na przyszłe okresy rozliczeniowe. O zmianach cen zostaną Państwo poinformowani w formie tekstowej co najmniej 30 dni przed ich wejściem w życie. Jeśli nie sprzeciwią się Państwo zmianie ceny przed jej wejściem w życie, zmiana uznawana jest za zaakceptowaną; w przypadku sprzeciwu przysługuje Państwu nadzwyczajne prawo wypowiedzenia ze skutkiem od dnia wejścia w życie zmiany ceny, na co TapRadar wyraźnie wskaże w powiadomieniu."),
        ],
      },
      {
        heading: "§ 5 Okres obowiązywania umowy i wypowiedzenie", blocks: [
          p("(1) Umowy dotyczące planów zawierane są na czas nieokreślony i automatycznie przedłużają się o uzgodniony okres rozliczeniowy, zazwyczaj jeden miesiąc, o ile nie zostaną wypowiedziane w odpowiednim terminie."),
          p("(2) Plany miesięczne mogą zostać wypowiedziane przez każdą ze stron w dowolnym momencie ze skutkiem na koniec bieżącego okresu rozliczeniowego, o ile w przeglądzie zamówienia w chwili zawarcia umowy nie uzgodniono innego minimalnego okresu obowiązywania. Wypowiedzenie może zostać złożone za pośrednictwem panelu lub e-mailem na adres support@tapradar.app."),
          p("(3) Prawo obu stron do nadzwyczajnego wypowiedzenia z ważnego powodu pozostaje nienaruszone."),
          callout("Wypowiedzenie, zawieszenie i ograniczenie dostępu zgodnie z rozporządzeniem P2B", "Zgodnie z art. 4 rozporządzenia (UE) 2019/1150 (rozporządzenie P2B), każdą decyzję o ograniczeniu, zawieszeniu lub zakończeniu Państwa dostępu do panelu uzasadniamy przedstawieniem faktów lub okoliczności, które doprowadziły do tej decyzji, i przekazujemy je Państwu przed lub w momencie wejścia w życie danego środka, chyba że podlegamy obowiązkowi prawnemu lub regulacyjnemu, który temu się sprzeciwia, lub istnieje zagrożenie zwłoką, np. w przypadku poważnego lub powtarzającego się naruszenia niniejszych warunków lub zagrożenia bezpieczeństwa platformy lub osób trzecich. W tych wyjątkowych przypadkach uzasadnienie zostanie przedstawione niezwłocznie po wejściu w życie danego środka."),
          p("(4) Po skutecznym zakończeniu stosunku umownego dostęp do panelu zostaje dezaktywowany; zebrane wcześniej pieczątki i opinie klientów końcowych dotyczące Państwa firmy mogą zostać oznaczone jako nieaktywne w aplikacji dla klientów końcowych. Postanowienia dotyczące okresów przechowywania zawarte w polityce prywatności pozostają nienaruszone."),
        ],
      },
      {
        heading: "§ 6 Widoczność i ranking w module Radar", blocks: [
          callout("Przejrzystość parametrów rankingu zgodnie z art. 5 rozporządzenia P2B", "Kolejność, w jakiej firmy partnerskie są wyświetlane w module Radar aplikacji dla klientów końcowych, zależy przede wszystkim od odległości od lokalizacji klienta końcowego, wybranych przez niego filtrów (akcja, kupon, nagroda, najlepiej oceniane, promień 500 m) i kategorii, aktualności i liczby zweryfikowanych opinii, a dodatkowo od wykupionego planu, ponieważ niektóre funkcje widoczności i reklamowe (np. wyróżnione kampanie) są dostępne wyłącznie dla klientów Gold i Platinum. Nie ma miejsca płatne uprzywilejowanie w rankingu niezależne od wyżej wymienionych kryteriów."),
          p("Odznaka planu wyświetlana w module Radar wskazuje klientom końcowym wykupiony przez Państwa plan. TapRadar zastrzega sobie prawo do dostosowania parametrów rankingu w ramach dalszego rozwoju platformy; istotne zmiany zostaną zapowiedziane zgodnie z § 13."),
        ],
      },
      {
        heading: "§ 7 Obowiązki klientów biznesowych", blocks: [
          p("(1) Są Państwo zobowiązani do utrzymywania swoich danych firmowych i kontaktowych w kompletnej, prawidłowej i aktualnej formie oraz do niezwłocznego zgłaszania nam zmian."),
          p("(2) Odpowiadają Państwo za bezpieczeństwo kodów PIN pracowników. Działania podejmowane za pośrednictwem przypisanego Państwu dostępu pracownika są Państwu przypisywane. Są Państwo zobowiązani do niezwłocznej dezaktywacji PIN-ów pracowników w przypadku odejścia danej osoby."),
          p("(3) Treści reklamowe i kampanijne przesyłane za pośrednictwem platformy, takie jak obrazy, pliki PDF, teksty i wiadomości push, muszą być zgodne z prawem i nie mogą w szczególności naruszać praw osób trzecich (praw autorskich, znaków towarowych lub dóbr osobistych), przepisów ustawy o zwalczaniu nieuczciwej konkurencji (UWG) ani innych przepisów prawa. Zwolnią Państwo TapRadar z wszelkich roszczeń osób trzecich wynikających z naruszenia tego obowiązku."),
          p("(4) Realizacja nagród wyświetlanych w aplikacji oraz wypełnienie reklamowanych ofert wobec klientów końcowych leży wyłącznie po Państwa stronie jako klienta biznesowego."),
        ],
      },
      {
        heading: "§ 8 Powiadomienia push i kampanie skierowane do klientów końcowych", blocks: [
          p("(1) W ramach wykupionego planu mogą Państwo kierować powiadomienia push i kampanie do klientów końcowych, którzy są już klientami Państwa firmy (co najmniej jedna zebrana pieczątka) lub którzy – wyłącznie w planie Platinum za pośrednictwem reklamy opartej na bliskości – znajdują się w pobliżu Państwa lokalizacji i wyrazili na to zgodę poprzez udostępnienie lokalizacji."),
          p("(2) Odpowiadają Państwo za treść i zgodność z prawem tych kampanii, w szczególności za przestrzeganie UWG, przepisów dotyczących oznaczania reklam oraz dopuszczalnej częstotliwości zgodnie z przeglądem planów (Gold: do 2 kampanii/miesiąc; Platinum: do 4 kampanii/miesiąc, w tym push). TapRadar zapewnia wyłącznie techniczną infrastrukturę dostarczania oraz przestrzeganie limitów częstotliwości. Więcej informacji na temat podziału odpowiedzialności w zakresie ochrony danych znajdą Państwo w polityce prywatności na www.tapradar.app/datenschutz."),
          p("(3) TapRadar jest uprawniony do wyrywkowej kontroli poszczególnych treści kampanii przed wysyłką oraz do odrzucenia treści niezgodnych z prawem lub naruszających niniejsze warunki."),
        ],
      },
      {
        heading: "§ 9 Opinie i zakaz manipulowania opiniami", blocks: [
          p("(1) Opinie mogą być wystawiane wyłącznie przez klientów końcowych, których wizyta została zweryfikowana faktycznie zebraną pieczątką."),
          callout("Zakaz fałszywych opinii", "Zgodnie z przepisami ustawy o zwalczaniu nieuczciwej konkurencji (UWG), zmienionymi dyrektywą Omnibus (dyrektywa (UE) 2019/2161), niedozwolone jest publikowanie lub zlecanie publikacji fałszywych opinii, fałszowanie prawdziwych opinii lub zlecanie innym przedsiębiorstwom fałszowania opinii. Zobowiązują się Państwo, ani samodzielnie, ani za pośrednictwem osób trzecich – w szczególności nie za pośrednictwem dostępów PIN pracowników – do niemanipulowania ani niekupowania opinii dotyczących własnej firmy, ani do nienagradzania klientów w zamian za pozytywne opinie. Naruszenia uprawniają TapRadar do usunięcia odpowiednich opinii oraz do nadzwyczajnego wypowiedzenia umowy."),
          p("(2) Mogą Państwo zgłaszać poszczególne opinie za pośrednictwem panelu jako niezgodne z prawem, obraźliwe lub w oczywisty sposób nieprawdziwe; TapRadar sprawdza każde zgłoszenie i informuje o wyniku zarówno Państwa, jak i autora opinii."),
        ],
      },
      {
        heading: "§ 10 Prawa do treści", blocks: [
          p("(1) TapRadar udziela Państwu na czas trwania stosunku umownego zwykłego, niezbywalnego prawa do korzystania z platformy w zakresie przewidzianym umową."),
          p("(2) W odniesieniu do przesłanych przez Państwa treści, takich jak logotypy, obrazy, teksty i materiały reklamowe, udzielają Państwo TapRadar zwykłego, ograniczonego do czasu trwania umowy prawa do wykorzystywania tych treści w ramach uzgodnionych usług, w szczególności do wyświetlania w aplikacji, w plakacie witrynowym QR oraz w powiadomieniach push. Zapewniają Państwo, że dysponują niezbędnymi prawami do przesłanych treści."),
          p("(3) Wszelkie prawa do oprogramowania, marki i samej platformy TapRadar pozostają przy TOY GmbH lub jej licencjodawcach."),
        ],
      },
      {
        heading: "§ 11 Dostęp do danych", blocks: [
          callout("Dostęp do danych zgodnie z art. 9 rozporządzenia P2B", "Zgodnie z art. 9 rozporządzenia P2B informujemy Państwa, że za pośrednictwem panelu mają Państwo dostęp do danych statystycznych i analitycznych (podstawowa lub rozszerzona analityka) gromadzonych w ramach Państwa planu dotyczących własnych klientów końcowych, w szczególności częstotliwości wizyt, danych o pieczątkach i realizacjach oraz – w planie Platinum – wskaźników związanych z reklamą (CTR/CVR). Nie udziela się dalszego dostępu do surowych danych osobowych poszczególnych klientów końcowych; zagregowana analiza odbywa się z poszanowaniem polityki prywatności."),
        ],
      },
      {
        heading: "§ 12 Wewnętrzne zarządzanie skargami i mediacja", blocks: [
          callout("Zarządzanie skargami zgodnie z art. 11 i 12 rozporządzenia P2B", "Zgodnie z art. 11 rozporządzenia P2B TapRadar udostępnia Państwu bezpłatny wewnętrzny system rozpatrywania skarg. Skargi dotyczące nieprzestrzegania niniejszych warunków, problemów technicznych bezpośrednio związanych ze świadczeniem usługi oraz środków podjętych zgodnie z §§ 5 i 6 mogą Państwo w każdej chwili kierować na adres beschwerde@tapradar.app. Każdą skargę rozpatrujemy niezwłocznie i odpowiednio oraz informujemy Państwa o wyniku w formie tekstowej. Zgodnie z art. 12 rozporządzenia P2B informujemy, że małe przedsiębiorstwa takie jak TOY GmbH mogą być zwolnione z obowiązku wskazania konkretnych mediatorów; jeśli w indywidualnym przypadku nie uda się osiągnąć polubownego pozasądowego rozstrzygnięcia, przysługuje Państwu mimo to dostęp do sądów powszechnych zgodnie z § 15."),
        ],
      },
      {
        heading: "§ 13 Dostępność i zmiany platformy", blocks: [
          p("(1) TapRadar dokłada starań, aby zapewnić wysoką dostępność platformy, jednak nie może zagwarantować nieprzerwanej dostępności. Prace konserwacyjne, awarie techniczne lub dalszy rozwój mogą prowadzić do tymczasowych ograniczeń."),
          p("(2) TapRadar jest uprawniony do dostosowywania, uzupełniania lub wycofywania poszczególnych funkcji platformy w ramach jej dalszego rozwoju, o ile nie wpływa to w nieuzasadniony sposób na istotny zakres usług należnych zgodnie z umową. Istotne zmiany, w tym zmiany parametrów rankingu zgodnie z § 6, zostaną Państwu zapowiedziane w formie tekstowej co najmniej 15 dni przed ich wejściem w życie, o ile krótszy termin nie jest konieczny z przyczyn prawnych lub bezpieczeństwa."),
        ],
      },
      {
        heading: "§ 14 Odpowiedzialność", blocks: [
          p("(1) TapRadar odpowiada bez ograniczeń za szkody wynikające z naruszenia życia, ciała lub zdrowia, a także za szkody wynikające z umyślnego działania lub rażącego niedbalstwa, oraz zgodnie z bezwzględnie obowiązującymi przepisami ustawy o odpowiedzialności za produkt."),
          p("(2) Za szkody spowodowane lekkim niedbalstwem TapRadar odpowiada wyłącznie w przypadku naruszenia istotnych obowiązków umownych (obowiązków kardynalnych), których spełnienie w ogóle umożliwia prawidłowe wykonanie umowy i na których przestrzeganiu mogą Państwo regularnie polegać; w takim przypadku odpowiedzialność jest ograniczona co do wysokości do szkody typowo przewidywalnej dla tego rodzaju umowy."),
          p("(3) Poza tym odpowiedzialność za szkody spowodowane lekkim niedbalstwem jest wyłączona, o ile jest to prawnie dopuszczalne."),
          p("(4) TapRadar nie odpowiada za działania Państwa klientów końcowych, za prawidłowość opinii ani za utracone obroty wynikające z ograniczenia, zawieszenia lub zakończenia dostępu zgodnie z § 5 lub § 6."),
          p("(5) Powyższe ograniczenia odpowiedzialności obowiązują w tym samym zakresie na korzyść osób, którymi TapRadar posługuje się przy wykonaniu zobowiązania."),
        ],
      },
      {
        heading: "§ 15 Postanowienia końcowe", blocks: [
          p("(1) Obowiązuje prawo austriackie, z wyłączeniem Konwencji Narodów Zjednoczonych o umowach międzynarodowej sprzedaży towarów (CISG) oraz norm kolizyjnych prawa prywatnego międzynarodowego."),
          p("(2) Wyłącznie właściwym sądem dla wszelkich sporów wynikających z niniejszej umowy lub z nią związanych jest sąd rzeczowo właściwy dla 2353 Guntramsdorf."),
          p("(3) Jeżeli poszczególne postanowienia niniejszych warunków są lub staną się nieważne, nie wpływa to na ważność pozostałych postanowień. Na miejsce nieważnego postanowienia wchodzi regulacja najbardziej zbliżona do celu gospodarczego nieważnego postanowienia."),
          p("(4) Nie istnieją ustalenia dodatkowe. Zmiany i uzupełnienia niniejszej umowy wymagają formy tekstowej, o ile w niniejszych warunkach nie postanowiono inaczej."),
        ],
      },
    ],
    sourcesHeading: "Wykaz źródeł",
    sourcesIntro: "Oficjalne źródła unijne i austriackie, na których opierają się niniejsze warunki dla klientów biznesowych:",
    sources: [
      { label: "Rozporządzenie w sprawie relacji między platformami a przedsiębiorstwami (rozporządzenie P2B), rozporządzenie (UE) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Akt o usługach cyfrowych, rozporządzenie (UE) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Dyrektywa w sprawie praw konsumentów, dyrektywa 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Austriacka ustawa o umowach zawieranych na odległość i poza lokalem przedsiębiorstwa (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  hu: {
    title: "Üzleti ügyfél ÁSZF",
    subtitle: "Általános Szerződési Feltételek a TapRadar irányítópulthoz (üzleti ügyfelek) – TOY GmbH",
    stand: "Frissítve: 2026. augusztus 9. · 2026-08-09.2 verzió",
    intro: [
      p("A guntramsdorfi (Ausztria) székhelyű TOY GmbH (a továbbiakban „TapRadar”, „mi”) üzemelteti a TapRadar digitális platformot, amely egy ingyenes mobilalkalmazásból (Radar, Bélyegző, Kártyák, Home) áll a végfelhasználók számára, valamint egy fizetős irányítópultból az üzleti ügyfelek számára, amely NFC- és QR-alapú digitális hűségkártyák segítségével biztosítja az ügyfélhűség digitális kezelését. A végfelhasználói alkalmazás Radar moduljának segítségével a TapRadar közvetíti az Ön ajánlatait, akcióit és értékeléseit a végfelhasználók felé, és ebben a tekintetben az (EU) 2019/1150 rendelet (P2B-rendelet) értelmében online közvetítő szolgáltatásnak minősül. Ez az üzleti ügyfél ÁSZF szabályozza a TapRadar és a fizetős csomagra előfizető vállalkozások (a továbbiakban „üzleti ügyfelek”) közötti szerződéses jogviszonyt."),
    ],
    sections: [
      {
        heading: "§ 1 Hatály és szerződő felek", blocks: [
          p("(1) Ez az ÁSZF kizárólag olyan vállalkozásokra vonatkozik, amelyek kereskedelmi vagy önálló szakmai tevékenységük keretében fizetős TapRadar csomagra (Bronze, Gold vagy Platinum) fizetnek elő (a KSchG 1. §-a és az UGB 1. §-a szerinti vállalkozók). A rakósztrák fogyasztóvédelmi törvény (KSchG) rendelkezései ezért az üzleti ügyfelekre főszabály szerint nem alkalmazandók, amennyiben ezt a jog megengedi."),
          p("(2) Azon természetes személyek esetében, akik vállalkozás alapítása céljából első alkalommal kötnek csomagot (a KSchG 1. § (3) bekezdése szerinti vállalkozásalapítók), kiegészítő jelleggel alkalmazandók a www.tapradar.app/widerrufsbelehrung oldalon elérhető fogyasztói elállási tájékoztatóban foglalt, elállási jogra vonatkozó tudnivalók."),
          p("(3) Az ezen ÁSZF-fel ellentétes vagy attól eltérő feltételeket kifogásoljuk; ezek nem válnak a szerződés részévé, kivéve, ha a TapRadar kifejezetten, írásban elfogadja azok érvényességét."),
          p("(4) A szerződő fél a TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Ausztria, adószám: ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Szolgáltatásleírás", blocks: [
          p("A választott csomagtól függően a TapRadar egy digitális ügyfélhűség-platformot biztosít Önnek, amely különösen a következőket tartalmazza: NFC-címke- és QR-kód-támogatás digitális bélyegzők kiadásához, digitális hűségkártyák létrehozása és kezelése, láthatóság a végfelhasználói alkalmazás Radar moduljában, ideértve a kategóriákban és szűrőkben (akció, kupon, jutalom, legjobbra értékelt, 500 m-es körzet) történő megjelenítést, ellenőrzött ügyfélértékelések megjelenítése, egy QR-kódos kirakati poszter biztosítása, alap-, illetve bővített statisztika és analitika, alkalmazotti PIN-rendszer, valamint – csomagtól függően – reklám- és kampányfunkciók, közelségi hirdetés, push értesítések a végfelhasználóknak és jelentések."),
          p("Az egyes csomagok pontos funkcióterjedelme az alábbi táblázatból, valamint a szerződéskötés időpontjában a www.tapradar.app/fuer-geschaefte oldalon közzétett csomagáttekintésből következik, amely ezen ÁSZF részét képezi."),
          table(
            ["Szolgáltatás", "Bronze", "Gold", "Platinum"],
            [
              ["Havi ár", "9,99 €", "49,99 €", "99,99 €"],
              ["Telephelyek", "1", "1", "1"],
              ["Alkalmazotti hozzáférések", "1", "5", "15"],
              ["NFC/QR bélyegzés", "igen", "igen", "igen"],
              ["QR kirakati poszter", "igen", "igen", "igen"],
              ["Alapstatisztika", "igen", "igen", "igen"],
              ["Kép-/PDF-reklám", "nem", "2×/hó", "4×/hó"],
              ["Közelségi hirdetés (GPS)", "nem", "nem", "igen"],
              ["Push értesítések", "nem", "nem", "igen"],
              ["Retargeting (30 nap)", "nem", "nem", "igen"],
              ["Bővített analitika", "nem", "nem", "igen"],
              ["Heti e-mail jelentés", "nem", "igen", "igen"],
              ["Havi PDF-jelentés", "nem", "nem", "igen"],
              ["Támogatás", "Standard", "Standard", "Prioritás 24h"],
            ],
          ),
          p("A TapRadar maga nem nyújt semmilyen árut vagy szolgáltatást az Ön vállalkozásának végfelhasználói számára, és nem részes fele az Ön és ügyfelei között létrejövő jogügyleteknek, különösen a jutalmak beváltásának."),
        ],
      },
      {
        heading: "§ 3 Regisztráció és a szerződés létrejötte", blocks: [
          p("(1) A fizetős csomagra vonatkozó szerződés úgy jön létre, hogy a megrendelési folyamat során kiválaszt egy csomagot, megadja a szükséges céges és fizetési adatokat, és a megrendelést a „fizetési kötelezettséggel járó megrendelés” gombra vagy azzal egyenértékű megfogalmazásra kattintva véglegesíti. A megrendelés leadása előtt a csomag, a teljes ár (áfával együtt), a számlázási időszak és a választott csomag lényeges jellemzői egy megrendelési összegzésben kerülnek összefoglalásra."),
          p("(2) A TapRadar a szerződés létrejöttét egy visszaigazoló e-mail elküldésével és az irányítópult aktiválásával erősíti meg."),
          callout("Üzleti azonosságának ellenőrzése (Know-Your-Business-Customer)", "Az (EU) 2022/2065 rendelet (digitális szolgáltatásokról szóló jogszabály) 30. cikke alapján az online piacterek üzemeltetői, amelyek vállalkozások és fogyasztók közötti szerződések létrejöttét segítik elő, kötelesek bizonyos azonosító adatokat beszerezni kereskedelmi felhasználóiktól, és ésszerű mértékben ellenőrizni azok hitelességét. A TapRadar ezért az üzleti ügyfelek regisztrációja során legalább a következőket gyűjti: a cég neve és jogi formája, cím, adószám vagy cégjegyzékszám, a képviseletre jogosult személy neve és elérhetőségei, valamint a kínált áruk és szolgáltatások jogszerűségére vonatkozó önnyilatkozat. Ön köteles ezeket az adatokat teljes körűen és helyesen megadni, és a változásokat haladéktalanul bejelenteni nekünk. Ha tudomásunkra jut, hogy a megadott adatok helytelenek vagy félrevezetőek, jogosultak vagyunk a tisztázásig felfüggeszteni az irányítópulthoz való hozzáférést."),
          p("(3) A TapRadar fenntartja magának a jogot, hogy a regisztrációkat indoklás nélkül elutasítsa, különösen visszaélésszerű használatra, helytelen adatokra vagy az ÁSZF megsértésére utaló megalapozott gyanú esetén."),
        ],
      },
      {
        heading: "§ 4 Csomagok, árak és fizetési feltételek", blocks: [
          p("(1) A § 2-ben megjelölt havi csomagárak érvényesek, adott esetben a törvényes áfával növelve. Az aktuális árak a www.tapradar.app/fuer-geschaefte oldalon található csomagáttekintésben találhatók, amely a megrendelés időpontjában irányadó."),
          p("(2) A fizetések feldolgozása a Stripe fizetési szolgáltatón keresztül történik. A megrendelés véglegesítésével felhatalmazza a TapRadart, hogy minden számlázási időszak elején beszedje az adott előfizetési díjat a tárolt fizetési móddal."),
          p("(3) Ha esedékes fizetéssel késedelembe esik, a TapRadar jogosult előzetes figyelmeztetés után ideiglenesen letiltani az irányítópulthoz való hozzáférést, amíg a hátralék rendezésre nem kerül; a fontos okból történő rendkívüli felmondás joga érintetlen marad."),
          p("(4) A TapRadar jogosult a csomagárakat a jövőbeli számlázási időszakokra vonatkozó hatállyal módosítani. Az árváltozásokról legalább 30 nappal a hatálybalépés előtt szöveges formában tájékoztatjuk Önt. Ha az árváltozás ellen a hatálybalépésig nem emel kifogást, a módosítás elfogadottnak minősül; kifogás esetén Önt megilleti a rendkívüli felmondás joga az árváltozás hatálybalépésének időpontjára, amelyre a TapRadar a tájékoztatóban külön felhívja a figyelmet."),
        ],
      },
      {
        heading: "§ 5 Szerződés időtartama és felmondása", blocks: [
          p("(1) A csomagszerződések határozatlan időre jönnek létre, és automatikusan meghosszabbodnak a megállapodott számlázási időszakkal, jellemzően egy hónappal, amennyiben azokat időben nem mondják fel."),
          p("(2) A havi csomagokat bármelyik fél bármikor felmondhatja a folyó számlázási időszak végére, amennyiben a megrendelési összegzésben a szerződés megkötésekor nem állapodtak meg ettől eltérő minimális időtartamban. A felmondás az irányítópulton keresztül vagy e-mailben, a support@tapradar.app címre küldve tehető meg."),
          p("(3) Mindkét fél fontos okból történő rendkívüli felmondáshoz való joga érintetlen marad."),
          callout("Felmondás, felfüggesztés és hozzáférés-korlátozás a P2B-rendelet szerint", "Az (EU) 2019/1150 rendelet (P2B-rendelet) 4. cikke alapján minden olyan döntést, amely az irányítópulthoz való hozzáférésének korlátozására, felfüggesztésére vagy megszüntetésére irányul, a döntéshez vezető tények vagy körülmények bemutatásával indokolunk, és ezt az intézkedés hatálybalépése előtt vagy azzal egyidejűleg közöljük Önnel, kivéve, ha ezt jogi vagy hatósági kötelezettség kizárja, vagy ha késedelem esetén veszély fenyeget, például az ÁSZF súlyos vagy ismételt megsértése, illetve a platform vagy harmadik felek biztonságának veszélyeztetése esetén. Ilyen kivételes esetekben az indokolást az intézkedés hatálybalépése után haladéktalanul közöljük."),
          p("(4) A szerződéses jogviszony érvényes megszűnését követően az irányítópulthoz való hozzáférés deaktiválásra kerül; a vállalkozásához kapcsolódóan már gyűjtött végfelhasználói bélyegzők és értékelések a végfelhasználói alkalmazásban inaktívként jelölhetők meg. Az adatvédelmi tájékoztatóban foglalt tárolási időre vonatkozó rendelkezések érintetlenek maradnak."),
        ],
      },
      {
        heading: "§ 6 Láthatóság és rangsorolás a Radar modulban", blocks: [
          callout("A rangsorolási paraméterek átláthatósága a P2B-rendelet 5. cikke szerint", "Az a sorrend, amelyben a partnerüzletek a végfelhasználói alkalmazás Radar moduljában megjelennek, elsősorban a végfelhasználó helyétől való távolságtól, az általa kiválasztott szűrőktől (akció, kupon, jutalom, legjobbra értékelt, 500 m-es körzet) és kategóriáktól, az ellenőrzött értékelések frissességétől és számától, valamint kiegészítő jelleggel a lefoglalt csomagtól függ, mivel bizonyos láthatósági és reklámfunkciók (például a kiemelt kampányok) kizárólag a Gold és Platinum ügyfelek számára állnak rendelkezésre. A fent említett kritériumoktól független, fizetett rangsorolási előny nem létezik."),
          p("A Radar modulban megjelenített csomagjelvény a végfelhasználók felé jelzi az Ön által lefoglalt csomagot. A TapRadar fenntartja a jogot, hogy a platform továbbfejlesztése keretében módosítsa a rangsorolási paramétereket; a lényeges változásokat a § 13 szerint jelentjük be."),
        ],
      },
      {
        heading: "§ 7 Az üzleti ügyfelek kötelezettségei", blocks: [
          p("(1) Köteles cég- és kapcsolattartási adatait teljes körűen, helyesen és naprakészen tartani, és a változásokat haladéktalanul bejelenteni nekünk."),
          p("(2) Ön felelős az alkalmazotti PIN-kódok biztonságáért. Az Önhöz rendelt alkalmazotti hozzáférésen keresztül végzett tevékenységek Önnek tudhatók be. Köteles az érintett személy távozásakor haladéktalanul deaktiválni az alkalmazotti PIN-eket."),
          p("(3) A platformon keresztül feltöltött reklám- és kampánytartalmaknak, mint például képeknek, PDF-eknek, szövegeknek és push üzeneteknek jogszerűnek kell lenniük, és különösen nem sérthetik harmadik felek jogait (szerzői, védjegy- vagy személyiségi jogokat), az UWG tisztességtelen versenyre vonatkozó rendelkezéseit vagy egyéb jogszabályi rendelkezéseket. Ön mentesíti a TapRadart minden olyan harmadik féltől származó igény alól, amely e kötelezettség megsértéséből ered."),
          p("(4) Az alkalmazásban megjelenített jutalmak beváltása és a hirdetett ajánlatok teljesítése a végfelhasználók felé kizárólag Önt, mint üzleti ügyfelet terheli."),
        ],
      },
      {
        heading: "§ 8 Push értesítések és kampányok a végfelhasználóknak", blocks: [
          p("(1) A lefoglalt csomag keretében push értesítéseket és kampányokat küldhet olyan végfelhasználóknak, akik már ügyfelei az Ön vállalkozásának (legalább egy beváltott bélyegzővel), vagy akik – kizárólag a Platinum csomag közelségi hirdetése keretében – az Ön telephelyének közelében tartózkodnak, és ehhez helymegosztást adtak."),
          p("(2) E kampányok tartalmáért és jogszerűségéért, különösen az UWG betartásáért, a reklámjelölésre vonatkozó jogszabályokért, valamint a csomagáttekintés szerinti megengedett gyakoriságért (Gold: legfeljebb 2 kampány/hó; Platinum: legfeljebb 4 kampány/hó, push-t is beleértve) Ön felel. A TapRadar kizárólag a technikai kézbesítési infrastruktúrát biztosítja, és felügyeli a gyakorisági korlátok betartását. Az adatvédelmi felelősségmegosztásra vonatkozó további információkért lásd az adatvédelmi tájékoztatót a www.tapradar.app/datenschutz oldalon."),
          p("(3) A TapRadar jogosult a kampánytartalmakat küldés előtt szúrópróbaszerűen ellenőrizni, és a jogellenes vagy az ÁSZF-et sértő tartalmakat elutasítani."),
        ],
      },
      {
        heading: "§ 9 Értékelések és a manipulált értékelések tilalma", blocks: [
          p("(1) Értékelést kizárólag olyan végfelhasználók adhatnak, akiknek látogatása ténylegesen beváltott bélyegzővel igazolt."),
          callout("Hamis értékelések tilalma", "Az Omnibus-irányelvvel (az (EU) 2019/2161 irányelvvel) módosított UWG tisztességtelen versenyre vonatkozó rendelkezései szerint tilos hamis értékeléseket közzétenni vagy megrendelni, valódi értékeléseket meghamisítani, vagy más vállalkozásokat megbízni értékelések hamisításával. Ön köteles sem saját maga, sem harmadik felek – különösen az alkalmazotti PIN-hozzáférések – útján nem manipulálni vagy megvásárolni a saját vállalkozására vonatkozó értékeléseket, illetve nem ösztönözni az ügyfeleket pozitív értékelésekért cserébe. A jogsértések feljogosítják a TapRadart az érintett értékelések eltávolítására, valamint rendkívüli felmondásra."),
          p("(2) Az egyes értékeléseket az irányítópulton keresztül jogellenesként, sértőként vagy nyilvánvalóan valótlanként jelentheti be; a TapRadar minden bejelentést megvizsgál, és az eredményről tájékoztatja Önt, valamint az értékelőt."),
        ],
      },
      {
        heading: "§ 10 Tartalomhoz fűződő jogok", blocks: [
          p("(1) A TapRadar a szerződéses jogviszony időtartamára egyszerű, át nem ruházható jogot biztosít Önnek a platform szerződés szerinti mértékű használatára."),
          p("(2) Az Ön által feltöltött tartalmak – például logók, képek, szövegek és reklámanyagok – tekintetében Ön a szerződés időtartamára korlátozott, egyszerű jogot biztosít a TapRadar számára arra, hogy ezeket a tartalmakat a megállapodott szolgáltatások keretében felhasználja, különösen az alkalmazásban, a QR kirakati poszteren és a push értesítésekben történő megjelenítés céljából. Ön szavatolja, hogy a feltöltött tartalmakhoz szükséges jogokkal rendelkezik."),
          p("(3) A TapRadar szoftverére, márkájára és magára a platformra vonatkozó minden jog a TOY GmbH-nál, illetve licenciaadóinál marad."),
        ],
      },
      {
        heading: "§ 11 Hozzáférés az adatokhoz", blocks: [
          callout("Adathozzáférés a P2B-rendelet 9. cikke szerint", "A P2B-rendelet 9. cikke alapján tájékoztatjuk, hogy az irányítópulton keresztül hozzáférhet a csomagja keretében gyűjtött statisztikai és elemzési adatokhoz (alap-, illetve bővített analitika) saját végfelhasználóival kapcsolatban, különösen a látogatási gyakoriságra, a bélyegző- és beváltási adatokra, valamint a Platinum csomagban a reklámmal kapcsolatos mutatókra (CTR/CVR) vonatkozóan. Az egyes végfelhasználók személyes nyers adataihoz nem biztosítunk további hozzáférést; az összesített kiértékelés az adatvédelmi tájékoztató betartásával történik."),
        ],
      },
      {
        heading: "§ 12 Belső panaszkezelés és mediáció", blocks: [
          callout("Panaszkezelés a P2B-rendelet 11. és 12. cikke szerint", "A P2B-rendelet 11. cikke alapján a TapRadar díjmentes belső panaszkezelési rendszert biztosít Önnek. Az ÁSZF be nem tartásával, a szolgáltatás nyújtásához közvetlenül kapcsolódó technikai problémákkal, valamint az §§ 5 és 6 szerinti intézkedésekkel kapcsolatos panaszokat bármikor a beschwerde@tapradar.app címre küldheti. Minden panaszt időben és megfelelően kezelünk, és az eredményről szöveges formában tájékoztatjuk Önt. A P2B-rendelet 12. cikke alapján felhívjuk figyelmét, hogy a TOY GmbH-hoz hasonló kisvállalkozások esetében elmaradhat a konkrét mediátorok kijelölésének kötelezettsége; ha egy adott esetben nem sikerül békés, peren kívüli megegyezést elérni, Önt akkor is korlátlanul megilleti a rendes bíróságokhoz való fordulás joga a § 15 szerint."),
        ],
      },
      {
        heading: "§ 13 Rendelkezésre állás és a platform módosításai", blocks: [
          p("(1) A TapRadar törekszik a platform magas rendelkezésre állásának biztosítására, de nem garantálhatja a folyamatos, megszakítás nélküli rendelkezésre állást. Karbantartási munkák, technikai zavarok vagy továbbfejlesztések ideiglenes korlátozásokhoz vezethetnek."),
          p("(2) A TapRadar jogosult a platform egyes funkcióit a további fejlesztés keretében módosítani, kiegészíteni vagy megszüntetni, amennyiben ez a szerződés szerint fizetendő alapvető szolgáltatási kört nem érinti aránytalanul. A lényeges változásokról, ideértve a § 6 szerinti rangsorolási paraméterek módosítását is, legalább 15 nappal a hatálybalépés előtt szöveges formában értesítjük Önt, kivéve, ha jogi vagy biztonsági okokból rövidebb határidő szükséges."),
        ],
      },
      {
        heading: "§ 14 Felelősség", blocks: [
          p("(1) A TapRadar korlátlanul felel az élet, testi épség vagy egészség megsértéséből eredő károkért, valamint a szándékosan vagy súlyos gondatlansággal okozott károkért, továbbá a termékfelelősségi törvény kógens rendelkezései szerint."),
          p("(2) Enyhe gondatlansággal okozott károkért a TapRadar csak olyan lényeges szerződéses kötelezettségek (kardinális kötelezettségek) megsértése esetén felel, amelyek teljesítése egyáltalán lehetővé teszi a szerződés szabályszerű teljesítését, és amelyek betartására rendszerint számíthat; ebben az esetben a felelősség összegszerűen a szerződéstípusra jellemzően előre látható kárra korlátozódik."),
          p("(3) Egyebekben az enyhe gondatlansággal okozott károkért való felelősség kizárt, amennyiben ezt a jog megengedi."),
          p("(4) A TapRadar nem felel az Ön végfelhasználóinak cselekedeteiért, az értékelések helyességéért, valamint a § 5 vagy § 6 szerinti korlátozásból, felfüggesztésből vagy hozzáférés-megszüntetésből eredő elmaradt bevételért."),
          p("(5) A fenti felelősségkorlátozások ugyanilyen mértékben érvényesek a TapRadar teljesítési segédei javára."),
        ],
      },
      {
        heading: "§ 15 Záró rendelkezések", blocks: [
          p("(1) Az osztrák jog az irányadó, az ENSZ Bécsi Vételi Egyezményének (CISG) és a nemzetközi magánjog kollíziós szabályainak kizárásával."),
          p("(2) A jelen szerződésből vagy azzal összefüggésben eredő valamennyi jogvitára kizárólagosan a 2353 Guntramsdorf székhelye szerint tárgyi hatáskörrel rendelkező bíróság illetékes."),
          p("(3) Amennyiben ezen ÁSZF egyes rendelkezései érvénytelenek vagy azzá válnak, ez nem érinti a többi rendelkezés érvényességét. Az érvénytelen rendelkezés helyébe olyan szabályozás lép, amely a lehető legjobban megközelíti az érvénytelen rendelkezés gazdasági célját."),
          p("(4) Mellékmegállapodások nincsenek. A jelen szerződés módosításai és kiegészítései – amennyiben ezen ÁSZF másként nem rendelkezik – írásbeli formát igényelnek."),
        ],
      },
    ],
    sourcesHeading: "Forrásjegyzék",
    sourcesIntro: "Az uniós és osztrák hivatalos források, amelyeken ez az üzleti ügyfél ÁSZF alapul:",
    sources: [
      { label: "Platform-to-Business rendelet (P2B-rendelet), (EU) 2019/1150 rendelet", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Digitális szolgáltatásokról szóló jogszabály, (EU) 2022/2065 rendelet", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Fogyasztói jogokról szóló irányelv, 2011/83/EU irányelv", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Osztrák távollévők között és üzlethelyiségen kívül kötött szerződésekről szóló törvény (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  sk: {
    title: "Podmienky pre obchodných zákazníkov",
    subtitle: "Všeobecné obchodné podmienky pre dashboard TapRadar (obchodní zákazníci) – TOY GmbH",
    stand: "Aktualizované: 9. augusta 2026 · Verzia 2026-08-09.2",
    intro: [
      p("Spoločnosť TOY GmbH so sídlom v Guntramsdorfe, Rakúsko (ďalej len „TapRadar“, „my“), prevádzkuje digitálnu platformu TapRadar, ktorú tvorí bezplatná mobilná aplikácia pre koncových zákazníkov (Radar, Pečiatka, Karty, Home) a platený dashboard pre obchodných zákazníkov určený na digitálnu podporu vernosti zákazníkov prostredníctvom vernostných kariet založených na technológii NFC a QR. Prostredníctvom modulu Radar aplikácie pre koncových zákazníkov TapRadar sprostredkúva vaše ponuky, akcie a recenzie koncovým zákazníkom, a v tomto ohľade predstavuje online sprostredkovateľskú službu v zmysle nariadenia (EÚ) 2019/1150 (nariadenie P2B). Tieto podmienky pre obchodných zákazníkov upravujú zmluvný vzťah medzi TapRadar a podnikmi, ktoré si predplatia platený tarif (ďalej len „obchodní zákazníci“)."),
    ],
    sections: [
      {
        heading: "§ 1 Rozsah platnosti a zmluvné strany", blocks: [
          p("(1) Tieto podmienky sa vzťahujú výlučne na podniky, ktoré si v rámci svojej podnikateľskej alebo samostatnej zárobkovej činnosti predplatia platený tarif TapRadar (Bronze, Gold alebo Platinum) (podnikatelia v zmysle § 1 KSchG a § 1 UGB). Ustanovenia rakúskeho zákona o ochrane spotrebiteľa (KSchG) sa preto na obchodných zákazníkov zásadne nevzťahujú, pokiaľ to zákon umožňuje."),
          p("(2) Pre fyzické osoby, ktoré si prvýkrát dojednávajú tarif s cieľom založiť podnik (nových podnikateľov v zmysle § 1 ods. 3 KSchG), platia navyše pokyny týkajúce sa práva na odstúpenie uvedené v informácii o odstúpení pre spotrebiteľov na www.tapradar.app/widerrufsbelehrung."),
          p("(3) Vylučujeme platnosť akýchkoľvek protichodných alebo od týchto podmienok odlišných podmienok; tieto sa nestávajú súčasťou zmluvy, pokiaľ TapRadar výslovne písomne nesúhlasí s ich platnosťou."),
          p("(4) Zmluvnou stranou je TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Rakúsko, IČ DPH ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Opis služieb", blocks: [
          p("V závislosti od zvoleného tarifu vám TapRadar poskytuje digitálnu platformu na podporu vernosti zákazníkov, najmä: podporu NFC značiek a QR kódov na prideľovanie digitálnych pečiatok, vytváranie a správu digitálnych vernostných kariet, viditeľnosť v module Radar aplikácie pre koncových zákazníkov vrátane zobrazenia v kategóriách a filtroch (akcia, kupón, odmena, najlepšie hodnotené, okruh 500 m), zobrazenie overených recenzií zákazníkov, poskytnutie QR výkladného plagátu, základnú, resp. rozšírenú štatistiku a analytiku, systém PIN pre zamestnancov a – v závislosti od tarifu – reklamné a kampaňové funkcie, reklamu na základe blízkosti, push oznámenia koncovým zákazníkom a reporty."),
          p("Presný rozsah funkcií jednotlivých tarifov vyplýva z nižšie uvedeného prehľadu a z prehľadu tarifov zverejneného na www.tapradar.app/fuer-geschaefte v okamihu uzavretia zmluvy, ktorý je súčasťou týchto podmienok."),
          table(
            ["Služba", "Bronze", "Gold", "Platinum"],
            [
              ["Mesačná cena", "9,99 €", "49,99 €", "99,99 €"],
              ["Prevádzky", "1", "1", "1"],
              ["Prístupy pre zamestnancov", "1", "5", "15"],
              ["Pečiatkovanie NFC/QR", "áno", "áno", "áno"],
              ["QR výkladný plagát", "áno", "áno", "áno"],
              ["Základná štatistika", "áno", "áno", "áno"],
              ["Obrázková/PDF reklama", "nie", "2×/mesiac", "4×/mesiac"],
              ["Reklama na základe blízkosti (GPS)", "nie", "nie", "áno"],
              ["Push oznámenia", "nie", "nie", "áno"],
              ["Retargeting (30 dní)", "nie", "nie", "áno"],
              ["Rozšírená analytika", "nie", "nie", "áno"],
              ["Týždenný e-mailový report", "nie", "áno", "áno"],
              ["Mesačný PDF report", "nie", "nie", "áno"],
              ["Podpora", "Štandardná", "Štandardná", "Prioritná 24h"],
            ],
          ),
          p("TapRadar sám neposkytuje žiadny tovar ani služby koncovým zákazníkom vášho podniku a nie je účastníkom právnych vzťahov vznikajúcich medzi vami a vašimi zákazníkmi, najmä pri uplatňovaní odmien."),
        ],
      },
      {
        heading: "§ 3 Registrácia a uzavretie zmluvy", blocks: [
          p("(1) Zmluva o platenom tarife vzniká výberom tarifu v rámci objednávkového procesu, uvedením potrebných firemných a platobných údajov a dokončením objednávky kliknutím na tlačidlo „objednať s povinnosťou platby“ alebo obdobnou formuláciou. Pred odoslaním objednávky sú tarif, celková cena (vrátane DPH), fakturačný interval a hlavné vlastnosti zvoleného tarifu zhrnuté v prehľade objednávky."),
          p("(2) TapRadar potvrdzuje uzavretie zmluvy zaslaním potvrdzujúceho e-mailu a aktiváciou dashboardu."),
          callout("Overenie vašej podnikateľskej identity (Know-Your-Business-Customer)", "Podľa čl. 30 nariadenia (EÚ) 2022/2065 (akt o digitálnych službách) sú prevádzkovatelia online trhovísk, ktorí sprostredkúvajú zmluvy medzi podnikmi a spotrebiteľmi, povinní získať určité identifikačné údaje svojich obchodných používateľov a v primeranom rozsahu overiť ich vierohodnosť. TapRadar preto pri registrácii obchodných zákazníkov zhromažďuje minimálne: obchodné meno a právnu formu, adresu, IČ DPH alebo číslo obchodného registra, meno a kontaktné údaje osoby oprávnenej na zastupovanie, ako aj vlastné vyhlásenie o zákonnosti ponúkaného tovaru a služieb. Ste povinní uvádzať tieto údaje úplne a správne a bezodkladne nám oznamovať ich zmeny. Ak sa dozvieme skutočnosti nasvedčujúce tomu, že uvedené údaje sú nesprávne alebo zavádzajúce, sme oprávnení pozastaviť prístup k dashboardu až do vyjasnenia."),
          p("(3) TapRadar si vyhradzuje právo odmietnuť registrácie bez udania dôvodu, najmä pri odôvodnenom podozrení na zneužívajúce používanie, nesprávne údaje alebo porušenie týchto podmienok."),
        ],
      },
      {
        heading: "§ 4 Tarify, ceny a platobné podmienky", blocks: [
          p("(1) Platia mesačné ceny tarifov uvedené v § 2, zvýšené o prípadnú zákonnú DPH. Aktuálne ceny nájdete v prehľade tarifov na www.tapradar.app/fuer-geschaefte, ktorý je rozhodujúci v okamihu objednávky."),
          p("(2) Spracovanie platieb prebieha prostredníctvom poskytovateľa platobných služieb Stripe. Dokončením objednávky oprávňujete TapRadar na inkaso príslušnej sumy predplatného na začiatku každého fakturačného intervalu prostredníctvom uloženého platobného prostriedku."),
          p("(3) Ak sa dostanete do omeškania so splatnou platbou, je TapRadar oprávnený po predchádzajúcom upomenutí dočasne zablokovať prístup k dashboardu, kým nebude dlžná suma uhradená; právo na mimoriadnu výpoveď z dôležitého dôvodu zostáva nedotknuté."),
          p("(4) TapRadar je oprávnený upravovať ceny tarifov s účinnosťou pre budúce fakturačné intervaly. Zmeny cien vám budú oznámené v textovej podobe najmenej 30 dní pred ich účinnosťou. Ak proti zmene ceny nevznesiete námietku do jej účinnosti, zmena sa považuje za prijatú; v prípade námietky vám vzniká právo na mimoriadnu výpoveď k okamihu účinnosti zmeny ceny, na čo vás TapRadar v oznámení osobitne upozorní."),
        ],
      },
      {
        heading: "§ 5 Doba trvania zmluvy a výpoveď", blocks: [
          p("(1) Zmluvy o tarife sa uzatvárajú na dobu neurčitú a automaticky sa predlžujú o dohodnutý fakturačný interval, spravidla o jeden mesiac, pokiaľ nie sú včas vypovedané."),
          p("(2) Mesačné tarify môže ktorákoľvek strana kedykoľvek vypovedať s účinnosťou ku koncu prebiehajúceho fakturačného intervalu, pokiaľ v prehľade objednávky nebola pri uzavretí zmluvy dohodnutá odlišná minimálna doba trvania. Výpoveď možno podať prostredníctvom dashboardu alebo e-mailom na support@tapradar.app."),
          p("(3) Právo oboch strán na mimoriadnu výpoveď z dôležitého dôvodu zostáva nedotknuté."),
          callout("Výpoveď, pozastavenie a obmedzenie prístupu podľa nariadenia P2B", "Podľa čl. 4 nariadenia (EÚ) 2019/1150 (nariadenie P2B) každé rozhodnutie o obmedzení, pozastavení alebo ukončení vášho prístupu k dashboardu odôvodňujeme opisom skutočností alebo okolností, ktoré k tomuto rozhodnutiu viedli, a oznamujeme vám ich pred alebo v okamihu nadobudnutia účinnosti opatrenia, pokiaľ nám v tom nebráni právna alebo regulačná povinnosť alebo pokiaľ nehrozí nebezpečenstvo z omeškania, napríklad pri závažnom alebo opakovanom porušení týchto podmienok alebo pri ohrození bezpečnosti platformy či tretích osôb. V týchto výnimočných prípadoch je odôvodnenie poskytnuté bezodkladne po nadobudnutí účinnosti opatrenia."),
          p("(4) Po platnom ukončení zmluvného vzťahu je prístup k dashboardu deaktivovaný; už nazbierané pečiatky a recenzie koncových zákazníkov týkajúce sa vášho podniku môžu byť v aplikácii pre koncových zákazníkov označené ako neaktívne. Ustanovenia o dobe uchovávania v zásadách ochrany osobných údajov zostávajú nedotknuté."),
        ],
      },
      {
        heading: "§ 6 Viditeľnosť a poradie v module Radar", blocks: [
          callout("Transparentnosť parametrov zoraďovania podľa čl. 5 nariadenia P2B", "Poradie, v akom sú partnerské podniky zobrazované v module Radar aplikácie pre koncových zákazníkov, sa riadi predovšetkým vzdialenosťou od polohy koncového zákazníka, ním zvolenými filtrami (akcia, kupón, odmena, najlepšie hodnotené, okruh 500 m) a kategóriami, aktuálnosťou a počtom overených recenzií a doplnkovo zakúpeným tarifom, keďže niektoré funkcie viditeľnosti a reklamy (napr. zvýraznené kampane) sú k dispozícii výlučne zákazníkom s tarifom Gold a Platinum. Platené zvýhodnenie poradia nezávislé od vyššie uvedených kritérií neexistuje."),
          p("Odznak tarifu zobrazený v module Radar informuje koncových zákazníkov o vami zakúpenom tarife. TapRadar si vyhradzuje právo upravovať parametre zoraďovania v rámci ďalšieho rozvoja platformy; podstatné zmeny budú oznámené podľa § 13."),
        ],
      },
      {
        heading: "§ 7 Povinnosti obchodných zákazníkov", blocks: [
          p("(1) Ste povinní udržiavať svoje firemné a kontaktné údaje úplné, správne a aktuálne a bezodkladne nám oznamovať ich zmeny."),
          p("(2) Za bezpečnosť PIN kódov zamestnancov zodpovedáte vy. Konania vykonané prostredníctvom prístupu zamestnanca priradeného vám sú vám pripočítané. Ste povinní bezodkladne deaktivovať PIN zamestnancov pri odchode príslušnej osoby."),
          p("(3) Reklamné a kampaňové obsahy nahrané prostredníctvom platformy, ako sú obrázky, PDF, texty a push správy, musia byť zákonné a najmä nesmú porušovať práva tretích osôb (autorské práva, ochranné známky alebo osobnostné práva), predpisy zákona o nekalej súťaži (UWG) alebo iné zákonné ustanovenia. Zaväzujete sa odškodniť TapRadar za všetky nároky tretích osôb vyplývajúce z porušenia tejto povinnosti."),
          p("(4) Uplatnenie odmien zobrazených v aplikácii a splnenie inzerovaných ponúk voči koncovým zákazníkom je výlučne vašou zodpovednosťou ako obchodného zákazníka."),
        ],
      },
      {
        heading: "§ 8 Push oznámenia a kampane určené koncovým zákazníkom", blocks: [
          p("(1) V rámci zakúpeného tarifu môžete zasielať push oznámenia a kampane koncovým zákazníkom, ktorí sú už zákazníkmi vášho podniku (aspoň jedna nazbieraná pečiatka) alebo ktorí sa – výlučne pri tarife Platinum prostredníctvom reklamy na základe blízkosti – nachádzajú v blízkosti vašej prevádzky a na to udelili zdieľanie polohy."),
          p("(2) Za obsah a zákonnosť týchto kampaní, najmä dodržiavanie UWG, práva na označovanie reklamy a povolenej frekvencie podľa prehľadu tarifov (Gold: až 2 kampane/mesiac; Platinum: až 4 kampane/mesiac vrátane push), zodpovedáte vy. TapRadar zabezpečuje iba technickú doručovaciu infraštruktúru a dodržiavanie frekvenčných limitov. Podrobnosti o rozdelení zodpovednosti v oblasti ochrany osobných údajov nájdete v zásadách ochrany osobných údajov na www.tapradar.app/datenschutz."),
          p("(3) TapRadar je oprávnený pred odoslaním namátkovo kontrolovať jednotlivé obsahy kampaní a odmietnuť protiprávne obsahy alebo obsahy porušujúce tieto podmienky."),
        ],
      },
      {
        heading: "§ 9 Recenzie a zákaz manipulovaných recenzií", blocks: [
          p("(1) Recenzie môžu zadávať výlučne koncoví zákazníci, ktorých návšteva bola overená skutočne nazbieranou pečiatkou."),
          callout("Zákaz falošných recenzií", "Podľa ustanovení zákona o nekalej súťaži (UWG) v znení zmenenom smernicou Omnibus (smernica (EÚ) 2019/2161) je neprípustné zverejňovať alebo objednávať falošné recenzie, pozmeňovať pravé recenzie alebo poverovať iné podniky falšovaním recenzií. Zaväzujete sa, že ani vy sami, ani prostredníctvom tretích osôb – najmä nie prostredníctvom PIN prístupov vašich zamestnancov – nebudete manipulovať s recenziami týkajúcimi sa vášho vlastného podniku, kupovať ich ani motivovať zákazníkov k pozitívnym recenziám. Porušenia oprávňujú TapRadar na odstránenie dotknutých recenzií a na mimoriadnu výpoveď."),
          p("(2) Jednotlivé recenzie môžete prostredníctvom dashboardu nahlásiť ako protiprávne, urážlivé alebo zjavne nepravdivé; TapRadar každé nahlásenie preskúma a oznámi výsledok vám aj autorovi recenzie."),
        ],
      },
      {
        heading: "§ 10 Práva k obsahu", blocks: [
          p("(1) TapRadar vám počas trvania zmluvného vzťahu poskytuje jednoduché, neprevoditeľné právo užívať platformu v rozsahu stanovenom zmluvou."),
          p("(2) K vami nahranému obsahu, ako sú logá, obrázky, texty a reklamné materiály, poskytujete TapRadar jednoduché právo, obmedzené na dobu trvania zmluvy, tento obsah využívať v rámci dohodnutých služieb, najmä na zobrazenie v aplikácii, na QR výkladnom plagáte a v push oznámeniach. Zaručujete, že disponujete potrebnými právami k nahranému obsahu."),
          p("(3) Všetky práva k softvéru, značke a samotnej platforme TapRadar zostávajú spoločnosti TOY GmbH, resp. jej poskytovateľom licencie."),
        ],
      },
      {
        heading: "§ 11 Prístup k údajom", blocks: [
          callout("Prístup k údajom podľa čl. 9 nariadenia P2B", "Podľa čl. 9 nariadenia P2B vás informujeme, že máte prostredníctvom dashboardu prístup k štatistickým a analytickým údajom (základná, resp. rozšírená analytika) zhromaždeným v rámci vášho tarifu o vašich vlastných koncových zákazníkoch, najmä o frekvencii návštev, údajoch o pečiatkach a uplatneniach, a pri tarife Platinum aj o metrikách súvisiacich s reklamou (CTR/CVR). Ďalší prístup k osobným nespracovaným údajom jednotlivých koncových zákazníkov nie je poskytovaný; súhrnné vyhodnotenie prebieha v súlade so zásadami ochrany osobných údajov."),
        ],
      },
      {
        heading: "§ 12 Interné vybavovanie sťažností a mediácia", blocks: [
          callout("Vybavovanie sťažností podľa čl. 11 a 12 nariadenia P2B", "Podľa čl. 11 nariadenia P2B vám TapRadar poskytuje bezplatný interný systém vybavovania sťažností. Sťažnosti týkajúce sa nedodržiavania týchto podmienok, technických problémov priamo súvisiacich s poskytovaním služby, ako aj opatrení podľa §§ 5 a 6 môžete kedykoľvek zaslať na beschwerde@tapradar.app. Každú sťažnosť spracujeme včas a primerane a výsledok vám oznámime v textovej podobe. Podľa čl. 12 nariadenia P2B vás upozorňujeme, že pri malých podnikoch, ako je TOY GmbH, môže odpadnúť povinnosť vymenovať konkrétnych mediátorov; ak sa v jednotlivom prípade nepodarí dosiahnuť zmierlivé mimosúdne urovnanie, zostáva vám aj tak zachovaný prístup k všeobecným súdom podľa § 15."),
        ],
      },
      {
        heading: "§ 13 Dostupnosť a zmeny platformy", blocks: [
          p("(1) TapRadar sa usiluje zabezpečiť vysokú dostupnosť platformy, nemôže však zaručiť neprerušovanú dostupnosť. Údržbové práce, technické poruchy alebo ďalší rozvoj môžu viesť k dočasným obmedzeniam."),
          p("(2) TapRadar je oprávnený v rámci ďalšieho rozvoja upravovať, dopĺňať alebo rušiť jednotlivé funkcie platformy, pokiaľ tým nie je neprimerane dotknutý zmluvne dlhovaný základný rozsah služieb. Podstatné zmeny, vrátane zmien parametrov zoraďovania podľa § 6, vám budú oznámené v textovej podobe najmenej 15 dní pred ich účinnosťou, pokiaľ kratšia lehota nie je potrebná z právnych alebo bezpečnostných dôvodov."),
        ],
      },
      {
        heading: "§ 14 Zodpovednosť", blocks: [
          p("(1) TapRadar zodpovedá bez obmedzenia za škody vzniknuté porušením života, tela alebo zdravia, ako aj za škody spôsobené úmyselne alebo hrubou nedbanlivosťou, a podľa kogentných ustanovení zákona o zodpovednosti za výrobok."),
          p("(2) Za škody spôsobené ľahkou nedbanlivosťou zodpovedá TapRadar len pri porušení podstatných zmluvných povinností (kardinálnych povinností), ktorých splnenie vôbec umožňuje riadne plnenie zmluvy a na ktorých dodržiavanie sa spravidla môžete spoliehať; v takom prípade je zodpovednosť čo do výšky obmedzená na škodu typicky predvídateľnú pre tento typ zmluvy."),
          p("(3) V ostatných prípadoch je zodpovednosť za škody spôsobené ľahkou nedbanlivosťou vylúčená, pokiaľ to zákon umožňuje."),
          p("(4) TapRadar nezodpovedá za konanie vašich koncových zákazníkov, za správnosť recenzií ani za ušlý zisk v dôsledku obmedzenia, pozastavenia alebo ukončenia prístupu podľa § 5 alebo § 6."),
          p("(5) Vyššie uvedené obmedzenia zodpovednosti platia v rovnakom rozsahu v prospech osôb, ktoré TapRadar používa na plnenie."),
        ],
      },
      {
        heading: "§ 15 Záverečné ustanovenia", blocks: [
          p("(1) Platí rakúske právo s vylúčením Dohovoru OSN o zmluvách o medzinárodnej kúpe tovaru (CISG) a kolíznych noriem medzinárodného práva súkromného."),
          p("(2) Výlučne príslušným súdom pre všetky spory vzniknuté z tejto zmluvy alebo v súvislosti s ňou je vecne príslušný súd pre 2353 Guntramsdorf."),
          p("(3) Ak by jednotlivé ustanovenia týchto podmienok boli alebo sa stali neplatnými, zostáva tým platnosť ostatných ustanovení nedotknutá. Namiesto neplatného ustanovenia nastúpi úprava, ktorá sa najviac približuje hospodárskemu účelu neplatného ustanovenia."),
          p("(4) Vedľajšie dohody neexistujú. Zmeny a doplnky tejto zmluvy vyžadujú textovú formu, pokiaľ tieto podmienky neustanovujú inak."),
        ],
      },
    ],
    sourcesHeading: "Zoznam zdrojov",
    sourcesIntro: "Úradné zdroje EÚ a Rakúska, z ktorých tieto podmienky pre obchodných zákazníkov vychádzajú:",
    sources: [
      { label: "Nariadenie o vzťahoch medzi platformami a podnikmi (nariadenie P2B), nariadenie (EÚ) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Akt o digitálnych službách, nariadenie (EÚ) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Smernica o právach spotrebiteľov, smernica 2011/83/EÚ", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Rakúsky zákon o zmluvách uzatváraných na diaľku a mimo prevádzkových priestorov (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  "sr-Latn": {
    title: "Uslovi za poslovne korisnike",
    subtitle: "Opšti uslovi poslovanja za TapRadar kontrolnu tablu (poslovni korisnici) – TOY GmbH",
    stand: "Ažurirano: 9. avgust 2026 · Verzija 2026-08-09.2",
    intro: [
      p("TOY GmbH sa sedištem u Guntramsdorfu, Austrija (u daljem tekstu „TapRadar“, „mi“), upravlja digitalnom platformom TapRadar, koju čine besplatna mobilna aplikacija za krajnje korisnike (Radar, Pečat, Kartice, Home) i plaćena kontrolna tabla za poslovne korisnike za digitalnu podršku lojalnosti kupaca putem kartica lojalnosti zasnovanih na NFC i QR tehnologiji. Putem modula Radar aplikacije za krajnje korisnike, TapRadar posreduje vaše ponude, akcije i recenzije krajnjim korisnicima i u tom pogledu predstavlja onlajn posredničku uslugu u smislu Uredbe (EU) 2019/1150 (P2B uredba). Ovi uslovi za poslovne korisnike regulišu ugovorni odnos između TapRadar-a i preduzeća koja se pretplate na plaćeni paket (u daljem tekstu „poslovni korisnici“)."),
    ],
    sections: [
      {
        heading: "§ 1 Obim primene i ugovorne strane", blocks: [
          p("(1) Ovi uslovi primenjuju se isključivo na preduzeća koja se, u okviru svoje privredne ili samostalne profesionalne delatnosti, pretplate na plaćeni TapRadar paket (Bronze, Gold ili Platinum) (preduzetnici u smislu § 1 KSchG i § 1 UGB). Odredbe austrijskog Zakona o zaštiti potrošača (KSchG) stoga se u načelu ne primenjuju na poslovne korisnike, u meri u kojoj je to zakonski dozvoljeno."),
          p("(2) Za fizička lica koja prvi put zaključuju paket radi osnivanja preduzeća (osnivači preduzeća u smislu § 1 stav 3 KSchG), dodatno se primenjuju napomene o pravu na odustanak iz Obaveštenja o pravu na odustanak za potrošače na www.tapradar.app/widerrufsbelehrung."),
          p("(3) Odbijamo suprotne ili od ovih uslova odstupajuće uslove; oni ne postaju deo ugovora, osim ako TapRadar izričito pismeno ne prihvati njihovu važnost."),
          p("(4) Ugovorna strana je TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austrija, PIB ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Opis usluga", blocks: [
          p("U zavisnosti od izabranog paketa, TapRadar vam pruža digitalnu platformu za podršku lojalnosti kupaca, posebno: podršku NFC oznaka i QR kodova za dodelu digitalnih pečata, kreiranje i upravljanje digitalnim karticama lojalnosti, vidljivost u modulu Radar aplikacije za krajnje korisnike, uključujući prikaz u kategorijama i filterima (akcija, kupon, nagrada, top, radijus 500 m), prikaz verifikovanih recenzija kupaca, obezbeđivanje QR izloga, osnovnu, odnosno proširenu statistiku i analitiku, sistem PIN-a za zaposlene, kao i – u zavisnosti od paketa – reklamne i kampanjske funkcije, reklamu na osnovu blizine, push obaveštenja krajnjim korisnicima i izveštaje."),
          p("Tačan obim funkcija pojedinih paketa proizilazi iz sledećeg pregleda, kao i iz pregleda paketa objavljenog na www.tapradar.app/fuer-geschaefte u trenutku zaključenja ugovora, koji je sastavni deo ovih uslova."),
          table(
            ["Usluga", "Bronze", "Gold", "Platinum"],
            [
              ["Mesečna cena", "9,99 €", "49,99 €", "99,99 €"],
              ["Lokacije", "1", "1", "1"],
              ["Pristupi za zaposlene", "1", "5", "15"],
              ["NFC/QR pečatiranje", "da", "da", "da"],
              ["QR izlog", "da", "da", "da"],
              ["Osnovna statistika", "da", "da", "da"],
              ["Slikovna/PDF reklama", "ne", "2×/mesec", "4×/mesec"],
              ["Reklama na osnovu blizine (GPS)", "ne", "ne", "da"],
              ["Push obaveštenja", "ne", "ne", "da"],
              ["Retargeting (30 dana)", "ne", "ne", "da"],
              ["Proširena analitika", "ne", "ne", "da"],
              ["Nedeljni izveštaj e-poštom", "ne", "da", "da"],
              ["Mesečni PDF izveštaj", "ne", "ne", "da"],
              ["Podrška", "Standardna", "Standardna", "Prioritetna 24h"],
            ],
          ),
          p("TapRadar sam ne pruža nikakvu robu ili usluge krajnjim korisnicima vašeg preduzeća i nije učesnik u pravnim poslovima koji nastaju između vas i vaših kupaca, posebno prilikom iskorišćavanja nagrada."),
        ],
      },
      {
        heading: "§ 3 Registracija i zaključenje ugovora", blocks: [
          p("(1) Ugovor o plaćenom paketu nastaje izborom paketa u procesu narudžbine, unosom potrebnih podataka o preduzeću i plaćanju i finalizacijom narudžbine klikom na dugme „naruči uz obavezu plaćanja“ ili istoznačnom formulacijom. Pre podnošenja narudžbine, paket, ukupna cena (uključujući PDV), interval fakturisanja i bitne karakteristike izabranog paketa sažimaju se u pregledu narudžbine."),
          p("(2) TapRadar potvrđuje zaključenje ugovora slanjem potvrdnog e-maila i aktivacijom kontrolne table."),
          callout("Provera vašeg poslovnog identiteta (Know-Your-Business-Customer)", "U skladu sa članom 30. Uredbe (EU) 2022/2065 (Akt o digitalnim uslugama), operateri onlajn tržišta koji posreduju u zaključivanju ugovora između preduzeća i potrošača dužni su da pribave određene identifikacione podatke svojih poslovnih korisnika i, u razumnoj meri, provere njihovu verodostojnost. TapRadar stoga prilikom registracije poslovnih korisnika prikuplja najmanje: naziv firme i pravni oblik, adresu, PIB ili matični broj, ime i kontakt podatke lica ovlašćenog za zastupanje, kao i sopstvenu izjavu o zakonitosti ponuđene robe i usluga. Dužni ste da ove podatke navedete potpuno i tačno i da nam bez odlaganja saopštite izmene. Ako saznamo za indicije da su navedeni podaci netačni ili obmanjujući, ovlašćeni smo da suspendujemo pristup kontrolnoj tabli do razjašnjenja."),
          p("(3) TapRadar zadržava pravo da odbije registracije bez navođenja razloga, posebno u slučaju opravdane sumnje na zloupotrebu, netačne podatke ili kršenje ovih uslova."),
        ],
      },
      {
        heading: "§ 4 Paketi, cene i uslovi plaćanja", blocks: [
          p("(1) Važe mesečne cene paketa navedene u § 2, uvećane za zakonski PDV, ukoliko je primenljivo. Aktuelne cene mogu se videti u pregledu paketa na www.tapradar.app/fuer-geschaefte, koji je merodavan u trenutku narudžbine."),
          p("(2) Obrada plaćanja odvija se preko pružaoca usluga plaćanja Stripe. Finalizacijom narudžbine ovlašćujete TapRadar da na početku svakog perioda fakturisanja naplati odgovarajući iznos pretplate putem sačuvanog sredstva plaćanja."),
          p("(3) Ako zakasnite sa dospelim plaćanjem, TapRadar je ovlašćen da, nakon prethodne opomene, privremeno blokira pristup kontrolnoj tabli dok se dugovani iznos ne izmiri; pravo na vanredni otkaz iz važnog razloga ostaje nedirnuto."),
          p("(4) TapRadar je ovlašćen da prilagođava cene paketa sa dejstvom za buduće periode fakturisanja. Promene cena biće vam saopštene u tekstualnom obliku najmanje 30 dana pre stupanja na snagu. Ako se ne usprotivite promeni cene do njenog stupanja na snagu, promena se smatra prihvaćenom; u slučaju prigovora, imate pravo na vanredni otkaz u trenutku stupanja na snagu promene cene, na šta će vas TapRadar posebno upozoriti u obaveštenju."),
        ],
      },
      {
        heading: "§ 5 Trajanje ugovora i otkaz", blocks: [
          p("(1) Ugovori o paketu zaključuju se na neodređeno vreme i automatski se produžavaju za dogovoreni period fakturisanja, po pravilu jedan mesec, ukoliko se blagovremeno ne otkažu."),
          p("(2) Mesečne pakete mogu obe strane otkazati u bilo kom trenutku sa dejstvom na kraj tekućeg perioda fakturisanja, ukoliko u pregledu narudžbine u trenutku zaključenja ugovora nije dogovoren drugačiji minimalni period trajanja. Otkaz se može izjaviti putem kontrolne table ili e-poštom na support@tapradar.app."),
          p("(3) Pravo obe strane na vanredni otkaz iz važnog razloga ostaje nedirnuto."),
          callout("Otkaz, suspenzija i ograničenje pristupa prema P2B uredbi", "U skladu sa članom 4. Uredbe (EU) 2019/1150 (P2B uredba), svaku odluku o ograničenju, suspenziji ili prekidu vašeg pristupa kontrolnoj tabli obrazlažemo opisom činjenica ili okolnosti koje su dovele do te odluke i dostavljamo vam ih pre ili u trenutku stupanja na snagu mere, osim ako smo podložni pravnoj ili regulatornoj obavezi koja se tome protivi ili postoji opasnost od odlaganja, na primer u slučaju ozbiljnog ili ponovljenog kršenja ovih uslova ili ugrožavanja bezbednosti platforme ili trećih lica. U ovim izuzetnim slučajevima obrazloženje se dostavlja bez odlaganja nakon stupanja na snagu mere."),
          p("(4) Nakon punovažnog prestanka ugovornog odnosa, pristup kontrolnoj tabli se deaktivira; već sakupljeni pečati i recenzije krajnjih korisnika u vezi sa vašim preduzećem mogu se u aplikaciji za krajnje korisnike označiti kao neaktivni. Odredbe o periodu čuvanja u politici privatnosti ostaju nedirnute."),
        ],
      },
      {
        heading: "§ 6 Vidljivost i rangiranje u modulu Radar", blocks: [
          callout("Transparentnost parametara rangiranja prema članu 5. P2B uredbe", "Redosled po kojem se partnerska preduzeća prikazuju u modulu Radar aplikacije za krajnje korisnike zavisi prvenstveno od udaljenosti od lokacije krajnjeg korisnika, filtera koje je taj korisnik izabrao (akcija, kupon, nagrada, top, radijus 500 m) i kategorija, aktuelnosti i broja verifikovanih recenzija, kao i dodatno od zakupljenog paketa, budući da su određene funkcije vidljivosti i reklamiranja (npr. istaknute kampanje) dostupne isključivo Gold i Platinum korisnicima. Plaćena prednost u rangiranju nezavisna od gore navedenih kriterijuma ne postoji."),
          p("Oznaka paketa prikazana u modulu Radar označava krajnjim korisnicima paket koji ste zakupili. TapRadar zadržava pravo da prilagođava parametre rangiranja u okviru daljeg razvoja platforme; bitne izmene biće najavljene u skladu sa § 13."),
        ],
      },
      {
        heading: "§ 7 Obaveze poslovnih korisnika", blocks: [
          p("(1) Dužni ste da svoje podatke o preduzeću i kontaktu održavate potpunim, tačnim i ažurnim i da nam bez odlaganja saopštavate izmene."),
          p("(2) Odgovorni ste za bezbednost PIN kodova zaposlenih. Radnje preduzete putem pristupa zaposlenog koji vam je dodeljen pripisuju se vama. Dužni ste da bez odlaganja deaktivirate PIN-ove zaposlenih po prestanku radnog odnosa dotičnog lica."),
          p("(3) Reklamni i kampanjski sadržaji otpremljeni putem platforme, poput slika, PDF-ova, tekstova i push poruka, moraju biti zakoniti i posebno ne smeju povređivati prava trećih lica (autorska, prava na žig ili lična prava), odredbe Zakona o nelojalnoj konkurenciji (UWG) ili druge zakonske odredbe. Obavezujete se da obeštetite TapRadar za sve zahteve trećih lica koji proizilaze iz kršenja ove obaveze."),
          p("(4) Iskorišćavanje nagrada prikazanih u aplikaciji i ispunjenje oglašenih ponuda prema krajnjim korisnicima isključivo je vaša odgovornost kao poslovnog korisnika."),
        ],
      },
      {
        heading: "§ 8 Push obaveštenja i kampanje namenjene krajnjim korisnicima", blocks: [
          p("(1) U okviru zakupljenog paketa možete slati push obaveštenja i kampanje krajnjim korisnicima koji su već kupci vašeg preduzeća (najmanje jedan sakupljen pečat) ili koji se – isključivo u Platinum paketu putem reklame na osnovu blizine – nalaze u blizini vaše lokacije i za to su dali saglasnost za deljenje lokacije."),
          p("(2) Za sadržaj i zakonitost ovih kampanja, posebno poštovanje UWG-a, prava o označavanju reklame i dozvoljene učestalosti prema pregledu paketa (Gold: do 2 kampanje/mesec; Platinum: do 4 kampanje/mesec uključujući push), odgovorni ste vi. TapRadar obezbeđuje samo tehničku infrastrukturu za isporuku i poštovanje ograničenja učestalosti. Detalje o podeli odgovornosti u oblasti zaštite podataka potražite u politici privatnosti na www.tapradar.app/datenschutz."),
          p("(3) TapRadar je ovlašćen da pre slanja nasumično proveri pojedine sadržaje kampanja i odbije nezakonite sadržaje ili sadržaje koji krše ove uslove."),
        ],
      },
      {
        heading: "§ 9 Recenzije i zabrana manipulisanih recenzija", blocks: [
          p("(1) Recenzije mogu davati isključivo krajnji korisnici čija je poseta verifikovana stvarno sakupljenim pečatom."),
          callout("Zabrana lažnih recenzija", "Prema odredbama Zakona o nelojalnoj konkurenciji (UWG), izmenjenim Omnibus direktivom (Direktiva (EU) 2019/2161), nedozvoljeno je objavljivati ili naručivati lažne recenzije, falsifikovati prave recenzije ili nalagati drugim preduzećima falsifikovanje recenzija. Obavezujete se da ni sami, ni putem trećih lica – posebno ne putem pristupa PIN kodova vaših zaposlenih – ne manipulišete recenzijama koje se odnose na vaše sopstveno preduzeće, ne kupujete ih niti podsticete kupce zauzvrat za pozitivne recenzije. Kršenja ovlašćuju TapRadar da ukloni predmetne recenzije i izvrši vanredni otkaz."),
          p("(2) Pojedine recenzije možete putem kontrolne table prijaviti kao nezakonite, uvredljive ili očigledno neistinite; TapRadar proverava svaku prijavu i saopštava rezultat vama i licu koje je dalo recenziju."),
        ],
      },
      {
        heading: "§ 10 Prava na sadržaj", blocks: [
          p("(1) TapRadar vam za trajanje ugovornog odnosa ustupa jednostavno, neprenosivo pravo korišćenja platforme u ugovorom predviđenom obimu."),
          p("(2) Za sadržaje koje otpremite, poput logotipa, slika, tekstova i reklamnog materijala, ustupate TapRadar-u jednostavno pravo, ograničeno na trajanje ugovora, da koristi te sadržaje u okviru dogovorenih usluga, posebno za prikaz u aplikaciji, na QR izlogu i u push obaveštenjima. Garantujete da raspolažete potrebnim pravima na otpremljenim sadržajima."),
          p("(3) Sva prava na TapRadar softveru, marki i samoj platformi ostaju kod TOY GmbH, odnosno njenih davalaca licence."),
        ],
      },
      {
        heading: "§ 11 Pristup podacima", blocks: [
          callout("Pristup podacima prema članu 9. P2B uredbe", "U skladu sa članom 9. P2B uredbe, obaveštavamo vas da putem kontrolne table imate pristup statističkim i analitičkim podacima (osnovna, odnosno proširena analitika) prikupljenim u okviru vašeg paketa o vašim sopstvenim krajnjim korisnicima, posebno o učestalosti poseta, podacima o pečatima i iskorišćavanju, kao i, u Platinum paketu, o pokazateljima vezanim za reklamu (CTR/CVR). Dodatni pristup ličnim, neobrađenim podacima pojedinačnih krajnjih korisnika se ne odobrava; agregirana analiza se vrši uz poštovanje politike privatnosti."),
        ],
      },
      {
        heading: "§ 12 Interno upravljanje pritužbama i medijacija", blocks: [
          callout("Upravljanje pritužbama prema članovima 11. i 12. P2B uredbe", "U skladu sa članom 11. P2B uredbe, TapRadar vam obezbeđuje besplatan interni sistem za upravljanje pritužbama. Pritužbe u vezi sa nepoštovanjem ovih uslova, tehničkim problemima direktno povezanim sa pružanjem usluge, kao i merama prema §§ 5 i 6, možete u bilo kom trenutku uputiti na beschwerde@tapradar.app. Svaku pritužbu obrađujemo blagovremeno i na odgovarajući način i rezultat vam saopštavamo u tekstualnom obliku. U skladu sa članom 12. P2B uredbe, napominjemo vam da za mala preduzeća poput TOY GmbH može otpasti obaveza imenovanja konkretnih medijatora; ukoliko se u pojedinačnom slučaju ne postigne miroljubivo vansudsko poravnanje, i dalje vam ostaje dostupan pristup redovnim sudovima prema § 15."),
        ],
      },
      {
        heading: "§ 13 Dostupnost i izmene platforme", blocks: [
          p("(1) TapRadar nastoji da obezbedi visoku dostupnost platforme, ali ne može garantovati neprekidnu dostupnost. Radovi na održavanju, tehnički kvarovi ili dalji razvoj mogu dovesti do privremenih ograničenja."),
          p("(2) TapRadar je ovlašćen da u okviru daljeg razvoja prilagođava, dopunjuje ili ukida pojedine funkcije platforme, ukoliko time nije nesrazmerno pogođen ugovorom dugovan osnovni obim usluga. Bitne izmene, uključujući izmene parametara rangiranja prema § 6, biće vam najavljene u tekstualnom obliku najmanje 15 dana pre stupanja na snagu, osim ako je kraći rok neophodan iz pravnih ili bezbednosnih razloga."),
        ],
      },
      {
        heading: "§ 14 Odgovornost", blocks: [
          p("(1) TapRadar odgovara neograničeno za štete nastale povredom života, tela ili zdravlja, kao i za štete nastale namerom ili grubom nepažnjom, i prema kogentnim odredbama Zakona o odgovornosti za proizvod."),
          p("(2) Za štete nastale lakom nepažnjom, TapRadar odgovara samo u slučaju povrede bitnih ugovornih obaveza (kardinalnih obaveza), čije ispunjenje uopšte omogućava uredno izvršenje ugovora i na čije poštovanje se redovno možete osloniti; u tom slučaju odgovornost je po visini ograničena na štetu koja je tipično predvidiva za ovu vrstu ugovora."),
          p("(3) Inače je odgovornost za štete nastale lakom nepažnjom isključena, u meri u kojoj je to zakonski dozvoljeno."),
          p("(4) TapRadar ne odgovara za radnje vaših krajnjih korisnika, za tačnost recenzija, niti za izgubljeni promet usled ograničenja, suspenzije ili prekida pristupa prema § 5 ili § 6."),
          p("(5) Gore navedena ograničenja odgovornosti važe u istom obimu u korist izvršilaca obaveza TapRadar-a."),
        ],
      },
      {
        heading: "§ 15 Završne odredbe", blocks: [
          p("(1) Primenjuje se austrijsko pravo uz isključenje Konvencije UN o ugovorima o međunarodnoj prodaji robe (CISG) i kolizionih normi međunarodnog privatnog prava."),
          p("(2) Isključivo nadležan sud za sve sporove koji proisteknu iz ovog ugovora ili u vezi sa njim je stvarno nadležan sud za 2353 Guntramsdorf."),
          p("(3) Ukoliko pojedine odredbe ovih uslova budu ili postanu nevažeće, to ne utiče na važnost ostalih odredbi. Na mesto nevažeće odredbe stupa uređenje koje se ekonomskoj svrsi nevažeće odredbe najviše približava."),
          p("(4) Sporazuma van ovog dokumenta nema. Izmene i dopune ovog ugovora zahtevaju tekstualni oblik, osim ako je ovim uslovima drugačije određeno."),
        ],
      },
    ],
    sourcesHeading: "Spisak izvora",
    sourcesIntro: "Zvanični izvori EU i Austrije na kojima se zasnivaju ovi uslovi za poslovne korisnike:",
    sources: [
      { label: "Uredba o odnosima platformi i preduzeća (P2B uredba), Uredba (EU) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Akt o digitalnim uslugama, Uredba (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Direktiva o pravima potrošača, Direktiva 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Austrijski zakon o ugovorima na daljinu i van poslovnih prostorija (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  bs: {
    title: "Uslovi za poslovne korisnike",
    subtitle: "Opći uslovi poslovanja za TapRadar kontrolnu tablu (poslovni korisnici) – TOY GmbH",
    stand: "Ažurirano: 9. august 2026 · Verzija 2026-08-09.2",
    intro: [
      p("TOY GmbH sa sjedištem u Guntramsdorfu, Austrija (u daljem tekstu „TapRadar“, „mi“), upravlja digitalnom platformom TapRadar, koju čine besplatna mobilna aplikacija za krajnje korisnike (Radar, Pečat, Kartice, Home) i plaćena kontrolna tabla za poslovne korisnike za digitalnu podršku lojalnosti kupaca putem kartica lojalnosti zasnovanih na NFC i QR tehnologiji. Putem modula Radar aplikacije za krajnje korisnike, TapRadar posreduje vaše ponude, akcije i recenzije krajnjim korisnicima i u tom pogledu predstavlja online posredničku uslugu u smislu Uredbe (EU) 2019/1150 (P2B uredba). Ovi uslovi za poslovne korisnike regulišu ugovorni odnos između TapRadar-a i preduzeća koja se pretplate na plaćeni paket (u daljem tekstu „poslovni korisnici“)."),
    ],
    sections: [
      {
        heading: "§ 1 Obim primjene i ugovorne strane", blocks: [
          p("(1) Ovi uslovi primjenjuju se isključivo na preduzeća koja se, u okviru svoje privredne ili samostalne profesionalne djelatnosti, pretplate na plaćeni TapRadar paket (Bronze, Gold ili Platinum) (poduzetnici u smislu § 1 KSchG i § 1 UGB). Odredbe austrijskog Zakona o zaštiti potrošača (KSchG) stoga se u načelu ne primjenjuju na poslovne korisnike, u mjeri u kojoj je to zakonom dozvoljeno."),
          p("(2) Za fizička lica koja prvi put zaključuju paket radi osnivanja preduzeća (osnivači preduzeća u smislu § 1 stav 3 KSchG), dodatno se primjenjuju napomene o pravu na odustanak iz Obavještenja o pravu na odustanak za potrošače na www.tapradar.app/widerrufsbelehrung."),
          p("(3) Odbijamo suprotne ili od ovih uslova odstupajuće uslove; oni ne postaju dio ugovora, osim ako TapRadar izričito pismeno ne prihvati njihovu valjanost."),
          p("(4) Ugovorna strana je TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austrija, PDV broj ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Opis usluga", blocks: [
          p("U zavisnosti od izabranog paketa, TapRadar vam pruža digitalnu platformu za podršku lojalnosti kupaca, posebno: podršku NFC oznaka i QR kodova za dodjelu digitalnih pečata, kreiranje i upravljanje digitalnim karticama lojalnosti, vidljivost u modulu Radar aplikacije za krajnje korisnike, uključujući prikaz u kategorijama i filterima (akcija, kupon, nagrada, top, radijus 500 m), prikaz verifikovanih recenzija kupaca, osiguravanje QR izloga, osnovnu, odnosno proširenu statistiku i analitiku, sistem PIN-a za zaposlene, kao i – u zavisnosti od paketa – reklamne i kampanjske funkcije, reklamu na osnovu blizine, push obavještenja krajnjim korisnicima i izvještaje."),
          p("Tačan obim funkcija pojedinih paketa proizilazi iz sljedećeg pregleda, kao i iz pregleda paketa objavljenog na www.tapradar.app/fuer-geschaefte u trenutku zaključenja ugovora, koji je sastavni dio ovih uslova."),
          table(
            ["Usluga", "Bronze", "Gold", "Platinum"],
            [
              ["Mjesečna cijena", "9,99 €", "49,99 €", "99,99 €"],
              ["Lokacije", "1", "1", "1"],
              ["Pristupi za zaposlene", "1", "5", "15"],
              ["NFC/QR pečatiranje", "da", "da", "da"],
              ["QR izlog", "da", "da", "da"],
              ["Osnovna statistika", "da", "da", "da"],
              ["Slikovna/PDF reklama", "ne", "2×/mjesec", "4×/mjesec"],
              ["Reklama na osnovu blizine (GPS)", "ne", "ne", "da"],
              ["Push obavještenja", "ne", "ne", "da"],
              ["Retargeting (30 dana)", "ne", "ne", "da"],
              ["Proširena analitika", "ne", "ne", "da"],
              ["Sedmični izvještaj e-poštom", "ne", "da", "da"],
              ["Mjesečni PDF izvještaj", "ne", "ne", "da"],
              ["Podrška", "Standardna", "Standardna", "Prioritetna 24h"],
            ],
          ),
          p("TapRadar sam ne pruža nikakvu robu ili usluge krajnjim korisnicima vašeg preduzeća i nije učesnik u pravnim poslovima koji nastaju između vas i vaših kupaca, posebno prilikom iskorištavanja nagrada."),
        ],
      },
      {
        heading: "§ 3 Registracija i zaključenje ugovora", blocks: [
          p("(1) Ugovor o plaćenom paketu nastaje izborom paketa u procesu narudžbe, unosom potrebnih podataka o preduzeću i plaćanju i finalizacijom narudžbe klikom na dugme „naruči uz obavezu plaćanja“ ili istoznačnom formulacijom. Prije podnošenja narudžbe, paket, ukupna cijena (uključujući PDV), interval fakturisanja i bitne karakteristike izabranog paketa sažimaju se u pregledu narudžbe."),
          p("(2) TapRadar potvrđuje zaključenje ugovora slanjem potvrdnog e-maila i aktivacijom kontrolne table."),
          callout("Provjera vašeg poslovnog identiteta (Know-Your-Business-Customer)", "U skladu sa članom 30. Uredbe (EU) 2022/2065 (Akt o digitalnim uslugama), operateri online tržišta koji posreduju u zaključivanju ugovora između preduzeća i potrošača dužni su pribaviti određene identifikacione podatke svojih poslovnih korisnika i, u razumnoj mjeri, provjeriti njihovu vjerodostojnost. TapRadar stoga prilikom registracije poslovnih korisnika prikuplja najmanje: naziv firme i pravni oblik, adresu, PDV broj ili matični broj, ime i kontakt podatke lica ovlaštenog za zastupanje, kao i vlastitu izjavu o zakonitosti ponuđene robe i usluga. Dužni ste ove podatke navesti potpuno i tačno i bez odgode nam saopćiti izmjene. Ako saznamo za indicije da su navedeni podaci netačni ili obmanjujući, ovlašteni smo suspendovati pristup kontrolnoj tabli do razjašnjenja."),
          p("(3) TapRadar zadržava pravo odbiti registracije bez navođenja razloga, posebno u slučaju opravdane sumnje na zloupotrebu, netačne podatke ili kršenje ovih uslova."),
        ],
      },
      {
        heading: "§ 4 Paketi, cijene i uslovi plaćanja", blocks: [
          p("(1) Važe mjesečne cijene paketa navedene u § 2, uvećane za zakonski PDV, ukoliko je primjenjivo. Aktuelne cijene mogu se vidjeti u pregledu paketa na www.tapradar.app/fuer-geschaefte, koji je mjerodavan u trenutku narudžbe."),
          p("(2) Obrada plaćanja odvija se preko pružaoca usluga plaćanja Stripe. Finalizacijom narudžbe ovlašćujete TapRadar da na početku svakog perioda fakturisanja naplati odgovarajući iznos pretplate putem sačuvanog sredstva plaćanja."),
          p("(3) Ako zakasnite sa dospjelim plaćanjem, TapRadar je ovlašten da, nakon prethodne opomene, privremeno blokira pristup kontrolnoj tabli dok se dugovani iznos ne izmiri; pravo na vanredni otkaz iz važnog razloga ostaje netaknuto."),
          p("(4) TapRadar je ovlašten prilagođavati cijene paketa sa dejstvom za buduće periode fakturisanja. Promjene cijena bit će vam saopćene u tekstualnom obliku najmanje 30 dana prije stupanja na snagu. Ako se ne usprotivite promjeni cijene do njenog stupanja na snagu, promjena se smatra prihvaćenom; u slučaju prigovora, imate pravo na vanredni otkaz u trenutku stupanja na snagu promjene cijene, na šta će vas TapRadar posebno upozoriti u obavještenju."),
        ],
      },
      {
        heading: "§ 5 Trajanje ugovora i otkaz", blocks: [
          p("(1) Ugovori o paketu zaključuju se na neodređeno vrijeme i automatski se produžavaju za dogovoreni period fakturisanja, po pravilu jedan mjesec, ukoliko se blagovremeno ne otkažu."),
          p("(2) Mjesečne pakete mogu obje strane otkazati u bilo kojem trenutku sa dejstvom na kraj tekućeg perioda fakturisanja, ukoliko u pregledu narudžbe u trenutku zaključenja ugovora nije dogovoren drugačiji minimalni period trajanja. Otkaz se može izjaviti putem kontrolne table ili e-poštom na support@tapradar.app."),
          p("(3) Pravo obje strane na vanredni otkaz iz važnog razloga ostaje netaknuto."),
          callout("Otkaz, suspenzija i ograničenje pristupa prema P2B uredbi", "U skladu sa članom 4. Uredbe (EU) 2019/1150 (P2B uredba), svaku odluku o ograničenju, suspenziji ili prekidu vašeg pristupa kontrolnoj tabli obrazlažemo opisom činjenica ili okolnosti koje su dovele do te odluke i dostavljamo vam ih prije ili u trenutku stupanja na snagu mjere, osim ako smo podložni pravnoj ili regulatornoj obavezi koja se tome protivi ili postoji opasnost od odgode, na primjer u slučaju ozbiljnog ili ponovljenog kršenja ovih uslova ili ugrožavanja sigurnosti platforme ili trećih lica. U ovim izuzetnim slučajevima obrazloženje se dostavlja bez odgode nakon stupanja na snagu mjere."),
          p("(4) Nakon punovažnog prestanka ugovornog odnosa, pristup kontrolnoj tabli se deaktivira; već sakupljeni pečati i recenzije krajnjih korisnika u vezi sa vašim preduzećem mogu se u aplikaciji za krajnje korisnike označiti kao neaktivni. Odredbe o periodu čuvanja u politici privatnosti ostaju netaknute."),
        ],
      },
      {
        heading: "§ 6 Vidljivost i rangiranje u modulu Radar", blocks: [
          callout("Transparentnost parametara rangiranja prema članu 5. P2B uredbe", "Redoslijed po kojem se partnerska preduzeća prikazuju u modulu Radar aplikacije za krajnje korisnike zavisi prvenstveno od udaljenosti od lokacije krajnjeg korisnika, filtera koje je taj korisnik izabrao (akcija, kupon, nagrada, top, radijus 500 m) i kategorija, aktuelnosti i broja verifikovanih recenzija, kao i dodatno od zakupljenog paketa, budući da su određene funkcije vidljivosti i reklamiranja (npr. istaknute kampanje) dostupne isključivo Gold i Platinum korisnicima. Plaćena prednost u rangiranju nezavisna od gore navedenih kriterija ne postoji."),
          p("Oznaka paketa prikazana u modulu Radar označava krajnjim korisnicima paket koji ste zakupili. TapRadar zadržava pravo prilagođavati parametre rangiranja u okviru daljeg razvoja platforme; bitne izmjene bit će najavljene u skladu sa § 13."),
        ],
      },
      {
        heading: "§ 7 Obaveze poslovnih korisnika", blocks: [
          p("(1) Dužni ste svoje podatke o preduzeću i kontaktu održavati potpunim, tačnim i ažurnim i bez odgode nam saopćavati izmjene."),
          p("(2) Odgovorni ste za sigurnost PIN kodova zaposlenih. Radnje preduzete putem pristupa zaposlenog koji vam je dodijeljen pripisuju se vama. Dužni ste bez odgode deaktivirati PIN-ove zaposlenih po prestanku radnog odnosa dotičnog lica."),
          p("(3) Reklamni i kampanjski sadržaji otpremljeni putem platforme, poput slika, PDF-ova, tekstova i push poruka, moraju biti zakoniti i posebno ne smiju povređivati prava trećih lica (autorska, prava na žig ili lična prava), odredbe Zakona o nelojalnoj konkurenciji (UWG) ili druge zakonske odredbe. Obavezujete se da obeštetite TapRadar za sve zahtjeve trećih lica koji proizilaze iz kršenja ove obaveze."),
          p("(4) Iskorištavanje nagrada prikazanih u aplikaciji i ispunjenje oglašenih ponuda prema krajnjim korisnicima isključivo je vaša odgovornost kao poslovnog korisnika."),
        ],
      },
      {
        heading: "§ 8 Push obavještenja i kampanje namijenjene krajnjim korisnicima", blocks: [
          p("(1) U okviru zakupljenog paketa možete slati push obavještenja i kampanje krajnjim korisnicima koji su već kupci vašeg preduzeća (najmanje jedan sakupljen pečat) ili koji se – isključivo u Platinum paketu putem reklame na osnovu blizine – nalaze u blizini vaše lokacije i za to su dali saglasnost za dijeljenje lokacije."),
          p("(2) Za sadržaj i zakonitost ovih kampanja, posebno poštivanje UWG-a, prava o označavanju reklame i dozvoljene učestalosti prema pregledu paketa (Gold: do 2 kampanje/mjesec; Platinum: do 4 kampanje/mjesec uključujući push), odgovorni ste vi. TapRadar osigurava samo tehničku infrastrukturu za isporuku i poštivanje ograničenja učestalosti. Detalje o podjeli odgovornosti u oblasti zaštite podataka potražite u politici privatnosti na www.tapradar.app/datenschutz."),
          p("(3) TapRadar je ovlašten prije slanja nasumično provjeriti pojedine sadržaje kampanja i odbiti nezakonite sadržaje ili sadržaje koji krše ove uslove."),
        ],
      },
      {
        heading: "§ 9 Recenzije i zabrana manipulisanih recenzija", blocks: [
          p("(1) Recenzije mogu davati isključivo krajnji korisnici čija je posjeta verifikovana stvarno sakupljenim pečatom."),
          callout("Zabrana lažnih recenzija", "Prema odredbama Zakona o nelojalnoj konkurenciji (UWG), izmijenjenim Omnibus direktivom (Direktiva (EU) 2019/2161), nedozvoljeno je objavljivati ili naručivati lažne recenzije, falsifikovati prave recenzije ili nalagati drugim preduzećima falsifikovanje recenzija. Obavezujete se da ni sami, ni putem trećih lica – posebno ne putem pristupa PIN kodova vaših zaposlenih – ne manipulišete recenzijama koje se odnose na vaše vlastito preduzeće, ne kupujete ih niti podstičete kupce zauzvrat za pozitivne recenzije. Kršenja ovlašćuju TapRadar da ukloni predmetne recenzije i izvrši vanredni otkaz."),
          p("(2) Pojedine recenzije možete putem kontrolne table prijaviti kao nezakonite, uvredljive ili očigledno neistinite; TapRadar provjerava svaku prijavu i saopćava rezultat vama i licu koje je dalo recenziju."),
        ],
      },
      {
        heading: "§ 10 Prava na sadržaj", blocks: [
          p("(1) TapRadar vam za trajanje ugovornog odnosa ustupa jednostavno, neprenosivo pravo korištenja platforme u ugovorom predviđenom obimu."),
          p("(2) Za sadržaje koje otpremite, poput logotipa, slika, tekstova i reklamnog materijala, ustupate TapRadar-u jednostavno pravo, ograničeno na trajanje ugovora, da koristi te sadržaje u okviru dogovorenih usluga, posebno za prikaz u aplikaciji, na QR izlogu i u push obavještenjima. Garantujete da raspolažete potrebnim pravima na otpremljenim sadržajima."),
          p("(3) Sva prava na TapRadar softveru, marki i samoj platformi ostaju kod TOY GmbH, odnosno njenih davalaca licence."),
        ],
      },
      {
        heading: "§ 11 Pristup podacima", blocks: [
          callout("Pristup podacima prema članu 9. P2B uredbe", "U skladu sa članom 9. P2B uredbe, obavještavamo vas da putem kontrolne table imate pristup statističkim i analitičkim podacima (osnovna, odnosno proširena analitika) prikupljenim u okviru vašeg paketa o vašim vlastitim krajnjim korisnicima, posebno o učestalosti posjeta, podacima o pečatima i iskorištavanju, kao i, u Platinum paketu, o pokazateljima vezanim za reklamu (CTR/CVR). Dodatni pristup ličnim, neobrađenim podacima pojedinačnih krajnjih korisnika se ne odobrava; agregirana analiza se vrši uz poštivanje politike privatnosti."),
        ],
      },
      {
        heading: "§ 12 Interno upravljanje pritužbama i medijacija", blocks: [
          callout("Upravljanje pritužbama prema članovima 11. i 12. P2B uredbe", "U skladu sa članom 11. P2B uredbe, TapRadar vam osigurava besplatan interni sistem za upravljanje pritužbama. Pritužbe u vezi sa nepoštivanjem ovih uslova, tehničkim problemima direktno povezanim sa pružanjem usluge, kao i mjerama prema §§ 5 i 6, možete u bilo kojem trenutku uputiti na beschwerde@tapradar.app. Svaku pritužbu obrađujemo blagovremeno i na odgovarajući način i rezultat vam saopćavamo u tekstualnom obliku. U skladu sa članom 12. P2B uredbe, napominjemo vam da za male firme poput TOY GmbH može otpasti obaveza imenovanja konkretnih medijatora; ukoliko se u pojedinačnom slučaju ne postigne miroljubivo vansudsko poravnanje, i dalje vam ostaje dostupan pristup redovnim sudovima prema § 15."),
        ],
      },
      {
        heading: "§ 13 Dostupnost i izmjene platforme", blocks: [
          p("(1) TapRadar nastoji osigurati visoku dostupnost platforme, ali ne može garantovati neprekidnu dostupnost. Radovi na održavanju, tehnički kvarovi ili dalji razvoj mogu dovesti do privremenih ograničenja."),
          p("(2) TapRadar je ovlašten u okviru daljeg razvoja prilagođavati, dopunjavati ili ukidati pojedine funkcije platforme, ukoliko time nije nesrazmjerno pogođen ugovorom dugovan osnovni obim usluga. Bitne izmjene, uključujući izmjene parametara rangiranja prema § 6, bit će vam najavljene u tekstualnom obliku najmanje 15 dana prije stupanja na snagu, osim ako je kraći rok neophodan iz pravnih ili sigurnosnih razloga."),
        ],
      },
      {
        heading: "§ 14 Odgovornost", blocks: [
          p("(1) TapRadar odgovara neograničeno za štete nastale povredom života, tijela ili zdravlja, kao i za štete nastale namjerom ili grubom nepažnjom, i prema kogentnim odredbama Zakona o odgovornosti za proizvod."),
          p("(2) Za štete nastale lakom nepažnjom, TapRadar odgovara samo u slučaju povrede bitnih ugovornih obaveza (kardinalnih obaveza), čije ispunjenje uopće omogućava uredno izvršenje ugovora i na čije poštivanje se redovno možete osloniti; u tom slučaju odgovornost je po visini ograničena na štetu koja je tipično predvidiva za ovu vrstu ugovora."),
          p("(3) Inače je odgovornost za štete nastale lakom nepažnjom isključena, u mjeri u kojoj je to zakonom dozvoljeno."),
          p("(4) TapRadar ne odgovara za radnje vaših krajnjih korisnika, za tačnost recenzija, niti za izgubljeni promet uslijed ograničenja, suspenzije ili prekida pristupa prema § 5 ili § 6."),
          p("(5) Gore navedena ograničenja odgovornosti važe u istom obimu u korist izvršilaca obaveza TapRadar-a."),
        ],
      },
      {
        heading: "§ 15 Završne odredbe", blocks: [
          p("(1) Primjenjuje se austrijsko pravo uz isključenje Konvencije UN o ugovorima o međunarodnoj prodaji robe (CISG) i kolizionih normi međunarodnog privatnog prava."),
          p("(2) Isključivo nadležan sud za sve sporove koji proisteknu iz ovog ugovora ili u vezi sa njim je stvarno nadležan sud za 2353 Guntramsdorf."),
          p("(3) Ukoliko pojedine odredbe ovih uslova budu ili postanu nevažeće, to ne utiče na valjanost ostalih odredbi. Na mjesto nevažeće odredbe stupa uređenje koje se ekonomskoj svrsi nevažeće odredbe najviše približava."),
          p("(4) Sporazuma van ovog dokumenta nema. Izmjene i dopune ovog ugovora zahtijevaju tekstualni oblik, osim ako je ovim uslovima drugačije određeno."),
        ],
      },
    ],
    sourcesHeading: "Popis izvora",
    sourcesIntro: "Zvanični izvori EU i Austrije na kojima se zasnivaju ovi uslovi za poslovne korisnike:",
    sources: [
      { label: "Uredba o odnosima platformi i preduzeća (P2B uredba), Uredba (EU) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Akt o digitalnim uslugama, Uredba (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Direktiva o pravima potrošača, Direktiva 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Austrijski zakon o ugovorima na daljinu i van poslovnih prostorija (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  hr: {
    title: "Uvjeti za poslovne korisnike",
    subtitle: "Opći uvjeti poslovanja za TapRadar nadzornu ploču (poslovni korisnici) – TOY GmbH",
    stand: "Ažurirano: 9. kolovoza 2026. · Verzija 2026-08-09.2",
    intro: [
      p("TOY GmbH sa sjedištem u Guntramsdorfu, Austrija (dalje u tekstu „TapRadar”, „mi”), upravlja digitalnom platformom TapRadar, koju čine besplatna mobilna aplikacija za krajnje korisnike (Radar, Pečat, Kartice, Home) i plaćena nadzorna ploča za poslovne korisnike za digitalnu podršku lojalnosti kupaca putem kartica vjernosti temeljenih na NFC i QR tehnologiji. Putem modula Radar aplikacije za krajnje korisnike, TapRadar posreduje vaše ponude, akcije i recenzije krajnjim korisnicima i u tom pogledu predstavlja online posredničku uslugu u smislu Uredbe (EU) 2019/1150 (P2B uredba). Ovi uvjeti za poslovne korisnike uređuju ugovorni odnos između TapRadara i poduzeća koja se pretplate na plaćeni paket (dalje u tekstu „poslovni korisnici”)."),
    ],
    sections: [
      {
        heading: "§ 1 Područje primjene i ugovorne strane", blocks: [
          p("(1) Ovi uvjeti primjenjuju se isključivo na poduzeća koja se, u okviru svoje gospodarske ili samostalne profesionalne djelatnosti, pretplate na plaćeni TapRadar paket (Bronze, Gold ili Platinum) (poduzetnici u smislu § 1 KSchG i § 1 UGB). Odredbe austrijskog Zakona o zaštiti potrošača (KSchG) stoga se u pravilu ne primjenjuju na poslovne korisnike, u mjeri u kojoj je to zakonom dopušteno."),
          p("(2) Za fizičke osobe koje prvi put sklapaju paket radi osnivanja poduzeća (osnivači poduzeća u smislu § 1 st. 3 KSchG), dodatno se primjenjuju napomene o pravu na odustanak iz Obavijesti o pravu na odustanak za potrošače na www.tapradar.app/widerrufsbelehrung."),
          p("(3) Odbijamo suprotne ili od ovih uvjeta odstupajuće uvjete; oni ne postaju dio ugovora, osim ako TapRadar izričito pismeno ne prihvati njihovu valjanost."),
          p("(4) Ugovorna strana je TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austrija, OIB/PDV broj ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Opis usluga", blocks: [
          p("Ovisno o odabranom paketu, TapRadar vam pruža digitalnu platformu za podršku lojalnosti kupaca, posebice: podršku NFC oznaka i QR kodova za dodjelu digitalnih pečata, izradu i upravljanje digitalnim karticama vjernosti, vidljivost u modulu Radar aplikacije za krajnje korisnike, uključujući prikaz u kategorijama i filtrima (akcija, kupon, nagrada, top, radijus 500 m), prikaz provjerenih recenzija kupaca, osiguravanje QR izloga, osnovnu, odnosno proširenu statistiku i analitiku, sustav PIN-a za zaposlenike te – ovisno o paketu – reklamne i kampanjske funkcije, oglašavanje temeljeno na blizini, push obavijesti krajnjim korisnicima i izvješća."),
          p("Točan opseg funkcija pojedinih paketa proizlazi iz sljedećeg pregleda te iz pregleda paketa objavljenog na www.tapradar.app/fuer-geschaefte u trenutku sklapanja ugovora, koji je sastavni dio ovih uvjeta."),
          table(
            ["Usluga", "Bronze", "Gold", "Platinum"],
            [
              ["Mjesečna cijena", "9,99 €", "49,99 €", "99,99 €"],
              ["Lokacije", "1", "1", "1"],
              ["Pristupi za zaposlenike", "1", "5", "15"],
              ["NFC/QR pečatiranje", "da", "da", "da"],
              ["QR izlog", "da", "da", "da"],
              ["Osnovna statistika", "da", "da", "da"],
              ["Slikovna/PDF reklama", "ne", "2×/mjesec", "4×/mjesec"],
              ["Oglašavanje temeljeno na blizini (GPS)", "ne", "ne", "da"],
              ["Push obavijesti", "ne", "ne", "da"],
              ["Retargeting (30 dana)", "ne", "ne", "da"],
              ["Proširena analitika", "ne", "ne", "da"],
              ["Tjedno izvješće e-poštom", "ne", "da", "da"],
              ["Mjesečno PDF izvješće", "ne", "ne", "da"],
              ["Podrška", "Standardna", "Standardna", "Prioritetna 24h"],
            ],
          ),
          p("TapRadar sam ne pruža nikakvu robu ili usluge krajnjim korisnicima vašeg poduzeća i nije sudionik pravnih poslova koji nastaju između vas i vaših kupaca, posebice prilikom iskorištavanja nagrada."),
        ],
      },
      {
        heading: "§ 3 Registracija i sklapanje ugovora", blocks: [
          p("(1) Ugovor o plaćenom paketu sklapa se odabirom paketa u procesu narudžbe, unosom potrebnih podataka o poduzeću i plaćanju te finalizacijom narudžbe klikom na gumb „naruči uz obvezu plaćanja” ili istoznačnom formulacijom. Prije podnošenja narudžbe, paket, ukupna cijena (uključujući PDV), interval fakturiranja i bitne značajke odabranog paketa sažimaju se u pregledu narudžbe."),
          p("(2) TapRadar potvrđuje sklapanje ugovora slanjem potvrdnog e-maila i aktivacijom nadzorne ploče."),
          callout("Provjera vašeg poslovnog identiteta (Know-Your-Business-Customer)", "Sukladno čl. 30. Uredbe (EU) 2022/2065 (Akt o digitalnim uslugama), operatori online tržišta koji posreduju u sklapanju ugovora između poduzeća i potrošača dužni su pribaviti određene identifikacijske podatke svojih poslovnih korisnika i, u razumnoj mjeri, provjeriti njihovu vjerodostojnost. TapRadar stoga prilikom registracije poslovnih korisnika prikuplja najmanje: naziv tvrtke i pravni oblik, adresu, OIB/PDV broj ili matični broj, ime i kontaktne podatke osobe ovlaštene za zastupanje te vlastitu izjavu o zakonitosti ponuđene robe i usluga. Dužni ste ove podatke navesti potpuno i točno te nam bez odgode priopćiti izmjene. Ako saznamo za naznake da su navedeni podaci netočni ili obmanjujući, ovlašteni smo suspendirati pristup nadzornoj ploči do razjašnjenja."),
          p("(3) TapRadar zadržava pravo odbiti registracije bez navođenja razloga, posebice u slučaju opravdane sumnje na zlouporabu, netočne podatke ili kršenje ovih uvjeta."),
        ],
      },
      {
        heading: "§ 4 Paketi, cijene i uvjeti plaćanja", blocks: [
          p("(1) Vrijede mjesečne cijene paketa navedene u § 2, uvećane za zakonski PDV, ako je primjenjivo. Aktualne cijene mogu se vidjeti u pregledu paketa na www.tapradar.app/fuer-geschaefte, koji je mjerodavan u trenutku narudžbe."),
          p("(2) Obrada plaćanja odvija se putem pružatelja usluga plaćanja Stripe. Finalizacijom narudžbe ovlašćujete TapRadar da na početku svakog razdoblja fakturiranja naplati odgovarajući iznos pretplate putem spremljenog sredstva plaćanja."),
          p("(3) Ako zakasnite s dospjelim plaćanjem, TapRadar je ovlašten, nakon prethodne opomene, privremeno blokirati pristup nadzornoj ploči dok se dugovani iznos ne podmiri; pravo na izvanredni otkaz iz važnog razloga ostaje netaknuto."),
          p("(4) TapRadar je ovlašten prilagođavati cijene paketa s učinkom za buduća razdoblja fakturiranja. Promjene cijena bit će vam priopćene u tekstualnom obliku najmanje 30 dana prije stupanja na snagu. Ako se ne usprotivite promjeni cijene do njenog stupanja na snagu, promjena se smatra prihvaćenom; u slučaju prigovora, imate pravo na izvanredni otkaz u trenutku stupanja na snagu promjene cijene, na što će vas TapRadar posebno upozoriti u obavijesti."),
        ],
      },
      {
        heading: "§ 5 Trajanje ugovora i otkaz", blocks: [
          p("(1) Ugovori o paketu sklapaju se na neodređeno vrijeme i automatski se produljuju za dogovoreno razdoblje fakturiranja, u pravilu jedan mjesec, ako se pravodobno ne otkažu."),
          p("(2) Mjesečne pakete mogu obje strane otkazati u bilo kojem trenutku s učinkom na kraj tekućeg razdoblja fakturiranja, ako u pregledu narudžbe u trenutku sklapanja ugovora nije dogovoreno drugačije minimalno trajanje. Otkaz se može izjaviti putem nadzorne ploče ili e-poštom na support@tapradar.app."),
          p("(3) Pravo obiju strana na izvanredni otkaz iz važnog razloga ostaje netaknuto."),
          callout("Otkaz, obustava i ograničenje pristupa prema P2B uredbi", "Sukladno čl. 4. Uredbe (EU) 2019/1150 (P2B uredba), svaku odluku o ograničenju, obustavi ili prekidu vašeg pristupa nadzornoj ploči obrazlažemo opisom činjenica ili okolnosti koje su dovele do te odluke i dostavljamo vam ih prije ili u trenutku stupanja na snagu mjere, osim ako smo podložni pravnoj ili regulatornoj obvezi koja se tome protivi ili postoji opasnost od odgode, primjerice u slučaju ozbiljnog ili ponovljenog kršenja ovih uvjeta ili ugrožavanja sigurnosti platforme ili trećih osoba. U tim iznimnim slučajevima obrazloženje se dostavlja bez odgode nakon stupanja na snagu mjere."),
          p("(4) Nakon valjanog prestanka ugovornog odnosa, pristup nadzornoj ploči se deaktivira; već sakupljeni pečati i recenzije krajnjih korisnika u vezi s vašim poduzećem mogu se u aplikaciji za krajnje korisnike označiti kao neaktivni. Odredbe o razdoblju čuvanja u politici privatnosti ostaju netaknute."),
        ],
      },
      {
        heading: "§ 6 Vidljivost i rangiranje u modulu Radar", blocks: [
          callout("Transparentnost parametara rangiranja prema čl. 5. P2B uredbe", "Redoslijed kojim se partnerska poduzeća prikazuju u modulu Radar aplikacije za krajnje korisnike ovisi prvenstveno o udaljenosti od lokacije krajnjeg korisnika, filtrima koje je taj korisnik odabrao (akcija, kupon, nagrada, top, radijus 500 m) i kategorijama, aktualnosti i broju provjerenih recenzija te dodatno o zakupljenom paketu, budući da su određene funkcije vidljivosti i oglašavanja (npr. istaknute kampanje) dostupne isključivo Gold i Platinum korisnicima. Plaćena prednost u rangiranju neovisna o gore navedenim kriterijima ne postoji."),
          p("Oznaka paketa prikazana u modulu Radar označava krajnjim korisnicima paket koji ste zakupili. TapRadar zadržava pravo prilagođavati parametre rangiranja u okviru daljnjeg razvoja platforme; bitne izmjene bit će najavljene sukladno § 13."),
        ],
      },
      {
        heading: "§ 7 Obveze poslovnih korisnika", blocks: [
          p("(1) Dužni ste svoje podatke o tvrtki i kontaktu održavati potpunima, točnima i ažurnima te nam bez odgode priopćavati izmjene."),
          p("(2) Odgovorni ste za sigurnost PIN kodova zaposlenika. Radnje poduzete putem pristupa zaposlenika koji vam je dodijeljen pripisuju se vama. Dužni ste bez odgode deaktivirati PIN-ove zaposlenika po prestanku radnog odnosa dotične osobe."),
          p("(3) Reklamni i kampanjski sadržaji učitani putem platforme, poput slika, PDF-ova, tekstova i push poruka, moraju biti zakoniti i posebice ne smiju povređivati prava trećih osoba (autorska prava, prava na žig ili osobna prava), odredbe Zakona o suzbijanju nepoštenog tržišnog natjecanja (UWG) ili druge zakonske odredbe. Obvezujete se obeštetiti TapRadar za sve zahtjeve trećih osoba koji proizlaze iz kršenja ove obveze."),
          p("(4) Iskorištavanje nagrada prikazanih u aplikaciji i ispunjenje oglašenih ponuda prema krajnjim korisnicima isključivo je vaša odgovornost kao poslovnog korisnika."),
        ],
      },
      {
        heading: "§ 8 Push obavijesti i kampanje namijenjene krajnjim korisnicima", blocks: [
          p("(1) U okviru zakupljenog paketa možete slati push obavijesti i kampanje krajnjim korisnicima koji su već kupci vašeg poduzeća (barem jedan sakupljen pečat) ili koji se – isključivo u Platinum paketu putem oglašavanja temeljenog na blizini – nalaze u blizini vaše lokacije i za to su dali privolu za dijeljenje lokacije."),
          p("(2) Za sadržaj i zakonitost tih kampanja, posebice poštovanje UWG-a, prava o označavanju reklame i dopuštene učestalosti prema pregledu paketa (Gold: do 2 kampanje/mjesec; Platinum: do 4 kampanje/mjesec uključujući push), odgovorni ste vi. TapRadar osigurava samo tehničku infrastrukturu za isporuku i poštovanje ograničenja učestalosti. Pojedinosti o podjeli odgovornosti u području zaštite podataka potražite u politici privatnosti na www.tapradar.app/datenschutz."),
          p("(3) TapRadar je ovlašten prije slanja nasumično provjeriti pojedine sadržaje kampanja i odbiti nezakonite sadržaje ili sadržaje koji krše ove uvjete."),
        ],
      },
      {
        heading: "§ 9 Recenzije i zabrana manipuliranih recenzija", blocks: [
          p("(1) Recenzije mogu davati isključivo krajnji korisnici čiji je posjet potvrđen stvarno sakupljenim pečatom."),
          callout("Zabrana lažnih recenzija", "Prema odredbama Zakona o suzbijanju nepoštenog tržišnog natjecanja (UWG), izmijenjenim Omnibus direktivom (Direktiva (EU) 2019/2161), nedopušteno je objavljivati ili naručivati lažne recenzije, krivotvoriti prave recenzije ili nalagati drugim poduzećima krivotvorenje recenzija. Obvezujete se da ni sami, ni putem trećih osoba – posebice ne putem pristupa PIN kodova vaših zaposlenika – nećete manipulirati recenzijama koje se odnose na vaše vlastito poduzeće, kupovati ih niti poticati kupce zauzvrat za pozitivne recenzije. Kršenja ovlašćuju TapRadar na uklanjanje predmetnih recenzija i na izvanredni otkaz."),
          p("(2) Pojedine recenzije možete putem nadzorne ploče prijaviti kao nezakonite, uvredljive ili očito neistinite; TapRadar provjerava svaku prijavu i priopćava rezultat vama i osobi koja je dala recenziju."),
        ],
      },
      {
        heading: "§ 10 Prava na sadržaj", blocks: [
          p("(1) TapRadar vam za trajanje ugovornog odnosa ustupa jednostavno, neprenosivo pravo korištenja platforme u ugovorom predviđenom opsegu."),
          p("(2) Za sadržaje koje učitate, poput logotipa, slika, tekstova i reklamnog materijala, ustupate TapRadaru jednostavno pravo, ograničeno na trajanje ugovora, koristiti te sadržaje u okviru dogovorenih usluga, posebice za prikaz u aplikaciji, na QR izlogu i u push obavijestima. Jamčite da raspolažete potrebnim pravima na učitanim sadržajima."),
          p("(3) Sva prava na TapRadar softveru, marki i samoj platformi ostaju kod TOY GmbH, odnosno njenih davatelja licencije."),
        ],
      },
      {
        heading: "§ 11 Pristup podacima", blocks: [
          callout("Pristup podacima prema čl. 9. P2B uredbe", "Sukladno čl. 9. P2B uredbe, obavještavamo vas da putem nadzorne ploče imate pristup statističkim i analitičkim podacima (osnovna, odnosno proširena analitika) prikupljenim u okviru vašeg paketa o vašim vlastitim krajnjim korisnicima, posebice o učestalosti posjeta, podacima o pečatima i iskorištavanju te, u Platinum paketu, o pokazateljima vezanim uz oglašavanje (CTR/CVR). Dodatni pristup osobnim, neobrađenim podacima pojedinih krajnjih korisnika se ne odobrava; agregirana analiza provodi se uz poštovanje politike privatnosti."),
        ],
      },
      {
        heading: "§ 12 Interno rješavanje pritužbi i medijacija", blocks: [
          callout("Rješavanje pritužbi prema čl. 11. i 12. P2B uredbe", "Sukladno čl. 11. P2B uredbe, TapRadar vam osigurava besplatan interni sustav za rješavanje pritužbi. Pritužbe u vezi s nepoštovanjem ovih uvjeta, tehničkim problemima izravno povezanim s pružanjem usluge te mjerama prema §§ 5 i 6, možete u bilo kojem trenutku uputiti na beschwerde@tapradar.app. Svaku pritužbu obrađujemo pravodobno i na odgovarajući način te vam rezultat priopćavamo u tekstualnom obliku. Sukladno čl. 12. P2B uredbe, napominjemo vam da za mala poduzeća poput TOY GmbH može otpasti obveza imenovanja konkretnih medijatora; ako se u pojedinom slučaju ne postigne mirno izvansudsko poravnanje, i dalje vam ostaje dostupan pristup redovnim sudovima prema § 15."),
        ],
      },
      {
        heading: "§ 13 Dostupnost i izmjene platforme", blocks: [
          p("(1) TapRadar nastoji osigurati visoku dostupnost platforme, ali ne može jamčiti neprekidnu dostupnost. Radovi na održavanju, tehnički kvarovi ili daljnji razvoj mogu dovesti do privremenih ograničenja."),
          p("(2) TapRadar je ovlašten u okviru daljnjeg razvoja prilagođavati, dopunjavati ili ukidati pojedine funkcije platforme, ako time nije nerazmjerno pogođen ugovorom dugovan osnovni opseg usluga. Bitne izmjene, uključujući izmjene parametara rangiranja prema § 6, bit će vam najavljene u tekstualnom obliku najmanje 15 dana prije stupanja na snagu, osim ako je kraći rok nužan iz pravnih ili sigurnosnih razloga."),
        ],
      },
      {
        heading: "§ 14 Odgovornost", blocks: [
          p("(1) TapRadar odgovara neograničeno za štete nastale povredom života, tijela ili zdravlja, kao i za štete nastale namjerom ili grubom nepažnjom, te prema kogentnim odredbama Zakona o odgovornosti za proizvod."),
          p("(2) Za štete nastale lakom nepažnjom, TapRadar odgovara samo u slučaju povrede bitnih ugovornih obveza (kardinalnih obveza), čije ispunjenje uopće omogućuje uredno izvršenje ugovora i na čije se poštovanje redovito možete osloniti; u tom slučaju odgovornost je po visini ograničena na štetu koja je tipično predvidiva za ovu vrstu ugovora."),
          p("(3) Inače je odgovornost za štete nastale lakom nepažnjom isključena, u mjeri u kojoj je to zakonom dopušteno."),
          p("(4) TapRadar ne odgovara za radnje vaših krajnjih korisnika, za točnost recenzija, niti za izgubljeni promet uslijed ograničenja, obustave ili prekida pristupa prema § 5 ili § 6."),
          p("(5) Gore navedena ograničenja odgovornosti vrijede u istom opsegu u korist izvršitelja obveza TapRadara."),
        ],
      },
      {
        heading: "§ 15 Završne odredbe", blocks: [
          p("(1) Primjenjuje se austrijsko pravo uz isključenje Konvencije UN-a o ugovorima o međunarodnoj prodaji robe (CISG) i kolizijskih normi međunarodnog privatnog prava."),
          p("(2) Isključivo nadležan sud za sve sporove koji proizlaze iz ovog ugovora ili u vezi s njim je stvarno nadležan sud za 2353 Guntramsdorf."),
          p("(3) Ako pojedine odredbe ovih uvjeta budu ili postanu nevaljane, to ne utječe na valjanost ostalih odredbi. Umjesto nevaljane odredbe primjenjuje se uređenje koje se gospodarskoj svrsi nevaljane odredbe najviše približava."),
          p("(4) Sporazuma izvan ovog dokumenta nema. Izmjene i dopune ovog ugovora zahtijevaju tekstualni oblik, osim ako je ovim uvjetima drugačije određeno."),
        ],
      },
    ],
    sourcesHeading: "Popis izvora",
    sourcesIntro: "Službeni izvori EU-a i Austrije na kojima se temelje ovi uvjeti za poslovne korisnike:",
    sources: [
      { label: "Uredba o odnosima platformi i poduzeća (P2B uredba), Uredba (EU) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Akt o digitalnim uslugama, Uredba (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Direktiva o pravima potrošača, Direktiva 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Austrijski zakon o ugovorima na daljinu i izvan poslovnih prostorija (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  ro: {
    title: "Termeni pentru clienți comerciali",
    subtitle: "Termeni și condiții generale pentru panoul de control TapRadar (clienți comerciali) – TOY GmbH",
    stand: "Actualizat: 9 august 2026 · Versiunea 2026-08-09.2",
    intro: [
      p("TOY GmbH, cu sediul în Guntramsdorf, Austria (denumită în continuare „TapRadar”, „noi”), operează platforma digitală TapRadar, formată dintr-o aplicație mobilă gratuită pentru clienții finali (Radar, Ștampilă, Carduri, Home) și un panou de control plătit pentru clienți comerciali, destinat fidelizării digitale a clienților prin carduri de fidelitate bazate pe tehnologia NFC și QR. Prin intermediul modulului Radar al aplicației pentru clienți finali, TapRadar intermediază ofertele, promoțiile și recenziile dumneavoastră către clienții finali și, în această privință, constituie un serviciu de intermediere online în sensul Regulamentului (UE) 2019/1150 (Regulamentul P2B). Prezenții Termeni pentru clienți comerciali reglementează raportul contractual dintre TapRadar și companiile care se abonează la un plan plătit (denumite în continuare „clienți comerciali”)."),
    ],
    sections: [
      {
        heading: "§ 1 Domeniul de aplicare și părțile contractante", blocks: [
          p("(1) Prezenții termeni se aplică exclusiv companiilor care, în cadrul activității lor comerciale sau profesionale independente, se abonează la un plan TapRadar plătit (Bronze, Gold sau Platinum) (comercianți în sensul § 1 KSchG și § 1 UGB). Prin urmare, dispozițiile Legii austriece privind protecția consumatorilor (KSchG) nu se aplică, în principiu, clienților comerciali, în măsura permisă de lege."),
          p("(2) Pentru persoanele fizice care încheie pentru prima dată un plan în scopul înființării unei companii (fondatori de start-up în sensul § 1 alin. (3) KSchG), se aplică suplimentar indicațiile privind dreptul de retragere din Notificarea de retragere pentru consumatori disponibilă la www.tapradar.app/widerrufsbelehrung."),
          p("(3) Ne opunem oricăror condiții contrare sau care se abat de la prezenții termeni; acestea nu devin parte a contractului, cu excepția cazului în care TapRadar acceptă în mod expres, în scris, valabilitatea lor."),
          p("(4) Partea contractantă este TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, cod TVA ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Descrierea serviciilor", blocks: [
          p("În funcție de planul ales, TapRadar vă pune la dispoziție o platformă digitală de fidelizare a clienților, incluzând în special: suport pentru etichete NFC și coduri QR pentru acordarea de ștampile digitale, crearea și gestionarea cardurilor de fidelitate digitale, vizibilitate în modulul Radar al aplicației pentru clienți finali, inclusiv afișare în categorii și filtre (ofertă, cupon, recompensă, top, rază de 500 m), afișarea recenziilor verificate ale clienților, furnizarea unui afiș vitrină cu cod QR, statistici și analize de bază, respectiv avansate, un sistem de PIN pentru angajați, precum și – în funcție de plan – funcții de publicitate și campanii, publicitate bazată pe proximitate, notificări push către clienții finali și rapoarte."),
          p("Domeniul exact de funcții al fiecărui plan reiese din tabelul de mai jos, precum și din prezentarea generală a planurilor publicată pe www.tapradar.app/fuer-geschaefte la momentul încheierii contractului, care face parte integrantă din prezenții termeni."),
          table(
            ["Serviciu", "Bronze", "Gold", "Platinum"],
            [
              ["Preț lunar", "9,99 €", "49,99 €", "99,99 €"],
              ["Locații", "1", "1", "1"],
              ["Acces angajați", "1", "5", "15"],
              ["Ștampilare NFC/QR", "da", "da", "da"],
              ["Afiș vitrină QR", "da", "da", "da"],
              ["Statistici de bază", "da", "da", "da"],
              ["Publicitate imagine/PDF", "nu", "2×/lună", "4×/lună"],
              ["Publicitate bazată pe proximitate (GPS)", "nu", "nu", "da"],
              ["Notificări push", "nu", "nu", "da"],
              ["Retargeting (30 de zile)", "nu", "nu", "da"],
              ["Analize avansate", "nu", "nu", "da"],
              ["Raport săptămânal prin e-mail", "nu", "da", "da"],
              ["Raport PDF lunar", "nu", "nu", "da"],
              ["Asistență", "Standard", "Standard", "Prioritară 24h"],
            ],
          ),
          p("TapRadar nu furnizează ea însăși niciun bun sau serviciu clienților finali ai afacerii dumneavoastră și nu este parte la tranzacțiile încheiate între dumneavoastră și clienții dumneavoastră, în special în ceea ce privește valorificarea recompenselor."),
        ],
      },
      {
        heading: "§ 3 Înregistrare și încheierea contractului", blocks: [
          p("(1) Contractul pentru planul plătit se încheie prin selectarea unui plan în procesul de comandă, furnizarea datelor necesare despre companie și plată, și finalizarea comenzii prin apăsarea butonului „comandă cu obligație de plată” sau a unei formulări echivalente. Înainte de trimiterea comenzii, planul, prețul total (inclusiv TVA), intervalul de facturare și caracteristicile esențiale ale planului ales sunt rezumate într-o prezentare generală a comenzii."),
          p("(2) TapRadar confirmă încheierea contractului prin trimiterea unui e-mail de confirmare și activarea panoului de control."),
          callout("Verificarea identității dumneavoastră comerciale (Know-Your-Business-Customer)", "În conformitate cu art. 30 din Regulamentul (UE) 2022/2065 (Legea privind serviciile digitale), operatorii de piețe online care facilitează încheierea de contracte între companii și consumatori sunt obligați să obțină anumite date de identificare de la utilizatorii lor comerciali și, în măsura rezonabilă, să le verifice plauzibilitatea. Prin urmare, TapRadar colectează, la înregistrarea clienților comerciali, cel puțin: denumirea companiei și forma juridică, adresa, codul TVA sau numărul de înregistrare la registrul comerțului, numele și datele de contact ale persoanei autorizate să reprezinte compania, precum și o autodeclarație privind legalitatea bunurilor și serviciilor oferite. Sunteți obligat să furnizați aceste date complet și corect și să ne informați fără întârziere cu privire la orice modificare. Dacă aflăm indicii că datele furnizate sunt incorecte sau induc în eroare, avem dreptul de a suspenda accesul la panoul de control până la clarificare."),
          p("(3) TapRadar își rezervă dreptul de a respinge înregistrările fără a preciza motivele, în special în cazul unei suspiciuni întemeiate de utilizare abuzivă, date incorecte sau încălcarea prezenților termeni."),
        ],
      },
      {
        heading: "§ 4 Planuri, prețuri și condiții de plată", blocks: [
          p("(1) Se aplică prețurile lunare ale planurilor menționate la § 2, majorate cu TVA legal, dacă este cazul. Prețurile actuale pot fi consultate în prezentarea generală a planurilor de pe www.tapradar.app/fuer-geschaefte, care este relevantă la momentul comenzii."),
          p("(2) Procesarea plăților se realizează prin intermediul furnizorului de servicii de plată Stripe. Prin finalizarea comenzii, autorizați TapRadar să încaseze suma abonamentului respectiv la începutul fiecărui interval de facturare prin intermediul mijlocului de plată salvat."),
          p("(3) Dacă întârziați cu o plată scadentă, TapRadar are dreptul, după o notificare prealabilă, să blocheze temporar accesul la panoul de control până la achitarea sumei restante; dreptul de reziliere extraordinară pentru motive întemeiate rămâne neafectat."),
          p("(4) TapRadar are dreptul de a ajusta prețurile planurilor cu efect pentru intervalele de facturare viitoare. Modificările de preț vă vor fi comunicate în formă scrisă cu cel puțin 30 de zile înainte de intrarea lor în vigoare. Dacă nu vă opuneți modificării de preț până la intrarea în vigoare a acesteia, modificarea este considerată acceptată; în caz de opoziție, aveți dreptul la reziliere extraordinară la data intrării în vigoare a modificării de preț, aspect asupra căruia TapRadar vă va atrage atenția separat în comunicare."),
        ],
      },
      {
        heading: "§ 5 Durata contractului și rezilierea", blocks: [
          p("(1) Contractele pentru planuri se încheie pe durată nedeterminată și se prelungesc automat cu intervalul de facturare convenit, de regulă o lună, dacă nu sunt reziliate la timp."),
          p("(2) Planurile lunare pot fi reziliate de oricare dintre părți în orice moment, cu efect la sfârșitul intervalului de facturare curent, dacă în prezentarea generală a comenzii, la momentul încheierii contractului, nu a fost convenită o durată minimă diferită. Rezilierea poate fi declarată prin intermediul panoului de control sau prin e-mail la support@tapradar.app."),
          p("(3) Dreptul ambelor părți la reziliere extraordinară pentru motive întemeiate rămâne neafectat."),
          callout("Reziliere, suspendare și restricționare a accesului conform Regulamentului P2B", "În conformitate cu art. 4 din Regulamentul (UE) 2019/1150 (Regulamentul P2B), motivăm orice decizie de restricționare, suspendare sau încetare a accesului dumneavoastră la panoul de control printr-o prezentare a faptelor sau a circumstanțelor care au condus la această decizie și v-o comunicăm înainte sau la momentul intrării în vigoare a măsurii, cu excepția cazului în care ne aflăm sub o obligație legală sau de reglementare care se opune acestui lucru sau există pericol în întârziere, de exemplu în cazul unei încălcări grave sau repetate a prezenților termeni sau al unei amenințări la adresa securității platformei sau a terților. În aceste cazuri excepționale, motivarea este furnizată fără întârziere după intrarea în vigoare a măsurii."),
          p("(4) După încetarea valabilă a raportului contractual, accesul la panoul de control este dezactivat; ștampilele și recenziile clienților finali deja colectate pentru afacerea dumneavoastră pot fi marcate ca inactive în aplicația pentru clienți finali. Dispozițiile privind perioada de stocare din politica de confidențialitate rămân neafectate."),
        ],
      },
      {
        heading: "§ 6 Vizibilitate și clasament în modulul Radar", blocks: [
          callout("Transparența parametrilor de clasament conform art. 5 din Regulamentul P2B", "Ordinea în care afacerile partenere sunt afișate în modulul Radar al aplicației pentru clienți finali depinde în primul rând de distanța față de locația clientului final, de filtrele selectate de acesta (ofertă, cupon, recompensă, top, rază de 500 m) și de categorii, de actualitatea și numărul recenziilor verificate, precum și, suplimentar, de planul achiziționat, întrucât anumite funcții de vizibilitate și publicitate (de exemplu campaniile evidențiate) sunt disponibile exclusiv clienților Gold și Platinum. Nu există o preferință de clasament plătită, independentă de criteriile menționate mai sus."),
          p("Insigna de plan afișată în modulul Radar indică clienților finali planul achiziționat de dumneavoastră. TapRadar își rezervă dreptul de a ajusta parametrii de clasament în cadrul dezvoltării continue a platformei; modificările substanțiale vor fi anunțate conform § 13."),
        ],
      },
      {
        heading: "§ 7 Obligațiile clienților comerciali", blocks: [
          p("(1) Sunteți obligat să mențineți datele companiei și de contact complete, corecte și actualizate și să ne informați fără întârziere cu privire la modificări."),
          p("(2) Sunteți responsabil pentru securitatea codurilor PIN ale angajaților. Acțiunile efectuate prin intermediul unui acces al angajatului atribuit dumneavoastră vă sunt imputate. Sunteți obligat să dezactivați fără întârziere codurile PIN ale angajaților la plecarea persoanei respective."),
          p("(3) Conținutul publicitar și de campanie încărcat prin intermediul platformei, precum imagini, PDF-uri, texte și mesaje push, trebuie să fie legal și, în special, nu trebuie să încalce drepturile terților (drepturi de autor, de marcă sau ale personalității), dispozițiile legii privind concurența neloială (UWG) sau alte dispoziții legale. Vă angajați să despăgubiți TapRadar pentru toate pretențiile terților care rezultă din încălcarea acestei obligații."),
          p("(4) Valorificarea recompenselor afișate în aplicație și îndeplinirea ofertelor promovate față de clienții finali sunt exclusiv responsabilitatea dumneavoastră, în calitate de client comercial."),
        ],
      },
      {
        heading: "§ 8 Notificări push și campanii destinate clienților finali", blocks: [
          p("(1) În cadrul planului achiziționat, puteți trimite notificări push și campanii clienților finali care sunt deja clienți ai afacerii dumneavoastră (cel puțin o ștampilă colectată) sau care – exclusiv în planul Platinum, prin intermediul publicității bazate pe proximitate – se află în apropierea locației dumneavoastră și au acordat în acest scop partajarea locației."),
          p("(2) Sunteți responsabil pentru conținutul și legalitatea acestor campanii, în special pentru respectarea UWG, a dreptului privind identificarea publicității și a frecvenței permise conform prezentării generale a planurilor (Gold: până la 2 campanii/lună; Platinum: până la 4 campanii/lună, inclusiv push). TapRadar asigură doar infrastructura tehnică de livrare și respectarea limitelor de frecvență. Pentru mai multe informații privind repartizarea responsabilității în materie de protecție a datelor, consultați politica de confidențialitate de la www.tapradar.app/datenschutz."),
          p("(3) TapRadar are dreptul de a verifica prin sondaj anumite conținuturi de campanie înainte de trimitere și de a respinge conținuturile ilegale sau care încalcă prezenții termeni."),
        ],
      },
      {
        heading: "§ 9 Recenzii și interzicerea recenziilor manipulate", blocks: [
          p("(1) Recenziile pot fi date exclusiv de clienți finali a căror vizită a fost verificată printr-o ștampilă efectiv colectată."),
          callout("Interzicerea recenziilor false", "Conform dispozițiilor legii privind concurența neloială (UWG), astfel cum a fost modificată prin Directiva Omnibus (Directiva (UE) 2019/2161), este ilegal să publicați sau să comandați recenzii false, să falsificați recenzii reale sau să însărcinați alte companii cu falsificarea de recenzii. Vă angajați să nu manipulați sau să achiziționați, nici personal, nici prin intermediul unor terți – în special nu prin accesele PIN ale angajaților dumneavoastră – recenzii referitoare la propria afacere și nici să nu stimulați clienții în schimbul unor recenzii pozitive. Încălcările îndreptățesc TapRadar să elimine recenziile vizate și să procedeze la reziliere extraordinară."),
          p("(2) Puteți raporta recenzii individuale prin intermediul panoului de control ca fiind ilegale, ofensatoare sau evident false; TapRadar examinează fiecare sesizare și vă comunică rezultatul, precum și autorului recenziei."),
        ],
      },
      {
        heading: "§ 10 Drepturi asupra conținutului", blocks: [
          p("(1) TapRadar vă acordă, pe durata raportului contractual, un drept simplu, netransferabil de a utiliza platforma în măsura prevăzută contractual."),
          p("(2) Pentru conținutul pe care îl încărcați, precum sigle, imagini, texte și materiale publicitare, acordați TapRadar un drept simplu, limitat la durata contractului, de a utiliza acest conținut în cadrul serviciilor convenite, în special pentru afișare în aplicație, pe afișul vitrină QR și în notificările push. Garantați că dețineți drepturile necesare asupra conținutului încărcat."),
          p("(3) Toate drepturile asupra software-ului, mărcii și platformei TapRadar în sine rămân în posesia TOY GmbH sau a licențiatorilor săi."),
        ],
      },
      {
        heading: "§ 11 Acces la date", blocks: [
          callout("Acces la date conform art. 9 din Regulamentul P2B", "Conform art. 9 din Regulamentul P2B, vă informăm că aveți acces, prin intermediul panoului de control, la datele statistice și analitice (analize de bază, respectiv avansate) colectate în cadrul planului dumneavoastră cu privire la proprii clienți finali, în special la frecvența vizitelor, datele privind ștampilele și valorificările, precum și, în planul Platinum, la indicatorii legați de publicitate (CTR/CVR). Nu se acordă niciun acces suplimentar la date personale brute ale clienților finali individuali; evaluarea agregată se realizează cu respectarea politicii de confidențialitate."),
        ],
      },
      {
        heading: "§ 12 Gestionarea internă a reclamațiilor și mediere", blocks: [
          callout("Gestionarea reclamațiilor conform art. 11 și 12 din Regulamentul P2B", "Conform art. 11 din Regulamentul P2B, TapRadar vă pune la dispoziție un sistem intern gratuit de gestionare a reclamațiilor. Reclamațiile privind nerespectarea prezenților termeni, problemele tehnice legate direct de furnizarea serviciului, precum și măsurile conform §§ 5 și 6 pot fi trimise oricând la beschwerde@tapradar.app. Procesăm fiecare reclamație în timp util și în mod corespunzător și vă comunicăm rezultatul în formă scrisă. Conform art. 12 din Regulamentul P2B, vă atragem atenția că, pentru întreprinderi mici precum TOY GmbH, obligația de a desemna mediatori specifici poate fi eliminată; dacă într-un caz individual nu se ajunge la o soluționare amiabilă extrajudiciară, aveți totuși acces nerestricționat la instanțele obișnuite conform § 15."),
        ],
      },
      {
        heading: "§ 13 Disponibilitate și modificări ale platformei", blocks: [
          p("(1) TapRadar depune eforturi pentru a asigura o disponibilitate ridicată a platformei, dar nu poate garanta o disponibilitate neîntreruptă. Lucrările de întreținere, defecțiunile tehnice sau dezvoltarea continuă pot duce la restricții temporare."),
          p("(2) TapRadar are dreptul de a ajusta, completa sau elimina funcții individuale ale platformei în cadrul dezvoltării continue, în măsura în care sfera esențială a serviciilor datorate contractual nu este afectată în mod nerezonabil. Modificările substanțiale, inclusiv modificările parametrilor de clasament conform § 6, vă vor fi anunțate în formă scrisă cu cel puțin 15 zile înainte de intrarea lor în vigoare, cu excepția cazului în care un termen mai scurt este necesar din motive juridice sau de securitate."),
        ],
      },
      {
        heading: "§ 14 Răspundere", blocks: [
          p("(1) TapRadar răspunde fără limitare pentru daunele rezultate din vătămarea vieții, corpului sau sănătății, precum și pentru daunele bazate pe intenție sau neglijență gravă, precum și conform dispozițiilor imperative ale Legii privind răspunderea pentru produse."),
          p("(2) Pentru daunele cauzate din neglijență ușoară, TapRadar răspunde doar în cazul încălcării unor obligații contractuale esențiale (obligații cardinale), a căror îndeplinire face posibilă în primul rând executarea corespunzătoare a contractului și pe a căror respectare vă puteți baza în mod obișnuit; în acest caz, răspunderea este limitată, ca valoare, la daunele previzibile în mod tipic pentru acest tip de contract."),
          p("(3) În rest, răspunderea pentru daunele cauzate din neglijență ușoară este exclusă, în măsura permisă de lege."),
          p("(4) TapRadar nu răspunde pentru acțiunile clienților dumneavoastră finali, pentru exactitatea recenziilor, nici pentru veniturile pierdute ca urmare a unei restricționări, suspendări sau încetări a accesului conform § 5 sau § 6."),
          p("(5) Limitările de răspundere de mai sus se aplică în aceeași măsură în favoarea prepușilor TapRadar."),
        ],
      },
      {
        heading: "§ 15 Dispoziții finale", blocks: [
          p("(1) Se aplică legislația austriacă, cu excluderea Convenției ONU privind contractele de vânzare internațională de mărfuri (CISG) și a normelor de conflict de legi din dreptul internațional privat."),
          p("(2) Instanța exclusiv competentă pentru toate litigiile care decurg din prezentul contract sau în legătură cu acesta este instanța competentă material pentru 2353 Guntramsdorf."),
          p("(3) Dacă anumite dispoziții ale prezenților termeni sunt sau devin invalide, valabilitatea celorlalte dispoziții nu este afectată. Dispoziția invalidă va fi înlocuită cu o reglementare care se apropie cel mai mult de scopul economic al dispoziției invalide."),
          p("(4) Nu există acorduri accesorii. Modificările și completările la prezentul contract necesită forma scrisă, cu excepția cazului în care prezenții termeni prevăd altfel."),
        ],
      },
    ],
    sourcesHeading: "Listă de surse",
    sourcesIntro: "Surse oficiale UE și austriece pe care se bazează prezenții Termeni pentru clienți comerciali:",
    sources: [
      { label: "Regulamentul privind relațiile dintre platforme și întreprinderi (Regulamentul P2B), Regulamentul (UE) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Legea privind serviciile digitale, Regulamentul (UE) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Directiva privind drepturile consumatorilor, Directiva 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Legea austriacă privind contractele la distanță și în afara spațiilor comerciale (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  bg: {
    title: "Условия за бизнес клиенти",
    subtitle: "Общи условия за таблото за управление на TapRadar (бизнес клиенти) – TOY GmbH",
    stand: "Актуализирано на: 9 август 2026 г. · Версия 2026-08-09.2",
    intro: [
      p("TOY GmbH със седалище в Гунтрамсдорф, Австрия (наричана по-долу „TapRadar“, „ние“), управлява цифровата платформа TapRadar, състояща се от безплатно мобилно приложение за крайни клиенти (Радар, Печат, Карти, Home) и платено табло за управление за бизнес клиенти за цифрова лоялност на клиентите чрез карти за лоялност, базирани на NFC и QR технология. Чрез модула Радар на приложението за крайни клиенти TapRadar посредничи за Вашите предложения, промоции и отзиви пред крайните клиенти и в това отношение представлява онлайн посредническа услуга по смисъла на Регламент (ЕС) 2019/1150 (Регламент P2B). Настоящите Условия за бизнес клиенти уреждат договорното отношение между TapRadar и предприятията, които се абонират за платен план (наричани по-долу „бизнес клиенти“)."),
    ],
    sections: [
      {
        heading: "§ 1 Обхват и договарящи страни", blocks: [
          p("(1) Настоящите условия се прилагат изключително за предприятия, които в рамките на своята търговска или самостоятелна професионална дейност се абонират за платен план на TapRadar (Bronze, Gold или Platinum) (търговци по смисъла на § 1 KSchG и § 1 UGB). Разпоредбите на австрийския Закон за защита на потребителите (KSchG) следователно по принцип не се прилагат за бизнес клиенти, доколкото това е допустимо от закона."),
          p("(2) За физически лица, които за първи път сключват план с цел основаване на предприятие (нови предприемачи по смисъла на § 1, ал. 3 KSchG), допълнително се прилагат указанията относно правото на отказ от Указанието за отказ за потребители на www.tapradar.app/widerrufsbelehrung."),
          p("(3) Отхвърляме противоречащи или отклоняващи се от настоящите условия условия; те не стават част от договора, освен ако TapRadar изрично писмено не приеме тяхната валидност."),
          p("(4) Договаряща страна е TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Австрия, ДДС номер ATU78882167."),
        ],
      },
      {
        heading: "§ 2 Описание на услугите", blocks: [
          p("В зависимост от избрания план, TapRadar Ви предоставя цифрова платформа за лоялност на клиентите, включваща по-специално: поддръжка на NFC маркери и QR кодове за издаване на цифрови печати, създаване и управление на цифрови карти за лоялност, видимост в модула Радар на приложението за крайни клиенти, включително показване в категории и филтри (акция, купон, награда, топ, радиус 500 м), показване на проверени отзиви на клиенти, предоставяне на QR витринен плакат, основна, респ. разширена статистика и анализи, система с ПИН за служители, както и – в зависимост от плана – рекламни и кампанийни функции, реклама на базата на близост, push известия до крайни клиенти и отчети."),
          p("Точният обхват на функциите на отделните планове произтича от таблицата по-долу, както и от прегледа на плановете, публикуван на www.tapradar.app/fuer-geschaefte към момента на сключване на договора, който е неразделна част от настоящите условия."),
          table(
            ["Услуга", "Bronze", "Gold", "Platinum"],
            [
              ["Месечна цена", "9,99 €", "49,99 €", "99,99 €"],
              ["Локации", "1", "1", "1"],
              ["Достъп за служители", "1", "5", "15"],
              ["NFC/QR печатане", "да", "да", "да"],
              ["QR витринен плакат", "да", "да", "да"],
              ["Основна статистика", "да", "да", "да"],
              ["Изображение/PDF реклама", "не", "2×/месец", "4×/месец"],
              ["Реклама на базата на близост (GPS)", "не", "не", "да"],
              ["Push известия", "не", "не", "да"],
              ["Ретаргетинг (30 дни)", "не", "не", "да"],
              ["Разширена аналитика", "не", "не", "да"],
              ["Седмичен имейл отчет", "не", "да", "да"],
              ["Месечен PDF отчет", "не", "не", "да"],
              ["Поддръжка", "Стандартна", "Стандартна", "Приоритетна 24ч"],
            ],
          ),
          p("TapRadar сам по себе си не предоставя стоки или услуги на крайните клиенти на Вашия бизнес и не е страна по сделките, сключвани между Вас и Вашите клиенти, по-специално при осребряването на награди."),
        ],
      },
      {
        heading: "§ 3 Регистрация и сключване на договора", blocks: [
          p("(1) Договорът за платен план се сключва чрез избор на план в процеса на поръчка, посочване на необходимите фирмени и платежни данни и финализиране на поръчката чрез натискане на бутона „поръчка със задължение за плащане“ или еквивалентна формулировка. Преди подаване на поръчката, планът, общата цена (включително ДДС), интервалът на фактуриране и съществените характеристики на избрания план се обобщават в преглед на поръчката."),
          p("(2) TapRadar потвърждава сключването на договора чрез изпращане на потвърждаващ имейл и активиране на таблото за управление."),
          callout("Проверка на Вашата бизнес идентичност (Know-Your-Business-Customer)", "Съгласно чл. 30 от Регламент (ЕС) 2022/2065 (Акт за цифровите услуги), операторите на онлайн платформи, които улесняват сключването на договори между предприятия и потребители, са задължени да получат определени идентификационни данни от своите търговски потребители и, доколкото е разумно, да проверят тяхната достоверност. Поради това TapRadar събира при регистрацията на бизнес клиенти най-малко: наименование на фирмата и правна форма, адрес, ДДС номер или номер от търговския регистър, име и данни за контакт на лицето, оправомощено да представлява фирмата, както и собствена декларация относно законосъобразността на предлаганите стоки и услуги. Задължени сте да предоставите тези данни пълно и точно и незабавно да ни съобщавате за промени. Ако научим за индикации, че предоставените данни са неточни или подвеждащи, имаме право да спрем достъпа до таблото за управление до изясняване."),
          p("(3) TapRadar си запазва правото да отказва регистрации без посочване на причини, по-специално при обосновано подозрение за злоупотреба, неточни данни или нарушение на настоящите условия."),
        ],
      },
      {
        heading: "§ 4 Планове, цени и условия за плащане", blocks: [
          p("(1) Прилагат се месечните цени на плановете, посочени в § 2, увеличени със законния ДДС, ако е приложимо. Актуалните цени могат да бъдат намерени в прегледа на плановете на www.tapradar.app/fuer-geschaefte, който е меродавен към момента на поръчката."),
          p("(2) Обработката на плащанията се извършва чрез нашия доставчик на платежни услуги Stripe. С финализирането на поръчката упълномощавате TapRadar да събира съответната сума на абонамента в началото на всеки период на фактуриране чрез запазеното платежно средство."),
          p("(3) Ако забавите дължимо плащане, TapRadar има право, след предварително напомняне, временно да блокира достъпа до таблото за управление, докато дължимата сума не бъде уредена; правото на извънредно прекратяване по важна причина остава незасегнато."),
          p("(4) TapRadar има право да коригира цените на плановете с действие за бъдещи периоди на фактуриране. Промените в цените ще Ви бъдат съобщени в текстова форма най-малко 30 дни преди влизането им в сила. Ако не възразите срещу промяната на цената до влизането ѝ в сила, промяната се счита за приета; в случай на възражение имате право на извънредно прекратяване към момента на влизане в сила на промяната на цената, за което TapRadar ще Ви обърне специално внимание в уведомлението."),
        ],
      },
      {
        heading: "§ 5 Срок на договора и прекратяване", blocks: [
          p("(1) Договорите за план се сключват за неопределен срок и се удължават автоматично за договорения период на фактуриране, обикновено един месец, ако не бъдат прекратени навреме."),
          p("(2) Месечните планове могат да бъдат прекратени от всяка от страните по всяко време с действие в края на текущия период на фактуриране, освен ако в прегледа на поръчката към момента на сключване на договора не е договорен различен минимален срок. Прекратяването може да бъде декларирано чрез таблото за управление или по имейл на support@tapradar.app."),
          p("(3) Правото на всяка от страните на извънредно прекратяване по важна причина остава незасегнато."),
          callout("Прекратяване, спиране и ограничаване на достъпа съгласно Регламент P2B", "Съгласно чл. 4 от Регламент (ЕС) 2019/1150 (Регламент P2B), обосноваваме всяко решение за ограничаване, спиране или прекратяване на достъпа Ви до таблото за управление чрез изложение на фактите или обстоятелствата, довели до това решение, и Ви ги съобщаваме преди или към момента на влизане в сила на мярката, освен ако не сме подчинени на правно или регулаторно задължение, което е в противоречие с това, или съществува опасност от забавяне, например при сериозно или повтарящо се нарушение на настоящите условия или при заплаха за сигурността на платформата или трети страни. В тези изключителни случаи обосновката се предоставя без ненужно забавяне след влизане в сила на мярката."),
          p("(4) След валидно прекратяване на договорното отношение достъпът до таблото за управление се деактивира; вече събраните печати и отзиви на крайни клиенти във връзка с Вашия бизнес могат да бъдат маркирани като неактивни в приложението за крайни клиенти. Разпоредбите относно срока на съхранение в политиката за поверителност остават незасегнати."),
        ],
      },
      {
        heading: "§ 6 Видимост и класиране в модула Радар", blocks: [
          callout("Прозрачност на параметрите за класиране съгласно чл. 5 от Регламент P2B", "Редът, по който партньорските обекти се показват в модула Радар на приложението за крайни клиенти, зависи преди всичко от разстоянието до местоположението на крайния клиент, избраните от него филтри (акция, купон, награда, топ, радиус 500 м) и категории, актуалността и броя на проверените отзиви, както и допълнително от закупения план, тъй като определени функции за видимост и реклама (напр. изтъкнати кампании) са достъпни изключително за клиенти с план Gold и Platinum. Не съществува платено предпочитание в класирането, независимо от гореспоменатите критерии."),
          p("Значката за план, показана в модула Радар, обозначава на крайните клиенти закупения от Вас план. TapRadar си запазва правото да коригира параметрите за класиране в рамките на по-нататъшното развитие на платформата; съществените промени ще бъдат обявени съгласно § 13."),
        ],
      },
      {
        heading: "§ 7 Задължения на бизнес клиентите", blocks: [
          p("(1) Задължени сте да поддържате своите фирмени и контактни данни пълни, точни и актуални и незабавно да ни съобщавате за промени."),
          p("(2) Вие носите отговорност за сигурността на ПИН кодовете на служителите. Действия, извършени чрез достъп на служител, назначен на Вас, се приписват на Вас. Задължени сте незабавно да деактивирате ПИН кодовете на служителите при напускане на съответното лице."),
          p("(3) Рекламните и кампанийни съдържания, качени чрез платформата, като изображения, PDF файлове, текстове и push съобщения, трябва да бъдат законосъобразни и по-специално не трябва да нарушават правата на трети страни (авторски права, права върху марки или лични права), разпоредбите на Закона за нелоялната конкуренция (UWG) или други законови разпоредби. Задължавате се да обезщетите TapRadar за всички претенции на трети страни, произтичащи от нарушение на това задължение."),
          p("(4) Осребряването на наградите, показани в приложението, и изпълнението на рекламираните оферти пред крайните клиенти е изключително Ваша отговорност като бизнес клиент."),
        ],
      },
      {
        heading: "§ 8 Push известия и кампании, насочени към крайни клиенти", blocks: [
          p("(1) В рамките на закупения план можете да изпращате push известия и кампании до крайни клиенти, които вече са клиенти на Вашия бизнес (поне един събран печат) или които – изключително в план Platinum чрез реклама на базата на близост – се намират в близост до Вашата локация и са дали съгласие за споделяне на местоположението за тази цел."),
          p("(2) Вие носите отговорност за съдържанието и законосъобразността на тези кампании, по-специално за спазването на UWG, правото за обозначаване на реклама и допустимата честота съгласно прегледа на плановете (Gold: до 2 кампании/месец; Platinum: до 4 кампании/месец, включително push). TapRadar осигурява само техническата инфраструктура за доставка и спазването на ограниченията на честотата. Подробности относно разпределението на отговорността в областта на защитата на данните ще намерите в политиката за поверителност на www.tapradar.app/datenschutz."),
          p("(3) TapRadar има право да проверява извадково отделни кампанийни съдържания преди изпращане и да отхвърля незаконосъобразни съдържания или съдържания, нарушаващи настоящите условия."),
        ],
      },
      {
        heading: "§ 9 Отзиви и забрана за манипулирани отзиви", blocks: [
          p("(1) Отзиви могат да бъдат давани изключително от крайни клиенти, чието посещение е потвърдено с действително събран печат."),
          callout("Забрана на фалшиви отзиви", "Съгласно разпоредбите на Закона за нелоялната конкуренция (UWG), изменен с Директива Omnibus (Директива (ЕС) 2019/2161), е недопустимо да се публикуват или поръчват фалшиви отзиви, да се фалшифицират истински отзиви или да се възлага на други предприятия фалшифицирането на отзиви. Задължавате се, нито сами, нито чрез трети страни – по-специално не чрез ПИН достъпите на Вашите служители – да не манипулирате или купувате отзиви относно собствения си бизнес, нито да стимулирате клиенти в замяна на положителни отзиви. Нарушенията оправомощават TapRadar да премахне съответните отзиви и да извърши извънредно прекратяване."),
          p("(2) Можете да докладвате отделни отзиви чрез таблото за управление като незаконосъобразни, обидни или очевидно неверни; TapRadar разглежда всеки сигнал и съобщава резултата както на Вас, така и на автора на отзива."),
        ],
      },
      {
        heading: "§ 10 Права върху съдържанието", blocks: [
          p("(1) TapRadar Ви предоставя за срока на договорното отношение обикновено, непрехвърляемо право да използвате платформата в предвидения по договора обхват."),
          p("(2) За съдържание, което качвате, като лога, изображения, текстове и рекламни материали, предоставяте на TapRadar обикновено право, ограничено до срока на договора, да използва това съдържание в рамките на договорените услуги, по-специално за показване в приложението, на QR витринния плакат и в push известията. Гарантирате, че разполагате с необходимите права върху качените съдържания."),
          p("(3) Всички права върху софтуера, марката и самата платформа TapRadar остават собственост на TOY GmbH, респ. на нейните лицензодатели."),
        ],
      },
      {
        heading: "§ 11 Достъп до данни", blocks: [
          callout("Достъп до данни съгласно чл. 9 от Регламент P2B", "Съгласно чл. 9 от Регламент P2B Ви информираме, че имате достъп чрез таблото за управление до статистическите и аналитични данни (основна, респ. разширена аналитика), събрани в рамките на Вашия план относно собствените Ви крайни клиенти, по-специално относно честотата на посещенията, данните за печати и осребрявания, както и, в план Platinum, относно показатели, свързани с рекламата (CTR/CVR). Не се предоставя допълнителен достъп до лични необработени данни на отделни крайни клиенти; агрегираният анализ се извършва при спазване на политиката за поверителност."),
        ],
      },
      {
        heading: "§ 12 Вътрешно управление на жалби и медиация", blocks: [
          callout("Управление на жалби съгласно чл. 11 и 12 от Регламент P2B", "Съгласно чл. 11 от Регламент P2B, TapRadar Ви предоставя безплатна вътрешна система за управление на жалби. Жалби, свързани с неспазването на настоящите условия, технически проблеми, пряко свързани с предоставянето на услугата, както и мерки съгласно §§ 5 и 6, можете по всяко време да изпращате на beschwerde@tapradar.app. Обработваме всяка жалба своевременно и по подходящ начин и Ви съобщаваме резултата в текстова форма. Съгласно чл. 12 от Регламент P2B, обръщаме Ви внимание, че за малки предприятия като TOY GmbH задължението за назначаване на конкретни медиатори може да отпадне; ако в конкретен случай не се постигне доброволно извънсъдебно уреждане, Вие все пак запазвате достъп до общите съдилища съгласно § 15."),
        ],
      },
      {
        heading: "§ 13 Наличност и промени на платформата", blocks: [
          p("(1) TapRadar се стреми да осигури висока наличност на платформата, но не може да гарантира непрекъсната наличност. Работи по поддръжка, технически повреди или по-нататъшно развитие могат да доведат до временни ограничения."),
          p("(2) TapRadar има право в рамките на по-нататъшното развитие да коригира, допълва или прекратява отделни функции на платформата, доколкото по този начин не се засяга непропорционално дължимият по договора основен обхват на услугите. Съществените промени, включително промени в параметрите за класиране съгласно § 6, ще Ви бъдат обявени в текстова форма най-малко 15 дни преди влизането им в сила, освен ако по-кратък срок не е необходим по правни или причини, свързани със сигурността."),
        ],
      },
      {
        heading: "§ 14 Отговорност", blocks: [
          p("(1) TapRadar носи неограничена отговорност за вреди, произтичащи от нарушение на живота, тялото или здравето, както и за вреди, основани на умисъл или груба небрежност, и съгласно императивните разпоредби на Закона за отговорност за продукти."),
          p("(2) За вреди, причинени от лека небрежност, TapRadar носи отговорност само при нарушение на съществени договорни задължения (кардинални задължения), чието изпълнение изобщо прави възможно надлежното изпълнение на договора и на чието спазване можете редовно да разчитате; в този случай отговорността е ограничена по размер до типично предвидимата за този вид договор вреда."),
          p("(3) В останалите случаи отговорността за вреди, причинени от лека небрежност, е изключена, доколкото това е допустимо от закона."),
          p("(4) TapRadar не носи отговорност за действията на Вашите крайни клиенти, за точността на отзивите, нито за пропуснати ползи вследствие на ограничаване, спиране или прекратяване на достъпа съгласно § 5 или § 6."),
          p("(5) Горепосочените ограничения на отговорността важат в еднаква степен в полза на лицата, чрез които TapRadar изпълнява задълженията си."),
        ],
      },
      {
        heading: "§ 15 Заключителни разпоредби", blocks: [
          p("(1) Прилага се австрийското право, с изключение на Конвенцията на ООН относно договорите за международна продажба на стоки (CISG) и стълкновителните норми на международното частно право."),
          p("(2) Изключително компетентен съд за всички спорове, произтичащи от или свързани с настоящия договор, е материално компетентният съд за 2353 Guntramsdorf."),
          p("(3) Ако отделни разпоредби на настоящите условия са или станат невалидни, това не засяга валидността на останалите разпоредби. На мястото на невалидната разпоредба встъпва уредба, която е най-близка до икономическата цел на невалидната разпоредба."),
          p("(4) Не съществуват допълнителни споразумения. Изменения и допълнения на настоящия договор изискват текстова форма, освен ако в настоящите условия не е предвидено друго."),
        ],
      },
    ],
    sourcesHeading: "Списък на източниците",
    sourcesIntro: "Официални източници на ЕС и Австрия, на които се основават настоящите Условия за бизнес клиенти:",
    sources: [
      { label: "Регламент относно отношенията между платформи и предприятия (Регламент P2B), Регламент (ЕС) 2019/1150", url: "https://eur-lex.europa.eu/eli/reg/2019/1150/oj" },
      { label: "Акт за цифровите услуги, Регламент (ЕС) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
      { label: "Директива относно правата на потребителите, Директива 2011/83/ЕС", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Австрийски закон за договорите от разстояние и извън търговския обект (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
};
