import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocument";
import { withdrawalContent } from "@/content/legal/withdrawal";
import { resolveLegalDocument } from "@/content/legal/types";
import { getLocale } from "@/i18n/server";
import { createPublicPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPublicPageMetadata(locale, "/widerrufsbelehrung", "Widerrufsbelehrung | TapRadar", "Informationen zum Widerrufsrecht bei TapRadar einschließlich Muster-Widerrufsformular.");
}

export default async function WiderrufPage() {
  const locale = await getLocale();
  const document = resolveLegalDocument(withdrawalContent, locale);
  return <LegalDocumentPage document={document} locale={locale} germanHref="/de/widerrufsbelehrung" />;
}
