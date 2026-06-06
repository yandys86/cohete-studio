import { ImageResponse } from "next/og";

export const alt = "Cohete Studio — Agencia de marketing en Houston, TX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#0A0A14",
          backgroundImage:
            "linear-gradient(135deg, #1F1F35 0%, #0A0A14 60%, #0F1B33 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          position: "relative"
        }}
      >
        {/* Decorative gradient blob top-right */}
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -150,
            width: 600,
            height: 600,
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(168,85,247,0) 70%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 200,
            width: 500,
            height: 500,
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(6,182,212,0) 70%)"
          }}
        />

        {/* Top row: rocket icon + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px", marginBottom: "40px" }}>
          <svg width="84" height="84" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="og-grad" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="55%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <path
              fill="url(#og-grad)"
              d="M 100 26 C 117 46, 124 72, 124 98 L 124 132 Q 140 138, 154 158 Q 138 154, 124 153 L 124 158 Q 124 168, 117 172 L 83 172 Q 76 168, 76 158 L 76 153 Q 62 154, 46 158 Q 60 138, 76 132 L 76 98 C 76 72, 83 46, 100 26 Z"
            />
            <circle cx="100" cy="82" r="9" fill="#FFFFFF" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em" }}>
              Cohete Studio
            </div>
            <div style={{ display: "flex", fontSize: 18, color: "#A855F7", letterSpacing: "0.18em", marginTop: 4 }}>
              HOUSTON, TX
            </div>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            fontSize: 86,
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            maxWidth: 980
          }}
        >
          Lanzamos marcas
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 86,
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            backgroundImage: "linear-gradient(90deg, #C084FC 0%, #06B6D4 100%)",
            backgroundClip: "text",
            color: "transparent"
          }}
        >
          a la estratosfera.
        </div>

        {/* Sub */}
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 24,
            color: "rgba(255,255,255,0.72)"
          }}
        >
          Branding · Web · Ads · SEO · Contenido · Estrategia
        </div>
      </div>
    ),
    { ...size }
  );
}
