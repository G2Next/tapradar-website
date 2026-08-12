import { LegalDocumentPage } from "@/components/LegalDocument";
import { termsConsumerContent } from "@/content/legal/terms-consumer";
import { resolveLegalDocument } from "@/content/legal/types";
import { getLocale } from "@/i18n/server";

export default async function AgbVerbraucherPage() {
  const locale = await getLocale();
  const document = resolveLegalDocument(termsConsumerContent, locale);
  return <LegalDocumentPage document={document} locale={locale} germanHref="/de/agb-verbraucher" />;
}
