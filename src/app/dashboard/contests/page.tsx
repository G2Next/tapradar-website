import Link from "next/link";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { ContestForm } from "./ContestForm";
import { setContestActive } from "./actions";

type SearchParams = Promise<{ saved?: string }>;

export default async function ContestsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { supabase, user, organizationId, role, locations } = await getDashboardContext();
  if (!user) redirect("/login?next=/dashboard/contests");
  if (!organizationId) redirect("/dashboard/onboarding");
  const canManage = ["owner", "manager"].includes(role ?? "");
  const { data } = await supabase.from("contests").select("id,title,contest_type,start_at,end_at,is_active,max_plays,play_count,contest_participations(count),contest_prizes(title,quantity_initial,quantity_remaining,units_per_win)").eq("organization_id", organizationId).order("created_at", { ascending: false });
  const contests = data ?? [];
  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#4c1d95_0%,#10203b_38%,#020617_100%)] px-5 py-14 text-white sm:px-8"><section className="mx-auto max-w-6xl"><Link href="/dashboard" className="font-black text-purple-200">← Zurück zum Dashboard</Link><span className="mt-6 inline-flex rounded-full border border-purple-300/35 bg-purple-300/10 px-4 py-2 text-sm font-black text-purple-100">◉ Kunden-App Gewinnspiele</span><h1 className="mt-5 text-5xl font-black">Gewinnspiele erstellen</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">Erstelle eine garantierte Aufgaben-Challenge oder ein echtes Glücksrad. Ergebnisse und Bestand werden ausschließlich auf dem Server berechnet.</p>{params.saved ? <p className="mt-7 rounded-2xl bg-emerald-300/10 p-4 text-emerald-100">Gewinnspiel wurde gespeichert und ist – falls aktiviert – in der Kunden-App verfügbar.</p> : null}
    <h2 className="mt-10 text-3xl font-black">Bestehende Gewinnspiele</h2><div className="mt-5 grid gap-4">{contests.map(contest => { const participation = Array.isArray(contest.contest_participations) ? contest.contest_participations[0] : contest.contest_participations; const prizes = Array.isArray(contest.contest_prizes) ? contest.contest_prizes : []; return <article key={contest.id} className="rounded-[24px] border border-white/10 bg-white/[0.07] p-5"><div className="flex flex-wrap items-start justify-between gap-5"><div><span className="rounded-full bg-purple-300/15 px-3 py-2 text-xs font-black text-purple-100">{contest.contest_type === "spin_wheel" ? "◉ Glücksrad" : "✓ Aufgaben-Checkliste"}</span><h3 className="mt-4 text-2xl font-black">{contest.title}</h3><p className="mt-2 text-sm text-slate-400">{new Date(contest.start_at).toLocaleDateString("de-AT")} – {new Date(contest.end_at).toLocaleDateString("de-AT")} · {participation?.count ?? 0} Teilnahmen{contest.max_plays ? ` · ${contest.play_count}/${contest.max_plays} Drehs` : ""}</p></div>{canManage ? <form action={setContestActive}><input type="hidden" name="contest_id" value={contest.id} /><input type="hidden" name="active" value={contest.is_active ? "false" : "true"} /><button className={`rounded-xl px-4 py-3 text-sm font-black ${contest.is_active ? "bg-emerald-300/15 text-emerald-100" : "bg-white/10 text-slate-300"}`}>{contest.is_active ? "Aktiv · pausieren" : "Pausiert · aktivieren"}</button></form> : null}</div><div className="mt-4 flex flex-wrap gap-2">{prizes.map(prize => <span key={prize.title} className="rounded-xl bg-white/[0.06] px-3 py-2 text-xs text-slate-300">{prize.title}: <strong>{prize.quantity_remaining}/{prize.quantity_initial}</strong> Einheiten</span>)}</div></article>; })}{contests.length === 0 ? <div className="rounded-[24px] border border-white/10 bg-white/[0.07] p-7 text-slate-300">Noch kein Gewinnspiel vorhanden.</div> : null}</div>
    {canManage ? <><h2 className="mt-12 text-3xl font-black">Neues Gewinnspiel</h2><ContestForm locations={locations} /></> : <p className="mt-10 rounded-2xl bg-amber-300/10 p-4 text-amber-100">Nur Inhaber und Manager können Gewinnspiele erstellen.</p>}
  </section></main>;
}
