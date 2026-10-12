import Link from "next/link";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";

export default async function AccountPage() {
  const context = await getDashboardContext();
  if (!context.user) redirect("/login?next=/dashboard/account");
  const roleLabels: Record<string, string> = { owner: "Inhaber", manager: "Manager", staff: "Mitarbeiter" };
  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white"><section className="mx-auto max-w-4xl">
    <Link href="/dashboard" className="font-black text-cyan-300">Zurück zum Dashboard</Link>
    <h1 className="mt-6 text-4xl font-black sm:text-5xl">Konto</h1><p className="mt-3 text-slate-300">Deine Anmeldung und deine Zugänge zu Unternehmen.</p>
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6"><h2 className="text-2xl font-black">Anmeldung</h2><dl className="mt-5 grid gap-5 sm:grid-cols-2"><div><dt className="text-sm text-slate-400">E-Mail-Adresse</dt><dd className="mt-1 break-all font-bold">{context.user.email ?? "Keine E-Mail hinterlegt"}</dd></div><div><dt className="text-sm text-slate-400">E-Mail-Status</dt><dd className="mt-1 font-bold">{context.user.email_confirmed_at ? "Bestätigt" : "Noch nicht bestätigt"}</dd></div></dl><Link href="/passwort-vergessen" className="mt-5 inline-block text-sm font-bold text-cyan-200">Passwort per E-Mail zurücksetzen →</Link></section>
    <section className="mt-6 rounded-3xl border border-white/10 p-6"><h2 className="text-2xl font-black">Unternehmenszugänge</h2><ul className="mt-5 grid gap-3">{context.memberships.map(membership => {
      const organization = Array.isArray(membership.organizations) ? membership.organizations[0] : membership.organizations;
      return <li key={membership.organization_id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white/[0.05] p-4"><span className="font-bold">{organization?.name ?? "Unternehmen"}{membership.organization_id === context.organizationId ? <span className="ml-2 text-xs text-cyan-200">Aktiv</span> : null}</span><span className="text-sm text-slate-300">{roleLabels[membership.role] ?? membership.role}</span></li>;
    })}</ul><p className="mt-4 text-sm text-slate-400">Das aktive Unternehmen kannst du im Dashboard wechseln.</p></section>
    <div className="mt-6 rounded-3xl border border-white/10 p-6"><h2 className="text-xl font-black">Deine Daten</h2><p className="mt-3 text-sm leading-6 text-slate-300">Datenexport und Kontolöschung findest du im Datenschutzbereich.</p><Link href="/dashboard/privacy" className="mt-4 inline-block font-bold text-cyan-200">Zum Datenschutz →</Link></div>
  </section></main>;
}
