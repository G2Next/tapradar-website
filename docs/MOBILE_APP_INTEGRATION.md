# Website–App-Integration mit zwei Supabase-Projekten

## Projekte und Verantwortung

| System | Supabase-Projekt | Führende Daten |
| --- | --- | --- |
| Website und Händler-Dashboard | `fcaymiyewnuzbdgpxsrt` | Händlerkonten, Organisationen, Filialen, Loyalty-Konfiguration, Aktionen, Gutscheine, Freigaben und Abrechnung |
| Kunden- und Merchant-App | `xpadukswcayehvmpouib` | bestehende mobile Konten, Push-Tokens und vorläufig weiterhin operative App-Daten |

Die Projekte haben getrennte Auth-Schlüssel und getrennte Benutzerverzeichnisse. Ein JWT ist nur beim ausstellenden Projekt gültig. Passwörter, Refresh-Tokens und Service-Role-Keys werden niemals zwischen Projekten kopiert.

## Öffentlicher Katalog für die Kunden-App

Die Kunden-App lädt freigegebene Händlerdaten über:

```http
GET https://www.tapradar.app/api/v1/sync
```

Für `organizations`, `locations`, `loyalty_cards`, `offers` und öffentliche `assets` ist keine Anmeldung erforderlich. Dadurch erscheinen über die Website registrierte und vom Admin freigegebene Filialen automatisch in der Kunden-App, ohne Tabellen zwischen Supabase-Projekten zu duplizieren.

Die App speichert:

- `schema_version`
- `next_since`
- alle nicht leeren `pagination.next_offsets`
- `data.tombstones`

Bei einem vollständigen Seitenlauf werden die Offsets weitergesendet. Erst nach der letzten Seite wird `next_since` als neuer inkrementeller Startwert gespeichert.

## Mobile Identität

Wenn die App ihren eigenen Access Token mitsendet, konfiguriert die Website serverseitig:

```text
MOBILE_APP_SUPABASE_URL=https://xpadukswcayehvmpouib.supabase.co
MOBILE_APP_SUPABASE_ANON_KEY=<public app anon key>
```

Request:

```http
Authorization: Bearer <mobile-app-access-token>
```

Die Website validiert den Token beim App-Supabase. Die Antwort enthält dann:

```json
{
  "identity": {
    "source": "mobile_app",
    "authenticated": true,
    "external_user_id": "...",
    "website_account_linked": false
  }
}
```

Diese Identität berechtigt nur zum vorgesehenen mobilen Zugriff. Sie wird nicht als Website-Händler oder Website-Kunde ausgegeben. Ein ungültiger Fremdtoken erhält `401 invalid_access_token`.

## Händlerregistrierung und Merchant-App

Neue Geschäftskunden registrieren sich auf der Website. Website-Zugangsdaten sind nicht automatisch Zugangsdaten des separaten App-Supabase. Bis die Merchant-App vollständig auf Website-APIs umgestellt ist, muss sie für Händlerverwaltung auf das Web-Dashboard verlinken oder eine eigene, ausdrücklich gekennzeichnete Legacy-Anmeldung verwenden.

Keinesfalls darf die Website dasselbe Klartextpasswort in beiden Projekten anlegen. Für einen späteren nativen Merchant-Login ist ein eigener Token-Austausch beziehungsweise eine vollständige API-Schicht mit serverseitiger Rollenprüfung erforderlich.

## Rollout

1. Website-Staging mit Website-Supabase konfigurieren.
2. `MOBILE_APP_SUPABASE_URL` und den öffentlichen App-Anon-Key serverseitig setzen.
3. `/api/v1/sync` anonym, mit Website-Token und mit App-Token testen.
4. Kunden-App so ändern, dass Discover, Filialdetails, Loyalty-Karten, Aktionen und Gutscheine den Sync-Endpunkt konsumieren.
5. Lokalen App-Cache und Tombstone-Verarbeitung testen.
6. Erst nach kontrolliertem Test Website und Kunden-App veröffentlichen.
7. Merchant-App anschließend schrittweise von direkten Geschäftstabellen auf abgesicherte Website-APIs migrieren.

## Sicherheitsregeln

- Kein Service-Role-Key in Browser, App-Bundle oder Repository.
- Kein `platform_api_key` im mobilen Binary; öffentliche Katalogdaten benötigen keinen Schlüssel.
- Mobile Tokens immer beim App-Supabase validieren.
- Website-Tokens immer beim Website-Supabase validieren.
- Freigegebene Organisationen und Filialen bleiben die einzige öffentliche Quelle.
- Schreiboperationen benötigen weiterhin serverseitig geprüfte Rollen und Mandantenzugehörigkeit.
