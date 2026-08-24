import type { Metadata } from "next";
import { LoginClient, type LoginMode } from "./LoginClient";
import { authMessages } from "@/i18n/auth";
import { localizedPath } from "@/i18n/config";
import { getLocale } from "@/i18n/server";

type LoginSearchParams = Promise<{
  mode?: string | string[];
  password?: string | string[];
  account?: string | string[];
}>;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = authMessages[locale];
  return { title: messages.metaTitle, description: messages.metaDescription };
}

export default async function LoginPage({ searchParams }: { searchParams: LoginSearchParams }) {
  const [locale, params] = await Promise.all([getLocale(), searchParams]);
  const messages = authMessages[locale];
  const initialMode: LoginMode = params.mode === "signup" || params.mode === "magic" ? params.mode : "signin";
  const isBusinessSignup = params.mode === "signup" && params.account === "business";

  return (
    <LoginClient
      messages={messages}
      initialMode={initialMode}
      initialPasswordUpdated={params.password === "updated"}
      isBusinessSignup={isBusinessSignup}
      backHref={localizedPath(locale, "/")}
      privacyHref={localizedPath(locale, "/datenschutz")}
      termsHref={localizedPath(locale, isBusinessSignup ? "/agb-geschaeftskunden" : "/agb-verbraucher")}
    />
  );
}
