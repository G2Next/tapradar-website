import type { Locale } from "@/i18n/config";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; heading: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type LegalSection = { heading: string; blocks: LegalBlock[] };

export type LegalSource = { label: string; url: string };

export type LegalDocument = {
  title: string;
  subtitle: string;
  stand: string;
  intro: LegalBlock[];
  sections: LegalSection[];
  sourcesHeading?: string;
  sourcesIntro?: string;
  sources?: LegalSource[];
};

export function p(text: string): LegalBlock {
  return { type: "p", text };
}

export function list(items: string[]): LegalBlock {
  return { type: "list", items };
}

export function callout(heading: string, text: string): LegalBlock {
  return { type: "callout", heading, text };
}

export function table(headers: string[], rows: string[][]): LegalBlock {
  return { type: "table", headers, rows };
}

export function resolveLegalDocument(
  content: { de: LegalDocument } & Partial<Record<Locale, LegalDocument>>,
  locale: Locale,
): LegalDocument {
  return content[locale] ?? content.de;
}
