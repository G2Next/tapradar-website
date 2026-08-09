import type { Locale } from "./config";

export type ChromeMessages = {
  nav: { home: string; business: string; pricing: string; contact: string };
  account: { admin: string; dashboard: string; app: string; login: string };
  mobile: { open: string; close: string; label: string };
  language: { label: string; choose: string };
  footer: {
    description: string;
    product: string;
    support: string;
    faq: string;
    signIn: string;
    contact: string;
    legalNotice: string;
    privacy: string;
    terms: string;
    withdrawal: string;
    rights: string;
  };
};

export const chromeMessages: Record<Locale, ChromeMessages> = {
  de: {
    nav: { home: "Home", business: "Für Geschäfte", pricing: "Preise", contact: "Kontakt" },
    account: { admin: "Administration", dashboard: "Dashboard", app: "Meine App", login: "Anmelden" },
    mobile: { open: "Menü öffnen", close: "Menü schließen", label: "Mobile Navigation" },
    language: { label: "Sprache", choose: "Sprache auswählen" },
    footer: {
      description: "Digitale Stempelkarte und Kundenbindung für lokale Geschäfte in Wien und Österreich.",
      product: "Produkt", support: "Support", faq: "FAQ", signIn: "Anmelden", contact: "Kontakt aufnehmen",
      legalNotice: "Impressum", privacy: "Datenschutz", terms: "AGB", withdrawal: "Widerruf", rights: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: { home: "Home", business: "For businesses", pricing: "Pricing", contact: "Contact" },
    account: { admin: "Administration", dashboard: "Dashboard", app: "My app", login: "Log in" },
    mobile: { open: "Open menu", close: "Close menu", label: "Mobile navigation" },
    language: { label: "Language", choose: "Choose language" },
    footer: {
      description: "Digital loyalty cards and customer retention for local businesses in Vienna and Austria.",
      product: "Product", support: "Support", faq: "FAQ", signIn: "Log in", contact: "Contact us",
      legalNotice: "Legal notice", privacy: "Privacy", terms: "Terms", withdrawal: "Withdrawal", rights: "All rights reserved.",
    },
  },
  tr: {
    nav: { home: "Ana sayfa", business: "İşletmeler için", pricing: "Fiyatlar", contact: "İletişim" },
    account: { admin: "Yönetim", dashboard: "Panel", app: "Uygulamam", login: "Giriş" },
    mobile: { open: "Menüyü aç", close: "Menüyü kapat", label: "Mobil menü" },
    language: { label: "Dil", choose: "Dil seçin" },
    footer: {
      description: "Viyana ve Avusturya'daki yerel işletmeler için dijital damga kartı ve müşteri sadakati.",
      product: "Ürün", support: "Destek", faq: "SSS", signIn: "Giriş yap", contact: "Bize ulaşın",
      legalNotice: "Yasal bildirim", privacy: "Gizlilik", terms: "Şartlar", withdrawal: "Cayma hakkı", rights: "Tüm hakları saklıdır.",
    },
  },
  "sr-Latn": {
    nav: { home: "Početna", business: "Za preduzeća", pricing: "Cene", contact: "Kontakt" },
    account: { admin: "Administracija", dashboard: "Kontrolna tabla", app: "Moja aplikacija", login: "Prijava" },
    mobile: { open: "Otvori meni", close: "Zatvori meni", label: "Mobilna navigacija" },
    language: { label: "Jezik", choose: "Izaberite jezik" },
    footer: {
      description: "Digitalne kartice lojalnosti i zadržavanje kupaca za lokalna preduzeća u Beču i Austriji.",
      product: "Proizvod", support: "Podrška", faq: "Česta pitanja", signIn: "Prijava", contact: "Kontaktirajte nas",
      legalNotice: "Impresum", privacy: "Privatnost", terms: "Uslovi", withdrawal: "Odustanak", rights: "Sva prava zadržana.",
    },
  },
  bs: {
    nav: { home: "Početna", business: "Za poslovne korisnike", pricing: "Cijene", contact: "Kontakt" },
    account: { admin: "Administracija", dashboard: "Kontrolna ploča", app: "Moja aplikacija", login: "Prijava" },
    mobile: { open: "Otvori meni", close: "Zatvori meni", label: "Mobilna navigacija" },
    language: { label: "Jezik", choose: "Odaberite jezik" },
    footer: {
      description: "Digitalne kartice lojalnosti i zadržavanje kupaca za lokalne firme u Beču i Austriji.",
      product: "Proizvod", support: "Podrška", faq: "Česta pitanja", signIn: "Prijava", contact: "Kontaktirajte nas",
      legalNotice: "Impresum", privacy: "Privatnost", terms: "Uslovi", withdrawal: "Odustajanje", rights: "Sva prava zadržana.",
    },
  },
  hr: {
    nav: { home: "Početna", business: "Za tvrtke", pricing: "Cijene", contact: "Kontakt" },
    account: { admin: "Administracija", dashboard: "Nadzorna ploča", app: "Moja aplikacija", login: "Prijava" },
    mobile: { open: "Otvori izbornik", close: "Zatvori izbornik", label: "Mobilna navigacija" },
    language: { label: "Jezik", choose: "Odaberite jezik" },
    footer: {
      description: "Digitalne kartice vjernosti i zadržavanje kupaca za lokalne tvrtke u Beču i Austriji.",
      product: "Proizvod", support: "Podrška", faq: "Česta pitanja", signIn: "Prijava", contact: "Kontaktirajte nas",
      legalNotice: "Impresum", privacy: "Privatnost", terms: "Uvjeti", withdrawal: "Odustanak", rights: "Sva prava pridržana.",
    },
  },
  hu: {
    nav: { home: "Kezdőlap", business: "Vállalkozásoknak", pricing: "Árak", contact: "Kapcsolat" },
    account: { admin: "Adminisztráció", dashboard: "Vezérlőpult", app: "Saját alkalmazás", login: "Belépés" },
    mobile: { open: "Menü megnyitása", close: "Menü bezárása", label: "Mobil navigáció" },
    language: { label: "Nyelv", choose: "Válasszon nyelvet" },
    footer: {
      description: "Digitális hűségkártyák és ügyfélmegtartás bécsi és ausztriai helyi vállalkozásoknak.",
      product: "Termék", support: "Támogatás", faq: "GYIK", signIn: "Belépés", contact: "Kapcsolatfelvétel",
      legalNotice: "Impresszum", privacy: "Adatvédelem", terms: "Feltételek", withdrawal: "Elállás", rights: "Minden jog fenntartva.",
    },
  },
  ro: {
    nav: { home: "Acasă", business: "Pentru companii", pricing: "Prețuri", contact: "Contact" },
    account: { admin: "Administrare", dashboard: "Panou", app: "Aplicația mea", login: "Autentificare" },
    mobile: { open: "Deschide meniul", close: "Închide meniul", label: "Navigare mobilă" },
    language: { label: "Limbă", choose: "Alegeți limba" },
    footer: {
      description: "Carduri digitale de fidelitate și retenția clienților pentru afaceri locale din Viena și Austria.",
      product: "Produs", support: "Asistență", faq: "Întrebări frecvente", signIn: "Autentificare", contact: "Contactați-ne",
      legalNotice: "Informații legale", privacy: "Confidențialitate", terms: "Termeni", withdrawal: "Retragere", rights: "Toate drepturile rezervate.",
    },
  },
  pl: {
    nav: { home: "Strona główna", business: "Dla firm", pricing: "Cennik", contact: "Kontakt" },
    account: { admin: "Administracja", dashboard: "Panel", app: "Moja aplikacja", login: "Logowanie" },
    mobile: { open: "Otwórz menu", close: "Zamknij menu", label: "Nawigacja mobilna" },
    language: { label: "Język", choose: "Wybierz język" },
    footer: {
      description: "Cyfrowe karty lojalnościowe i utrzymanie klientów dla lokalnych firm w Wiedniu i Austrii.",
      product: "Produkt", support: "Pomoc", faq: "FAQ", signIn: "Zaloguj się", contact: "Skontaktuj się",
      legalNotice: "Nota prawna", privacy: "Prywatność", terms: "Regulamin", withdrawal: "Odstąpienie", rights: "Wszelkie prawa zastrzeżone.",
    },
  },
  bg: {
    nav: { home: "Начало", business: "За бизнеса", pricing: "Цени", contact: "Контакти" },
    account: { admin: "Администрация", dashboard: "Табло", app: "Моето приложение", login: "Вход" },
    mobile: { open: "Отвори менюто", close: "Затвори менюто", label: "Мобилна навигация" },
    language: { label: "Език", choose: "Изберете език" },
    footer: {
      description: "Дигитални карти за лоялност и задържане на клиенти за местни бизнеси във Виена и Австрия.",
      product: "Продукт", support: "Поддръжка", faq: "ЧЗВ", signIn: "Вход", contact: "Свържете се с нас",
      legalNotice: "Правна информация", privacy: "Поверителност", terms: "Условия", withdrawal: "Отказ", rights: "Всички права запазени.",
    },
  },
};
