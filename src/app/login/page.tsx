import type { Metadata } from "next";
import { LoginClient, type LoginMode } from "./LoginClient";
import { authMessages } from "@/i18n/auth";
import { socialAuthMessages } from "@/i18n/social-auth";
import { localizedPath } from "@/i18n/config";
import { getLocale } from "@/i18n/server";
import { SOCIAL_AUTH_CALLBACK_ERROR } from "@/lib/social-auth";

type LoginSearchParams = Promise<{
  mode?: string | string[];
  password?: string | string[];
  account?: string | string[];
  error?: string | string[];
}>;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = authMessages[locale];
  return { title: messages.metaTitle, description: messages.metaDescription };
}

export default async function LoginPage({ searchParams }: { searchParams: LoginSearchParams }) {
  const [locale, params] = await Promise.all([getLocale(), searchParams]);
  const messages = authMessages[locale];
  const socialMessages = socialAuthMessages[locale];
  const initialMode: LoginMode = params.mode === "signup" ? "signup" : "signin";
  const isBusinessSignup = initialMode === "signup";

  return (
    <LoginClient
      messages={messages}
      socialMessages={socialMessages}
      enabledProviders={{
        google: process.env.NEXT_PUBLIC_GOOGLE_AUTH_ENABLED === "true",
        apple: process.env.NEXT_PUBLIC_APPLE_AUTH_ENABLED === "true",
      }}
      initialMode={initialMode}
      initialPasswordUpdated={params.password === "updated"}
      initialAuthError={params.error === SOCIAL_AUTH_CALLBACK_ERROR}
      isBusinessSignup={isBusinessSignup}
      privacyHref={localizedPath(locale, "/datenschutz")}
      termsHref={localizedPath(locale, isBusinessSignup ? "/agb-geschaeftskunden" : "/agb-verbraucher")}
    />
  );
}
