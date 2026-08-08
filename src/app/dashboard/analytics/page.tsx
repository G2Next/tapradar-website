import Link from "next/link";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";

export default async function AnalyticsPage() {
  const context = await getDashboardContext();
  if (!context.user) redirect("/login?next=/dashboard/analytics");
  if (!context.organizationId) redirect("/dashboard/onboarding");
  const selected = context.locations.find((location) => location.id === context.locationId);
  let stamps = context.supabase.from("stamp_events").select("id", { count: "exact", head: true }).eq("organization_id", context.organizationId);
  let redemptions = context.supabase.from("reward_redemptions").select("id", { count: "exact", head: true }).eq("organization_id", context.organizationId);
  let devices = context.supabase.from("stamp_devices").select("id", { count: "exact", head: true }).eq("organization_id", context.organizationId).eq("is_active", true);
  if (context.locationId) {
    stamps = stamps.eq("location_id", context.locationId);
    redemptions = redemptions.eq("location_id", context.locationId);
    devices = devices.eq("location_id", context.locationId);
  }
  const [stampResult, redemptionResult, deviceResult] = await Promise.all([stamps, redemptions, devices]);
  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white"><section className="mx-auto max-w-5xl"><Link href="/dashboard" className="font-black text-cyan-300">Zurück</Link><h1 className="mt-6 text-5xl font-black">Filialstatistik</h1><p className="mt-3 text-slate-300">Aktiver Kontext: <strong>{selected?.name ?? "Gesamtes Unternehmen"}</strong>. Wechseln kannst du ihn im Dashboard.</p><div className="mt-8 grid gap-4 md:grid-cols-3"><Metric label="Vergebene Stempel" value={stampResult.count ?? 0}/><Metric label="Eingelöste Rewards" value={redemptionResult.count ?? 0}/><Metric label="Aktive QR-/NFC-Geräte" value={deviceResult.count ?? 0}/></div></section></main>;
}
function Metric({ label, value }: { label: string; value: number }) { return <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"><p className="text-sm text-slate-400">{label}</p><p className="mt-3 text-4xl font-black">{value}</p></div>; }
