"use client";

import { useActionState } from "react";
import { FormSubmitButton } from "@/components/FormSubmitButton";
import { createPlatformApiKey, type ApiKeyState } from "@/app/admin/api-keys/actions";

export function ApiKeyCreator() {
  const [state, action] = useActionState<ApiKeyState, FormData>(createPlatformApiKey, {});
  return <div className="rounded-3xl border border-purple-300/20 bg-purple-300/[0.05] p-6"><h2 className="text-2xl font-black">Neuen App-Sync-Schlüssel erstellen</h2><p className="mt-2 text-sm text-slate-400">Der vollständige Schlüssel wird nur einmal angezeigt.</p><form action={action} className="mt-5 grid gap-4 md:grid-cols-[1fr_220px_auto]"><label className="grid gap-2 text-xs font-black uppercase text-slate-400">Name<input name="name" required minLength={2} placeholder="z. B. iOS Produktion" className="rounded-xl bg-slate-900 px-4 py-3 text-base font-normal normal-case"/></label><label className="grid gap-2 text-xs font-black uppercase text-slate-400">Ablaufdatum (optional)<input name="expires_at" type="date" className="rounded-xl bg-slate-900 px-4 py-3 text-base font-normal normal-case"/></label><div className="flex items-end"><FormSubmitButton label="Schlüssel erzeugen" pendingLabel="Wird erzeugt …" className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950"/></div></form>{state.error?<p className="mt-4 text-red-200">{state.error}</p>:null}{state.key?<div className="mt-5 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4"><p className="font-black text-amber-100">Jetzt sicher kopieren - später nicht mehr sichtbar:</p><code className="mt-3 block break-all rounded-xl bg-slate-950 p-4 text-sm text-cyan-200">{state.key}</code></div>:null}</div>;
}
