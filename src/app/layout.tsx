import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getHtmlLang } from "@/i18n/config";
import { getLocale } from "@/i18n/server";
import { translateText } from "@/i18n/translate";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title = translateText(locale, "TapRadar | Kostenlose digitale Stempelkarten-App");
  const description = translateText(locale, "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.");
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tapradar.app"),
    title,
    description,
    applicationName: "TapRadar",
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
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
