import { requirePlatformAdmin } from "@/lib/admin";
import { reviewMarketingSubmission } from "./actions";

type Params = Promise<{ saved?: string; error?: string }>;

export default async function MarketingReviewPage({ searchParams }: { searchParams: Params }) {
  const params = await searchParams;
  const { supabase, admin } = await requirePlatformAdmin();
  const [offers, pushes, unread] = await Promise.all([
    supabase.from("offers").select("id,organization_id,title,description,offer_type,starts_at,ends_at,submitted_at,review_version,organizations(name)").eq("moderation_status", "pending_review").order("submitted_at", { ascending: true }).limit(200),
    supabase.from("push_messages").select("id,business_id,title,body,target_type,segment_name,submitted_at,review_version,organizations!push_messages_business_id_fkey(name)").eq("moderation_status", "pending_review").order("submitted_at", { ascending: true }).limit(200),
    supabase.from("admin_notifications").select("id", { count: "exact", head: true }).is("read_at", null),
  ]);
  const canReview = ["super_admin", "operations"].includes(admin.role);
  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white sm:px-8"><section className="mx-auto max-w-6xl">
    <span className="rounded-full bg-amber-300/15 px-4 py-2 text-sm font-black text-amber-100">{unread.count ?? 0} ungelesene Benachrichtigungen</span>
    <h1 className="mt-5 text-5xl font-black">Marketing-Freigaben</h1><p className="mt-3 max-w-3xl text-slate-300">Aktionen, Gutscheine und Push-Nachrichten bleiben unsichtbar beziehungsweise ungesendet, bis ein Admin oder Global Admin zustimmt.</p>
    {params.saved?<p className="mt-6 rounded-2xl bg-emerald-300/10 p-4 text-emerald-100">Entscheidung wurde gespeichert.</p>:null}{params.error?<p className="mt-6 rounded-2xl bg-red-300/10 p-4 text-red-100">Aktion nicht möglich: {params.error}</p>:null}
    <Queue title="Aktionen und Gutscheine" empty="Keine offenen Aktionen oder Gutscheine.">{(offers.data??[]).map((item)=><ReviewCard key={item.id} id={item.id} type="offer" kind={item.offer_type==="gutschein"?"Gutschein":"Aktion"} business={first(item.organizations)?.name??"Geschäft"} title={item.title} body={item.description??"Keine Beschreibung"} meta={`${item.starts_at??"sofort"} – ${item.ends_at??"offen"}`} canReview={canReview}/>)}</Queue>
    <Queue title="Push-Nachrichten" empty="Keine offenen Push-Nachrichten.">{(pushes.data??[]).map((item)=><ReviewCard key={item.id} id={item.id} type="push_message" kind="Push-Nachricht" business={first(item.organizations)?.name??"Geschäft"} title={item.title} body={item.body} meta={`${item.target_type}${item.segment_name?` · ${item.segment_name}`:""}`} canReview={canReview}/>)}</Queue>
  </section></main>;
}

function Queue({title,empty,children}:{title:string;empty:string;children:React.ReactNode}){return <section className="mt-10"><h2 className="text-3xl font-black">{title}</h2><div className="mt-5 grid gap-4">{children}{Array.isArray(children)&&children.length===0?<p className="rounded-3xl border border-white/10 p-7 text-slate-400">{empty}</p>:null}</div></section>}
function ReviewCard({id,type,kind,business,title,body,meta,canReview}:{id:string;type:"offer"|"push_message";kind:string;business:string;title:string;body:string;meta:string;canReview:boolean}){return <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div className="max-w-3xl"><span className="text-xs font-black uppercase tracking-widest text-amber-200">{kind} · {business}</span><h3 className="mt-2 text-2xl font-black">{title}</h3><p className="mt-3 whitespace-pre-wrap text-slate-300">{body}</p><p className="mt-3 text-sm text-slate-500">{meta}</p></div>{canReview?<div className="grid min-w-64 gap-2"><form action={reviewMarketingSubmission}><input type="hidden" name="resource_type" value={type}/><input type="hidden" name="resource_id" value={id}/><input type="hidden" name="decision" value="approve"/><button className="w-full rounded-xl bg-emerald-300 px-4 py-3 font-black text-slate-950">Freigeben</button></form><form action={reviewMarketingSubmission} className="grid gap-2"><input type="hidden" name="resource_type" value={type}/><input type="hidden" name="resource_id" value={id}/><input type="hidden" name="decision" value="reject"/><textarea name="reason" required minLength={3} maxLength={500} placeholder="Ablehnungsgrund" className="rounded-xl border border-white/10 bg-slate-900 p-3 text-sm"/><button className="rounded-xl bg-red-300/15 px-4 py-3 font-black text-red-100">Ablehnen</button></form></div>:<span className="rounded-full bg-white/10 px-3 py-2 text-sm">Nur Lesen</span>}</div></article>}
function first<T>(value:T|T[]|null|undefined):T|undefined{return Array.isArray(value)?value[0]:value??undefined}
