import Link from "next/link";
import { redirect } from "next/navigation";
import { businessCategories, businessIconOptions } from "@/lib/businessCategories";
import { getDashboardContext } from "@/lib/dashboard";
import { countryOptions, vatLabel, type VatTreatment } from "@/lib/tax";
import { updateBusiness } from "./actions";

type SearchParams = Promise<{ saved?:string; error?:string }>;
export default async function OrganizationSettingsPage({searchParams}:{searchParams:SearchParams}) {
  const params=await searchParams; const context=await getDashboardContext();
  if(!context.user) redirect("/login?next=/dashboard/business"); if(!context.organizationId) redirect("/dashboard/onboarding");
  const {data:organization}=await context.supabase.from("organizations").select("id,name,legal_name,category,registration_number,tax_id,billing_email,billing_address,billing_postal_code,billing_city,billing_country_code,vat_treatment,website,description,logo_emoji,public_status,onboarding_status,plan").eq("id",context.organizationId).single();
  const canManage=["owner","manager"].includes(context.role??"");
  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white"><section className="mx-auto max-w-5xl"><Link href="/dashboard" className="font-black text-cyan-300">Zurück</Link><h1 className="mt-6 text-5xl font-black">Unternehmensdaten</h1><p className="mt-3 text-slate-300">Vertragspartner, Rechnungsanschrift und Marke. Filialadressen werden separat gepflegt.</p>
    {params.saved?<p className="mt-6 rounded-2xl bg-emerald-300/10 p-4 text-emerald-100">Unternehmen gespeichert.</p>:null}{params.error?<p className="mt-6 rounded-2xl bg-red-300/10 p-4 text-red-100">Speichern nicht möglich.</p>:null}
    {organization?<form action={updateBusiness} className="mt-8 grid gap-5 rounded-3xl border border-white/10 bg-white/[0.06] p-6 md:grid-cols-2">
      <Field label="Markenname" name="name" value={organization.name} required/><Field label="Rechtlicher Firmenname" name="legal_name" value={organization.legal_name}/>
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Kategorie<select name="category" defaultValue={organization.category} className="rounded-2xl bg-[#102235] px-4 py-3 text-base font-normal normal-case">{businessCategories.map(group=><optgroup key={group.group} label={group.group}>{group.options.map(option=><option key={option.value} value={option.value}>{option.icon} {option.value}</option>)}</optgroup>)}</select></label>
      <Field label="Rechnungs-E-Mail" name="billing_email" value={organization.billing_email} type="email"/><Field label="Firmenadresse" name="billing_address" value={organization.billing_address} required/><Field label="PLZ" name="billing_postal_code" value={organization.billing_postal_code} required/><Field label="Ort" name="billing_city" value={organization.billing_city} required/>
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Land<select name="billing_country_code" defaultValue={organization.billing_country_code??"AT"} className="rounded-2xl bg-[#102235] px-4 py-3 text-base font-normal normal-case">{countryOptions.map(([code,name])=><option key={code} value={code}>{name}</option>)}</select></label>
      <Field label="Registernummer" name="registration_number" value={organization.registration_number}/><Field label="UID-/Steuernummer" name="tax_id" value={organization.tax_id}/><Field label="Website" name="website" value={organization.website}/>
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Symbol<select name="logo_emoji" defaultValue={organization.logo_emoji??"🏪"} className="rounded-2xl bg-[#102235] px-4 py-3 text-base font-normal normal-case">{businessIconOptions.map(option=><option key={option.icon} value={option.icon}>{option.icon} {option.value}</option>)}</select></label>
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300 md:col-span-2">Beschreibung<textarea name="description" defaultValue={organization.description??""} className="min-h-28 rounded-2xl bg-white/[0.06] px-4 py-3 text-base font-normal normal-case"/></label>
      <div className="rounded-2xl bg-white/[0.04] p-4 text-sm md:col-span-2"><p>Steuerbehandlung: <strong>{vatLabel((organization.vat_treatment ?? "domestic") as VatTreatment)}</strong></p><p className="mt-2 text-slate-400">Stripe prüft die Rechnungsadresse und UID beim Kauf abschließend.</p><p className="mt-3">Tarif: <strong>{organization.plan}</strong> · Onboarding: <strong>{organization.onboarding_status}</strong> · Sichtbarkeit: <strong>{organization.public_status}</strong></p></div>
      {canManage?<button className="rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 md:col-span-2">Unternehmen speichern</button>:null}
    </form>:null}
  </section></main>;
}
function Field({label,name,value,type="text",required=false}:{label:string;name:string;value?:string|null;type?:string;required?:boolean}) { return <label className="grid gap-2 text-xs font-black uppercase text-slate-300">{label}<input name={name} defaultValue={value??""} type={type} required={required} className="rounded-2xl bg-white/[0.06] px-4 py-3 text-base font-normal normal-case"/></label>; }
