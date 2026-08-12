import type { Locale } from "@/i18n/config";
import { callout, p, type LegalDocument } from "./types";

export const termsConsumerContent: { de: LegalDocument } & Partial<Record<Locale, LegalDocument>> = {
  de: {
    title: "Verbraucher-AGB",
    subtitle: "Allgemeine Geschäftsbedingungen für die TapRadar-App (Endkundinnen und Endkunden) – TOY GmbH",
    stand: "Stand: 9. August 2026 · Version 2026-08-09.2",
    intro: [
      p("Diese Allgemeinen Geschäftsbedingungen („Verbraucher-AGB\") regeln das Vertragsverhältnis zwischen der TOY GmbH und natürlichen Personen, die die kostenlose TapRadar-App als Endkundinnen und Endkunden nutzen. Für Unternehmen, die einen kostenpflichtigen Geschäftskunden-Tarif abonnieren, gelten die gesondert veröffentlichten Geschäftskunden-AGB."),
    ],
    sections: [
      {
        heading: "§ 1 Geltungsbereich und Vertragspartner", blocks: [
          p("(1) Diese Verbraucher-AGB gelten für die Registrierung und Nutzung der TapRadar-App durch natürliche Personen, die die App zu privaten, nicht überwiegend gewerblichen oder selbständigen beruflichen Zwecken nutzen (Verbraucherinnen und Verbraucher im Sinne des § 1 Abs. 1 Z 2 Konsumentenschutzgesetz, KSchG)."),
          p("(2) Vertragspartner ist die TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Österreich, UID-Nummer ATU78882167, E-Mail support@tapradar.app (nachfolgend „TapRadar\", „wir\" oder „uns\")."),
          p("(3) Die Nutzung der App setzt ein Mindestalter von 14 Jahren voraus. Personen zwischen 14 und 18 Jahren bestätigen mit der Registrierung, im Rahmen ihrer Geschäftsfähigkeit zu handeln bzw. die erforderliche Zustimmung ihrer gesetzlichen Vertretung zu besitzen."),
          p("(4) Entgegenstehenden oder von diesen AGB abweichenden Bedingungen wird widersprochen; sie werden nicht Vertragsbestandteil, es sei denn, TapRadar stimmt ihrer Geltung ausdrücklich schriftlich zu."),
        ],
      },
      {
        heading: "§ 2 Leistungsbeschreibung – die vier Funktionsbereiche", blocks: [
          p("TapRadar stellt Ihnen über die App vier zentrale, unentgeltlich nutzbare Funktionsbereiche zur Verfügung:"),
          p("2.1 Radar – Entdecken: Auffinden lokaler TapRadar-Partnerbetriebe auf einer Karte, mit Filtermöglichkeiten nach Aktion, Gutschein, Belohnung, Top-Bewertung und einem Umkreis von 500 Metern sowie Kategorien wie Café, Restaurant, Friseur oder Markt. Zu jedem Partnerbetrieb werden Öffnungszeiten, Bewertungen und das jeweilige Plan-Badge angezeigt."),
          p("2.2 Stempel – Sammeln: Sammeln digitaler Stempel durch Antippen eines NFC-Punkts oder Scannen eines QR-Codes, Anzeige des Fortschritts (z. B. 7 von 10 Stempeln), Einlösen von Belohnungen wie einem Gratis-Kaffee oder Rabatt sowie Erhalt von Punkten für jeden gesammelten Stempel."),
          p("2.3 Karten – digitale Brieftasche: Speicherung bestehender Kundenkarten Dritter, beispielsweise von Billa, DM, H&M, Spar oder Hofer, durch Hinterlegen von Barcode oder QR-Code, um diese direkt an der Kasse vorzuzeigen und Plastikkarten zu ersetzen. Die genannten Marken sind Beispiele; TapRadar ist mit diesen Unternehmen nicht verbunden."),
          p("2.4 Home – Profil und Gamification: Ein 20-stufiges Levelsystem von „Neuling\" bis „Champion\", Punkte für Stempel, Bewertungen und Freundeseinladungen, ein Wochenziel, ein Streak-System (sieben aufeinanderfolgende aktive Tage lösen einen Bonus aus) sowie die Möglichkeit, Freundinnen und Freunde einzuladen und sich in einer Rangliste zu vergleichen."),
          p("Der jeweils aktuelle Funktionsumfang ergibt sich aus der App selbst; TapRadar ist berechtigt, einzelne Funktionen im Rahmen der Weiterentwicklung anzupassen, zu ergänzen oder einzustellen, sofern hierdurch der Kernnutzen der App für Sie nicht unzumutbar beeinträchtigt wird."),
          p("TapRadar erbringt keine eigenen Waren- oder Dienstleistungen der Partnerbetriebe, insbesondere nicht die beworbenen Produkte, Rabatte oder Belohnungen, und ist an den zwischen Ihnen und einem Partnerbetrieb zustande kommenden Rechtsgeschäften nicht beteiligt. Für die tatsächliche Einlösung von Belohnungen ist ausschließlich der jeweilige Partnerbetrieb verantwortlich."),
        ],
      },
      {
        heading: "§ 3 Registrierung und Vertragsschluss", blocks: [
          p("(1) Die Nutzung von TapRadar setzt die Registrierung eines Nutzerkontos mit E-Mail-Adresse und Passwort voraus. Mit Bestätigung Ihrer E-Mail-Adresse bzw. mit erstmaliger Nutzung kommt zwischen Ihnen und TapRadar ein unentgeltlicher Nutzungsvertrag zu diesen Verbraucher-AGB zustande."),
          p("(2) Sie sind verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen und Ihre Zugangsdaten vor dem Zugriff Dritter zu schützen."),
        ],
      },
      {
        heading: "§ 4 Kein Geldpreis – Bereitstellung digitaler Dienste gegen Daten", blocks: [
          callout("Hinweis gemäß Digitale-Inhalte-Richtlinie (Richtlinie (EU) 2019/770)", "Auch wenn Sie für die Nutzung der TapRadar-App kein Entgelt zahlen, stellen Sie uns im Gegenzug personenbezogene Daten zur Verfügung, insbesondere Standort-, Nutzungs- und Kontaktdaten. Verträge über digitale Dienste, bei denen der Verbraucher personenbezogene Daten anstelle einer Zahlung bereitstellt, fallen in den Anwendungsbereich der Digitale-Inhalte-Richtlinie und des österreichischen Verbrauchergewährleistungsgesetzes (VGG). Ihnen stehen daher grundsätzlich die dort vorgesehenen Rechte auf vertragsgemäße Bereitstellung des digitalen Dienstes zu, soweit diese nicht durch den unentgeltlichen Charakter der App sachlich eingeschränkt sind."),
          p("TapRadar ist bestrebt, die App entsprechend der in § 2 beschriebenen Leistungsmerkmale, dem üblichen Standard vergleichbarer Anwendungen sowie unter Berücksichtigung öffentlicher Aussagen bereitzustellen und im vertraglich vorausgesetzten Umfang zu aktualisieren."),
        ],
      },
      {
        heading: "§ 5 Nutzungsrechte", blocks: [
          p("TapRadar räumt Ihnen ein einfaches, nicht übertragbares, persönliches Recht ein, die App für den privaten Gebrauch entsprechend dieser Verbraucher-AGB zu nutzen. Eine Unterlizenzierung, ein Weiterverkauf oder eine gewerbliche Nutzung Ihres Nutzerkontos sind nicht gestattet."),
        ],
      },
      {
        heading: "§ 6 Ihre Pflichten bei der Nutzung", blocks: [
          p("(1) Sie verpflichten sich, die Plattform nicht missbräuchlich zu nutzen. Die Manipulation von Stempeln, Belohnungen, Standortdaten oder sonstigen technischen Schutzmaßnahmen, etwa durch Fake-GPS, mehrfache Registrierungen zur Umgehung von Begrenzungen oder Manipulation von NFC- bzw. QR-Vorgängen, ist untersagt. TapRadar ist berechtigt, bei begründetem Verdacht auf eine solche Manipulation betroffene Stempel, Belohnungen oder Konten zu sperren oder zu löschen."),
          p("(2) Bewertungen sind wahrheitsgemäß und auf Grundlage eines tatsächlichen, verifizierten Besuchs abzugeben; rechtswidrige, beleidigende oder erkennbar unwahre Bewertungen können von TapRadar entfernt werden. Meldungen zu rechtswidrigen Inhalten können jederzeit über die in der App vorgesehene Meldefunktion oder per E-Mail an support@tapradar.app erfolgen; wir prüfen jede Meldung und teilen Ihnen das Ergebnis mit."),
          p("(3) Für die im Bereich Karten hinterlegten Kundenkarten Dritter sind Sie selbst für die Richtigkeit der eingegebenen Daten sowie deren Akzeptanz an der jeweiligen Kasse verantwortlich; TapRadar übernimmt insoweit keine Gewähr, da es sich um von Ihnen selbst eingegebene, nicht von TapRadar geprüfte Fremddaten handelt."),
        ],
      },
      {
        heading: "§ 7 Gamification, Level, Punkte und Belohnungen", blocks: [
          p("(1) Level, Punkte, Streaks und Ranglistenplätze im Bereich Home haben keinen Geldwert, sind nicht handelbar und nicht in Geld einlösbar. Sie dienen ausschließlich der spielerischen Darstellung Ihrer Nutzung."),
          p("(2) Über Stempelkarten eingelöste Belohnungen, etwa ein Gratis-Produkt oder ein Rabatt, werden ausschließlich vom jeweiligen Partnerbetrieb gewährt; ein Anspruch gegen TapRadar auf Bereitstellung, Ersatz oder Wertausgleich einer nicht eingelösten oder nicht mehr verfügbaren Belohnung besteht nicht."),
          p("(3) Bei Löschung Ihres Kontos verfallen sämtliche gesammelten Stempel, Punkte, Level, Streaks und noch nicht eingelösten Belohnungen ersatzlos, sofern zu diesem Zeitpunkt kein Einlösevorgang bereits begonnen wurde."),
        ],
      },
      {
        heading: "§ 8 Standort- und Push-Berechtigungen", blocks: [
          p("Die Nutzung der Radar- und Stempel-Funktion sowie der Erhalt von Push-Benachrichtigungen setzt entsprechende, jederzeit widerrufliche Berechtigungen in den Einstellungen Ihres Geräts voraus. Einzelheiten zur Verarbeitung von Standort- und Push-Daten entnehmen Sie der Datenschutzerklärung unter www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Verfügbarkeit und Änderungen", blocks: [
          p("TapRadar ist bemüht, eine hohe Verfügbarkeit der App sicherzustellen, kann jedoch keine unterbrechungsfreie Verfügbarkeit garantieren. Wartungsarbeiten, technische Störungen oder Weiterentwicklungen können zu vorübergehenden Einschränkungen führen. Wesentliche, für Sie nachteilige Änderungen der Kernfunktionen werden angemessen im Voraus in der App angekündigt."),
        ],
      },
      {
        heading: "§ 10 Kündigung und Kontolöschung", blocks: [
          p("Sie können Ihr Nutzerkonto jederzeit und ohne Angabe von Gründen kostenfrei über die App-Einstellungen oder per E-Mail an support@tapradar.app löschen lassen; der Vertrag endet mit Wirksamwerden der Löschung. TapRadar kann den Vertrag aus wichtigem Grund, insbesondere bei erheblichen Verstößen gegen § 6, mit angemessener Vorankündigung kündigen."),
        ],
      },
      {
        heading: "§ 11 Haftung", blocks: [
          p("(1) TapRadar haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen, sowie nach den zwingenden Bestimmungen des Produkthaftungsgesetzes."),
          p("(2) Für leicht fahrlässig verursachte Schäden haftet TapRadar nur bei der Verletzung wesentlicher Vertragspflichten, deren Erfüllung die ordnungsgemäße Nutzung der App überhaupt erst ermöglicht; in diesem Fall ist die Haftung auf den vertragstypisch vorhersehbaren Schaden begrenzt. Zwingende Bestimmungen des Konsumentenschutzgesetzes bleiben von dieser Beschränkung unberührt."),
          p("(3) TapRadar haftet nicht für Inhalte, Angebote, Belohnungen oder Handlungen der Partnerbetriebe sowie nicht für die Richtigkeit von Bewertungen anderer Nutzerinnen und Nutzer oder von Ihnen selbst hinterlegter Drittkarten im Bereich Karten."),
        ],
      },
      {
        heading: "§ 12 Widerrufsrecht", blocks: [
          p("Auch wenn die App unentgeltlich ist, kann Ihnen als Verbraucherin oder Verbraucher im Fernabsatz unter bestimmten Voraussetzungen ein gesetzliches Widerrufsrecht hinsichtlich des Registrierungsvertrags zustehen. Einzelheiten entnehmen Sie der gesondert bereitgestellten Verbraucher-Widerrufsbelehrung unter www.tapradar.app/widerrufsbelehrung. Da Sie Ihr Konto ohnehin jederzeit kostenfrei und ohne Angabe von Gründen gemäß § 10 löschen können, hat die Ausübung des Widerrufsrechts für Sie in der Regel keine zusätzliche praktische Wirkung, besteht rechtlich aber unabhängig davon fort."),
        ],
      },
      {
        heading: "§ 13 Streitbeilegung", blocks: [
          p("Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS-Plattform) bereit, abrufbar unter https://ec.europa.eu/consumers/odr. TapRadar ist weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern gesetzlich nichts anderes vorgeschrieben ist."),
        ],
      },
      {
        heading: "§ 14 Änderung dieser Verbraucher-AGB", blocks: [
          p("TapRadar ist berechtigt, diese Verbraucher-AGB mit Wirkung für die Zukunft zu ändern, soweit dies zur Anpassung an geänderte Rechtslagen, technische Weiterentwicklungen oder veränderte Funktionen der App erforderlich ist und Sie dadurch nicht unangemessen benachteiligt werden. Über wesentliche Änderungen werden Sie mindestens 30 Tage vor Inkrafttreten in der App oder per E-Mail informiert; widersprechen Sie nicht bis zum Inkrafttreten, gelten die geänderten AGB als angenommen, worauf wir Sie in der Mitteilung gesondert hinweisen. Sie können der Änderung jederzeit durch Löschung Ihres Kontos gemäß § 10 widersprechen, ohne dass Ihnen hierdurch Kosten entstehen."),
        ],
      },
      {
        heading: "§ 15 Schlussbestimmungen", blocks: [
          p("(1) Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts (CISG). Sofern Sie Ihren gewöhnlichen Aufenthalt in einem anderen Mitgliedstaat der EU haben, bleibt Ihnen der Schutz zwingender verbraucherschutzrechtlicher Bestimmungen dieses Staates unberührt, den Ihnen die dortigen gesetzlichen Regelungen gewähren."),
          p("(2) Zwingende gerichtsstandsrechtliche Bestimmungen zugunsten von Verbraucherinnen und Verbrauchern, insbesondere nach der Verordnung (EU) Nr. 1215/2012 (Brüssel-Ia-Verordnung), bleiben von dieser Regelung unberührt; Sie können TapRadar insbesondere an Ihrem eigenen Wohnsitzgericht in Anspruch nehmen, soweit dies zwingend vorgesehen ist."),
          p("(3) Sollten einzelne Bestimmungen dieser Verbraucher-AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt."),
        ],
      },
    ],
    sourcesHeading: "Quellenverzeichnis",
    sourcesIntro: "Amtliche EU- und österreichische Fundstellen, die diesen Verbraucher-AGB zugrunde liegen:",
    sources: [
      { label: "Verbraucherrechte-Richtlinie, Richtlinie 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Digitale-Inhalte-Richtlinie, Richtlinie (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Österreichisches Fern- und Auswärtsgeschäfte-Gesetz (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Digital Services Act, Verordnung (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  en: {
    title: "Consumer Terms",
    subtitle: "General Terms and Conditions for the TapRadar App (End Customers) – TOY GmbH",
    stand: "Last updated: 9 August 2026 · Version 2026-08-09.2",
    intro: [
      p("These General Terms and Conditions (\"Consumer Terms\") govern the contractual relationship between TOY GmbH and natural persons who use the free TapRadar app as end customers. For businesses that subscribe to a paid business-customer plan, the separately published Business Customer Terms apply."),
    ],
    sections: [
      {
        heading: "§ 1 Scope and contracting parties", blocks: [
          p("(1) These Consumer Terms apply to the registration and use of the TapRadar app by natural persons who use the app for private purposes that are not predominantly commercial or for an independent professional activity (consumers within the meaning of § 1(1)(2) of the Austrian Consumer Protection Act, KSchG)."),
          p("(2) The contracting party is TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, VAT ID ATU78882167, email support@tapradar.app (hereinafter \"TapRadar\", \"we\" or \"us\")."),
          p("(3) Use of the app requires a minimum age of 14. Persons between 14 and 18 years of age confirm, by registering, that they are acting within the scope of their legal capacity or that they hold the necessary consent of their legal representative."),
          p("(4) We object to any conflicting terms or terms deviating from these terms; they do not become part of the contract unless TapRadar expressly agrees to their validity in writing."),
        ],
      },
      {
        heading: "§ 2 Description of services – the four functional areas", blocks: [
          p("TapRadar provides you, via the app, with four central functional areas that can be used free of charge:"),
          p("2.1 Radar – Discover: Finding local TapRadar partner businesses on a map, with filtering options by offer, voucher, reward, top-rated and a 500-metre radius, as well as categories such as café, restaurant, hairdresser or market. For each partner business, opening hours, reviews and the respective plan badge are shown."),
          p("2.2 Stamp – Collect: Collecting digital stamps by tapping an NFC point or scanning a QR code, displaying progress (e.g. 7 of 10 stamps), redeeming rewards such as a free coffee or a discount, and earning points for every stamp collected."),
          p("2.3 Cards – digital wallet: Storing existing third-party loyalty cards, for example from Billa, DM, H&M, Spar or Hofer, by storing a barcode or QR code, so they can be shown directly at the till instead of plastic cards. The brands named are examples; TapRadar is not affiliated with these companies."),
          p("2.4 Home – profile and gamification: A 20-tier level system from \"Newcomer\" to \"Champion\", points for stamps, reviews and friend invitations, a weekly goal, a streak system (seven consecutive active days trigger a bonus), and the ability to invite friends and compare your progress on a leaderboard."),
          p("The current scope of features is set out within the app itself; TapRadar is entitled to adjust, supplement or discontinue individual features as part of its ongoing development, provided this does not unreasonably impair the app's core benefit to you."),
          p("TapRadar does not itself provide any goods or services of the partner businesses, in particular not the advertised products, discounts or rewards, and is not a party to the transactions concluded between you and a partner business. Responsibility for the actual redemption of rewards lies solely with the respective partner business."),
        ],
      },
      {
        heading: "§ 3 Registration and conclusion of contract", blocks: [
          p("(1) Using TapRadar requires registering a user account with an email address and password. Upon confirmation of your email address, or upon first use, a free-of-charge usage contract subject to these Consumer Terms is concluded between you and TapRadar."),
          p("(2) You are obliged to provide truthful information when registering and to protect your access credentials from access by third parties."),
        ],
      },
      {
        heading: "§ 4 No monetary price – provision of digital services in exchange for data", blocks: [
          callout("Notice pursuant to the Digital Content Directive (Directive (EU) 2019/770)", "Even though you do not pay a fee for using the TapRadar app, you provide us in return with personal data, in particular location, usage and contact data. Contracts for digital services in which the consumer provides personal data instead of payment fall within the scope of the Digital Content Directive and the Austrian Consumer Guarantees Act (VGG). You are therefore generally entitled to the rights provided for therein regarding the conforming provision of the digital service, to the extent these are not objectively limited by the free-of-charge nature of the app."),
          p("TapRadar strives to provide the app in accordance with the features described in § 2, the standard customary for comparable applications, and taking into account public statements, and to update it to the extent contractually envisaged."),
        ],
      },
      {
        heading: "§ 5 Usage rights", blocks: [
          p("TapRadar grants you a simple, non-transferable, personal right to use the app for private purposes in accordance with these Consumer Terms. Sublicensing, resale, or commercial use of your user account is not permitted."),
        ],
      },
      {
        heading: "§ 6 Your obligations when using the app", blocks: [
          p("(1) You undertake not to misuse the platform. Manipulating stamps, rewards, location data, or other technical protective measures, for example through fake GPS, multiple registrations to circumvent limits, or manipulation of NFC or QR processes, is prohibited. TapRadar is entitled, where there is justified suspicion of such manipulation, to block or delete the affected stamps, rewards or accounts."),
          p("(2) Reviews must be truthful and based on an actual, verified visit; unlawful, insulting or evidently untrue reviews may be removed by TapRadar. Reports of unlawful content may be made at any time via the reporting feature provided in the app or by email to support@tapradar.app; we review every report and inform you of the outcome."),
          p("(3) For third-party loyalty cards stored in the Cards area, you are solely responsible for the accuracy of the entered data and its acceptance at the respective till; TapRadar assumes no liability in this respect, as this is third-party data entered by you and not verified by TapRadar."),
        ],
      },
      {
        heading: "§ 7 Gamification, levels, points and rewards", blocks: [
          p("(1) Levels, points, streaks and leaderboard positions in the Home area have no monetary value, are not tradeable, and cannot be redeemed for money. They serve solely to playfully illustrate your usage."),
          p("(2) Rewards redeemed via loyalty cards, such as a free product or a discount, are granted solely by the respective partner business; there is no claim against TapRadar for the provision, replacement or compensation of a reward that has not been redeemed or is no longer available."),
          p("(3) Upon deletion of your account, all collected stamps, points, levels, streaks and rewards not yet redeemed are forfeited without compensation, provided no redemption process has already begun at that time."),
        ],
      },
      {
        heading: "§ 8 Location and push permissions", blocks: [
          p("Using the Radar and Stamp features and receiving push notifications requires corresponding, freely revocable permissions in your device settings. For details on the processing of location and push data, see the privacy policy at www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Availability and changes", blocks: [
          p("TapRadar strives to ensure high availability of the app but cannot guarantee uninterrupted availability. Maintenance work, technical faults, or further development may lead to temporary restrictions. Material changes to core features that are disadvantageous to you will be announced in the app with reasonable advance notice."),
        ],
      },
      {
        heading: "§ 10 Termination and account deletion", blocks: [
          p("You may delete your user account at any time, free of charge and without giving reasons, via the app settings or by email to support@tapradar.app; the contract ends when the deletion takes effect. TapRadar may terminate the contract for good cause, in particular in the case of material breaches of § 6, with reasonable advance notice."),
        ],
      },
      {
        heading: "§ 11 Liability", blocks: [
          p("(1) TapRadar is liable without limitation for damages arising from injury to life, body or health, as well as for damages based on intent or gross negligence, and pursuant to the mandatory provisions of the Product Liability Act."),
          p("(2) For damages caused by slight negligence, TapRadar is only liable for breach of material contractual obligations, the fulfilment of which is essential for the proper use of the app in the first place; in this case, liability is limited to the damage typically foreseeable for this type of contract. Mandatory provisions of the Austrian Consumer Protection Act remain unaffected by this limitation."),
          p("(3) TapRadar is not liable for content, offers, rewards or actions of the partner businesses, nor for the accuracy of reviews by other users or of third-party cards stored by you in the Cards area."),
        ],
      },
      {
        heading: "§ 12 Right of withdrawal", blocks: [
          p("Even though the app is free of charge, you may, as a consumer, be entitled under certain conditions to a statutory right of withdrawal in respect of the registration contract concluded at a distance. Details can be found in the separately provided Consumer Withdrawal Notice at www.tapradar.app/widerrufsbelehrung. Since you can delete your account free of charge and without giving reasons at any time under § 10 anyway, exercising the right of withdrawal generally has no additional practical effect for you, but continues to exist legally independently of this."),
        ],
      },
      {
        heading: "§ 13 Dispute resolution", blocks: [
          p("The European Commission provides a platform for online dispute resolution (ODR platform), available at https://ec.europa.eu/consumers/odr. TapRadar is neither obliged nor willing to participate in a dispute resolution procedure before a consumer arbitration board, unless otherwise required by law."),
        ],
      },
      {
        heading: "§ 14 Amendment of these Consumer Terms", blocks: [
          p("TapRadar is entitled to amend these Consumer Terms with effect for the future, to the extent necessary to adapt to changed legal requirements, technical developments, or changed app features, and provided you are not unreasonably disadvantaged as a result. You will be informed of material changes at least 30 days before they take effect, in the app or by email; if you do not object before they take effect, the amended terms are deemed accepted, which we will separately point out in the notice. You may object to the change at any time by deleting your account pursuant to § 10, without incurring any costs."),
        ],
      },
      {
        heading: "§ 15 Final provisions", blocks: [
          p("(1) Austrian law applies, excluding the UN Convention on Contracts for the International Sale of Goods (CISG). If you have your habitual residence in another EU member state, the protection afforded to you by the mandatory consumer-protection provisions of that state remains unaffected."),
          p("(2) Mandatory jurisdictional provisions for the benefit of consumers, in particular under Regulation (EU) No. 1215/2012 (Brussels Ia Regulation), remain unaffected by this provision; in particular, you may bring proceedings against TapRadar at the court of your own place of residence, to the extent this is mandatorily provided for."),
          p("(3) Should individual provisions of these Consumer Terms be or become invalid, the validity of the remaining provisions shall remain unaffected."),
        ],
      },
    ],
    sourcesHeading: "Sources",
    sourcesIntro: "Official EU and Austrian sources underlying these Consumer Terms:",
    sources: [
      { label: "Consumer Rights Directive, Directive 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Digital Content Directive, Directive (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Austrian Distance and Off-Premises Contracts Act (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Digital Services Act, Regulation (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  fr: {
    title: "Conditions générales pour consommateurs",
    subtitle: "Conditions générales pour l'application TapRadar (clients finaux) – TOY GmbH",
    stand: "Mise à jour : 9 août 2026 · Version 2026-08-09.2",
    intro: [
      p("Les présentes conditions générales (« Conditions Consommateurs ») régissent la relation contractuelle entre TOY GmbH et les personnes physiques qui utilisent l'application gratuite TapRadar en tant que clients finaux. Pour les entreprises souscrivant à une formule payante pour clients professionnels, les Conditions Clients Professionnels, publiées séparément, s'appliquent."),
    ],
    sections: [
      {
        heading: "§ 1 Champ d'application et parties au contrat", blocks: [
          p("(1) Les présentes Conditions Consommateurs s'appliquent à l'inscription et à l'utilisation de l'application TapRadar par des personnes physiques qui utilisent l'application à des fins privées, non principalement commerciales ni professionnelles indépendantes (consommateurs au sens du § 1, al. 1, point 2, de la loi autrichienne sur la protection des consommateurs, KSchG)."),
          p("(2) Le cocontractant est TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Autriche, numéro de TVA ATU78882167, e-mail support@tapradar.app (ci-après « TapRadar », « nous »)."),
          p("(3) L'utilisation de l'application requiert un âge minimum de 14 ans. Les personnes âgées de 14 à 18 ans confirment, en s'inscrivant, agir dans le cadre de leur capacité juridique ou disposer du consentement requis de leur représentant légal."),
          p("(4) Nous nous opposons à toute condition contraire ou divergente des présentes conditions ; ces conditions ne deviennent pas partie intégrante du contrat, sauf si TapRadar en accepte expressément et par écrit la validité."),
        ],
      },
      {
        heading: "§ 2 Description des prestations – les quatre domaines fonctionnels", blocks: [
          p("TapRadar vous propose, via l'application, quatre domaines fonctionnels centraux, utilisables gratuitement :"),
          p("2.1 Radar – Découvrir : trouver des commerces partenaires TapRadar locaux sur une carte, avec des possibilités de filtrage par offre, bon, récompense, mieux notés et un rayon de 500 mètres, ainsi que par catégories telles que café, restaurant, coiffeur ou marché. Pour chaque commerce partenaire, les horaires d'ouverture, les avis et le badge de plan correspondant sont affichés."),
          p("2.2 Tampon – Collecter : collecter des tampons numériques en touchant un point NFC ou en scannant un code QR, affichage de la progression (par ex. 7 tampons sur 10), utilisation de récompenses telles qu'un café gratuit ou une réduction, ainsi que l'obtention de points pour chaque tampon collecté."),
          p("2.3 Cartes – portefeuille numérique : enregistrement de cartes de fidélité de tiers déjà existantes, par exemple de Billa, DM, H&M, Spar ou Hofer, en enregistrant un code-barres ou un code QR, afin de les présenter directement à la caisse et de remplacer les cartes en plastique. Les marques mentionnées sont des exemples ; TapRadar n'est affiliée à aucune de ces entreprises."),
          p("2.4 Home – profil et gamification : un système de niveaux à 20 échelons allant de « Débutant » à « Champion », des points pour les tampons, les avis et les invitations d'amis, un objectif hebdomadaire, un système de séries (sept jours actifs consécutifs déclenchent un bonus), ainsi que la possibilité d'inviter des amis et de comparer sa progression dans un classement."),
          p("L'étendue actuelle des fonctionnalités résulte de l'application elle-même ; TapRadar est en droit d'adapter, de compléter ou de supprimer certaines fonctions dans le cadre de son développement continu, pour autant que cela ne porte pas atteinte de manière déraisonnable à l'utilité principale de l'application pour vous."),
          p("TapRadar ne fournit elle-même aucun bien ni service des commerces partenaires, notamment pas les produits, réductions ou récompenses annoncés, et n'est pas partie aux transactions conclues entre vous et un commerce partenaire. La responsabilité de l'utilisation effective des récompenses incombe exclusivement au commerce partenaire concerné."),
        ],
      },
      {
        heading: "§ 3 Inscription et conclusion du contrat", blocks: [
          p("(1) L'utilisation de TapRadar requiert l'inscription d'un compte utilisateur avec une adresse e-mail et un mot de passe. Dès la confirmation de votre adresse e-mail ou dès la première utilisation, un contrat d'utilisation gratuit soumis aux présentes Conditions Consommateurs est conclu entre vous et TapRadar."),
          p("(2) Vous êtes tenu de fournir des informations véridiques lors de l'inscription et de protéger vos identifiants d'accès contre tout accès par des tiers."),
        ],
      },
      {
        heading: "§ 4 Absence de prix monétaire – fourniture de services numériques en échange de données", blocks: [
          callout("Avis conformément à la directive relative aux contenus numériques (directive (UE) 2019/770)", "Même si vous ne payez aucun prix pour l'utilisation de l'application TapRadar, vous nous fournissez en contrepartie des données personnelles, notamment des données de localisation, d'utilisation et de contact. Les contrats relatifs à des services numériques dans lesquels le consommateur fournit des données personnelles au lieu d'un paiement relèvent du champ d'application de la directive relative aux contenus numériques et de la loi autrichienne sur les garanties des consommateurs (VGG). Vous disposez donc en principe des droits qui y sont prévus concernant la fourniture conforme du service numérique, dans la mesure où ceux-ci ne sont pas objectivement limités par le caractère gratuit de l'application."),
          p("TapRadar s'efforce de fournir l'application conformément aux caractéristiques décrites au § 2, à la norme habituelle des applications comparables et en tenant compte des déclarations publiques, et de la mettre à jour dans la mesure prévue contractuellement."),
        ],
      },
      {
        heading: "§ 5 Droits d'utilisation", blocks: [
          p("TapRadar vous accorde un droit simple, non cessible et personnel d'utiliser l'application à des fins privées conformément aux présentes Conditions Consommateurs. Toute sous-licence, revente ou utilisation commerciale de votre compte utilisateur est interdite."),
        ],
      },
      {
        heading: "§ 6 Vos obligations lors de l'utilisation", blocks: [
          p("(1) Vous vous engagez à ne pas utiliser la plateforme de manière abusive. La manipulation de tampons, de récompenses, de données de localisation ou d'autres mesures de protection techniques, par exemple par le biais d'un faux GPS, d'inscriptions multiples pour contourner des limitations ou de la manipulation de processus NFC ou QR, est interdite. TapRadar est en droit, en cas de soupçon fondé d'une telle manipulation, de bloquer ou de supprimer les tampons, récompenses ou comptes concernés."),
          p("(2) Les avis doivent être véridiques et fondés sur une visite réelle et vérifiée ; les avis illicites, insultants ou manifestement faux peuvent être supprimés par TapRadar. Les signalements de contenus illicites peuvent être effectués à tout moment via la fonction de signalement prévue dans l'application ou par e-mail à support@tapradar.app ; nous examinons chaque signalement et vous informons du résultat."),
          p("(3) Pour les cartes de fidélité de tiers enregistrées dans la section Cartes, vous êtes seul responsable de l'exactitude des données saisies et de leur acceptation à la caisse concernée ; TapRadar n'assume à cet égard aucune garantie, s'agissant de données de tiers saisies par vous-même et non vérifiées par TapRadar."),
        ],
      },
      {
        heading: "§ 7 Gamification, niveaux, points et récompenses", blocks: [
          p("(1) Les niveaux, points, séries et classements dans la section Home n'ont aucune valeur monétaire, ne sont pas négociables et ne peuvent pas être échangés contre de l'argent. Ils servent uniquement à représenter de manière ludique votre utilisation."),
          p("(2) Les récompenses utilisées via les cartes de fidélité, par exemple un produit gratuit ou une réduction, sont accordées exclusivement par le commerce partenaire concerné ; il n'existe aucun droit à l'égard de TapRadar concernant la fourniture, le remplacement ou la compensation d'une récompense non utilisée ou n'étant plus disponible."),
          p("(3) En cas de suppression de votre compte, tous les tampons, points, niveaux, séries et récompenses non encore utilisés collectés sont perdus sans compensation, à condition qu'aucun processus d'utilisation n'ait déjà commencé à ce moment-là."),
        ],
      },
      {
        heading: "§ 8 Autorisations de localisation et de notification push", blocks: [
          p("L'utilisation des fonctions Radar et Tampon ainsi que la réception de notifications push nécessitent des autorisations correspondantes, révocables à tout moment, dans les paramètres de votre appareil. Pour plus de détails sur le traitement des données de localisation et de notification push, voir la politique de confidentialité sur www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Disponibilité et modifications", blocks: [
          p("TapRadar s'efforce d'assurer une disponibilité élevée de l'application, mais ne peut garantir une disponibilité ininterrompue. Les travaux de maintenance, les dysfonctionnements techniques ou le développement continu peuvent entraîner des restrictions temporaires. Les modifications substantielles et défavorables des fonctions principales vous seront annoncées dans l'application avec un préavis raisonnable."),
        ],
      },
      {
        heading: "§ 10 Résiliation et suppression du compte", blocks: [
          p("Vous pouvez faire supprimer votre compte utilisateur à tout moment, gratuitement et sans indication de motif, via les paramètres de l'application ou par e-mail à support@tapradar.app ; le contrat prend fin dès la prise d'effet de la suppression. TapRadar peut résilier le contrat pour motif grave, notamment en cas de violations importantes du § 6, moyennant un préavis raisonnable."),
        ],
      },
      {
        heading: "§ 11 Responsabilité", blocks: [
          p("(1) TapRadar est responsable sans limitation des dommages résultant d'une atteinte à la vie, au corps ou à la santé, ainsi que des dommages résultant d'un dol ou d'une faute lourde, et conformément aux dispositions impératives de la loi sur la responsabilité du fait des produits."),
          p("(2) Pour les dommages causés par négligence légère, TapRadar n'est responsable qu'en cas de violation d'obligations contractuelles essentielles dont l'exécution rend possible, en premier lieu, l'utilisation conforme de l'application ; dans ce cas, la responsabilité est limitée au dommage typiquement prévisible pour ce type de contrat. Les dispositions impératives de la loi autrichienne sur la protection des consommateurs demeurent inchangées par cette limitation."),
          p("(3) TapRadar n'est pas responsable des contenus, offres, récompenses ou actes des commerces partenaires, ni de l'exactitude des avis d'autres utilisateurs ou des cartes de tiers que vous avez vous-même enregistrées dans la section Cartes."),
        ],
      },
      {
        heading: "§ 12 Droit de rétractation", blocks: [
          p("Même si l'application est gratuite, vous pouvez, en tant que consommateur, disposer sous certaines conditions d'un droit de rétractation légal concernant le contrat d'inscription conclu à distance. Pour plus de détails, voir la notice de rétractation destinée aux consommateurs, fournie séparément, sur www.tapradar.app/widerrufsbelehrung. Étant donné que vous pouvez de toute façon supprimer votre compte gratuitement et sans indication de motif à tout moment conformément au § 10, l'exercice du droit de rétractation n'a généralement pour vous aucun effet pratique supplémentaire, mais continue d'exister juridiquement indépendamment de cela."),
        ],
      },
      {
        heading: "§ 13 Règlement des litiges", blocks: [
          p("La Commission européenne met à disposition une plateforme de règlement en ligne des litiges (plateforme RLL), accessible à l'adresse https://ec.europa.eu/consumers/odr. TapRadar n'est ni obligée ni disposée à participer à une procédure de règlement des litiges devant un organisme de médiation des consommateurs, sauf disposition légale contraire."),
        ],
      },
      {
        heading: "§ 14 Modification des présentes Conditions Consommateurs", blocks: [
          p("TapRadar est en droit de modifier les présentes Conditions Consommateurs avec effet pour l'avenir, dans la mesure nécessaire pour s'adapter à l'évolution du cadre juridique, aux développements techniques ou aux fonctionnalités modifiées de l'application, et à condition que vous ne soyez pas désavantagé de manière déraisonnable de ce fait. Vous serez informé des modifications substantielles au moins 30 jours avant leur entrée en vigueur, dans l'application ou par e-mail ; si vous ne vous y opposez pas avant leur entrée en vigueur, les conditions modifiées sont réputées acceptées, ce que nous signalerons spécifiquement dans la communication. Vous pouvez vous opposer à tout moment à la modification en supprimant votre compte conformément au § 10, sans qu'aucun frais ne vous soit facturé."),
        ],
      },
      {
        heading: "§ 15 Dispositions finales", blocks: [
          p("(1) Le droit autrichien s'applique, à l'exclusion de la Convention des Nations Unies sur les contrats de vente internationale de marchandises (CVIM). Si vous avez votre résidence habituelle dans un autre État membre de l'UE, la protection que vous accordent les dispositions impératives de protection des consommateurs de cet État demeure inchangée."),
          p("(2) Les dispositions impératives en matière de compétence juridictionnelle en faveur des consommateurs, notamment en vertu du règlement (UE) n° 1215/2012 (règlement Bruxelles I bis), demeurent inchangées par la présente disposition ; vous pouvez notamment agir contre TapRadar devant le tribunal de votre propre domicile, dans la mesure où cela est prévu de manière impérative."),
          p("(3) Si certaines dispositions des présentes Conditions Consommateurs sont ou deviennent invalides, la validité des autres dispositions n'en est pas affectée."),
        ],
      },
    ],
    sourcesHeading: "Sources",
    sourcesIntro: "Sources officielles de l'UE et autrichiennes sur lesquelles reposent les présentes Conditions Consommateurs :",
    sources: [
      { label: "Directive relative aux droits des consommateurs, directive 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Directive relative aux contenus numériques, directive (UE) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Loi autrichienne sur les contrats à distance et hors établissement (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Digital Services Act, règlement (UE) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  it: {
    title: "Condizioni per consumatori",
    subtitle: "Condizioni generali per l'app TapRadar (clienti finali) – TOY GmbH",
    stand: "Aggiornamento: 9 agosto 2026 · Versione 2026-08-09.2",
    intro: [
      p("Le presenti condizioni generali (\"Condizioni per Consumatori\") disciplinano il rapporto contrattuale tra TOY GmbH e le persone fisiche che utilizzano l'app gratuita TapRadar in qualità di clienti finali. Per le aziende che sottoscrivono un piano a pagamento per clienti commerciali si applicano le Condizioni per Clienti Commerciali, pubblicate separatamente."),
    ],
    sections: [
      {
        heading: "§ 1 Ambito di applicazione e parti contraenti", blocks: [
          p("(1) Le presenti Condizioni per Consumatori si applicano alla registrazione e all'utilizzo dell'app TapRadar da parte di persone fisiche che utilizzano l'app per scopi privati, non prevalentemente commerciali o professionali autonomi (consumatori ai sensi del § 1, comma 1, punto 2, della legge austriaca sulla tutela dei consumatori, KSchG)."),
          p("(2) La controparte contrattuale è TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, partita IVA ATU78882167, e-mail support@tapradar.app (di seguito \"TapRadar\", \"noi\")."),
          p("(3) L'utilizzo dell'app richiede un'età minima di 14 anni. Le persone di età compresa tra 14 e 18 anni confermano, con la registrazione, di agire nell'ambito della propria capacità di agire o di disporre del necessario consenso del proprio rappresentante legale."),
          p("(4) Ci opponiamo a qualsiasi condizione contrastante o divergente rispetto alle presenti condizioni; tali condizioni non diventano parte del contratto, salvo espresso consenso scritto di TapRadar alla loro validità."),
        ],
      },
      {
        heading: "§ 2 Descrizione dei servizi – le quattro aree funzionali", blocks: [
          p("TapRadar ti mette a disposizione, tramite l'app, quattro aree funzionali centrali, utilizzabili gratuitamente:"),
          p("2.1 Radar – Scopri: trova attività partner TapRadar locali su una mappa, con possibilità di filtro per offerta, buono, ricompensa, migliori valutate e un raggio di 500 metri, nonché categorie come caffè, ristorante, parrucchiere o mercato. Per ogni attività partner vengono visualizzati orari di apertura, recensioni e il rispettivo badge del piano."),
          p("2.2 Timbro – Raccogli: raccogli timbri digitali toccando un punto NFC o scansionando un codice QR, visualizzazione dei progressi (ad es. 7 timbri su 10), riscatto di ricompense come un caffè gratis o uno sconto, nonché ottenimento di punti per ogni timbro raccolto."),
          p("2.3 Carte – portafoglio digitale: memorizzazione di carte fedeltà di terzi già esistenti, ad esempio di Billa, DM, H&M, Spar o Hofer, salvando un codice a barre o un codice QR, da mostrare direttamente alla cassa in sostituzione delle carte in plastica. I marchi citati sono esempi; TapRadar non è collegata a queste aziende."),
          p("2.4 Home – profilo e gamification: un sistema di livelli a 20 gradini da \"Principiante\" a \"Campione\", punti per timbri, recensioni e inviti di amici, un obiettivo settimanale, un sistema di serie (sette giorni attivi consecutivi attivano un bonus), nonché la possibilità di invitare amici e confrontare i propri progressi in una classifica."),
          p("L'attuale ambito delle funzioni risulta dall'app stessa; TapRadar è autorizzata ad adattare, integrare o dismettere singole funzioni nell'ambito del proprio sviluppo continuo, purché ciò non pregiudichi in modo irragionevole l'utilità principale dell'app per te."),
          p("TapRadar non fornisce essa stessa beni o servizi delle attività partner, in particolare non i prodotti, sconti o ricompense pubblicizzati, e non è parte delle transazioni concluse tra te e un'attività partner. La responsabilità per l'effettivo riscatto delle ricompense spetta esclusivamente alla rispettiva attività partner."),
        ],
      },
      {
        heading: "§ 3 Registrazione e conclusione del contratto", blocks: [
          p("(1) L'utilizzo di TapRadar presuppone la registrazione di un account utente con indirizzo e-mail e password. Con la conferma del tuo indirizzo e-mail o con il primo utilizzo, si conclude tra te e TapRadar un contratto d'uso gratuito soggetto alle presenti Condizioni per Consumatori."),
          p("(2) Sei tenuto a fornire dati veritieri al momento della registrazione e a proteggere le tue credenziali di accesso da accessi di terzi."),
        ],
      },
      {
        heading: "§ 4 Nessun prezzo in denaro – fornitura di servizi digitali in cambio di dati", blocks: [
          callout("Avviso ai sensi della direttiva sui contenuti digitali (direttiva (UE) 2019/770)", "Anche se non paghi un corrispettivo per l'utilizzo dell'app TapRadar, in cambio ci fornisci dati personali, in particolare dati di localizzazione, di utilizzo e di contatto. I contratti relativi a servizi digitali in cui il consumatore fornisce dati personali anziché un pagamento rientrano nell'ambito di applicazione della direttiva sui contenuti digitali e della legge austriaca sulle garanzie per i consumatori (VGG). Hai pertanto in linea di principio i diritti ivi previsti relativi alla fornitura conforme del servizio digitale, nella misura in cui questi non siano oggettivamente limitati dal carattere gratuito dell'app."),
          p("TapRadar si impegna a fornire l'app conformemente alle caratteristiche descritte al § 2, allo standard usuale di applicazioni comparabili e tenendo conto delle dichiarazioni pubbliche, nonché ad aggiornarla nella misura prevista contrattualmente."),
        ],
      },
      {
        heading: "§ 5 Diritti d'uso", blocks: [
          p("TapRadar ti concede un diritto semplice, non trasferibile e personale di utilizzare l'app per uso privato in conformità alle presenti Condizioni per Consumatori. Non sono consentiti la concessione di sublicenze, la rivendita o l'uso commerciale del tuo account utente."),
        ],
      },
      {
        heading: "§ 6 I tuoi obblighi nell'utilizzo", blocks: [
          p("(1) Ti impegni a non utilizzare la piattaforma in modo abusivo. È vietata la manipolazione di timbri, ricompense, dati di localizzazione o altre misure di protezione tecniche, ad esempio tramite GPS falso, registrazioni multiple per aggirare le limitazioni o manipolazione dei processi NFC o QR. TapRadar è autorizzata, in caso di fondato sospetto di tale manipolazione, a bloccare o cancellare i timbri, le ricompense o gli account interessati."),
          p("(2) Le recensioni devono essere veritiere e basate su una visita effettiva e verificata; recensioni illecite, offensive o manifestamente false possono essere rimosse da TapRadar. Le segnalazioni di contenuti illeciti possono essere effettuate in qualsiasi momento tramite la funzione di segnalazione prevista nell'app o via e-mail a support@tapradar.app; esaminiamo ogni segnalazione e ti comunichiamo l'esito."),
          p("(3) Per le carte fedeltà di terzi memorizzate nell'area Carte, sei tu il solo responsabile dell'esattezza dei dati inseriti e della loro accettazione presso la rispettiva cassa; TapRadar non fornisce alcuna garanzia al riguardo, trattandosi di dati di terzi da te stesso inseriti e non verificati da TapRadar."),
        ],
      },
      {
        heading: "§ 7 Gamification, livelli, punti e ricompense", blocks: [
          p("(1) Livelli, punti, serie e posizioni in classifica nell'area Home non hanno alcun valore monetario, non sono negoziabili e non possono essere riscattati in denaro. Servono esclusivamente a rappresentare in modo ludico il tuo utilizzo."),
          p("(2) Le ricompense riscattate tramite le carte fedeltà, ad esempio un prodotto gratuito o uno sconto, sono concesse esclusivamente dalla rispettiva attività partner; non sussiste alcun diritto nei confronti di TapRadar per la fornitura, la sostituzione o il risarcimento di una ricompensa non riscattata o non più disponibile."),
          p("(3) In caso di cancellazione del tuo account, tutti i timbri, punti, livelli, serie e ricompense non ancora riscattate raccolti decadono senza compensazione, purché a tale data non sia già iniziato un processo di riscatto."),
        ],
      },
      {
        heading: "§ 8 Autorizzazioni di localizzazione e push", blocks: [
          p("L'utilizzo delle funzioni Radar e Timbro nonché la ricezione di notifiche push presuppongono le corrispondenti autorizzazioni, revocabili in qualsiasi momento, nelle impostazioni del tuo dispositivo. Per i dettagli sul trattamento dei dati di localizzazione e push, consulta l'informativa sulla privacy su www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Disponibilità e modifiche", blocks: [
          p("TapRadar si adopera per garantire un'elevata disponibilità dell'app, ma non può garantire una disponibilità ininterrotta. Interventi di manutenzione, guasti tecnici o sviluppi continui possono comportare limitazioni temporanee. Le modifiche sostanziali e svantaggiose per te alle funzioni principali ti saranno annunciate con un ragionevole preavviso nell'app."),
        ],
      },
      {
        heading: "§ 10 Recesso e cancellazione dell'account", blocks: [
          p("Puoi far cancellare il tuo account utente in qualsiasi momento, gratuitamente e senza indicazione di motivi, tramite le impostazioni dell'app o via e-mail a support@tapradar.app; il contratto termina con l'efficacia della cancellazione. TapRadar può recedere dal contratto per giusta causa, in particolare in caso di violazioni rilevanti del § 6, con ragionevole preavviso."),
        ],
      },
      {
        heading: "§ 11 Responsabilità", blocks: [
          p("(1) TapRadar risponde senza limitazioni per i danni derivanti da lesione della vita, del corpo o della salute, nonché per i danni basati su dolo o colpa grave, e ai sensi delle disposizioni imperative della legge sulla responsabilità del prodotto."),
          p("(2) Per i danni causati da colpa lieve, TapRadar risponde solo in caso di violazione di obblighi contrattuali essenziali il cui adempimento rende possibile in primo luogo il corretto utilizzo dell'app; in tal caso la responsabilità è limitata al danno tipicamente prevedibile per questo tipo di contratto. Le disposizioni imperative della legge austriaca sulla tutela dei consumatori restano impregiudicate da tale limitazione."),
          p("(3) TapRadar non risponde per i contenuti, le offerte, le ricompense o le azioni delle attività partner, né per l'esattezza delle recensioni di altri utenti o delle carte di terzi da te memorizzate nell'area Carte."),
        ],
      },
      {
        heading: "§ 12 Diritto di recesso", blocks: [
          p("Anche se l'app è gratuita, in qualità di consumatore potresti avere, a determinate condizioni, un diritto di recesso legale relativo al contratto di registrazione concluso a distanza. Per i dettagli, consulta l'informativa sul recesso per consumatori, fornita separatamente, su www.tapradar.app/widerrufsbelehrung. Poiché puoi comunque cancellare il tuo account in qualsiasi momento gratuitamente e senza indicazione di motivi ai sensi del § 10, l'esercizio del diritto di recesso non ha di norma per te alcun ulteriore effetto pratico, ma continua a sussistere giuridicamente in modo indipendente."),
        ],
      },
      {
        heading: "§ 13 Risoluzione delle controversie", blocks: [
          p("La Commissione europea mette a disposizione una piattaforma per la risoluzione delle controversie online (piattaforma ODR), accessibile all'indirizzo https://ec.europa.eu/consumers/odr. TapRadar non è tenuta né disposta a partecipare a una procedura di risoluzione delle controversie dinanzi a un organismo di conciliazione dei consumatori, salvo diversa disposizione di legge."),
        ],
      },
      {
        heading: "§ 14 Modifica delle presenti Condizioni per Consumatori", blocks: [
          p("TapRadar è autorizzata a modificare le presenti Condizioni per Consumatori con effetto per il futuro, nella misura necessaria per adeguarle a mutate condizioni giuridiche, sviluppi tecnici o funzioni modificate dell'app, e purché tu non ne sia irragionevolmente svantaggiato. Sarai informato delle modifiche sostanziali almeno 30 giorni prima della loro entrata in vigore, nell'app o via e-mail; se non ti opponi prima dell'entrata in vigore, le condizioni modificate si considerano accettate, circostanza su cui richiameremo espressamente la tua attenzione nella comunicazione. Puoi opporti alla modifica in qualsiasi momento cancellando il tuo account ai sensi del § 10, senza che ciò comporti alcun costo per te."),
        ],
      },
      {
        heading: "§ 15 Disposizioni finali", blocks: [
          p("(1) Si applica il diritto austriaco, con esclusione della Convenzione delle Nazioni Unite sui contratti di vendita internazionale di merci (CISG). Se hai la tua residenza abituale in un altro Stato membro dell'UE, resta impregiudicata la tutela che ti garantiscono le disposizioni imperative di tutela dei consumatori di tale Stato."),
          p("(2) Le disposizioni imperative in materia di foro competente a favore dei consumatori, in particolare ai sensi del Regolamento (UE) n. 1215/2012 (Regolamento Bruxelles I-bis), restano impregiudicate dalla presente disposizione; puoi in particolare agire nei confronti di TapRadar presso il tribunale del tuo domicilio, nella misura in cui ciò sia previsto in modo imperativo."),
          p("(3) Qualora singole disposizioni delle presenti Condizioni per Consumatori siano o divengano invalide, la validità delle restanti disposizioni non ne risulta pregiudicata."),
        ],
      },
    ],
    sourcesHeading: "Fonti",
    sourcesIntro: "Fonti ufficiali dell'UE e austriache alla base delle presenti Condizioni per Consumatori:",
    sources: [
      { label: "Direttiva sui diritti dei consumatori, Direttiva 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Direttiva sui contenuti digitali, Direttiva (UE) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Legge austriaca sui contratti a distanza e fuori dei locali commerciali (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Digital Services Act, Regolamento (UE) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  cs: {
    title: "Podmínky pro spotřebitele",
    subtitle: "Všeobecné obchodní podmínky pro aplikaci TapRadar (koncoví zákazníci) – TOY GmbH",
    stand: "Aktualizováno: 9. srpna 2026 · Verze 2026-08-09.2",
    intro: [
      p("Tyto všeobecné obchodní podmínky („podmínky pro spotřebitele“) upravují smluvní vztah mezi společností TOY GmbH a fyzickými osobami, které používají bezplatnou aplikaci TapRadar jako koncoví zákazníci. Pro podniky, které si předplatí placený tarif pro obchodní zákazníky, platí samostatně zveřejněné podmínky pro obchodní zákazníky."),
    ],
    sections: [
      {
        heading: "§ 1 Rozsah platnosti a smluvní strany", blocks: [
          p("(1) Tyto podmínky pro spotřebitele se vztahují na registraci a používání aplikace TapRadar fyzickými osobami, které aplikaci používají k soukromým, převážně neobchodním nebo nesamostatným výdělečným účelům (spotřebitelé ve smyslu § 1 odst. 1 bodu 2 rakouského zákona o ochraně spotřebitele, KSchG)."),
          p("(2) Smluvní stranou je TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Rakousko, DIČ ATU78882167, e-mail support@tapradar.app (dále jen „TapRadar“, „my“)."),
          p("(3) Používání aplikace vyžaduje minimální věk 14 let. Osoby ve věku 14 až 18 let registrací potvrzují, že jednají v rámci své způsobilosti k právním úkonům, resp. že mají potřebný souhlas svého zákonného zástupce."),
          p("(4) Vylučujeme platnost jakýchkoli protichůdných nebo od těchto podmínek odchylných podmínek; tyto se nestávají součástí smlouvy, pokud TapRadar výslovně písemně nesouhlasí s jejich platností."),
        ],
      },
      {
        heading: "§ 2 Popis služeb – čtyři funkční oblasti", blocks: [
          p("TapRadar vám prostřednictvím aplikace poskytuje čtyři hlavní, bezplatně využitelné funkční oblasti:"),
          p("2.1 Radar – Objevujte: vyhledávání místních partnerských podniků TapRadar na mapě, s možnostmi filtrování podle akce, kupónu, odměny, nejlépe hodnocených a okruhu 500 metrů, jakož i kategorií jako kavárna, restaurace, kadeřnictví nebo trh. U každého partnerského podniku se zobrazuje otevírací doba, recenze a příslušný odznak tarifu."),
          p("2.2 Razítko – Sbírejte: sbírání digitálních razítek dotykem na NFC bod nebo skenováním QR kódu, zobrazení postupu (např. 7 z 10 razítek), uplatnění odměn, jako je káva zdarma nebo sleva, jakož i získávání bodů za každé nasbírané razítko."),
          p("2.3 Karty – digitální peněženka: ukládání již existujících zákaznických karet třetích stran, například Billa, DM, H&M, Spar nebo Hofer, uložením čárového nebo QR kódu, abyste je mohli přímo předložit u pokladny místo plastových karet. Uvedené značky jsou příklady; TapRadar není s těmito společnostmi propojen."),
          p("2.4 Home – profil a gamifikace: 20úrovňový systém úrovní od „Nováčka“ po „Šampiona“, body za razítka, recenze a pozvání přátel, týdenní cíl, systém série (sedm po sobě jdoucích aktivních dnů spouští bonus), jakož i možnost zvát přátele a porovnávat svůj postup v žebříčku."),
          p("Aktuální rozsah funkcí vyplývá ze samotné aplikace; TapRadar je oprávněn v rámci dalšího rozvoje jednotlivé funkce upravovat, doplňovat nebo rušit, pokud tím není nepřiměřeně dotčen hlavní přínos aplikace pro vás."),
          p("TapRadar sám neposkytuje žádné zboží ani služby partnerských podniků, zejména ne inzerované produkty, slevy nebo odměny, a není účastníkem právních vztahů vznikajících mezi vámi a partnerským podnikem. Za skutečné uplatnění odměn odpovídá výhradně příslušný partnerský podnik."),
        ],
      },
      {
        heading: "§ 3 Registrace a uzavření smlouvy", blocks: [
          p("(1) Používání TapRadar vyžaduje registraci uživatelského účtu s e-mailovou adresou a heslem. Potvrzením vaší e-mailové adresy, resp. prvním použitím, vzniká mezi vámi a TapRadar bezplatná smlouva o užívání podléhající těmto podmínkám pro spotřebitele."),
          p("(2) Jste povinni při registraci uvádět pravdivé údaje a chránit své přístupové údaje před přístupem třetích osob."),
        ],
      },
      {
        heading: "§ 4 Žádná peněžní cena – poskytování digitálních služeb výměnou za údaje", blocks: [
          callout("Upozornění podle směrnice o digitálním obsahu (směrnice (EU) 2019/770)", "I když za používání aplikace TapRadar neplatíte žádnou cenu, poskytujete nám výměnou osobní údaje, zejména údaje o poloze, používání a kontaktní údaje. Smlouvy o digitálních službách, u nichž spotřebitel poskytuje osobní údaje namísto platby, spadají do oblasti působnosti směrnice o digitálním obsahu a rakouského zákona o zárukách pro spotřebitele (VGG). Náleží vám proto zásadně práva na poskytnutí digitální služby v souladu se smlouvou, pokud nejsou objektivně omezena bezplatnou povahou aplikace."),
          p("TapRadar usiluje o poskytování aplikace v souladu s vlastnostmi popsanými v § 2, obvyklým standardem srovnatelných aplikací a s ohledem na veřejná prohlášení, jakož i o její aktualizaci v rozsahu smluvně předpokládaném."),
        ],
      },
      {
        heading: "§ 5 Práva k užívání", blocks: [
          p("TapRadar vám poskytuje jednoduché, nepřevoditelné, osobní právo užívat aplikaci pro soukromé účely v souladu s těmito podmínkami pro spotřebitele. Sublicencování, další prodej nebo komerční využívání vašeho uživatelského účtu nejsou povoleny."),
        ],
      },
      {
        heading: "§ 6 Vaše povinnosti při používání", blocks: [
          p("(1) Zavazujete se nepoužívat platformu zneužívajícím způsobem. Manipulace s razítky, odměnami, údaji o poloze nebo jinými technickými ochrannými opatřeními, například pomocí falešného GPS, vícenásobných registrací za účelem obejití omezení nebo manipulace s procesy NFC či QR, je zakázána. TapRadar je oprávněn při odůvodněném podezření na takovou manipulaci zablokovat nebo smazat dotčená razítka, odměny nebo účty."),
          p("(2) Recenze musí být pravdivé a založené na skutečné, ověřené návštěvě; protiprávní, urážlivé nebo zjevně nepravdivé recenze může TapRadar odstranit. Nahlášení protiprávního obsahu lze podat kdykoli prostřednictvím funkce nahlašování v aplikaci nebo e-mailem na support@tapradar.app; každé nahlášení přezkoumáme a sdělíme vám výsledek."),
          p("(3) Za správnost údajů zadaných u zákaznických karet třetích stran uložených v oblasti Karty a jejich přijetí u příslušné pokladny odpovídáte výhradně vy; TapRadar v tomto ohledu neposkytuje žádnou záruku, jelikož se jedná o vámi samotnými zadané, TapRadarem neověřované údaje třetích stran."),
        ],
      },
      {
        heading: "§ 7 Gamifikace, úrovně, body a odměny", blocks: [
          p("(1) Úrovně, body, série a umístění v žebříčku v oblasti Home nemají žádnou peněžní hodnotu, nejsou obchodovatelné a nelze je vyměnit za peníze. Slouží výhradně k hravému znázornění vašeho používání."),
          p("(2) Odměny uplatněné prostřednictvím věrnostních karet, například bezplatný produkt nebo sleva, poskytuje výhradně příslušný partnerský podnik; vůči TapRadar neexistuje žádný nárok na poskytnutí, náhradu nebo kompenzaci hodnoty nevyužité nebo již nedostupné odměny."),
          p("(3) Při zrušení vašeho účtu propadají veškerá nasbíraná razítka, body, úrovně, série a dosud neuplatněné odměny bez náhrady, pokud v tomto okamžiku již nezačal proces uplatnění."),
        ],
      },
      {
        heading: "§ 8 Oprávnění k poloze a push notifikacím", blocks: [
          p("Používání funkcí Radar a Razítko, jakož i příjem push oznámení vyžaduje odpovídající, kdykoli odvolatelná oprávnění v nastavení vašeho zařízení. Podrobnosti o zpracování údajů o poloze a push notifikacích naleznete v zásadách ochrany osobních údajů na www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Dostupnost a změny", blocks: [
          p("TapRadar usiluje o zajištění vysoké dostupnosti aplikace, nemůže však zaručit nepřerušovanou dostupnost. Údržbové práce, technické poruchy nebo další rozvoj mohou vést k dočasným omezením. Podstatné, pro vás nevýhodné změny základních funkcí budou v aplikaci oznámeny s přiměřeným předstihem."),
        ],
      },
      {
        heading: "§ 10 Výpověď a zrušení účtu", blocks: [
          p("Svůj uživatelský účet můžete kdykoli, bezplatně a bez udání důvodu nechat zrušit prostřednictvím nastavení aplikace nebo e-mailem na support@tapradar.app; smlouva končí nabytím účinnosti zrušení. TapRadar může smlouvu vypovědět z důležitého důvodu, zejména při závažném porušení § 6, s přiměřeným předchozím oznámením."),
        ],
      },
      {
        heading: "§ 11 Odpovědnost", blocks: [
          p("(1) TapRadar odpovídá bez omezení za škody vzniklé porušením života, těla nebo zdraví, jakož i za škody způsobené úmyslně nebo hrubou nedbalostí, a podle kogentních ustanovení zákona o odpovědnosti za výrobek."),
          p("(2) Za škody způsobené lehkou nedbalostí odpovídá TapRadar pouze při porušení podstatných smluvních povinností, jejichž splnění vůbec umožňuje řádné používání aplikace; v takovém případě je odpovědnost omezena na škodu typicky předvídatelnou pro tento typ smlouvy. Kogentní ustanovení rakouského zákona o ochraně spotřebitele zůstávají tímto omezením nedotčena."),
          p("(3) TapRadar neodpovídá za obsahy, nabídky, odměny nebo jednání partnerských podniků ani za správnost recenzí ostatních uživatelů nebo karet třetích stran, které jste sami uložili v oblasti Karty."),
        ],
      },
      {
        heading: "§ 12 Právo na odstoupení", blocks: [
          p("I když je aplikace bezplatná, jako spotřebiteli vám může za určitých podmínek náležet zákonné právo na odstoupení od smlouvy o registraci uzavřené na dálku. Podrobnosti naleznete v samostatně poskytnuté informaci o odstoupení pro spotřebitele na www.tapradar.app/widerrufsbelehrung. Jelikož můžete svůj účet kdykoli bezplatně a bez udání důvodu zrušit podle § 10, nemá uplatnění práva na odstoupení pro vás zpravidla žádný dodatečný praktický účinek, existuje však právně nezávisle na tom."),
        ],
      },
      {
        heading: "§ 13 Řešení sporů", blocks: [
          p("Evropská komise poskytuje platformu pro online řešení sporů (platforma ODR), dostupnou na https://ec.europa.eu/consumers/odr. TapRadar není povinen ani ochoten účastnit se řízení o řešení sporů před spotřebitelským smírčím orgánem, pokud zákon nestanoví jinak."),
        ],
      },
      {
        heading: "§ 14 Změna těchto podmínek pro spotřebitele", blocks: [
          p("TapRadar je oprávněn tyto podmínky pro spotřebitele měnit s účinností do budoucna, pokud je to nutné pro přizpůsobení se změněné právní situaci, technickému rozvoji nebo změněným funkcím aplikace, a pokud tím nejste nepřiměřeně znevýhodněni. O podstatných změnách budete informováni nejméně 30 dní před jejich účinností, v aplikaci nebo e-mailem; pokud proti nim nevznesete námitku do jejich účinnosti, považují se změněné podmínky za přijaté, na což vás zvlášť upozorníme v oznámení. Změně můžete kdykoli vznést námitku zrušením svého účtu podle § 10, aniž by vám tím vznikly jakékoli náklady."),
        ],
      },
      {
        heading: "§ 15 Závěrečná ustanovení", blocks: [
          p("(1) Platí rakouské právo s vyloučením Úmluvy OSN o smlouvách o mezinárodní koupi zboží (CISG). Máte-li obvyklý pobyt v jiném členském státě EU, zůstává nedotčena ochrana, kterou vám poskytují kogentní ustanovení na ochranu spotřebitele daného státu."),
          p("(2) Kogentní ustanovení o příslušnosti soudů ve prospěch spotřebitelů, zejména podle nařízení (EU) č. 1215/2012 (nařízení Brusel Ia), zůstávají tímto ustanovením nedotčena; můžete zejména uplatnit nároky vůči TapRadar u soudu příslušného podle svého bydliště, pokud to zákon kogentně stanoví."),
          p("(3) Pokud by jednotlivá ustanovení těchto podmínek pro spotřebitele byla nebo se stala neplatnými, zůstává tím platnost ostatních ustanovení nedotčena."),
        ],
      },
    ],
    sourcesHeading: "Seznam zdrojů",
    sourcesIntro: "Úřední zdroje EU a Rakouska, ze kterých tyto podmínky pro spotřebitele vycházejí:",
    sources: [
      { label: "Směrnice o právech spotřebitelů, směrnice 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Směrnice o digitálním obsahu, směrnice (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Rakouský zákon o smlouvách uzavíraných na dálku a mimo obchodní prostory (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Akt o digitálních službách, nařízení (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  hu: {
    title: "Fogyasztói ÁSZF",
    subtitle: "Általános Szerződési Feltételek a TapRadar alkalmazáshoz (végfelhasználók) – TOY GmbH",
    stand: "Frissítve: 2026. augusztus 9. · 2026-08-09.2 verzió",
    intro: [
      p("Ez az Általános Szerződési Feltételek („Fogyasztói ÁSZF”) szabályozza a TOY GmbH és az ingyenes TapRadar alkalmazást végfelhasználóként használó természetes személyek közötti szerződéses jogviszonyt. A fizetős üzleti ügyfél csomagra előfizető vállalkozásokra a külön közzétett Üzleti ügyfél ÁSZF vonatkozik."),
    ],
    sections: [
      {
        heading: "§ 1 Hatály és szerződő felek", blocks: [
          p("(1) Ez a Fogyasztói ÁSZF a TapRadar alkalmazás olyan természetes személyek általi regisztrációjára és használatára vonatkozik, akik az alkalmazást magáncélra, nem túlnyomórészt kereskedelmi vagy önálló szakmai célra használják (a KSchG 1. § (1) bekezdés 2. pontja szerinti fogyasztók)."),
          p("(2) A szerződő fél a TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Ausztria, adószám: ATU78882167, e-mail: support@tapradar.app (a továbbiakban „TapRadar”, „mi”)."),
          p("(3) Az alkalmazás használatához legalább 14 éves életkor szükséges. A 14 és 18 év közötti személyek a regisztrációval megerősítik, hogy cselekvőképességük keretein belül járnak el, illetve rendelkeznek törvényes képviselőjük szükséges hozzájárulásával."),
          p("(4) Az ezen ÁSZF-fel ellentétes vagy attól eltérő feltételeket kifogásoljuk; ezek nem válnak a szerződés részévé, kivéve, ha a TapRadar kifejezetten, írásban elfogadja azok érvényességét."),
        ],
      },
      {
        heading: "§ 2 Szolgáltatásleírás – a négy funkcionális terület", blocks: [
          p("A TapRadar az alkalmazáson keresztül négy fő, ingyenesen igénybe vehető funkcionális területet biztosít Önnek:"),
          p("2.1 Radar – Fedezze fel: helyi TapRadar partnerüzletek megkeresése térképen, akció, kupon, jutalom, legjobbra értékelt szűrési lehetőségekkel és 500 méteres körzettel, valamint olyan kategóriákkal, mint kávézó, étterem, fodrász vagy piac. Minden partnerüzletnél megjelenik a nyitvatartási idő, az értékelések és a megfelelő csomagjelvény."),
          p("2.2 Bélyegző – Gyűjtsön: digitális bélyegzők gyűjtése egy NFC pont megérintésével vagy QR-kód beolvasásával, az előrehaladás megjelenítése (pl. 7 a 10-ből), olyan jutalmak beváltása, mint egy ingyenes kávé vagy kedvezmény, valamint pontok szerzése minden nasbírt bélyegzőért."),
          p("2.3 Kártyák – digitális tárca: meglévő, harmadik felekhez – például Billa, DM, H&M, Spar vagy Hofer – tartozó ügyfélkártyák tárolása vonalkód vagy QR-kód mentésével, hogy a pénztárnál közvetlenül bemutathatók legyenek a műanyag kártyák helyett. A megnevezett márkák példák; a TapRadar nem áll kapcsolatban ezekkel a vállalatokkal."),
          p("2.4 Home – profil és játékosítás: 20 szintből álló, „Kezdő”-től „Bajnok”-ig terjedő szintrendszer, pontok bélyegzőkért, értékelésekért és barátmeghívásokért, heti cél, sorozatrendszer (hét egymást követő aktív nap bónuszt vált ki), valamint a barátok meghívásának és a ranglistán elért előrehaladás összehasonlításának lehetősége."),
          p("A funkciók aktuális köre az alkalmazásból magából következik; a TapRadar jogosult egyes funkciókat a további fejlesztés keretében módosítani, kiegészíteni vagy megszüntetni, amennyiben ez nem érinti aránytalanul az alkalmazás Ön számára nyújtott fő hasznát."),
          p("A TapRadar maga nem nyújt semmilyen árut vagy szolgáltatást a partnerüzletek részéről, különösen nem a hirdetett termékeket, kedvezményeket vagy jutalmakat, és nem részes fele az Ön és egy partnerüzlet között létrejövő jogügyleteknek. A jutalmak tényleges beváltásáért kizárólag az adott partnerüzlet felel."),
        ],
      },
      {
        heading: "§ 3 Regisztráció és a szerződés létrejötte", blocks: [
          p("(1) A TapRadar használatához felhasználói fiók regisztrálása szükséges e-mail címmel és jelszóval. Az e-mail cím megerősítésével, illetve az első használattal az Ön és a TapRadar között ingyenes, ezen Fogyasztói ÁSZF hatálya alá tartozó felhasználási szerződés jön létre."),
          p("(2) Ön köteles a regisztráció során valós adatokat megadni, és hozzáférési adatait harmadik felek hozzáférésétől védeni."),
        ],
      },
      {
        heading: "§ 4 Nincs pénzbeli ár – digitális szolgáltatások nyújtása adatok ellenében", blocks: [
          callout("Tájékoztatás a digitális tartalmakról szóló irányelv szerint (az (EU) 2019/770 irányelv)", "Bár Ön nem fizet díjat a TapRadar alkalmazás használatáért, cserébe személyes adatokat bocsát rendelkezésünkre, különösen helymeghatározási, felhasználási és kapcsolattartási adatokat. Az olyan digitális szolgáltatásokra vonatkozó szerződések, amelyeknél a fogyasztó fizetés helyett személyes adatokat bocsát rendelkezésre, a digitális tartalmakról szóló irányelv és az osztrák fogyasztói szavatossági törvény (VGG) hatálya alá tartoznak. Ön ezért főszabály szerint jogosult az ott meghatározott, a digitális szolgáltatás szerződésszerű nyújtására vonatkozó jogokra, amennyiben azokat az alkalmazás ingyenes jellege objektíven nem korlátozza."),
          p("A TapRadar törekszik arra, hogy az alkalmazást a § 2-ben leírt jellemzőknek, a hasonló alkalmazásokra jellemző szokásos színvonalnak megfelelően, a nyilvános nyilatkozatok figyelembevételével biztosítsa, és a szerződés szerint előírt mértékben frissítse."),
        ],
      },
      {
        heading: "§ 5 Felhasználási jogok", blocks: [
          p("A TapRadar egyszerű, át nem ruházható, személyes jogot biztosít Önnek az alkalmazás magáncélú, ezen Fogyasztói ÁSZF szerinti használatára. Az allicencia adása, a továbbértékesítés vagy felhasználói fiókjának kereskedelmi célú felhasználása nem megengedett."),
        ],
      },
      {
        heading: "§ 6 Az Ön kötelezettségei a használat során", blocks: [
          p("(1) Ön kötelezettséget vállal arra, hogy a platformot nem használja visszaélésszerűen. Tilos a bélyegzők, jutalmak, helymeghatározási adatok vagy egyéb technikai védelmi intézkedések manipulálása, például hamis GPS, korlátozások megkerülésére szolgáló többszörös regisztráció vagy az NFC- vagy QR-folyamatok manipulálása útján. A TapRadar jogosult, ha megalapozott gyanú áll fenn ilyen manipulációra, az érintett bélyegzőket, jutalmakat vagy fiókokat letiltani vagy törölni."),
          p("(2) Az értékeléseknek valósnak kell lenniük, és tényleges, ellenőrzött látogatáson kell alapulniuk; a jogellenes, sértő vagy nyilvánvalóan valótlan értékeléseket a TapRadar eltávolíthatja. A jogellenes tartalmakról szóló bejelentések bármikor megtehetők az alkalmazásban biztosított bejelentési funkción keresztül vagy a support@tapradar.app e-mail címen; minden bejelentést megvizsgálunk, és tájékoztatjuk Önt az eredményről."),
          p("(3) A Kártyák területen tárolt, harmadik felekhez tartozó ügyfélkártyák tekintetében kizárólag Ön felelős a megadott adatok pontosságáért és azok adott pénztárnál történő elfogadásáért; a TapRadar ezzel kapcsolatban semmilyen szavatosságot nem vállal, mivel ezek az Ön által megadott, a TapRadar által nem ellenőrzött harmadik féltől származó adatok."),
        ],
      },
      {
        heading: "§ 7 Játékosítás, szintek, pontok és jutalmak", blocks: [
          p("(1) A Home területen található szintek, pontok, sorozatok és ranglistahelyezések nem rendelkeznek pénzbeli értékkel, nem forgalomképesek és pénzre nem válthatók. Kizárólag az Ön használatának játékos megjelenítésére szolgálnak."),
          p("(2) A hűségkártyákon keresztül beváltott jutalmakat, például egy ingyenes terméket vagy kedvezményt, kizárólag az adott partnerüzlet biztosítja; a TapRadarral szemben nem áll fenn igény egy be nem váltott vagy már nem elérhető jutalom biztosítására, pótlására vagy kompenzációjára."),
          p("(3) Fiókja törlése esetén az összes gyűjtött bélyegző, pont, szint, sorozat és még be nem váltott jutalom ellenszolgáltatás nélkül elvész, feltéve, hogy ekkor még nem kezdődött meg beváltási folyamat."),
        ],
      },
      {
        heading: "§ 8 Helymeghatározási és push engedélyek", blocks: [
          p("A Radar és Bélyegző funkciók használata, valamint a push értesítések fogadása megfelelő, bármikor visszavonható engedélyeket igényel eszköze beállításaiban. A helymeghatározási és push adatok kezelésének részleteiről lásd az adatvédelmi tájékoztatót a www.tapradar.app/datenschutz oldalon."),
        ],
      },
      {
        heading: "§ 9 Rendelkezésre állás és módosítások", blocks: [
          p("A TapRadar törekszik az alkalmazás magas rendelkezésre állásának biztosítására, de nem garantálhatja a folyamatos, megszakítás nélküli rendelkezésre állást. Karbantartási munkák, technikai zavarok vagy a folyamatos fejlesztés ideiglenes korlátozásokhoz vezethetnek. Az alapvető funkciók Önre nézve hátrányos, lényeges módosításait ésszerű időben előre bejelentjük az alkalmazásban."),
        ],
      },
      {
        heading: "§ 10 Felmondás és fiók törlése", blocks: [
          p("Felhasználói fiókját bármikor, ingyenesen és indoklás nélkül töröltetheti az alkalmazás beállításain keresztül vagy a support@tapradar.app e-mail címen; a szerződés a törlés hatálybalépésével véget ér. A TapRadar fontos okból, különösen a § 6 jelentős megsértése esetén, ésszerű előzetes értesítéssel felmondhatja a szerződést."),
        ],
      },
      {
        heading: "§ 11 Felelősség", blocks: [
          p("(1) A TapRadar korlátlanul felel az élet, testi épség vagy egészség megsértéséből eredő károkért, valamint a szándékosan vagy súlyos gondatlansággal okozott károkért, továbbá a termékfelelősségi törvény kógens rendelkezései szerint."),
          p("(2) Enyhe gondatlansággal okozott károkért a TapRadar csak olyan lényeges szerződéses kötelezettségek megsértése esetén felel, amelyek teljesítése egyáltalán lehetővé teszi az alkalmazás rendeltetésszerű használatát; ebben az esetben a felelősség a szerződéstípusra jellemzően előre látható kárra korlátozódik. Az osztrák fogyasztóvédelmi törvény kógens rendelkezéseit ez a korlátozás nem érinti."),
          p("(3) A TapRadar nem felel a partnerüzletek tartalmaiért, ajánlataiért, jutalmaiért vagy cselekedeteiért, sem más felhasználók értékeléseinek helyességéért, sem az Ön által a Kártyák területen tárolt harmadik féltől származó kártyákért."),
        ],
      },
      {
        heading: "§ 12 Elállási jog", blocks: [
          p("Bár az alkalmazás ingyenes, fogyasztóként bizonyos feltételek mellett törvényes elállási jog illetheti meg a távollévők között kötött regisztrációs szerződéssel kapcsolatban. Részletekért lásd a külön elérhető fogyasztói elállási tájékoztatót a www.tapradar.app/widerrufsbelehrung oldalon. Mivel fiókját a § 10 alapján egyébként is bármikor ingyenesen és indoklás nélkül törölheti, az elállási jog gyakorlásának Ön számára rendszerint nincs további gyakorlati hatása, ettől függetlenül azonban jogilag továbbra is fennáll."),
        ],
      },
      {
        heading: "§ 13 Vitarendezés", blocks: [
          p("Az Európai Bizottság online vitarendezési platformot (ODR platform) biztosít, amely a https://ec.europa.eu/consumers/odr címen érhető el. A TapRadar nem köteles és nem is hajlandó fogyasztói békéltető testület előtti vitarendezési eljárásban részt venni, kivéve, ha jogszabály másként rendelkezik."),
        ],
      },
      {
        heading: "§ 14 E Fogyasztói ÁSZF módosítása", blocks: [
          p("A TapRadar jogosult ezt a Fogyasztói ÁSZF-et a jövőre nézve módosítani, amennyiben ez a megváltozott jogi helyzethez, technikai fejlesztésekhez vagy az alkalmazás megváltozott funkcióihoz való igazodáshoz szükséges, és Ön ezáltal nem szenved aránytalan hátrányt. A lényeges változásokról legalább 30 nappal a hatálybalépésük előtt tájékoztatjuk Önt az alkalmazásban vagy e-mailben; ha a hatálybalépésig nem emel kifogást, a módosított feltételek elfogadottnak minősülnek, amelyre a tájékoztatóban külön felhívjuk a figyelmet. A módosítás ellen bármikor tiltakozhat fiókjának a § 10 szerinti törlésével, anélkül hogy ebből Önnek költsége keletkezne."),
        ],
      },
      {
        heading: "§ 15 Záró rendelkezések", blocks: [
          p("(1) Az osztrák jog az irányadó, az ENSZ Bécsi Vételi Egyezményének (CISG) kizárásával. Ha szokásos tartózkodási helye egy másik EU-tagállamban van, érintetlen marad az adott állam kógens fogyasztóvédelmi rendelkezései által biztosított védelem."),
          p("(2) A fogyasztók javára szóló kógens joghatósági rendelkezések, különösen az (EU) 1215/2012 rendelet (Brüsszel Ia rendelet) szerint, e rendelkezés által nem érintettek; Ön különösen saját lakóhelye szerinti bíróság előtt is felléphet a TapRadarral szemben, amennyiben ezt kógens szabály előírja."),
          p("(3) Amennyiben ezen Fogyasztói ÁSZF egyes rendelkezései érvénytelenek vagy azzá válnak, ez nem érinti a többi rendelkezés érvényességét."),
        ],
      },
    ],
    sourcesHeading: "Forrásjegyzék",
    sourcesIntro: "Az uniós és osztrák hivatalos források, amelyeken ez a Fogyasztói ÁSZF alapul:",
    sources: [
      { label: "Fogyasztói jogokról szóló irányelv, 2011/83/EU irányelv", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Digitális tartalmakról szóló irányelv, (EU) 2019/770 irányelv", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Osztrák távollévők között és üzlethelyiségen kívül kötött szerződésekről szóló törvény (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Digitális szolgáltatásokról szóló jogszabály, (EU) 2022/2065 rendelet", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  sk: {
    title: "Podmienky pre spotrebiteľov",
    subtitle: "Všeobecné obchodné podmienky pre aplikáciu TapRadar (koncoví zákazníci) – TOY GmbH",
    stand: "Aktualizované: 9. augusta 2026 · Verzia 2026-08-09.2",
    intro: [
      p("Tieto všeobecné obchodné podmienky („podmienky pre spotrebiteľov“) upravujú zmluvný vzťah medzi spoločnosťou TOY GmbH a fyzickými osobami, ktoré používajú bezplatnú aplikáciu TapRadar ako koncoví zákazníci. Pre podniky, ktoré si predplatia platený tarif pre obchodných zákazníkov, platia samostatne zverejnené podmienky pre obchodných zákazníkov."),
    ],
    sections: [
      {
        heading: "§ 1 Rozsah platnosti a zmluvné strany", blocks: [
          p("(1) Tieto podmienky pre spotrebiteľov sa vzťahujú na registráciu a používanie aplikácie TapRadar fyzickými osobami, ktoré aplikáciu používajú na súkromné, prevažne neobchodné alebo nesamostatné zárobkové účely (spotrebitelia v zmysle § 1 ods. 1 bodu 2 rakúskeho zákona o ochrane spotrebiteľa, KSchG)."),
          p("(2) Zmluvnou stranou je TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Rakúsko, IČ DPH ATU78882167, e-mail support@tapradar.app (ďalej len „TapRadar“, „my“)."),
          p("(3) Používanie aplikácie vyžaduje minimálny vek 14 rokov. Osoby vo veku 14 až 18 rokov registráciou potvrdzujú, že konajú v rámci svojej spôsobilosti na právne úkony, resp. že majú potrebný súhlas svojho zákonného zástupcu."),
          p("(4) Vylučujeme platnosť akýchkoľvek protichodných alebo od týchto podmienok odlišných podmienok; tieto sa nestávajú súčasťou zmluvy, pokiaľ TapRadar výslovne písomne nesúhlasí s ich platnosťou."),
        ],
      },
      {
        heading: "§ 2 Opis služieb – štyri funkčné oblasti", blocks: [
          p("TapRadar vám prostredníctvom aplikácie poskytuje štyri hlavné, bezplatne využiteľné funkčné oblasti:"),
          p("2.1 Radar – Objavujte: vyhľadávanie miestnych partnerských podnikov TapRadar na mape, s možnosťami filtrovania podľa akcie, kupónu, odmeny, najlepšie hodnotených a okruhu 500 metrov, ako aj kategórií, ako je kaviareň, reštaurácia, kaderníctvo alebo trh. Pri každom partnerskom podniku sa zobrazuje otváracia doba, recenzie a príslušný odznak tarifu."),
          p("2.2 Pečiatka – Zbierajte: zbieranie digitálnych pečiatok dotykom na NFC bod alebo skenovaním QR kódu, zobrazenie postupu (napr. 7 z 10 pečiatok), uplatnenie odmien, ako je káva zadarmo alebo zľava, ako aj získavanie bodov za každú nazbieranú pečiatku."),
          p("2.3 Karty – digitálna peňaženka: ukladanie už existujúcich zákazníckych kariet tretích strán, napríklad Billa, DM, H&M, Spar alebo Hofer, uložením čiarového alebo QR kódu, aby ste ich mohli priamo predložiť pri pokladni namiesto plastových kariet. Uvedené značky sú príklady; TapRadar nie je s týmito spoločnosťami prepojený."),
          p("2.4 Home – profil a gamifikácia: 20-úrovňový systém úrovní od „Nováčika“ po „Šampióna“, body za pečiatky, recenzie a pozvania priateľov, týždenný cieľ, systém série (sedem po sebe nasledujúcich aktívnych dní spúšťa bonus), ako aj možnosť pozývať priateľov a porovnávať svoj postup v rebríčku."),
          p("Aktuálny rozsah funkcií vyplýva zo samotnej aplikácie; TapRadar je oprávnený v rámci ďalšieho rozvoja jednotlivé funkcie upravovať, dopĺňať alebo rušiť, pokiaľ tým nie je neprimerane dotknutý hlavný prínos aplikácie pre vás."),
          p("TapRadar sám neposkytuje žiadny tovar ani služby partnerských podnikov, najmä nie inzerované produkty, zľavy alebo odmeny, a nie je účastníkom právnych vzťahov vznikajúcich medzi vami a partnerským podnikom. Za skutočné uplatnenie odmien zodpovedá výlučne príslušný partnerský podnik."),
        ],
      },
      {
        heading: "§ 3 Registrácia a uzavretie zmluvy", blocks: [
          p("(1) Používanie TapRadar vyžaduje registráciu používateľského účtu s e-mailovou adresou a heslom. Potvrdením vašej e-mailovej adresy, resp. prvým použitím, vzniká medzi vami a TapRadar bezplatná zmluva o používaní podliehajúca týmto podmienkam pre spotrebiteľov."),
          p("(2) Ste povinní pri registrácii uvádzať pravdivé údaje a chrániť svoje prístupové údaje pred prístupom tretích osôb."),
        ],
      },
      {
        heading: "§ 4 Žiadna peňažná cena – poskytovanie digitálnych služieb výmenou za údaje", blocks: [
          callout("Upozornenie podľa smernice o digitálnom obsahu (smernica (EÚ) 2019/770)", "Aj keď za používanie aplikácie TapRadar neplatíte žiadnu cenu, poskytujete nám výmenou osobné údaje, najmä údaje o polohe, používaní a kontaktné údaje. Zmluvy o digitálnych službách, pri ktorých spotrebiteľ poskytuje osobné údaje namiesto platby, patria do pôsobnosti smernice o digitálnom obsahu a rakúskeho zákona o zárukách pre spotrebiteľov (VGG). Preto vám zásadne prináležia tam upravené práva na poskytnutie digitálnej služby v súlade so zmluvou, pokiaľ nie sú objektívne obmedzené bezplatnou povahou aplikácie."),
          p("TapRadar sa usiluje poskytovať aplikáciu v súlade s vlastnosťami opísanými v § 2, obvyklým štandardom porovnateľných aplikácií a s ohľadom na verejné vyhlásenia, ako aj ju aktualizovať v rozsahu zmluvne predpokladanom."),
        ],
      },
      {
        heading: "§ 5 Práva na používanie", blocks: [
          p("TapRadar vám poskytuje jednoduché, neprevoditeľné, osobné právo používať aplikáciu na súkromné účely v súlade s týmito podmienkami pre spotrebiteľov. Sublicencovanie, ďalší predaj alebo komerčné využívanie vášho používateľského účtu nie sú povolené."),
        ],
      },
      {
        heading: "§ 6 Vaše povinnosti pri používaní", blocks: [
          p("(1) Zaväzujete sa nepoužívať platformu zneužívajúcim spôsobom. Manipulácia s pečiatkami, odmenami, údajmi o polohe alebo inými technickými ochrannými opatreniami, napríklad pomocou falošného GPS, viacnásobných registrácií na obídenie obmedzení alebo manipulácie s procesmi NFC či QR, je zakázaná. TapRadar je oprávnený pri odôvodnenom podozrení na takúto manipuláciu zablokovať alebo vymazať dotknuté pečiatky, odmeny alebo účty."),
          p("(2) Recenzie musia byť pravdivé a založené na skutočnej, overenej návšteve; protiprávne, urážlivé alebo zjavne nepravdivé recenzie môže TapRadar odstrániť. Nahlásenia protiprávneho obsahu možno kedykoľvek podať prostredníctvom funkcie nahlasovania v aplikácii alebo e-mailom na support@tapradar.app; každé nahlásenie preskúmame a oznámime vám výsledok."),
          p("(3) Za správnosť údajov zadaných pri zákazníckych kartách tretích strán uložených v oblasti Karty a ich prijatie pri príslušnej pokladni zodpovedáte výlučne vy; TapRadar v tomto ohľade neposkytuje žiadnu záruku, keďže ide o vami samotnými zadané, spoločnosťou TapRadar neoverované údaje tretích strán."),
        ],
      },
      {
        heading: "§ 7 Gamifikácia, úrovne, body a odmeny", blocks: [
          p("(1) Úrovne, body, série a umiestnenia v rebríčku v oblasti Home nemajú žiadnu peňažnú hodnotu, nie sú obchodovateľné a nemožno ich vymeniť za peniaze. Slúžia výlučne na hravé znázornenie vášho používania."),
          p("(2) Odmeny uplatnené prostredníctvom vernostných kariet, napríklad bezplatný produkt alebo zľava, poskytuje výlučne príslušný partnerský podnik; voči TapRadar neexistuje žiadny nárok na poskytnutie, náhradu alebo kompenzáciu hodnoty nevyužitej alebo už nedostupnej odmeny."),
          p("(3) Pri zrušení vášho účtu prepadajú všetky nazbierané pečiatky, body, úrovne, série a dosiaľ neuplatnené odmeny bez náhrady, pokiaľ v tomto okamihu ešte nezačal proces uplatnenia."),
        ],
      },
      {
        heading: "§ 8 Oprávnenia týkajúce sa polohy a push notifikácií", blocks: [
          p("Používanie funkcií Radar a Pečiatka, ako aj príjem push oznámení vyžaduje príslušné, kedykoľvek odvolateľné oprávnenia v nastaveniach vášho zariadenia. Podrobnosti o spracúvaní údajov o polohe a push notifikáciách nájdete v zásadách ochrany osobných údajov na www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Dostupnosť a zmeny", blocks: [
          p("TapRadar sa usiluje zabezpečiť vysokú dostupnosť aplikácie, nemôže však zaručiť neprerušovanú dostupnosť. Údržbové práce, technické poruchy alebo ďalší rozvoj môžu viesť k dočasným obmedzeniam. O podstatných, pre vás nevýhodných zmenách základných funkcií vás budeme s primeraným predstihom informovať v aplikácii."),
        ],
      },
      {
        heading: "§ 10 Výpoveď a zrušenie účtu", blocks: [
          p("Svoj používateľský účet môžete kedykoľvek, bezplatne a bez udania dôvodu nechať zrušiť prostredníctvom nastavení aplikácie alebo e-mailom na support@tapradar.app; zmluva sa končí nadobudnutím účinnosti zrušenia. TapRadar môže zmluvu vypovedať z dôležitého dôvodu, najmä pri závažnom porušení § 6, s primeraným predchádzajúcim oznámením."),
        ],
      },
      {
        heading: "§ 11 Zodpovednosť", blocks: [
          p("(1) TapRadar zodpovedá bez obmedzenia za škody vzniknuté porušením života, tela alebo zdravia, ako aj za škody spôsobené úmyselne alebo hrubou nedbanlivosťou, a podľa kogentných ustanovení zákona o zodpovednosti za výrobok."),
          p("(2) Za škody spôsobené ľahkou nedbanlivosťou zodpovedá TapRadar len pri porušení podstatných zmluvných povinností, ktorých splnenie vôbec umožňuje riadne používanie aplikácie; v takom prípade je zodpovednosť obmedzená na škodu typicky predvídateľnú pre tento typ zmluvy. Kogentné ustanovenia rakúskeho zákona o ochrane spotrebiteľa týmto obmedzením nie sú dotknuté."),
          p("(3) TapRadar nezodpovedá za obsahy, ponuky, odmeny alebo konanie partnerských podnikov, ani za správnosť recenzií ostatných používateľov alebo kariet tretích strán, ktoré ste sami uložili v oblasti Karty."),
        ],
      },
      {
        heading: "§ 12 Právo na odstúpenie", blocks: [
          p("Aj keď je aplikácia bezplatná, ako spotrebiteľovi vám môže za určitých podmienok prináležať zákonné právo na odstúpenie od zmluvy o registrácii uzatvorenej na diaľku. Podrobnosti nájdete v samostatne poskytnutej informácii o odstúpení pre spotrebiteľov na www.tapradar.app/widerrufsbelehrung. Keďže svoj účet môžete aj tak kedykoľvek bezplatne a bez udania dôvodu zrušiť podľa § 10, uplatnenie práva na odstúpenie pre vás spravidla nemá žiadny dodatočný praktický účinok, existuje však právne nezávisle od toho."),
        ],
      },
      {
        heading: "§ 13 Riešenie sporov", blocks: [
          p("Európska komisia poskytuje platformu na riešenie sporov online (platforma ODR), dostupnú na https://ec.europa.eu/consumers/odr. TapRadar nie je povinný ani ochotný zúčastniť sa konania o riešení sporov pred spotrebiteľským zmierovacím orgánom, pokiaľ zákon neustanovuje inak."),
        ],
      },
      {
        heading: "§ 14 Zmena týchto podmienok pre spotrebiteľov", blocks: [
          p("TapRadar je oprávnený tieto podmienky pre spotrebiteľov meniť s účinnosťou do budúcnosti, pokiaľ je to potrebné na prispôsobenie sa zmenenej právnej situácii, technickému rozvoju alebo zmeneným funkciám aplikácie, a pokiaľ tým nie ste neprimerane znevýhodnení. O podstatných zmenách budete informovaní najmenej 30 dní pred ich účinnosťou, v aplikácii alebo e-mailom; ak proti nim nevznesiete námietku do ich účinnosti, zmenené podmienky sa považujú za prijaté, na čo vás osobitne upozorníme v oznámení. Zmene môžete kedykoľvek namietať zrušením svojho účtu podľa § 10, bez toho, aby vám tým vznikli akékoľvek náklady."),
        ],
      },
      {
        heading: "§ 15 Záverečné ustanovenia", blocks: [
          p("(1) Platí rakúske právo s vylúčením Dohovoru OSN o zmluvách o medzinárodnej kúpe tovaru (CISG). Ak máte obvyklý pobyt v inom členskom štáte EÚ, zostáva nedotknutá ochrana, ktorú vám poskytujú kogentné ustanovenia na ochranu spotrebiteľa daného štátu."),
          p("(2) Kogentné ustanovenia o právomoci súdov v prospech spotrebiteľov, najmä podľa nariadenia (EÚ) č. 1215/2012 (nariadenie Brusel Ia), zostávajú týmto ustanovením nedotknuté; môžete si najmä uplatniť nároky voči TapRadar na súde príslušnom podľa vášho bydliska, pokiaľ to zákon kogentne ustanovuje."),
          p("(3) Ak by jednotlivé ustanovenia týchto podmienok pre spotrebiteľov boli alebo sa stali neplatnými, zostáva tým platnosť ostatných ustanovení nedotknutá."),
        ],
      },
    ],
    sourcesHeading: "Zoznam zdrojov",
    sourcesIntro: "Úradné zdroje EÚ a Rakúska, z ktorých tieto podmienky pre spotrebiteľov vychádzajú:",
    sources: [
      { label: "Smernica o právach spotrebiteľov, smernica 2011/83/EÚ", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Smernica o digitálnom obsahu, smernica (EÚ) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Rakúsky zákon o zmluvách uzatváraných na diaľku a mimo prevádzkových priestorov (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Akt o digitálnych službách, nariadenie (EÚ) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  "sr-Latn": {
    title: "Uslovi za potrošače",
    subtitle: "Opšti uslovi poslovanja za aplikaciju TapRadar (krajnji korisnici) – TOY GmbH",
    stand: "Ažurirano: 9. avgust 2026 · Verzija 2026-08-09.2",
    intro: [
      p("Ovi opšti uslovi poslovanja („Uslovi za potrošače“) regulišu ugovorni odnos između TOY GmbH i fizičkih lica koja koriste besplatnu aplikaciju TapRadar kao krajnji korisnici. Za preduzeća koja se pretplate na plaćeni paket za poslovne korisnike važe posebno objavljeni Uslovi za poslovne korisnike."),
    ],
    sections: [
      {
        heading: "§ 1 Obim primene i ugovorne strane", blocks: [
          p("(1) Ovi Uslovi za potrošače primenjuju se na registraciju i korišćenje aplikacije TapRadar od strane fizičkih lica koja aplikaciju koriste u privatne, pretežno neprivredne ili nesamostalne profesionalne svrhe (potrošači u smislu § 1 stav 1 tačka 2 austrijskog Zakona o zaštiti potrošača, KSchG)."),
          p("(2) Ugovorna strana je TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austrija, PIB ATU78882167, e-pošta support@tapradar.app (u daljem tekstu „TapRadar“, „mi“)."),
          p("(3) Korišćenje aplikacije zahteva minimalnu starost od 14 godina. Lica između 14 i 18 godina registracijom potvrđuju da postupaju u okviru svoje poslovne sposobnosti, odnosno da poseduju potrebnu saglasnost svog zakonskog zastupnika."),
          p("(4) Odbijamo suprotne ili od ovih uslova odstupajuće uslove; oni ne postaju deo ugovora, osim ako TapRadar izričito pismeno ne prihvati njihovu važnost."),
        ],
      },
      {
        heading: "§ 2 Opis usluga – četiri funkcionalna dela", blocks: [
          p("TapRadar vam putem aplikacije pruža četiri centralna, besplatno dostupna funkcionalna dela:"),
          p("2.1 Radar – Otkrijte: pronalaženje lokalnih partnerskih preduzeća TapRadar na mapi, sa mogućnostima filtriranja prema akciji, kuponu, nagradi, najboljoj oceni i radijusu od 500 metara, kao i kategorijama poput kafića, restorana, frizerskog salona ili pijace. Za svako partnersko preduzeće prikazuju se radno vreme, recenzije i odgovarajuća oznaka paketa."),
          p("2.2 Pečat – Sakupljajte: sakupljanje digitalnih pečata dodirom NFC tačke ili skeniranjem QR koda, prikaz napretka (npr. 7 od 10 pečata), iskorišćavanje nagrada poput besplatne kafe ili popusta, kao i dobijanje poena za svaki sakupljeni pečat."),
          p("2.3 Kartice – digitalni novčanik: čuvanje već postojećih korisničkih kartica trećih strana, na primer Billa, DM, H&M, Spar ili Hofer, čuvanjem barkoda ili QR koda, kako bi se pokazale direktno na kasi umesto plastičnih kartica. Navedeni brendovi su primeri; TapRadar nije povezan sa tim kompanijama."),
          p("2.4 Home – profil i gamifikacija: sistem od 20 nivoa od „Početnika“ do „Šampiona“, poeni za pečate, recenzije i pozive prijatelja, nedeljni cilj, sistem serija (sedam uzastopnih aktivnih dana pokreće bonus), kao i mogućnost pozivanja prijatelja i upoređivanja napretka na rang-listi."),
          p("Trenutni obim funkcija proizilazi iz same aplikacije; TapRadar je ovlašćen da u okviru daljeg razvoja prilagođava, dopunjuje ili ukida pojedine funkcije, ukoliko time nije nesrazmerno pogođena osnovna korist aplikacije za vas."),
          p("TapRadar sam ne pruža nikakvu robu ili usluge partnerskih preduzeća, posebno ne oglašene proizvode, popuste ili nagrade, i nije učesnik u pravnim poslovima koji nastaju između vas i partnerskog preduzeća. Za stvarno iskorišćavanje nagrada odgovorno je isključivo relevantno partnersko preduzeće."),
        ],
      },
      {
        heading: "§ 3 Registracija i zaključenje ugovora", blocks: [
          p("(1) Korišćenje TapRadar-a zahteva registraciju korisničkog naloga sa e-adresom i lozinkom. Potvrdom vaše e-adrese, odnosno prvim korišćenjem, između vas i TapRadar-a nastaje besplatan ugovor o korišćenju koji podleže ovim Uslovima za potrošače."),
          p("(2) Dužni ste da prilikom registracije navedete istinite podatke i da svoje pristupne podatke zaštitite od pristupa trećih lica."),
        ],
      },
      {
        heading: "§ 4 Bez novčane cene – pružanje digitalnih usluga u zamenu za podatke", blocks: [
          callout("Napomena u skladu sa Direktivom o digitalnom sadržaju (Direktiva (EU) 2019/770)", "Iako ne plaćate naknadu za korišćenje aplikacije TapRadar, zauzvrat nam pružate lične podatke, posebno podatke o lokaciji, korišćenju i kontaktu. Ugovori o digitalnim uslugama kod kojih potrošač umesto plaćanja pruža lične podatke potpadaju pod obim primene Direktive o digitalnom sadržaju i austrijskog Zakona o garancijama za potrošače (VGG). Stoga vam u načelu pripadaju tamo predviđena prava na pružanje digitalne usluge u skladu sa ugovorom, ukoliko ta prava nisu objektivno ograničena besplatnim karakterom aplikacije."),
          p("TapRadar nastoji da pruža aplikaciju u skladu sa karakteristikama opisanim u § 2, uobičajenim standardom sličnih aplikacija i uzimajući u obzir javne izjave, kao i da je ažurira u ugovorom predviđenom obimu."),
        ],
      },
      {
        heading: "§ 5 Prava korišćenja", blocks: [
          p("TapRadar vam ustupa jednostavno, neprenosivo, lično pravo da koristite aplikaciju za privatnu upotrebu u skladu sa ovim Uslovima za potrošače. Podlicenciranje, dalja prodaja ili komercijalno korišćenje vašeg korisničkog naloga nisu dozvoljeni."),
        ],
      },
      {
        heading: "§ 6 Vaše obaveze prilikom korišćenja", blocks: [
          p("(1) Obavezujete se da ne koristite platformu na zloupotrebljavajući način. Manipulacija pečatima, nagradama, podacima o lokaciji ili drugim tehničkim zaštitnim merama, na primer putem lažnog GPS-a, višestrukih registracija radi zaobilaženja ograničenja ili manipulacije NFC ili QR postupaka, zabranjena je. TapRadar je ovlašćen da, u slučaju opravdane sumnje na takvu manipulaciju, blokira ili obriše pogođene pečate, nagrade ili naloge."),
          p("(2) Recenzije moraju biti istinite i zasnovane na stvarnoj, verifikovanoj poseti; nezakonite, uvredljive ili očigledno neistinite recenzije TapRadar može ukloniti. Prijave nezakonitog sadržaja mogu se u bilo kom trenutku podneti putem funkcije prijave u aplikaciji ili e-poštom na support@tapradar.app; svaku prijavu proveravamo i saopštavamo vam rezultat."),
          p("(3) Za korisničke kartice trećih strana sačuvane u delu Kartice, isključivo ste vi odgovorni za tačnost unetih podataka i njihovo prihvatanje na relevantnoj kasi; TapRadar u tom pogledu ne pruža nikakvu garanciju, budući da se radi o podacima trećih strana koje ste sami uneli, a koje TapRadar ne proverava."),
        ],
      },
      {
        heading: "§ 7 Gamifikacija, nivoi, poeni i nagrade", blocks: [
          p("(1) Nivoi, poeni, serije i pozicije na rang-listi u delu Home nemaju novčanu vrednost, nisu prenosivi i ne mogu se zameniti za novac. Služe isključivo za igrivi prikaz vašeg korišćenja."),
          p("(2) Nagrade iskorišćene putem kartica lojalnosti, na primer besplatan proizvod ili popust, dodeljuje isključivo relevantno partnersko preduzeće; ne postoji nikakav zahtev prema TapRadar-u za pružanje, zamenu ili nadoknadu vrednosti neiskorišćene ili više nedostupne nagrade."),
          p("(3) Prilikom brisanja vašeg naloga, svi sakupljeni pečati, poeni, nivoi, serije i još neiskorišćene nagrade propadaju bez naknade, ukoliko u tom trenutku već nije započet postupak iskorišćavanja."),
        ],
      },
      {
        heading: "§ 8 Dozvole za lokaciju i push obaveštenja", blocks: [
          p("Korišćenje funkcija Radar i Pečat, kao i prijem push obaveštenja, zahteva odgovarajuće dozvole, koje se u svakom trenutku mogu opozvati, u podešavanjima vašeg uređaja. Detalje o obradi podataka o lokaciji i push podataka potražite u politici privatnosti na www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Dostupnost i izmene", blocks: [
          p("TapRadar nastoji da obezbedi visoku dostupnost aplikacije, ali ne može garantovati neprekidnu dostupnost. Radovi na održavanju, tehnički kvarovi ili dalji razvoj mogu dovesti do privremenih ograničenja. Bitne, za vas nepovoljne izmene osnovnih funkcija biće blagovremeno unapred najavljene u aplikaciji."),
        ],
      },
      {
        heading: "§ 10 Otkaz i brisanje naloga", blocks: [
          p("Svoj korisnički nalog možete u bilo kom trenutku, besplatno i bez navođenja razloga, obrisati putem podešavanja aplikacije ili e-poštom na support@tapradar.app; ugovor se okončava stupanjem na snagu brisanja. TapRadar može otkazati ugovor iz važnog razloga, posebno u slučaju znatnih kršenja § 6, uz razumno prethodno obaveštenje."),
        ],
      },
      {
        heading: "§ 11 Odgovornost", blocks: [
          p("(1) TapRadar odgovara neograničeno za štete nastale povredom života, tela ili zdravlja, kao i za štete nastale namerom ili grubom nepažnjom, i prema kogentnim odredbama Zakona o odgovornosti za proizvod."),
          p("(2) Za štete nastale lakom nepažnjom, TapRadar odgovara samo u slučaju povrede bitnih ugovornih obaveza čije ispunjenje uopšte omogućava uredno korišćenje aplikacije; u tom slučaju odgovornost je ograničena na štetu koja je tipično predvidiva za ovu vrstu ugovora. Kogentne odredbe austrijskog Zakona o zaštiti potrošača ostaju ovim ograničenjem nedirnute."),
          p("(3) TapRadar ne odgovara za sadržaje, ponude, nagrade ili radnje partnerskih preduzeća, niti za tačnost recenzija drugih korisnika ili kartica trećih strana koje ste sami sačuvali u delu Kartice."),
        ],
      },
      {
        heading: "§ 12 Pravo na odustanak", blocks: [
          p("Iako je aplikacija besplatna, kao potrošaču vam pod određenim uslovima može pripadati zakonsko pravo na odustanak u vezi sa ugovorom o registraciji zaključenim na daljinu. Detalje potražite u posebno dostupnom Obaveštenju o pravu na odustanak za potrošače na www.tapradar.app/widerrufsbelehrung. Budući da svoj nalog i inače možete u bilo kom trenutku besplatno i bez navođenja razloga obrisati prema § 10, ostvarivanje prava na odustanak za vas po pravilu nema dodatno praktično dejstvo, ali pravno i dalje postoji nezavisno od toga."),
        ],
      },
      {
        heading: "§ 13 Rešavanje sporova", blocks: [
          p("Evropska komisija obezbeđuje platformu za onlajn rešavanje sporova (ODR platforma), dostupnu na https://ec.europa.eu/consumers/odr. TapRadar nije obavezan niti spreman da učestvuje u postupku rešavanja sporova pred telom za vansudsko rešavanje potrošačkih sporova, osim ako zakon ne propisuje drugačije."),
        ],
      },
      {
        heading: "§ 14 Izmena ovih Uslova za potrošače", blocks: [
          p("TapRadar je ovlašćen da menja ove Uslove za potrošače sa dejstvom ubuduće, ukoliko je to potrebno radi prilagođavanja izmenjenoj pravnoj situaciji, tehničkom razvoju ili izmenjenim funkcijama aplikacije, i ukoliko time niste nesrazmerno oštećeni. O bitnim izmenama bićete obavešteni najmanje 30 dana pre stupanja na snagu, u aplikaciji ili e-poštom; ako se ne usprotivite do stupanja na snagu, izmenjeni uslovi se smatraju prihvaćenim, na šta ćemo vas posebno upozoriti u obaveštenju. Izmeni se u bilo kom trenutku možete usprotiviti brisanjem svog naloga prema § 10, bez ikakvih troškova za vas."),
        ],
      },
      {
        heading: "§ 15 Završne odredbe", blocks: [
          p("(1) Primenjuje se austrijsko pravo uz isključenje Konvencije UN o ugovorima o međunarodnoj prodaji robe (CISG). Ukoliko imate uobičajeno boravište u drugoj državi članici EU, zaštita koju vam pružaju kogentne odredbe o zaštiti potrošača te države ostaje nedirnuta."),
          p("(2) Kogentne odredbe o nadležnosti u korist potrošača, posebno prema Uredbi (EU) br. 1215/2012 (Brisel Ia uredba), ostaju ovom odredbom nedirnute; posebno možete pokrenuti postupak protiv TapRadar-a pred sudom po mestu vašeg prebivališta, ukoliko je to kogentno predviđeno."),
          p("(3) Ukoliko pojedine odredbe ovih Uslova za potrošače budu ili postanu nevažeće, to ne utiče na važnost ostalih odredbi."),
        ],
      },
    ],
    sourcesHeading: "Spisak izvora",
    sourcesIntro: "Zvanični izvori EU i Austrije na kojima se zasnivaju ovi Uslovi za potrošače:",
    sources: [
      { label: "Direktiva o pravima potrošača, Direktiva 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Direktiva o digitalnom sadržaju, Direktiva (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Austrijski zakon o ugovorima na daljinu i van poslovnih prostorija (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Akt o digitalnim uslugama, Uredba (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  bs: {
    title: "Uslovi za potrošače",
    subtitle: "Opći uslovi poslovanja za aplikaciju TapRadar (krajnji korisnici) – TOY GmbH",
    stand: "Ažurirano: 9. august 2026 · Verzija 2026-08-09.2",
    intro: [
      p("Ovi opći uslovi poslovanja („Uslovi za potrošače“) regulišu ugovorni odnos između TOY GmbH i fizičkih lica koja koriste besplatnu aplikaciju TapRadar kao krajnji korisnici. Za preduzeća koja se pretplate na plaćeni paket za poslovne korisnike važe posebno objavljeni Uslovi za poslovne korisnike."),
    ],
    sections: [
      {
        heading: "§ 1 Obim primjene i ugovorne strane", blocks: [
          p("(1) Ovi Uslovi za potrošače primjenjuju se na registraciju i korištenje aplikacije TapRadar od strane fizičkih lica koja aplikaciju koriste u privatne, pretežno negospodarske ili nesamostalne profesionalne svrhe (potrošači u smislu § 1 stav 1 tačka 2 austrijskog Zakona o zaštiti potrošača, KSchG)."),
          p("(2) Ugovorna strana je TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austrija, PDV broj ATU78882167, e-pošta support@tapradar.app (u daljem tekstu „TapRadar“, „mi“)."),
          p("(3) Korištenje aplikacije zahtijeva minimalnu dob od 14 godina. Osobe između 14 i 18 godina registracijom potvrđuju da postupaju u okviru svoje poslovne sposobnosti, odnosno da posjeduju potrebnu saglasnost svog zakonskog zastupnika."),
          p("(4) Odbijamo suprotne ili od ovih uslova odstupajuće uslove; oni ne postaju dio ugovora, osim ako TapRadar izričito pismeno ne prihvati njihovu valjanost."),
        ],
      },
      {
        heading: "§ 2 Opis usluga – četiri funkcionalna dijela", blocks: [
          p("TapRadar vam putem aplikacije pruža četiri centralna, besplatno dostupna funkcionalna dijela:"),
          p("2.1 Radar – Otkrijte: pronalaženje lokalnih partnerskih firmi TapRadar na mapi, sa mogućnostima filtriranja prema akciji, kuponu, nagradi, najboljoj ocjeni i radijusu od 500 metara, kao i kategorijama poput kafića, restorana, frizerskog salona ili pijace. Za svaku partnersku firmu prikazuju se radno vrijeme, recenzije i odgovarajuća oznaka paketa."),
          p("2.2 Pečat – Sakupljajte: sakupljanje digitalnih pečata dodirom NFC tačke ili skeniranjem QR koda, prikaz napretka (npr. 7 od 10 pečata), iskorištavanje nagrada poput besplatne kafe ili popusta, kao i dobijanje bodova za svaki sakupljeni pečat."),
          p("2.3 Kartice – digitalni novčanik: čuvanje već postojećih korisničkih kartica trećih strana, na primjer Billa, DM, H&M, Spar ili Hofer, čuvanjem barkoda ili QR koda, kako bi se pokazale direktno na kasi umjesto plastičnih kartica. Navedeni brendovi su primjeri; TapRadar nije povezan sa tim kompanijama."),
          p("2.4 Home – profil i gamifikacija: sistem od 20 nivoa od „Početnika“ do „Šampiona“, bodovi za pečate, recenzije i pozive prijatelja, sedmični cilj, sistem serija (sedam uzastopnih aktivnih dana pokreće bonus), kao i mogućnost pozivanja prijatelja i upoređivanja napretka na rang-listi."),
          p("Trenutni obim funkcija proizilazi iz same aplikacije; TapRadar je ovlašten da u okviru daljeg razvoja prilagođava, dopunjuje ili ukida pojedine funkcije, ukoliko time nije nesrazmjerno pogođena osnovna korist aplikacije za vas."),
          p("TapRadar sam ne pruža nikakvu robu ili usluge partnerskih firmi, posebno ne oglašene proizvode, popuste ili nagrade, i nije učesnik u pravnim poslovima koji nastaju između vas i partnerske firme. Za stvarno iskorištavanje nagrada odgovorna je isključivo relevantna partnerska firma."),
        ],
      },
      {
        heading: "§ 3 Registracija i zaključenje ugovora", blocks: [
          p("(1) Korištenje TapRadar-a zahtijeva registraciju korisničkog naloga sa e-adresom i lozinkom. Potvrdom vaše e-adrese, odnosno prvim korištenjem, između vas i TapRadar-a nastaje besplatan ugovor o korištenju koji podliježe ovim Uslovima za potrošače."),
          p("(2) Dužni ste da prilikom registracije navedete istinite podatke i da svoje pristupne podatke zaštitite od pristupa trećih lica."),
        ],
      },
      {
        heading: "§ 4 Bez novčane cijene – pružanje digitalnih usluga u zamjenu za podatke", blocks: [
          callout("Napomena u skladu sa Direktivom o digitalnom sadržaju (Direktiva (EU) 2019/770)", "Iako ne plaćate naknadu za korištenje aplikacije TapRadar, zauzvrat nam pružate lične podatke, posebno podatke o lokaciji, korištenju i kontaktu. Ugovori o digitalnim uslugama kod kojih potrošač umjesto plaćanja pruža lične podatke potpadaju pod obim primjene Direktive o digitalnom sadržaju i austrijskog Zakona o garancijama za potrošače (VGG). Stoga vam u načelu pripadaju tamo predviđena prava na pružanje digitalne usluge u skladu sa ugovorom, ukoliko ta prava nisu objektivno ograničena besplatnim karakterom aplikacije."),
          p("TapRadar nastoji pružati aplikaciju u skladu sa karakteristikama opisanim u § 2, uobičajenim standardom sličnih aplikacija i uzimajući u obzir javne izjave, kao i da je ažurira u ugovorom predviđenom obimu."),
        ],
      },
      {
        heading: "§ 5 Prava korištenja", blocks: [
          p("TapRadar vam ustupa jednostavno, neprenosivo, lično pravo da koristite aplikaciju za privatnu upotrebu u skladu sa ovim Uslovima za potrošače. Podlicenciranje, daljnja prodaja ili komercijalno korištenje vašeg korisničkog naloga nisu dozvoljeni."),
        ],
      },
      {
        heading: "§ 6 Vaše obaveze prilikom korištenja", blocks: [
          p("(1) Obavezujete se da ne koristite platformu na zloupotrebljavajući način. Manipulacija pečatima, nagradama, podacima o lokaciji ili drugim tehničkim zaštitnim mjerama, na primjer putem lažnog GPS-a, višestrukih registracija radi zaobilaženja ograničenja ili manipulacije NFC ili QR postupaka, zabranjena je. TapRadar je ovlašten da, u slučaju opravdane sumnje na takvu manipulaciju, blokira ili obriše pogođene pečate, nagrade ili naloge."),
          p("(2) Recenzije moraju biti istinite i zasnovane na stvarnoj, verifikovanoj posjeti; nezakonite, uvredljive ili očigledno neistinite recenzije TapRadar može ukloniti. Prijave nezakonitog sadržaja mogu se u bilo kojem trenutku podnijeti putem funkcije prijave u aplikaciji ili e-poštom na support@tapradar.app; svaku prijavu provjeravamo i saopćavamo vam rezultat."),
          p("(3) Za korisničke kartice trećih strana sačuvane u dijelu Kartice, isključivo ste vi odgovorni za tačnost unesenih podataka i njihovo prihvatanje na relevantnoj kasi; TapRadar u tom pogledu ne pruža nikakvu garanciju, budući da se radi o podacima trećih strana koje ste sami unijeli, a koje TapRadar ne provjerava."),
        ],
      },
      {
        heading: "§ 7 Gamifikacija, nivoi, bodovi i nagrade", blocks: [
          p("(1) Nivoi, bodovi, serije i pozicije na rang-listi u dijelu Home nemaju novčanu vrijednost, nisu prenosivi i ne mogu se zamijeniti za novac. Služe isključivo za igrivi prikaz vašeg korištenja."),
          p("(2) Nagrade iskorištene putem kartica lojalnosti, na primjer besplatan proizvod ili popust, dodjeljuje isključivo relevantna partnerska firma; ne postoji nikakav zahtjev prema TapRadar-u za pružanje, zamjenu ili nadoknadu vrijednosti neiskorištene ili više nedostupne nagrade."),
          p("(3) Prilikom brisanja vašeg naloga, svi sakupljeni pečati, bodovi, nivoi, serije i još neiskorištene nagrade propadaju bez naknade, ukoliko u tom trenutku već nije započet postupak iskorištavanja."),
        ],
      },
      {
        heading: "§ 8 Dozvole za lokaciju i push obavještenja", blocks: [
          p("Korištenje funkcija Radar i Pečat, kao i prijem push obavještenja, zahtijeva odgovarajuće dozvole, koje se u svakom trenutku mogu opozvati, u podešavanjima vašeg uređaja. Detalje o obradi podataka o lokaciji i push podataka potražite u politici privatnosti na www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Dostupnost i izmjene", blocks: [
          p("TapRadar nastoji osigurati visoku dostupnost aplikacije, ali ne može garantovati neprekidnu dostupnost. Radovi na održavanju, tehnički kvarovi ili dalji razvoj mogu dovesti do privremenih ograničenja. Bitne, za vas nepovoljne izmjene osnovnih funkcija bit će blagovremeno unaprijed najavljene u aplikaciji."),
        ],
      },
      {
        heading: "§ 10 Otkaz i brisanje naloga", blocks: [
          p("Svoj korisnički nalog možete u bilo kojem trenutku, besplatno i bez navođenja razloga, dati obrisati putem podešavanja aplikacije ili e-poštom na support@tapradar.app; ugovor se okončava stupanjem na snagu brisanja. TapRadar može otkazati ugovor iz važnog razloga, posebno u slučaju znatnih kršenja § 6, uz razumno prethodno obavještenje."),
        ],
      },
      {
        heading: "§ 11 Odgovornost", blocks: [
          p("(1) TapRadar odgovara neograničeno za štete nastale povredom života, tijela ili zdravlja, kao i za štete nastale namjerom ili grubom nepažnjom, i prema kogentnim odredbama Zakona o odgovornosti za proizvod."),
          p("(2) Za štete nastale lakom nepažnjom, TapRadar odgovara samo u slučaju povrede bitnih ugovornih obaveza čije ispunjenje uopće omogućava uredno korištenje aplikacije; u tom slučaju odgovornost je ograničena na štetu koja je tipično predvidiva za ovu vrstu ugovora. Kogentne odredbe austrijskog Zakona o zaštiti potrošača ostaju ovim ograničenjem netaknute."),
          p("(3) TapRadar ne odgovara za sadržaje, ponude, nagrade ili radnje partnerskih firmi, niti za tačnost recenzija drugih korisnika ili kartica trećih strana koje ste sami sačuvali u dijelu Kartice."),
        ],
      },
      {
        heading: "§ 12 Pravo na odustanak", blocks: [
          p("Iako je aplikacija besplatna, kao potrošaču vam pod određenim uslovima može pripadati zakonsko pravo na odustanak u vezi sa ugovorom o registraciji zaključenim na daljinu. Detalje potražite u posebno dostupnom Obavještenju o pravu na odustanak za potrošače na www.tapradar.app/widerrufsbelehrung. Budući da svoj nalog i inače možete u bilo kojem trenutku besplatno i bez navođenja razloga obrisati prema § 10, ostvarivanje prava na odustanak za vas po pravilu nema dodatno praktično dejstvo, ali pravno i dalje postoji nezavisno od toga."),
        ],
      },
      {
        heading: "§ 13 Rješavanje sporova", blocks: [
          p("Evropska komisija osigurava platformu za online rješavanje sporova (ODR platforma), dostupnu na https://ec.europa.eu/consumers/odr. TapRadar nije obavezan niti spreman učestvovati u postupku rješavanja sporova pred tijelom za vansudsko rješavanje potrošačkih sporova, osim ako zakon ne propisuje drugačije."),
        ],
      },
      {
        heading: "§ 14 Izmjena ovih Uslova za potrošače", blocks: [
          p("TapRadar je ovlašten mijenjati ove Uslove za potrošače sa dejstvom ubuduće, ukoliko je to potrebno radi prilagođavanja izmijenjenoj pravnoj situaciji, tehničkom razvoju ili izmijenjenim funkcijama aplikacije, i ukoliko time niste nesrazmjerno oštećeni. O bitnim izmjenama bit ćete obaviješteni najmanje 30 dana prije stupanja na snagu, u aplikaciji ili e-poštom; ako se ne usprotivite do stupanja na snagu, izmijenjeni uslovi se smatraju prihvaćenim, na šta ćemo vas posebno upozoriti u obavještenju. Izmjeni se u bilo kojem trenutku možete usprotiviti brisanjem svog naloga prema § 10, bez ikakvih troškova za vas."),
        ],
      },
      {
        heading: "§ 15 Završne odredbe", blocks: [
          p("(1) Primjenjuje se austrijsko pravo uz isključenje Konvencije UN o ugovorima o međunarodnoj prodaji robe (CISG). Ukoliko imate uobičajeno boravište u drugoj državi članici EU, zaštita koju vam pružaju kogentne odredbe o zaštiti potrošača te države ostaje netaknuta."),
          p("(2) Kogentne odredbe o nadležnosti u korist potrošača, posebno prema Uredbi (EU) br. 1215/2012 (Brisel Ia uredba), ostaju ovom odredbom netaknute; posebno možete pokrenuti postupak protiv TapRadar-a pred sudom po mjestu vašeg prebivališta, ukoliko je to kogentno predviđeno."),
          p("(3) Ukoliko pojedine odredbe ovih Uslova za potrošače budu ili postanu nevažeće, to ne utiče na valjanost ostalih odredbi."),
        ],
      },
    ],
    sourcesHeading: "Popis izvora",
    sourcesIntro: "Zvanični izvori EU i Austrije na kojima se zasnivaju ovi Uslovi za potrošače:",
    sources: [
      { label: "Direktiva o pravima potrošača, Direktiva 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Direktiva o digitalnom sadržaju, Direktiva (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Austrijski zakon o ugovorima na daljinu i van poslovnih prostorija (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Akt o digitalnim uslugama, Uredba (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  tr: {
    title: "Tüketici Sözleşme Şartları",
    subtitle: "TapRadar Uygulaması için Genel Şartlar (Son Kullanıcılar) – TOY GmbH",
    stand: "Güncelleme: 9 Ağustos 2026 · Sürüm 2026-08-09.2",
    intro: [
      p("Bu Genel Şartlar (\"Tüketici Sözleşme Şartları\"), TOY GmbH ile ücretsiz TapRadar uygulamasını son kullanıcı olarak kullanan gerçek kişiler arasındaki sözleşme ilişkisini düzenler. Ücretli bir işletme müşterisi planına abone olan işletmeler için ayrıca yayımlanan İşletme Müşterisi Sözleşme Şartları geçerlidir."),
    ],
    sections: [
      {
        heading: "§ 1 Kapsam ve sözleşme tarafları", blocks: [
          p("(1) Bu Tüketici Sözleşme Şartları, uygulamayı ağırlıklı olarak ticari veya bağımsız mesleki amaçlarla değil özel amaçlarla kullanan gerçek kişilerin (KSchG § 1/1/2 anlamında tüketiciler) TapRadar uygulamasına kaydı ve kullanımı için geçerlidir."),
          p("(2) Sözleşme tarafı, TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Avusturya, Vergi No ATU78882167, e-posta support@tapradar.app'tir (bundan sonra \"TapRadar\", \"biz\" olarak anılacaktır)."),
          p("(3) Uygulamanın kullanımı en az 14 yaşında olmayı gerektirir. 14-18 yaş arasındaki kişiler, kayıt olarak, hukuki ehliyetleri çerçevesinde hareket ettiklerini veya yasal temsilcilerinin gerekli onayına sahip olduklarını teyit ederler."),
          p("(4) Bu şartlarla çelişen veya bu şartlardan farklı koşullara itiraz edilir; TapRadar bunların geçerliliğini yazılı olarak açıkça kabul etmedikçe, bu koşullar sözleşmenin bir parçası haline gelmez."),
        ],
      },
      {
        heading: "§ 2 Hizmet tanımı – dört işlev alanı", blocks: [
          p("TapRadar, uygulama üzerinden size ücretsiz olarak kullanılabilen dört temel işlev alanı sunar:"),
          p("2.1 Radar – Keşfet: Aktion, kupon, ödül, en iyi değerlendirilen ve 500 metre yarıçap filtreleme seçenekleri ile kafe, restoran, kuaför veya market gibi kategoriler kullanılarak yerel TapRadar iş ortaklarının bir harita üzerinde bulunması. Her iş ortağı için çalışma saatleri, değerlendirmeler ve ilgili plan rozeti gösterilir."),
          p("2.2 Stempel – Topla: Bir NFC noktasına dokunarak veya bir QR kodu tarayarak dijital damga toplama, ilerlemenin gösterilmesi (örn. 10 üzerinden 7 damga), ücretsiz bir kahve veya indirim gibi ödüllerin kullanılması ve toplanan her damga için puan kazanılması."),
          p("2.3 Kartlar – dijital cüzdan: Örneğin Billa, DM, H&M, Spar veya Hofer gibi üçüncü taraflara ait mevcut müşteri kartlarının, bir barkod veya QR kodu kaydedilerek, plastik kartlar yerine doğrudan kasada gösterilebilmesi için saklanması. Belirtilen markalar örnek niteliğindedir; TapRadar bu şirketlerle bağlantılı değildir."),
          p("2.4 Home – profil ve oyunlaştırma: \"Acemi\"den \"Şampiyon\"a kadar 20 seviyeli bir seviye sistemi, damgalar, değerlendirmeler ve arkadaş davetleri için puanlar, haftalık bir hedef, bir seri (streak) sistemi (yedi ardışık aktif gün bir bonusu tetikler) ile arkadaşları davet edebilme ve ilerlemeyi bir liderlik tablosunda karşılaştırabilme imkânı."),
          p("Güncel özellik kapsamı uygulamanın kendisinden anlaşılır; TapRadar, uygulamanın size sağladığı temel faydayı makul olmayan şekilde etkilememesi kaydıyla, geliştirme çalışmaları kapsamında tek tek özellikleri değiştirme, tamamlama veya sonlandırma hakkına sahiptir."),
          p("TapRadar, iş ortaklarının kendi mal veya hizmetlerini, özellikle reklamı yapılan ürünleri, indirimleri veya ödülleri sunmaz ve sizinle bir iş ortağı arasında kurulan işlemlere taraf değildir. Ödüllerin fiilen kullanılmasından yalnızca ilgili iş ortağı sorumludur."),
        ],
      },
      {
        heading: "§ 3 Kayıt ve sözleşmenin kurulması", blocks: [
          p("(1) TapRadar'ı kullanmak, bir e-posta adresi ve şifre ile bir kullanıcı hesabının kaydını gerektirir. E-posta adresinizin onaylanmasıyla veya ilk kullanımla, sizinle TapRadar arasında bu Tüketici Sözleşme Şartlarına tabi ücretsiz bir kullanım sözleşmesi kurulur."),
          p("(2) Kayıt sırasında doğru bilgi vermekle ve erişim bilgilerinizi üçüncü kişilerin erişimine karşı korumakla yükümlüsünüz."),
        ],
      },
      {
        heading: "§ 4 Parasal bir bedel yok – veri karşılığında dijital hizmet sunumu", blocks: [
          callout("Dijital İçerik Direktifi (AB (2019/770) sayılı Direktif) uyarınca bildirim", "TapRadar uygulamasını kullanmak için bir bedel ödemeseniz de, karşılığında bize özellikle konum, kullanım ve iletişim verileri gibi kişisel veriler sağlarsınız. Tüketicinin ödeme yerine kişisel veri sağladığı dijital hizmet sözleşmeleri, Dijital İçerik Direktifi'nin ve Avusturya Tüketici Garantileri Kanunu'nun (VGG) kapsamına girer. Bu nedenle, uygulamanın ücretsiz niteliğiyle nesnel olarak sınırlandırılmadığı ölçüde, dijital hizmetin sözleşmeye uygun şekilde sunulmasına ilişkin oradaki haklardan yararlanırsınız."),
          p("TapRadar, uygulamayı § 2'de açıklanan özelliklere, benzer uygulamalar için geçerli olan standarda ve kamuoyuna yapılan açıklamalara uygun olarak sunmaya ve sözleşmede öngörülen kapsamda güncellemeye çalışır."),
        ],
      },
      {
        heading: "§ 5 Kullanım hakları", blocks: [
          p("TapRadar, size bu Tüketici Sözleşme Şartlarına uygun olarak uygulamayı özel kullanım için kullanma konusunda basit, devredilemez, kişisel bir hak tanır. Kullanıcı hesabınızın alt lisanslanması, yeniden satılması veya ticari amaçla kullanılması yasaktır."),
        ],
      },
      {
        heading: "§ 6 Kullanım sırasındaki yükümlülükleriniz", blocks: [
          p("(1) Platformu kötüye kullanmayacağınızı taahhüt edersiniz. Sahte GPS kullanımı, sınırlamaları aşmak amacıyla birden fazla kayıt yapılması veya NFC ya da QR süreçlerinin manipüle edilmesi gibi yollarla damgaların, ödüllerin, konum verilerinin veya diğer teknik koruma önlemlerinin manipüle edilmesi yasaktır. TapRadar, bu tür bir manipülasyon konusunda haklı bir şüphe bulunması halinde, ilgili damgaları, ödülleri veya hesapları engelleme veya silme hakkına sahiptir."),
          p("(2) Değerlendirmeler doğru olmalı ve gerçek, doğrulanmış bir ziyarete dayanmalıdır; hukuka aykırı, hakaret içeren veya açıkça asılsız değerlendirmeler TapRadar tarafından kaldırılabilir. Hukuka aykırı içeriklere ilişkin bildirimler her zaman uygulamada sunulan bildirim özelliği üzerinden veya support@tapradar.app adresine e-posta yoluyla yapılabilir; her bildirimi inceler ve sonucu size bildiririz."),
          p("(3) Kartlar alanında saklanan üçüncü taraf müşteri kartları için, girilen verilerin doğruluğundan ve ilgili kasada kabul edilmesinden yalnızca siz sorumlusunuz; bunlar sizin tarafınızdan girilen ve TapRadar tarafından doğrulanmayan üçüncü taraf verileri olduğundan, TapRadar bu konuda herhangi bir garanti vermez."),
        ],
      },
      {
        heading: "§ 7 Oyunlaştırma, seviye, puan ve ödüller", blocks: [
          p("(1) Home alanındaki seviyeler, puanlar, seriler ve liderlik tablosu sıralamaları herhangi bir parasal değere sahip değildir, ticareti yapılamaz ve para karşılığında kullanılamaz. Bunlar yalnızca kullanımınızın oyunlaştırılmış şekilde gösterilmesine hizmet eder."),
          p("(2) Sadakat kartları üzerinden kullanılan, örneğin ücretsiz bir ürün veya indirim gibi ödüller, yalnızca ilgili iş ortağı tarafından sağlanır; kullanılmamış veya artık mevcut olmayan bir ödülün sağlanması, değiştirilmesi veya bedelinin ödenmesi konusunda TapRadar'a karşı herhangi bir talep hakkı bulunmamaktadır."),
          p("(3) Hesabınızın silinmesi halinde, o ana kadar bir kullanım işlemi başlamamış olması kaydıyla, toplanan tüm damgalar, puanlar, seviyeler, seriler ve henüz kullanılmamış ödüller herhangi bir bedel ödenmeksizin geçersiz hale gelir."),
        ],
      },
      {
        heading: "§ 8 Konum ve push izinleri", blocks: [
          p("Radar ve Stempel özelliklerinin kullanılması ile push bildirimlerinin alınması, cihaz ayarlarınızda ilgili, her zaman geri alınabilir izinlerin verilmesini gerektirir. Konum ve push verilerinin işlenmesine ilişkin ayrıntılar için www.tapradar.app/datenschutz adresindeki gizlilik politikasına bakınız."),
        ],
      },
      {
        heading: "§ 9 Kullanılabilirlik ve değişiklikler", blocks: [
          p("TapRadar, uygulamanın yüksek düzeyde kullanılabilirliğini sağlamaya çalışır, ancak kesintisiz kullanılabilirlik garanti edemez. Bakım çalışmaları, teknik arızalar veya geliştirme çalışmaları geçici kısıtlamalara yol açabilir. Temel özelliklerde sizin aleyhinize olan önemli değişiklikler, uygulama içinde makul bir süre önceden duyurulur."),
        ],
      },
      {
        heading: "§ 10 Fesih ve hesap silme", blocks: [
          p("Kullanıcı hesabınızı istediğiniz zaman, ücretsiz ve gerekçe göstermeksizin, uygulama ayarları üzerinden veya support@tapradar.app adresine e-posta göndererek sildirebilirsiniz; sözleşme, silme işleminin geçerli hale gelmesiyle sona erer. TapRadar, özellikle § 6'nın önemli ölçüde ihlali durumunda, haklı bir nedenle ve makul bir süre önceden bildirimde bulunarak sözleşmeyi feshedebilir."),
        ],
      },
      {
        heading: "§ 11 Sorumluluk", blocks: [
          p("(1) TapRadar; yaşam, beden veya sağlığın ihlalinden kaynaklanan zararlardan, kast veya ağır ihmale dayanan zararlardan ve Ürün Sorumluluğu Kanunu'nun emredici hükümlerinden doğan zararlardan sınırsız olarak sorumludur."),
          p("(2) Hafif ihmalden kaynaklanan zararlar için TapRadar, yalnızca uygulamanın usulüne uygun kullanımını mümkün kılan esaslı sözleşme yükümlülüklerinin ihlali halinde sorumludur; bu durumda sorumluluk, sözleşme türü için tipik olarak öngörülebilir zararla sınırlıdır. Avusturya Tüketici Koruma Kanunu'nun emredici hükümleri bu sınırlamadan etkilenmez."),
          p("(3) TapRadar, iş ortaklarının içerikleri, teklifleri, ödülleri veya eylemlerinden ve diğer kullanıcıların değerlendirmelerinin doğruluğundan veya Kartlar alanında sizin tarafınızdan saklanan üçüncü taraf kartlarından sorumlu değildir."),
        ],
      },
      {
        heading: "§ 12 Cayma hakkı", blocks: [
          p("Uygulama ücretsiz olsa da, tüketici olarak, belirli koşullar altında mesafeli olarak kurulan kayıt sözleşmesi bakımından yasal bir cayma hakkına sahip olabilirsiniz. Ayrıntılar için www.tapradar.app/widerrufsbelehrung adresinde ayrıca sunulan Tüketici Cayma Bildirimi'ne bakınız. Hesabınızı zaten § 10 uyarınca istediğiniz zaman ücretsiz ve gerekçe göstermeksizin silebildiğinizden, cayma hakkının kullanılmasının sizin için genellikle ek bir pratik etkisi yoktur; ancak bu hak, bundan bağımsız olarak hukuken devam eder."),
        ],
      },
      {
        heading: "§ 13 Uyuşmazlık çözümü", blocks: [
          p("Avrupa Komisyonu, https://ec.europa.eu/consumers/odr adresinde erişilebilen bir çevrimiçi uyuşmazlık çözümü (ODR) platformu sunmaktadır. Yasal olarak aksi öngörülmedikçe, TapRadar bir tüketici uyuşmazlık çözüm kurulu önünde bir uyuşmazlık çözüm sürecine katılma yükümlülüğünde değildir ve buna istekli de değildir."),
        ],
      },
      {
        heading: "§ 14 Bu Tüketici Sözleşme Şartlarının değiştirilmesi", blocks: [
          p("TapRadar, değişen hukuki koşullara, teknik gelişmelere veya uygulamanın değişen özelliklerine uyum sağlamak için gerekli olduğu ve sizin bu nedenle makul olmayan bir şekilde dezavantajlı duruma düşürülmediğiniz ölçüde, bu Tüketici Sözleşme Şartlarını gelecek için geçerli olacak şekilde değiştirme hakkına sahiptir. Önemli değişiklikler hakkında en az 30 gün önceden uygulama içinde veya e-posta yoluyla bilgilendirilirsiniz; yürürlüğe girene kadar itiraz etmezseniz, değiştirilmiş şartlar kabul edilmiş sayılır; bu duruma bildirimde ayrıca dikkat çekilecektir. Değişikliğe, herhangi bir maliyete katlanmaksızın, § 10 uyarınca hesabınızı silerek her zaman itiraz edebilirsiniz."),
        ],
      },
      {
        heading: "§ 15 Son hükümler", blocks: [
          p("(1) BM Satış Sözleşmesi (CISG) hariç olmak üzere Avusturya hukuku geçerlidir. Mutat meskeniniz başka bir AB üye devletinde ise, o devletin ilgili yasal düzenlemelerinin size tanıdığı emredici tüketici koruma hükümlerinin sağladığı koruma etkilenmez."),
          p("(2) Özellikle (AB) 1215/2012 sayılı Tüzük (Brüksel Ia Tüzüğü) uyarınca tüketiciler lehine olan emredici yetki hükümleri bu düzenlemeden etkilenmez; zorunlu olarak öngörüldüğü ölçüde, TapRadar'a özellikle kendi ikametgâh mahkemenizde dava açabilirsiniz."),
          p("(3) Bu Tüketici Sözleşme Şartlarının tek tek hükümlerinin geçersiz olması veya geçersiz hale gelmesi durumunda, diğer hükümlerin geçerliliği bundan etkilenmez."),
        ],
      },
    ],
    sourcesHeading: "Kaynakça",
    sourcesIntro: "Bu Tüketici Sözleşme Şartlarının dayandığı resmi AB ve Avusturya kaynakları:",
    sources: [
      { label: "Tüketici Hakları Direktifi, 2011/83/AB sayılı Direktif", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Dijital İçerik Direktifi, (AB) 2019/770 sayılı Direktif", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Avusturya Mesafeli ve İş Yeri Dışı Sözleşmeler Kanunu (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Dijital Hizmetler Yasası, (AB) 2022/2065 sayılı Tüzük", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  es: {
    title: "Condiciones para consumidores",
    subtitle: "Condiciones generales para la aplicación TapRadar (clientes finales) – TOY GmbH",
    stand: "Actualizado: 9 de agosto de 2026 · Versión 2026-08-09.2",
    intro: [
      p("Las presentes condiciones generales («Condiciones para Consumidores») regulan la relación contractual entre TOY GmbH y las personas físicas que utilizan la aplicación gratuita TapRadar como clientes finales. Para las empresas que se suscriban a un plan de pago para clientes comerciales, se aplicarán las Condiciones para Clientes Comerciales, publicadas por separado."),
    ],
    sections: [
      {
        heading: "§ 1 Ámbito de aplicación y partes contratantes", blocks: [
          p("(1) Las presentes Condiciones para Consumidores se aplican al registro y uso de la aplicación TapRadar por parte de personas físicas que utilizan la aplicación con fines privados, no predominantemente comerciales ni de una actividad profesional independiente (consumidores en el sentido del § 1, apartado 1, punto 2, de la Ley austriaca de protección de los consumidores, KSchG)."),
          p("(2) La contraparte contractual es TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, NIF-IVA ATU78882167, correo electrónico support@tapradar.app (en adelante, «TapRadar», «nosotros»)."),
          p("(3) El uso de la aplicación requiere una edad mínima de 14 años. Las personas de entre 14 y 18 años confirman, al registrarse, que actúan dentro del marco de su capacidad jurídica o que cuentan con el consentimiento necesario de su representante legal."),
          p("(4) Nos oponemos a cualquier condición contraria o divergente de las presentes condiciones; dichas condiciones no pasarán a formar parte del contrato, salvo que TapRadar acepte expresamente su validez por escrito."),
        ],
      },
      {
        heading: "§ 2 Descripción de los servicios: las cuatro áreas funcionales", blocks: [
          p("TapRadar le proporciona, a través de la aplicación, cuatro áreas funcionales centrales de uso gratuito:"),
          p("2.1 Radar – Descubrir: encontrar comercios asociados locales de TapRadar en un mapa, con opciones de filtrado por oferta, cupón, recompensa, mejor valorados y un radio de 500 metros, así como categorías como cafetería, restaurante, peluquería o mercado. Para cada comercio asociado se muestran el horario de apertura, las reseñas y la respectiva insignia de plan."),
          p("2.2 Sello – Recoger: recoger sellos digitales tocando un punto NFC o escaneando un código QR, visualización del progreso (por ejemplo, 7 de 10 sellos), canje de recompensas como un café gratis o un descuento, así como la obtención de puntos por cada sello recogido."),
          p("2.3 Tarjetas – cartera digital: almacenamiento de tarjetas de fidelidad de terceros ya existentes, por ejemplo de Billa, DM, H&M, Spar o Hofer, guardando un código de barras o un código QR, para mostrarlas directamente en caja en sustitución de las tarjetas de plástico. Las marcas mencionadas son ejemplos; TapRadar no está afiliada a estas empresas."),
          p("2.4 Home – perfil y gamificación: un sistema de niveles de 20 escalones que va desde «Principiante» hasta «Campeón», puntos por sellos, reseñas e invitaciones de amigos, un objetivo semanal, un sistema de rachas (siete días activos consecutivos activan una bonificación), así como la posibilidad de invitar a amigos y comparar el progreso en una clasificación."),
          p("El alcance actual de las funciones resulta de la propia aplicación; TapRadar está facultada para adaptar, complementar o suprimir determinadas funciones en el marco de su desarrollo continuo, siempre que ello no menoscabe de forma irrazonable la utilidad principal de la aplicación para usted."),
          p("TapRadar no presta por sí misma ningún bien ni servicio de los comercios asociados, en particular no los productos, descuentos o recompensas anunciados, y no es parte en las transacciones celebradas entre usted y un comercio asociado. La responsabilidad del canje efectivo de las recompensas corresponde exclusivamente al comercio asociado correspondiente."),
        ],
      },
      {
        heading: "§ 3 Registro y celebración del contrato", blocks: [
          p("(1) El uso de TapRadar requiere el registro de una cuenta de usuario con una dirección de correo electrónico y una contraseña. Con la confirmación de su dirección de correo electrónico o con el primer uso, se celebra entre usted y TapRadar un contrato de uso gratuito sujeto a las presentes Condiciones para Consumidores."),
          p("(2) Está obligado a proporcionar datos veraces al registrarse y a proteger sus credenciales de acceso frente al acceso de terceros."),
        ],
      },
      {
        heading: "§ 4 Sin precio en dinero: prestación de servicios digitales a cambio de datos", blocks: [
          callout("Aviso conforme a la Directiva sobre contenidos digitales (Directiva (UE) 2019/770)", "Aunque no pague ningún precio por el uso de la aplicación TapRadar, nos proporciona a cambio datos personales, en particular datos de ubicación, de uso y de contacto. Los contratos relativos a servicios digitales en los que el consumidor proporciona datos personales en lugar de un pago están comprendidos en el ámbito de aplicación de la Directiva sobre contenidos digitales y de la Ley austriaca de garantías al consumidor (VGG). Por tanto, en principio le corresponden los derechos allí previstos relativos a la prestación conforme del servicio digital, en la medida en que estos no estén objetivamente limitados por el carácter gratuito de la aplicación."),
          p("TapRadar se esfuerza por proporcionar la aplicación conforme a las características descritas en el § 2, al estándar habitual de aplicaciones comparables y teniendo en cuenta las declaraciones públicas, así como por actualizarla en la medida prevista contractualmente."),
        ],
      },
      {
        heading: "§ 5 Derechos de uso", blocks: [
          p("TapRadar le concede un derecho simple, intransferible y personal de utilizar la aplicación para uso privado conforme a las presentes Condiciones para Consumidores. No está permitida la sublicencia, la reventa ni el uso comercial de su cuenta de usuario."),
        ],
      },
      {
        heading: "§ 6 Sus obligaciones al utilizar la aplicación", blocks: [
          p("(1) Usted se compromete a no utilizar la plataforma de manera abusiva. Está prohibida la manipulación de sellos, recompensas, datos de ubicación u otras medidas de protección técnicas, por ejemplo mediante GPS falso, registros múltiples para eludir limitaciones o la manipulación de procesos NFC o QR. TapRadar está facultada, en caso de sospecha fundada de tal manipulación, a bloquear o eliminar los sellos, recompensas o cuentas afectados."),
          p("(2) Las reseñas deben ser veraces y basarse en una visita real y verificada; las reseñas ilícitas, ofensivas o manifiestamente falsas pueden ser eliminadas por TapRadar. Las denuncias de contenidos ilícitos pueden realizarse en cualquier momento a través de la función de denuncia prevista en la aplicación o por correo electrónico a support@tapradar.app; examinamos cada denuncia y le informamos del resultado."),
          p("(3) Para las tarjetas de fidelidad de terceros almacenadas en el área Tarjetas, usted es el único responsable de la exactitud de los datos introducidos y de su aceptación en la caja correspondiente; TapRadar no asume ninguna garantía al respecto, al tratarse de datos de terceros introducidos por usted y no verificados por TapRadar."),
        ],
      },
      {
        heading: "§ 7 Gamificación, niveles, puntos y recompensas", blocks: [
          p("(1) Los niveles, puntos, rachas y posiciones en la clasificación en el área Home no tienen valor monetario, no son negociables ni canjeables por dinero. Sirven exclusivamente para representar de forma lúdica su uso."),
          p("(2) Las recompensas canjeadas a través de tarjetas de fidelidad, por ejemplo un producto gratuito o un descuento, son concedidas exclusivamente por el comercio asociado correspondiente; no existe ningún derecho frente a TapRadar en relación con la provisión, sustitución o compensación de una recompensa no canjeada o que ya no esté disponible."),
          p("(3) Al eliminar su cuenta, todos los sellos, puntos, niveles, rachas y recompensas aún no canjeadas recogidos caducan sin compensación, siempre que en ese momento no haya comenzado ya un proceso de canje."),
        ],
      },
      {
        heading: "§ 8 Permisos de ubicación y notificaciones push", blocks: [
          p("El uso de las funciones Radar y Sello, así como la recepción de notificaciones push, requieren los correspondientes permisos, revocables en cualquier momento, en los ajustes de su dispositivo. Para más detalles sobre el tratamiento de los datos de ubicación y de notificaciones push, consulte la política de privacidad en www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Disponibilidad y modificaciones", blocks: [
          p("TapRadar se esfuerza por garantizar una alta disponibilidad de la aplicación, pero no puede garantizar una disponibilidad ininterrumpida. Los trabajos de mantenimiento, los fallos técnicos o el desarrollo continuo pueden dar lugar a restricciones temporales. Los cambios sustanciales y desfavorables para usted en las funciones principales se le anunciarán en la aplicación con una antelación razonable."),
        ],
      },
      {
        heading: "§ 10 Resolución y eliminación de la cuenta", blocks: [
          p("Puede eliminar su cuenta de usuario en cualquier momento, de forma gratuita y sin indicar motivos, a través de los ajustes de la aplicación o por correo electrónico a support@tapradar.app; el contrato finaliza cuando la eliminación surte efecto. TapRadar puede resolver el contrato por causa justificada, en particular en caso de incumplimientos importantes del § 6, con un preaviso razonable."),
        ],
      },
      {
        heading: "§ 11 Responsabilidad", blocks: [
          p("(1) TapRadar responde sin limitación por los daños derivados de la lesión de la vida, el cuerpo o la salud, así como por los daños basados en dolo o negligencia grave, y conforme a las disposiciones imperativas de la Ley de responsabilidad por productos."),
          p("(2) Por los daños causados por negligencia leve, TapRadar solo responde en caso de incumplimiento de obligaciones contractuales esenciales cuyo cumplimiento posibilita en primer lugar el uso correcto de la aplicación; en tal caso, la responsabilidad se limita al daño típicamente previsible para este tipo de contrato. Las disposiciones imperativas de la Ley austriaca de protección de los consumidores no se ven afectadas por esta limitación."),
          p("(3) TapRadar no responde de los contenidos, ofertas, recompensas o actos de los comercios asociados, ni de la exactitud de las reseñas de otros usuarios o de las tarjetas de terceros almacenadas por usted en el área Tarjetas."),
        ],
      },
      {
        heading: "§ 12 Derecho de desistimiento", blocks: [
          p("Aunque la aplicación sea gratuita, como consumidor puede disponer, en determinadas condiciones, de un derecho de desistimiento legal respecto del contrato de registro celebrado a distancia. Para más detalles, consulte la información de desistimiento para consumidores, proporcionada por separado, en www.tapradar.app/widerrufsbelehrung. Dado que en cualquier caso puede eliminar su cuenta de forma gratuita y sin indicar motivos en cualquier momento conforme al § 10, el ejercicio del derecho de desistimiento generalmente no tiene para usted ningún efecto práctico adicional, pero continúa existiendo jurídicamente con independencia de ello."),
        ],
      },
      {
        heading: "§ 13 Resolución de litigios", blocks: [
          p("La Comisión Europea pone a disposición una plataforma de resolución de litigios en línea (plataforma ODR), accesible en https://ec.europa.eu/consumers/odr. TapRadar no está obligada ni dispuesta a participar en un procedimiento de resolución de litigios ante un organismo de arbitraje de consumo, salvo que la ley disponga otra cosa."),
        ],
      },
      {
        heading: "§ 14 Modificación de las presentes Condiciones para Consumidores", blocks: [
          p("TapRadar está facultada para modificar las presentes Condiciones para Consumidores con efecto para el futuro, en la medida necesaria para adaptarse a la evolución del marco jurídico, a los desarrollos técnicos o a las funciones modificadas de la aplicación, y siempre que usted no se vea perjudicado de forma irrazonable como consecuencia de ello. Se le informará de los cambios sustanciales al menos 30 días antes de su entrada en vigor, en la aplicación o por correo electrónico; si no se opone antes de su entrada en vigor, las condiciones modificadas se considerarán aceptadas, extremo sobre el cual le llamaremos expresamente la atención en la comunicación. Puede oponerse a la modificación en cualquier momento eliminando su cuenta conforme al § 10, sin que ello le suponga ningún coste."),
        ],
      },
      {
        heading: "§ 15 Disposiciones finales", blocks: [
          p("(1) Se aplica el derecho austriaco, con exclusión de la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías (CISG). Si tiene su residencia habitual en otro Estado miembro de la UE, la protección que le otorgan las disposiciones imperativas de protección de los consumidores de dicho Estado no se ve afectada."),
          p("(2) Las disposiciones imperativas en materia de competencia judicial en favor de los consumidores, en particular conforme al Reglamento (UE) n.º 1215/2012 (Reglamento Bruselas I bis), no se ven afectadas por la presente disposición; en particular, puede demandar a TapRadar ante el tribunal de su propio domicilio, en la medida en que ello esté previsto de forma imperativa."),
          p("(3) Si alguna de las disposiciones de las presentes Condiciones para Consumidores fuera o llegara a ser inválida, la validez de las restantes disposiciones no se verá afectada."),
        ],
      },
    ],
    sourcesHeading: "Fuentes",
    sourcesIntro: "Fuentes oficiales de la UE y de Austria en las que se basan las presentes Condiciones para Consumidores:",
    sources: [
      { label: "Directiva sobre los derechos de los consumidores, Directiva 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Directiva sobre contenidos digitales, Directiva (UE) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Ley austriaca de contratos a distancia y celebrados fuera del establecimiento (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Ley de Servicios Digitales, Reglamento (UE) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  pl: {
    title: "Warunki dla konsumentów",
    subtitle: "Ogólne warunki korzystania z aplikacji TapRadar (klienci końcowi) – TOY GmbH",
    stand: "Stan na: 9 sierpnia 2026 r. · Wersja 2026-08-09.2",
    intro: [
      p("Niniejsze ogólne warunki („Warunki dla Konsumentów”) regulują stosunek umowny między TOY GmbH a osobami fizycznymi korzystającymi z bezpłatnej aplikacji TapRadar jako klienci końcowi. Dla przedsiębiorstw wykupujących płatny plan dla klientów biznesowych obowiązują odrębnie publikowane Warunki dla Klientów Biznesowych."),
    ],
    sections: [
      {
        heading: "§ 1 Zakres obowiązywania i strony umowy", blocks: [
          p("(1) Niniejsze Warunki dla Konsumentów mają zastosowanie do rejestracji i korzystania z aplikacji TapRadar przez osoby fizyczne korzystające z aplikacji w celach prywatnych, nieprzeważająco gospodarczych ani w ramach samodzielnej działalności zawodowej (konsumenci w rozumieniu § 1 ust. 1 pkt 2 austriackiej ustawy o ochronie konsumentów, KSchG)."),
          p("(2) Stroną umowy jest TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, numer VAT ATU78882167, e-mail support@tapradar.app (dalej „TapRadar”, „my”)."),
          p("(3) Korzystanie z aplikacji wymaga ukończenia co najmniej 14 lat. Osoby w wieku od 14 do 18 lat potwierdzają rejestracją, że działają w ramach swojej zdolności do czynności prawnych lub posiadają wymaganą zgodę swojego przedstawiciela ustawowego."),
          p("(4) Sprzeciwiamy się wszelkim sprzecznym lub odbiegającym od niniejszych warunków postanowieniom; nie stają się one częścią umowy, chyba że TapRadar wyraźnie i na piśmie zaakceptuje ich obowiązywanie."),
        ],
      },
      {
        heading: "§ 2 Opis usług – cztery obszary funkcjonalne", blocks: [
          p("TapRadar udostępnia Państwu za pośrednictwem aplikacji cztery główne, bezpłatnie dostępne obszary funkcjonalne:"),
          p("2.1 Radar – Odkrywaj: wyszukiwanie lokalnych firm partnerskich TapRadar na mapie, z możliwością filtrowania według akcji, kuponu, nagrody, najlepiej ocenianych oraz promienia 500 metrów, a także kategorii takich jak kawiarnia, restauracja, fryzjer czy targ. Przy każdej firmie partnerskiej wyświetlane są godziny otwarcia, opinie i odpowiednia odznaka planu."),
          p("2.2 Pieczątka – Zbieraj: zbieranie cyfrowych pieczątek poprzez dotknięcie punktu NFC lub zeskanowanie kodu QR, wyświetlanie postępu (np. 7 z 10 pieczątek), wykorzystanie nagród, takich jak darmowa kawa lub zniżka, a także otrzymywanie punktów za każdą zebraną pieczątkę."),
          p("2.3 Karty – cyfrowy portfel: zapisywanie istniejących już kart klienta podmiotów trzecich, np. Billa, DM, H&M, Spar lub Hofer, poprzez zapisanie kodu kreskowego lub kodu QR, aby okazywać je bezpośrednio przy kasie zamiast kart plastikowych. Wymienione marki są przykładami; TapRadar nie jest powiązany z tymi przedsiębiorstwami."),
          p("2.4 Home – profil i grywalizacja: 20-stopniowy system poziomów od „Nowicjusza” do „Mistrza”, punkty za pieczątki, opinie i zaproszenia znajomych, cel tygodniowy, system serii (siedem kolejnych aktywnych dni uruchamia bonus) oraz możliwość zapraszania znajomych i porównywania swoich postępów w rankingu."),
          p("Aktualny zakres funkcji wynika z samej aplikacji; TapRadar jest uprawniony do dostosowywania, uzupełniania lub wycofywania poszczególnych funkcji w ramach dalszego rozwoju, o ile nie wpływa to w nieuzasadniony sposób na podstawową użyteczność aplikacji dla Państwa."),
          p("TapRadar nie świadczy samodzielnie żadnych towarów ani usług firm partnerskich, w szczególności nie reklamowanych produktów, zniżek ani nagród, i nie jest stroną transakcji zawieranych między Państwem a firmą partnerską. Za faktyczną realizację nagród odpowiada wyłącznie dana firma partnerska."),
        ],
      },
      {
        heading: "§ 3 Rejestracja i zawarcie umowy", blocks: [
          p("(1) Korzystanie z TapRadar wymaga zarejestrowania konta użytkownika z adresem e-mail i hasłem. Wraz z potwierdzeniem adresu e-mail lub pierwszym skorzystaniem z aplikacji, między Państwem a TapRadar zostaje zawarta nieodpłatna umowa o korzystanie, podlegająca niniejszym Warunkom dla Konsumentów."),
          p("(2) Są Państwo zobowiązani do podawania prawdziwych danych podczas rejestracji oraz do ochrony swoich danych dostępowych przed dostępem osób trzecich."),
        ],
      },
      {
        heading: "§ 4 Brak ceny pieniężnej – udostępnianie usług cyfrowych w zamian za dane", blocks: [
          callout("Informacja zgodnie z dyrektywą o treściach cyfrowych (dyrektywa (UE) 2019/770)", "Nawet jeśli nie płacą Państwo wynagrodzenia za korzystanie z aplikacji TapRadar, w zamian udostępniają nam Państwo dane osobowe, w szczególności dane lokalizacyjne, dane dotyczące korzystania oraz dane kontaktowe. Umowy dotyczące usług cyfrowych, w ramach których konsument udostępnia dane osobowe zamiast dokonywać płatności, wchodzą w zakres dyrektywy o treściach cyfrowych oraz austriackiej ustawy o gwarancjach konsumenckich (VGG). Przysługują więc Państwu zasadniczo przewidziane tam prawa dotyczące zgodnego z umową udostępnienia usługi cyfrowej, o ile nie są one obiektywnie ograniczone przez nieodpłatny charakter aplikacji."),
          p("TapRadar dokłada starań, aby udostępniać aplikację zgodnie z cechami opisanymi w § 2, zwyczajowym standardem porównywalnych aplikacji oraz z uwzględnieniem publicznych oświadczeń, a także aktualizować ją w zakresie przewidzianym umową."),
        ],
      },
      {
        heading: "§ 5 Prawa użytkowania", blocks: [
          p("TapRadar udziela Państwu zwykłego, niezbywalnego i osobistego prawa do korzystania z aplikacji do użytku prywatnego zgodnie z niniejszymi Warunkami dla Konsumentów. Udzielanie sublicencji, odsprzedaż lub komercyjne wykorzystanie Państwa konta użytkownika są niedozwolone."),
        ],
      },
      {
        heading: "§ 6 Państwa obowiązki przy korzystaniu z aplikacji", blocks: [
          p("(1) Zobowiązują się Państwo do niekorzystania z platformy w sposób niezgodny z jej przeznaczeniem. Zabroniona jest manipulacja pieczątkami, nagrodami, danymi lokalizacyjnymi lub innymi technicznymi środkami ochrony, np. poprzez fałszywe GPS, wielokrotne rejestracje w celu obejścia ograniczeń lub manipulację procesami NFC lub QR. TapRadar jest uprawniony, w przypadku uzasadnionego podejrzenia takiej manipulacji, do zablokowania lub usunięcia odpowiednich pieczątek, nagród lub kont."),
          p("(2) Opinie muszą być prawdziwe i oparte na rzeczywistej, zweryfikowanej wizycie; opinie niezgodne z prawem, obraźliwe lub w oczywisty sposób nieprawdziwe mogą zostać usunięte przez TapRadar. Zgłoszenia dotyczące treści niezgodnych z prawem można w każdej chwili przekazywać za pośrednictwem funkcji zgłaszania dostępnej w aplikacji lub e-mailem na adres support@tapradar.app; sprawdzamy każde zgłoszenie i informujemy Państwa o wyniku."),
          p("(3) Za prawidłowość danych wprowadzonych w obszarze Karty dotyczących kart klienta podmiotów trzecich oraz ich akceptację przy danej kasie odpowiadają wyłącznie Państwo; TapRadar nie udziela w tym zakresie żadnej gwarancji, ponieważ są to dane osób trzecich wprowadzone samodzielnie przez Państwa i niesprawdzane przez TapRadar."),
        ],
      },
      {
        heading: "§ 7 Grywalizacja, poziomy, punkty i nagrody", blocks: [
          p("(1) Poziomy, punkty, serie i miejsca w rankingu w obszarze Home nie mają żadnej wartości pieniężnej, nie podlegają obrotowi i nie można ich wymienić na pieniądze. Służą wyłącznie do zabawowego przedstawienia Państwa aktywności."),
          p("(2) Nagrody realizowane za pomocą kart lojalnościowych, np. darmowy produkt lub zniżka, są przyznawane wyłącznie przez daną firmę partnerską; nie przysługuje żadne roszczenie wobec TapRadar o udostępnienie, zastąpienie lub rekompensatę niewykorzystanej lub już niedostępnej nagrody."),
          p("(3) W przypadku usunięcia Państwa konta wszystkie zebrane pieczątki, punkty, poziomy, serie i jeszcze niewykorzystane nagrody przepadają bez rekompensaty, o ile w tym momencie nie rozpoczął się już proces realizacji."),
        ],
      },
      {
        heading: "§ 8 Uprawnienia dotyczące lokalizacji i powiadomień push", blocks: [
          p("Korzystanie z funkcji Radar i Pieczątka oraz otrzymywanie powiadomień push wymaga odpowiednich, w każdej chwili odwołalnych uprawnień w ustawieniach Państwa urządzenia. Szczegóły dotyczące przetwarzania danych lokalizacyjnych i push znajdą Państwo w polityce prywatności na www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Dostępność i zmiany", blocks: [
          p("TapRadar dokłada starań, aby zapewnić wysoką dostępność aplikacji, jednak nie może zagwarantować nieprzerwanej dostępności. Prace konserwacyjne, awarie techniczne lub dalszy rozwój mogą prowadzić do tymczasowych ograniczeń. O istotnych, niekorzystnych dla Państwa zmianach funkcji podstawowych zostaną Państwo poinformowani z odpowiednim wyprzedzeniem w aplikacji."),
        ],
      },
      {
        heading: "§ 10 Wypowiedzenie i usunięcie konta", blocks: [
          p("Mogą Państwo w każdej chwili, bezpłatnie i bez podania przyczyn, zlecić usunięcie swojego konta użytkownika za pośrednictwem ustawień aplikacji lub e-mailem na adres support@tapradar.app; umowa kończy się z chwilą skuteczności usunięcia. TapRadar może wypowiedzieć umowę z ważnego powodu, w szczególności w przypadku istotnych naruszeń § 6, z odpowiednim wyprzedzeniem."),
        ],
      },
      {
        heading: "§ 11 Odpowiedzialność", blocks: [
          p("(1) TapRadar odpowiada bez ograniczeń za szkody wynikające z naruszenia życia, ciała lub zdrowia, a także za szkody wynikające z umyślnego działania lub rażącego niedbalstwa, oraz zgodnie z bezwzględnie obowiązującymi przepisami ustawy o odpowiedzialności za produkt."),
          p("(2) Za szkody spowodowane lekkim niedbalstwem TapRadar odpowiada wyłącznie w przypadku naruszenia istotnych obowiązków umownych, których spełnienie w ogóle umożliwia prawidłowe korzystanie z aplikacji; w takim przypadku odpowiedzialność jest ograniczona do szkody typowo przewidywalnej dla tego rodzaju umowy. Bezwzględnie obowiązujące przepisy austriackiej ustawy o ochronie konsumentów pozostają nienaruszone przez to ograniczenie."),
          p("(3) TapRadar nie odpowiada za treści, oferty, nagrody ani działania firm partnerskich, ani za prawidłowość opinii innych użytkowników lub kart osób trzecich zapisanych przez Państwa w obszarze Karty."),
        ],
      },
      {
        heading: "§ 12 Prawo odstąpienia", blocks: [
          p("Nawet jeśli aplikacja jest bezpłatna, jako konsumentowi może Państwu przysługiwać, pod pewnymi warunkami, ustawowe prawo odstąpienia od zawartej na odległość umowy rejestracji. Szczegóły znajdą Państwo w odrębnie udostępnianej informacji o odstąpieniu dla konsumentów na www.tapradar.app/widerrufsbelehrung. Ponieważ mogą Państwo i tak w każdej chwili bezpłatnie i bez podania przyczyn usunąć swoje konto zgodnie z § 10, wykonanie prawa odstąpienia nie ma dla Państwa z reguły żadnego dodatkowego praktycznego znaczenia, jednak istnieje prawnie niezależnie od tego."),
        ],
      },
      {
        heading: "§ 13 Rozstrzyganie sporów", blocks: [
          p("Komisja Europejska udostępnia platformę internetowego rozstrzygania sporów (platforma ODR), dostępną pod adresem https://ec.europa.eu/consumers/odr. TapRadar nie jest zobowiązany ani gotowy do udziału w postępowaniu w sprawie rozstrzygania sporów przed konsumenckim organem polubownym, chyba że przepisy prawa stanowią inaczej."),
        ],
      },
      {
        heading: "§ 14 Zmiana niniejszych Warunków dla Konsumentów", blocks: [
          p("TapRadar jest uprawniony do zmiany niniejszych Warunków dla Konsumentów ze skutkiem na przyszłość, o ile jest to konieczne w celu dostosowania do zmieniających się przepisów prawa, rozwoju technicznego lub zmienionych funkcji aplikacji, a Państwo nie zostaną przez to nadmiernie pokrzywdzeni. O istotnych zmianach zostaną Państwo poinformowani co najmniej 30 dni przed ich wejściem w życie, w aplikacji lub e-mailem; jeśli nie wniosą Państwo sprzeciwu do momentu wejścia w życie, zmienione warunki uznaje się za zaakceptowane, na co wyraźnie wskażemy w powiadomieniu. Mogą Państwo w każdej chwili sprzeciwić się zmianie poprzez usunięcie konta zgodnie z § 10, bez ponoszenia z tego tytułu żadnych kosztów."),
        ],
      },
      {
        heading: "§ 15 Postanowienia końcowe", blocks: [
          p("(1) Obowiązuje prawo austriackie, z wyłączeniem Konwencji Narodów Zjednoczonych o umowach międzynarodowej sprzedaży towarów (CISG). Jeśli mają Państwo miejsce zwykłego pobytu w innym państwie członkowskim UE, ochrona wynikająca z bezwzględnie obowiązujących przepisów o ochronie konsumentów tego państwa pozostaje nienaruszona."),
          p("(2) Bezwzględnie obowiązujące przepisy dotyczące jurysdykcji na korzyść konsumentów, w szczególności zgodnie z rozporządzeniem (UE) nr 1215/2012 (rozporządzenie Bruksela I bis), pozostają nienaruszone przez niniejsze postanowienie; mogą Państwo w szczególności dochodzić roszczeń wobec TapRadar przed sądem właściwym dla swojego miejsca zamieszkania, o ile jest to bezwzględnie przewidziane."),
          p("(3) Jeżeli poszczególne postanowienia niniejszych Warunków dla Konsumentów są lub staną się nieważne, nie wpływa to na ważność pozostałych postanowień."),
        ],
      },
    ],
    sourcesHeading: "Wykaz źródeł",
    sourcesIntro: "Oficjalne źródła unijne i austriackie, na których opierają się niniejsze Warunki dla Konsumentów:",
    sources: [
      { label: "Dyrektywa w sprawie praw konsumentów, dyrektywa 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Dyrektywa o treściach cyfrowych, dyrektywa (UE) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Austriacka ustawa o umowach zawieranych na odległość i poza lokalem przedsiębiorstwa (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Akt o usługach cyfrowych, rozporządzenie (UE) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  hr: {
    title: "Uvjeti za potrošače",
    subtitle: "Opći uvjeti poslovanja za aplikaciju TapRadar (krajnji korisnici) – TOY GmbH",
    stand: "Ažurirano: 9. kolovoza 2026. · Verzija 2026-08-09.2",
    intro: [
      p("Ovi opći uvjeti poslovanja („Uvjeti za potrošače”) uređuju ugovorni odnos između TOY GmbH i fizičkih osoba koje koriste besplatnu aplikaciju TapRadar kao krajnji korisnici. Za poduzeća koja se pretplate na plaćeni paket za poslovne korisnike vrijede zasebno objavljeni Uvjeti za poslovne korisnike."),
    ],
    sections: [
      {
        heading: "§ 1 Područje primjene i ugovorne strane", blocks: [
          p("(1) Ovi Uvjeti za potrošače primjenjuju se na registraciju i korištenje aplikacije TapRadar od strane fizičkih osoba koje aplikaciju koriste u privatne, pretežno negospodarske ili nesamostalne profesionalne svrhe (potrošači u smislu § 1 st. 1 t. 2 austrijskog Zakona o zaštiti potrošača, KSchG)."),
          p("(2) Ugovorna strana je TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austrija, OIB/PDV broj ATU78882167, e-pošta support@tapradar.app (dalje u tekstu „TapRadar”, „mi”)."),
          p("(3) Korištenje aplikacije zahtijeva minimalnu dob od 14 godina. Osobe u dobi od 14 do 18 godina registracijom potvrđuju da postupaju u okviru svoje poslovne sposobnosti, odnosno da posjeduju potreban pristanak svog zakonskog zastupnika."),
          p("(4) Odbijamo suprotne ili od ovih uvjeta odstupajuće uvjete; oni ne postaju dio ugovora, osim ako TapRadar izričito pismeno ne prihvati njihovu valjanost."),
        ],
      },
      {
        heading: "§ 2 Opis usluga – četiri funkcionalna dijela", blocks: [
          p("TapRadar vam putem aplikacije pruža četiri središnja, besplatno dostupna funkcionalna dijela:"),
          p("2.1 Radar – Otkrijte: pronalaženje lokalnih partnerskih poduzeća TapRadar na karti, s mogućnostima filtriranja prema akciji, kuponu, nagradi, najboljoj ocjeni i radijusu od 500 metara, te kategorijama poput kafića, restorana, frizerskog salona ili tržnice. Za svako partnersko poduzeće prikazuju se radno vrijeme, recenzije i odgovarajuća oznaka paketa."),
          p("2.2 Pečat – Skupljajte: skupljanje digitalnih pečata dodirom NFC točke ili skeniranjem QR koda, prikaz napretka (npr. 7 od 10 pečata), iskorištavanje nagrada poput besplatne kave ili popusta, kao i dobivanje bodova za svaki skupljeni pečat."),
          p("2.3 Kartice – digitalni novčanik: pohrana već postojećih korisničkih kartica trećih strana, primjerice Billa, DM, H&M, Spar ili Hofer, pohranom crtičnog ili QR koda, kako bi se pokazale izravno na blagajni umjesto plastičnih kartica. Navedeni brendovi su primjeri; TapRadar nije povezan s tim tvrtkama."),
          p("2.4 Home – profil i gamifikacija: sustav od 20 razina od „Početnika” do „Prvaka”, bodovi za pečate, recenzije i pozive prijatelja, tjedni cilj, sustav nizova (sedam uzastopnih aktivnih dana pokreće bonus), te mogućnost pozivanja prijatelja i uspoređivanja napretka na ljestvici."),
          p("Trenutačni opseg funkcija proizlazi iz same aplikacije; TapRadar je ovlašten u okviru daljnjeg razvoja prilagođavati, dopunjavati ili ukidati pojedine funkcije, ako time nije nerazmjerno pogođena osnovna korist aplikacije za vas."),
          p("TapRadar sam ne pruža nikakvu robu ili usluge partnerskih poduzeća, posebice ne oglašene proizvode, popuste ili nagrade, i nije sudionik pravnih poslova koji nastaju između vas i partnerskog poduzeća. Za stvarno iskorištavanje nagrada odgovorno je isključivo relevantno partnersko poduzeće."),
        ],
      },
      {
        heading: "§ 3 Registracija i sklapanje ugovora", blocks: [
          p("(1) Korištenje TapRadara zahtijeva registraciju korisničkog računa s e-adresom i lozinkom. Potvrdom vaše e-adrese, odnosno prvim korištenjem, između vas i TapRadara nastaje besplatan ugovor o korištenju koji podliježe ovim Uvjetima za potrošače."),
          p("(2) Dužni ste prilikom registracije navesti istinite podatke i svoje pristupne podatke zaštititi od pristupa trećih osoba."),
        ],
      },
      {
        heading: "§ 4 Bez novčane cijene – pružanje digitalnih usluga u zamjenu za podatke", blocks: [
          callout("Napomena sukladno Direktivi o digitalnom sadržaju (Direktiva (EU) 2019/770)", "Iako ne plaćate naknadu za korištenje aplikacije TapRadar, zauzvrat nam pružate osobne podatke, posebice podatke o lokaciji, korištenju i kontaktu. Ugovori o digitalnim uslugama kod kojih potrošač umjesto plaćanja pruža osobne podatke potpadaju pod područje primjene Direktive o digitalnom sadržaju i austrijskog Zakona o jamstvima za potrošače (VGG). Stoga vam u pravilu pripadaju tamo predviđena prava na pružanje digitalne usluge sukladno ugovoru, ako ta prava nisu objektivno ograničena besplatnim karakterom aplikacije."),
          p("TapRadar nastoji pružati aplikaciju sukladno značajkama opisanim u § 2, uobičajenom standardu sličnih aplikacija i uzimajući u obzir javne izjave, te je ažurirati u ugovorom predviđenom opsegu."),
        ],
      },
      {
        heading: "§ 5 Prava korištenja", blocks: [
          p("TapRadar vam ustupa jednostavno, neprenosivo, osobno pravo korištenja aplikacije za privatnu uporabu sukladno ovim Uvjetima za potrošače. Podlicenciranje, daljnja prodaja ili komercijalno korištenje vašeg korisničkog računa nisu dopušteni."),
        ],
      },
      {
        heading: "§ 6 Vaše obveze prilikom korištenja", blocks: [
          p("(1) Obvezujete se da nećete koristiti platformu na zlouporabljujući način. Manipulacija pečatima, nagradama, podacima o lokaciji ili drugim tehničkim zaštitnim mjerama, primjerice putem lažnog GPS-a, višestrukih registracija radi zaobilaženja ograničenja ili manipulacije NFC ili QR postupaka, zabranjena je. TapRadar je ovlašten, u slučaju opravdane sumnje na takvu manipulaciju, blokirati ili izbrisati pogođene pečate, nagrade ili račune."),
          p("(2) Recenzije moraju biti istinite i temeljene na stvarnom, provjerenom posjetu; protupravne, uvredljive ili očito neistinite recenzije TapRadar može ukloniti. Prijave protupravnog sadržaja mogu se u bilo kojem trenutku podnijeti putem funkcije prijave u aplikaciji ili e-poštom na support@tapradar.app; svaku prijavu provjeravamo i priopćavamo vam rezultat."),
          p("(3) Za korisničke kartice trećih strana pohranjene u dijelu Kartice, isključivo ste vi odgovorni za točnost unesenih podataka i njihovo prihvaćanje na relevantnoj blagajni; TapRadar u tom pogledu ne pruža nikakvo jamstvo, budući da se radi o podacima trećih strana koje ste sami unijeli, a koje TapRadar ne provjerava."),
        ],
      },
      {
        heading: "§ 7 Gamifikacija, razine, bodovi i nagrade", blocks: [
          p("(1) Razine, bodovi, nizovi i pozicije na ljestvici u dijelu Home nemaju novčanu vrijednost, nisu prenosivi i ne mogu se zamijeniti za novac. Služe isključivo za igrivi prikaz vašeg korištenja."),
          p("(2) Nagrade iskorištene putem kartica vjernosti, primjerice besplatan proizvod ili popust, dodjeljuje isključivo relevantno partnersko poduzeće; ne postoji nikakav zahtjev prema TapRadaru za pružanje, zamjenu ili nadoknadu vrijednosti neiskorištene ili više nedostupne nagrade."),
          p("(3) Prilikom brisanja vašeg računa, svi skupljeni pečati, bodovi, razine, nizovi i još neiskorištene nagrade propadaju bez naknade, ako u tom trenutku već nije započet postupak iskorištavanja."),
        ],
      },
      {
        heading: "§ 8 Dozvole za lokaciju i push obavijesti", blocks: [
          p("Korištenje funkcija Radar i Pečat, kao i primanje push obavijesti, zahtijeva odgovarajuće dozvole, koje se u svakom trenutku mogu opozvati, u postavkama vašeg uređaja. Pojedinosti o obradi podataka o lokaciji i push podataka potražite u politici privatnosti na www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Dostupnost i izmjene", blocks: [
          p("TapRadar nastoji osigurati visoku dostupnost aplikacije, ali ne može jamčiti neprekidnu dostupnost. Radovi na održavanju, tehnički kvarovi ili daljnji razvoj mogu dovesti do privremenih ograničenja. Bitne, za vas nepovoljne izmjene osnovnih funkcija bit će pravodobno unaprijed najavljene u aplikaciji."),
        ],
      },
      {
        heading: "§ 10 Otkaz i brisanje računa", blocks: [
          p("Svoj korisnički račun možete u bilo kojem trenutku, besplatno i bez navođenja razloga, dati izbrisati putem postavki aplikacije ili e-poštom na support@tapradar.app; ugovor prestaje stupanjem na snagu brisanja. TapRadar može otkazati ugovor iz važnog razloga, posebice u slučaju znatnih kršenja § 6, uz razuman prethodni rok."),
        ],
      },
      {
        heading: "§ 11 Odgovornost", blocks: [
          p("(1) TapRadar odgovara neograničeno za štete nastale povredom života, tijela ili zdravlja, kao i za štete nastale namjerom ili grubom nepažnjom, te prema kogentnim odredbama Zakona o odgovornosti za proizvod."),
          p("(2) Za štete nastale lakom nepažnjom, TapRadar odgovara samo u slučaju povrede bitnih ugovornih obveza čije ispunjenje uopće omogućuje uredno korištenje aplikacije; u tom slučaju odgovornost je ograničena na štetu koja je tipično predvidiva za ovu vrstu ugovora. Kogentne odredbe austrijskog Zakona o zaštiti potrošača ostaju ovim ograničenjem netaknute."),
          p("(3) TapRadar ne odgovara za sadržaje, ponude, nagrade ili radnje partnerskih poduzeća, niti za točnost recenzija drugih korisnika ili kartica trećih strana koje ste sami pohranili u dijelu Kartice."),
        ],
      },
      {
        heading: "§ 12 Pravo na odustanak", blocks: [
          p("Iako je aplikacija besplatna, kao potrošaču vam pod određenim uvjetima može pripadati zakonsko pravo na odustanak u vezi s ugovorom o registraciji sklopljenim na daljinu. Pojedinosti potražite u zasebno dostupnoj Obavijesti o pravu na odustanak za potrošače na www.tapradar.app/widerrufsbelehrung. Budući da svoj račun i inače možete u bilo kojem trenutku besplatno i bez navođenja razloga izbrisati prema § 10, ostvarivanje prava na odustanak za vas u pravilu nema dodatan praktičan učinak, ali pravno i dalje postoji neovisno o tome."),
        ],
      },
      {
        heading: "§ 13 Rješavanje sporova", blocks: [
          p("Europska komisija osigurava platformu za online rješavanje sporova (ODR platforma), dostupnu na https://ec.europa.eu/consumers/odr. TapRadar nije obvezan niti spreman sudjelovati u postupku rješavanja sporova pred tijelom za izvansudsko rješavanje potrošačkih sporova, osim ako zakon ne propisuje drugačije."),
        ],
      },
      {
        heading: "§ 14 Izmjena ovih Uvjeta za potrošače", blocks: [
          p("TapRadar je ovlašten mijenjati ove Uvjete za potrošače s učinkom ubuduće, ako je to potrebno radi prilagodbe izmijenjenoj pravnoj situaciji, tehničkom razvoju ili izmijenjenim funkcijama aplikacije, i ako time niste nerazmjerno oštećeni. O bitnim izmjenama bit ćete obaviješteni najmanje 30 dana prije stupanja na snagu, u aplikaciji ili e-poštom; ako se ne usprotivite do stupanja na snagu, izmijenjeni uvjeti se smatraju prihvaćenima, na što ćemo vas posebno upozoriti u obavijesti. Izmjeni se u bilo kojem trenutku možete usprotiviti brisanjem svog računa prema § 10, bez ikakvih troškova za vas."),
        ],
      },
      {
        heading: "§ 15 Završne odredbe", blocks: [
          p("(1) Primjenjuje se austrijsko pravo uz isključenje Konvencije UN-a o ugovorima o međunarodnoj prodaji robe (CISG). Ako imate uobičajeno boravište u drugoj državi članici EU-a, zaštita koju vam pružaju kogentne odredbe o zaštiti potrošača te države ostaje netaknuta."),
          p("(2) Kogentne odredbe o nadležnosti u korist potrošača, posebice prema Uredbi (EU) br. 1215/2012 (Uredba Bruxelles I bis), ostaju ovom odredbom netaknute; posebice možete pokrenuti postupak protiv TapRadara pred sudom prema mjestu vašeg prebivališta, ako je to kogentno predviđeno."),
          p("(3) Ako pojedine odredbe ovih Uvjeta za potrošače budu ili postanu nevaljane, to ne utječe na valjanost ostalih odredbi."),
        ],
      },
    ],
    sourcesHeading: "Popis izvora",
    sourcesIntro: "Službeni izvori EU-a i Austrije na kojima se temelje ovi Uvjeti za potrošače:",
    sources: [
      { label: "Direktiva o pravima potrošača, Direktiva 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Direktiva o digitalnom sadržaju, Direktiva (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Austrijski zakon o ugovorima na daljinu i izvan poslovnih prostorija (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Akt o digitalnim uslugama, Uredba (EU) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  ro: {
    title: "Termeni pentru consumatori",
    subtitle: "Termeni și condiții generale pentru aplicația TapRadar (clienți finali) – TOY GmbH",
    stand: "Actualizat: 9 august 2026 · Versiunea 2026-08-09.2",
    intro: [
      p("Prezentele termeni și condiții generale („Termeni pentru consumatori”) reglementează raportul contractual dintre TOY GmbH și persoanele fizice care utilizează aplicația gratuită TapRadar în calitate de clienți finali. Pentru companiile care se abonează la un plan plătit pentru clienți comerciali se aplică Termenii pentru clienți comerciali, publicați separat."),
    ],
    sections: [
      {
        heading: "§ 1 Domeniul de aplicare și părțile contractante", blocks: [
          p("(1) Prezenții Termeni pentru consumatori se aplică înregistrării și utilizării aplicației TapRadar de către persoane fizice care utilizează aplicația în scopuri private, nu în principal comerciale sau profesionale independente (consumatori în sensul § 1 alin. (1) pct. 2 din Legea austriacă privind protecția consumatorilor, KSchG)."),
          p("(2) Partea contractantă este TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, cod TVA ATU78882167, e-mail support@tapradar.app (denumită în continuare „TapRadar”, „noi”)."),
          p("(3) Utilizarea aplicației necesită o vârstă minimă de 14 ani. Persoanele cu vârsta cuprinsă între 14 și 18 ani confirmă, prin înregistrare, că acționează în limitele capacității lor juridice, respectiv că dețin consimțământul necesar al reprezentantului lor legal."),
          p("(4) Ne opunem oricăror condiții contrare sau care se abat de la prezenții termeni; acestea nu devin parte a contractului, cu excepția cazului în care TapRadar acceptă în mod expres, în scris, valabilitatea lor."),
        ],
      },
      {
        heading: "§ 2 Descrierea serviciilor – cele patru domenii funcționale", blocks: [
          p("TapRadar vă pune la dispoziție, prin intermediul aplicației, patru domenii funcționale centrale, utilizabile gratuit:"),
          p("2.1 Radar – Descoperiți: găsirea afacerilor partenere TapRadar locale pe o hartă, cu posibilități de filtrare după ofertă, cupon, recompensă, cel mai bine cotate și o rază de 500 de metri, precum și categorii precum cafenea, restaurant, frizerie sau piață. Pentru fiecare afacere parteneră se afișează programul de funcționare, recenziile și insigna de plan corespunzătoare."),
          p("2.2 Ștampilă – Colectați: colectarea de ștampile digitale prin atingerea unui punct NFC sau scanarea unui cod QR, afișarea progresului (de ex. 7 din 10 ștampile), valorificarea recompenselor precum o cafea gratuită sau o reducere, precum și obținerea de puncte pentru fiecare ștampilă colectată."),
          p("2.3 Carduri – portofel digital: stocarea cardurilor de client ale unor terți deja existente, de exemplu de la Billa, DM, H&M, Spar sau Hofer, prin salvarea unui cod de bare sau QR, pentru a le putea prezenta direct la casă în locul cardurilor din plastic. Mărcile menționate sunt exemple; TapRadar nu este afiliat acestor companii."),
          p("2.4 Home – profil și gamificare: un sistem de 20 de niveluri de la „Începător” la „Campion”, puncte pentru ștampile, recenzii și invitații de prieteni, un obiectiv săptămânal, un sistem de serii (șapte zile active consecutive declanșează un bonus), precum și posibilitatea de a invita prieteni și de a compara progresul într-un clasament."),
          p("Domeniul actual de funcții rezultă din aplicația însăși; TapRadar are dreptul de a adapta, completa sau elimina funcții individuale în cadrul dezvoltării continue, în măsura în care aceasta nu afectează în mod nerezonabil utilitatea principală a aplicației pentru dumneavoastră."),
          p("TapRadar nu furnizează ea însăși niciun bun sau serviciu al afacerilor partenere, în special nu produsele, reducerile sau recompensele promovate, și nu este parte la tranzacțiile încheiate între dumneavoastră și o afacere parteneră. Responsabilitatea pentru valorificarea efectivă a recompenselor revine exclusiv afacerii partenere respective."),
        ],
      },
      {
        heading: "§ 3 Înregistrare și încheierea contractului", blocks: [
          p("(1) Utilizarea TapRadar necesită înregistrarea unui cont de utilizator cu o adresă de e-mail și o parolă. Prin confirmarea adresei dumneavoastră de e-mail, respectiv prin prima utilizare, se încheie între dumneavoastră și TapRadar un contract de utilizare gratuit, supus prezenților Termeni pentru consumatori."),
          p("(2) Sunteți obligat să furnizați date reale la înregistrare și să vă protejați datele de acces împotriva accesului terților."),
        ],
      },
      {
        heading: "§ 4 Fără preț monetar – furnizarea de servicii digitale în schimbul datelor", blocks: [
          callout("Notificare conform Directivei privind conținutul digital (Directiva (UE) 2019/770)", "Chiar dacă nu plătiți niciun preț pentru utilizarea aplicației TapRadar, ne furnizați în schimb date cu caracter personal, în special date de localizare, utilizare și contact. Contractele privind serviciile digitale, în care consumatorul furnizează date cu caracter personal în locul unei plăți, intră sub incidența Directivei privind conținutul digital și a Legii austriece privind garanțiile pentru consumatori (VGG). Prin urmare, vă revin, în principiu, drepturile prevăzute acolo privind furnizarea conformă a serviciului digital, în măsura în care acestea nu sunt limitate în mod obiectiv de caracterul gratuit al aplicației."),
          p("TapRadar se străduiește să furnizeze aplicația în conformitate cu caracteristicile descrise la § 2, cu standardul obișnuit al aplicațiilor comparabile și ținând cont de declarațiile publice, precum și să o actualizeze în măsura prevăzută contractual."),
        ],
      },
      {
        heading: "§ 5 Drepturi de utilizare", blocks: [
          p("TapRadar vă acordă un drept simplu, netransferabil, personal de a utiliza aplicația în scopuri private, în conformitate cu prezenții Termeni pentru consumatori. Sublicențierea, revânzarea sau utilizarea comercială a contului dumneavoastră de utilizator nu sunt permise."),
        ],
      },
      {
        heading: "§ 6 Obligațiile dumneavoastră la utilizare", blocks: [
          p("(1) Vă angajați să nu utilizați platforma în mod abuziv. Manipularea ștampilelor, recompenselor, datelor de localizare sau a altor măsuri tehnice de protecție, de exemplu prin GPS fals, înregistrări multiple pentru a eluda limitările sau manipularea proceselor NFC sau QR, este interzisă. TapRadar are dreptul, în cazul unei suspiciuni întemeiate de o astfel de manipulare, să blocheze sau să șteargă ștampilele, recompensele sau conturile afectate."),
          p("(2) Recenziile trebuie să fie reale și bazate pe o vizită efectivă, verificată; recenziile ilegale, ofensatoare sau evident false pot fi eliminate de TapRadar. Sesizările privind conținut ilegal pot fi făcute oricând prin funcția de raportare din aplicație sau prin e-mail la support@tapradar.app; examinăm fiecare sesizare și vă comunicăm rezultatul."),
          p("(3) Pentru cardurile de client ale terților stocate în secțiunea Carduri, sunteți singurul responsabil pentru exactitatea datelor introduse și acceptarea acestora la casa respectivă; TapRadar nu oferă nicio garanție în această privință, întrucât este vorba despre date ale unor terți introduse de dumneavoastră și neverificate de TapRadar."),
        ],
      },
      {
        heading: "§ 7 Gamificare, niveluri, puncte și recompense", blocks: [
          p("(1) Nivelurile, punctele, seriile și pozițiile din clasament din secțiunea Home nu au valoare monetară, nu sunt tranzacționabile și nu pot fi schimbate în bani. Acestea servesc exclusiv la reprezentarea ludică a utilizării dumneavoastră."),
          p("(2) Recompensele valorificate prin carduri de fidelitate, de exemplu un produs gratuit sau o reducere, sunt acordate exclusiv de afacerea parteneră respectivă; nu există niciun drept față de TapRadar privind furnizarea, înlocuirea sau compensarea valorii unei recompense nevalorificate sau care nu mai este disponibilă."),
          p("(3) La ștergerea contului dumneavoastră, toate ștampilele, punctele, nivelurile, seriile și recompensele nevalorificate colectate se pierd fără compensație, cu condiția ca, la acel moment, să nu fi început deja un proces de valorificare."),
        ],
      },
      {
        heading: "§ 8 Permisiuni de localizare și push", blocks: [
          p("Utilizarea funcțiilor Radar și Ștampilă, precum și primirea notificărilor push, necesită permisiuni corespunzătoare, revocabile în orice moment, în setările dispozitivului dumneavoastră. Pentru detalii privind prelucrarea datelor de localizare și push, consultați politica de confidențialitate de la www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Disponibilitate și modificări", blocks: [
          p("TapRadar depune eforturi pentru a asigura o disponibilitate ridicată a aplicației, dar nu poate garanta o disponibilitate neîntreruptă. Lucrările de întreținere, defecțiunile tehnice sau dezvoltarea continuă pot duce la restricții temporare. Modificările substanțiale și dezavantajoase pentru dumneavoastră ale funcțiilor de bază vă vor fi anunțate în aplicație cu un preaviz rezonabil."),
        ],
      },
      {
        heading: "§ 10 Reziliere și ștergerea contului", blocks: [
          p("Puteți solicita ștergerea contului dumneavoastră de utilizator oricând, gratuit și fără a preciza motive, prin setările aplicației sau prin e-mail la support@tapradar.app; contractul se încheie la momentul intrării în vigoare a ștergerii. TapRadar poate rezilia contractul pentru motive întemeiate, în special în cazul unor încălcări semnificative ale § 6, cu un preaviz rezonabil."),
        ],
      },
      {
        heading: "§ 11 Răspundere", blocks: [
          p("(1) TapRadar răspunde fără limitare pentru daunele rezultate din vătămarea vieții, corpului sau sănătății, precum și pentru daunele bazate pe intenție sau neglijență gravă, precum și conform dispozițiilor imperative ale Legii privind răspunderea pentru produse."),
          p("(2) Pentru daunele cauzate din neglijență ușoară, TapRadar răspunde doar în cazul încălcării unor obligații contractuale esențiale a căror îndeplinire face posibilă în primul rând utilizarea corespunzătoare a aplicației; în acest caz, răspunderea este limitată la daunele previzibile în mod tipic pentru acest tip de contract. Dispozițiile imperative ale Legii austriece privind protecția consumatorilor nu sunt afectate de această limitare."),
          p("(3) TapRadar nu răspunde pentru conținutul, ofertele, recompensele sau acțiunile afacerilor partenere, nici pentru exactitatea recenziilor altor utilizatori sau a cardurilor terților stocate de dumneavoastră în secțiunea Carduri."),
        ],
      },
      {
        heading: "§ 12 Dreptul de retragere", blocks: [
          p("Chiar dacă aplicația este gratuită, în calitate de consumator vă poate reveni, în anumite condiții, un drept legal de retragere privind contractul de înregistrare încheiat la distanță. Pentru detalii, consultați Notificarea de retragere pentru consumatori, furnizată separat, la www.tapradar.app/widerrufsbelehrung. Deoarece vă puteți șterge oricum contul gratuit și fără a preciza motive, în orice moment, conform § 10, exercitarea dreptului de retragere nu are, de regulă, niciun efect practic suplimentar pentru dumneavoastră, dar continuă să existe din punct de vedere juridic independent de aceasta."),
        ],
      },
      {
        heading: "§ 13 Soluționarea litigiilor", blocks: [
          p("Comisia Europeană pune la dispoziție o platformă de soluționare online a litigiilor (platforma SOL), accesibilă la https://ec.europa.eu/consumers/odr. TapRadar nu este obligată și nici dispusă să participe la o procedură de soluționare a litigiilor în fața unui organism de arbitraj pentru consumatori, cu excepția cazului în care legea prevede altfel."),
        ],
      },
      {
        heading: "§ 14 Modificarea prezenților Termeni pentru consumatori", blocks: [
          p("TapRadar are dreptul de a modifica prezenții Termeni pentru consumatori cu efect pentru viitor, în măsura în care acest lucru este necesar pentru a se adapta la situația juridică modificată, la evoluțiile tehnice sau la funcțiile modificate ale aplicației, și cu condiția ca dumneavoastră să nu fiți dezavantajat în mod nerezonabil. Veți fi informat cu privire la modificările substanțiale cu cel puțin 30 de zile înainte de intrarea lor în vigoare, în aplicație sau prin e-mail; dacă nu vă opuneți până la intrarea în vigoare, termenii modificați sunt considerați acceptați, aspect asupra căruia vă vom atrage atenția separat în comunicare. Puteți să vă opuneți modificării în orice moment prin ștergerea contului dumneavoastră conform § 10, fără a suporta costuri."),
        ],
      },
      {
        heading: "§ 15 Dispoziții finale", blocks: [
          p("(1) Se aplică legislația austriacă, cu excluderea Convenției ONU privind contractele de vânzare internațională de mărfuri (CISG). Dacă aveți reședința obișnuită într-un alt stat membru UE, protecția pe care v-o oferă dispozițiile imperative de protecție a consumatorilor din acel stat rămâne neafectată."),
          p("(2) Dispozițiile imperative privind competența jurisdicțională în favoarea consumatorilor, în special conform Regulamentului (UE) nr. 1215/2012 (Regulamentul Bruxelles I bis), rămân neafectate de prezenta dispoziție; puteți, în special, să acționați în judecată TapRadar la instanța de la domiciliul dumneavoastră, în măsura în care acest lucru este prevăzut cu caracter imperativ."),
          p("(3) Dacă anumite dispoziții ale prezenților Termeni pentru consumatori sunt sau devin invalide, valabilitatea celorlalte dispoziții nu este afectată."),
        ],
      },
    ],
    sourcesHeading: "Listă de surse",
    sourcesIntro: "Surse oficiale UE și austriece pe care se bazează prezenții Termeni pentru consumatori:",
    sources: [
      { label: "Directiva privind drepturile consumatorilor, Directiva 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Directiva privind conținutul digital, Directiva (UE) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Legea austriacă privind contractele la distanță și în afara spațiilor comerciale (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Legea privind serviciile digitale, Regulamentul (UE) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
  bg: {
    title: "Условия за потребители",
    subtitle: "Общи условия за приложението TapRadar (крайни клиенти) – TOY GmbH",
    stand: "Актуализирано на: 9 август 2026 г. · Версия 2026-08-09.2",
    intro: [
      p("Настоящите общи условия („Условия за потребители“) уреждат договорното отношение между TOY GmbH и физическите лица, които използват безплатното приложение TapRadar като крайни клиенти. За предприятия, които се абонират за платен план за бизнес клиенти, важат отделно публикуваните Условия за бизнес клиенти."),
    ],
    sections: [
      {
        heading: "§ 1 Обхват и договарящи страни", blocks: [
          p("(1) Настоящите Условия за потребители се прилагат за регистрацията и използването на приложението TapRadar от физически лица, които използват приложението за лични, непреобладаващо търговски или самостоятелни професионални цели (потребители по смисъла на § 1, ал. 1, т. 2 от австрийския Закон за защита на потребителите, KSchG)."),
          p("(2) Договаряща страна е TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Австрия, ДДС номер ATU78882167, имейл support@tapradar.app (наричана по-долу „TapRadar“, „ние“)."),
          p("(3) Използването на приложението изисква минимална възраст от 14 години. Лицата на възраст между 14 и 18 години потвърждават с регистрацията, че действат в рамките на своята дееспособност, респ. че разполагат с необходимото съгласие на своя законен представител."),
          p("(4) Отхвърляме противоречащи или отклоняващи се от настоящите условия условия; те не стават част от договора, освен ако TapRadar изрично писмено не приеме тяхната валидност."),
        ],
      },
      {
        heading: "§ 2 Описание на услугите – четирите функционални области", blocks: [
          p("TapRadar Ви предоставя чрез приложението четири централни, безплатно достъпни функционални области:"),
          p("2.1 Радар – Открийте: намиране на местни партньорски обекти на TapRadar на карта, с възможности за филтриране по акция, купон, награда, най-добре оценени и радиус от 500 метра, както и категории като кафене, ресторант, фризьорски салон или пазар. За всеки партньорски обект се показват работно време, отзиви и съответната значка за план."),
          p("2.2 Печат – Събирайте: събиране на цифрови печати чрез докосване на NFC точка или сканиране на QR код, показване на напредъка (напр. 7 от 10 печата), осребряване на награди като безплатно кафе или отстъпка, както и получаване на точки за всеки събран печат."),
          p("2.3 Карти – цифров портфейл: съхраняване на вече съществуващи клиентски карти на трети страни, например на Billa, DM, H&M, Spar или Hofer, чрез запазване на баркод или QR код, за да могат да се показват директно на касата вместо пластмасови карти. Посочените марки са примери; TapRadar не е свързан с тези компании."),
          p("2.4 Home – профил и геймификация: система от 20 нива от „Начинаещ“ до „Шампион“, точки за печати, отзиви и покани на приятели, седмична цел, система на серии (седем последователни активни дни задействат бонус), както и възможност за каниене на приятели и сравняване на напредъка в класация."),
          p("Актуалният обхват на функциите произтича от самото приложение; TapRadar има право в рамките на по-нататъшното развитие да адаптира, допълва или премахва отделни функции, доколкото по този начин не се засяга непропорционално основната полза от приложението за Вас."),
          p("TapRadar сам по себе си не предоставя стоки или услуги на партньорските обекти, по-специално не рекламираните продукти, отстъпки или награди, и не е страна по сделките, сключвани между Вас и партньорски обект. Отговорността за действителното осребряване на наградите е изключително на съответния партньорски обект."),
        ],
      },
      {
        heading: "§ 3 Регистрация и сключване на договора", blocks: [
          p("(1) Използването на TapRadar изисква регистрация на потребителски акаунт с имейл адрес и парола. С потвърждаването на Вашия имейл адрес, респ. с първото използване, между Вас и TapRadar се сключва безплатен договор за използване, подчинен на настоящите Условия за потребители."),
          p("(2) Задължени сте при регистрацията да посочите достоверни данни и да защитите своите данни за достъп от достъп на трети страни."),
        ],
      },
      {
        heading: "§ 4 Без парична цена – предоставяне на цифрови услуги срещу данни", blocks: [
          callout("Указание съгласно Директивата относно цифровото съдържание (Директива (ЕС) 2019/770)", "Въпреки че не плащате цена за използването на приложението TapRadar, Вие ни предоставяте в замяна лични данни, по-специално данни за местоположение, използване и контакт. Договорите за цифрови услуги, при които потребителят предоставя лични данни вместо плащане, попадат в обхвата на Директивата относно цифровото съдържание и австрийския Закон за потребителските гаранции (VGG). Следователно по принцип Ви се полагат предвидените там права относно предоставянето на цифровата услуга в съответствие с договора, доколкото те не са обективно ограничени от безплатния характер на приложението."),
          p("TapRadar се стреми да предоставя приложението в съответствие с описаните в § 2 характеристики, обичайния стандарт на сравними приложения и като взема предвид публичните изявления, както и да го актуализира в предвидения по договора обхват."),
        ],
      },
      {
        heading: "§ 5 Права на използване", blocks: [
          p("TapRadar Ви предоставя обикновено, непрехвърляемо, лично право да използвате приложението за лична употреба съгласно настоящите Условия за потребители. Предоставянето на подлицензи, препродажбата или търговското използване на Вашия потребителски акаунт не са разрешени."),
        ],
      },
      {
        heading: "§ 6 Вашите задължения при използване", blocks: [
          p("(1) Задължавате се да не използвате платформата по злоупотребяващ начин. Манипулирането на печати, награди, данни за местоположение или други технически защитни мерки, например чрез фалшиво GPS, множество регистрации с цел заобикаляне на ограничения или манипулиране на NFC или QR процеси, е забранено. TapRadar има право, при обосновано подозрение за такава манипулация, да блокира или изтрие засегнатите печати, награди или акаунти."),
          p("(2) Отзивите трябва да са достоверни и основани на действително, проверено посещение; незаконосъобразни, обидни или очевидно неверни отзиви могат да бъдат премахнати от TapRadar. Сигнали за незаконосъобразно съдържание могат да бъдат подавани по всяко време чрез функцията за докладване в приложението или по имейл на support@tapradar.app; разглеждаме всеки сигнал и Ви съобщаваме резултата."),
          p("(3) За клиентските карти на трети страни, съхранени в областта Карти, единствено Вие носите отговорност за точността на въведените данни и тяхното приемане на съответната каса; TapRadar не поема никаква гаранция в това отношение, тъй като става дума за данни на трети страни, въведени лично от Вас и непроверени от TapRadar."),
        ],
      },
      {
        heading: "§ 7 Геймификация, нива, точки и награди", blocks: [
          p("(1) Нивата, точките, сериите и позициите в класацията в областта Home нямат парична стойност, не подлежат на търгуване и не могат да бъдат разменени за пари. Те служат единствено за игрово представяне на Вашето използване."),
          p("(2) Наградите, осребрени чрез карти за лоялност, например безплатен продукт или отстъпка, се предоставят изключително от съответния партньорски обект; не съществува претенция към TapRadar за предоставяне, замяна или компенсация на стойността на неосребрена или вече недостъпна награда."),
          p("(3) При изтриване на Вашия акаунт всички събрани печати, точки, нива, серии и все още неосребрени награди отпадат без компенсация, доколкото в този момент вече не е започнал процес на осребряване."),
        ],
      },
      {
        heading: "§ 8 Разрешения за местоположение и push известия", blocks: [
          p("Използването на функциите Радар и Печат, както и получаването на push известия, изисква съответните, отменими по всяко време разрешения в настройките на Вашето устройство. Подробности относно обработката на данни за местоположение и push данни ще намерите в политиката за поверителност на www.tapradar.app/datenschutz."),
        ],
      },
      {
        heading: "§ 9 Наличност и промени", blocks: [
          p("TapRadar се стреми да осигури висока наличност на приложението, но не може да гарантира непрекъсната наличност. Работи по поддръжка, технически повреди или по-нататъшно развитие могат да доведат до временни ограничения. За съществени, неблагоприятни за Вас промени в основните функции ще бъдете уведомени своевременно предварително в приложението."),
        ],
      },
      {
        heading: "§ 10 Прекратяване и изтриване на акаунт", blocks: [
          p("Можете по всяко време, безплатно и без посочване на причини, да заявите изтриване на Вашия потребителски акаунт чрез настройките на приложението или по имейл на support@tapradar.app; договорът приключва с влизането в сила на изтриването. TapRadar може да прекрати договора по важна причина, по-специално при съществени нарушения на § 6, с разумно предизвестие."),
        ],
      },
      {
        heading: "§ 11 Отговорност", blocks: [
          p("(1) TapRadar носи неограничена отговорност за вреди, произтичащи от нарушение на живота, тялото или здравето, както и за вреди, основани на умисъл или груба небрежност, и съгласно императивните разпоредби на Закона за отговорност за продукти."),
          p("(2) За вреди, причинени от лека небрежност, TapRadar носи отговорност само при нарушение на съществени договорни задължения, чието изпълнение изобщо прави възможно надлежното използване на приложението; в този случай отговорността е ограничена до типично предвидимата за този вид договор вреда. Императивните разпоредби на австрийския Закон за защита на потребителите не се засягат от това ограничение."),
          p("(3) TapRadar не носи отговорност за съдържанието, офертите, наградите или действията на партньорските обекти, нито за точността на отзивите на други потребители или на картите на трети страни, съхранени от Вас в областта Карти."),
        ],
      },
      {
        heading: "§ 12 Право на отказ", blocks: [
          p("Въпреки че приложението е безплатно, като потребител може при определени условия да Ви се полага законно право на отказ във връзка с договора за регистрация, сключен от разстояние. Подробности ще намерите в отделно предоставеното Указание за отказ за потребители на www.tapradar.app/widerrufsbelehrung. Тъй като и без това можете по всяко време безплатно и без посочване на причини да изтриете акаунта си съгласно § 10, упражняването на правото на отказ по правило няма допълнително практическо значение за Вас, но правно продължава да съществува независимо от това."),
        ],
      },
      {
        heading: "§ 13 Разрешаване на спорове", blocks: [
          p("Европейската комисия предоставя платформа за онлайн разрешаване на спорове (платформа ОРС), достъпна на https://ec.europa.eu/consumers/odr. TapRadar не е нито задължен, нито готов да участва в процедура за разрешаване на спорове пред орган за извънсъдебно уреждане на потребителски спорове, освен ако законът не предвижда друго."),
        ],
      },
      {
        heading: "§ 14 Промяна на настоящите Условия за потребители", blocks: [
          p("TapRadar има право да променя настоящите Условия за потребители с действие занапред, доколкото това е необходимо за адаптиране към променена правна ситуация, технологично развитие или променени функции на приложението, и доколкото по този начин не сте непропорционално ощетени. Ще бъдете информирани за съществени промени най-малко 30 дни преди влизането им в сила, в приложението или по имейл; ако не възразите до влизането им в сила, променените условия се считат за приети, за което ще Ви обърнем специално внимание в уведомлението. Можете по всяко време да възразите срещу промяната, като изтриете акаунта си съгласно § 10, без да Ви бъдат начислени каквито и да било разходи."),
        ],
      },
      {
        heading: "§ 15 Заключителни разпоредби", blocks: [
          p("(1) Прилага се австрийското право, с изключение на Конвенцията на ООН относно договорите за международна продажба на стоки (CISG). Ако имате обичайно местопребиваване в друга държава членка на ЕС, защитата, която Ви предоставят императивните разпоредби за защита на потребителите на тази държава, остава незасегната."),
          p("(2) Императивните разпоредби относно съдебната компетентност в полза на потребителите, по-специално съгласно Регламент (ЕС) № 1215/2012 (Регламент Брюксел Ia), остават незасегнати от настоящата разпоредба; по-специално можете да предявите иск срещу TapRadar пред съда по Вашето местожителство, доколкото това е императивно предвидено."),
          p("(3) Ако отделни разпоредби на настоящите Условия за потребители са или станат невалидни, това не засяга валидността на останалите разпоредби."),
        ],
      },
    ],
    sourcesHeading: "Списък на източниците",
    sourcesIntro: "Официални източници на ЕС и Австрия, на които се основават настоящите Условия за потребители:",
    sources: [
      { label: "Директива относно правата на потребителите, Директива 2011/83/ЕС", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Директива относно цифровото съдържание, Директива (ЕС) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Австрийски закон за договорите от разстояние и извън търговския обект (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
      { label: "Акт за цифровите услуги, Регламент (ЕС) 2022/2065", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" },
    ],
  },
};
