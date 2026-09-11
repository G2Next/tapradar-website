"use client";

import { useActionState, useState } from "react";
import { emailEvents, renderEmail, validateTemplate, type EmailTemplate } from "@/lib/email-templates";
import { queueTemplateTest, saveEmailTemplate, type TemplateSaveState } from "./actions";
import { FormSubmitButton } from "@/components/FormSubmitButton";

const inputClass = "w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300";

export function TemplateEditor({ template }: { template: EmailTemplate }) {
  const [subject, setSubject] = useState(template.subject);
  const [body, setBody] = useState(template.body);
  const [state, save, pending] = useActionState<TemplateSaveState, FormData>(saveEmailTemplate, {});
  const event = emailEvents[template.event_id];
  const error = validateTemplate(template.event_id, subject, body);
  let preview: { subject: string; text: string } | null = null;
  try { if (!error) preview = renderEmail({ subject, body }, event.sample); } catch { /* Invalid draft is explained beside the inputs. */ }
  const id = `${template.event_id}-${template.locale}`;
  return <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
    <h3 className="text-xl font-black">{template.locale === "de" ? "Deutsch · DE" : "English · EN"}</h3>
    <form action={save} className="mt-5 grid gap-4">
      <input type="hidden" name="event_id" value={template.event_id} />
      <input type="hidden" name="locale" value={template.locale} />
      <input type="hidden" name="revision" value={state.revision ?? template.revision} />
      <label className="grid gap-2 text-sm font-bold" htmlFor={`${id}-subject`}>Betreff<input id={`${id}-subject`} name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required maxLength={200} className={inputClass} /></label>
      <label className="grid gap-2 text-sm font-bold" htmlFor={`${id}-body`}>E-Mail-Text<textarea id={`${id}-body`} name="body" value={body} onChange={(e) => setBody(e.target.value)} required maxLength={20000} rows={8} className={inputClass} /></label>
      <p className="text-xs leading-6 text-slate-400">Platzhalter: {Object.keys(event.sample).map((name) => `{{${name}}}`).join(" · ") || "Keine"}. Der Text wird sicher als E-Mail formatiert.</p>
      <label className="flex gap-3 text-sm"><input type="checkbox" name="enabled" defaultChecked={template.enabled} /> Automatisch versenden</label>
      {(error || state.error) && <p role="alert" className="text-sm text-red-200">{error || state.error}</p>}
      {state.success && !state.error && <p role="status" className="text-sm text-emerald-200">{state.success}</p>}
      <button disabled={pending || Boolean(error)} className="w-fit rounded-xl bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 disabled:opacity-50">{pending ? "Wird gespeichert …" : "Vorlage speichern"}</button>
    </form>
    <div className="mt-6 rounded-xl bg-white p-5 text-slate-900">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Vorschau mit Beispieldaten</p>
      <p className="mt-3 break-words font-bold">{preview?.subject ?? "Bitte Platzhalter prüfen"}</p>
      <div className="mt-4 border-t border-slate-200 pt-4"><p className="text-xl font-black">TapRadar</p><p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7">{preview?.text}</p></div>
    </div>
    <form action={queueTemplateTest} className="mt-4 flex flex-wrap items-center gap-3">
      <input type="hidden" name="event_id" value={template.event_id} /><input type="hidden" name="locale" value={template.locale} />
      <FormSubmitButton label="Gespeicherte Vorlage testen" pendingLabel="Wird eingereiht …" className="rounded-xl border border-white/20 px-4 py-2 text-sm font-bold" />
      <p className="text-xs text-slate-400">An die Testadresse, mit Beispieldaten. Deaktivierte Vorlagen werden nicht versendet.</p>
    </form>
  </article>;
}
