import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DeviceManagerCard } from "@/components/dashboard/DeviceManagerCard";
import { StampQrCard } from "@/components/dashboard/StampQrCard";
import { deviceMessages } from "@/i18n/devices";
import { getLocale } from "@/i18n/server";
import { recordAppError } from "@/lib/app-errors";
import { getDashboardContext } from "@/lib/dashboard";
import { STAMP_TOKEN_COOKIE } from "@/lib/flash-secrets";
import { createStampDevice } from "./actions";

type SearchParams = Promise<{ revealed?: string; saved?: string; deleted?: string; error?: string }>;

export default async function DevicesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const locale = await getLocale();
  const messages = deviceMessages[locale];
  const { supabase, user, organizationId, role } = await getDashboardContext();
  if (!user) redirect("/login?next=/dashboard/devices");
  if (!organizationId) redirect("/dashboard/onboarding");

  const [{ data: locations, error: locationsError }, { data: devices, error: devicesError }] = await Promise.all([
    supabase.from("locations").select("id, name").eq("organization_id", organizationId).eq("is_active", true).order("name"),
    supabase.from("stamp_devices").select("id, name, location_id, is_active, last_used_at, locations!stamp_devices_location_id_fkey(name)").eq("organization_id", organizationId).order("created_at", { ascending: false }),
  ]);
  if (locationsError || devicesError) await recordAppError({ source: "merchant-devices", error: locationsError ?? devicesError, route: "/dashboard/devices", operation: "load", organizationId, userId: user.id });
  const token = params.revealed ? (await cookies()).get(STAMP_TOKEN_COOKIE)?.value : null;
  const revealedDevice = params.revealed ? (devices ?? []).find((device) => device.id === params.revealed) : null;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const canManage = ["owner", "manager"].includes(role ?? "");

  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-16 text-white sm:px-8">
    <section className="mx-auto max-w-6xl">
      <Link href="/dashboard" className="font-black text-cyan-300">Zurück zum Dashboard</Link>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div><h1 className="text-4xl font-black sm:text-5xl">QR- und NFC-Geräte</h1><p className="mt-4 text-slate-300">Jeder Standort erhält eigene, widerrufbare Zugangsdaten für sichere Stempelbuchungen.</p></div>
        <span className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-black">{devices?.length ?? 0}</span>
      </div>

      {token && revealedDevice ? <div className="mt-8">
        <div className="mb-4 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4 text-amber-100">Dieser QR-Code wird nur kurz vollständig angezeigt. Drucke ihn aus oder schreibe die URL auf einen NFC-Tag.</div>
        <StampQrCard stampUrl={`${siteUrl}/collect/${token}`} deviceName={revealedDevice.name} messages={messages} />
      </div> : null}
      {params.saved || params.deleted ? <p className="mt-7 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-emerald-100">Änderung wurde gespeichert.</p> : null}
      {params.error ? <p className="mt-7 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-red-100">Gerät konnte nicht gespeichert werden.</p> : null}
      {locationsError || devicesError ? <p className="mt-7 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-red-100">Geräte konnten nicht geladen werden. Bitte lade die Seite erneut.</p> : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_.72fr]">
        <div>
          <div className="grid gap-4">
            {(devices ?? []).map((device) => {
              const location = first(device.locations);
              return <DeviceManagerCard key={device.id} canManage={canManage} locations={locations ?? []} device={{
                id: device.id,
                name: device.name,
                locationId: device.location_id,
                locationName: location?.name ?? "Keine Filiale",
                isActive: device.is_active,
                lastUsedAt: device.last_used_at,
              }} messages={messages} />;
            })}
          </div>
        </div>

        {canManage ? <form action={createStampDevice} className="h-fit rounded-[28px] border border-white/10 bg-white/[0.07] p-6 lg:sticky lg:top-6">
          <h2 className="text-2xl font-black">Neues Gerät</h2>
          <label className="mt-5 grid gap-2 text-xs font-black uppercase text-slate-300">Bezeichnung<input name="name" required maxLength={100} placeholder="Kasse 1" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case text-white" /></label>
          <label className="mt-4 grid gap-2 text-xs font-black uppercase text-slate-300">Filiale<select name="location_id" required className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case text-white">{(locations ?? []).map((location) => <option key={location.id} value={location.id}>{location.name}</option>)}</select></label>
          <button disabled={!locations?.length} className="mt-5 w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 disabled:cursor-not-allowed disabled:opacity-50">Sicheren QR-Code erzeugen</button>
        </form> : null}
      </div>
    </section>
  </main>;
}

function first<T>(value: T | T[] | null | undefined): T | undefined {
  return Array.isArray(value) ? value[0] : value ?? undefined;
}
