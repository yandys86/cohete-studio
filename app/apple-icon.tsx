import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A14",
          backgroundImage:
            "linear-gradient(135deg, #1A1A2E 0%, #0A0A14 50%, #0F1B33 100%)",
          borderRadius: 40
        }}
      >
        <svg width="118" height="118" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="55%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#g)"
            d="M 100 26 C 117 46, 124 72, 124 98 L 124 132 Q 140 138, 154 158 Q 138 154, 124 153 L 124 158 Q 124 168, 117 172 L 83 172 Q 76 168, 76 158 L 76 153 Q 62 154, 46 158 Q 60 138, 76 132 L 76 98 C 76 72, 83 46, 100 26 Z"
          />
          <circle cx="100" cy="82" r="8" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
