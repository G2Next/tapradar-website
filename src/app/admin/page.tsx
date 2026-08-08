import Link from "next/link";
import { requireGlobalAdmin } from "@/lib/admin";

export default async function AdminPage() {
  const { supabase, user } = await requireGlobalAdmin();

  const [profilesResult, businessesResult, membershipsResult, profilesList, businessesList] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("businesses").select("id", { count: "exact", head: true }),
    supabase.from("business_members").select("id", { count: "exact", head: true }).eq("is_active", true),
    supabase.from("profiles").select("id,email,full_name,created_at").order("created_at", { ascending: false }).limit(12),
    supabase.from("businesses").select("id,name,city,plan,is_active,created_at").order("created_at", { ascending: false }).limit(12),
  ]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#164e63_0%,#061827_35%,#020617_100%)] px-5 py-16 text-white sm:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <span className="inline-flex rounded-full border border-amber-300/35 bg-amber-300/10 px-4 py-2 text-sm font-black text-amber-200">Global Administration</span>
            <h1 className="mt-6 text-4xl font-black sm:text-5xl">TapRadar Admin</h1>
            <p className="mt-3 text-slate-300">Angemeldet als {user.email}</p>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="rounded-2xl border border-white/15 px-5 py-3 font-black text-slate-200">Website</Link>
            <Link href="/logout" className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950">Abmelden</Link>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <Metric label="Benutzer" value={profilesResult.count ?? 0} />
          <Metric label="Geschäfte" value={businessesResult.count ?? 0} />
          <Metric label="Aktive Mitgliedschaften" value={membershipsResult.count ?? 0} />
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-2">
          <AdminTable title="Neueste Benutzer" empty="Noch keine Benutzer vorhanden.">
            {profilesList.data?.map((profile) => (
              <div key={profile.id} className="grid gap-1 border-b border-white/10 py-4 last:border-0">
                <p className="font-black">{profile.full_name || "Ohne Namen"}</p>
                <p className="text-sm text-cyan-200">{profile.email || "Keine E-Mail"}</p>
                <p className="text-xs text-slate-500">{formatDate(profile.created_at)}</p>
              </div>
            ))}
          </AdminTable>

          <AdminTable title="Neueste Geschäfte" empty="Noch keine Geschäfte vorhanden.">
            {businessesList.data?.map((business) => (
              <div key={business.id} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/10 py-4 last:border-0">
                <div>
                  <p className="font-black">{business.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{business.city || "Kein Ort"} · {business.plan}</p>
                </div>
                <span className={`self-center rounded-full px-3 py-1 text-xs font-black ${business.is_active ? "bg-emerald-300/15 text-emerald-200" : "bg-red-300/15 text-red-200"}`}>
                  {business.is_active ? "Aktiv" : "Inaktiv"}
                </span>
              </div>
            ))}
          </AdminTable>
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
      <p className="text-4xl font-black">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

function AdminTable({ title, empty, children }: { title: string; empty: string; children: React.ReactNode }) {
  const hasChildren = Array.isArray(children) ? children.length > 0 : Boolean(children);

  return (
    <section className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
      <h2 className="text-2xl font-black">{title}</h2>
      <div className="mt-4">{hasChildren ? children : <p className="py-6 text-slate-400">{empty}</p>}</div>
    </section>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("de-AT", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}
