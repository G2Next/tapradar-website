import { createClient } from "@/lib/supabase/server";
import { PrimaryLink, SecondaryLink } from "./Ui";
import { getHtmlLang, type Locale } from "@/i18n/config";
import { translateText } from "@/i18n/translate";

const fallbackPlans = [
  {
    id: "bronze",
    code: "bronze",
    name: "Bronze",
    description: "Für den Einstieg in digitale Kundenbindung.",
    gross_amount: 999,
    currency: "EUR",
    billing_interval: "month",
    features: ["NFC/QR Stempelung", "Kundenbelohnung", "QR-Schaufenster Download", "Basis-Statistik heute/Woche", "1 Mitarbeiter", "Mitarbeiter-PIN System", "Mitarbeiter-Aktivitätslog", "Standard-Support"],
  },
  {
    id: "gold",
    code: "gold",
    name: "Gold",
    description: "Für Geschäfte, die Marketing aktiv nutzen.",
    gross_amount: 4999,
    currency: "EUR",
    billing_interval: "month",
    features: ["Alles aus Bronze", "5 Mitarbeiter", "2× Werbung pro Monat", "2× Kampagnen pro Monat", "Wöchentlicher E-Mail-Bericht", "14 Tage kostenlos testen"],
  },
  {
    id: "platinum",
    code: "platinum",
    name: "Platinum",
    description: "Maximale Reichweite, Werbung und Wachstum.",
    gross_amount: 9999,
    currency: "EUR",
    billing_interval: "month",
    features: ["Alles aus Gold", "15 Mitarbeiter", "4× Werbung pro Monat", "4× Kampagnen pro Monat", "Push-Benachrichtigungen", "GPS-Proximity Werbung", "Retargeting & Countdown Push", "Erweiterte Analytik", "Werbe-Analytik CTR/CVR", "Monatlicher PDF-Bericht", "White-Label QR-Plakat", "Prioritäts-Support 24h", "14 Tage kostenlos testen"],
  },
];

export async function PlanCards({ locale = "de" }: { locale?: Locale }) {
  let plans:Array<{id:string;code:string;name:string;description:string|null;gross_amount:number;currency:string;billing_interval:string;features:unknown}>=[];
  try{const supabase=await createClient();const{data}=await supabase.from("subscription_products").select("id,code,name,description,gross_amount,currency,billing_interval,features").eq("is_active",true).order("sort_order");plans=data??[];}catch{plans=[];}
  if(!plans.length)plans=fallbackPlans;
  return <div className="grid gap-6 md:grid-cols-3">{plans.map((plan,index)=>{const popular=index===1;return <article key={plan.id} className={`relative min-h-[320px] rounded-[28px] border bg-white/[0.07] p-8 shadow-2xl shadow-black/10 ${popular?"border-yellow-300/70 -translate-y-0 md:-translate-y-3":"border-white/20"}`}>{popular?<span className="absolute right-5 top-5 rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-yellow-950">{translateText(locale,"Beliebt")}</span>:null}<h3 className="text-3xl font-black text-white">{plan.name}</h3><div className="mt-4 text-5xl font-black text-white">{new Intl.NumberFormat(getHtmlLang(locale),{style:"currency",currency:plan.currency.toUpperCase()}).format(plan.gross_amount/100)} <span className="text-base font-normal text-slate-300">/{translateText(locale,plan.billing_interval==="year"?"Jahr":"Monat")}</span></div><p className="mt-5 min-h-14 text-sm leading-6 text-slate-300">{plan.description ? translateText(locale,plan.description) : null}</p><div className="mt-8">{popular?<PrimaryLink href="/login">{plan.name} {translateText(locale,"testen")}</PrimaryLink>:<SecondaryLink href="/login">{plan.name} {translateText(locale,"wählen")}</SecondaryLink>}</div></article>})}</div>;
}
