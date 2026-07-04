import { ImageResponse } from "next/og";
import { site } from "./data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Trusted Global Sourcing`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #152211 0%, #1f3319 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#46ec13",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          ● {site.name}
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Trusted Importer of Quality Products
        </div>
        <div style={{ color: "#9fc992", fontSize: 32, marginTop: 24, maxWidth: 800 }}>
          Global sourcing, inspection & delivery for wholesalers and retailers.
        </div>
      </div>
    ),
    { ...size }
  );
}
