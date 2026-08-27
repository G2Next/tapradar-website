import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocument";
import { privacyContent } from "@/content/legal/privacy";
import { resolveLegalDocument } from "@/content/legal/types";
import { getLocale } from "@/i18n/server";
import { createPublicPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPublicPageMetadata(locale, "/datenschutz", "Datenschutzerklärung | TapRadar", "Informationen zur Verarbeitung personenbezogener Daten bei TapRadar.");
}

export default async function DatenschutzPage() {
  const locale = await getLocale();
  const document = resolveLegalDocument(privacyContent, locale);
  return <LegalDocumentPage document={document} locale={locale} germanHref="/de/datenschutz" />;
}
