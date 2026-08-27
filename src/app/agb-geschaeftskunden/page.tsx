import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocument";
import { termsBusinessContent } from "@/content/legal/terms-business";
import { resolveLegalDocument } from "@/content/legal/types";
import { getLocale } from "@/i18n/server";
import { createPublicPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPublicPageMetadata(locale, "/agb-geschaeftskunden", "Geschäftskunden-AGB | TapRadar", "Allgemeine Geschäftsbedingungen für Unternehmen, die das TapRadar-Dashboard und kostenpflichtige Tarife nutzen.");
}

export default async function AgbGeschaeftskundenPage() {
  const locale = await getLocale();
  const document = resolveLegalDocument(termsBusinessContent, locale);
  return <LegalDocumentPage document={document} locale={locale} germanHref="/de/agb-geschaeftskunden" />;
}
