import type { Metadata } from "next";
import { ClientTranslator } from "@/components/ClientTranslator";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getHtmlLang } from "@/i18n/config";
import { getLocale } from "@/i18n/server";
import { translateText } from "@/i18n/translate";
import { PUBLIC_SITE_URL } from "@/lib/site";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title = translateText(locale, "TapRadar | Kostenlose digitale Stempelkarten-App");
  const description = translateText(locale, "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.");
  return {
    metadataBase: new URL(PUBLIC_SITE_URL),
    title,
    description,
    applicationName: "TapRadar",
    openGraph: {
      title,
      description,
      siteName: "TapRadar",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={getHtmlLang(locale)} className="h-full antialiased">
      <body className="min-h-full bg-slate-950 font-sans">
        <ClientTranslator locale={locale} />
        <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
