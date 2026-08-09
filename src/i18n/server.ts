import { cookies, headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "./config";

export async function getLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-tapradar-locale");
  if (isLocale(locale)) return locale;
  const cookieLocale = (await cookies()).get("tapradar_locale")?.value;
  return isLocale(cookieLocale) ? cookieLocale : defaultLocale;
}

