import Link from "next/link";
import { requirePlatformAdmin } from "@/lib/admin";
import { createAdminClient } from "@/lib/supabase/admin";

type SearchParams = Promise<{ q?: string; action?: string; entity?: string; actor?: string; from?: string; to?: string; page?: string }>;
const pageSize = 50;

export default async function AdminAuditLogPage({ searchParams }: { searchParams: SearchParams }) {
  await requirePlatformAdmin("audit.view");
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const q = cleanSearch(params.q);
  const db = createAdminClient();
  let query = db.from("audit_logs").select("id,actor_user_id,organization_id,action,entity_type,entity_id,metadata,created_at", { count: "exact" }).order("created_at", { ascending: false });
  if (q) query = query.or(`action.ilike.%${q}%,entity_id.ilike.%${q}%`);
  if (params.action) query = query.ilike("action", `${cleanFilter(params.action)}%`);
  if (params.entity) query = query.eq("entity_type", cleanFilter(params.entity));
  if (params.actor && /^[0-9a-f-]{36}$/i.test(params.actor)) query = query.eq("actor_user_id", params.actor);
  if (validDate(params.from)) query = query.gte("created_at", `${params.from}T00:00:00.000Z`);
  if (validDate(params.to)) query = query.lte("created_at", `${params.to}T23:59:59.999Z`);
  const { data: logs, count, error } = await query.range((page - 1) * pageSize, page * pageSize - 1);
  if (error) throw new Error(`Audit-Log konnte nicht geladen werden: ${error.message}`);
  const actorIds = [...new Set((logs ?? []).map(log => log.actor_user_id).filter(Boolean))] as string[];
  const organizationIds = [...new Set((logs ?? []).map(log => log.organization_id).filter(Boolean))] as string[];
  const [{ data: profiles }, { data: organizations }] = await Promise.all([
    actorIds.length ? db.from("profiles").select("id,email,full_name").in("id", actorIds) : Promise.resolve({ data: [] }),
    organizationIds.length ? db.from("organizations").select("id,name").in("id", organizationIds) : Promise.resolve({ data: [] }),
  ]);
  const actors = new Map((profiles ?? []).map(profile => [profile.id, profile]));
  const organizationNames = new Map((organizations ?? []).map(organization => [organization.id, organization.name]));
  const totalPages = Math.max(1, Math.ceil((count ?? 0) / pageSize));
  const exportParams = new URLSearchParams(Object.entries(params).filter(([key, value]) => key !== "page" && Boolean(value)) as [string, string][]);

  return <main className="min-h-screen bg-slate-950 px-5 py-12 text-white sm:px-8"><section className="mx-auto max-w-7xl">
    <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-[.2em] text-purple-200">Nachvollziehbarkeit</p><h1 className="mt-3 text-5xl font-black">Audit-Log</h1><p className="mt-4 max-w-3xl text-slate-400">Wer hat wann welche sicherheitsrelevante Änderung durchgeführt? Zugangsdaten und Nachrichteninhalte werden nicht protokolliert.</p></div><a href={`/api/admin/audit-log?${exportParams}`} className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 font-black text-slate-200 hover:bg-white/10">CSV exportieren</a></div>
    <form className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.045] p-5 md:grid-cols-2 xl:grid-cols-6"><input name="q" defaultValue={params.q} placeholder="Aktion oder Objekt-ID" className={`${inputClass} xl:col-span-2`}/><select name="action" defaultValue={params.action??""} className={inputClass}><option value="">Alle Bereiche</option><option value="admin.organization.">Unternehmen</option><option value="admin.customer.">Kunden</option><option value="admin.marketing.">Marketing</option><option value="admin.billing.">Abrechnung</option><option value="admin.payment.">Zahlungen</option><option value="admin.support.">Support</option><option value="admin.privacy_request.">Datenschutz</option><option value="admin.team.">Team</option><option value="admin.system.">System</option></select><select name="entity" defaultValue={params.entity??""} className={inputClass}><option value="">Alle Objekte</option><option value="organization">Unternehmen</option><option value="customer">Kunde</option><option value="platform_admin">Admin</option><option value="subscription_product">Tarif</option><option value="contact_message">Nachricht</option><option value="privacy_request">DSGVO-Anfrage</option></select><input type="date" name="from" defaultValue={params.from} aria-label="Von" className={inputClass}/><input type="date" name="to" defaultValue={params.to} aria-label="Bis" className={inputClass}/><div className="flex gap-2 xl:col-span-6"><button className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950">Filtern</button><Link href="/admin/audit-log" className="rounded-xl bg-white/[0.06] px-5 py-3 font-black text-slate-300">Zurücksetzen</Link></div></form>
    <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"><div className="hidden grid-cols-[180px_1.1fr_1fr_1fr] gap-4 border-b border-white/10 px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-500 lg:grid"><span>Zeitpunkt</span><span>Admin</span><span>Aktion</span><span>Objekt</span></div>{(logs??[]).length?(logs??[]).map(log=>{const actor=log.actor_user_id?actors.get(log.actor_user_id):null;return <article key={log.id} className="grid gap-3 border-b border-white/10 px-5 py-5 last:border-0 lg:grid-cols-[180px_1.1fr_1fr_1fr] lg:gap-4"><div><p className="text-sm font-bold">{new Date(log.created_at).toLocaleDateString("de-AT")}</p><p className="text-xs text-slate-500">{new Date(log.created_at).toLocaleTimeString("de-AT")}</p></div><div><p className="break-all text-sm font-bold">{actor?.full_name||actor?.email||"System"}</p><p className="break-all text-xs text-slate-500">{actor?.email??log.actor_user_id??"Automatischer Prozess"}</p></div><div><p className="break-all font-black text-purple-100">{actionLabel(log.action)}</p><p className="mt-1 break-all text-xs text-slate-500">{log.action}</p></div><div><p className="break-all text-sm font-bold">{log.entity_type}{log.entity_id?` · ${log.entity_id}`:""}</p>{log.organization_id?<p className="mt-1 text-xs text-slate-400">{organizationNames.get(log.organization_id)??log.organization_id}</p>:null}{hasMetadata(log.metadata)?<details className="mt-2"><summary className="cursor-pointer text-xs font-bold text-cyan-200">Details anzeigen</summary><pre className="mt-2 max-h-56 overflow-auto whitespace-pre-wrap break-all rounded-xl bg-slate-950 p-3 text-xs text-slate-300">{JSON.stringify(log.metadata,null,2)}</pre></details>:null}</div></article>}):<p className="p-8 text-center text-slate-400">Keine passenden Ereignisse gefunden.</p>}</div>
    <div className="mt-6 flex items-center justify-between gap-4 text-sm"><p className="text-slate-500">{count??0} Ereignisse · Seite {page} von {totalPages}</p><div className="flex gap-2">{page>1?<Link href={pageHref(params,page-1)} className="rounded-xl bg-white/[0.06] px-4 py-2 font-bold">← Zurück</Link>:null}{page<totalPages?<Link href={pageHref(params,page+1)} className="rounded-xl bg-white/[0.06] px-4 py-2 font-bold">Weiter →</Link>:null}</div></div>
  </section></main>;
}

const inputClass="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white";
function cleanSearch(value?:string){return (value??"").replace(/[(),.%]/g," ").trim().slice(0,100)}
function cleanFilter(value?:string){return (value??"").replace(/[^a-z0-9_.-]/gi,"").slice(0,80)}
function validDate(value?:string){return Boolean(value&&/^\d{4}-\d{2}-\d{2}$/.test(value))}
function hasMetadata(value:unknown){return Boolean(value&&typeof value==="object"&&Object.keys(value as object).length)}
function pageHref(params:Awaited<SearchParams>,page:number){const next=new URLSearchParams(Object.entries(params).filter(([,value])=>Boolean(value)) as [string,string][]);next.set("page",String(page));return `/admin/audit-log?${next}`}
function actionLabel(action:string){const labels:Record<string,string>={approve:"Freigegeben",reject:"Abgelehnt",suspend:"Gesperrt",restore:"Wiederhergestellt",updated:"Aktualisiert",created:"Erstellt",revoked:"Widerrufen",deleted:"Gelöscht",replied:"Beantwortet",retry:"Erneut gestartet",assigned:"Zugewiesen",resolved:"Gelöst"};const suffix=action.split(".").at(-1)??action;return labels[suffix]??suffix.replaceAll("_"," ")}
