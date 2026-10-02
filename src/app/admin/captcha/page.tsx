import { FormSubmitButton } from "@/components/FormSubmitButton";
import { requirePlatformAdmin } from "@/lib/admin";
import { saveCaptchaSettings } from "./actions";

type SearchParams = Promise<{ saved?: string; error?: string }>;

export default async function CaptchaSettingsPage({ searchParams }: { searchParams: SearchParams }) {
  const [{ supabase }, params] = await Promise.all([requirePlatformAdmin(), searchParams]);
  const [{ data: settings }, { data: logs, count }] = await Promise.all([
    supabase.from("captcha_settings").select("*").eq("id", true).single(),
    supabase.from("captcha_attempt_logs").select("id,action,captcha_version,score,hostname,reason,created_at", { count: "exact" }).order("created_at", { ascending: false }).limit(50),
  ]);

  return <main className="min-h-screen bg-slate-950 px-5 py-14 text-white sm:px-8"><section className="mx-auto max-w-5xl">
    <p className="text-sm font-black uppercase tracking-[.2em] text-purple-200">Sicherheit</p>
    <h1 className="mt-3 text-4xl font-black sm:text-5xl">Google reCAPTCHA</h1>
    <p className="mt-4 max-w-3xl leading-7 text-slate-300">Schlüssel, Schutzbereiche und Protokollierung zentral verwalten. Geheime Schlüssel werden verschlüsselt gespeichert und nie wieder angezeigt.</p>
    {params.saved ? <Notice tone="success">reCAPTCHA-Einstellungen wurden gespeichert.</Notice> : null}
    {params.error ? <Notice tone="error">{params.error === "credentials" ? "Für die gewählte Version fehlen Website- oder Geheimschlüssel." : "Einstellungen konnten nicht gespeichert werden."}</Notice> : null}

    <form action={saveCaptchaSettings} className="mt-8 grid gap-7">
      <Card title="Allgemeine Einstellungen" text="Wähle die aktive reCAPTCHA-Version. Für sichtbaren Bot-Schutz empfehlen wir die v2-Checkbox.">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Aktive Version"><select name="mode" defaultValue={settings?.mode ?? "v3"} className={inputClass}><option value="v3">reCAPTCHA v3 · unsichtbare Bewertung</option><option value="v2">reCAPTCHA v2 · sichtbare Checkbox</option></select></Field>
          <Field label="v3 Mindestpunktzahl"><input name="score_threshold" type="number" min="0" max="1" step="0.05" defaultValue={settings?.score_threshold ?? 0.5} className={inputClass}/></Field>
        </div>
      </Card>

      <Card title="reCAPTCHA v3" text="Unsichtbare Prüfung mit einer Punktzahl von 0,0 bis 1,0.">
        <div className="grid gap-4 md:grid-cols-2"><Field label="v3 Website-Schlüssel"><input name="v3_site_key" defaultValue={settings?.v3_site_key ?? ""} autoComplete="off" className={inputClass}/></Field><SecretField name="v3_secret" label="v3 Geheimer Schlüssel" configured={Boolean(settings?.v3_secret_ciphertext)}/></div>
      </Card>

      <Card title="reCAPTCHA v2" text="Sichtbare „Ich bin kein Roboter“-Checkbox.">
        <div className="grid gap-4 md:grid-cols-3"><Field label="v2 Website-Schlüssel"><input name="v2_site_key" defaultValue={settings?.v2_site_key ?? ""} autoComplete="off" className={inputClass}/></Field><SecretField name="v2_secret" label="v2 Geheimer Schlüssel" configured={Boolean(settings?.v2_secret_ciphertext)}/><Field label="v2 Design"><select name="v2_theme" defaultValue={settings?.v2_theme ?? "light"} className={inputClass}><option value="light">Hell</option><option value="dark">Dunkel</option></select></Field></div>
      </Card>

      <Card title="Schutzbereiche" text="Lege fest, welche öffentlichen Formulare geprüft werden.">
        <div className="grid gap-3 md:grid-cols-3"><Check name="protect_contact" checked={settings?.protect_contact ?? true} label="Kontaktformular"/><Check name="protect_registration" checked={settings?.protect_registration ?? true} label="Registrierung"/><Check name="protect_login" checked={settings?.protect_login ?? false} label="Anmeldung"/></div>
      </Card>

      <Card title="Protokoll" text={`${count ?? 0} abgelehnte Prüfungen gespeichert. IP-Adressen werden ausschließlich als nicht umkehrbarer Hash protokolliert.`}>
        <Check name="log_rejected" checked={settings?.log_rejected ?? true} label="Abgelehnte Versuche protokollieren"/>
        <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[700px] text-left text-sm"><thead className="text-slate-400"><tr><th className="pb-3">Zeit</th><th>Bereich</th><th>Version</th><th>Punktzahl</th><th>Grund</th><th>Host</th></tr></thead><tbody className="divide-y divide-white/10">{(logs ?? []).map(log=><tr key={log.id}><td className="py-3">{new Date(log.created_at).toLocaleString("de-AT")}</td><td>{log.action}</td><td>{log.captcha_version}</td><td>{log.score ?? "–"}</td><td>{log.reason}</td><td>{log.hostname ?? "–"}</td></tr>)}</tbody></table>{!logs?.length?<p className="py-5 text-slate-500">Noch keine abgelehnten Versuche.</p>:null}</div>
      </Card>
      <FormSubmitButton label="Einstellungen speichern" pendingLabel="Einstellungen werden gespeichert …" className="w-fit rounded-xl bg-purple-300 px-6 py-3 font-black text-slate-950"/>
    </form>
  </section></main>;
}

const inputClass = "w-full rounded-xl border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none focus:border-purple-300";
function Card({ title, text, children }: { title: string; text: string; children: React.ReactNode }) { return <section className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"><h2 className="text-2xl font-black">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p><div className="mt-5">{children}</div></section>; }
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-400">{label}{children}</label>; }
function SecretField({ name, label, configured }: { name: string; label: string; configured: boolean }) { return <Field label={label}><input name={name} type="password" autoComplete="new-password" placeholder={configured ? "•••••••• · hinterlegt" : "Noch nicht hinterlegt"} className={inputClass}/><span className="text-xs font-normal normal-case text-slate-500">Leer lassen, um den bisherigen Schlüssel zu behalten.</span></Field>; }
function Check({ name, checked, label }: { name: string; checked: boolean; label: string }) { return <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/70 p-4 font-bold"><input name={name} type="checkbox" defaultChecked={checked} className="h-5 w-5 accent-purple-300"/>{label}</label>; }
function Notice({ tone, children }: { tone: "success" | "error"; children: React.ReactNode }) { return <p className={`mt-6 rounded-2xl p-4 ${tone === "success" ? "bg-emerald-300/10 text-emerald-100" : "bg-red-300/10 text-red-100"}`}>{children}</p>; }
