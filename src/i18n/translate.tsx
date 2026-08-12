import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import generatedCatalog from "./secondary.generated.json";
import appCatalogJson from "./app.generated.json";
import legalCatalogJson from "./legal.generated.json";
import currentCatalogJson from "./current.generated.json";
import { dashboardMessages } from "./dashboard";
import { legalManualOverrides } from "./legal";
import type { Locale } from "./config";

const catalog = generatedCatalog as Partial<Record<Locale, Record<string, string>>>;
const appCatalog = appCatalogJson as Partial<Record<Locale, Record<string, string>>>;
const legalCatalog = legalCatalogJson as Partial<Record<Locale, Record<string, string>>>;
const currentCatalog = currentCatalogJson as Partial<Record<Locale, Record<string, string>>>;

const supplements: { de: Record<string, string> } & Partial<Record<Locale, Record<string, string>>> = {
  de: { Funktionen: "Funktionen", "Warum TapRadar": "Warum TapRadar", "So starten Sie": "So starten Sie", "Was Sie bekommen": "Was Sie bekommen", Pakete: "Pakete", Name: "Name", Support: "Support" },
  en: { Funktionen: "Features", "Warum TapRadar": "Why TapRadar", "So starten Sie": "How to get started", "Was Sie bekommen": "What you get", Pakete: "Plans", Name: "Name", Support: "Support" },
  tr: { Funktionen: "Özellikler", "Warum TapRadar": "Neden TapRadar?", "So starten Sie": "Nasıl başlanır?", "Was Sie bekommen": "Neler elde edersiniz?", Pakete: "Paketler", Name: "Ad Soyad", Support: "Destek" },
  "sr-Latn": { Funktionen: "Funkcije", "Warum TapRadar": "Zašto TapRadar", "So starten Sie": "Kako da počnete", "Was Sie bekommen": "Šta dobijate", Pakete: "Paketi", Name: "Ime", Support: "Podrška" },
  bs: { Funktionen: "Funkcije", "Warum TapRadar": "Zašto TapRadar", "So starten Sie": "Kako započeti", "Was Sie bekommen": "Šta dobijate", Pakete: "Paketi", Name: "Ime", Support: "Podrška" },
  hr: { Funktionen: "Značajke", "Warum TapRadar": "Zašto TapRadar", "So starten Sie": "Kako započeti", "Was Sie bekommen": "Što dobivate", Pakete: "Paketi", Name: "Ime", Support: "Podrška" },
  hu: { Funktionen: "Funkciók", "Warum TapRadar": "Miért a TapRadar?", "So starten Sie": "Így kezdheti el", "Was Sie bekommen": "Amit kap", Pakete: "Csomagok", Name: "Név", Support: "Támogatás" },
  ro: { Funktionen: "Funcții", "Warum TapRadar": "De ce TapRadar", "So starten Sie": "Cum începeți", "Was Sie bekommen": "Ce primiți", Pakete: "Pachete", Name: "Nume", Support: "Asistență" },
  pl: { Funktionen: "Funkcje", "Warum TapRadar": "Dlaczego TapRadar", "So starten Sie": "Jak zacząć", "Was Sie bekommen": "Co otrzymujesz", Pakete: "Pakiety", Name: "Imię i nazwisko", Support: "Pomoc" },
  bg: { Funktionen: "Функции", "Warum TapRadar": "Защо TapRadar", "So starten Sie": "Как да започнете", "Was Sie bekommen": "Какво получавате", Pakete: "Пакети", Name: "Име", Support: "Поддръжка" },
};

export function translateText(locale: Locale, value: string) {
  if (locale === "de") return value;
  const key = value.trim();
  if (!key) return value;
  const commonOverride = metadataOverrides[locale]?.[key] ?? (key === "Bitte anmelden"
    ? (dashboardMessages[locale] ?? dashboardMessages.de).loginTitle
    : key === "Zum Login"
      ? (dashboardMessages[locale] ?? dashboardMessages.de).loginCta
      : businessOverrides[locale]?.[key]);
  let translated = commonOverride ?? supplements[locale]?.[key] ?? legalManualOverrides[locale]?.[key] ?? legalCatalog[locale]?.[key] ?? currentCatalog[locale]?.[key] ?? appCatalog[locale]?.[key] ?? catalog[locale]?.[key];
  if (!translated) return value;
  if (locale === "sr-Latn") translated = transliterateSerbian(translated);
  const leading = value.match(/^\s*/u)?.[0] ?? "";
  const trailing = value.match(/\s*$/u)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

const businessOverrides: { de: Record<string, string> } & Partial<Record<Locale, Record<string, string>>> = {
  de: { Geschäft: "Geschäft", "Geschäft speichern": "Geschäft speichern" },
  en: { Geschäft: "Business", "Geschäft speichern": "Save business" },
  tr: { Geschäft: "İşletme", "Geschäft speichern": "İşletmeyi kaydet" },
  "sr-Latn": { Geschäft: "Preduzeće", "Geschäft speichern": "Sačuvaj preduzeće" },
  bs: { Geschäft: "Firma", "Geschäft speichern": "Sačuvaj firmu" },
  hr: { Geschäft: "Tvrtka", "Geschäft speichern": "Spremi tvrtku" },
  hu: { Geschäft: "Vállalkozás", "Geschäft speichern": "Vállalkozás mentése" },
  ro: { Geschäft: "Afacere", "Geschäft speichern": "Salvează afacerea" },
  pl: { Geschäft: "Firma", "Geschäft speichern": "Zapisz firmę" },
  bg: { Geschäft: "Бизнес", "Geschäft speichern": "Запази бизнеса" },
};

const metadataOverrides: Partial<Record<Locale, Record<string, string>>> = {
  en: {
    "TapRadar | Alle Stempelkarten und Belohnungen in einer App": "TapRadar | All loyalty cards and rewards in one app",
    "TapRadar ist die kostenlose digitale Stempelkarten-App für Kunden: lokale Geschäfte entdecken, Stempel sammeln und Belohnungen erhalten.": "TapRadar is the free digital loyalty card app: discover local businesses, collect stamps, and earn rewards.",
    "TapRadar | Kostenlose digitale Stempelkarten-App": "TapRadar | Free digital loyalty card app",
    "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.": "TapRadar is the free app for digital loyalty cards, local businesses, and rewards.",
  },
  tr: {
    "TapRadar | Alle Stempelkarten und Belohnungen in einer App": "TapRadar | Tüm damga kartları ve ödüller tek uygulamada",
    "TapRadar ist die kostenlose digitale Stempelkarten-App für Kunden: lokale Geschäfte entdecken, Stempel sammeln und Belohnungen erhalten.": "TapRadar, müşteriler için ücretsiz dijital damga kartı uygulamasıdır: yerel işletmeleri keşfedin, damga toplayın ve ödüller kazanın.",
    "TapRadar | Kostenlose digitale Stempelkarten-App": "TapRadar | Ücretsiz dijital damga kartı uygulaması",
    "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.": "TapRadar, dijital damga kartları, yerel işletmeler ve ödüller için ücretsiz bir uygulamadır.",
  },
  "sr-Latn": {
    "TapRadar | Alle Stempelkarten und Belohnungen in einer App": "TapRadar | Sve kartice sa pečatima i nagrade u jednoj aplikaciji",
    "TapRadar ist die kostenlose digitale Stempelkarten-App für Kunden: lokale Geschäfte entdecken, Stempel sammeln und Belohnungen erhalten.": "TapRadar je besplatna aplikacija za digitalne kartice sa pečatima: otkrijte lokalna preduzeća, skupljajte pečate i osvojite nagrade.",
    "TapRadar | Kostenlose digitale Stempelkarten-App": "TapRadar | Besplatna aplikacija za digitalne kartice sa pečatima",
    "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.": "TapRadar je besplatna aplikacija za digitalne kartice sa pečatima, lokalne prodavnice i nagrade.",
  },
  bs: {
    "TapRadar | Alle Stempelkarten und Belohnungen in einer App": "TapRadar | Sve kartice s pečatima i nagrade u jednoj aplikaciji",
    "TapRadar ist die kostenlose digitale Stempelkarten-App für Kunden: lokale Geschäfte entdecken, Stempel sammeln und Belohnungen erhalten.": "TapRadar je besplatna aplikacija za digitalne kartice s pečatima: otkrijte lokalne firme, skupljajte pečate i osvojite nagrade.",
    "TapRadar | Kostenlose digitale Stempelkarten-App": "TapRadar | Besplatna aplikacija za digitalne kartice s pečatima",
    "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.": "TapRadar je besplatna aplikacija za digitalne kartice s pečatima, lokalne trgovine i nagrade.",
  },
  hr: {
    "TapRadar | Alle Stempelkarten und Belohnungen in einer App": "TapRadar | Sve kartice s pečatima i nagrade u jednoj aplikaciji",
    "TapRadar ist die kostenlose digitale Stempelkarten-App für Kunden: lokale Geschäfte entdecken, Stempel sammeln und Belohnungen erhalten.": "TapRadar je besplatna aplikacija za digitalne kartice s pečatima: otkrijte lokalne tvrtke, skupljajte pečate i osvojite nagrade.",
    "TapRadar | Kostenlose digitale Stempelkarten-App": "TapRadar | Besplatna aplikacija za digitalne kartice s pečatima",
    "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.": "TapRadar je besplatna aplikacija za digitalne kartice s pečatima, lokalne trgovine i nagrade.",
  },
  hu: {
    "TapRadar | Alle Stempelkarten und Belohnungen in einer App": "TapRadar | Minden pecsétkártya és jutalom egy alkalmazásban",
    "TapRadar ist die kostenlose digitale Stempelkarten-App für Kunden: lokale Geschäfte entdecken, Stempel sammeln und Belohnungen erhalten.": "A TapRadar ingyenes digitális pecsétkártya-alkalmazás: fedezze fel a helyi vállalkozásokat, gyűjtsön pecséteket és szerezzen jutalmakat.",
    "TapRadar | Kostenlose digitale Stempelkarten-App": "TapRadar | Ingyenes digitális pecsétkártya-alkalmazás",
    "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.": "A TapRadar ingyenes alkalmazás digitális pecsétkártyákhoz, helyi üzletekhez és jutalmakhoz.",
  },
  ro: {
    "TapRadar | Alle Stempelkarten und Belohnungen in einer App": "TapRadar | Toate cardurile cu ștampile și recompensele într-o singură aplicație",
    "TapRadar ist die kostenlose digitale Stempelkarten-App für Kunden: lokale Geschäfte entdecken, Stempel sammeln und Belohnungen erhalten.": "TapRadar este aplicația gratuită pentru carduri digitale cu ștampile: descoperiți afaceri locale, colectați ștampile și primiți recompense.",
    "TapRadar | Kostenlose digitale Stempelkarten-App": "TapRadar | Aplicație gratuită pentru carduri digitale cu ștampile",
    "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.": "TapRadar este aplicația gratuită pentru carduri digitale cu ștampile, afaceri locale și recompense.",
  },
  pl: {
    "TapRadar | Alle Stempelkarten und Belohnungen in einer App": "TapRadar | Wszystkie karty pieczątkowe i nagrody w jednej aplikacji",
    "TapRadar ist die kostenlose digitale Stempelkarten-App für Kunden: lokale Geschäfte entdecken, Stempel sammeln und Belohnungen erhalten.": "TapRadar to bezpłatna aplikacja z cyfrowymi kartami pieczątkowymi: odkrywaj lokalne firmy, zbieraj pieczątki i zdobywaj nagrody.",
    "TapRadar | Kostenlose digitale Stempelkarten-App": "TapRadar | Bezpłatna aplikacja z cyfrowymi kartami pieczątkowymi",
    "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.": "TapRadar to bezpłatna aplikacja do cyfrowych kart pieczątkowych, lokalnych firm i nagród.",
  },
  bg: {
    "TapRadar | Alle Stempelkarten und Belohnungen in einer App": "TapRadar | Всички карти с печати и награди в едно приложение",
    "TapRadar ist die kostenlose digitale Stempelkarten-App für Kunden: lokale Geschäfte entdecken, Stempel sammeln und Belohnungen erhalten.": "TapRadar е безплатното приложение за дигитални карти с печати: откривайте местни бизнеси, събирайте печати и получавайте награди.",
    "TapRadar | Kostenlose digitale Stempelkarten-App": "TapRadar | Безплатно приложение за дигитални карти с печати",
    "TapRadar ist die kostenlose App für digitale Stempelkarten, lokale Geschäfte und Belohnungen.": "TapRadar е безплатното приложение за дигитални карти с печати, местни бизнеси и награди.",
  },
};

function transliterateSerbian(value: string) {
  const pairs: Record<string, string> = {
    Љ: "Lj", Њ: "Nj", Џ: "Dž", љ: "lj", њ: "nj", џ: "dž",
    А: "A", Б: "B", В: "V", Г: "G", Д: "D", Ђ: "Đ", Е: "E", Ж: "Ž", З: "Z", И: "I", Ј: "J", К: "K", Л: "L", М: "M", Н: "N", О: "O", П: "P", Р: "R", С: "S", Т: "T", Ћ: "Ć", У: "U", Ф: "F", Х: "H", Ц: "C", Ч: "Č", Ш: "Š",
    а: "a", б: "b", в: "v", г: "g", д: "d", ђ: "đ", е: "e", ж: "ž", з: "z", и: "i", ј: "j", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", ћ: "ć", у: "u", ф: "f", х: "h", ц: "c", ч: "č", ш: "š",
  };
  return [...value].map((character) => pairs[character] ?? character).join("");
}

export function translateTree(node: ReactNode, locale: Locale): ReactNode {
  if (typeof node === "string") return translateText(locale, node);
  if (Array.isArray(node)) return node.map((child) => translateTree(child, locale));
  if (!isValidElement(node)) return node;

  const element = node as ReactElement<Record<string, unknown>>;
  const nextProps: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(element.props)) {
    if (key === "children") nextProps.children = translateTree(value as ReactNode, locale);
    else if (typeof value === "string" && translatableProps.has(key)) nextProps[key] = translateText(locale, value);
  }
  return cloneElement(element, nextProps);
}

const translatableProps = new Set(["alt", "aria-label", "placeholder", "title"]);

const codeLabels: { de: Record<string, string> } & Partial<Record<Locale, Record<string, string>>> = {
  de: { owner: "Inhaber", manager: "Manager", staff: "Mitarbeiter", active: "Aktiv", pending: "In Prüfung", inactive: "Inaktiv", draft: "Entwurf", paused: "Pausiert", completed: "Abgeschlossen", expired: "Abgelaufen" },
  en: { owner: "Owner", manager: "Manager", staff: "Employee", active: "Active", pending: "Pending", inactive: "Inactive", draft: "Draft", paused: "Paused", completed: "Completed", expired: "Expired" },
  tr: { owner: "İşletme sahibi", manager: "Yönetici", staff: "Çalışan", active: "Aktif", pending: "İncelemede", inactive: "Pasif", draft: "Taslak", paused: "Duraklatıldı", completed: "Tamamlandı", expired: "Süresi doldu" },
  "sr-Latn": { owner: "Vlasnik", manager: "Menadžer", staff: "Zaposleni", active: "Aktivno", pending: "Na proveri", inactive: "Neaktivno", draft: "Nacrt", paused: "Pauzirano", completed: "Završeno", expired: "Isteklo" },
  bs: { owner: "Vlasnik", manager: "Menadžer", staff: "Zaposlenik", active: "Aktivno", pending: "Na provjeri", inactive: "Neaktivno", draft: "Nacrt", paused: "Pauzirano", completed: "Završeno", expired: "Isteklo" },
  hr: { owner: "Vlasnik", manager: "Voditelj", staff: "Zaposlenik", active: "Aktivno", pending: "Na provjeri", inactive: "Neaktivno", draft: "Nacrt", paused: "Pauzirano", completed: "Završeno", expired: "Isteklo" },
  hu: { owner: "Tulajdonos", manager: "Vezető", staff: "Munkatárs", active: "Aktív", pending: "Ellenőrzés alatt", inactive: "Inaktív", draft: "Piszkozat", paused: "Szüneteltetve", completed: "Befejezve", expired: "Lejárt" },
  ro: { owner: "Proprietar", manager: "Manager", staff: "Angajat", active: "Activ", pending: "În verificare", inactive: "Inactiv", draft: "Ciornă", paused: "Întrerupt", completed: "Finalizat", expired: "Expirat" },
  pl: { owner: "Właściciel", manager: "Menedżer", staff: "Pracownik", active: "Aktywne", pending: "W trakcie weryfikacji", inactive: "Nieaktywne", draft: "Szkic", paused: "Wstrzymane", completed: "Zakończone", expired: "Wygasłe" },
  bg: { owner: "Собственик", manager: "Мениджър", staff: "Служител", active: "Активно", pending: "В проверка", inactive: "Неактивно", draft: "Чернова", paused: "На пауза", completed: "Завършено", expired: "Изтекло" },
};

export function translateCode(locale: Locale, value: string) {
  return (codeLabels[locale] ?? codeLabels.de)[value.toLowerCase()] ?? value;
}
