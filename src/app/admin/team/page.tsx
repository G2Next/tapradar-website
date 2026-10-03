import { ConfirmSubmitButton } from "@/components/ConfirmSubmitButton";
import { requirePlatformAdmin } from "@/lib/admin";
import { ADMIN_ROLES, adminRoleLabel } from "@/lib/admin-permissions";
import { createAdminClient } from "@/lib/supabase/admin";
import { addPlatformAdmin, updatePlatformAdmin } from "./actions";

type SearchParams = Promise<{ saved?: string; error?: string }>;

export default async function AdminTeamPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  await requirePlatformAdmin("team.manage");
  const service = createAdminClient();
  const { data: admins } = await service.from("platform_admins").select("user_id,role,is_active,created_at").order("created_at");
  const ids = (admins ?? []).map(item => item.user_id);
  const { data: profiles } = ids.length ? await service.from("profiles").select("id,email,full_name").in("id", ids) : { data: [] };
  const profileMap = new Map((profiles ?? []).map(profile => [profile.id, profile]));
  return <main className="min-h-screen bg-slate-950 px-5 py-12 text-white sm:px-8"><section className="mx-auto max-w-6xl"><p className="text-sm font-black uppercase tracking-[.2em] text-purple-200">Zugriffskontrolle</p><h1 className="mt-3 text-5xl font-black">Team & Rollen</h1><p className="mt-4 max-w-3xl text-slate-400">Admin-Zugriffe nach Aufgaben trennen. Änderungen werden im Audit-Log protokolliert.</p>
    {params.saved?<Notice tone="success">Admin-Zugriff wurde gespeichert.</Notice>:null}{params.error?<Notice tone="error">{errorMessage(params.error)}</Notice>:null}
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-6"><h2 className="text-2xl font-black">Bestehenden Nutzer hinzufügen</h2><p className="mt-2 text-sm text-slate-400">Die Person muss bereits ein TapRadar-Konto besitzen.</p><form action={addPlatformAdmin} className="mt-5 grid gap-3 md:grid-cols-[1fr_220px_auto]"><input name="email" type="email" required placeholder="admin@tapradar.app" className={inputClass}/><RoleSelect name="role"/><ConfirmSubmitButton label="Admin hinzufügen" confirmation="Diesen Nutzer wirklich als Plattform-Admin hinzufügen?" className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950"/></form></section>
    <section className="mt-8"><h2 className="text-2xl font-black">Administratoren</h2><div className="mt-4 grid gap-4">{(admins??[]).map(item=>{const profile=profileMap.get(item.user_id);return <form key={item.user_id} action={updatePlatformAdmin} className="grid items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-5 lg:grid-cols-[1fr_220px_140px_auto]"><input type="hidden" name="user_id" value={item.user_id}/><div><p className="font-black">{profile?.full_name||profile?.email||item.user_id}</p><p className="mt-1 text-sm text-slate-400">{profile?.email??item.user_id} · seit {new Date(item.created_at).toLocaleDateString("de-AT")}</p></div><RoleSelect name="role" value={item.role}/><label className="flex items-center gap-3 font-bold"><input name="is_active" type="checkbox" defaultChecked={item.is_active} className="h-5 w-5 accent-purple-300"/> Aktiv</label><ConfirmSubmitButton label="Speichern" confirmation={`Rolle und Zugriff für ${profile?.email??"diesen Admin"} wirklich ändern?`} className="rounded-xl bg-white/10 px-4 py-3 font-black"/></form>})}</div></section>
    <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{ADMIN_ROLES.map(role=><div key={role} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><p className="font-black text-purple-100">{adminRoleLabel(role)}</p><p className="mt-2 text-sm leading-6 text-slate-400">{roleDescription(role)}</p></div>)}</section>
  </section></main>;
}

const inputClass="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white";
function RoleSelect({name,value}:{name:string;value?:string}){return <select name={name} defaultValue={value??"support"} className={inputClass}>{ADMIN_ROLES.map(role=><option key={role} value={role}>{adminRoleLabel(role)}</option>)}</select>}
function Notice({tone,children}:{tone:"success"|"error";children:React.ReactNode}){return <p className={`mt-6 rounded-2xl p-4 ${tone==="success"?"bg-emerald-300/10 text-emerald-100":"bg-red-300/10 text-red-100"}`}>{children}</p>}
function errorMessage(error:string){return error==="user-not-found"?"Kein TapRadar-Konto mit dieser E-Mail gefunden.":error==="self-lockout"?"Du kannst deinen eigenen Super-Admin-Zugriff nicht entfernen.":error==="last-super-admin"?"Der letzte aktive Super Admin kann nicht entfernt werden.":"Änderung konnte nicht gespeichert werden."}
function roleDescription(role:string){return role==="super_admin"?"Vollzugriff inklusive Rollen, API-Schlüssel und aller Einstellungen.":role==="operations"?"Unternehmen, Kunden, Inhalte, Support, Datenschutz und Systembetrieb.":role==="finance"?"Abos, Preise, Rechnungen und Zahlungsanbieter.":"Kunden, Unternehmen lesen und Support-Nachrichten bearbeiten."}
