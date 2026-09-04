import Link from "next/link";
import { FormSubmitButton } from "@/components/FormSubmitButton";
import { requirePlatformAdmin } from "@/lib/admin";
import { updateErrorStatus } from "./actions";

type SearchParams = Promise<{ status?: string; severity?: string; source?: string; q?: string; error?: string }>;
type ErrorRow = {
  id: string;
  reference_code: string;
  severity: string;
  status: string;
  source: string;
  route: string | null;
  operation: string | null;
  error_code: string | null;
  message: string;
  stack: string | null;
  digest: string | null;
  organization_id: string | null;
  user_id: string | null;
  context: Record<string, unknown> | null;
  first_seen_at: string;
  last_seen_at: string;
};

export default async function AdminErrorsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { supabase, admin } = await requirePlatformAdmin();
  const selectedStatus = ["all", "open", "acknowledged", "resolved"].includes(params.status ?? "") ? params.status! : "open";
  const selectedSeverity = ["warning", "error", "critical"].includes(params.severity ?? "") ? params.severity! : "";
  const selectedSource = (params.source ?? "").trim().replace(/[%(),]/g, "").slice(0, 100);
  const search = (params.q ?? "").trim().replace(/[%(),]/g, "").slice(0, 100);
  let query = supabase.from("app_error_events")
    .select("id,reference_code,severity,status,source,route,operation,error_code,message,stack,digest,organization_id,user_id,context,first_seen_at,last_seen_at")
    .order("last_seen_at", { ascending: false }).limit(200);
  if (selectedStatus !== "all") query = query.eq("status", selectedStatus);
  if (selectedSeverity) query = query.eq("severity", selectedSeverity);
  if (selectedSource) query = query.eq("source", selectedSource);
  if (search) query = query.or(`reference_code.ilike.%${search}%,message.ilike.%${search}%,route.ilike.%${search}%,error_code.ilike.%${search}%`);

  const [events, openCount, criticalCount, resolvedCount, sources] = await Promise.all([
    query,
    supabase.from("app_error_events").select("id", { count: "exact", head: true }).eq("status", "open"),
    supabase.from("app_error_events").select("id", { count: "exact", head: true }).eq("status", "open").eq("severity", "critical"),
    supabase.from("app_error_events").select("id", { count: "exact", head: true }).eq("status", "resolved"),
    supabase.from("app_error_events").select("source").order("source").limit(500),
  ]);
  const rows = (events.data ?? []) as ErrorRow[];
  const sourceOptions = [...new Set((sources.data ?? []).map(item => item.source))];
  const currentQuery = new URLSearchParams(Object.entries(params).filter((entry): entry is [string, string] => typeof entry[1] === "string"));
  const returnTo = `/admin/errors${currentQuery.size ? `?${currentQuery}` : ""}`;

  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white sm:px-8"><section className="mx-auto max-w-7xl">
    <div className="flex flex-wrap items-end justify-between gap-5"><div><span className="rounded-full bg-amber-300/15 px-4 py-2 text-sm font-black text-amber-100">Nur Plattform-Admins · {admin.role}</span><h1 className="mt-5 text-5xl font-black">Fehlerzentrale</h1><p className="mt-3 max-w-3xl text-slate-300">Technische Fehler aus Website, Dashboard, Kunden-App und Server. Formulardaten, Passwörter und Tokens werden nicht gespeichert.</p></div><Link href="/admin" className="font-black text-purple-200">← Administration</Link></div>
    {events.error ? <p role="alert" className="mt-7 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-red-100">Die Fehlerzentrale ist noch nicht verfügbar. Bitte zuerst die neue Datenbankmigration ausführen.</p> : null}
    {params.error ? <p role="alert" className="mt-7 rounded-2xl bg-red-300/10 p-4 text-red-100">Status konnte nicht gespeichert werden ({params.error}).</p> : null}
    <div className="mt-8 grid gap-4 sm:grid-cols-3"><Metric label="Offen" value={openCount.count ?? 0} tone="text-amber-200"/><Metric label="Kritisch offen" value={criticalCount.count ?? 0} tone="text-red-200"/><Metric label="Erledigt" value={resolvedCount.count ?? 0} tone="text-emerald-200"/></div>
    <form className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.05] p-5 md:grid-cols-4"><label className="grid gap-2 text-xs font-black uppercase text-slate-400">Status<select name="status" defaultValue={selectedStatus} className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-base font-normal normal-case"><option value="open">Offen</option><option value="acknowledged">In Bearbeitung</option><option value="resolved">Erledigt</option><option value="all">Alle</option></select></label><label className="grid gap-2 text-xs font-black uppercase text-slate-400">Schweregrad<select name="severity" defaultValue={selectedSeverity} className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-base font-normal normal-case"><option value="">Alle</option><option value="critical">Kritisch</option><option value="error">Fehler</option><option value="warning">Warnung</option></select></label><label className="grid gap-2 text-xs font-black uppercase text-slate-400">Quelle<select name="source" defaultValue={selectedSource} className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-base font-normal normal-case"><option value="">Alle</option>{sourceOptions.map(source => <option key={source} value={source}>{source}</option>)}</select></label><label className="grid gap-2 text-xs font-black uppercase text-slate-400">Suche<input name="q" defaultValue={params.q ?? ""} placeholder="Fehlernummer, Seite, Meldung" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-base font-normal normal-case"/></label><div className="flex gap-3 md:col-span-4"><FormSubmitButton label="Filter anwenden" pendingLabel="Wird gefiltert …" className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950"/><Link href="/admin/errors?status=open" className="rounded-xl bg-white/10 px-5 py-3 font-black">Zurücksetzen</Link></div></form>
    <div className="mt-8 grid gap-4">{rows.map(row => <ErrorCard key={row.id} row={row} returnTo={returnTo}/>)}</div>
    {!events.error && !rows.length ? <p className="mt-8 rounded-3xl border border-emerald-300/20 bg-emerald-300/5 p-10 text-center text-emerald-100">Keine Fehler für diesen Filter gefunden.</p> : null}
  </section></main>;
}

function ErrorCard({ row, returnTo }: { row: ErrorRow; returnTo: string }) {
  const severityStyle = row.severity === "critical" ? "bg-red-300/15 text-red-100" : row.severity === "warning" ? "bg-amber-300/15 text-amber-100" : "bg-orange-300/15 text-orange-100";
  return <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-5"><div className="flex flex-wrap items-start justify-between gap-4"><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-3 py-1 text-xs font-black uppercase ${severityStyle}`}>{row.severity}</span><span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">{statusLabel(row.status)}</span><code className="rounded bg-slate-900 px-2 py-1 text-sm text-cyan-200">{row.reference_code}</code></div><h2 className="mt-4 break-words text-lg font-black">{row.message}</h2><p className="mt-2 break-all text-sm text-slate-400">{row.source}{row.route ? ` · ${row.route}` : ""}{row.operation ? ` · ${row.operation}` : ""}</p><p className="mt-1 text-xs text-slate-500">Zuletzt: {formatDate(row.last_seen_at)}{row.error_code ? ` · Code ${row.error_code}` : ""}</p></div><StatusActions id={row.id} status={row.status} returnTo={returnTo}/></div><details className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4"><summary className="cursor-pointer font-black text-purple-200">Technische Details</summary><dl className="mt-4 grid gap-3 text-sm md:grid-cols-2"><Detail label="Erstmals" value={formatDate(row.first_seen_at)}/><Detail label="Digest" value={row.digest}/><Detail label="Organisation" value={row.organization_id}/><Detail label="Benutzer-ID" value={row.user_id}/></dl>{row.context && Object.keys(row.context).length ? <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl bg-black/30 p-4 text-xs text-slate-300">{JSON.stringify(row.context, null, 2)}</pre> : null}{row.stack ? <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-xl bg-black/30 p-4 text-xs text-slate-300">{row.stack}</pre> : null}</details></article>;
}

function StatusActions({ id, status, returnTo }: { id: string; status: string; returnTo: string }) { return <div className="flex flex-wrap gap-2">{status !== "acknowledged" ? <StatusButton id={id} status="acknowledged" label="Bearbeiten" returnTo={returnTo}/> : null}{status !== "resolved" ? <StatusButton id={id} status="resolved" label="Erledigt" returnTo={returnTo}/> : <StatusButton id={id} status="open" label="Wieder öffnen" returnTo={returnTo}/>}</div>; }
function StatusButton({ id, status, label, returnTo }: { id: string; status: string; label: string; returnTo: string }) { return <form action={updateErrorStatus}><input type="hidden" name="error_id" value={id}/><input type="hidden" name="status" value={status}/><input type="hidden" name="return_to" value={returnTo}/><button className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-black hover:bg-white/15">{label}</button></form>; }
function Metric({ label, value, tone }: { label: string; value: number; tone: string }) { return <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5"><p className="text-sm text-slate-400">{label}</p><p className={`mt-2 text-4xl font-black ${tone}`}>{value}</p></div>; }
function Detail({ label, value }: { label: string; value: string | null }) { return <div><dt className="font-black text-slate-500">{label}</dt><dd className="mt-1 break-all text-slate-300">{value ?? "–"}</dd></div>; }
function statusLabel(status: string) { return status === "acknowledged" ? "In Bearbeitung" : status === "resolved" ? "Erledigt" : "Offen"; }
function formatDate(value: string) { return new Intl.DateTimeFormat("de-AT", { dateStyle: "medium", timeStyle: "medium", timeZone: "Europe/Vienna" }).format(new Date(value)); }
