"use client";

import { QRCodeSVG } from "qrcode.react";

export function StampQrCard({ stampUrl }: { stampUrl: string }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">
      <h2 className="text-xl font-black">QR / NFC Stempel-Link</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Diesen Link kannst du später auf einen QR-Code drucken oder auf einen NFC-Tag schreiben.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-[180px_1fr] md:items-center">
        <div className="inline-flex rounded-3xl bg-white p-4">
          <QRCodeSVG value={stampUrl} size={148} level="M" />
        </div>
        <div>
          <p className="break-all rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-slate-200">
            {stampUrl}
          </p>
          <a href={stampUrl} className="mt-4 inline-flex font-black text-cyan-300">
            Stempel-Seite öffnen
          </a>
        </div>
      </div>
    </div>
  );
}
