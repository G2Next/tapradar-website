# Merchant Management API v1

Phase 3B provides a website-owned API for the Merchant App. The app must no longer write the website Supabase tables directly for the resources covered here.

## Authentication and tenant selection

- Send the website Supabase access token as `Authorization: Bearer <access-token>`.
- Send the selected website organization UUID as `X-Organization-Id` on organization-scoped routes.
- The server verifies the token, active membership and role. It never accepts an organization ID from a JSON body.
- Mutations require the current account legal acceptance.
- Responses use `Cache-Control: private, no-store` and include `X-Request-Id` and `X-TapRadar-Merchant-API-Version: 1`.

Successful responses have `{ "data": ..., "meta": { "request_id": "..." } }`. Errors have `{ "error": { "code": "...", "message": "...", "details": ..., "request_id": "..." } }`.

## Endpoints

| Method | Route | Minimum role | Purpose |
| --- | --- | --- | --- |
| GET | `/api/v1/merchant/context` | active member | Memberships, selected organization, plan and permitted locations |
| GET | `/api/v1/merchant/dashboard` | active member | Shared daily metrics and privacy-safe live activity for website and Merchant App |
| GET, PATCH | `/api/v1/merchant/organization` | member / manager | Read or edit safe organization profile fields |
| GET, POST | `/api/v1/merchant/locations` | member / manager | List or create locations; creation enforces the plan limit |
| PATCH, DELETE | `/api/v1/merchant/locations/:id` | manager | Edit or delete a non-primary location |
| GET, POST | `/api/v1/merchant/loyalty-cards` | member / manager | List or create loyalty cards |
| PATCH | `/api/v1/merchant/loyalty-cards/:id` | manager | Edit a loyalty card |
| GET, POST | `/api/v1/merchant/offers` | member / manager | List or create actions/coupons (Gold or Platinum) |
| PATCH, DELETE | `/api/v1/merchant/offers/:id` | manager | Edit or delete an action/coupon (Gold or Platinum) |

`owner` and `manager` satisfy the manager requirement. `staff` reads are restricted to assigned locations. Database RLS remains active for every user-scoped operation.

The dashboard accepts an optional `X-Location-Id`. Owners and managers may omit it for an organization-wide view. Staff requests are always restricted to assigned locations. Calendar-day metrics use the selected or primary location timezone. Customer activity contains a stable anonymized label instead of email addresses or profile data.

## Safe retries

For `POST`, `PATCH` and `DELETE`, the app must send an `Idempotency-Key` containing a fresh UUID. Repeating the identical request with that key returns the stored result and `X-Idempotent-Replay: true`. Reusing the key for different input returns HTTP 409. Records expire after 24 hours.

## Audit and mobile propagation

Organization, location, loyalty-card and offer changes are written to `audit_logs` by database triggers in the same transaction. Existing sync triggers produce tombstones for deletions, so the customer app receives changes through the website sync API instead of connecting to the website database.

## Rollout

1. Deploy this API and migration to a preview environment.
2. Point an internal Merchant App build at the preview website API.
3. Verify login, organization switching, CRUD, role denial, plan limits and customer-app sync.
4. Deploy the website after approval; then replace the matching direct table calls in the Merchant App endpoint by endpoint.

## Mitarbeiter-Terminal API

PIN-basierte Terminal-Mitarbeiter verwenden keine Portal-Anmeldung. Der Geschäftsadmin erstellt sie unter
`/dashboard/team`; dort werden Business-Code, Tarifbelegung, Status, Filialrechte und die einmalig sichtbare PIN
verwaltet.

| Method | Route | Authentifizierung | Zweck |
| --- | --- | --- | --- |
| POST | `/api/v1/staff/login` | Business-Code + PIN im JSON-Body | 12-Stunden-Terminalsitzung erstellen |
| GET | `/api/v1/staff/session` | `Authorization: Bearer <session_token>` | Sitzung und erlaubte Filialen prüfen |
| DELETE | `/api/v1/staff/session` | `Authorization: Bearer <session_token>` | Sitzung widerrufen |

Der Login-Body lautet `{ "business_code": "TAP482", "pin": "012345" }`. Fehlgeschlagene Versuche werden pro
Geschäft und Netzwerkadresse begrenzt; nach fünf Fehlversuchen sperrt das System die Anmeldung für 15 Minuten. PINs werden niemals
im Klartext gespeichert oder über Lese-Endpunkte zurückgegeben. Eine Statusänderung, PIN-Erneuerung oder Löschung
widerruft vorhandene Sitzungen sofort beziehungsweise entfernt sie durch die referenzielle Löschung.
