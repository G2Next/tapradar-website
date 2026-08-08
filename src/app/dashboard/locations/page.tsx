import Link from "next/link";
import { redirect } from "next/navigation";
import { GeocodeAddressButton } from "@/components/GeocodeAddressButton";
import { getDashboardContext } from "@/lib/dashboard";
import { countryOptions } from "@/lib/tax";
import { createLocation, updateLocation } from "./actions";

type SearchParams = Promise<{ saved?: string; error?: string }>;
type DayHours = { closed?: boolean; open?: string; close?: string };
type Location = { id:string; name:string; address:string|null; postal_code:string|null; city:string|null; country_code:string; phone:string|null; email:string|null; latitude:number|null; longitude:number|null; opening_hours:Record<string,DayHours>|null; public_status:string; is_primary:boolean; is_active:boolean };
const days = [["monday","Montag"],["tuesday","Dienstag"],["wednesday","Mittwoch"],["thursday","Donnerstag"],["friday","Freitag"],["saturday","Samstag"],["sunday","Sonntag"]] as const;

export default async function LocationsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { supabase, user, organizationId, role } = await getDashboardContext();
  if (!user) redirect("/login?next=/dashboard/locations");
  if (!organizationId) redirect("/dashboard/onboarding");
  const { data } = await supabase.from("locations").select("id,name,address,postal_code,city,country_code,phone,email,latitude,longitude,opening_hours,public_status,is_primary,is_active").eq("organization_id", organizationId).order("is_primary", { ascending:false });
  const locations = (data ?? []) as Location[];
  const canManage = ["owner","manager"].includes(role ?? "");
  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-14 text-white sm:px-8"><section className="mx-auto max-w-6xl">
    <Link href="/dashboard" className="font-black text-cyan-300">Zurück zum Dashboard</Link>
    <h1 className="mt-6 text-5xl font-black">Filialen</h1>
    <p className="mt-4 text-slate-300">Adresse eingeben, Position automatisch finden und Öffnungszeiten je Standort pflegen.</p>
    {params.saved ? <Notice success>Filiale gespeichert.</Notice> : null}
    {params.error ? <Notice>{params.error === "plan-limit" ? "Das Filiallimit des Tarifs ist erreicht." : "Bitte Adresse, automatische Position und Berechtigung prüfen."}</Notice> : null}
    <div className="mt-8 grid gap-6">{locations.map(location => <LocationForm key={location.id} location={location} action={updateLocation} disabled={!canManage}/>)}{canManage ? <LocationForm action={createLocation}/> : null}</div>
  </section></main>;
}

function LocationForm({ location, action, disabled=false }: { location?:Location; action:(formData:FormData)=>Promise<void>; disabled?:boolean }) {
  return <form action={action} className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
    {location ? <input type="hidden" name="location_id" value={location.id}/> : null}
    <div className="flex items-center gap-3"><h2 className="text-2xl font-black">{location?.name ?? "Neue Filiale"}</h2>{location?.is_primary ? <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-black text-cyan-200">Hauptfiliale</span> : null}</div>
    <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Field label="Name" name="name" value={location?.name} required/><Field label="Adresse" name="address" value={location?.address} required/><Field label="PLZ" name="postal_code" value={location?.postal_code} required/><Field label="Ort" name="city" value={location?.city} required/>
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Land<select name="country_code" defaultValue={location?.country_code ?? "AT"} className="rounded-2xl bg-[#102235] px-4 py-3 text-base font-normal normal-case">{countryOptions.map(([code,name])=><option key={code} value={code}>{name}</option>)}</select></label>
      <Field label="Telefon" name="phone" value={location?.phone}/><Field label="E-Mail" name="email" value={location?.email} type="email"/><GeocodeAddressButton/><Field label="Breitengrad (automatisch)" name="latitude" value={location?.latitude?.toString()} type="number" step="any" required/><Field label="Längengrad (automatisch)" name="longitude" value={location?.longitude?.toString()} type="number" step="any" required/>
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Sichtbarkeit<select name="public_status" defaultValue={location?.public_status ?? "draft"} className="rounded-2xl bg-[#102235] px-4 py-3 text-base font-normal normal-case"><option value="draft">Entwurf</option><option value="open">Geöffnet</option><option value="closed">Geschlossen anzeigen</option><option value="hidden">Versteckt</option></select></label>
    </div>
    <fieldset className="mt-5 rounded-2xl border border-white/10 p-4"><legend className="px-2 font-black">Wöchentliche Öffnungszeiten</legend><div className="grid gap-2">{days.map(([key,label],index)=>{const value=location?.opening_hours?.[key];return <div key={key} className="grid grid-cols-[1fr_90px_90px_auto] items-center gap-2 text-sm"><strong>{label}</strong><input name={`${key}_open`} type="time" defaultValue={value?.open ?? (index<5?"09:00":"10:00")} className="rounded-lg bg-white/10 p-2"/><input name={`${key}_close`} type="time" defaultValue={value?.close ?? (index<5?"18:00":"16:00")} className="rounded-lg bg-white/10 p-2"/><label className="flex gap-1"><input name={`${key}_closed`} type="checkbox" defaultChecked={value?.closed ?? index===6}/>zu</label></div>})}</div></fieldset>
    <label className="mt-4 flex items-center gap-3"><input name="is_active" type="checkbox" defaultChecked={location?.is_active ?? true} className="h-5 w-5 accent-cyan-300"/>Aktiv</label>
    {!disabled ? <button className="mt-5 rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950">{location ? "Filiale speichern" : "Filiale anlegen"}</button> : null}
  </form>;
}

function Field({label,name,value,type="text",required=false,step}:{label:string;name:string;value?:string|null;type?:string;required?:boolean;step?:string}) { return <label className="grid gap-2 text-xs font-black uppercase text-slate-300">{label}<input name={name} defaultValue={value ?? ""} type={type} step={step} required={required} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case"/></label>; }
function Notice({children,success=false}:{children:React.ReactNode;success?:boolean}) { return <p className={`mt-6 rounded-2xl p-4 ${success?"bg-emerald-300/10 text-emerald-100":"bg-red-300/10 text-red-100"}`}>{children}</p>; }
