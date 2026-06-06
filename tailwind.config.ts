import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A14",     // base background, deep almost-black with hint of blue
          deep:    "#050509",
          soft:    "#11111F",
          line:    "#1F1F35"
        },
        violet: {
          DEFAULT: "#A855F7",
          deep:    "#7C3AED",
          glow:    "#C084FC"
        },
        cyan: {
          DEFAULT: "#06B6D4",
          deep:    "#0891B2",
          glow:    "#22D3EE"
        },
        blue: {
          glow:    "#60A5FA"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans:    ["var(--font-sans)",    "system-ui", "sans-serif"]
      },
      letterSpacing: {
        wide2: "0.08em",
        wide3: "0.16em"
      },
      backgroundImage: {
        "violet-cyan": "linear-gradient(135deg, #A855F7 0%, #6366F1 50%, #06B6D4 100%)",
        "violet-blue": "linear-gradient(135deg, #A855F7 0%, #3B82F6 100%)",
        "cyan-violet": "linear-gradient(135deg, #06B6D4 0%, #A855F7 100%)"
      },
      animation: {
        "blob-1": "blob1 20s ease-in-out infinite",
        "blob-2": "blob2 22s ease-in-out infinite",
        "blob-3": "blob3 26s ease-in-out infinite",
        "float":  "float  6s ease-in-out infinite"
      },
      keyframes: {
        blob1: {
          "0%, 100%": { transform: "translate(0,0) scale(1)"     },
          "33%":      { transform: "translate(60px,-40px) scale(1.1)" },
          "66%":      { transform: "translate(-30px,30px) scale(0.95)" }
        },
        blob2: {
          "0%, 100%": { transform: "translate(0,0) scale(1)"      },
          "33%":      { transform: "translate(-50px,40px) scale(1.05)" },
          "66%":      { transform: "translate(40px,-20px) scale(0.9)"  }
        },
        blob3: {
          "0%, 100%": { transform: "translate(0,0) scale(1)"      },
          "33%":      { transform: "translate(30px,50px) scale(0.95)" },
          "66%":      { transform: "translate(-40px,-30px) scale(1.1)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
