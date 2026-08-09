import type { Locale } from "./config";

type PlanCopy = {
  perMonth: string; intro: string; permanent: string; later: string; popular: string;
  plans: Array<{ description: string; items: string[]; cta: string }>;
};

export const planMessages: Record<Locale, PlanCopy> = {
  de: { perMonth: "/Monat", intro: "Einführungspreis", permanent: "Dauerhaft günstig starten", later: "später", popular: "Beliebt", plans: [
    { description: "Für den einfachen Einstieg in digitale Kundenbindung.", items: ["NFC- & QR-Stempelung", "Digitale Belohnungen", "Basis-Statistik", "1 Mitarbeiter"], cta: "Mit Bronze starten" },
    { description: "Für Geschäfte, die Kunden aktiv zurückholen möchten.", items: ["Alles aus Bronze", "5 Mitarbeiter", "2 Medien-Uploads / Monat", "1 Kampagne / Monat", "Push & Retargeting", "Wöchentlicher Bericht"], cta: "Mit Gold starten" },
    { description: "Für maximale Reichweite, Automatisierung und Wachstum.", items: ["Alles aus Gold", "15 Mitarbeiter", "4 Medien-Uploads / Monat", "2 Kampagnen / Monat", "GPS-Proximity Werbung", "Erweiterte Analytik", "Prioritäts-Support"], cta: "Mit Platinum starten" },
  ] },
  en: { perMonth: "/month", intro: "Introductory price", permanent: "Low price for the long term", later: "later", popular: "Popular", plans: [
    { description: "A simple start with digital customer loyalty.", items: ["NFC & QR stamps", "Digital rewards", "Basic analytics", "1 employee"], cta: "Start with Bronze" },
    { description: "For businesses that want to actively bring customers back.", items: ["Everything in Bronze", "5 employees", "2 media uploads / month", "1 campaign / month", "Push & retargeting", "Weekly report"], cta: "Start with Gold" },
    { description: "For maximum reach, automation and growth.", items: ["Everything in Gold", "15 employees", "4 media uploads / month", "2 campaigns / month", "GPS proximity ads", "Advanced analytics", "Priority support"], cta: "Start with Platinum" },
  ] },
  tr: { perMonth: "/ay", intro: "Tanıtım fiyatı", permanent: "Kalıcı avantajlı fiyat", later: "sonra", popular: "Popüler", plans: [
    { description: "Dijital müşteri sadakatine kolay başlangıç.", items: ["NFC ve QR damgaları", "Dijital ödüller", "Temel istatistikler", "1 çalışan"], cta: "Bronze ile başla" },
    { description: "Müşterilerini yeniden kazanmak isteyen işletmeler için.", items: ["Bronze'daki her şey", "5 çalışan", "Ayda 2 medya yükleme", "Ayda 1 kampanya", "Bildirim ve yeniden hedefleme", "Haftalık rapor"], cta: "Gold ile başla" },
    { description: "Maksimum erişim, otomasyon ve büyüme için.", items: ["Gold'daki her şey", "15 çalışan", "Ayda 4 medya yükleme", "Ayda 2 kampanya", "GPS yakınlık reklamları", "Gelişmiş analiz", "Öncelikli destek"], cta: "Platinum ile başla" },
  ] },
  "sr-Latn": { perMonth: "/mesec", intro: "Uvodna cena", permanent: "Trajno povoljna cena", later: "kasnije", popular: "Popularno", plans: [
    { description: "Jednostavan početak digitalne lojalnosti.", items: ["NFC i QR pečati", "Digitalne nagrade", "Osnovna statistika", "1 zaposleni"], cta: "Počnite sa Bronze" },
    { description: "Za preduzeća koja žele da vrate kupce.", items: ["Sve iz Bronze", "5 zaposlenih", "2 medijska sadržaja mesečno", "1 kampanja mesečno", "Push i retargeting", "Nedeljni izveštaj"], cta: "Počnite sa Gold" },
    { description: "Za maksimalan domet, automatizaciju i rast.", items: ["Sve iz Gold", "15 zaposlenih", "4 medijska sadržaja mesečno", "2 kampanje mesečno", "GPS oglasi u blizini", "Napredna analitika", "Prioritetna podrška"], cta: "Počnite sa Platinum" },
  ] },
  bs: { perMonth: "/mjesec", intro: "Uvodna cijena", permanent: "Trajno povoljna cijena", later: "kasnije", popular: "Popularno", plans: [
    { description: "Jednostavan početak digitalne lojalnosti.", items: ["NFC i QR pečati", "Digitalne nagrade", "Osnovna statistika", "1 zaposlenik"], cta: "Počnite s Bronze" },
    { description: "Za firme koje žele vratiti kupce.", items: ["Sve iz Bronze", "5 zaposlenika", "2 medijska sadržaja mjesečno", "1 kampanja mjesečno", "Push i retargeting", "Sedmični izvještaj"], cta: "Počnite s Gold" },
    { description: "Za maksimalan doseg, automatizaciju i rast.", items: ["Sve iz Gold", "15 zaposlenika", "4 medijska sadržaja mjesečno", "2 kampanje mjesečno", "GPS oglasi u blizini", "Napredna analitika", "Prioritetna podrška"], cta: "Počnite s Platinum" },
  ] },
  hr: { perMonth: "/mjesec", intro: "Uvodna cijena", permanent: "Trajno povoljna cijena", later: "kasnije", popular: "Popularno", plans: [
    { description: "Jednostavan početak digitalne vjernosti.", items: ["NFC i QR pečati", "Digitalne nagrade", "Osnovna statistika", "1 zaposlenik"], cta: "Počnite s Bronze" },
    { description: "Za tvrtke koje žele vratiti kupce.", items: ["Sve iz Bronze", "5 zaposlenika", "2 medijska sadržaja mjesečno", "1 kampanja mjesečno", "Push i retargeting", "Tjedno izvješće"], cta: "Počnite s Gold" },
    { description: "Za maksimalan doseg, automatizaciju i rast.", items: ["Sve iz Gold", "15 zaposlenika", "4 medijska sadržaja mjesečno", "2 kampanje mjesečno", "GPS oglasi u blizini", "Napredna analitika", "Prioritetna podrška"], cta: "Počnite s Platinum" },
  ] },
  hu: { perMonth: "/hó", intro: "Bevezető ár", permanent: "Tartósan kedvező ár", later: "később", popular: "Népszerű", plans: [
    { description: "Egyszerű belépés a digitális ügyfélhűség világába.", items: ["NFC- és QR-pecsétek", "Digitális jutalmak", "Alapstatisztika", "1 munkatárs"], cta: "Kezdés Bronze csomaggal" },
    { description: "Vállalkozásoknak, amelyek vissza szeretnék csábítani vásárlóikat.", items: ["Minden a Bronze csomagból", "5 munkatárs", "2 médiafeltöltés / hó", "1 kampány / hó", "Push és retargeting", "Heti jelentés"], cta: "Kezdés Gold csomaggal" },
    { description: "Maximális eléréshez, automatizáláshoz és növekedéshez.", items: ["Minden a Gold csomagból", "15 munkatárs", "4 médiafeltöltés / hó", "2 kampány / hó", "GPS-közelségi hirdetés", "Fejlett analitika", "Elsőbbségi támogatás"], cta: "Kezdés Platinum csomaggal" },
  ] },
  ro: { perMonth: "/lună", intro: "Preț introductiv", permanent: "Preț avantajos permanent", later: "mai târziu", popular: "Popular", plans: [
    { description: "Un început simplu în fidelizarea digitală.", items: ["Ștampile NFC și QR", "Recompense digitale", "Statistici de bază", "1 angajat"], cta: "Începe cu Bronze" },
    { description: "Pentru afacerile care doresc să își readucă clienții.", items: ["Totul din Bronze", "5 angajați", "2 încărcări media / lună", "1 campanie / lună", "Push și retargeting", "Raport săptămânal"], cta: "Începe cu Gold" },
    { description: "Pentru acoperire, automatizare și creștere maxime.", items: ["Totul din Gold", "15 angajați", "4 încărcări media / lună", "2 campanii / lună", "Publicitate GPS de proximitate", "Analiză avansată", "Asistență prioritară"], cta: "Începe cu Platinum" },
  ] },
  pl: { perMonth: "/miesiąc", intro: "Cena promocyjna", permanent: "Stała korzystna cena", later: "później", popular: "Popularny", plans: [
    { description: "Prosty start z cyfrową lojalnością klientów.", items: ["Pieczątki NFC i QR", "Cyfrowe nagrody", "Podstawowe statystyki", "1 pracownik"], cta: "Zacznij z Bronze" },
    { description: "Dla firm, które chcą aktywnie odzyskiwać klientów.", items: ["Wszystko z Bronze", "5 pracowników", "2 przesłania mediów / miesiąc", "1 kampania / miesiąc", "Push i retargeting", "Raport tygodniowy"], cta: "Zacznij z Gold" },
    { description: "Dla maksymalnego zasięgu, automatyzacji i wzrostu.", items: ["Wszystko z Gold", "15 pracowników", "4 przesłania mediów / miesiąc", "2 kampanie / miesiąc", "Reklamy GPS w pobliżu", "Zaawansowana analityka", "Priorytetowe wsparcie"], cta: "Zacznij z Platinum" },
  ] },
  bg: { perMonth: "/месец", intro: "Въвеждаща цена", permanent: "Трайно изгодна цена", later: "по-късно", popular: "Популярен", plans: [
    { description: "Лесно начало с дигиталната лоялност.", items: ["NFC и QR печати", "Дигитални награди", "Основна статистика", "1 служител"], cta: "Започнете с Bronze" },
    { description: "За бизнеси, които искат активно да връщат клиентите си.", items: ["Всичко от Bronze", "5 служители", "2 медийни качвания / месец", "1 кампания / месец", "Push и ретаргетинг", "Седмичен отчет"], cta: "Започнете с Gold" },
    { description: "За максимален обхват, автоматизация и растеж.", items: ["Всичко от Gold", "15 служители", "4 медийни качвания / месец", "2 кампании / месец", "GPS реклама наблизо", "Разширен анализ", "Приоритетна поддръжка"], cta: "Започнете с Platinum" },
  ] },
};

