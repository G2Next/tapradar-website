# Security Policy

## Reporting a vulnerability

Please do not open a public issue for a suspected vulnerability. Send the report to `support@tapradar.app` with the subject `Security: TapRadar` and include the affected URL, reproducible steps, impact, and any suggested mitigation. Do not access or modify data that does not belong to you.

We acknowledge security reports as quickly as possible, triage severity, preserve relevant logs, and coordinate remediation and disclosure with the reporter.

## Operational baseline

- Production changes go through pull requests and required CI checks.
- Secrets belong in Vercel, Supabase Vault, or the relevant provider and must not be committed.
- High and critical dependency findings block CI.
- Platform-admin access requires a dedicated account and MFA.
- Database backups and restore tests must be verified on a regular schedule.
- Security Advisor, application errors, audit logs, Vercel alerts, and authentication logs must be reviewed regularly.
- Incident response includes credential rotation, session revocation, log preservation, impact analysis, user notification where required, and a post-incident review.
