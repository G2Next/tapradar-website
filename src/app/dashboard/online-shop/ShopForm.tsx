"use client";

import { useActionState, useState } from "react";
import { isShopUrl, shopSystems, shopSystemLabels, type OnlineShopProfile, type ShopFormState } from "@/lib/online-shop";
import { saveOnlineShop } from "./actions";

const inputClass = "w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-base font-normal text-white focus:border-cyan-300 focus:outline-none";
const initialState: ShopFormState = { status: "idle" };

export function ShopForm({ organizationId, profile, canManage }: { organizationId: string; profile: OnlineShopProfile; canManage: boolean }) {
  const [state, action, pending] = useActionState(saveOnlineShop, initialState);
  const [values, setValues] = useState(profile);
  return <form action={action} className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6 md:p-8">
    <input type="hidden" name="organization_id" value={organizationId}/>
    <fieldset disabled={!canManage || pending} className="grid gap-6 disabled:opacity-70">
      <legend className="mb-5 text-2xl font-black">Dein Shop-Profil</legend>
      <label className="flex items-start gap-3 rounded-2xl bg-white/[0.04] p-4"><input type="checkbox" name="has_shop" checked={values.has_shop} onChange={event => setValues({...values, has_shop: event.target.checked})} className="mt-1 h-5 w-5 accent-cyan-300"/><span><strong>Unser Unternehmen hat einen Onlineshop</strong><span className="mt-1 block text-sm text-slate-300">Shop-Angaben werden separat für dieses Unternehmen gespeichert.</span></span></label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">Shopname<input name="name" value={values.name} onChange={event => setValues({...values, name: event.target.value})} required={values.has_shop} maxLength={120} autoComplete="organization" className={inputClass}/></label>
        <label className="grid gap-2 text-sm font-bold">Shop-System<select name="platform" value={values.platform} onChange={event => setValues({...values, platform: event.target.value as OnlineShopProfile["platform"]})} className={inputClass}>{shopSystems.map(system => <option key={system} value={system}>{shopSystemLabels[system]}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-bold md:col-span-2">Shop-Adresse<input name="url" type="url" value={values.url} onChange={event => setValues({...values, url: event.target.value})} placeholder="https://shop.beispiel.at" required={values.has_shop} maxLength={500} className={inputClass}/></label>
        <label className="grid gap-2 text-sm font-bold md:col-span-2">Beschreibung<textarea name="description" value={values.description} onChange={event => setValues({...values, description: event.target.value})} maxLength={1500} rows={4} placeholder="Was können Kunden in deinem Onlineshop kaufen?" className={inputClass}/><span className="text-xs font-normal text-slate-400">Optional · maximal 1.500 Zeichen</span></label>
      </div>
      {canManage ? <button type="submit" className="justify-self-start rounded-xl bg-cyan-300 px-5 py-3 font-black text-slate-950 disabled:cursor-wait">{pending ? "Wird gespeichert …" : "Shop-Profil speichern"}</button> : <p className="text-sm text-slate-300">Du hast Lesezugriff. Änderungen können Inhaber und Manager vornehmen.</p>}
    </fieldset>
    {state.message ? <p role={state.status === "error" ? "alert" : "status"} className={`mt-5 rounded-xl p-4 text-sm ${state.status === "error" ? "bg-red-300/10 text-red-100" : "bg-emerald-300/10 text-emerald-100"}`}>{state.message}</p> : null}
    {profile.has_shop && isShopUrl(profile.url) ? <a href={profile.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-bold text-cyan-200">Gespeicherten Shop öffnen ↗</a> : null}
  </form>;
}
