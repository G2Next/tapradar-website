# Zentrales E-Mail-System

Die neue Seite `/admin/email-templates` ist ausschließlich für aktive Plattform-Admins erreichbar. Seite, Server Actions und Datenbank-RLS prüfen den Zugriff. Händler, Mitarbeitende, Kunden und öffentliche Besucher können weder Vorlagen noch Einstellungen oder Protokolle lesen oder ändern.

## Vorlagen und Ereignisse

Pro Ereignis gibt es genau eine deutsche und eine englische Vorlage mit Betreff, Klartext, Aktivierung und Versionsnummer. Vorschau und Versand verwenden denselben Renderer. Er verarbeitet nur erlaubte Platzhalter, ersetzt sie einmalig und maskiert HTML. Fehlende Werte brechen den Versand ab. Parallele Änderungen werden durch Versionsvergleich erkannt.

| Event-ID | Auslöser | Empfänger |
| --- | --- | --- |
| `contact_form_sent` | Kontaktanfrage nach gültiger CAPTCHA-Prüfung gespeichert | Absender |
| `business_registered` | Erste aktive Inhaber-Mitgliedschaft angelegt | Rechnungsadresse, sonst Inhaber |
| `customer_registered` | Kundenprofil bei Registrierung angelegt; ausdrücklich als Business markierte Konten ausgenommen | Kunde |
| `purchase_completed` | Rechnung wechselt auf `paid` oder wird als `paid` angelegt | Rechnungsadresse, sonst Inhaber |
| `offer_created` | Angebot/Aktion/Gutschein neu angelegt | Rechnungsadresse, sonst Inhaber |
| `push_created` | Push-Nachricht neu angelegt | Rechnungsadresse, sonst Inhaber |
| `team_invitation` | Bestehende Team-Einladung | Eingeladene Person |
| `review_submitted` | Bestehende Einreichung zur Prüfung | Geschäft |
| `organization_approved` | Bestehende Freigabe | Geschäft |
| `organization_rejected` | Bestehende Ablehnung | Geschäft |
| `privacy_request` | Bestehende Datenschutzanfrage | Anfragende Person |
| `contact_reply` | Admin antwortet auf Kontaktanfrage | Ursprünglicher Absender |

Die sechs neuen Events laufen als Datenbanktrigger innerhalb derselben Transaktion wie der Vorgang. Damit gelten sie für Website und Apps, soweit diese dieselben kanonischen Tabellen beschreiben. Auf bestehenden Datensätzen wird kein rückwirkender Versand ausgelöst. Angebots- und Push-Bestätigungen gehen an das Geschäft, nicht an sämtliche Kunden. Kaufbestätigungen beziehen sich auf die vorhandenen bezahlten `billing_invoices`; externe Bestellungen ohne Eintrag in dieser Tabelle lösen kein Event aus. Stabile Event-Schlüssel verhindern doppelte Zahlungsbestätigungen bei erneut verarbeiteten Webhooks während der Aufbewahrung des Outbox-Eintrags.

## Sprache

`de`, `de-AT` und `de_DE` → DE. Alle anderen, fehlenden oder unbekannten Werte → EN. Die Website speichert ihre gewählte Sprache beim Login, OAuth-Callback und Sprachwechsel in den Auth-Metadaten (`locale`). Bereits vorhandene `language` und `preferred_language` werden ebenfalls berücksichtigt. Der Datenbanktrigger ermittelt die Sprache des tatsächlichen Empfängers; bei einer Rechnungsadresse ohne eigenes Konto verwendet er die Sprache des Inhabers. Kontakte und Antworten behalten die beim Kontaktformular gespeicherte DE-/EN-Sprache. Andere Apps sollten `locale` in ihren Nutzer-Metadaten aktualisieren, wenn dort die Sprache geändert wird.

## Testmodus und Protokoll

Die Migration startet mit `test_mode = true` und ohne Testadresse. Vor dem Versand muss ein Admin eine eigene Testadresse speichern. Alle während des Testmodus erzeugten sowie schon vorhandenen ungesendeten Jobs werden dauerhaft als Test markiert; eine spätere Live-Umschaltung sendet sie nicht an Kunden. Testsendungen tragen `[TEST]` im Betreff. Der Testbutton verwendet die gespeicherte Vorlage und Beispieldaten. Deaktivierte Vorlagen werden als `cancelled` protokolliert.

Der Worker friert vor dem ersten Provider-Aufruf den tatsächlichen Empfänger, Absender, Text, HTML, Betreff, Sprachcode, Testmodus und die Vorlagenversion ein. Wiederholungen verwenden denselben Inhalt und Resend-Idempotenzschlüssel. Nach 23 Stunden werden unklare Sendungen zur manuellen Prüfung angehalten, da Resend Schlüssel nur 24 Stunden aufbewahrt. Live-Wiederholungen pausieren im Testmodus. `sent` bedeutet Annahme durch Resend, nicht bestätigte Zustellung im Postfach. Das Protokoll zeigt die letzten 100 Jobs; erfolgreiche und deaktivierte Einträge werden nach 90 Tagen bereinigt.

## Aktivierung

1. Migration `20260911160000_email_template_system.sql` zunächst in Staging anwenden; Notification-Scheduler während des Produktionswechsels pausieren, damit kein alter Worker die neuen Events oder Testeinstellungen falsch verarbeitet.
2. Google reCAPTCHA v3 für `tapradar.app` und `www.tapradar.app` erstellen. `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` und serverseitig `RECAPTCHA_SECRET_KEY` konfigurieren. `NEXT_PUBLIC_SITE_URL` muss die echte Website-Adresse sein. Beim Ändern des öffentlichen Schlüssels neu bauen/deployen.
3. `RESEND_API_KEY`, einen bei Resend verifizierten `EMAIL_FROM` sowie ein starkes `CRON_SECRET` konfigurieren. Die Admin-Seite speichert keine Provider-Schlüssel.
4. Website mit dieser Migration veröffentlichen. In **Administration → E-Mail-Vorlagen** die Testadresse speichern und Testmodus eingeschaltet lassen.
5. Für den vorhandenen Vercel-Hobby-Tarif ist der Scheduler in `supabase/operations/schedule-email-worker.sql` vorbereitet. In Supabase Vault denselben Wert wie Vercels `CRON_SECRET` als `tapradar_email_cron_secret` speichern und das Skript einmal ausführen. Es ruft den Worker jede Minute auf. Ohne Vault-Secret entsteht kein HTTP-Aufruf. Einen eventuell bestehenden Notification-Scheduler vorher deaktivieren. Der Worker verarbeitet bis zu fünf Jobs pro Aufruf; parallele Aufrufe werden durch `SKIP LOCKED` getrennt. Alternativ kann ein vorhandener Scheduler den mit `CRON_SECRET` geschützten GET-/POST-Endpunkt aufrufen.
6. Kontaktformular inklusive reCAPTCHA v3 prüfen; gespeicherte DE-/EN-Vorlagen testen und Einträge im Protokoll mit dem Testpostfach abgleichen.
7. Erst nach erfolgreicher Testphase in der Admin-Seite den Testmodus ausschalten. Nur neue Jobs werden live versendet.

Ohne gültige CAPTCHA-Konfiguration bleibt das Kontaktformular gesperrt und verweist auf `support@tapradar.app`. Ohne E-Mail-Konfiguration/Testadresse sendet der Worker nichts. Es existiert kein CAPTCHA-Bypass für Entwicklung oder Produktion. reCAPTCHA-Tokens werden serverseitig auf Erfolg, Mindestscore `0,5`, Aktion `contact` und erlaubten Hostnamen geprüft; fehlende, abgelaufene, wiederverwendete oder fremde Tokens werden abgelehnt.

## Tests

- `npm test`: Sprachfallback, Vorlagen, HTML-Maskierung, Platzhaltervalidierung, CAPTCHA, Server-Action-Adminschutz, Test-Routing und sichere Wiederholungen.
- `npm run test:email`: nur lokales Supabase; echte RLS-Prüfungen mit Admin-/Händler-/Kundenkonten, Versionskonflikte, alle sechs neuen Events, Testmodus und Zahlungs-Deduplizierung. Standardmäßig liest der Test die lokale Supabase-CLI-Konfiguration; alternativ lokale `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` setzen. Kein Aufruf eines externen E-Mail-Dienstes.
- `supabase db lint --local`, `npm run lint`, `npm run build`.

Referenzen: [Supabase: geplante Aufrufe](https://supabase.com/docs/guides/functions/schedule-functions), [Google: reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3), [Google: serverseitige Validierung](https://developers.google.com/recaptcha/docs/verify), [Resend: Idempotenz](https://resend.com/docs/dashboard/emails/idempotency-keys).
