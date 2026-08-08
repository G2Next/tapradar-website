"use client";

import { useState } from "react";

export function GeocodeAddressButton() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function locate(event: React.MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.closest("form");
    if (!form) return;
    const value = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null)?.value.trim() ?? "";
    const address = value("address");
    const postalCode = value("postal_code");
    const city = value("city");
    const country = value("country_code") || "AT";
    if (!address || !postalCode || !city) { setMessage("Bitte zuerst Straße, PLZ und Ort ausfüllen."); return; }
    setLoading(true); setMessage("");
    try {
      const response = await fetch(`/api/geocode?q=${encodeURIComponent(`${address}, ${postalCode} ${city}`)}&country=${encodeURIComponent(country)}`);
      const result = await response.json() as { latitude?: number; longitude?: number; display_name?: string; error?: string };
      if (!response.ok || result.latitude === undefined || result.longitude === undefined) throw new Error(result.error);
      (form.elements.namedItem("latitude") as HTMLInputElement).value = String(result.latitude);
      (form.elements.namedItem("longitude") as HTMLInputElement).value = String(result.longitude);
      setMessage(`✓ Position gefunden: ${result.display_name}`);
    } catch { setMessage("Adresse nicht gefunden. Bitte Schreibweise prüfen."); }
    finally { setLoading(false); }
  }

  return <div className="md:col-span-2 lg:col-span-3"><button type="button" onClick={locate} disabled={loading} className="rounded-xl border border-cyan-300/40 bg-cyan-300/10 px-4 py-3 text-sm font-black text-cyan-200 disabled:opacity-60">{loading ? "Position wird gesucht …" : "Position automatisch aus Adresse ermitteln"}</button>{message ? <p className="mt-2 text-sm text-slate-300">{message}</p> : null}<p className="mt-2 text-xs text-slate-500">Die Koordinaten werden automatisch über OpenStreetMap ermittelt und können danach kontrolliert werden.</p></div>;
}
