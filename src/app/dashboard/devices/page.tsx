import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { StampQrCard } from "@/components/dashboard/StampQrCard";
import { getDashboardContext } from "@/lib/dashboard";
import { STAMP_TOKEN_COOKIE } from "@/lib/flash-secrets";
import { createStampDevice, setStampDeviceStatus } from "./actions";

type SearchParams = Promise<{ created?: string; saved?: string; error?: string }>;
export default async function DevicesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams; const { supabase, user, organizationId, role } = await getDashboardContext();
  if (!user) redirect("/login?next=/dashboard/devices"); if (!organizationId) redirect("/dashboard/onboarding");
  const [{ data: locations }, { data: devices }] = await Promise.all([supabase.from("locations").select("id, name").eq("organization_id", organizationId).eq("is_active", true), supabase.from("stamp_devices").select("id, name, is_active, last_used_at, locations(name)").eq("organization_id", organizationId).order("created_at", { ascending: false })]);
  const token = params.created ? (await cookies()).get(STAMP_TOKEN_COOKIE)?.value : null;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const canManage = ["owner", "manager"].includes(role ?? "");
  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-16 text-white sm:px-8"><section className="mx-auto max-w-6xl"><Link href="/dashboard" className="font-black text-cyan-300">Zurück zum Dashboard</Link><h1 className="mt-6 text-5xl font-black">QR- und NFC-Geräte</h1><p className="mt-4 text-slate-300">Jeder Standort erhält eigene, widerrufbare Zugangsdaten für sichere Stempelbuchungen.</p>
  {token ? <div className="mt-8"><div className="mb-4 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4 text-amber-100">Dieser QR-Code wird nur kurz vollständig angezeigt. Drucke ihn aus oder schreibe die URL auf einen NFC-Tag.</div><StampQrCard stampUrl={`${siteUrl}/collect/${token}`} /></div> : null}
  {params.error ? <p className="mt-7 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-red-100">Gerät konnte nicht gespeichert werden.</p> : null}
  <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_.8fr]"><div className="grid gap-4">{(devices ?? []).map((device) => { const location = first(device.locations); return <article key={device.id} className="rounded-3xl border border-white/10 bg-white/[0.07] p-6"><div className="flex flex-wrap items-center justify-between gap-4"><div><h2 className="text-xl font-black">{device.name}</h2><p className="mt-1 text-sm text-slate-400">{location?.name} · {device.last_used_at ? `Zuletzt ${new Date(device.last_used_at).toLocaleString("de-AT")}` : "Noch nicht verwendet"}</p></div>{canManage ? <form action={setStampDeviceStatus}><input type="hidden" name="device_id" value={device.id} /><input type="hidden" name="is_active" value={device.is_active ? "false" : "true"} /><button className={`rounded-2xl px-4 py-2 text-sm font-black ${device.is_active ? "bg-emerald-300/15 text-emerald-200" : "bg-white/10 text-slate-300"}`}>{device.is_active ? "Aktiv – deaktivieren" : "Aktivieren"}</button></form> : null}</div></article>; })}</div>
  {canManage ? <form action={createStampDevice} className="h-fit rounded-[28px] border border-white/10 bg-white/[0.07] p-6"><h2 className="text-2xl font-black">Neues Gerät</h2><label className="mt-5 grid gap-2 text-xs font-black uppercase text-slate-300">Bezeichnung<input name="name" required placeholder="Kasse 1" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case text-white" /></label><label className="mt-4 grid gap-2 text-xs font-black uppercase text-slate-300">Filiale<select name="location_id" required className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case text-white">{(locations ?? []).map((location) => <option key={location.id} value={location.id}>{location.name}</option>)}</select></label><button className="mt-5 w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950">Sicheren QR-Code erzeugen</button></form> : null}</div></section></main>;
}
function first<T>(value: T | T[] | null | undefined): T | undefined { return Array.isArray(value) ? value[0] : value ?? undefined; }
