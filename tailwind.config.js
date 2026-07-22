/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#050816",
        surface: "#0A0F24",
        line: "#1B2140",
        ink: "#E7E9F5",
        muted: "#8A90B3",
        blue: {
          DEFAULT: "#3B6BFF",
          soft: "#5C82FF",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          soft: "#A78BFA",
        },
        cyan: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)",
        "signal-gradient":
          "linear-gradient(90deg, #3B6BFF 0%, #8B5CF6 50%, #22D3EE 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139,92,246,0.45)",
        "glow-blue": "0 0 40px -8px rgba(59,107,255,0.45)",
        "glow-cyan": "0 0 40px -8px rgba(34,211,238,0.45)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(20px, -30px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        traceMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        drift: "drift 12s ease-in-out infinite",
        "drift-slow": "drift 18s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        trace: "traceMove 6s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
