import { LegalDocumentPage } from "@/components/LegalDocument";
import { privacyContent } from "@/content/legal/privacy";
import { resolveLegalDocument } from "@/content/legal/types";
import { getLocale } from "@/i18n/server";

export default async function DatenschutzPage() {
  const locale = await getLocale();
  const document = resolveLegalDocument(privacyContent, locale);
  return <LegalDocumentPage document={document} locale={locale} germanHref="/de/datenschutz" />;
}
