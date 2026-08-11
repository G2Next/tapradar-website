import { LegalDocumentPage } from "@/components/LegalDocument";
import { withdrawalContent } from "@/content/legal/withdrawal";
import { resolveLegalDocument } from "@/content/legal/types";
import { getLocale } from "@/i18n/server";

export default async function WiderrufPage() {
  const locale = await getLocale();
  const document = resolveLegalDocument(withdrawalContent, locale);
  return <LegalDocumentPage document={document} locale={locale} germanHref="/de/widerrufsbelehrung" />;
}
