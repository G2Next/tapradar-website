import Link from "next/link";
import { redirect } from "next/navigation";
import { LEGAL_VERSIONS } from "@/lib/legal-consent";
import { getDashboardContext } from "@/lib/dashboard";
import { startCheckout } from "../actions";

type SearchParams = Promise<{ plan?: string; onboarding?: string; error?: string }>;
const money = (amount: number, currency: string) => new Intl.NumberFormat("de-AT", { style: "currency", currency: currency.toUpperCase() }).format(amount / 100);

export default async function CheckoutConfirmationPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { supabase, user, organizationId, role } = await getDashboardContext();
  if (!user) redirect("/login?next=/dashboard/billing/checkout");
  if (!organizationId) redirect("/dashboard/onboarding");
  if (role !== "owner") redirect("/dashboard/billing?error=permission");
  const plan = (params.plan ?? "").toLowerCase();
  const { data: product } = await supabase.from("subscription_products").select("id,code,name,description,gross_amount,currency,vat_rate,billing_interval,features").eq("code", plan).eq("is_active", true).maybeSingle();
  if (!product) redirect("/dashboard/billing?error=product");
  const back = params.onboarding === "1" ? "/dashboard/onboarding" : "/dashboard/billing";
  const net = Math.round(product.gross_amount / (1 + Number(product.vat_rate) / 100));

  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-16 text-white sm:px-8">
    <section className="mx-auto max-w-3xl">
      <Link href={back} className="font-black text-cyan-300">Zurück zur Tarifauswahl</Link>
      <div className="mt-7 rounded-[32px] border border-white/10 bg-white/[0.07] p-6 sm:p-9">
        <span className="inline-flex rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200">Bestellübersicht</span>
        <h1 className="mt-5 text-4xl font-black sm:text-5xl">{product.name} verbindlich bestellen</h1>
        <p className="mt-4 leading-7 text-slate-300">{product.description}</p>
        <div className="mt-7 rounded-3xl border border-cyan-300/25 bg-slate-950/40 p-6">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm text-slate-400">Wiederkehrender Gesamtpreis</p><p className="mt-1 text-4xl font-black">{money(product.gross_amount, product.currency)}</p></div><p className="font-bold text-slate-300">pro {product.billing_interval === "year" ? "Jahr" : "Monat"}</p></div>
          <p className="mt-4 text-sm text-slate-400">Enthält {product.vat_rate}% USt. · Nettopreis {money(net, product.currency)}. Die endgültige Steuerberechnung erfolgt anhand der Rechnungsdaten bei Stripe.</p>
          <p className="mt-3 text-sm text-slate-300">Das Abonnement verlängert sich jeweils um {product.billing_interval === "year" ? "ein Jahr" : "einen Monat"} und ist nach den AGB kündbar.</p>
        </div>
        {params.error ? <p role="alert" className="mt-5 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-red-100">Bitte bestätige alle erforderlichen Erklärungen.</p> : null}
        <form action={startCheckout} className="mt-7 grid gap-4">
          <input type="hidden" name="plan" value={product.code}/>
          <input type="hidden" name="onboarding" value={params.onboarding === "1" ? "true" : "false"}/>
          <Consent name="terms_accepted">Ich akzeptiere die <LegalLink href="/agb-geschaeftskunden">Geschäftskunden-AGB</LegalLink> (Version {LEGAL_VERSIONS.businessTerms}).</Consent>
          <Consent name="privacy_acknowledged">Ich habe die <LegalLink href="/datenschutz">Datenschutzerklärung</LegalLink> (Version {LEGAL_VERSIONS.privacy}) gelesen.</Consent>
          <Consent name="withdrawal_acknowledged">Ich habe die <LegalLink href="/widerrufsbelehrung">Widerrufsbelehrung</LegalLink> (Version {LEGAL_VERSIONS.withdrawal}) gelesen. Mir ist bekannt, dass gesetzliche Verbraucherrechte nur bei Vorliegen der gesetzlichen Voraussetzungen gelten.</Consent>
          <Consent name="immediate_service_requested">Ich verlange ausdrücklich, dass TapRadar nach erfolgreicher Zahlung bereits vor Ablauf einer möglichen Widerrufsfrist mit der Leistung beginnt.</Consent>
          <button className="mt-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 text-lg font-black text-slate-950">Zahlungspflichtig abonnieren</button>
          <p className="text-center text-xs leading-5 text-slate-500">Anschließend wirst du zur sicheren Zahlungsabwicklung von Stripe weitergeleitet.</p>
        </form>
      </div>
    </section>
  </main>;
}

function Consent({ name, children }: { name: string; children: React.ReactNode }) {
  return <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 leading-6"><input name={name} type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-cyan-300"/><span>{children}</span></label>;
}
function LegalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} target="_blank" rel="noopener noreferrer" className="font-black text-cyan-300 underline">{children}</Link>;
}
