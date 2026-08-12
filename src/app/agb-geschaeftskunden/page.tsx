import { LegalDocumentPage } from "@/components/LegalDocument";
import { termsBusinessContent } from "@/content/legal/terms-business";
import { resolveLegalDocument } from "@/content/legal/types";
import { getLocale } from "@/i18n/server";

export default async function AgbGeschaeftskundenPage() {
  const locale = await getLocale();
  const document = resolveLegalDocument(termsBusinessContent, locale);
  return <LegalDocumentPage document={document} locale={locale} germanHref="/de/agb-geschaeftskunden" />;
}
