import { ImageResponse } from "next/og";

export const alt = "TapRadar – alle Stempelkarten und Belohnungen in einer App";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px 84px",
        color: "white",
        background: "linear-gradient(135deg, #020617 0%, #061827 55%, #0b4f63 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 720 }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 44, fontWeight: 800 }}>
          Tap<span style={{ color: "#67e8f9" }}>Radar</span>
        </div>
        <div style={{ display: "flex", marginTop: 52, fontSize: 64, lineHeight: 1.08, fontWeight: 800 }}>
          Alle Stempelkarten. Alle Belohnungen. Eine App.
        </div>
        <div style={{ display: "flex", marginTop: 34, fontSize: 27, color: "#cbd5e1" }}>
          Lokal entdecken · per NFC oder QR sammeln · kostenlos nutzen
        </div>
      </div>
      <div style={{ position: "relative", display: "flex", width: 300, height: 300, alignItems: "center", justifyContent: "center" }}>
        {[300, 220, 140].map((diameter) => (
          <div key={diameter} style={{ position: "absolute", width: diameter, height: diameter, border: "3px solid rgba(103,232,249,.38)", borderRadius: "50%" }} />
        ))}
        <div style={{ display: "flex", width: 38, height: 38, borderRadius: "50%", background: "#67e8f9", boxShadow: "0 0 55px #22d3ee" }} />
        <div style={{ position: "absolute", top: 45, right: 36, display: "flex", width: 24, height: 24, borderRadius: "50%", background: "#fbbf24" }} />
      </div>
    </div>,
    size,
  );
}
