# Sicheres Deployment

## Reihenfolge

1. Aktuelles Produktionsbackup und Wiederherstellungspunkt bestätigen.
2. Den zu veröffentlichenden Git-Commit eindeutig markieren.
3. Migrationen gegen eine aktuelle Stagingkopie ausführen.
4. `npm run check:production`, `npm test`, `npm run lint`, `npm run build` und die Integrationstests ausführen.
5. Produktionsmigrationen mit Supabase CLI oder der freigegebenen CI-Pipeline anwenden.
6. Webanwendung mit exakt demselben Commit deployen.
7. `/api/health` und `/api/health/ready` prüfen.
8. Einen kontrollierten Geschäfts- und Kundentest ausführen.

## Datenbank

Migrationen sind vorwärtsgerichtet und dürfen nach einem Produktionslauf nicht verändert werden. Korrekturen erhalten eine neue Zeitstempel-Migration. Vor `db push` immer die geplante Differenz prüfen. Niemals `db reset` gegen ein Remote-Produktionsprojekt ausführen.

## Rollback

Bei einem reinen Webfehler wird der vorherige Web-Commit erneut bereitgestellt. Bei einer nicht rückwärtskompatiblen Datenbankänderung wird der Dienst in Wartungsmodus gesetzt und anhand des geprüften Wiederherstellungsplans entschieden, ob eine Korrekturmigration oder eine Backup-Wiederherstellung sicherer ist. Eine Datenbank-Wiederherstellung ist eine Betriebsentscheidung und darf nicht automatisiert ohne Freigabe erfolgen.

## Geplante Aufgaben

- Notification-Worker: `POST /api/internal/notifications`, Header `Authorization: Bearer $CRON_SECRET`, alle 2–5 Minuten.
- Health-Check: `GET /api/health` jede Minute.
- Readiness-Check: `GET /api/health/ready` alle fünf Minuten.
- Offene Datenschutzanfragen und fehlgeschlagene Benachrichtigungen täglich kontrollieren.
- Stripe-Webhook-Status und `system_events` alarmieren, wenn Fehler wiederholt auftreten.
