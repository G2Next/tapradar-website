"use client";

import { useActionState, useMemo, useState } from "react";
import { FormSubmitButton } from "@/components/FormSubmitButton";
import { createContest, type ContestActionState } from "./actions";

type Location = { id: string; name: string };
type ContestType = "task_challenge" | "spin_wheel";

const taskLabels = [
  ["follow_instagram", "Instagram folgen"], ["follow_facebook", "Facebook folgen"], ["comment_post", "Beitrag kommentieren"],
  ["rate_app", "In der App bewerten"], ["in_app_sonstiges", "Sonstige In-App-Aufgabe"],
];

export function ContestForm({ locations }: { locations: Location[] }) {
  const [state, formAction] = useActionState<ContestActionState, FormData>(createContest, {});
  const [type, setType] = useState<ContestType>("spin_wheel");
  const [taskCount, setTaskCount] = useState(1);
  const [prizeCount, setPrizeCount] = useState(1);
  const [maxPlays, setMaxPlays] = useState(100);
  const [quantities, setQuantities] = useState(Array(6).fill(0) as number[]);
  const [units, setUnits] = useState(Array(6).fill(1) as number[]);
  const possibleWins = useMemo(() => quantities.reduce((sum, quantity, index) => sum + Math.floor(Math.max(0, quantity) / Math.max(1, units[index])), 0), [quantities, units]);
  const noWinCount = Math.max(0, maxPlays - possibleWins);

  return <form action={formAction} className="mt-8 grid gap-6">
    <section className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
      <p className="text-xs font-black uppercase tracking-[.2em] text-purple-200">1 · Spielart</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <TypeCard active={type === "task_challenge"} icon="✓" title="Aufgaben-Checkliste" text="Alle Aufgaben erledigt – Belohnung garantiert." onClick={() => setType("task_challenge")} />
        <TypeCard active={type === "spin_wheel"} icon="◉" title="Glücksrad" text="Ein serverseitig bestimmter Dreh mit mengenabhängigen Gewinnchancen." onClick={() => setType("spin_wheel")} />
      </div>
      <input type="hidden" name="contest_type" value={type} />
    </section>

    <section className="grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
      <p className="text-xs font-black uppercase tracking-[.2em] text-purple-200">2 · Informationen</p>
      <Field name="title" label="Titel" required placeholder="Dreh dein Glück" />
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Beschreibung<textarea name="description" required maxLength={1200} className="min-h-28 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case" /></label>
      <div className="grid gap-4 md:grid-cols-2"><label className="grid gap-2 text-xs font-black uppercase text-slate-300">Filiale<select name="location_id" className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case"><option value="">Alle Filialen</option>{locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}</select></label><Field name="image_url" label="Bild-URL (optional)" type="url" placeholder="https://…" /></div>
      <div className="grid gap-4 md:grid-cols-2"><Field name="start_at" label="Start" type="datetime-local" required /><Field name="end_at" label="Ende" type="datetime-local" required /></div>
      <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black"><input name="is_active" type="checkbox" defaultChecked className="h-5 w-5 accent-purple-300" />Nach dem Speichern in der Kunden-App veröffentlichen</label>
    </section>

    {type === "task_challenge" ? <section className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6"><p className="text-xs font-black uppercase tracking-[.2em] text-purple-200">3 · Aufgaben</p><p className="mt-2 text-sm text-slate-400">Social-Media-Aufgaben werden als Selbstauskunft gekennzeichnet. Bewertung und Einladung werden nur über den bestehenden App-Flow automatisch bestätigt.</p><div className="mt-5 grid gap-4">{Array.from({ length: taskCount }, (_, index) => <div key={index} className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 md:grid-cols-[.7fr_1fr_1fr]"><label className="grid gap-2 text-xs font-black uppercase text-slate-300">Aufgabe<select name={`task_type_${index}`} className="rounded-xl bg-[#102235] px-3 py-3 text-sm font-normal normal-case">{taskLabels.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><Field name={`task_description_${index}`} label="Beschreibung" required /><Field name={`task_link_${index}`} label="Ziel-Link" type="url" /></div>)}</div>{taskCount < 6 ? <button type="button" onClick={() => setTaskCount(value => value + 1)} className="mt-4 font-black text-purple-200">+ Aufgabe hinzufügen</button> : null}</section> : null}

    <section className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
      <p className="text-xs font-black uppercase tracking-[.2em] text-purple-200">{type === "spin_wheel" ? "3" : "4"} · Gewinne und Bestand</p>
      {type === "spin_wheel" ? <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1.4fr]"><Field name="max_plays" label="Gesamtzahl verfügbarer Drehs" type="number" min="1" required value={maxPlays} onChange={event => setMaxPlays(Number(event.target.value))} /><div className="rounded-2xl bg-purple-300/10 p-4 text-sm text-purple-100"><strong>{possibleWins} Gewinne · {noWinCount}× leider nichts</strong><p className="mt-1 text-purple-100/70">Die Quote wird automatisch aus Stückzahl ÷ verbleibende Drehs berechnet. Jeder Gewinn wird nur aus vorhandenem Bestand ausgegeben.</p></div></div> : <p className="mt-3 text-sm text-slate-400">Für die garantierte Belohnung bestimmt die Menge, wie viele vollständige Abschlüsse möglich sind.</p>}
      <div className="mt-5 grid gap-4">{Array.from({ length: prizeCount }, (_, index) => <PrizeRow key={index} index={index} quantity={quantities[index]} units={units[index]} onQuantity={value => setQuantities(current => current.map((item, itemIndex) => itemIndex === index ? value : item))} onUnits={value => setUnits(current => current.map((item, itemIndex) => itemIndex === index ? value : item))} />)}</div>
      {prizeCount < 6 ? <button type="button" onClick={() => setPrizeCount(value => value + 1)} className="mt-4 font-black text-purple-200">+ Weiteren Gewinn hinzufügen</button> : null}
    </section>

    <section className="grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.07] p-6"><p className="text-xs font-black uppercase tracking-[.2em] text-purple-200">{type === "spin_wheel" ? "4" : "5"} · Teilnahmebedingungen</p><label className="grid gap-2 text-xs font-black uppercase text-slate-300">Verbindlicher Text<textarea name="terms_text" required minLength={20} maxLength={5000} rows={8} placeholder="Veranstalter, Zeitraum, Teilnahmeberechtigung, kostenlose Teilnahme, Anzahl der Versuche, Gewinne, Einlösung, Datenschutz …" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case" /></label><p className="text-sm text-amber-100">Der Kunde muss diese Bedingungen in der App lesen und ausdrücklich akzeptieren, bevor die Teilnahme startet.</p></section>
    {state.error ? <p role="alert" className="rounded-2xl bg-red-300/10 p-4 text-red-100">{state.error}</p> : null}
    <FormSubmitButton label="Gewinnspiel erstellen" pendingLabel="Gewinnspiel wird erstellt …" className="rounded-2xl bg-gradient-to-r from-purple-300 to-cyan-300 px-6 py-4 font-black text-slate-950" />
  </form>;
}

function TypeCard({ active, icon, title, text, onClick }: { active: boolean; icon: string; title: string; text: string; onClick: () => void }) { return <button type="button" onClick={onClick} className={`rounded-2xl border p-5 text-left transition ${active ? "border-purple-300 bg-purple-300/15 ring-2 ring-purple-300/20" : "border-white/10 bg-white/[0.03]"}`}><span className="text-3xl">{icon}</span><strong className="mt-3 block text-lg">{title}</strong><span className="mt-2 block text-sm leading-6 text-slate-400">{text}</span></button>; }
function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) { const { label, ...input } = props; return <label className="grid gap-2 text-xs font-black uppercase text-slate-300">{label}<input {...input} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case" /></label>; }
function PrizeRow({ index, quantity, units, onQuantity, onUnits }: { index: number; quantity: number; units: number; onQuantity: (value: number) => void; onUnits: (value: number) => void }) { const [kind, setKind] = useState("product"); return <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 md:grid-cols-2 xl:grid-cols-4"><Field name={`prize_title_${index}`} label="Gewinn" required={index === 0} placeholder="Gratis Cappuccino" /><label className="grid gap-2 text-xs font-black uppercase text-slate-300">Art<select name={`prize_type_${index}`} value={kind} onChange={event => setKind(event.target.value)} className="rounded-2xl bg-[#102235] px-4 py-3 text-base font-normal normal-case"><option value="product">Produkt</option><option value="service">Dienstleistung</option><option value="discount">Rabatt</option><option value="coupon">Gutschein</option></select></label><Field name={`prize_quantity_${index}`} label="Verfügbare Menge" type="number" min="1" required={index === 0} value={quantity || ""} onChange={event => onQuantity(Number(event.target.value))} /><Field name={`prize_units_${index}`} label="Einheiten pro Gewinner" type="number" min="1" required={index === 0} value={units} onChange={event => onUnits(Number(event.target.value))} /><Field name={`prize_description_${index}`} label="Beschreibung" /><Field name={`prize_validity_days_${index}`} label="Gültigkeit in Tagen" type="number" min="1" max="365" defaultValue="14" />{["discount", "coupon"].includes(kind) ? <><label className="grid gap-2 text-xs font-black uppercase text-slate-300">Gutscheinart<select name={`prize_discount_type_${index}`} className="rounded-2xl bg-[#102235] px-4 py-3 text-base font-normal normal-case"><option value="percentage">Prozent</option><option value="fixed">Euro</option><option value="free_product">Gratisartikel</option></select></label><Field name={`prize_discount_value_${index}`} label="Wert" type="number" min="0" step="0.01" /></> : null}</div>; }
