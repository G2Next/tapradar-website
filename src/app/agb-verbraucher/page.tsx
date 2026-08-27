import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocument";
import { termsConsumerContent } from "@/content/legal/terms-consumer";
import { resolveLegalDocument } from "@/content/legal/types";
import { getLocale } from "@/i18n/server";
import { createPublicPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPublicPageMetadata(locale, "/agb-verbraucher", "Verbraucher-AGB | TapRadar", "Allgemeine Geschäftsbedingungen für die kostenlose Nutzung der TapRadar-App durch Endkundinnen und Endkunden.");
}

export default async function AgbVerbraucherPage() {
  const locale = await getLocale();
  const document = resolveLegalDocument(termsConsumerContent, locale);
  return <LegalDocumentPage document={document} locale={locale} germanHref="/de/agb-verbraucher" />;
}
