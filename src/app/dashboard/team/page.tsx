import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { INVITATION_TOKEN_COOKIE, STAFF_PIN_COOKIE } from "@/lib/flash-secrets";
import {
  createInvitation,
  createStaffMember,
  deleteStaffMember,
  resetStaffMemberPin,
  setMemberStatus,
  setStaffMemberStatus,
  updateStaffMemberLocations,
} from "./actions";

type SearchParams = Promise<{ created?: string; error?: string; saved?: string; pin?: string }>;
type Location = { id: string; name: string };
type StaffMember = { id: string; display_name: string; is_active: boolean; last_login_at: string | null; created_at: string };

export default async function TeamPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const context = await getDashboardContext();
  if (!context.user) redirect("/login?next=/dashboard/team");
  if (!context.organizationId) redirect("/dashboard/onboarding");

  const [memberResult, inviteResult, locationResult, organizationResult, staffResult, staffLocationResult] = await Promise.all([
    context.supabase.from("organization_members").select("user_id, role, is_active, profiles(email, full_name)").eq("organization_id", context.organizationId).order("created_at"),
    context.supabase.from("organization_invitations").select("id, email, role, status, expires_at").eq("organization_id", context.organizationId).eq("status", "pending"),
    context.supabase.from("locations").select("id, name").eq("organization_id", context.organizationId).eq("is_active", true).order("name"),
    context.supabase.from("organizations").select("name, business_code, plan, subscription_product_id").eq("id", context.organizationId).single(),
    context.supabase.from("staff_members").select("id, display_name, is_active, last_login_at, created_at").eq("organization_id", context.organizationId).order("created_at"),
    context.supabase.from("staff_member_locations").select("staff_member_id, location_id").eq("organization_id", context.organizationId),
  ]);

  const organization = organizationResult.data;
  const productResult = organization?.subscription_product_id
    ? await context.supabase.from("subscription_products").select("code, name, staff_limit").eq("id", organization.subscription_product_id).maybeSingle()
    : await context.supabase.from("subscription_products").select("code, name, staff_limit").eq("code", organization?.plan ?? "bronze").maybeSingle();
  const locations = (locationResult.data ?? []) as Location[];
  const staff = (staffResult.data ?? []) as StaffMember[];
  const staffAssignments = staffLocationResult.data ?? [];
  const staffLimit = productResult.data?.staff_limit ?? planLimit(organization?.plan);
  const activeCount = staff.filter((member) => member.is_active).length;
  const inactiveCount = staff.length - activeCount;
  const canManage = ["owner", "manager"].includes(context.role ?? "");
  const cookieStore = await cookies();
  const invitationToken = params.created === "manager" ? cookieStore.get(INVITATION_TOKEN_COOKIE)?.value : null;
  const pinSecret = params.pin ? parsePinCookie(cookieStore.get(STAFF_PIN_COOKIE)?.value, params.pin) : null;
  const pinMember = pinSecret ? staff.find((member) => member.id === params.pin) : null;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white"><section className="mx-auto max-w-6xl">
    <Link href="/dashboard" className="font-black text-cyan-300">Zurück</Link>
    <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
      <div><h1 className="text-5xl font-black">Team und Filialrechte</h1><p className="mt-3 text-slate-300">Terminal-Mitarbeiter per Business-Code und PIN verwalten.</p></div>
      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] px-5 py-4 text-right"><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Business-Code</p><p className="mt-1 font-mono text-3xl font-black tracking-[0.18em]">{organization?.business_code ?? "—"}</p></div>
    </div>

    {pinSecret ? <div className="mt-6 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-5 text-emerald-50"><strong>Neue Mitarbeiter-PIN für {pinMember?.display_name ?? "Mitarbeiter"}</strong><p className="mt-2 font-mono text-3xl font-black tracking-[0.25em]">{pinSecret}</p><p className="mt-2 text-sm text-emerald-100/80">Jetzt sicher kopieren. Die PIN wird danach nicht mehr angezeigt.</p></div> : null}
    {invitationToken ? <div className="mt-6 rounded-2xl bg-amber-300/10 p-5 text-amber-100"><strong>Manager-Einladungslink – jetzt kopieren:</strong><p className="mt-2 break-all">{`${siteUrl}/invite/${invitationToken}`}</p></div> : null}
    {params.saved && !pinSecret ? <p className="mt-6 rounded-2xl bg-emerald-300/10 p-4 text-emerald-100">Änderung wurde gespeichert.</p> : null}
    {params.error ? <p className="mt-6 rounded-2xl bg-red-300/10 p-4 text-red-100">{errorMessage(params.error)}</p> : null}

    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      <Metric label="Mitarbeiterplätze" value={`${staff.length} / ${staffLimit}`} detail={productResult.data?.name ?? organization?.plan ?? "Bronze"} />
      <Metric label="Aktiv" value={String(activeCount)} detail="Anmeldung erlaubt" />
      <Metric label="Inaktiv" value={String(inactiveCount)} detail="Anmeldung gesperrt" />
    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_.8fr]">
      <div className="grid content-start gap-4">
        <h2 className="text-2xl font-black">Terminal-Mitarbeiter</h2>
        {staff.length === 0 ? <p className="rounded-3xl border border-dashed border-white/15 p-6 text-slate-400">Noch keine Mitarbeiter angelegt.</p> : null}
        {staff.map((member) => {
          const assignedIds = staffAssignments.filter((item) => item.staff_member_id === member.id).map((item) => item.location_id);
          const assignedNames = locations.filter((location) => assignedIds.includes(location.id)).map((location) => location.name);
          return <article key={member.id} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
            <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-lg font-black">{member.display_name}</p><p className={`mt-1 text-sm font-bold ${member.is_active ? "text-emerald-200" : "text-slate-400"}`}>{member.is_active ? "Aktiv" : "Inaktiv"}</p><p className="mt-2 text-xs text-cyan-200">{assignedNames.join(", ") || "Keine Filiale"}</p><p className="mt-1 text-xs text-slate-500">Letzte Anmeldung: {member.last_login_at ? formatDate(member.last_login_at) : "noch nie"}</p></div>
              {canManage ? <div className="flex flex-wrap gap-2"><form action={setStaffMemberStatus}><input type="hidden" name="member_id" value={member.id}/><input type="hidden" name="is_active" value={member.is_active ? "false" : "true"}/><button className="rounded-xl bg-white/10 px-3 py-2 text-sm font-black">{member.is_active ? "Deaktivieren" : "Aktivieren"}</button></form><form action={resetStaffMemberPin}><input type="hidden" name="member_id" value={member.id}/><button className="rounded-xl bg-blue-400/15 px-3 py-2 text-sm font-black text-blue-100">Neue PIN</button></form><form action={deleteStaffMember}><input type="hidden" name="member_id" value={member.id}/><button className="rounded-xl bg-red-400/15 px-3 py-2 text-sm font-black text-red-100">Löschen</button></form></div> : null}
            </div>
            {canManage ? <form action={updateStaffMemberLocations} className="mt-4 border-t border-white/10 pt-4"><input type="hidden" name="member_id" value={member.id}/><p className="text-xs font-black uppercase text-slate-400">Filialzugriff</p><div className="mt-2 flex flex-wrap gap-2">{locations.map((location) => <label key={location.id} className="flex gap-2 rounded-xl bg-white/[0.05] px-3 py-2 text-sm"><input name="location_ids" value={location.id} type="checkbox" defaultChecked={assignedIds.includes(location.id)} className="accent-cyan-300"/>{location.name}</label>)}</div><button className="mt-3 rounded-xl bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950">Filialrechte speichern</button></form> : null}
          </article>;
        })}
      </div>

      {canManage ? <div className="grid content-start gap-5">
        <form action={createStaffMember} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"><h2 className="text-2xl font-black">Mitarbeiter anlegen</h2><p className="mt-2 text-sm text-slate-400">Die sechsstellige PIN wird automatisch erzeugt.</p><Field label="Name"><input name="display_name" minLength={2} maxLength={100} required className="rounded-xl bg-white/10 px-4 py-3"/></Field><fieldset className="mt-4 grid gap-2"><legend className="mb-2 text-xs font-black uppercase text-slate-300">Erlaubte Filialen</legend>{locations.map((location) => <label key={location.id} className="flex gap-3 rounded-xl bg-white/[0.04] p-3"><input name="location_ids" value={location.id} type="checkbox" className="accent-cyan-300"/>{location.name}</label>)}</fieldset><button disabled={staff.length >= staffLimit || locations.length === 0} className="mt-5 w-full rounded-xl bg-cyan-300 px-4 py-3 font-black text-slate-950 disabled:cursor-not-allowed disabled:opacity-40">{staff.length >= staffLimit ? "Tariflimit erreicht" : "Mitarbeiter & PIN erstellen"}</button><p className="mt-3 text-xs text-slate-400">Inaktive Mitarbeiter zählen ebenfalls zum Limit. Löschen gibt einen Platz frei.</p></form>
        <form action={createInvitation} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-xl font-black">Manager einladen</h2><p className="mt-2 text-sm text-slate-400">Manager melden sich mit einem eigenen Konto im Webportal an.</p><Field label="E-Mail"><input name="email" type="email" required className="rounded-xl bg-white/10 px-4 py-3"/></Field><button className="mt-5 w-full rounded-xl bg-white/10 px-4 py-3 font-black">Einladungslink erstellen</button></form>
      </div> : null}
    </div>

    <details className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6"><summary className="cursor-pointer text-xl font-black">Webportal-Konten</summary><div className="mt-5 grid gap-3">{(memberResult.data ?? []).map((member) => { const profile = first(member.profiles); return <article key={member.user_id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/[0.04] p-4"><div><p className="font-black">{profile?.full_name || profile?.email || "Teammitglied"}</p><p className="text-sm capitalize text-slate-400">{member.role} · {member.is_active ? "aktiv" : "inaktiv"}</p></div>{canManage && member.role !== "owner" ? <form action={setMemberStatus}><input type="hidden" name="member_id" value={member.user_id}/><input type="hidden" name="is_active" value={member.is_active ? "false" : "true"}/><button className="rounded-xl bg-white/10 px-3 py-2 text-sm font-black">{member.is_active ? "Deaktivieren" : "Aktivieren"}</button></form> : null}</article>; })}{(inviteResult.data ?? []).map((invite) => <p key={invite.id} className="rounded-2xl border border-dashed border-white/15 p-4 text-sm text-slate-400">{invite.email} · {invite.role} · Einladung bis {new Date(invite.expires_at).toLocaleDateString("de-AT")}</p>)}</div></details>
  </section></main>;
}

function Metric({ label, value, detail }: { label: string; value: string; detail: string }) { return <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">{label}</p><p className="mt-2 text-3xl font-black">{value}</p><p className="mt-1 text-sm text-slate-400">{detail}</p></div>; }
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="mt-4 grid gap-2 text-xs font-black uppercase text-slate-300">{label}{children}</label>; }
function first<T>(value: T | T[] | null | undefined): T | undefined { return Array.isArray(value) ? value[0] : value ?? undefined; }
function planLimit(plan?: string | null) { return plan === "gold" ? 5 : plan === "platinum" ? 15 : 1; }
function formatDate(value: string) { return new Intl.DateTimeFormat("de-AT", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)); }
function parsePinCookie(value: string | undefined, memberId: string) { const [storedId, pin] = value?.split(".") ?? []; return storedId === memberId && /^[0-9]{6}$/.test(pin ?? "") ? pin : null; }
function errorMessage(error: string) {
  if (error === "plan-limit") return "Das Mitarbeiterlimit deines Tarifs ist erreicht. Lösche einen Mitarbeiter oder wechsle den Tarif.";
  if (error === "location") return "Bitte wähle mindestens eine gültige Filiale aus.";
  if (error === "staff-fields") return "Bitte gib einen Mitarbeiternamen ein und wähle mindestens eine Filiale.";
  if (error === "permission") return "Du hast keine Berechtigung für diese Aktion.";
  return "Die Aktion konnte nicht gespeichert werden.";
}
