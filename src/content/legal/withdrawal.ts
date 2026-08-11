import type { Locale } from "@/i18n/config";
import { callout, list, p, type LegalDocument } from "./types";

export const withdrawalContent: { de: LegalDocument } & Partial<Record<Locale, LegalDocument>> = {
  de: {
    title: "Verbraucher-Widerrufsbelehrung",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Stand: 9. August 2026 · Version 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Anwendungsbereich", blocks: [
          p("Diese Widerrufsbelehrung informiert Verbraucherinnen und Verbraucher im Sinne des § 1 Abs. 1 Z 2 Konsumentenschutzgesetz (KSchG) über ihr gesetzliches Widerrufsrecht bei im Fernabsatz mit der TOY GmbH geschlossenen Verträgen. Sie gilt für zwei Vertragsarten:"),
          list([
            "kostenpflichtige TapRadar-Geschäftskunden-Tarife (Bronze, Gold oder Platinum), sofern der Vertragspartner ausnahmsweise als Verbraucher oder als Existenzgründer im Sinne des § 1 Abs. 3 KSchG gilt, und",
            "die Registrierung eines kostenlosen Endkunden-Kontos in der TapRadar-App, da Sie uns hierbei anstelle einer Zahlung personenbezogene Daten (insbesondere E-Mail-Adresse, Nutzungs- und Standortdaten) bereitstellen und derartige Verträge nach der durch die Omnibus-Richtlinie geänderten Verbraucherrechte-Richtlinie und dem österreichischen FAGG in den Anwendungsbereich des Widerrufsrechts fallen.",
          ]),
          callout("Praktischer Hinweis", "Ihr TapRadar-Endkundenkonto können Sie ohnehin jederzeit kostenfrei und ohne Angabe von Gründen über die App-Einstellungen löschen (siehe Verbraucher-AGB). Die Ausübung des nachfolgenden Widerrufsrechts hat für die kostenlose App-Registrierung daher in der Regel keine zusätzliche praktische Wirkung, besteht rechtlich aber unabhängig davon und unbeschadet dessen fort."),
          p("Für Verträge, die ausschließlich im Rahmen einer bereits ausgeübten gewerblichen oder selbständigen beruflichen Tätigkeit abgeschlossen werden, besteht das gesetzliche Verbraucher-Widerrufsrecht grundsätzlich nicht."),
        ],
      },
      {
        heading: "2. Widerrufsrecht", blocks: [
          p("Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen."),
          p("Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses."),
          p("Um Ihr Widerrufsrecht auszuüben, müssen Sie uns"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Österreich", "E-Mail: support@tapradar.app"]),
          p("mittels einer eindeutigen Erklärung, zum Beispiel ein mit der Post versandter Brief oder eine E-Mail, über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das nachfolgende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist."),
          p("Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden."),
        ],
      },
      {
        heading: "3. Folgen des Widerrufs", blocks: [
          p("Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Bei der kostenlosen App-Registrierung entfällt eine Rückzahlung mangels geleisteter Zahlung."),
          p("Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht (Wertersatz). Dieser Wertersatz kommt ausschließlich bei kostenpflichtigen Tarifen in Betracht; bei der unentgeltlichen App-Nutzung entsteht kein Wertersatzanspruch, da keine Zahlung im Sinne des § 15 FAGG erbracht wird."),
        ],
      },
      {
        heading: "4. Vorzeitiges Erlöschen des Widerrufsrechts", blocks: [
          p("Haben Sie ausdrücklich zugestimmt, dass wir mit der Ausführung der Dienstleistung bereits vor Ablauf der Widerrufsfrist beginnen, und haben Sie Ihre Kenntnis davon bestätigt, dass Sie durch diese Zustimmung Ihr Widerrufsrecht verlieren, sobald wir den Vertrag vollständig erfüllt haben, so erlischt Ihr Widerrufsrecht mit vollständiger Erbringung der Dienstleistung gemäß § 18 Abs. 1 Z 10 FAGG."),
        ],
      },
      {
        heading: "5. Muster-Widerrufsformular", blocks: [
          p("Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es an support@tapradar.app oder postalisch an die unten genannte Anschrift."),
          p("An die TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Österreich, E-Mail: support@tapradar.app:"),
          p("Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung folgender Dienstleistung:"),
          list([
            "☐ Kostenloses TapRadar-Endkundenkonto",
            "☐ TapRadar-Geschäftskunden-Tarif: ______________________ (Bronze / Gold / Platinum – Zutreffendes angeben)",
          ]),
          list([
            "Bestellt am: ______________________",
            "Name des/der Verbraucher(s): ______________________",
            "Anschrift des/der Verbraucher(s): ______________________",
            "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): ______________________",
            "Datum: ______________________",
          ]),
          p("(*) Unzutreffendes streichen."),
        ],
      },
    ],
    sourcesHeading: "Quellenverzeichnis",
    sourcesIntro: "Amtliche EU- und österreichische Fundstellen, die dieser Widerrufsbelehrung zugrunde liegen:",
    sources: [
      { label: "Verbraucherrechte-Richtlinie, Richtlinie 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Digitale-Inhalte-Richtlinie, Richtlinie (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Österreichisches Fern- und Auswärtsgeschäfte-Gesetz (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  fr: {
    title: "Notice de rétractation pour consommateurs",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Mise à jour : 9 août 2026 · Version 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Champ d'application", blocks: [
          p("Cette notice de rétractation informe les consommateurs au sens du § 1, al. 1, point 2, de la loi autrichienne sur la protection des consommateurs (KSchG) de leur droit légal de rétractation concernant les contrats conclus à distance avec TOY GmbH. Elle s'applique à deux types de contrats :"),
          list([
            "les formules TapRadar payantes pour clients professionnels (Bronze, Gold ou Platinum), lorsque le cocontractant est exceptionnellement considéré comme un consommateur ou comme un créateur d'entreprise au sens du § 1, al. 3, KSchG, et",
            "l'inscription d'un compte gratuit pour clients finaux dans l'application TapRadar, car vous nous fournissez à cette occasion, au lieu d'un paiement, des données personnelles (notamment votre adresse e-mail, des données d'utilisation et de localisation), et de tels contrats relèvent du champ d'application du droit de rétractation en vertu de la directive relative aux droits des consommateurs, telle que modifiée par la directive Omnibus, et de la loi autrichienne sur les contrats à distance et hors établissement (FAGG).",
          ]),
          callout("Remarque pratique", "Vous pouvez de toute façon supprimer votre compte client final TapRadar à tout moment, gratuitement et sans indication de motif, via les paramètres de l'application (voir les Conditions Consommateurs). L'exercice du droit de rétractation ci-après n'a donc généralement aucun effet pratique supplémentaire pour l'inscription gratuite à l'application, mais continue d'exister juridiquement de manière indépendante et sans préjudice de cette possibilité."),
          p("Pour les contrats conclus exclusivement dans le cadre d'une activité commerciale ou professionnelle indépendante déjà exercée, le droit de rétractation légal des consommateurs n'existe en principe pas."),
        ],
      },
      {
        heading: "2. Droit de rétractation", blocks: [
          p("Vous avez le droit de vous rétracter du présent contrat sans donner de motif dans un délai de quatorze jours."),
          p("Le délai de rétractation expire quatorze jours après le jour de la conclusion du contrat."),
          p("Pour exercer votre droit de rétractation, vous devez nous notifier,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Autriche", "E-mail : support@tapradar.app"]),
          p("au moyen d'une déclaration dénuée d'ambiguïté, par exemple une lettre envoyée par la poste ou un e-mail, votre décision de vous rétracter du présent contrat. Vous pouvez utiliser le modèle de formulaire de rétractation ci-dessous, sans que cela ne soit obligatoire."),
          p("Pour respecter le délai de rétractation, il suffit que vous envoyiez votre communication relative à l'exercice du droit de rétractation avant l'expiration du délai de rétractation."),
        ],
      },
      {
        heading: "3. Effets de la rétractation", blocks: [
          p("En cas de rétractation de votre part du présent contrat, nous vous rembourserons tous les paiements reçus de vous, sans délai et au plus tard dans les quatorze jours à compter du jour où nous sommes informés de votre décision de rétractation du présent contrat. Nous procéderons à ce remboursement en utilisant le même moyen de paiement que celui que vous avez utilisé pour la transaction initiale, sauf si vous avez expressément convenu d'un moyen différent avec nous ; en tout état de cause, ce remboursement ne vous occasionnera aucun frais. Pour l'inscription gratuite à l'application, aucun remboursement n'intervient, faute de paiement effectué."),
          p("Si vous avez demandé que la prestation de service commence pendant le délai de rétractation, vous devrez nous payer un montant proportionnel à ce qui vous a été fourni jusqu'au moment où vous nous avez informés de votre rétractation du présent contrat, par rapport à l'ensemble des prestations prévues au contrat (indemnité compensatoire). Cette indemnité compensatoire n'entre en jeu que pour les formules payantes ; pour l'utilisation gratuite de l'application, aucune indemnité compensatoire n'est due, aucun paiement au sens du § 15 FAGG n'étant effectué."),
        ],
      },
      {
        heading: "4. Extinction anticipée du droit de rétractation", blocks: [
          p("Si vous avez expressément consenti à ce que nous commencions l'exécution de la prestation de service avant l'expiration du délai de rétractation, et que vous avez confirmé avoir connaissance du fait que, par ce consentement, vous perdez votre droit de rétractation dès que nous aurons entièrement exécuté le contrat, votre droit de rétractation s'éteint dès l'exécution complète de la prestation de service conformément au § 18, al. 1, point 10, FAGG."),
        ],
      },
      {
        heading: "5. Modèle de formulaire de rétractation", blocks: [
          p("Si vous souhaitez vous rétracter du contrat, veuillez remplir ce formulaire et l'envoyer à support@tapradar.app ou par voie postale à l'adresse indiquée ci-dessous."),
          p("À l'attention de TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Autriche, e-mail : support@tapradar.app :"),
          p("Je/nous (*) vous notifie/notifions par la présente ma/notre (*) rétractation du contrat portant sur la fourniture de la prestation suivante :"),
          list([
            "☐ Compte client final TapRadar gratuit",
            "☐ Formule TapRadar pour clients professionnels : ______________________ (Bronze / Gold / Platinum – veuillez préciser)",
          ]),
          list([
            "Commandé le : ______________________",
            "Nom du/des consommateur(s) : ______________________",
            "Adresse du/des consommateur(s) : ______________________",
            "Signature du/des consommateur(s) (uniquement en cas de notification sur papier) : ______________________",
            "Date : ______________________",
          ]),
          p("(*) Rayer la mention inutile."),
        ],
      },
    ],
    sourcesHeading: "Sources",
    sourcesIntro: "Sources officielles de l'UE et autrichiennes sur lesquelles repose la présente notice de rétractation :",
    sources: [
      { label: "Directive relative aux droits des consommateurs, directive 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Directive relative aux contenus numériques, directive (UE) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Loi autrichienne sur les contrats à distance et hors établissement (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  it: {
    title: "Informativa sul recesso per consumatori",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Aggiornamento: 9 agosto 2026 · Versione 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Ambito di applicazione", blocks: [
          p("La presente informativa sul recesso informa i consumatori ai sensi del § 1, comma 1, punto 2, della legge austriaca sulla tutela dei consumatori (KSchG) del loro diritto legale di recesso in relazione ai contratti conclusi a distanza con TOY GmbH. Si applica a due tipi di contratto:"),
          list([
            "i piani TapRadar a pagamento per clienti commerciali (Bronze, Gold o Platinum), qualora la controparte contrattuale sia eccezionalmente considerata un consumatore o un nuovo imprenditore ai sensi del § 1, comma 3, KSchG, e",
            "la registrazione di un account gratuito per clienti finali nell'app TapRadar, poiché in tale occasione ci fornisci, anziché un pagamento, dati personali (in particolare indirizzo e-mail, dati di utilizzo e di localizzazione), e tali contratti rientrano nell'ambito di applicazione del diritto di recesso ai sensi della direttiva sui diritti dei consumatori, come modificata dalla direttiva Omnibus, e della legge austriaca sui contratti a distanza e fuori dei locali commerciali (FAGG).",
          ]),
          callout("Nota pratica", "Puoi comunque cancellare il tuo account cliente finale TapRadar in qualsiasi momento, gratuitamente e senza indicazione di motivi, tramite le impostazioni dell'app (vedi Condizioni per Consumatori). L'esercizio del diritto di recesso di seguito descritto non ha quindi, di norma, alcun ulteriore effetto pratico per la registrazione gratuita all'app, ma continua a sussistere giuridicamente in modo indipendente e impregiudicato rispetto a tale possibilità."),
          p("Per i contratti conclusi esclusivamente nell'ambito di un'attività commerciale o professionale autonoma già esercitata, il diritto di recesso legale dei consumatori non sussiste in linea di principio."),
        ],
      },
      {
        heading: "2. Diritto di recesso", blocks: [
          p("Hai il diritto di recedere dal presente contratto entro quattordici giorni senza indicarne le ragioni."),
          p("Il periodo di recesso è di quattordici giorni dal giorno della conclusione del contratto."),
          p("Per esercitare il diritto di recesso, devi informarci,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austria", "E-mail: support@tapradar.app"]),
          p("della tua decisione di recedere dal presente contratto tramite una dichiarazione esplicita (ad esempio lettera inviata per posta o e-mail). Puoi utilizzare il modulo di recesso tipo riportato di seguito, sebbene non sia obbligatorio."),
          p("Per rispettare il termine di recesso, è sufficiente che tu invii la comunicazione relativa all'esercizio del diritto di recesso prima della scadenza del periodo di recesso."),
        ],
      },
      {
        heading: "3. Effetti del recesso", blocks: [
          p("Se receda dal presente contratto, ti rimborseremo tutti i pagamenti che abbiamo ricevuto da te, senza indugio e in ogni caso entro quattordici giorni dal giorno in cui riceviamo la comunicazione del tuo recesso dal presente contratto. Per tale rimborso utilizzeremo lo stesso mezzo di pagamento da te utilizzato per la transazione iniziale, salvo che sia stato espressamente concordato altrimenti con te; in nessun caso ti saranno addebitati costi per tale rimborso. Per la registrazione gratuita all'app, non è previsto alcun rimborso in assenza di un pagamento effettuato."),
          p("Se hai richiesto che la prestazione del servizio abbia inizio durante il periodo di recesso, dovrai versarci un importo proporzionale a quanto già fornito fino al momento in cui ci comunichi l'esercizio del diritto di recesso rispetto al presente contratto, in rapporto al volume complessivo delle prestazioni previste dal contratto (indennità di valore). Tale indennità di valore si applica esclusivamente ai piani a pagamento; per l'utilizzo gratuito dell'app non sorge alcun diritto a indennità di valore, non essendo effettuato alcun pagamento ai sensi del § 15 FAGG."),
        ],
      },
      {
        heading: "4. Estinzione anticipata del diritto di recesso", blocks: [
          p("Se hai espressamente acconsentito a che iniziassimo l'esecuzione della prestazione del servizio prima della scadenza del periodo di recesso, e hai confermato di essere a conoscenza del fatto che, con tale consenso, perdi il tuo diritto di recesso non appena avremo eseguito integralmente il contratto, il tuo diritto di recesso si estingue con la completa esecuzione della prestazione del servizio ai sensi del § 18, comma 1, punto 10, FAGG."),
        ],
      },
      {
        heading: "5. Modulo di recesso tipo", blocks: [
          p("Se desideri recedere dal contratto, ti preghiamo di compilare questo modulo e di inviarlo a support@tapradar.app oppure per posta all'indirizzo indicato di seguito."),
          p("A TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, e-mail: support@tapradar.app:"),
          p("Con la presente il/la sottoscritto/a (*) recede dal contratto da me/noi (*) concluso avente ad oggetto la fornitura del seguente servizio:"),
          list([
            "☐ Account cliente finale TapRadar gratuito",
            "☐ Piano TapRadar per clienti commerciali: ______________________ (Bronze / Gold / Platinum – indicare quale)",
          ]),
          list([
            "Ordinato il: ______________________",
            "Nome del/dei consumatore/i: ______________________",
            "Indirizzo del/dei consumatore/i: ______________________",
            "Firma del/dei consumatore/i (solo in caso di comunicazione cartacea): ______________________",
            "Data: ______________________",
          ]),
          p("(*) Cancellare la dicitura che non interessa."),
        ],
      },
    ],
    sourcesHeading: "Fonti",
    sourcesIntro: "Fonti ufficiali dell'UE e austriache alla base della presente informativa sul recesso:",
    sources: [
      { label: "Direttiva sui diritti dei consumatori, Direttiva 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Direttiva sui contenuti digitali, Direttiva (UE) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Legge austriaca sui contratti a distanza e fuori dei locali commerciali (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  es: {
    title: "Información de desistimiento para consumidores",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Actualizado: 9 de agosto de 2026 · Versión 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Ámbito de aplicación", blocks: [
          p("Esta información de desistimiento informa a los consumidores en el sentido del § 1, apartado 1, punto 2, de la Ley austriaca de protección de los consumidores (KSchG) sobre su derecho legal de desistimiento en relación con los contratos celebrados a distancia con TOY GmbH. Se aplica a dos tipos de contrato:"),
          list([
            "los planes TapRadar de pago para clientes comerciales (Bronze, Gold o Platinum), cuando la contraparte contractual se considere excepcionalmente consumidor o nuevo emprendedor en el sentido del § 1, apartado 3, KSchG, y",
            "el registro de una cuenta gratuita de cliente final en la aplicación TapRadar, ya que en este caso nos proporciona, en lugar de un pago, datos personales (en particular su dirección de correo electrónico y datos de uso y de ubicación), y dichos contratos están comprendidos en el ámbito de aplicación del derecho de desistimiento conforme a la Directiva sobre los derechos de los consumidores, modificada por la Directiva Ómnibus, y la ley austriaca sobre contratos a distancia y celebrados fuera del establecimiento (FAGG).",
          ]),
          callout("Nota práctica", "En cualquier caso, puede eliminar su cuenta de cliente final de TapRadar en cualquier momento, de forma gratuita y sin indicar motivos, a través de los ajustes de la aplicación (véanse las Condiciones para Consumidores). Por tanto, el ejercicio del siguiente derecho de desistimiento no tiene, por regla general, ningún efecto práctico adicional para el registro gratuito en la aplicación, pero sigue existiendo jurídicamente de forma independiente y sin perjuicio de dicha posibilidad."),
          p("Para los contratos celebrados exclusivamente en el marco de una actividad comercial o profesional independiente ya ejercida, el derecho de desistimiento legal del consumidor no existe en principio."),
        ],
      },
      {
        heading: "2. Derecho de desistimiento", blocks: [
          p("Tiene usted derecho a desistir del presente contrato en un plazo de catorce días sin necesidad de justificación."),
          p("El plazo de desistimiento expirará a los catorce días del día de la celebración del contrato."),
          p("Para ejercer el derecho de desistimiento, deberá informarnos,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austria", "Correo electrónico: support@tapradar.app"]),
          p("mediante una declaración inequívoca, por ejemplo una carta enviada por correo postal o un correo electrónico, de su decisión de desistir del presente contrato. Podrá utilizar el modelo de formulario de desistimiento que figura a continuación, aunque no es obligatorio."),
          p("Para cumplir el plazo de desistimiento, basta con que envíe la comunicación relativa al ejercicio del derecho de desistimiento antes de que finalice el plazo de desistimiento."),
        ],
      },
      {
        heading: "3. Consecuencias del desistimiento", blocks: [
          p("En caso de que desista del presente contrato, le devolveremos todos los pagos recibidos de usted sin demora indebida y, en cualquier caso, a más tardar en el plazo de catorce días a partir de la fecha en la que se nos informe de su decisión de desistir del presente contrato. Para llevar a cabo dicho reembolso, utilizaremos el mismo medio de pago empleado por usted para la transacción inicial, a no ser que se haya acordado expresamente lo contrario con usted; en ningún caso incurrirá en gastos como consecuencia de dicho reembolso. En el caso del registro gratuito en la aplicación, no procede reembolso alguno al no haberse efectuado ningún pago."),
          p("Si ha solicitado que la prestación del servicio comience durante el plazo de desistimiento, deberá abonarnos un importe proporcional a lo ya prestado hasta el momento en que nos comunique el ejercicio del derecho de desistimiento respecto de este contrato, en comparación con el alcance total de las prestaciones previstas en el contrato (indemnización por valor). Esta indemnización por valor solo procede en el caso de los planes de pago; en el uso gratuito de la aplicación no surge ningún derecho a indemnización por valor, ya que no se efectúa ningún pago en el sentido del § 15 FAGG."),
        ],
      },
      {
        heading: "4. Extinción anticipada del derecho de desistimiento", blocks: [
          p("Si ha dado su consentimiento expreso para que comencemos a ejecutar la prestación del servicio antes de que finalice el plazo de desistimiento, y ha confirmado ser consciente de que, mediante dicho consentimiento, perderá su derecho de desistimiento en cuanto hayamos ejecutado completamente el contrato, su derecho de desistimiento se extinguirá con la completa ejecución de la prestación del servicio conforme al § 18, apartado 1, punto 10, FAGG."),
        ],
      },
      {
        heading: "5. Modelo de formulario de desistimiento", blocks: [
          p("Si desea desistir del contrato, cumplimente este formulario y envíelo a support@tapradar.app o por correo postal a la dirección indicada a continuación."),
          p("A TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, correo electrónico: support@tapradar.app:"),
          p("Por la presente, el/la abajo firmante (*) desiste del contrato celebrado por mí/nosotros (*) relativo a la prestación del siguiente servicio:"),
          list([
            "☐ Cuenta de cliente final TapRadar gratuita",
            "☐ Plan TapRadar para clientes comerciales: ______________________ (Bronze / Gold / Platinum – indíquese cuál)",
          ]),
          list([
            "Pedido el: ______________________",
            "Nombre del/de los consumidor(es): ______________________",
            "Dirección del/de los consumidor(es): ______________________",
            "Firma del/de los consumidor(es) (solo en caso de comunicación en papel): ______________________",
            "Fecha: ______________________",
          ]),
          p("(*) Táchese lo que no proceda."),
        ],
      },
    ],
    sourcesHeading: "Fuentes",
    sourcesIntro: "Fuentes oficiales de la UE y de Austria en las que se basa esta información de desistimiento:",
    sources: [
      { label: "Directiva sobre los derechos de los consumidores, Directiva 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Directiva sobre contenidos digitales, Directiva (UE) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Ley austriaca de contratos a distancia y celebrados fuera del establecimiento (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  pl: {
    title: "Informacja o odstąpieniu dla konsumentów",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Stan na: 9 sierpnia 2026 r. · Wersja 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Zakres zastosowania", blocks: [
          p("Niniejsza informacja o odstąpieniu informuje konsumentów w rozumieniu § 1 ust. 1 pkt 2 austriackiej ustawy o ochronie konsumentów (KSchG) o przysługującym im ustawowym prawie odstąpienia od umów zawartych na odległość z TOY GmbH. Dotyczy ona dwóch rodzajów umów:"),
          list([
            "płatnych planów TapRadar dla klientów biznesowych (Bronze, Gold lub Platinum), o ile druga strona umowy wyjątkowo uznawana jest za konsumenta lub nowego przedsiębiorcę w rozumieniu § 1 ust. 3 KSchG, oraz",
            "rejestracji bezpłatnego konta klienta końcowego w aplikacji TapRadar, ponieważ udostępniają nam Państwo przy tym, zamiast zapłaty, dane osobowe (w szczególności adres e-mail, dane dotyczące korzystania oraz dane lokalizacyjne), a tego rodzaju umowy wchodzą w zakres prawa odstąpienia zgodnie z dyrektywą o prawach konsumentów, zmienioną dyrektywą Omnibus, oraz austriacką ustawą o umowach zawieranych na odległość i poza lokalem przedsiębiorstwa (FAGG).",
          ]),
          callout("Wskazówka praktyczna", "Swoje konto klienta końcowego TapRadar mogą Państwo i tak w każdej chwili bezpłatnie i bez podania przyczyn usunąć za pośrednictwem ustawień aplikacji (patrz Warunki dla Konsumentów). Wykonanie poniższego prawa odstąpienia nie ma zatem z reguły dodatkowego praktycznego znaczenia dla bezpłatnej rejestracji w aplikacji, istnieje jednak prawnie niezależnie od tego i bez uszczerbku dla tej możliwości."),
          p("W przypadku umów zawieranych wyłącznie w ramach już wykonywanej działalności gospodarczej lub samodzielnej działalności zawodowej, ustawowe prawo odstąpienia przysługujące konsumentom co do zasady nie istnieje."),
        ],
      },
      {
        heading: "2. Prawo odstąpienia", blocks: [
          p("Mają Państwo prawo odstąpić od niniejszej umowy w terminie czternastu dni bez podania jakiejkolwiek przyczyny."),
          p("Termin do odstąpienia od umowy wygasa po upływie czternastu dni od dnia zawarcia umowy."),
          p("Aby skorzystać z prawa odstąpienia od umowy, muszą Państwo poinformować nas,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austria", "E-mail: support@tapradar.app"]),
          p("o swojej decyzji o odstąpieniu od niniejszej umowy w drodze jednoznacznego oświadczenia (na przykład pismo wysłane pocztą lub pocztą elektroniczną). Mogą Państwo skorzystać z poniższego wzoru formularza odstąpienia od umowy, jednak nie jest to obowiązkowe."),
          p("Aby zachować termin do odstąpienia od umowy, wystarczy, aby wysłali Państwo informację dotyczącą wykonania przysługującego Państwu prawa odstąpienia od umowy przed upływem terminu do odstąpienia od umowy."),
        ],
      },
      {
        heading: "3. Skutki odstąpienia od umowy", blocks: [
          p("W przypadku odstąpienia od niniejszej umowy zwracamy Państwu wszystkie otrzymane od Państwa płatności niezwłocznie, a w każdym przypadku nie później niż w terminie czternastu dni od dnia, w którym zostaliśmy poinformowani o Państwa decyzji o wykonaniu prawa odstąpienia od niniejszej umowy. Zwrotu płatności dokonamy przy użyciu takich samych sposobów płatności, jakie zostały przez Państwa użyte w pierwotnej transakcji, chyba że wyraźnie uzgodniono z Państwem inaczej; w żadnym przypadku nie poniosą Państwo opłat w związku z tym zwrotem. W przypadku bezpłatnej rejestracji w aplikacji zwrot nie następuje z uwagi na brak dokonanej płatności."),
          p("Jeżeli zażądali Państwo rozpoczęcia świadczenia usługi przed upływem terminu do odstąpienia od umowy, zapłacą nam Państwo kwotę proporcjonalną do zakresu świadczeń spełnionych do chwili, w której poinformowali nas Państwo o odstąpieniu od niniejszej umowy, w porównaniu z pełnym zakresem świadczeń przewidzianych w umowie (rekompensata za wartość). Taka rekompensata za wartość ma zastosowanie wyłącznie w przypadku planów płatnych; przy bezpłatnym korzystaniu z aplikacji nie powstaje żadne roszczenie o rekompensatę za wartość, ponieważ nie dokonano żadnej płatności w rozumieniu § 15 FAGG."),
        ],
      },
      {
        heading: "4. Przedwczesne wygaśnięcie prawa odstąpienia od umowy", blocks: [
          p("Jeżeli wyraźnie zgodzili się Państwo, abyśmy rozpoczęli wykonywanie usługi przed upływem terminu do odstąpienia od umowy, i potwierdzili Państwo, że wiedzą, iż wyrażając taką zgodę, tracą Państwo prawo odstąpienia od umowy z chwilą jej całkowitego wykonania przez nas, Państwa prawo odstąpienia od umowy wygasa z chwilą całkowitego wykonania usługi zgodnie z § 18 ust. 1 pkt 10 FAGG."),
        ],
      },
      {
        heading: "5. Wzór formularza odstąpienia od umowy", blocks: [
          p("Jeżeli chcą Państwo odstąpić od umowy, prosimy o wypełnienie niniejszego formularza i przesłanie go na adres support@tapradar.app lub pocztą na wskazany poniżej adres."),
          p("Do TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, e-mail: support@tapradar.app:"),
          p("Ja/My(*) niniejszym informuję/informujemy(*) o moim/naszym(*) odstąpieniu od umowy dotyczącej świadczenia następującej usługi:"),
          list([
            "☐ Bezpłatne konto klienta końcowego TapRadar",
            "☐ Plan TapRadar dla klientów biznesowych: ______________________ (Bronze / Gold / Platinum – proszę wskazać właściwy)",
          ]),
          list([
            "Data zamówienia: ______________________",
            "Imię i nazwisko konsumenta(-ów): ______________________",
            "Adres konsumenta(-ów): ______________________",
            "Podpis konsumenta(-ów) (tylko w przypadku zgłoszenia w formie papierowej): ______________________",
            "Data: ______________________",
          ]),
          p("(*) Niepotrzebne skreślić."),
        ],
      },
    ],
    sourcesHeading: "Wykaz źródeł",
    sourcesIntro: "Oficjalne źródła unijne i austriackie, na których opiera się niniejsza informacja o odstąpieniu:",
    sources: [
      { label: "Dyrektywa w sprawie praw konsumentów, dyrektywa 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Dyrektywa o treściach cyfrowych, dyrektywa (UE) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Austriacka ustawa o umowach zawieranych na odległość i poza lokalem przedsiębiorstwa (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  cs: {
    title: "Poučení o odstoupení pro spotřebitele",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Aktualizováno: 9. srpna 2026 · Verze 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Oblast působnosti", blocks: [
          p("Toto poučení o odstoupení informuje spotřebitele ve smyslu § 1 odst. 1 bodu 2 rakouského zákona o ochraně spotřebitele (KSchG) o jejich zákonném právu na odstoupení od smluv uzavřených na dálku se společností TOY GmbH. Vztahuje se na dva typy smluv:"),
          list([
            "placené tarify TapRadar pro obchodní zákazníky (Bronze, Gold nebo Platinum), pokud je smluvní strana výjimečně považována za spotřebitele nebo za nového podnikatele ve smyslu § 1 odst. 3 KSchG, a",
            "registraci bezplatného účtu koncového zákazníka v aplikaci TapRadar, jelikož nám při tom místo platby poskytujete osobní údaje (zejména e-mailovou adresu, údaje o používání a poloze), a takové smlouvy spadají do oblasti působnosti práva na odstoupení podle směrnice o právech spotřebitelů, ve znění směrnice Omnibus, a rakouského zákona o smlouvách uzavíraných na dálku a mimo obchodní prostory (FAGG).",
          ]),
          callout("Praktická poznámka", "Svůj účet koncového zákazníka TapRadar můžete kdykoli bezplatně a bez udání důvodu zrušit prostřednictvím nastavení aplikace (viz podmínky pro spotřebitele). Uplatnění níže uvedeného práva na odstoupení proto zpravidla nemá pro bezplatnou registraci v aplikaci žádný další praktický účinek, existuje však právně nezávisle na tom a bez ohledu na tuto možnost."),
          p("U smluv uzavřených výhradně v rámci již vykonávané obchodní nebo samostatné výdělečné činnosti zákonné právo spotřebitele na odstoupení zásadně neexistuje."),
        ],
      },
      {
        heading: "2. Právo na odstoupení", blocks: [
          p("Máte právo odstoupit od této smlouvy bez udání důvodu ve lhůtě čtrnácti dnů."),
          p("Lhůta pro odstoupení činí čtrnáct dnů ode dne uzavření smlouvy."),
          p("Pro uplatnění práva na odstoupení musíte nás,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Rakousko", "E-mail: support@tapradar.app"]),
          p("informovat jednoznačným prohlášením, například dopisem zaslaným poštou nebo e-mailem, o svém rozhodnutí odstoupit od této smlouvy. K tomuto účelu můžete použít níže uvedený vzorový formulář pro odstoupení, který však není povinný."),
          p("Pro zachování lhůty pro odstoupení postačuje, když sdělení o uplatnění práva na odstoupení odešlete před uplynutím lhůty pro odstoupení."),
        ],
      },
      {
        heading: "3. Důsledky odstoupení", blocks: [
          p("Pokud odstoupíte od této smlouvy, vrátíme vám bez zbytečného odkladu, nejpozději do čtrnácti dnů ode dne, kdy jsme byli informováni o vašem rozhodnutí odstoupit od této smlouvy, veškeré platby, které jsme od vás obdrželi. Pro toto vrácení použijeme stejný platební prostředek, který jste použili při původní transakci, pokud s vámi nebylo výslovně dohodnuto jinak; v žádném případě vám v souvislosti s tímto vrácením nebudou účtovány žádné poplatky. U bezplatné registrace v aplikaci se vrácení neuplatní, neboť nebyla provedena žádná platba."),
          p("Pokud jste požádali, aby poskytování služby začalo během lhůty pro odstoupení, jste povinni nám zaplatit přiměřenou částku odpovídající poměru mezi již poskytnutým plněním do okamžiku, kdy jste nás informovali o uplatnění práva na odstoupení od této smlouvy, a celkovým rozsahem plnění stanoveným ve smlouvě (náhrada hodnoty). Tato náhrada hodnoty přichází v úvahu výhradně u placených tarifů; při bezplatném používání aplikace nárok na náhradu hodnoty nevzniká, jelikož nedochází k žádné platbě ve smyslu § 15 FAGG."),
        ],
      },
      {
        heading: "4. Předčasný zánik práva na odstoupení", blocks: [
          p("Pokud jste výslovně souhlasili s tím, abychom začali s plněním služby ještě před uplynutím lhůty pro odstoupení, a potvrdili jste, že jste si vědomi toho, že tímto souhlasem ztrácíte právo na odstoupení, jakmile smlouvu zcela splníme, zaniká vaše právo na odstoupení úplným poskytnutím služby podle § 18 odst. 1 bodu 10 FAGG."),
        ],
      },
      {
        heading: "5. Vzorový formulář pro odstoupení", blocks: [
          p("Pokud chcete od smlouvy odstoupit, vyplňte prosím tento formulář a zašlete jej na support@tapradar.app nebo poštou na níže uvedenou adresu."),
          p("Společnosti TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Rakousko, e-mail: support@tapradar.app:"),
          p("Tímto odstupuji/odstupujeme (*) od smlouvy uzavřené mnou/námi (*) o poskytnutí následující služby:"),
          list([
            "☐ Bezplatný účet koncového zákazníka TapRadar",
            "☐ Tarif TapRadar pro obchodní zákazníky: ______________________ (Bronze / Gold / Platinum – uveďte příslušný)",
          ]),
          list([
            "Objednáno dne: ______________________",
            "Jméno spotřebitele/spotřebitelů: ______________________",
            "Adresa spotřebitele/spotřebitelů: ______________________",
            "Podpis spotřebitele/spotřebitelů (pouze při oznámení v listinné podobě): ______________________",
            "Datum: ______________________",
          ]),
          p("(*) Nehodící se škrtněte."),
        ],
      },
    ],
    sourcesHeading: "Seznam zdrojů",
    sourcesIntro: "Úřední zdroje EU a Rakouska, ze kterých toto poučení o odstoupení vychází:",
    sources: [
      { label: "Směrnice o právech spotřebitelů, směrnice 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Směrnice o digitálním obsahu, směrnice (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Rakouský zákon o smlouvách uzavíraných na dálku a mimo obchodní prostory (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  hu: {
    title: "Fogyasztói elállási tájékoztató",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Frissítve: 2026. augusztus 9. · 2026-08-09.2 verzió",
    intro: [],
    sections: [
      {
        heading: "1. Hatály", blocks: [
          p("Ez az elállási tájékoztató a KSchG 1. § (1) bekezdés 2. pontja szerinti fogyasztókat tájékoztatja a TOY GmbH-val távollévők között kötött szerződések tekintetében őket megillető törvényes elállási jogról. Két szerződéstípusra vonatkozik:"),
          list([
            "a fizetős TapRadar üzleti ügyfél csomagokra (Bronze, Gold vagy Platinum), amennyiben a szerződő fél kivételesen a KSchG 1. § (3) bekezdése szerinti fogyasztónak vagy vállalkozásalapítónak minősül, és",
            "az ingyenes végfelhasználói fiók regisztrációjára a TapRadar alkalmazásban, mivel ennek során fizetés helyett személyes adatokat (különösen e-mail címet, felhasználási és helyadatokat) bocsát rendelkezésünkre, és az ilyen szerződések az Omnibus-irányelvvel módosított fogyasztói jogokról szóló irányelv és az osztrák FAGG törvény szerinti elállási jog hatálya alá tartoznak.",
          ]),
          callout("Gyakorlati tudnivaló", "TapRadar végfelhasználói fiókját egyébként is bármikor ingyenesen és indoklás nélkül törölheti az alkalmazás beállításain keresztül (lásd a Fogyasztói ÁSZF-et). Az alábbi elállási jog gyakorlásának ezért az ingyenes alkalmazás-regisztráció esetében rendszerint nincs további gyakorlati hatása, jogilag azonban ettől függetlenül és e lehetőség sérelme nélkül továbbra is fennáll."),
          p("Az olyan szerződések esetében, amelyeket kizárólag már gyakorolt kereskedelmi vagy önálló szakmai tevékenység keretében kötöttek, a törvényes fogyasztói elállási jog főszabály szerint nem áll fenn."),
        ],
      },
      {
        heading: "2. Elállási jog", blocks: [
          p("Ön jogosult indoklás nélkül elállni ettől a szerződéstől tizennégy napon belül."),
          p("Az elállási határidő a szerződés megkötésének napjától számított tizennégy nap."),
          p("Elállási jogának gyakorlásához az alábbi elérhetőségen kell minket"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Ausztria", "E-mail: support@tapradar.app"]),
          p("egyértelmű nyilatkozattal (például postai úton küldött levéllel vagy e-maillel) tájékoztatnia arról, hogy eláll ettől a szerződéstől. Ehhez felhasználhatja az alábbi minta elállási nyilatkozatot, ami azonban nem kötelező."),
          p("Az elállási határidő betartásához elegendő, ha az elállási jog gyakorlására vonatkozó közlést az elállási határidő lejárta előtt elküldi."),
        ],
      },
      {
        heading: "3. Az elállás következményei", blocks: [
          p("Ha eláll ettől a szerződéstől, haladéktalanul, de legkésőbb az elállásról szóló nyilatkozatának kézhezvételétől számított tizennégy napon belül visszatérítjük az Öntől kapott valamennyi kifizetést. A visszatérítéshez ugyanazt a fizetési módot használjuk, amelyet Ön az eredeti tranzakció során használt, kivéve, ha Önnel kifejezetten más eljárásban állapodtunk meg; e visszatérítés miatt semmilyen esetben nem számítunk fel Önnek díjat. Az ingyenes alkalmazás-regisztráció esetén visszatérítés nem történik, mivel nem történt fizetés."),
          p("Ha kérte, hogy a szolgáltatás nyújtása már az elállási határidő alatt megkezdődjön, köteles megfizetni nekünk egy olyan arányos összeget, amely megfelel az addig teljesített szolgáltatásoknak – addig a pontig, amíg minket az ezen szerződéstől való elállásról tájékoztatott –, a szerződésben előírt szolgáltatások teljes köréhez viszonyítva (értékkompenzáció). Ez az értékkompenzáció kizárólag a fizetős csomagoknál merül fel; az alkalmazás ingyenes használata esetén nem keletkezik értékkompenzációs igény, mivel a FAGG 15. §-a szerinti fizetés nem történik."),
        ],
      },
      {
        heading: "4. Az elállási jog idő előtti megszűnése", blocks: [
          p("Ha Ön kifejezetten hozzájárult ahhoz, hogy a szolgáltatás teljesítését még az elállási határidő lejárta előtt megkezdjük, és megerősítette, hogy tudomással bír arról, hogy ezzel a hozzájárulással elveszíti elállási jogát, amint a szerződést teljes egészében teljesítettük, elállási joga a szolgáltatás teljes teljesítésével, a FAGG 18. § (1) bekezdés 10. pontja szerint megszűnik."),
        ],
      },
      {
        heading: "5. Minta elállási nyilatkozat", blocks: [
          p("Ha el kíván állni a szerződéstől, kérjük, töltse ki ezt a formanyomtatványt, és küldje el a support@tapradar.app címre, vagy postai úton az alábbi címre."),
          p("Címzett: TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Ausztria, e-mail: support@tapradar.app:"),
          p("Alulírott ezúton elállok/elállunk (*) az általam/általunk (*) kötött, az alábbi szolgáltatás nyújtására vonatkozó szerződéstől:"),
          list([
            "☐ Ingyenes TapRadar végfelhasználói fiók",
            "☐ TapRadar üzleti ügyfél csomag: ______________________ (Bronze / Gold / Platinum – kérjük megjelölni)",
          ]),
          list([
            "Megrendelés dátuma: ______________________",
            "A fogyasztó(k) neve: ______________________",
            "A fogyasztó(k) címe: ______________________",
            "A fogyasztó(k) aláírása (csak papíron történő közlés esetén): ______________________",
            "Dátum: ______________________",
          ]),
          p("(*) A nem kívánt rész törlendő."),
        ],
      },
    ],
    sourcesHeading: "Forrásjegyzék",
    sourcesIntro: "Az uniós és osztrák hivatalos források, amelyeken ez az elállási tájékoztató alapul:",
    sources: [
      { label: "Fogyasztói jogokról szóló irányelv, 2011/83/EU irányelv", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Digitális tartalmakról szóló irányelv, (EU) 2019/770 irányelv", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Osztrák távollévők között és üzlethelyiségen kívül kötött szerződésekről szóló törvény (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  sk: {
    title: "Informácia o odstúpení pre spotrebiteľov",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Aktualizované: 9. augusta 2026 · Verzia 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Rozsah pôsobnosti", blocks: [
          p("Táto informácia o odstúpení informuje spotrebiteľov v zmysle § 1 ods. 1 bodu 2 rakúskeho zákona o ochrane spotrebiteľa (KSchG) o ich zákonnom práve na odstúpenie od zmlúv uzatvorených na diaľku so spoločnosťou TOY GmbH. Vzťahuje sa na dva typy zmlúv:"),
          list([
            "platené tarify TapRadar pre obchodných zákazníkov (Bronze, Gold alebo Platinum), ak sa zmluvná strana výnimočne považuje za spotrebiteľa alebo za nového podnikateľa v zmysle § 1 ods. 3 KSchG, a",
            "registráciu bezplatného účtu koncového zákazníka v aplikácii TapRadar, keďže nám pri tom namiesto platby poskytujete osobné údaje (najmä e-mailovú adresu, údaje o používaní a polohe), a takéto zmluvy patria do pôsobnosti práva na odstúpenie podľa smernice o právach spotrebiteľov, v znení smernice Omnibus, a rakúskeho zákona o zmluvách uzatváraných na diaľku a mimo prevádzkových priestorov (FAGG).",
          ]),
          callout("Praktická poznámka", "Svoj účet koncového zákazníka TapRadar môžete kedykoľvek bezplatne a bez udania dôvodu zrušiť prostredníctvom nastavení aplikácie (pozri podmienky pre spotrebiteľov). Uplatnenie nižšie uvedeného práva na odstúpenie preto spravidla nemá pre bezplatnú registráciu v aplikácii žiadny ďalší praktický účinok, existuje však právne nezávisle od toho a bez ohľadu na túto možnosť."),
          p("Pri zmluvách uzatvorených výlučne v rámci už vykonávanej obchodnej alebo samostatnej zárobkovej činnosti zákonné právo spotrebiteľa na odstúpenie zásadne neexistuje."),
        ],
      },
      {
        heading: "2. Právo na odstúpenie", blocks: [
          p("Máte právo odstúpiť od tejto zmluvy bez udania dôvodu v lehote štrnástich dní."),
          p("Lehota na odstúpenie je štrnásť dní odo dňa uzavretia zmluvy."),
          p("Na uplatnenie práva na odstúpenie musíte nás,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Rakúsko", "E-mail: support@tapradar.app"]),
          p("informovať jednoznačným vyhlásením, napríklad listom zaslaným poštou alebo e-mailom, o svojom rozhodnutí odstúpiť od tejto zmluvy. Na tento účel môžete použiť nižšie uvedený vzorový formulár na odstúpenie, ktorý však nie je povinný."),
          p("Na zachovanie lehoty na odstúpenie postačuje, ak oznámenie o uplatnení práva na odstúpenie odošlete pred uplynutím lehoty na odstúpenie."),
        ],
      },
      {
        heading: "3. Dôsledky odstúpenia", blocks: [
          p("Ak odstúpite od tejto zmluvy, vrátime vám bezodkladne, najneskôr do štrnástich dní odo dňa, keď sme boli informovaní o vašom rozhodnutí odstúpiť od tejto zmluvy, všetky platby, ktoré sme od vás dostali. Na toto vrátenie použijeme rovnaký platobný prostriedok, aký ste použili pri pôvodnej transakcii, pokiaľ sa s vami výslovne nedohodlo inak; v žiadnom prípade vám v súvislosti s týmto vrátením nebudú účtované žiadne poplatky. Pri bezplatnej registrácii v aplikácii sa vrátenie neuplatní, keďže nedošlo k žiadnej platbe."),
          p("Ak ste požiadali, aby sa poskytovanie služby začalo počas lehoty na odstúpenie, ste povinní zaplatiť nám primeranú sumu zodpovedajúcu pomeru medzi už poskytnutým plnením do okamihu, keď ste nás informovali o uplatnení práva na odstúpenie od tejto zmluvy, a celkovým rozsahom plnení stanovených v zmluve (náhrada hodnoty). Táto náhrada hodnoty prichádza do úvahy výlučne pri platených tarifoch; pri bezplatnom používaní aplikácie nárok na náhradu hodnoty nevzniká, keďže nedochádza k žiadnej platbe v zmysle § 15 FAGG."),
        ],
      },
      {
        heading: "4. Predčasný zánik práva na odstúpenie", blocks: [
          p("Ak ste výslovne súhlasili s tým, aby sme začali s plnením služby ešte pred uplynutím lehoty na odstúpenie, a potvrdili ste, že ste si vedomí toho, že týmto súhlasom strácate právo na odstúpenie, akonáhle zmluvu úplne splníme, vaše právo na odstúpenie zaniká úplným poskytnutím služby podľa § 18 ods. 1 bodu 10 FAGG."),
        ],
      },
      {
        heading: "5. Vzorový formulár na odstúpenie", blocks: [
          p("Ak chcete odstúpiť od zmluvy, vyplňte prosím tento formulár a zašlite ho na support@tapradar.app alebo poštou na nižšie uvedenú adresu."),
          p("Spoločnosti TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Rakúsko, e-mail: support@tapradar.app:"),
          p("Týmto odstupujem/odstupujeme (*) od zmluvy uzatvorenej mnou/nami (*) o poskytnutí nasledujúcej služby:"),
          list([
            "☐ Bezplatný účet koncového zákazníka TapRadar",
            "☐ Tarif TapRadar pre obchodných zákazníkov: ______________________ (Bronze / Gold / Platinum – uveďte príslušný)",
          ]),
          list([
            "Objednané dňa: ______________________",
            "Meno spotrebiteľa/spotrebiteľov: ______________________",
            "Adresa spotrebiteľa/spotrebiteľov: ______________________",
            "Podpis spotrebiteľa/spotrebiteľov (len pri oznámení v listinnej podobe): ______________________",
            "Dátum: ______________________",
          ]),
          p("(*) Nehodiace sa prečiarknite."),
        ],
      },
    ],
    sourcesHeading: "Zoznam zdrojov",
    sourcesIntro: "Úradné zdroje EÚ a Rakúska, z ktorých táto informácia o odstúpení vychádza:",
    sources: [
      { label: "Smernica o právach spotrebiteľov, smernica 2011/83/EÚ", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Smernica o digitálnom obsahu, smernica (EÚ) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Rakúsky zákon o zmluvách uzatváraných na diaľku a mimo prevádzkových priestorov (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  "sr-Latn": {
    title: "Obaveštenje o pravu na odustanak za potrošače",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Ažurirano: 9. avgust 2026 · Verzija 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Oblast primene", blocks: [
          p("Ovo obaveštenje o pravu na odustanak informiše potrošače u smislu § 1 stav 1 tačka 2 austrijskog Zakona o zaštiti potrošača (KSchG) o njihovom zakonskom pravu na odustanak u vezi sa ugovorima zaključenim na daljinu sa TOY GmbH. Primenjuje se na dve vrste ugovora:"),
          list([
            "plaćeni TapRadar paketi za poslovne korisnike (Bronze, Gold ili Platinum), ukoliko se ugovorna strana izuzetno smatra potrošačem ili osnivačem preduzeća u smislu § 1 stav 3 KSchG, i",
            "registracija besplatnog naloga krajnjeg korisnika u aplikaciji TapRadar, budući da nam pri tome umesto plaćanja pružate lične podatke (posebno e-adresu, podatke o korišćenju i lokaciji), a takvi ugovori potpadaju pod obim primene prava na odustanak prema Direktivi o pravima potrošača, izmenjenoj Omnibus direktivom, i austrijskom Zakonu o ugovorima na daljinu i van poslovnih prostorija (FAGG).",
          ]),
          callout("Praktična napomena", "Svoj TapRadar nalog krajnjeg korisnika možete i inače u bilo kom trenutku besplatno i bez navođenja razloga obrisati putem podešavanja aplikacije (vidi Uslove za potrošače). Ostvarivanje dole navedenog prava na odustanak stoga po pravilu nema dodatno praktično dejstvo za besplatnu registraciju u aplikaciji, ali pravno i dalje postoji nezavisno od toga i bez uticaja na tu mogućnost."),
          p("Za ugovore koji se zaključuju isključivo u okviru već obavljane privredne ili samostalne profesionalne delatnosti, zakonsko pravo potrošača na odustanak u načelu ne postoji."),
        ],
      },
      {
        heading: "2. Pravo na odustanak", blocks: [
          p("Imate pravo da odustanete od ovog ugovora u roku od četrnaest dana bez navođenja razloga."),
          p("Rok za odustanak iznosi četrnaest dana od dana zaključenja ugovora."),
          p("Da biste ostvarili svoje pravo na odustanak, morate nas,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austrija", "E-pošta: support@tapradar.app"]),
          p("obavestiti jednoznačnom izjavom, na primer pismom poslatim poštom ili e-poštom, o svojoj odluci da odustanete od ovog ugovora. Za to možete koristiti sledeći obrazac za odustanak, koji, međutim, nije obavezan."),
          p("Za poštovanje roka za odustanak dovoljno je da obaveštenje o ostvarivanju prava na odustanak pošaljete pre isteka roka za odustanak."),
        ],
      },
      {
        heading: "3. Posledice odustanka", blocks: [
          p("Ako odustanete od ovog ugovora, vratićemo vam sve uplate koje smo primili od vas bez odlaganja, a najkasnije u roku od četrnaest dana od dana kada smo obavešteni o vašoj odluci da odustanete od ovog ugovora. Za ovo vraćanje koristimo isto sredstvo plaćanja koje ste koristili prilikom prvobitne transakcije, osim ako sa vama nije izričito dogovoreno drugačije; ni u kom slučaju vam neće biti naplaćene naknade zbog ovog vraćanja. Kod besplatne registracije u aplikaciji, vraćanje otpada zbog nepostojanja izvršene uplate."),
          p("Ako ste zahtevali da usluga počne tokom roka za odustanak, dužni ste da nam platite odgovarajući iznos koji odgovara udelu već pruženih usluga do trenutka kada nas obavestite o ostvarivanju prava na odustanak od ovog ugovora, u poređenju sa ukupnim obimom usluga predviđenih ugovorom (naknada vrednosti). Ova naknada vrednosti dolazi u obzir isključivo kod plaćenih paketa; kod besplatnog korišćenja aplikacije ne nastaje zahtev za naknadu vrednosti, budući da nije izvršena uplata u smislu § 15 FAGG."),
        ],
      },
      {
        heading: "4. Prevremeni prestanak prava na odustanak", blocks: [
          p("Ako ste izričito saglasni da počnemo sa pružanjem usluge pre isteka roka za odustanak, i ako ste potvrdili da ste svesni da ovom saglasnošću gubite pravo na odustanak čim u potpunosti ispunimo ugovor, vaše pravo na odustanak prestaje potpunim pružanjem usluge u skladu sa § 18 stav 1 tačka 10 FAGG."),
        ],
      },
      {
        heading: "5. Obrazac za odustanak", blocks: [
          p("Ako želite da odustanete od ugovora, popunite ovaj obrazac i pošaljite ga na support@tapradar.app ili poštom na dole navedenu adresu."),
          p("TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austrija, e-pošta: support@tapradar.app:"),
          p("Ovim izjavljujem/izjavljujemo (*) da odustajem/odustajemo od ugovora koji sam/smo zaključio/zaključili (*) o pružanju sledeće usluge:"),
          list([
            "☐ Besplatan TapRadar nalog krajnjeg korisnika",
            "☐ TapRadar paket za poslovne korisnike: ______________________ (Bronze / Gold / Platinum – navesti odgovarajuće)",
          ]),
          list([
            "Naručeno dana: ______________________",
            "Ime potrošača/potrošača: ______________________",
            "Adresa potrošača/potrošača: ______________________",
            "Potpis potrošača/potrošača (samo kod obaveštenja na papiru): ______________________",
            "Datum: ______________________",
          ]),
          p("(*) Nepotrebno precrtati."),
        ],
      },
    ],
    sourcesHeading: "Spisak izvora",
    sourcesIntro: "Zvanični izvori EU i Austrije na kojima se zasniva ovo obaveštenje o pravu na odustanak:",
    sources: [
      { label: "Direktiva o pravima potrošača, Direktiva 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Direktiva o digitalnom sadržaju, Direktiva (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Austrijski zakon o ugovorima na daljinu i van poslovnih prostorija (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  bs: {
    title: "Informacija o odustanku za potrošače",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Ažurirano: 9. august 2026 · Verzija 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Oblast primjene", blocks: [
          p("Ova informacija o odustanku informiše potrošače u smislu § 1 stav 1 tačka 2 austrijskog Zakona o zaštiti potrošača (KSchG) o njihovom zakonskom pravu na odustanak u vezi sa ugovorima zaključenim na daljinu sa TOY GmbH. Primjenjuje se na dvije vrste ugovora:"),
          list([
            "plaćeni TapRadar paketi za poslovne korisnike (Bronze, Gold ili Platinum), ukoliko se ugovorna strana izuzetno smatra potrošačem ili osnivačem preduzeća u smislu § 1 stav 3 KSchG, i",
            "registracija besplatnog naloga krajnjeg korisnika u aplikaciji TapRadar, budući da nam pri tome umjesto plaćanja pružate lične podatke (posebno e-adresu, podatke o korištenju i lokaciji), a takvi ugovori potpadaju pod obim primjene prava na odustanak prema Direktivi o pravima potrošača, izmijenjenoj Omnibus direktivom, i austrijskom Zakonu o ugovorima na daljinu i van poslovnih prostorija (FAGG).",
          ]),
          callout("Praktična napomena", "Svoj TapRadar nalog krajnjeg korisnika možete i inače u bilo kojem trenutku besplatno i bez navođenja razloga obrisati putem podešavanja aplikacije (vidi Uslove za potrošače). Ostvarivanje dolje navedenog prava na odustanak stoga po pravilu nema dodatno praktično dejstvo za besplatnu registraciju u aplikaciji, ali pravno i dalje postoji nezavisno od toga i bez uticaja na tu mogućnost."),
          p("Za ugovore koji se zaključuju isključivo u okviru već obavljane privredne ili samostalne profesionalne djelatnosti, zakonsko pravo potrošača na odustanak u načelu ne postoji."),
        ],
      },
      {
        heading: "2. Pravo na odustanak", blocks: [
          p("Imate pravo da odustanete od ovog ugovora u roku od četrnaest dana bez navođenja razloga."),
          p("Rok za odustanak iznosi četrnaest dana od dana zaključenja ugovora."),
          p("Da biste ostvarili svoje pravo na odustanak, morate nas,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austrija", "E-pošta: support@tapradar.app"]),
          p("obavijestiti jednoznačnom izjavom, na primjer pismom poslanim poštom ili e-poštom, o svojoj odluci da odustanete od ovog ugovora. Za to možete koristiti sljedeći obrazac za odustanak, koji, međutim, nije obavezan."),
          p("Za poštivanje roka za odustanak dovoljno je da obavještenje o ostvarivanju prava na odustanak pošaljete prije isteka roka za odustanak."),
        ],
      },
      {
        heading: "3. Posljedice odustanka", blocks: [
          p("Ako odustanete od ovog ugovora, vratit ćemo vam sve uplate koje smo primili od vas bez odgode, a najkasnije u roku od četrnaest dana od dana kada smo obaviješteni o vašoj odluci da odustanete od ovog ugovora. Za ovo vraćanje koristimo isto sredstvo plaćanja koje ste koristili prilikom prvobitne transakcije, osim ako sa vama nije izričito dogovoreno drugačije; ni u kojem slučaju vam neće biti naplaćene naknade zbog ovog vraćanja. Kod besplatne registracije u aplikaciji, vraćanje otpada zbog nepostojanja izvršene uplate."),
          p("Ako ste zahtijevali da usluga počne tokom roka za odustanak, dužni ste da nam platite odgovarajući iznos koji odgovara udjelu već pruženih usluga do trenutka kada nas obavijestite o ostvarivanju prava na odustanak od ovog ugovora, u poređenju sa ukupnim obimom usluga predviđenih ugovorom (naknada vrijednosti). Ova naknada vrijednosti dolazi u obzir isključivo kod plaćenih paketa; kod besplatnog korištenja aplikacije ne nastaje zahtjev za naknadu vrijednosti, budući da nije izvršena uplata u smislu § 15 FAGG."),
        ],
      },
      {
        heading: "4. Prijevremeni prestanak prava na odustanak", blocks: [
          p("Ako ste izričito saglasni da počnemo sa pružanjem usluge prije isteka roka za odustanak, i ako ste potvrdili da ste svjesni da ovom saglasnošću gubite pravo na odustanak čim u potpunosti ispunimo ugovor, vaše pravo na odustanak prestaje potpunim pružanjem usluge u skladu sa § 18 stav 1 tačka 10 FAGG."),
        ],
      },
      {
        heading: "5. Obrazac za odustanak", blocks: [
          p("Ako želite odustati od ugovora, popunite ovaj obrazac i pošaljite ga na support@tapradar.app ili poštom na dolje navedenu adresu."),
          p("TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austrija, e-pošta: support@tapradar.app:"),
          p("Ovim izjavljujem/izjavljujemo (*) da odustajem/odustajemo od ugovora koji sam/smo zaključio/zaključili (*) o pružanju sljedeće usluge:"),
          list([
            "☐ Besplatan TapRadar nalog krajnjeg korisnika",
            "☐ TapRadar paket za poslovne korisnike: ______________________ (Bronze / Gold / Platinum – navesti odgovarajuće)",
          ]),
          list([
            "Naručeno dana: ______________________",
            "Ime potrošača/potrošača: ______________________",
            "Adresa potrošača/potrošača: ______________________",
            "Potpis potrošača/potrošača (samo kod obavještenja na papiru): ______________________",
            "Datum: ______________________",
          ]),
          p("(*) Nepotrebno precrtati."),
        ],
      },
    ],
    sourcesHeading: "Popis izvora",
    sourcesIntro: "Zvanični izvori EU i Austrije na kojima se zasniva ova informacija o odustanku:",
    sources: [
      { label: "Direktiva o pravima potrošača, Direktiva 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Direktiva o digitalnom sadržaju, Direktiva (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Austrijski zakon o ugovorima na daljinu i van poslovnih prostorija (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  en: {
    title: "Consumer Withdrawal Notice",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Last updated: 9 August 2026 · Version 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Scope", blocks: [
          p("This withdrawal notice informs consumers within the meaning of § 1(1)(2) of the Austrian Consumer Protection Act (KSchG) about their statutory right of withdrawal in respect of contracts concluded at a distance with TOY GmbH. It applies to two types of contract:"),
          list([
            "paid TapRadar business-customer plans (Bronze, Gold or Platinum), where the contracting party exceptionally qualifies as a consumer or as a start-up founder within the meaning of § 1(3) KSchG, and",
            "registration of a free end-customer account in the TapRadar app, since you provide us with personal data (in particular your email address, usage and location data) instead of a payment, and such contracts fall within the scope of the right of withdrawal under the Consumer Rights Directive, as amended by the Omnibus Directive, and the Austrian Distance and Off-Premises Contracts Act (FAGG).",
          ]),
          callout("Practical note", "You can in any case delete your TapRadar end-customer account at any time, free of charge and without giving reasons, via the app settings (see the Consumer Terms). Exercising the right of withdrawal below therefore generally has no additional practical effect for the free app registration, but continues to exist legally independently of, and without prejudice to, this option."),
          p("For contracts concluded exclusively within the scope of an already exercised commercial or independent professional activity, the statutory consumer right of withdrawal generally does not apply."),
        ],
      },
      {
        heading: "2. Right of withdrawal", blocks: [
          p("You have the right to withdraw from this contract within fourteen days without giving any reason."),
          p("The withdrawal period is fourteen days from the day the contract was concluded."),
          p("To exercise your right of withdrawal, you must inform us,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austria", "Email: support@tapradar.app"]),
          p("by means of a clear statement, for example a letter sent by post or an email, of your decision to withdraw from this contract. You may use the model withdrawal form below, although this is not mandatory."),
          p("To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired."),
        ],
      },
      {
        heading: "3. Effects of withdrawal", blocks: [
          p("If you withdraw from this contract, we shall reimburse to you all payments received from you without undue delay and in any event not later than fourteen days from the day on which we are informed about your decision to withdraw from this contract. We will use the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement. For the free app registration, no reimbursement applies as no payment was made."),
          p("If you have requested that the service should begin during the withdrawal period, you shall pay us an amount which is in proportion to what has been provided until you have communicated to us your withdrawal from this contract, in comparison with the full coverage of the contract (compensation for value). This compensation for value only applies to paid plans; for free-of-charge use of the app, no claim for compensation for value arises, as no payment within the meaning of § 15 FAGG is made."),
        ],
      },
      {
        heading: "4. Premature expiry of the right of withdrawal", blocks: [
          p("If you have expressly agreed that we may begin performance of the service before the end of the withdrawal period, and you have confirmed your knowledge that, by giving this consent, you lose your right of withdrawal once we have fully performed the contract, your right of withdrawal expires once the service has been fully performed pursuant to § 18(1)(10) FAGG."),
        ],
      },
      {
        heading: "5. Model withdrawal form", blocks: [
          p("If you wish to withdraw from the contract, please complete this form and send it to support@tapradar.app or by post to the address below."),
          p("To TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, email: support@tapradar.app:"),
          p("I/We (*) hereby give notice that I/we (*) withdraw from my/our (*) contract for the provision of the following service:"),
          list([
            "☐ Free TapRadar end-customer account",
            "☐ TapRadar business-customer plan: ______________________ (Bronze / Gold / Platinum – please specify)",
          ]),
          list([
            "Ordered on: ______________________",
            "Name of consumer(s): ______________________",
            "Address of consumer(s): ______________________",
            "Signature of consumer(s) (only if this form is notified on paper): ______________________",
            "Date: ______________________",
          ]),
          p("(*) Delete as appropriate."),
        ],
      },
    ],
    sourcesHeading: "Sources",
    sourcesIntro: "Official EU and Austrian sources underlying this withdrawal notice:",
    sources: [
      { label: "Consumer Rights Directive, Directive 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Digital Content Directive, Directive (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Austrian Distance and Off-Premises Contracts Act (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  tr: {
    title: "Tüketici Cayma Bildirimi",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Güncelleme: 9 Ağustos 2026 · Sürüm 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Uygulama alanı", blocks: [
          p("Bu cayma bildirimi, Avusturya Tüketici Koruma Kanunu (KSchG) § 1/1/2 anlamındaki tüketicileri, TOY GmbH ile mesafeli olarak kurulan sözleşmeler bakımından yasal cayma haklarına ilişkin bilgilendirir. Bu bildirim iki sözleşme türü için geçerlidir:"),
          list([
            "sözleşme tarafının istisnai olarak KSchG § 1/3 anlamında tüketici veya yeni girişimci sayılması kaydıyla, ücretli TapRadar işletme müşterisi planları (Bronze, Gold veya Platinum) ve",
            "TapRadar uygulamasında ücretsiz bir son kullanıcı hesabının kaydı; zira bu durumda bize ödeme yerine kişisel veriler (özellikle e-posta adresi, kullanım ve konum verileri) sağlarsınız ve bu tür sözleşmeler, Omnibus Direktifi ile değiştirilen Tüketici Hakları Direktifi ve Avusturya Mesafeli ve İş Yeri Dışı Sözleşmeler Kanunu (FAGG) uyarınca cayma hakkının kapsamına girer.",
          ]),
          callout("Pratik bilgi", "TapRadar son kullanıcı hesabınızı zaten her zaman, ücretsiz ve gerekçe göstermeksizin, uygulama ayarları üzerinden silebilirsiniz (bkz. Tüketici Sözleşme Şartları). Bu nedenle, aşağıdaki cayma hakkının kullanılmasının ücretsiz uygulama kaydı bakımından genellikle ek bir pratik etkisi yoktur; ancak bu hak, bundan bağımsız olarak ve bu imkâna halel gelmeksizin hukuken devam eder."),
          p("Yalnızca daha önce fiilen yürütülen bir ticari veya bağımsız mesleki faaliyet kapsamında kurulan sözleşmeler için, yasal tüketici cayma hakkı genel olarak mevcut değildir."),
        ],
      },
      {
        heading: "2. Cayma hakkı", blocks: [
          p("Herhangi bir gerekçe göstermeksizin, on dört gün içinde bu sözleşmeden cayma hakkına sahipsiniz."),
          p("Cayma süresi, sözleşmenin kurulduğu günden itibaren on dört gündür."),
          p("Cayma hakkınızı kullanmak için, aşağıdaki adrese"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Avusturya", "E-posta: support@tapradar.app"]),
          p("posta yoluyla gönderilen bir mektup veya bir e-posta gibi açık bir beyanla, bu sözleşmeden cayma kararınızı bize bildirmeniz gerekir. Bunun için, zorunlu olmasa da, aşağıdaki örnek cayma formunu kullanabilirsiniz."),
          p("Cayma süresine uyulması için, cayma hakkının kullanıldığına ilişkin bildirimi cayma süresi dolmadan önce göndermeniz yeterlidir."),
        ],
      },
      {
        heading: "3. Caymanın sonuçları", blocks: [
          p("Bu sözleşmeden cayarsanız, sizden aldığımız tüm ödemeleri, cayma bildiriminizin bize ulaştığı günden itibaren gecikmeksizin ve en geç on dört gün içinde size iade ederiz. Bu iade için, açıkça başka bir şekilde anlaşılmadığı sürece, ilk işlemde kullandığınız ödeme yöntemini kullanırız; bu iade nedeniyle hiçbir şekilde ücret tahsil edilmez. Ücretsiz uygulama kaydında, herhangi bir ödeme yapılmadığından iade söz konusu değildir."),
          p("Hizmetin cayma süresi içinde başlamasını talep etmişseniz, bu sözleşmeden cayma hakkınızı kullandığınızı bize bildirdiğiniz ana kadar zaten ifa edilmiş olan hizmetlerin, sözleşmede öngörülen hizmetlerin toplam kapsamına oranına karşılık gelen makul bir tutarı bize ödemeniz gerekir (değer tazminatı). Bu değer tazminatı yalnızca ücretli planlar için söz konusu olabilir; ücretsiz uygulama kullanımında, FAGG § 15 anlamında bir ödeme yapılmadığından, herhangi bir değer tazminatı talebi doğmaz."),
        ],
      },
      {
        heading: "4. Cayma hakkının erken sona ermesi", blocks: [
          p("Hizmetin ifasına cayma süresi dolmadan önce başlanmasına açıkça onay vermişseniz ve bu onay nedeniyle, sözleşmeyi tam olarak ifa ettiğimiz anda cayma hakkınızı kaybedeceğinizi bildiğinizi teyit etmişseniz, cayma hakkınız, FAGG § 18/1/10 uyarınca hizmetin tam olarak ifa edilmesiyle sona erer."),
        ],
      },
      {
        heading: "5. Örnek cayma formu", blocks: [
          p("Sözleşmeden cayma hakkınızı kullanmak isterseniz, lütfen bu formu doldurup support@tapradar.app adresine veya aşağıda belirtilen posta adresine gönderiniz."),
          p("TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Avusturya, e-posta: support@tapradar.app adresine:"),
          p("Aşağıdaki hizmetin sunumuna ilişkin olarak benim/bizim (*) akdettiğim/akdettiğimiz (*) sözleşmeden işbu bildirimle cayıyorum/cayıyoruz:"),
          list([
            "☐ Ücretsiz TapRadar son kullanıcı hesabı",
            "☐ TapRadar işletme müşterisi planı: ______________________ (Bronze / Gold / Platinum – ilgili olanı belirtiniz)",
          ]),
          list([
            "Sipariş tarihi: ______________________",
            "Tüketici(ler)in adı: ______________________",
            "Tüketici(ler)in adresi: ______________________",
            "Tüketici(ler)in imzası (yalnızca kağıt üzerinde bildirim halinde): ______________________",
            "Tarih: ______________________",
          ]),
          p("(*) Uygun olmayanı siliniz."),
        ],
      },
    ],
    sourcesHeading: "Kaynakça",
    sourcesIntro: "Bu cayma bildiriminin dayandığı resmi AB ve Avusturya kaynakları:",
    sources: [
      { label: "Tüketici Hakları Direktifi, 2011/83/AB sayılı Direktif", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Dijital İçerik Direktifi, (AB) 2019/770 sayılı Direktif", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Avusturya Mesafeli ve İş Yeri Dışı Sözleşmeler Kanunu (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  hr: {
    title: "Obavijest o pravu na odustanak za potrošače",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Ažurirano: 9. kolovoza 2026. · Verzija 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Područje primjene", blocks: [
          p("Ova obavijest o pravu na odustanak informira potrošače u smislu § 1 st. 1 t. 2 austrijskog Zakona o zaštiti potrošača (KSchG) o njihovom zakonskom pravu na odustanak u vezi s ugovorima sklopljenim na daljinu s TOY GmbH. Primjenjuje se na dvije vrste ugovora:"),
          list([
            "plaćeni TapRadar paketi za poslovne korisnike (Bronze, Gold ili Platinum), ako se ugovorna strana iznimno smatra potrošačem ili osnivačem poduzeća u smislu § 1 st. 3 KSchG, i",
            "registraciju besplatnog računa krajnjeg korisnika u aplikaciji TapRadar, budući da nam pritom umjesto plaćanja pružate osobne podatke (posebice e-adresu, podatke o korištenju i lokaciji), a takvi ugovori potpadaju pod područje primjene prava na odustanak prema Direktivi o pravima potrošača, izmijenjenoj Omnibus direktivom, i austrijskom Zakonu o ugovorima na daljinu i izvan poslovnih prostorija (FAGG).",
          ]),
          callout("Praktična napomena", "Svoj TapRadar račun krajnjeg korisnika možete i inače u bilo kojem trenutku besplatno i bez navođenja razloga izbrisati putem postavki aplikacije (vidi Uvjete za potrošače). Ostvarivanje dolje navedenog prava na odustanak stoga u pravilu nema dodatan praktičan učinak za besplatnu registraciju u aplikaciji, ali pravno i dalje postoji neovisno o tome i bez utjecaja na tu mogućnost."),
          p("Za ugovore koji se sklapaju isključivo u okviru već obavljane gospodarske ili samostalne profesionalne djelatnosti, zakonsko pravo potrošača na odustanak u pravilu ne postoji."),
        ],
      },
      {
        heading: "2. Pravo na odustanak", blocks: [
          p("Imate pravo odustati od ovog ugovora u roku od četrnaest dana bez navođenja razloga."),
          p("Rok za odustanak iznosi četrnaest dana od dana sklapanja ugovora."),
          p("Kako biste ostvarili svoje pravo na odustanak, morate nas,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austrija", "E-pošta: support@tapradar.app"]),
          p("obavijestiti jednoznačnom izjavom, primjerice pismom poslanim poštom ili e-poštom, o svojoj odluci da odustanete od ovog ugovora. Za to možete koristiti sljedeći obrazac za odustanak, koji, međutim, nije obvezan."),
          p("Za poštovanje roka za odustanak dovoljno je da obavijest o ostvarivanju prava na odustanak pošaljete prije isteka roka za odustanak."),
        ],
      },
      {
        heading: "3. Posljedice odustanka", blocks: [
          p("Ako odustanete od ovog ugovora, vratit ćemo vam sve uplate koje smo primili od vas bez odgode, a najkasnije u roku od četrnaest dana od dana kada smo obaviješteni o vašoj odluci da odustanete od ovog ugovora. Za ovaj povrat koristimo isto sredstvo plaćanja koje ste koristili prilikom izvorne transakcije, osim ako s vama nije izričito dogovoreno drugačije; ni u kojem slučaju vam neće biti naplaćene naknade zbog ovog povrata. Kod besplatne registracije u aplikaciji, povrat otpada zbog nepostojanja izvršene uplate."),
          p("Ako ste zahtijevali da usluga počne tijekom roka za odustanak, dužni ste nam platiti odgovarajući iznos koji odgovara udjelu već pruženih usluga do trenutka kada nas obavijestite o ostvarivanju prava na odustanak od ovog ugovora, u usporedbi s ukupnim opsegom usluga predviđenih ugovorom (naknada vrijednosti). Ova naknada vrijednosti dolazi u obzir isključivo kod plaćenih paketa; kod besplatnog korištenja aplikacije ne nastaje zahtjev za naknadu vrijednosti, budući da nije izvršena uplata u smislu § 15 FAGG."),
        ],
      },
      {
        heading: "4. Prijevremeni prestanak prava na odustanak", blocks: [
          p("Ako ste izričito pristali da počnemo s pružanjem usluge prije isteka roka za odustanak, i ako ste potvrdili da ste svjesni da ovim pristankom gubite pravo na odustanak čim u potpunosti ispunimo ugovor, vaše pravo na odustanak prestaje potpunim pružanjem usluge sukladno § 18 st. 1 t. 10 FAGG."),
        ],
      },
      {
        heading: "5. Obrazac za odustanak", blocks: [
          p("Ako želite odustati od ugovora, molimo ispunite ovaj obrazac i pošaljite ga na support@tapradar.app ili poštom na dolje navedenu adresu."),
          p("TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austrija, e-pošta: support@tapradar.app:"),
          p("Ovime izjavljujem/izjavljujemo (*) da odustajem/odustajemo od ugovora koji sam/smo sklopio/sklopili (*) o pružanju sljedeće usluge:"),
          list([
            "☐ Besplatan TapRadar račun krajnjeg korisnika",
            "☐ TapRadar paket za poslovne korisnike: ______________________ (Bronze / Gold / Platinum – navesti odgovarajuće)",
          ]),
          list([
            "Naručeno dana: ______________________",
            "Ime potrošača/potrošača: ______________________",
            "Adresa potrošača/potrošača: ______________________",
            "Potpis potrošača/potrošača (samo kod obavijesti na papiru): ______________________",
            "Datum: ______________________",
          ]),
          p("(*) Nepotrebno precrtati."),
        ],
      },
    ],
    sourcesHeading: "Popis izvora",
    sourcesIntro: "Službeni izvori EU-a i Austrije na kojima se temelji ova obavijest o pravu na odustanak:",
    sources: [
      { label: "Direktiva o pravima potrošača, Direktiva 2011/83/EU", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Direktiva o digitalnom sadržaju, Direktiva (EU) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Austrijski zakon o ugovorima na daljinu i izvan poslovnih prostorija (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  ro: {
    title: "Notificare de retragere pentru consumatori",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Actualizat: 9 august 2026 · Versiunea 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Domeniul de aplicare", blocks: [
          p("Prezenta notificare de retragere informează consumatorii în sensul § 1 alin. (1) pct. 2 din Legea austriacă privind protecția consumatorilor (KSchG) cu privire la dreptul lor legal de retragere referitor la contractele încheiate la distanță cu TOY GmbH. Se aplică pentru două tipuri de contracte:"),
          list([
            "planurile TapRadar plătite pentru clienți comerciali (Bronze, Gold sau Platinum), în cazul în care partea contractantă este considerată în mod excepțional consumator sau fondator de start-up în sensul § 1 alin. (3) KSchG, și",
            "înregistrarea unui cont gratuit de client final în aplicația TapRadar, întrucât ne furnizați cu această ocazie, în locul unei plăți, date cu caracter personal (în special adresa de e-mail, date de utilizare și de localizare), iar astfel de contracte intră sub incidența dreptului de retragere conform Directivei privind drepturile consumatorilor, astfel cum a fost modificată prin Directiva Omnibus, și a Legii austriece privind contractele la distanță și în afara spațiilor comerciale (FAGG).",
          ]),
          callout("Notă practică", "Vă puteți șterge oricum contul de client final TapRadar în orice moment, gratuit și fără a preciza motive, prin setările aplicației (a se vedea Termenii pentru consumatori). Exercitarea dreptului de retragere de mai jos nu are, prin urmare, de regulă, niciun efect practic suplimentar pentru înregistrarea gratuită în aplicație, dar continuă să existe din punct de vedere juridic independent de aceasta și fără a afecta această posibilitate."),
          p("Pentru contractele încheiate exclusiv în cadrul unei activități comerciale sau profesionale independente deja exercitate, dreptul legal de retragere al consumatorului nu există, în principiu."),
        ],
      },
      {
        heading: "2. Dreptul de retragere", blocks: [
          p("Aveți dreptul de a vă retrage din prezentul contract în termen de paisprezece zile, fără a fi necesară invocarea vreunui motiv."),
          p("Termenul de retragere este de paisprezece zile de la data încheierii contractului."),
          p("Pentru a vă exercita dreptul de retragere, trebuie să ne informați,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Austria", "E-mail: support@tapradar.app"]),
          p("printr-o declarație neechivocă, de exemplu o scrisoare trimisă prin poștă sau un e-mail, cu privire la decizia dumneavoastră de a vă retrage din prezentul contract. În acest scop, puteți utiliza formularul model de retragere de mai jos, care însă nu este obligatoriu."),
          p("Pentru respectarea termenului de retragere, este suficient să trimiteți comunicarea privind exercitarea dreptului de retragere înainte de expirarea termenului de retragere."),
        ],
      },
      {
        heading: "3. Efectele retragerii", blocks: [
          p("Dacă vă retrageți din prezentul contract, vă vom rambursa toate plățile pe care le-am primit de la dumneavoastră, fără întârzieri nejustificate și, în orice caz, nu mai târziu de paisprezece zile de la data la care suntem informați cu privire la decizia dumneavoastră de retragere din prezentul contract. Pentru această rambursare, vom folosi aceleași mijloace de plată ca și cele folosite de dumneavoastră pentru tranzacția inițială, cu excepția cazului în care s-a convenit expres altfel cu dumneavoastră; în orice caz, această rambursare nu va genera costuri pentru dumneavoastră. În cazul înregistrării gratuite în aplicație, nu se aplică nicio rambursare, întrucât nu s-a efectuat nicio plată."),
          p("Dacă ați solicitat ca prestarea serviciului să înceapă în timpul termenului de retragere, sunteți obligat să ne plătiți o sumă proporțională cu ceea ce a fost deja prestat până la momentul la care ne informați cu privire la exercitarea dreptului de retragere din prezentul contract, comparativ cu acoperirea totală a contractului (compensație pentru valoare). Această compensație pentru valoare este aplicabilă exclusiv pentru planurile plătite; pentru utilizarea gratuită a aplicației nu apare niciun drept la compensație pentru valoare, întrucât nu se efectuează nicio plată în sensul § 15 FAGG."),
        ],
      },
      {
        heading: "4. Stingerea anticipată a dreptului de retragere", blocks: [
          p("Dacă ați consimțit expres ca noi să începem executarea serviciului înainte de expirarea termenului de retragere, și ați confirmat că sunteți conștient de faptul că, prin acest consimțământ, vă pierdeți dreptul de retragere de îndată ce am executat integral contractul, dreptul dumneavoastră de retragere se stinge odată cu executarea completă a serviciului conform § 18 alin. (1) pct. 10 FAGG."),
        ],
      },
      {
        heading: "5. Formular model de retragere", blocks: [
          p("Dacă doriți să vă retrageți din contract, vă rugăm să completați acest formular și să îl trimiteți la support@tapradar.app sau prin poștă la adresa de mai jos."),
          p("Către TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Austria, e-mail: support@tapradar.app:"),
          p("Prin prezenta, eu/noi (*) vă notific/notificăm retragerea mea/noastră (*) din contractul privind furnizarea următorului serviciu:"),
          list([
            "☐ Cont gratuit de client final TapRadar",
            "☐ Plan TapRadar pentru clienți comerciali: ______________________ (Bronze / Gold / Platinum – vă rugăm precizați)",
          ]),
          list([
            "Comandat la data: ______________________",
            "Numele consumatorului/consumatorilor: ______________________",
            "Adresa consumatorului/consumatorilor: ______________________",
            "Semnătura consumatorului/consumatorilor (doar în cazul notificării pe hârtie): ______________________",
            "Data: ______________________",
          ]),
          p("(*) A se elimina mențiunea inutilă."),
        ],
      },
    ],
    sourcesHeading: "Listă de surse",
    sourcesIntro: "Surse oficiale UE și austriece pe care se bazează prezenta notificare de retragere:",
    sources: [
      { label: "Directiva privind drepturile consumatorilor, Directiva 2011/83/UE", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Directiva privind conținutul digital, Directiva (UE) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Legea austriacă privind contractele la distanță și în afara spațiilor comerciale (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
  bg: {
    title: "Указание за отказ за потребители",
    subtitle: "TapRadar – TOY GmbH",
    stand: "Актуализирано на: 9 август 2026 г. · Версия 2026-08-09.2",
    intro: [],
    sections: [
      {
        heading: "1. Обхват на приложение", blocks: [
          p("Настоящото указание за отказ информира потребителите по смисъла на § 1, ал. 1, т. 2 от австрийския Закон за защита на потребителите (KSchG) относно тяхното законно право на отказ по отношение на договори, сключени от разстояние с TOY GmbH. То се прилага за два вида договори:"),
          list([
            "платените планове на TapRadar за бизнес клиенти (Bronze, Gold или Platinum), доколкото договарящата страна по изключение се счита за потребител или за нов предприемач по смисъла на § 1, ал. 3 KSchG, и",
            "регистрацията на безплатен акаунт на краен клиент в приложението TapRadar, тъй като при това вместо плащане ни предоставяте лични данни (по-специално имейл адрес, данни за използване и местоположение), а такива договори попадат в обхвата на правото на отказ съгласно Директивата относно правата на потребителите, изменена с Директива Omnibus, и австрийския Закон за договорите от разстояние и извън търговския обект (FAGG).",
          ]),
          callout("Практическа забележка", "Вашия акаунт на краен клиент на TapRadar можете и без друго по всяко време безплатно и без посочване на причини да изтриете чрез настройките на приложението (вж. Условията за потребители). Упражняването на посоченото по-долу право на отказ поради това по правило няма допълнително практическо значение за безплатната регистрация в приложението, но правно продължава да съществува независимо от това и без да засяга тази възможност."),
          p("За договори, сключени изключително в рамките на вече упражнявана търговска или самостоятелна професионална дейност, законното право на отказ на потребителя по принцип не съществува."),
        ],
      },
      {
        heading: "2. Право на отказ", blocks: [
          p("Имате право да се откажете от настоящия договор в срок от четиринадесет дни без да посочвате причини."),
          p("Срокът за отказ е четиринадесет дни от датата на сключване на договора."),
          p("За да упражните правото си на отказ, трябва да ни уведомите,"),
          list(["TOY GmbH", "Dr. Adolf-Schärf-Straße 1/2/24", "2353 Guntramsdorf, Австрия", "Имейл: support@tapradar.app"]),
          p("чрез недвусмислено изявление, например писмо, изпратено по пощата, или имейл, за Вашето решение да се откажете от настоящия договор. За тази цел можете да използвате долупосочения примерен формуляр за отказ, който обаче не е задължителен."),
          p("За спазването на срока за отказ е достатъчно да изпратите съобщението относно упражняването на правото на отказ преди изтичането на срока за отказ."),
        ],
      },
      {
        heading: "3. Последици от отказа", blocks: [
          p("Ако се откажете от настоящия договор, ще Ви възстановим всички плащания, които сме получили от Вас, без ненужно забавяне и във всеки случай не по-късно от четиринадесет дни от датата, на която сме уведомени за Вашето решение за отказ от настоящия договор. За това възстановяване ще използваме същото платежно средство, използвано от Вас при първоначалната транзакция, освен ако изрично не е договорено друго с Вас; в никакъв случай няма да Ви бъдат начислени такси във връзка с това възстановяване. При безплатната регистрация в приложението, възстановяване не се прилага поради липса на извършено плащане."),
          p("Ако сте поискали услугата да започне по време на срока за отказ, дължите заплащане на пропорционална сума, съответстваща на вече предоставените услуги до момента, в който ни уведомите за упражняването на правото на отказ от настоящия договор, в сравнение с общия обхват на услугите, предвидени в договора (компенсация за стойност). Тази компенсация за стойност се прилага изключително при платените планове; при безплатното използване на приложението не възниква претенция за компенсация за стойност, тъй като не се извършва плащане по смисъла на § 15 FAGG."),
        ],
      },
      {
        heading: "4. Предсрочно прекратяване на правото на отказ", blocks: [
          p("Ако сте дали изрично съгласие да започнем изпълнението на услугата преди изтичането на срока за отказ и сте потвърдили, че сте наясно, че с това съгласие губите правото си на отказ веднага щом изпълним изцяло договора, Вашето право на отказ се прекратява с пълното предоставяне на услугата съгласно § 18, ал. 1, т. 10 FAGG."),
        ],
      },
      {
        heading: "5. Примерен формуляр за отказ", blocks: [
          p("Ако желаете да се откажете от договора, моля попълнете този формуляр и го изпратете на support@tapradar.app или по пощата на посочения по-долу адрес."),
          p("До TOY GmbH, Dr. Adolf-Schärf-Straße 1/2/24, 2353 Guntramsdorf, Австрия, имейл: support@tapradar.app:"),
          p("С настоящото аз/ние (*) уведомявам/уведомяваме за отказа си от сключения от мен/нас (*) договор за предоставяне на следната услуга:"),
          list([
            "☐ Безплатен акаунт на краен клиент на TapRadar",
            "☐ План на TapRadar за бизнес клиенти: ______________________ (Bronze / Gold / Platinum – моля посочете)",
          ]),
          list([
            "Поръчано на: ______________________",
            "Име на потребителя/потребителите: ______________________",
            "Адрес на потребителя/потребителите: ______________________",
            "Подпис на потребителя/потребителите (само при уведомление на хартиен носител): ______________________",
            "Дата: ______________________",
          ]),
          p("(*) Ненужното се зачертава."),
        ],
      },
    ],
    sourcesHeading: "Списък на източниците",
    sourcesIntro: "Официални източници на ЕС и Австрия, на които се основава настоящото указание за отказ:",
    sources: [
      { label: "Директива относно правата на потребителите, Директива 2011/83/ЕС", url: "https://eur-lex.europa.eu/eli/dir/2011/83/oj" },
      { label: "Директива относно цифровото съдържание, Директива (ЕС) 2019/770", url: "https://eur-lex.europa.eu/eli/dir/2019/770/oj" },
      { label: "Австрийски закон за договорите от разстояние и извън търговския обект (FAGG)", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847" },
    ],
  },
};
