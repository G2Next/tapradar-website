import events from "./email-events.json";

export const emailEvents = events;
export type EmailEvent = keyof typeof events;
export type EmailLocale = "de" | "en";
export type EmailTemplate = { event_id: EmailEvent; locale: EmailLocale; subject: string; body: string; enabled: boolean; revision: number };

export function emailLocale(value: unknown): EmailLocale {
  return typeof value === "string" && /^de(?:[-_]|$)/i.test(value.trim()) ? "de" : "en";
}

export function isEmailEvent(value: string): value is EmailEvent {
  return Object.hasOwn(emailEvents, value);
}

export function validateTemplate(event: EmailEvent, subject: string, body: string) {
  if (!subject.trim() || subject.length > 200 || /[\r\n]/.test(subject)) return "Der Betreff muss 1–200 Zeichen ohne Zeilenumbruch enthalten.";
  if (!body.trim() || body.length > 20000) return "Der Text muss 1–20.000 Zeichen enthalten.";
  const allowed = Object.keys(emailEvents[event].sample);
  for (const text of [subject, body]) {
    const placeholders = [...text.matchAll(/\{\{\s*([a-z_]+)\s*\}\}/g)];
    if (/[{}]/.test(text.replace(/\{\{\s*([a-z_]+)\s*\}\}/g, ""))) return "Platzhalter bitte als {{name}} schreiben.";
    const unknown = placeholders.find((match) => !allowed.includes(match[1]));
    if (unknown) return `Unbekannter Platzhalter: ${unknown[1]}`;
  }
  return null;
}

export function renderEmail(template: Pick<EmailTemplate, "subject" | "body">, payload: Record<string, unknown>) {
  const fill = (text: string) => text.replace(/\{\{\s*([a-z_]+)\s*\}\}/g, (_, name: string) => {
    if (!Object.hasOwn(payload, name) || payload[name] == null) throw new Error(`Missing email placeholder: ${name}`);
    const value = payload[name];
    if (typeof value !== "string" && typeof value !== "number") throw new Error(`Invalid email placeholder: ${name}`);
    return String(value);
  });
  const subject = fill(template.subject).replace(/[\r\n]+/g, " ").slice(0, 998);
  const text = fill(template.body);
  const escaped = text.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);
  return { subject, text, html: `<div style="font-family:Arial,sans-serif;line-height:1.7;color:#102235;max-width:600px;margin:auto"><h1>TapRadar</h1><p>${escaped.replace(/\n/g, "<br>")}</p></div>` };
}
