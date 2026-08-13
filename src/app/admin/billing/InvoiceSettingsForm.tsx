"use client";

import Image from "next/image";
import { useActionState } from "react";
import { FormSubmitButton } from "@/components/FormSubmitButton";
import { countryOptions } from "@/lib/tax";
import { updateInvoiceSettings, type InvoiceSettingsState } from "./actions";

type InvoiceSettings = {
  company_name?: string | null; legal_name?: string | null; slogan?: string | null; address?: string | null; postal_code?: string | null; city?: string | null; country_code?: string | null; email?: string | null; phone?: string | null; website?: string | null; registration_number?: string | null; tax_id?: string | null; bank_name?: string | null; iban?: string | null; bic?: string | null; invoice_prefix?: string | null; payment_terms_days?: number | null; accent_color?: string | null; logo_url?: string | null; logo_position?: string | null; footer_text?: string | null;
};

const initialState: InvoiceSettingsState = {};

export function InvoiceSettingsForm({ settings }: { settings: InvoiceSettings | null }) {
  const [state, formAction] = useActionState(updateInvoiceSettings, initialState);
  return (
    <details className="mt-8 rounded-3xl border border-purple-300/20 bg-purple-300/[0.05]">
      <summary className="cursor-pointer p-6 text-2xl font-black">Rechnungsvorlage & TapRadar-Firmendaten</summary>
      {state.error ? <p className="mx-6 mt-2 rounded-2xl bg-red-300/10 p-4 text-red-100">Speichern nicht möglich ({state.error}). Bitte Logo und Pflichtfelder prüfen — deine Eingaben blieben erhalten.</p> : null}
      <form action={formAction} className="grid gap-4 border-t border-white/10 p-6 md:grid-cols-2 xl:grid-cols-3">
        <Field label="Firmenname / Marke" name="company_name" value={settings?.company_name} required/><Field label="Rechtlicher Firmenname" name="legal_name" value={settings?.legal_name}/><Field label="Slogan" name="slogan" value={settings?.slogan}/><Field label="Adresse" name="address" value={settings?.address}/><Field label="PLZ" name="postal_code" value={settings?.postal_code}/><Field label="Ort" name="city" value={settings?.city}/><label className="grid gap-2 text-xs font-black uppercase text-slate-400">Land<select name="country_code" defaultValue={settings?.country_code??"AT"} className="rounded-xl bg-slate-900 px-4 py-3 text-base font-normal normal-case">{countryOptions.map(([code,name])=><option key={code} value={code}>{name}</option>)}</select></label><Field label="E-Mail" name="email" value={settings?.email} type="email"/><Field label="Telefon" name="phone" value={settings?.phone}/><Field label="Website" name="website" value={settings?.website}/><Field label="Firmenbuchnummer" name="registration_number" value={settings?.registration_number}/><Field label="UID-Nummer" name="tax_id" value={settings?.tax_id}/><Field label="Bank" name="bank_name" value={settings?.bank_name}/><Field label="IBAN" name="iban" value={settings?.iban}/><Field label="BIC" name="bic" value={settings?.bic}/><Field label="Rechnungspräfix" name="invoice_prefix" value={settings?.invoice_prefix??"TR"}/><Field label="Zahlungsziel (Tage)" name="payment_terms_days" value={String(settings?.payment_terms_days??14)} type="number"/><Field label="Akzentfarbe" name="accent_color" value={settings?.accent_color??"#67e8f9"} type="color"/>
        <label className="grid gap-2 text-xs font-black uppercase text-slate-400">Logo (PNG/JPG, max. 2 MB)<input name="logo" type="file" accept="image/png,image/jpeg" className="rounded-xl bg-slate-900 px-4 py-3 text-base font-normal normal-case"/>{settings?.logo_url?<Image src={settings.logo_url} alt="Aktuelles Rechnungslogo" width={192} height={64} unoptimized className="mt-2 h-16 w-fit max-w-48 rounded-lg bg-white object-contain p-2"/>:null}</label><label className="grid gap-2 text-xs font-black uppercase text-slate-400">Logo-Position<select name="logo_position" defaultValue={settings?.logo_position??"left"} className="rounded-xl bg-slate-900 px-4 py-3 text-base font-normal normal-case"><option value="left">Links</option><option value="center">Mitte</option><option value="right">Rechts</option></select></label><label className="grid gap-2 text-xs font-black uppercase text-slate-400 xl:col-span-3">Fußtext<textarea name="footer_text" defaultValue={settings?.footer_text??""} maxLength={500} className="min-h-24 rounded-xl bg-slate-900 px-4 py-3 text-base font-normal normal-case"/></label><FormSubmitButton label="Vorlage speichern" pendingLabel="Vorlage wird gespeichert …" className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950 xl:col-span-3"/>
      </form>
    </details>
  );
}

function Field({ label, name, value, type = "text", required = false }: { label: string; name: string; value?: string | null; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-xs font-black uppercase text-slate-400">{label}<input required={required} name={name} type={type} defaultValue={value??""} className="rounded-xl bg-slate-900 px-4 py-3 text-base font-normal normal-case"/></label>;
}
