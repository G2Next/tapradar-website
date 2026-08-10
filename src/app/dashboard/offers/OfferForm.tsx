"use client";

import { type FormEvent, useActionState, useEffect, useState } from "react";
import { FormSubmitButton } from "@/components/FormSubmitButton";
import { createOffer, updateOffer, type OfferActionState } from "./actions";

type Location = { id: string; name: string };
type Asset = { storage_path: string; mime_type: string; alt_text: string | null };
type OfferType = "aktion" | "gutschein";

export type EditableOffer = {
  id: string;
  title: string;
  description: string | null;
  offer_type: string;
  discount_type: string | null;
  discount_value: number | null;
  minimum_purchase_amount: number | null;
  redemption_code: string | null;
  conditions: string | null;
  starts_at: string | null;
  ends_at: string | null;
  is_active: boolean;
  location_id: string | null;
  organization_assets: Asset | Asset[] | null;
};

type Values = {
  offer_type: OfferType;
  title: string;
  location_id: string;
  description: string;
  discount_type: string;
  discount_value: string;
  minimum_purchase_amount: string;
  redemption_code: string;
  conditions: string;
  media_alt_text: string;
  starts_at: string;
  ends_at: string;
  is_active: boolean;
};

type MediaPreview = { url: string; type: string } | null;

const offerTypes = [
  { value: "aktion", label: "Aktion", icon: "🔥" },
  { value: "gutschein", label: "Gutschein", icon: "🎟️" },
] as const;
const allowedFiles = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]);
const toLocal = (value: string | null | undefined) => value ? value.slice(0, 16) : "";

function initialValues(offer?: EditableOffer, fixedType?: OfferType): Values {
  const asset = Array.isArray(offer?.organization_assets) ? offer.organization_assets[0] : offer?.organization_assets;
  return {
    offer_type: fixedType ?? (offer?.offer_type === "gutschein" ? "gutschein" : "aktion"),
    title: offer?.title ?? "",
    location_id: offer?.location_id ?? "",
    description: offer?.description ?? "",
    discount_type: offer?.discount_type ?? "fixed",
    discount_value: offer?.discount_value?.toString() ?? "",
    minimum_purchase_amount: offer?.minimum_purchase_amount?.toString() ?? "",
    redemption_code: offer?.redemption_code ?? "",
    conditions: offer?.conditions ?? "",
    media_alt_text: asset?.alt_text ?? "",
    starts_at: toLocal(offer?.starts_at),
    ends_at: toLocal(offer?.ends_at),
    is_active: offer?.is_active ?? true,
  };
}

export function OfferForm({
  offer,
  locations,
  mediaUrl,
  fixedType,
  showVoucherPreview = false,
  className = "",
}: {
  offer?: EditableOffer;
  locations: Location[];
  mediaUrl?: string | null;
  fixedType?: OfferType;
  showVoucherPreview?: boolean;
  className?: string;
}) {
  const action = offer ? updateOffer : createOffer;
  const [state, formAction] = useActionState<OfferActionState, FormData>(action, {});
  const [values, setValues] = useState<Values>(() => initialValues(offer, fixedType));
  const [clientError, setClientError] = useState<string | null>(null);
  const [mediaPreview, setMediaPreview] = useState<MediaPreview>(mediaUrl ? { url: mediaUrl, type: "image/existing" } : null);
  const set = <K extends keyof Values>(key: K, value: Values[K]) => setValues(current => ({ ...current, [key]: value }));
  const isVoucher = values.offer_type === "gutschein";

  useEffect(() => () => {
    if (mediaPreview?.url.startsWith("blob:")) URL.revokeObjectURL(mediaPreview.url);
  }, [mediaPreview]);

  function updateMediaPreview(file?: File) {
    setMediaPreview(current => {
      if (current?.url.startsWith("blob:")) URL.revokeObjectURL(current.url);
      if (!file) return mediaUrl ? { url: mediaUrl, type: "image/existing" } : null;
      return { url: URL.createObjectURL(file), type: file.type };
    });
  }

  function validate(event: FormEvent<HTMLFormElement>) {
    setClientError(null);
    if (isVoucher) {
      const amount = Number(values.discount_value);
      if (!Number.isFinite(amount) || amount <= 0 || (values.discount_type === "percentage" && amount > 100)) {
        event.preventDefault();
        setClientError(values.discount_type === "percentage" ? "Bitte einen Gutscheinwert zwischen 0,01 und 100 Prozent eingeben." : "Bitte einen Gutscheinwert größer als 0 Euro eingeben.");
        return;
      }
    }
    if (values.starts_at && values.ends_at && values.starts_at >= values.ends_at) {
      event.preventDefault();
      setClientError("Das Enddatum muss nach dem Startdatum liegen.");
      return;
    }
    const file = event.currentTarget.elements.namedItem("media");
    if (file instanceof HTMLInputElement && file.files?.[0]) {
      const selected = file.files[0];
      if (!allowedFiles.has(selected.type) || selected.size > 5 * 1024 * 1024) {
        event.preventDefault();
        setClientError("Erlaubt sind JPG, PNG, WebP oder PDF bis maximal 5 MB.");
      }
    }
  }

  const error = clientError ?? state.error;
  const editor = <div>
    <div className="grid gap-4">
      {fixedType ? <input type="hidden" name="offer_type" value={fixedType} /> : <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Typ<select name="offer_type" value={values.offer_type} onChange={event => set("offer_type", event.target.value as OfferType)} className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case">{offerTypes.map(type => <option key={type.value} value={type.value}>{type.icon} {type.label}</option>)}</select></label>}
      <Field name="title" label={isVoucher ? "Gutschein-Titel" : "Aktions-Titel"} value={values.title} onChange={value => set("title", value)} placeholder={isVoucher ? "10 € Willkommensgutschein" : "Sommer-Aktion"} required />
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Filiale<select name="location_id" value={values.location_id} onChange={event => set("location_id", event.target.value)} className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case"><option value="">Alle Filialen</option>{locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}</select></label>
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Beschreibung<textarea name="description" required value={values.description} onChange={event => set("description", event.target.value)} placeholder={isVoucher ? "Wofür kann der Gutschein verwendet werden?" : "Was sieht der Kunde in der App?"} className="min-h-24 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case" /></label>
      {isVoucher ? <div className="grid gap-4 md:grid-cols-2"><label className="grid gap-2 text-xs font-black uppercase text-slate-300">Gutscheinart<select name="discount_type" value={values.discount_type} onChange={event => set("discount_type", event.target.value)} className="rounded-2xl border border-white/15 bg-[#102235] px-4 py-3 text-base font-normal normal-case"><option value="fixed">Fester Betrag (€)</option><option value="percentage">Prozent (%)</option></select></label><Field name="discount_value" label="Gutscheinwert" type="number" step="0.01" min="0.01" max={values.discount_type === "percentage" ? "100" : "10000"} required value={values.discount_value} onChange={value => set("discount_value", value)} /><Field name="minimum_purchase_amount" label="Mindestkauf (€; optional)" type="number" step="0.01" min="0" value={values.minimum_purchase_amount} onChange={value => set("minimum_purchase_amount", value)} /><Field name="redemption_code" label="Kassencode (optional automatisch)" value={values.redemption_code} onChange={value => set("redemption_code", value)} /></div> : null}
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Bedingungen<textarea name="conditions" value={values.conditions} onChange={event => set("conditions", event.target.value)} placeholder="z. B. einmal pro Person, nicht kombinierbar" className="min-h-20 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case" /></label>
      {mediaUrl ? <a href={mediaUrl} target="_blank" rel="noreferrer" className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm font-black text-cyan-200">Aktuelles Bild/PDF öffnen</a> : null}
      <label className="grid gap-2 text-xs font-black uppercase text-slate-300">Bild oder PDF<input name="media" type="file" accept="image/jpeg,image/png,image/webp,application/pdf" onChange={event => updateMediaPreview(event.target.files?.[0])} className="rounded-2xl border border-white/15 p-3 text-sm font-normal normal-case" /><span className="text-xs font-normal normal-case text-slate-500">Bilder werden automatisch auf das App-Format 1200 × 630 px zugeschnitten und als optimiertes WebP gespeichert. PDF maximal 5 MB.</span></label>
      <Field name="media_alt_text" label="Bildbeschreibung für Barrierefreiheit" value={values.media_alt_text} onChange={value => set("media_alt_text", value)} />
      <div className="grid gap-4 md:grid-cols-2"><Field name="starts_at" label="Start" type="datetime-local" value={values.starts_at} onChange={value => set("starts_at", value)} /><Field name="ends_at" label="Ende" type="datetime-local" value={values.ends_at} onChange={value => set("ends_at", value)} /></div>
      <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black"><input name="is_active" type="checkbox" checked={values.is_active} onChange={event => set("is_active", event.target.checked)} className="h-5 w-5 accent-cyan-300" />In Kunden-App aktiv</label>
    </div>
    {error ? <p role="alert" aria-live="polite" className="mt-4 rounded-2xl bg-red-300/10 p-4 text-sm text-red-100">{error}</p> : null}
    <FormSubmitButton label={offer ? "Eintrag speichern" : isVoucher ? "Gutschein anlegen" : "Aktion anlegen"} pendingLabel="Wird gespeichert …" className={offer ? "mt-5 rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950" : "mt-5 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950"} />
  </div>;

  return <form action={formAction} onSubmit={validate} className={className}>
    {offer ? <input type="hidden" name="offer_id" value={offer.id} /> : null}
    {showVoucherPreview && isVoucher ? <div className="grid items-start gap-7 xl:grid-cols-[minmax(0,.9fr)_minmax(420px,1.1fr)]"><VoucherPreview values={values} locations={locations} mediaPreview={mediaPreview} />{editor}</div> : editor}
  </form>;
}

function VoucherPreview({ values, locations, mediaPreview }: { values: Values; locations: Location[]; mediaPreview: MediaPreview }) {
  const location = locations.find(item => item.id === values.location_id)?.name ?? "Alle Filialen";
  const numericValue = Number(values.discount_value);
  const amount = Number.isFinite(numericValue) && numericValue > 0 ? values.discount_type === "percentage" ? `${numericValue.toLocaleString("de-AT")} %` : `${numericValue.toLocaleString("de-AT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €` : "Gutschein";
  const hasImage = Boolean(mediaPreview && mediaPreview.type !== "application/pdf");
  return <aside className="xl:sticky xl:top-8"><p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Live-Vorschau in der Kunden-App</p><div className="overflow-hidden rounded-[32px] border border-cyan-300/25 bg-[#0b1d31] shadow-2xl shadow-cyan-950/40">
    <div className="relative flex min-h-64 items-end bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-700 p-6" style={hasImage ? { backgroundImage: `linear-gradient(to top, rgba(2,6,23,.92), rgba(2,6,23,.12)), url(${mediaPreview?.url})`, backgroundPosition: "center", backgroundSize: "cover" } : undefined}><span className="absolute left-5 top-5 rounded-full border border-white/25 bg-slate-950/55 px-3 py-2 text-xs font-black uppercase tracking-widest text-white backdrop-blur">Gutschein</span>{mediaPreview?.type === "application/pdf" ? <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-2 text-xs font-black text-white">PDF</span> : null}<div><p className="text-sm font-bold text-cyan-100">{location}</p><p className="mt-2 text-5xl font-black text-white">{amount}</p></div></div>
    <div className="p-6"><h2 className="text-2xl font-black text-white">{values.title.trim() || "Dein Gutschein-Titel"}</h2><p className="mt-3 min-h-12 text-sm leading-6 text-slate-300">{values.description.trim() || "Die Beschreibung des Gutscheins erscheint hier für deine Kundinnen und Kunden."}</p>{values.minimum_purchase_amount ? <p className="mt-4 text-xs font-bold text-amber-200">Mindestkauf: {Number(values.minimum_purchase_amount).toLocaleString("de-AT", { minimumFractionDigits: 2 })} €</p> : null}<div className="mt-5 rounded-2xl border border-dashed border-cyan-300/35 bg-cyan-300/[0.07] p-4 text-center"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Kassencode</p><p className="mt-2 font-mono text-xl font-black tracking-wider text-cyan-200">{values.redemption_code.trim().toUpperCase() || "WIRD AUTOMATISCH ERSTELLT"}</p></div>{values.conditions.trim() ? <p className="mt-4 text-xs leading-5 text-slate-400">{values.conditions}</p> : null}</div>
  </div><p className="mt-3 text-xs leading-5 text-slate-500">Die Vorschau zeigt Inhalt und Wirkung. Das endgültige App-Layout kann je nach Smartphone leicht abweichen.</p></aside>;
}

function Field({ name, label, value, onChange, type = "text", required = false, ...props }: { name: string; label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean; [key: string]: unknown }) {
  return <label className="grid gap-2 text-xs font-black uppercase text-slate-300">{label}<input name={name} type={type} required={required} value={value} onChange={event => onChange(event.target.value)} {...props} className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case" /></label>;
}
