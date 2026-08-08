# TapRadar Produktions-Checkliste

## 1. Konten und Verantwortlichkeiten

- Zwei getrennte Plattform-Administratoren mit MFA anlegen.
- Supabase, Hosting, Stripe, Domain/DNS und E-Mail-Provider mit Firmenkonten betreiben.
- Zugriff auf Produktions-Secrets auf die kleinste notwendige Personengruppe begrenzen.
- Notfallkontakte und Verantwortliche für Datenschutzvorfälle dokumentieren.

## 2. Supabase

- Produktionsprojekt und getrenntes Stagingprojekt verwenden.
- E-Mail-Bestätigung, sichere Passwortrichtlinie und erlaubte Redirect-URLs konfigurieren.
- Point-in-Time-Recovery oder tägliche Backups aktivieren.
- Migrationen zuerst in Staging mit `supabase db push --dry-run` kontrollieren.
- RLS- und Integrationstests gegen Staging ausführen.

## 3. Stripe

- Bronze-, Gold- und Platinum-Preise im Live-Modus erstellen.
- Stripe Tax aktivieren, Steuerverhalten der Preise prüfen und UID-Erfassung aktiv testen.
- Live-Webhook auf `/api/stripe/webhook` einrichten.
- Subscription- und Invoice-Events abonnieren, die die Anwendung verarbeitet.
- Signatur-Secret und API-Key ausschließlich als Server-Secrets speichern.
- Testkauf, Upgrade, Kündigung, fehlgeschlagene Zahlung und Wiederaufnahme prüfen.
- Österreichische Bruttorechnung mit 20 % USt., EU-B2B-Rechnung mit gültiger UID/Reverse Charge und Drittlandfall steuerlich prüfen lassen.

## 4. E-Mail

- Absenderdomain beim Provider verifizieren und SPF, DKIM sowie DMARC setzen.
- `RESEND_API_KEY`, `EMAIL_FROM` und ein starkes `CRON_SECRET` setzen.
- Den Notification-Worker regelmäßig über `/api/internal/notifications` starten.
- Einladungs-, Freigabe-, Ablehnungs- und Datenschutz-E-Mails prüfen.

## 5. Sicherheit und Datenschutz

- Alle Secrets rotieren, die jemals lokal geteilt oder in Logs ausgegeben wurden.
- TLS erzwingen und Security-Header mit einem externen Scanner prüfen.
- Rate-Limits, Audit-Logs und `system_events` überwachen.
- Aufbewahrungsfristen für Audit-, System- und Zahlungsdaten festlegen.
- AVV, Datenschutzerklärung, AGB und Löschprozess juristisch prüfen lassen.
- AGB, Datenschutzerklärung, Widerrufsbelehrung und Checkout-Formulierungen vor Veröffentlichung juristisch prüfen und die freigegebenen Versionsnummern dokumentieren.
- Nach jeder wesentlichen Änderung der Rechtstexte die Versionen in `src/lib/legal-consent.ts` erhöhen und eine erneute Zustimmung testen.
- Eine dokumentierte Bearbeitung für offene `privacy_requests` einrichten.

## 6. Mobile App und Sync

- Sync-Schema-Version 4 unterstützen.
- Das `legal`-Objekt aus dem Sync auswerten; bei `required: true` persönliche Wallet-Daten sperren und die Zustimmungsansicht anzeigen.
- Aktuelle Dokumente über `GET /api/v1/legal/consent` laden und die getrennte AGB-/Datenschutzbestätigung über `POST /api/v1/legal/consent` speichern.
- `next_offsets`, `next_since` und `tombstones` dauerhaft speichern und verarbeiten.
- Offline-Wiederholung, Token-Ablauf und vollständige Neusynchronisierung testen.

## 7. Freigabe

- GitHub CI muss vollständig grün sein.
- Staging-Smoke-Test für Onboarding, Stripe, Adminfreigabe, Stempel und Reward durchführen.
- Produktions-Backup unmittelbar vor der ersten Migration erstellen.
- Rollback-Verantwortliche und Wartungsfenster festlegen.
- Nach Deployment Health-Checks, Webhook-Eingang, E-Mail-Queue und Fehlerereignisse kontrollieren.
