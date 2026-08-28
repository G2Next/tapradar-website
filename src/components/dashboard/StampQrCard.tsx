"use client";

import { QRCodeSVG } from "qrcode.react";
import { useRef, useState } from "react";
import { deviceMessages, type DeviceMessages } from "@/i18n/devices";

export function StampQrCard({ stampUrl, deviceName, messages = deviceMessages.de }: { stampUrl: string; deviceName?: string; messages?: DeviceMessages }) {
  const qrRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  async function copyUrl() {
    await navigator.clipboard.writeText(stampUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function downloadQr() {
    const svg = qrRef.current?.querySelector("svg");
    if (!svg) return;
    let source = new XMLSerializer().serializeToString(svg);
    if (!source.includes("xmlns=")) source = source.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
    const url = URL.createObjectURL(new Blob([source], { type: "image/svg+xml;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `${(deviceName ?? "tapradar-geraet").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "tapradar-geraet"}-qr.svg`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  return (
    <div className="print-device-qr rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
      <h2 className="text-xl font-black">{deviceName ? `${messages.qrFor} ${deviceName}` : "QR / NFC Stempel-Link"}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Diesen Link kannst du später auf einen QR-Code drucken oder auf einen NFC-Tag schreiben.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-[180px_1fr] md:items-center">
        <div ref={qrRef} className="inline-flex rounded-3xl bg-white p-4">
          <QRCodeSVG value={stampUrl} size={148} level="M" />
        </div>
        <div>
          <p className="break-all rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-slate-200">
            {stampUrl}
          </p>
          <a href={stampUrl} className="mt-4 inline-flex font-black text-cyan-300">
            Stempel-Seite öffnen
          </a>
          <div className="mt-4 flex flex-wrap gap-2 print:hidden">
            <button type="button" onClick={() => void copyUrl()} className="rounded-xl bg-white/10 px-3 py-2 text-sm font-black text-white">{copied ? messages.copied : messages.copyLink}</button>
            <button type="button" onClick={downloadQr} className="rounded-xl bg-white/10 px-3 py-2 text-sm font-black text-white">{messages.downloadQr}</button>
            <button type="button" onClick={() => window.print()} className="rounded-xl bg-white/10 px-3 py-2 text-sm font-black text-white">{messages.print}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
