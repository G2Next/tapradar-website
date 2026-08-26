import { FormSubmitButton } from "@/components/FormSubmitButton";
import { requirePlatformAdmin } from "@/lib/admin";
import { savePaymentProvider } from "./actions";

type SearchParams = Promise<{ saved?: string; error?: string }>;

export default async function AdminPaymentsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { supabase } = await requirePlatformAdmin();
  const { data: providers } = await supabase
    .from("payment_provider_configs")
    .select("provider,display_name,is_enabled,mode,public_identifier,secret_ciphertext,webhook_ciphertext,status,capabilities,config,updated_at")
    .order("provider");
  const stripeEnvironmentActive = Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_WEBHOOK_SECRET);

  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white sm:px-8"><section className="mx-auto max-w-6xl">
    <p className="text-sm font-black text-purple-200">Interne Konfiguration</p>
    <h1 className="mt-3 text-5xl font-black">Zahlungsanbieter</h1>
    <p className="mt-4 max-w-3xl leading-7 text-slate-400">Stripe ist der zentrale Zahlungsanbieter. Karten, PayPal, SEPA, Link, Apple Pay und Google Pay werden direkt in Stripe verwaltet, damit Abonnements, Rückerstattungen und Berichte in einem System bleiben.</p>
    {params.saved ? <p className="mt-6 rounded-2xl bg-emerald-300/10 p-4 text-emerald-100">{params.saved} wurde gespeichert.</p> : null}
    {params.error ? <p className="mt-6 rounded-2xl bg-red-300/10 p-4 text-red-100">Konfiguration konnte nicht gespeichert werden ({params.error}).</p> : null}

    <StripePaymentMethods />

    <div className="mt-8 grid gap-5">{(providers ?? []).filter(provider => provider.provider !== "paypal").map(provider => {
      const capabilities = Array.isArray(provider.capabilities) ? provider.capabilities.filter(value => typeof value === "string") as string[] : [];
      const config = provider.config as { checkout_ready?: boolean; instructions?: string | null } | null;
      const environmentActive = provider.provider === "stripe" && stripeEnvironmentActive;
      return <details key={provider.provider} open={provider.provider === "stripe"} className="rounded-3xl border border-white/10 bg-white/[0.05]">
        <summary className="cursor-pointer list-none p-6"><div className="flex flex-wrap items-center justify-between gap-4"><div>
          <div className="flex items-center gap-3"><h2 className="text-2xl font-black">{provider.display_name}</h2><Badge active={provider.is_enabled || environmentActive} status={environmentActive && !provider.is_enabled ? "Server-Umgebung" : provider.status}/></div>
          <p className="mt-2 text-sm text-slate-400">{capabilities.join(" · ")}</p>
        </div><span className="text-sm font-black text-purple-200">Konfigurieren ↓</span></div></summary>
        <form action={savePaymentProvider} autoComplete="off" className="grid gap-4 border-t border-white/10 p-6 md:grid-cols-2">
          <input type="hidden" name="provider" value={provider.provider}/><input className="hidden" name="integration_account" value={`${provider.provider}-integration`} autoComplete="username" readOnly/>
          <label className="grid gap-2 text-xs font-black uppercase text-slate-400">Modus<select name="mode" defaultValue={provider.mode} className="rounded-xl bg-slate-900 px-4 py-3 text-base font-normal normal-case"><option value="test">Test / Sandbox</option><option value="live">Live / Produktion</option></select></label>
          <label className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3"><input name="is_enabled" type="checkbox" defaultChecked={provider.is_enabled}/><span className="font-black">Verschlüsselte Admin-Konfiguration aktiv</span></label>
          {provider.provider !== "manual" ? <><Field label="Publishable Key" name="public_identifier" value={provider.public_identifier}/><Field label={provider.secret_ciphertext ? "Secret Key (hinterlegt – leer lassen)" : "Secret Key"} name="secret" type="password"/><Field label={provider.webhook_ciphertext ? "Webhook Secret (hinterlegt – leer lassen)" : "Webhook Secret"} name="webhook_secret" type="password"/></> : null}
          <label className="grid gap-2 text-xs font-black uppercase text-slate-400 md:col-span-2">Interne Hinweise<textarea name="instructions" defaultValue={config?.instructions ?? ""} className="min-h-24 rounded-xl bg-slate-900 px-4 py-3 text-base font-normal normal-case"/></label>
          <div className="rounded-xl bg-white/[0.04] p-4 text-sm text-slate-300 md:col-span-2">{config?.checkout_ready ? <><strong className="text-emerald-200">Checkout verbunden.</strong> {environmentActive && !provider.is_enabled ? "Stripe läuft aktuell über geschützte Server-Umgebungsvariablen. " : ""}Käufe werden per Webhook in Supabase gespeichert.</> : <><strong className="text-amber-200">Nicht mit dem Online-Checkout verbunden.</strong> Diese Option ist nur für spätere manuelle Geschäftsprozesse vorgesehen.</>}</div>
          <FormSubmitButton label="Anbieter speichern" pendingLabel="Anbieter wird gespeichert …" className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950 md:col-span-2"/>
        </form>
      </details>;
    })}</div>
  </section></main>;
}

function StripePaymentMethods() {
  return <section className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-6">
    <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-sm font-black text-cyan-200">Stripe Checkout</p><h2 className="mt-2 text-2xl font-black">Zahlungsarten aktivieren</h2></div><a href="https://dashboard.stripe.com/settings/payment_methods" target="_blank" rel="noreferrer" className="rounded-xl bg-cyan-300 px-4 py-3 font-black text-slate-950">Stripe-Einstellungen öffnen</a></div>
    <p className="mt-4 max-w-3xl leading-7 text-slate-300">PayPal benötigt hier keine eigene Client-ID und kein separates Webhook. Aktiviere die Zahlungsart in Stripe; der vorhandene Checkout zeigt anschließend automatisch nur die für das jeweilige Abonnement geeigneten Optionen.</p>
    <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
      {["Karten", "PayPal", "SEPA-Lastschrift", "Link", "Apple Pay", "Google Pay"].map(method => <li key={method} className="rounded-xl bg-slate-950/40 px-4 py-3 font-bold">□ {method} in Test und Live prüfen</li>)}
    </ul>
  </section>;
}

function Field({ label, name, value, type = "text" }: { label: string; name: string; value?: string | null; type?: string }) {
  return <label className="grid gap-2 text-xs font-black uppercase text-slate-400">{label}<input name={name} type={type} defaultValue={value ?? ""} autoComplete={type === "password" ? "new-password" : "off"} data-1p-ignore="true" data-lpignore="true" className="rounded-xl bg-slate-900 px-4 py-3 text-base font-normal normal-case"/></label>;
}

function Badge({ active, status }: { active: boolean; status: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-black ${active ? "bg-emerald-300/15 text-emerald-100" : "bg-slate-300/10 text-slate-300"}`}>{active ? `Aktiv · ${status}` : "Inaktiv"}</span>;
}
