import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { INVITATION_TOKEN_COOKIE } from "@/lib/flash-secrets";
import { createInvitation, setMemberStatus, updateMemberLocations } from "./actions";

type SearchParams = Promise<{ created?: string; error?: string; saved?: string }>;

export default async function TeamPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const context = await getDashboardContext();
  if (!context.user) redirect("/login?next=/dashboard/team");
  if (!context.organizationId) redirect("/dashboard/onboarding");
  const [{ data: members }, { data: invites }, { data: locations }, { data: assignments }] = await Promise.all([
    context.supabase.from("organization_members").select("user_id, role, is_active, profiles(email, full_name)").eq("organization_id", context.organizationId).order("created_at"),
    context.supabase.from("organization_invitations").select("id, email, role, status, expires_at, location_ids").eq("organization_id", context.organizationId).eq("status", "pending"),
    context.supabase.from("locations").select("id, name").eq("organization_id", context.organizationId).eq("is_active", true),
    context.supabase.from("location_members").select("user_id, location_id, locations(name)").eq("organization_id", context.organizationId).eq("is_active", true),
  ]);
  const invitationToken = params.created ? (await cookies()).get(INVITATION_TOKEN_COOKIE)?.value : null;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const canManage = ["owner", "manager"].includes(context.role ?? "");

  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white"><section className="mx-auto max-w-6xl">
    <Link href="/dashboard" className="font-black text-cyan-300">Zurück</Link><h1 className="mt-6 text-5xl font-black">Team und Filialrechte</h1><p className="mt-3 text-slate-300">Owner und Manager verwalten zentral; Mitarbeiter erhalten nur ausgewählte Filialen.</p>
    {invitationToken ? <div className="mt-6 rounded-2xl bg-amber-300/10 p-5 text-amber-100"><strong>Einladungslink – jetzt kopieren:</strong><p className="mt-2 break-all">{`${siteUrl}/invite/${invitationToken}`}</p></div> : null}
    {params.saved ? <p className="mt-6 rounded-2xl bg-emerald-300/10 p-4 text-emerald-100">Teamrechte wurden gespeichert.</p> : null}
    {params.error ? <p className="mt-6 rounded-2xl bg-red-300/10 p-4 text-red-100">Aktion nicht möglich: {params.error}</p> : null}
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_.8fr]"><div className="grid gap-4">
      {(members ?? []).map((member) => {
        const profile = first(member.profiles);
        const assignedIds = (assignments ?? []).filter((item) => item.user_id === member.user_id).map((item) => item.location_id);
        const assignedNames = (assignments ?? []).filter((item) => item.user_id === member.user_id).map((item) => first(item.locations)?.name).filter(Boolean);
        return <article key={member.user_id} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"><div className="flex items-start justify-between gap-4"><div><p className="font-black">{profile?.full_name || profile?.email || "Teammitglied"}</p><p className="mt-1 text-sm capitalize text-slate-400">{member.role} · {member.is_active ? "aktiv" : "inaktiv"}</p><p className="mt-2 text-xs text-cyan-200">{member.role === "staff" ? assignedNames.join(", ") || "keine Filiale" : "alle Filialen"}</p></div>{canManage && member.role !== "owner" ? <form action={setMemberStatus}><input type="hidden" name="member_id" value={member.user_id}/><input type="hidden" name="is_active" value={member.is_active ? "false" : "true"}/><button className="rounded-xl bg-white/10 px-3 py-2 text-sm font-black">{member.is_active ? "Deaktivieren" : "Aktivieren"}</button></form> : null}</div>
          {canManage && member.role === "staff" && member.is_active ? <form action={updateMemberLocations} className="mt-4 border-t border-white/10 pt-4"><input type="hidden" name="member_id" value={member.user_id}/><p className="text-xs font-black uppercase text-slate-400">Filialzugriff ändern</p><div className="mt-2 flex flex-wrap gap-2">{(locations ?? []).map((location) => <label key={location.id} className="flex gap-2 rounded-xl bg-white/[0.05] px-3 py-2 text-sm"><input name="location_ids" value={location.id} type="checkbox" defaultChecked={assignedIds.includes(location.id)} className="accent-cyan-300"/>{location.name}</label>)}</div><button className="mt-3 rounded-xl bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950">Filialrechte speichern</button></form> : null}
        </article>;
      })}
      {(invites ?? []).map((invite) => <article key={invite.id} className="rounded-3xl border border-dashed border-white/15 p-5"><p className="font-black">{invite.email}</p><p className="mt-1 text-sm text-slate-400">{invite.role} · {(invite.location_ids ?? []).length} Filiale(n) · bis {new Date(invite.expires_at).toLocaleDateString("de-AT")}</p></article>)}
    </div>{canManage ? <form action={createInvitation} className="h-fit rounded-3xl border border-white/10 bg-white/[0.06] p-6"><h2 className="text-2xl font-black">Einladen</h2><Field label="E-Mail"><input name="email" type="email" required className="rounded-xl bg-white/10 px-4 py-3"/></Field><Field label="Rolle"><select name="role" className="rounded-xl bg-[#102235] px-4 py-3"><option value="staff">Mitarbeiter</option><option value="manager">Manager</option></select></Field><fieldset className="mt-4 grid gap-2"><legend className="mb-2 text-xs font-black uppercase text-slate-300">Erlaubte Filialen (für Mitarbeiter erforderlich)</legend>{(locations ?? []).map((location) => <label key={location.id} className="flex gap-3 rounded-xl bg-white/[0.04] p-3"><input name="location_ids" value={location.id} type="checkbox" className="accent-cyan-300"/>{location.name}</label>)}</fieldset><button className="mt-5 w-full rounded-xl bg-cyan-300 px-4 py-3 font-black text-slate-950">Einladungslink erstellen</button></form> : null}</div>
  </section></main>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="mt-4 grid gap-2 text-xs font-black uppercase text-slate-300">{label}{children}</label>; }
function first<T>(value: T | T[] | null | undefined): T | undefined { return Array.isArray(value) ? value[0] : value ?? undefined; }
