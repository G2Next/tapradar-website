import { describe, expect, it } from "vitest";
import { emailEvents, emailLocale, renderEmail, validateTemplate } from "./email-templates";

describe("transactional email languages and rendering", () => {
  it.each(["de", "DE", "de-AT", "de_DE", " de "])("uses German for %s", (value) => expect(emailLocale(value)).toBe("de"));
  it.each(["en", "en-US", "tr", "fr", "ar", "deutsch", "", null, undefined, 1])("falls back to English for %s", (value) => expect(emailLocale(value)).toBe("en"));
  it("validates and renders both versions of every event", () => {
    for (const [event, entry] of Object.entries(emailEvents)) for (const locale of ["de", "en"] as const) {
      expect(validateTemplate(event as keyof typeof emailEvents, entry[locale].subject, entry[locale].body)).toBeNull();
      const rendered = renderEmail(entry[locale], entry.sample);
      expect(rendered.subject).not.toContain("{{");
      expect(rendered.text).not.toContain("{{");
    }
  });
  it("rejects unknown and malformed placeholders before saving", () => {
    expect(validateTemplate("contact_reply", "Hello {{password}}", "Response")).toContain("Unbekannter");
    expect(validateTemplate("contact_reply", "Hello", "{{response}")).toContain("Platzhalter");
    expect(validateTemplate("contact_reply", "Header\nInjection", "Valid body")).toContain("Betreff");
  });
  it("escapes hostile content and does not interpret nested placeholders", () => {
    const message = renderEmail({ subject: "Reply: {{subject}}", body: "{{response}}" }, { subject: "A\r\nB", response: '<img src=x onerror=alert(1)> & {{secret}}' });
    expect(message.subject).toBe("Reply: A B");
    expect(message.html).not.toContain("<img");
    expect(message.html).toContain("&lt;img");
    expect(message.text).toContain("{{secret}}");
  });
  it("fails instead of silently sending an incomplete email", () => {
    expect(() => renderEmail({ subject: "Receipt", body: "{{betrag}}" }, {})).toThrow("Missing email placeholder");
  });
});
