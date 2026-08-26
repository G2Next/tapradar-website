import translationsJson from "./structured.generated.json";
import type { Locale } from "./config";

const translations = translationsJson as Partial<Record<Locale, Record<string, string>>>;

export const generatedStructuredLocales = ["fr", "it", "es", "cs", "sk"] as const satisfies readonly Locale[];

export function localizeStructuredMessage<T>(value: T, locale: Locale): T {
  if (typeof value === "string") {
    return (translations[locale]?.[value] ?? value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeStructuredMessage(item, locale)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localizeStructuredMessage(item, locale)]),
    ) as T;
  }

  return value;
}
