import Link from "next/link";
import { requirePlatformAdmin } from "@/lib/admin";
import { emailEvents, type EmailEvent, type EmailTemplate } from "@/lib/email-templates";
import type { DeliverySnapshot } from "@/lib/email-delivery";
import { FormSubmitButton } from "@/components/FormSubmitButton";
import { TemplateEditor } from "./TemplateEditor";
import { saveEmailSettings } from "./actions";

export const metadata = { title: "E-Mail-Vorlagen | TapRadar Administration", robots: { index: false, follow: false } };
const statusLabels: Record<string, string> = { pending: "Wartet", processing: "Wird gesendet", sent: "An Versanddienst übergeben", failed: "Fehlgeschlagen", cancelled: "Deaktiviert" };

export default async function EmailTemplatesPage({ searchParams }: { searchParams: Promise<{ saved?: string; error?: string }> }) {
  const { supabase } = await requirePlatformAdmin();
  const [params, templates, settings, logs] = await Promise.all([
    searchParams,
    supabase.from("email_templates").select("event_id,locale,subject,body,enabled,revision").order("event_id"),
    supabase.from("email_settings").select("test_mode,test_recipient").eq("id", true).single(),
    supabase.from("notification_outbox").select("id,template,locale,recipient_email,force_test,status,attempts,last_error,sent_at,created_at,delivery_snapshot,provider_message_id").order("created_at", { ascending: false }).limit(100),
  ]);
  const unavailable = templates.error || settings.error || !settings.data;
  return <main className="min-h-screen w-full px-5 py-12 text-white sm:px-8"><div className="mx-auto max-w-7xl">
    <Link href="/admin" className="text-sm font-bold text-cyan-300">← Administration</Link>
    <div className="mt-5 flex flex-wrap items-center justify-between gap-4"><div><h1 className="text-4xl font-black sm:text-5xl">E-Mail-Vorlagen</h1><p className="mt-4 max-w-2xl leading-7 text-slate-300">Alle automatischen E-Mails an einem Ort. Texte bearbeiten, Vorschau prüfen und Versand verfolgen.</p></div><span className="rounded-full border border-purple-300/30 bg-purple-300/10 px-4 py-2 text-sm font-bold text-purple-200">Nur für Admins</span></div>
    {(!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM || !process.env.CRON_SECRET) && <p role="status" className="mt-6 rounded-xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">Der Versanddienst ist noch nicht vollständig eingerichtet. Vorlagen können bearbeitet werden; eingereihte E-Mails warten auf die Versandkonfiguration.</p>}
    {params.saved && <p role="status" className="mt-6 rounded-xl bg-emerald-300/10 p-4 text-emerald-100">{params.saved === "test" ? "Test-E-Mail wurde eingereiht. Der Versanddienst verarbeitet die Warteschlange beim nächsten Lauf." : "Versandeinstellungen gespeichert."}</p>}
    {params.error && <p role="alert" className="mt-6 rounded-xl bg-red-300/10 p-4 text-red-200">{params.error === "recipient" ? "Bitte zuerst eine gültige Testadresse speichern." : "Die Aktion ist fehlgeschlagen. Bitte versuche es erneut."}</p>}
    {unavailable ? <p role="alert" className="mt-8 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-6 text-amber-100">Das E-Mail-System ist noch nicht eingerichtet oder derzeit nicht erreichbar. Vorlagen und Einstellungen konnten nicht geladen werden.</p> : <>
      <section className="mt-9 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
        <h2 className="text-2xl font-black">Versandeinstellungen</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">Deutsch → DE. Englisch und alle anderen oder unbekannten Sprachen → EN.</p>
        <form action={saveEmailSettings} className="mt-5 grid gap-5">
          <label className="flex items-start gap-3"><input type="checkbox" name="test_mode" defaultChecked={settings.data!.test_mode} className="mt-1" /><span><strong>Testmodus</strong><span className="mt-1 block text-sm text-slate-400">Alle neuen E-Mails gehen ausschließlich an die Testadresse. Ohne Haken werden neue E-Mails an die echten Empfänger gesendet. Bereits eingereihte Test-E-Mails bleiben Test-E-Mails.</span></span></label>
          <label className="grid max-w-lg gap-2 text-sm font-bold">Testadresse<input name="test_recipient" type="email" required maxLength={254} defaultValue={settings.data!.test_recipient ?? ""} placeholder="deine-testadresse@beispiel.at" className="rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-300" /></label>
          <FormSubmitButton label="Versandeinstellungen speichern" pendingLabel="Wird gespeichert …" className="w-fit rounded-xl bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950" />
        </form>
      </section>
      <section className="mt-10"><h2 className="text-2xl font-black">Vorlagen nach Ereignis</h2><p className="mt-2 text-sm text-slate-400">Deutsch und Englisch getrennt bearbeiten. Öffne ein Ereignis, um beide Vorlagen zu sehen.</p>
        <div className="mt-5 grid gap-3">{Object.entries(emailEvents).map(([id, event]) => <details key={id} className="group rounded-2xl border border-white/10 bg-white/[0.025]">
          <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-3 p-5"><span><strong className="text-lg">{event.label}</strong><span className="mt-1 block text-xs text-slate-500">{id}</span></span><span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">DE / EN <span aria-hidden className="ml-2">＋</span></span></summary>
          <div className="border-t border-white/10 p-5"><p className="mb-5 text-sm text-slate-400">Empfänger: {event.recipient}</p><div className="grid items-start gap-5 xl:grid-cols-2">{(["de", "en"] as const).map((locale) => {
            const template = (templates.data as EmailTemplate[]).find((row) => row.event_id === id && row.locale === locale);
            return template ? <TemplateEditor key={`${id}-${locale}`} template={template} /> : <p key={locale} role="alert">Vorlage {locale.toUpperCase()} fehlt.</p>;
          })}</div></div>
        </details>)}</div>
      </section>
    </>}
    <section className="mt-12"><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-black">Versandprotokoll</h2><Link href="/admin/operations" className="text-sm font-bold text-cyan-300">Fehlgeschlagene E-Mails bearbeiten →</Link></div><p className="mt-2 text-sm text-slate-400">Die letzten 100 E-Mails. Erfolgreiche Einträge werden 90 Tage aufbewahrt. „Übergeben“ bestätigt die Annahme durch den Versanddienst.</p>
      {logs.error ? <p role="alert" className="mt-4 text-red-200">Das Protokoll konnte nicht geladen werden.</p> : <div className="mt-5 grid gap-3">{!logs.data?.length && <p className="rounded-2xl border border-dashed border-white/15 p-8 text-center text-slate-400">Noch keine E-Mails eingereiht.</p>}{logs.data?.map((job) => {
        const snapshot = job.delivery_snapshot as DeliverySnapshot | null;
        return <details key={job.id} className="rounded-2xl border border-white/10 p-5"><summary className="cursor-pointer list-none"><div className="flex flex-wrap justify-between gap-3"><div><p className="font-bold">{emailEvents[job.template as EmailEvent]?.label ?? job.template} · {(snapshot?.locale ?? job.locale ?? "en").toUpperCase()}</p><p className="mt-1 break-all text-sm text-slate-300">{snapshot?.to ?? (job.force_test || settings.data?.test_mode ? settings.data?.test_recipient ?? "Testadresse fehlt" : job.recipient_email)} {snapshot?.is_test || job.force_test || (!snapshot && settings.data?.test_mode) ? <span className="ml-2 text-amber-200">TEST</span> : null}</p></div><div className="text-sm"><p className={job.status === "failed" ? "text-red-200" : "text-cyan-200"}>{statusLabels[job.status] ?? job.status}</p><p className="mt-1 text-slate-500">{new Date(job.sent_at ?? job.created_at).toLocaleString("de-AT", { timeZone: "Europe/Vienna" })} · Wien</p></div></div></summary><div className="mt-4 grid gap-2 border-t border-white/10 pt-4 text-sm text-slate-400"><p>Ursprünglicher Empfänger: {job.recipient_email}</p><p>Event: {job.template} · Versuche: {job.attempts} · Version: {snapshot?.template_revision ?? "Noch nicht versendet"}</p>{job.provider_message_id && <p>Versand-ID: {job.provider_message_id}</p>}{job.last_error && <p className="text-red-200">{job.last_error}</p>}{snapshot && <><p className="font-bold text-white">{snapshot.subject}</p><p className="whitespace-pre-wrap break-words leading-7">{snapshot.text}</p></>}</div></details>;
      })}</div>}
    </section>
  </div></main>;
}
