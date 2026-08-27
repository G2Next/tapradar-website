import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 38,
        background: "#061827",
      }}
    >
      <div style={{ position: "relative", display: "flex", width: 132, height: 132, alignItems: "center", justifyContent: "center" }}>
        {[132, 88].map((diameter) => (
          <div key={diameter} style={{ position: "absolute", width: diameter, height: diameter, border: "7px solid #22d3ee", borderRadius: "50%", opacity: diameter === 132 ? .45 : .75 }} />
        ))}
        <div style={{ display: "flex", width: 28, height: 28, borderRadius: "50%", background: "#67e8f9" }} />
        <div style={{ position: "absolute", top: 13, right: 18, display: "flex", width: 18, height: 18, borderRadius: "50%", background: "#fbbf24" }} />
      </div>
    </div>,
    size,
  );
}
