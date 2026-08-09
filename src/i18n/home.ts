import type { Locale } from "./config";

type HomeMessages = {
  metaTitle: string;
  metaDescription: string;
  hero: { badge: string; title: string; text: string; appStore: string; playStore: string; download: string };
  card: { title: string; category: string; rewardLabel: string; reward: string };
  benefits: { badge: string; title: string; text: string; items: Array<[string, string, string]> };
  steps: { badge: string; title: string; items: Array<[string, string, string]> };
  plans: { badge: string; title: string; text: string };
  business: { badge: string; title: string; text: string; cta: string };
};

export const homeMessages: Record<Locale, HomeMessages> = {
  de: {
    metaTitle: "Digitale Stempelkarte für Kunden & lokale Geschäfte",
    metaDescription: "Mit TapRadar digitale Stempel sammeln, lokale Geschäfte entdecken und Belohnungen direkt in der App erhalten.",
    hero: { badge: "Digitale Treuekarten-App", title: "Sammeln. Belohnen. Entdecken.", text: "Mit TapRadar sammelst du digitale Stempel bei lokalen Geschäften und erhältst exklusive Belohnungen, einfach per QR-Code oder NFC.", appStore: "App Store bald verfügbar", playStore: "Google Play bald verfügbar", download: "Download bald verfügbar." },
    card: { title: "Meine Stempelkarte", category: "Kaffee & Genuss", rewardLabel: "Deine Belohnung", reward: "Gratis Kaffee" },
    benefits: { badge: "Warum TapRadar?", title: "Alle Treuekarten in einer App.", text: "Keine Papierkarten mehr. Keine verlorenen Stempel. Alles digital und einfach.", items: [["📱", "Digital statt Papier", "Treuekarten direkt in der TapRadar App, immer dabei und nie vergessen."], ["⚡", "Schnell sammeln", "QR-Code scannen oder NFC nutzen und Stempel sofort erhalten."], ["🎁", "Belohnungen erhalten", "Stempel sammeln und Rewards direkt in der App einlösen."]] },
    steps: { badge: "So funktioniert's", title: "In 3 Schritten zur Belohnung.", items: [["01", "Geschäft besuchen", "Besuche ein teilnehmendes lokales Geschäft in deiner Nähe."], ["02", "Stempel sammeln", "Scanne den QR-Code oder nutze NFC direkt an der Kasse."], ["03", "Belohnung sichern", "Erreiche dein Ziel und erhalte deine Prämie sofort."]] },
    plans: { badge: "Für lokale Geschäfte", title: "Mehr Stammkunden. Weniger Aufwand.", text: "Digitale Treuekarten, Kampagnen und Kundenbindung für Betriebe in Österreich." },
    business: { badge: "Für Geschäfte", title: "Betreibst du ein Geschäft?", text: "Mit TapRadar erreichst du mehr Stammkunden durch digitale Treuekarten, Kampagnen und Kundenbindung.", cta: "Für Geschäfte ansehen" },
  },
  en: {
    metaTitle: "Digital loyalty cards for customers & local businesses", metaDescription: "Collect digital stamps with TapRadar, discover local businesses and receive rewards directly in the app.",
    hero: { badge: "Digital loyalty card app", title: "Collect. Reward. Discover.", text: "With TapRadar, you collect digital stamps at local businesses and receive exclusive rewards using QR codes or NFC.", appStore: "Coming soon to the App Store", playStore: "Coming soon to Google Play", download: "Download coming soon." },
    card: { title: "My loyalty card", category: "Coffee & treats", rewardLabel: "Your reward", reward: "Free coffee" },
    benefits: { badge: "Why TapRadar?", title: "All loyalty cards in one app.", text: "No more paper cards. No lost stamps. Everything is digital and simple.", items: [["📱", "Digital, not paper", "Your loyalty cards in the TapRadar app—always with you and never forgotten."], ["⚡", "Collect quickly", "Scan a QR code or use NFC to receive stamps instantly."], ["🎁", "Get rewards", "Collect stamps and redeem rewards directly in the app."]] },
    steps: { badge: "How it works", title: "Your reward in 3 steps.", items: [["01", "Visit a business", "Visit a participating local business near you."], ["02", "Collect stamps", "Scan the QR code or use NFC right at the checkout."], ["03", "Claim your reward", "Reach your goal and receive your reward instantly."]] },
    plans: { badge: "For local businesses", title: "More regular customers. Less effort.", text: "Digital loyalty cards, campaigns and customer retention for businesses in Austria." },
    business: { badge: "For businesses", title: "Do you run a business?", text: "TapRadar helps you gain more regular customers through digital loyalty cards, campaigns and customer retention.", cta: "Explore TapRadar for business" },
  },
  tr: {
    metaTitle: "Müşteriler ve yerel işletmeler için dijital damga kartı", metaDescription: "TapRadar ile dijital damga toplayın, yerel işletmeleri keşfedin ve ödülleri doğrudan uygulamada kazanın.",
    hero: { badge: "Dijital sadakat kartı uygulaması", title: "Topla. Ödüllendir. Keşfet.", text: "TapRadar ile yerel işletmelerde dijital damgalar toplar, QR kod veya NFC ile özel ödüller kazanırsınız.", appStore: "Yakında App Store'da", playStore: "Yakında Google Play'de", download: "İndirme yakında." },
    card: { title: "Damga kartım", category: "Kahve ve lezzet", rewardLabel: "Ödülün", reward: "Ücretsiz kahve" },
    benefits: { badge: "Neden TapRadar?", title: "Tüm sadakat kartları tek uygulamada.", text: "Kağıt kart yok. Kayıp damga yok. Her şey dijital ve kolay.", items: [["📱", "Kağıt yerine dijital", "Sadakat kartların TapRadar uygulamasında; her zaman yanında."], ["⚡", "Hızlı topla", "QR kodu tara veya NFC kullan, damganı anında al."], ["🎁", "Ödüller kazan", "Damga topla ve ödüllerini doğrudan uygulamada kullan."]] },
    steps: { badge: "Nasıl çalışır?", title: "3 adımda ödülüne ulaş.", items: [["01", "İşletmeyi ziyaret et", "Yakınındaki katılımcı yerel işletmeyi ziyaret et."], ["02", "Damga topla", "Kasada QR kodu tara veya NFC kullan."], ["03", "Ödülünü al", "Hedefine ulaş ve ödülünü hemen kazan."]] },
    plans: { badge: "Yerel işletmeler için", title: "Daha fazla sadık müşteri. Daha az uğraş.", text: "Avusturya'daki işletmeler için dijital sadakat kartları, kampanyalar ve müşteri bağlılığı." },
    business: { badge: "İşletmeler için", title: "Bir işletmeniz mi var?", text: "TapRadar ile dijital sadakat kartları ve kampanyalar sayesinde daha fazla sadık müşteriye ulaşın.", cta: "İşletme çözümlerini keşfet" },
  },
  "sr-Latn": {
    metaTitle: "Digitalne kartice lojalnosti za kupce i lokalna preduzeća", metaDescription: "Sakupljajte digitalne pečate, otkrivajte lokalna preduzeća i preuzimajte nagrade u TapRadar aplikaciji.",
    hero: { badge: "Aplikacija za digitalne kartice lojalnosti", title: "Sakupljaj. Nagradi. Otkrij.", text: "Uz TapRadar sakupljate digitalne pečate kod lokalnih preduzeća i dobijate posebne nagrade putem QR koda ili NFC-a.", appStore: "Uskoro u App Store-u", playStore: "Uskoro na Google Play-u", download: "Preuzimanje uskoro dostupno." },
    card: { title: "Moja kartica", category: "Kafa i uživanje", rewardLabel: "Tvoja nagrada", reward: "Besplatna kafa" },
    benefits: { badge: "Zašto TapRadar?", title: "Sve kartice lojalnosti u jednoj aplikaciji.", text: "Bez papirnih kartica i izgubljenih pečata. Sve je digitalno i jednostavno.", items: [["📱", "Digitalno umesto papira", "Kartice lojalnosti su u TapRadar aplikaciji i uvek su uz vas."], ["⚡", "Brzo sakupljanje", "Skenirajte QR kod ili koristite NFC i odmah dobijte pečat."], ["🎁", "Osvojite nagrade", "Sakupljajte pečate i iskoristite nagrade direktno u aplikaciji."]] },
    steps: { badge: "Kako funkcioniše", title: "Do nagrade u 3 koraka.", items: [["01", "Posetite preduzeće", "Posetite lokalno partnersko preduzeće u blizini."], ["02", "Sakupite pečate", "Skenirajte QR kod ili koristite NFC na kasi."], ["03", "Preuzmite nagradu", "Dostignite cilj i odmah preuzmite nagradu."]] },
    plans: { badge: "Za lokalna preduzeća", title: "Više stalnih kupaca. Manje truda.", text: "Digitalne kartice lojalnosti, kampanje i zadržavanje kupaca za preduzeća u Austriji." },
    business: { badge: "Za preduzeća", title: "Vodite preduzeće?", text: "TapRadar vam pomaže da pridobijete više stalnih kupaca pomoću digitalnih kartica i kampanja.", cta: "Pogledajte rešenja za preduzeća" },
  },
  bs: {
    metaTitle: "Digitalne kartice lojalnosti za kupce i lokalne firme", metaDescription: "Skupljajte digitalne pečate, otkrivajte lokalne firme i preuzimajte nagrade u TapRadar aplikaciji.",
    hero: { badge: "Aplikacija za digitalne kartice lojalnosti", title: "Skupljaj. Nagradi. Otkrij.", text: "Uz TapRadar skupljate digitalne pečate kod lokalnih firmi i dobijate posebne nagrade putem QR koda ili NFC-a.", appStore: "Uskoro u App Storeu", playStore: "Uskoro na Google Playu", download: "Preuzimanje uskoro dostupno." },
    card: { title: "Moja kartica", category: "Kafa i uživanje", rewardLabel: "Tvoja nagrada", reward: "Besplatna kafa" },
    benefits: { badge: "Zašto TapRadar?", title: "Sve kartice lojalnosti u jednoj aplikaciji.", text: "Bez papirnih kartica i izgubljenih pečata. Sve je digitalno i jednostavno.", items: [["📱", "Digitalno umjesto papira", "Kartice lojalnosti su u TapRadar aplikaciji i uvijek uz vas."], ["⚡", "Brzo skupljanje", "Skenirajte QR kod ili koristite NFC i odmah dobijte pečat."], ["🎁", "Osvojite nagrade", "Skupljajte pečate i iskoristite nagrade direktno u aplikaciji."]] },
    steps: { badge: "Kako funkcioniše", title: "Do nagrade u 3 koraka.", items: [["01", "Posjetite firmu", "Posjetite lokalnu partnersku firmu u blizini."], ["02", "Skupljajte pečate", "Skenirajte QR kod ili koristite NFC na kasi."], ["03", "Preuzmite nagradu", "Dostignite cilj i odmah preuzmite nagradu."]] },
    plans: { badge: "Za lokalne firme", title: "Više stalnih kupaca. Manje truda.", text: "Digitalne kartice lojalnosti, kampanje i zadržavanje kupaca za firme u Austriji." },
    business: { badge: "Za poslovne korisnike", title: "Vodite firmu?", text: "TapRadar vam pomaže da steknete više stalnih kupaca pomoću digitalnih kartica i kampanja.", cta: "Pogledajte rješenja za firme" },
  },
  hr: {
    metaTitle: "Digitalne kartice vjernosti za kupce i lokalne tvrtke", metaDescription: "Skupljajte digitalne pečate, otkrivajte lokalne tvrtke i preuzimajte nagrade u aplikaciji TapRadar.",
    hero: { badge: "Aplikacija za digitalne kartice vjernosti", title: "Skupljaj. Nagradi. Otkrij.", text: "Uz TapRadar skupljate digitalne pečate kod lokalnih tvrtki i dobivate posebne nagrade putem QR koda ili NFC-a.", appStore: "Uskoro u App Storeu", playStore: "Uskoro na Google Playu", download: "Preuzimanje uskoro dostupno." },
    card: { title: "Moja kartica", category: "Kava i uživanje", rewardLabel: "Tvoja nagrada", reward: "Besplatna kava" },
    benefits: { badge: "Zašto TapRadar?", title: "Sve kartice vjernosti u jednoj aplikaciji.", text: "Bez papirnatih kartica i izgubljenih pečata. Sve je digitalno i jednostavno.", items: [["📱", "Digitalno umjesto papira", "Kartice vjernosti su u aplikaciji TapRadar i uvijek uz vas."], ["⚡", "Brzo skupljanje", "Skenirajte QR kod ili koristite NFC i odmah primite pečat."], ["🎁", "Osvojite nagrade", "Skupljajte pečate i iskoristite nagrade izravno u aplikaciji."]] },
    steps: { badge: "Kako funkcionira", title: "Do nagrade u 3 koraka.", items: [["01", "Posjetite tvrtku", "Posjetite lokalnu partnersku tvrtku u blizini."], ["02", "Skupljajte pečate", "Skenirajte QR kod ili koristite NFC na blagajni."], ["03", "Preuzmite nagradu", "Dosegnite cilj i odmah preuzmite nagradu."]] },
    plans: { badge: "Za lokalne tvrtke", title: "Više stalnih kupaca. Manje truda.", text: "Digitalne kartice vjernosti, kampanje i zadržavanje kupaca za tvrtke u Austriji." },
    business: { badge: "Za tvrtke", title: "Vodite tvrtku?", text: "TapRadar vam pomaže privući više stalnih kupaca digitalnim karticama i kampanjama.", cta: "Pogledajte rješenja za tvrtke" },
  },
  hu: {
    metaTitle: "Digitális hűségkártyák vásárlóknak és helyi vállalkozásoknak", metaDescription: "Gyűjts digitális pecséteket, fedezz fel helyi üzleteket, és váltsd be jutalmaidat a TapRadar alkalmazásban.",
    hero: { badge: "Digitális hűségkártya-alkalmazás", title: "Gyűjts. Jutalmazz. Fedezz fel.", text: "A TapRadarral digitális pecséteket gyűjthetsz helyi üzletekben, és QR-kóddal vagy NFC-vel exkluzív jutalmakat kaphatsz.", appStore: "Hamarosan az App Store-ban", playStore: "Hamarosan a Google Playen", download: "A letöltés hamarosan elérhető." },
    card: { title: "Hűségkártyám", category: "Kávé és élvezet", rewardLabel: "Jutalmad", reward: "Ingyenes kávé" },
    benefits: { badge: "Miért a TapRadar?", title: "Minden hűségkártya egy alkalmazásban.", text: "Nincs több papírkártya vagy elveszett pecsét. Minden digitális és egyszerű.", items: [["📱", "Digitális, nem papír", "Hűségkártyáid mindig veled vannak a TapRadar alkalmazásban."], ["⚡", "Gyors gyűjtés", "Olvasd be a QR-kódot vagy használd az NFC-t az azonnali pecséthez."], ["🎁", "Szerezz jutalmakat", "Gyűjts pecséteket, és váltsd be jutalmaidat az alkalmazásban."]] },
    steps: { badge: "Így működik", title: "3 lépés a jutalomig.", items: [["01", "Látogass el egy üzletbe", "Keress fel egy közeli TapRadar-partnert."], ["02", "Gyűjts pecséteket", "Olvasd be a QR-kódot vagy használd az NFC-t a pénztárnál."], ["03", "Vedd át a jutalmad", "Érd el a célt, és azonnal megkapod a jutalmat."]] },
    plans: { badge: "Helyi vállalkozásoknak", title: "Több törzsvásárló. Kevesebb munka.", text: "Digitális hűségkártyák, kampányok és ügyfélmegtartás ausztriai vállalkozásoknak." },
    business: { badge: "Vállalkozásoknak", title: "Vállalkozást vezetsz?", text: "A TapRadar digitális hűségkártyákkal és kampányokkal segít több törzsvásárlót szerezni.", cta: "Üzleti megoldások megtekintése" },
  },
  ro: {
    metaTitle: "Carduri digitale de fidelitate pentru clienți și afaceri locale", metaDescription: "Colectează ștampile digitale, descoperă afaceri locale și primește recompense direct în aplicația TapRadar.",
    hero: { badge: "Aplicație pentru carduri digitale de fidelitate", title: "Colectează. Recompensează. Descoperă.", text: "Cu TapRadar colectezi ștampile digitale la afaceri locale și primești recompense exclusive prin cod QR sau NFC.", appStore: "În curând în App Store", playStore: "În curând pe Google Play", download: "Descărcarea va fi disponibilă în curând." },
    card: { title: "Cardul meu", category: "Cafea și delicii", rewardLabel: "Recompensa ta", reward: "Cafea gratuită" },
    benefits: { badge: "De ce TapRadar?", title: "Toate cardurile de fidelitate într-o singură aplicație.", text: "Fără carduri de hârtie și ștampile pierdute. Totul este digital și simplu.", items: [["📱", "Digital, nu pe hârtie", "Cardurile tale sunt mereu la îndemână în aplicația TapRadar."], ["⚡", "Colectare rapidă", "Scanează codul QR sau folosește NFC pentru a primi imediat ștampila."], ["🎁", "Primește recompense", "Colectează ștampile și folosește recompensele direct în aplicație."]] },
    steps: { badge: "Cum funcționează", title: "Recompensa ta în 3 pași.", items: [["01", "Vizitează o afacere", "Vizitează o afacere locală participantă din apropiere."], ["02", "Colectează ștampile", "Scanează codul QR sau folosește NFC la casă."], ["03", "Primește recompensa", "Atinge obiectivul și primește imediat recompensa."]] },
    plans: { badge: "Pentru afaceri locale", title: "Mai mulți clienți fideli. Mai puțin efort.", text: "Carduri digitale, campanii și fidelizarea clienților pentru afaceri din Austria." },
    business: { badge: "Pentru companii", title: "Conduci o afacere?", text: "TapRadar te ajută să câștigi mai mulți clienți fideli prin carduri digitale și campanii.", cta: "Descoperă soluțiile pentru afaceri" },
  },
  pl: {
    metaTitle: "Cyfrowe karty lojalnościowe dla klientów i lokalnych firm", metaDescription: "Zbieraj cyfrowe pieczątki, odkrywaj lokalne firmy i odbieraj nagrody bezpośrednio w aplikacji TapRadar.",
    hero: { badge: "Aplikacja cyfrowych kart lojalnościowych", title: "Zbieraj. Nagradzaj. Odkrywaj.", text: "Z TapRadar zbierasz cyfrowe pieczątki w lokalnych firmach i otrzymujesz wyjątkowe nagrody przez kod QR lub NFC.", appStore: "Wkrótce w App Store", playStore: "Wkrótce w Google Play", download: "Pobieranie będzie dostępne wkrótce." },
    card: { title: "Moja karta", category: "Kawa i przyjemność", rewardLabel: "Twoja nagroda", reward: "Darmowa kawa" },
    benefits: { badge: "Dlaczego TapRadar?", title: "Wszystkie karty lojalnościowe w jednej aplikacji.", text: "Bez papierowych kart i zgubionych pieczątek. Wszystko cyfrowo i prosto.", items: [["📱", "Cyfrowo zamiast papieru", "Karty lojalnościowe są zawsze z Tobą w aplikacji TapRadar."], ["⚡", "Zbieraj szybko", "Zeskanuj kod QR lub użyj NFC, aby natychmiast otrzymać pieczątkę."], ["🎁", "Odbieraj nagrody", "Zbieraj pieczątki i wykorzystuj nagrody bezpośrednio w aplikacji."]] },
    steps: { badge: "Jak to działa", title: "Do nagrody w 3 krokach.", items: [["01", "Odwiedź firmę", "Odwiedź uczestniczącą lokalną firmę w pobliżu."], ["02", "Zbieraj pieczątki", "Zeskanuj kod QR lub użyj NFC przy kasie."], ["03", "Odbierz nagrodę", "Osiągnij cel i natychmiast odbierz nagrodę."]] },
    plans: { badge: "Dla lokalnych firm", title: "Więcej stałych klientów. Mniej pracy.", text: "Cyfrowe karty lojalnościowe, kampanie i utrzymanie klientów dla firm w Austrii." },
    business: { badge: "Dla firm", title: "Prowadzisz firmę?", text: "TapRadar pomaga zdobywać więcej stałych klientów dzięki cyfrowym kartom i kampaniom.", cta: "Poznaj rozwiązania dla firm" },
  },
  bg: {
    metaTitle: "Дигитални карти за лоялност за клиенти и местни бизнеси", metaDescription: "Събирайте дигитални печати, откривайте местни бизнеси и получавайте награди директно в приложението TapRadar.",
    hero: { badge: "Приложение за дигитални карти за лоялност", title: "Събирай. Награждавай. Откривай.", text: "С TapRadar събирате дигитални печати в местни бизнеси и получавате специални награди чрез QR код или NFC.", appStore: "Скоро в App Store", playStore: "Скоро в Google Play", download: "Изтеглянето ще бъде достъпно скоро." },
    card: { title: "Моята карта", category: "Кафе и наслада", rewardLabel: "Твоята награда", reward: "Безплатно кафе" },
    benefits: { badge: "Защо TapRadar?", title: "Всички карти за лоялност в едно приложение.", text: "Без хартиени карти и изгубени печати. Всичко е дигитално и лесно.", items: [["📱", "Дигитално вместо на хартия", "Картите ви са винаги с вас в приложението TapRadar."], ["⚡", "Бързо събиране", "Сканирайте QR код или използвайте NFC и веднага получете печат."], ["🎁", "Получавайте награди", "Събирайте печати и използвайте наградите директно в приложението."]] },
    steps: { badge: "Как работи", title: "До наградата в 3 стъпки.", items: [["01", "Посетете бизнес", "Посетете участващ местен бизнес наблизо."], ["02", "Събирайте печати", "Сканирайте QR кода или използвайте NFC на касата."], ["03", "Вземете наградата", "Постигнете целта и веднага получете наградата си."]] },
    plans: { badge: "За местни бизнеси", title: "Повече редовни клиенти. По-малко усилия.", text: "Дигитални карти, кампании и задържане на клиенти за бизнеси в Австрия." },
    business: { badge: "За бизнеса", title: "Управлявате бизнес?", text: "TapRadar ви помага да печелите повече редовни клиенти чрез дигитални карти и кампании.", cta: "Вижте решенията за бизнеса" },
  },
};

