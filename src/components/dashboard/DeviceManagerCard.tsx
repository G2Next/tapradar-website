"use client";

import { deleteStampDevice, rotateStampDeviceToken, setStampDeviceStatus, updateStampDevice } from "@/app/dashboard/devices/actions";
import type { DeviceMessages } from "@/i18n/devices";

type Location = { id: string; name: string };
type Device = { id: string; name: string; locationId: string; locationName: string; isActive: boolean; lastUsedAt: string | null };

export function DeviceManagerCard({ device, locations, canManage, messages }: { device: Device; locations: Location[]; canManage: boolean; messages: DeviceMessages }) {
  return <article className="rounded-3xl border border-white/10 bg-white/[0.07] p-6">
    <div className="flex flex-wrap items-start justify-between gap-4"><div>
      <div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-black">{device.name}</h2><span className={`rounded-full px-2.5 py-1 text-xs font-black ${device.isActive ? "bg-emerald-300/15 text-emerald-200" : "bg-white/10 text-slate-300"}`}>{device.isActive ? "Aktiv" : "Inaktiv"}</span></div>
      <p className="mt-2 text-sm text-slate-400">{device.locationName}</p>
      <p className="mt-1 text-sm text-slate-400">{device.lastUsedAt ? `Zuletzt ${new Date(device.lastUsedAt).toLocaleString("de-AT")}` : "Noch nicht verwendet"}</p>
    </div></div>

    {canManage ? <div className="mt-5 flex flex-wrap gap-2">
      <form action={rotateStampDeviceToken} onSubmit={(event) => { if (!window.confirm(messages.rotateConfirm)) event.preventDefault(); }}>
        <input type="hidden" name="device_id" value={device.id} /><button className="rounded-2xl bg-cyan-300 px-4 py-2.5 text-sm font-black text-slate-950">QR anzeigen / neu erzeugen</button>
      </form>
      <form action={setStampDeviceStatus}><input type="hidden" name="device_id" value={device.id} /><input type="hidden" name="is_active" value={device.isActive ? "false" : "true"} /><button className="rounded-2xl bg-white/10 px-4 py-2.5 text-sm font-black text-white hover:bg-white/15">{device.isActive ? "Deaktivieren" : "Aktivieren"}</button></form>
    </div> : null}

    {canManage ? <details className="mt-5 border-t border-white/10 pt-4"><summary className="cursor-pointer text-sm font-black text-cyan-200">{messages.edit}</summary>
      <form action={updateStampDevice} className="mt-4 grid gap-3 sm:grid-cols-2"><input type="hidden" name="device_id" value={device.id} />
        <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Bezeichnung<input name="name" required maxLength={100} defaultValue={device.name} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case text-white" /></label>
        <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Filiale<select name="location_id" required defaultValue={device.locationId} className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case text-white">{locations.map((location) => <option key={location.id} value={location.id}>{location.name}</option>)}</select></label>
        <button className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white sm:col-span-2">{messages.save}</button>
      </form>
      <form action={deleteStampDevice} className="mt-3" onSubmit={(event) => { if (!window.confirm(messages.deleteConfirm.replace("{name}", device.name))) event.preventDefault(); }}><input type="hidden" name="device_id" value={device.id} /><button className="rounded-2xl border border-red-300/30 bg-red-300/10 px-4 py-2.5 text-sm font-black text-red-100">Löschen</button></form>
    </details> : null}
  </article>;
}
