import Link from "next/link";
import { AdminDecisionButton } from "@/components/AdminDecisionButton";
import { FormSubmitButton } from "@/components/FormSubmitButton";
import { requirePlatformAdmin } from "@/lib/admin";
import { setCustomerApproval } from "./actions";

type SearchParams = Promise<{ q?: string; status?: string; saved?: string; error?: string }>;
type Customer = { user_id: string; customer_number: string; display_name: string | null; approval_status: string; is_active: boolean; marketing_consent: boolean; approved_at: string | null; rejection_reason: string | null; created_at: string };

export default async function CustomersPage({ searchParams }: { searchParams: SearchParams }) {
  const [params, { supabase }] = await Promise.all([searchParams, requirePlatformAdmin("customers.view")]);
  let query = supabase.from("customer_profiles").select("user_id,customer_number,display_name,approval_status,is_active,marketing_consent,approved_at,rejection_reason,created_at").order("created_at", { ascending: false }).limit(500);
  if (["pending", "approved", "rejected", "suspended"].includes(params.status ?? "")) query = query.eq("approval_status", params.status);
  const { data } = await query;
  const rawCustomers = (data ?? []) as Customer[];
  const ids = rawCustomers.map(customer => customer.user_id);
  const { data: profiles } = ids.length ? await supabase.from("profiles").select("id,email,full_name,account_type").in("id", ids) : { data: [] };
  const profileMap = new Map((profiles ?? []).map(profile => [profile.id, profile]));
  const search = (params.q ?? "").trim().toLocaleLowerCase("de").slice(0, 100);
  const customers = rawCustomers.filter(customer => {
    const profile = profileMap.get(customer.user_id);
    if (profile?.account_type === "business") return false;
    return !search || [customer.customer_number, customer.display_name, profile?.full_name, profile?.email].some(value => value?.toLocaleLowerCase("de").includes(search));
  });
  const metrics = rawCustomers.filter(customer => profileMap.get(customer.user_id)?.account_type !== "business");

  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white sm:px-8"><section className="mx-auto max-w-7xl">
    <p className="text-sm font-black uppercase tracking-[.2em] text-purple-200">Kontoverwaltung</p><h1 className="mt-3 text-5xl font-black">Kunden</h1><p className="mt-4 max-w-3xl text-slate-300">Registrierungen prüfen, Kundendaten einsehen und Konten freigeben oder sperren.</p>
    {params.saved ? <Notice tone="success">Kundenstatus wurde gespeichert.</Notice> : null}{params.error ? <Notice tone="error">Aktion fehlgeschlagen ({params.error}).</Notice> : null}
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Metric label="Gesamt" value={metrics.length}/><Metric label="Warten auf Freigabe" value={metrics.filter(c=>c.approval_status==="pending").length}/><Metric label="Freigegeben" value={metrics.filter(c=>c.approval_status==="approved").length}/><Metric label="Gesperrt / abgelehnt" value={metrics.filter(c=>["suspended","rejected"].includes(c.approval_status)).length}/></div>
    <form className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.05] p-5 md:grid-cols-[1fr_220px_auto]"><label className="grid gap-2 text-xs font-black uppercase text-slate-400">Kunden suchen<input name="q" defaultValue={params.q ?? ""} placeholder="Nummer, Name oder E-Mail" className={inputClass}/></label><label className="grid gap-2 text-xs font-black uppercase text-slate-400">Status<select name="status" defaultValue={params.status ?? ""} className={inputClass}><option value="">Alle Status</option><option value="pending">In Prüfung</option><option value="approved">Freigegeben</option><option value="rejected">Abgelehnt</option><option value="suspended">Gesperrt</option></select></label><div className="flex items-end gap-2"><FormSubmitButton label="Filtern" pendingLabel="…" className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950"/><Link href="/admin/customers" className="rounded-xl bg-white/10 px-5 py-3 font-black">Zurücksetzen</Link></div></form>
    <div className="mt-8 overflow-x-auto rounded-3xl border border-white/10"><table className="w-full min-w-[1000px] text-left text-sm"><thead className="bg-white/[0.06] text-slate-400"><tr><th className="p-4">Kundennummer</th><th>Name / E-Mail</th><th>Registriert</th><th>Marketing</th><th>Status</th><th className="pr-4 text-right">Aktionen</th></tr></thead><tbody className="divide-y divide-white/10">{customers.map(customer=>{const profile=profileMap.get(customer.user_id);return <tr key={customer.user_id} className="hover:bg-white/[0.03]"><td className="p-4 font-mono font-bold text-cyan-200"><Link href={`/admin/customers/${customer.user_id}`}>{customer.customer_number}</Link></td><td><Link href={`/admin/customers/${customer.user_id}`} className="font-bold hover:text-purple-200">{customer.display_name || profile?.full_name || "Ohne Namen"}</Link><p className="mt-1 text-slate-400">{profile?.email ?? "Keine E-Mail"}</p></td><td>{new Date(customer.created_at).toLocaleDateString("de-AT")}</td><td>{customer.marketing_consent ? "Ja" : "Nein"}</td><td><Status value={customer.approval_status}/></td><td className="pr-4"><div className="flex justify-end gap-2">{customer.approval_status!=="approved"?<Decision customerId={customer.user_id} decision="approve" label="Freigeben"/>:<Decision customerId={customer.user_id} decision="suspend" label="Sperren" tone="danger"/>}<Link href={`/admin/customers/${customer.user_id}`} className="rounded-xl bg-white/10 px-3 py-2 font-black">Details</Link></div></td></tr>})}</tbody></table>{!customers.length?<p className="p-8 text-center text-slate-400">Keine Kunden gefunden.</p>:null}</div>
  </section></main>;
}

const inputClass="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-base font-normal normal-case text-white";
function Metric({label,value}:{label:string;value:number}){return <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5"><p className="text-sm text-slate-400">{label}</p><p className="mt-2 text-4xl font-black">{value}</p></div>}
function Status({value}:{value:string}){const style=value==="approved"?"bg-emerald-300/15 text-emerald-100":value==="pending"?"bg-amber-300/15 text-amber-100":"bg-red-300/15 text-red-100";const label=value==="approved"?"Freigegeben":value==="pending"?"In Prüfung":value==="rejected"?"Abgelehnt":"Gesperrt";return <span className={`rounded-full px-3 py-1 text-xs font-black ${style}`}>{label}</span>}
function Decision({customerId,decision,label,tone="default"}:{customerId:string;decision:string;label:string;tone?:"default"|"danger"|"warning"}){return <form action={setCustomerApproval}><input type="hidden" name="customer_id" value={customerId}/><input type="hidden" name="decision" value={decision}/><input type="hidden" name="return_to" value="/admin/customers"/><AdminDecisionButton label={label} tone={tone} confirmation={decision==="suspend"?"Dieses Kundenkonto wirklich sperren? Wallet und Stempelfunktion werden deaktiviert.":undefined}/></form>}
function Notice({tone,children}:{tone:"success"|"error";children:React.ReactNode}){return <p className={`mt-6 rounded-2xl p-4 ${tone==="success"?"bg-emerald-300/10 text-emerald-100":"bg-red-300/10 text-red-100"}`}>{children}</p>}
