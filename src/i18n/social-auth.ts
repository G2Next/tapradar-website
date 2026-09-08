import type { Locale } from "./config";

export type SocialAuthMessages = {
  continueWithGoogle: string;
  continueWithApple: string;
  orEmail: string;
  socialFailed: string;
};

export const socialAuthMessages: Record<Locale, SocialAuthMessages> = {
  de: { continueWithGoogle: "Weiter mit Google", continueWithApple: "Weiter mit Apple", orEmail: "oder mit E-Mail", socialFailed: "Die Anmeldung über diesen Anbieter ist momentan nicht verfügbar." },
  en: { continueWithGoogle: "Continue with Google", continueWithApple: "Continue with Apple", orEmail: "or with email", socialFailed: "Sign-in with this provider is currently unavailable." },
  tr: { continueWithGoogle: "Google ile devam et", continueWithApple: "Apple ile devam et", orEmail: "veya e-posta ile", socialFailed: "Bu sağlayıcıyla giriş şu anda kullanılamıyor." },
  fr: { continueWithGoogle: "Continuer avec Google", continueWithApple: "Continuer avec Apple", orEmail: "ou avec une adresse e-mail", socialFailed: "La connexion avec ce fournisseur est momentanément indisponible." },
  it: { continueWithGoogle: "Continua con Google", continueWithApple: "Continua con Apple", orEmail: "oppure con e-mail", socialFailed: "L’accesso con questo provider non è al momento disponibile." },
  es: { continueWithGoogle: "Continuar con Google", continueWithApple: "Continuar con Apple", orEmail: "o con correo electrónico", socialFailed: "El acceso con este proveedor no está disponible en este momento." },
  pl: { continueWithGoogle: "Kontynuuj z Google", continueWithApple: "Kontynuuj z Apple", orEmail: "lub przez e-mail", socialFailed: "Logowanie przez tego dostawcę jest chwilowo niedostępne." },
  cs: { continueWithGoogle: "Pokračovat přes Google", continueWithApple: "Pokračovat přes Apple", orEmail: "nebo e-mailem", socialFailed: "Přihlášení přes tohoto poskytovatele je dočasně nedostupné." },
  hu: { continueWithGoogle: "Folytatás Google-fiókkal", continueWithApple: "Folytatás Apple-fiókkal", orEmail: "vagy e-mail-címmel", socialFailed: "A bejelentkezés ezzel a szolgáltatóval jelenleg nem érhető el." },
  sk: { continueWithGoogle: "Pokračovať cez Google", continueWithApple: "Pokračovať cez Apple", orEmail: "alebo e-mailom", socialFailed: "Prihlásenie cez tohto poskytovateľa je dočasne nedostupné." },
  "sr-Latn": { continueWithGoogle: "Nastavi sa Google nalogom", continueWithApple: "Nastavi sa Apple nalogom", orEmail: "ili e-poštom", socialFailed: "Prijava preko ovog provajdera trenutno nije dostupna." },
  bs: { continueWithGoogle: "Nastavi s Google računom", continueWithApple: "Nastavi s Apple računom", orEmail: "ili e-poštom", socialFailed: "Prijava putem ovog pružatelja trenutno nije dostupna." },
  hr: { continueWithGoogle: "Nastavi s Google računom", continueWithApple: "Nastavi s Apple računom", orEmail: "ili e-poštom", socialFailed: "Prijava putem ovog pružatelja trenutačno nije dostupna." },
  ro: { continueWithGoogle: "Continuă cu Google", continueWithApple: "Continuă cu Apple", orEmail: "sau cu e-mail", socialFailed: "Autentificarea prin acest furnizor nu este disponibilă momentan." },
  bg: { continueWithGoogle: "Продължи с Google", continueWithApple: "Продължи с Apple", orEmail: "или с имейл", socialFailed: "Входът чрез този доставчик временно не е достъпен." },
};

