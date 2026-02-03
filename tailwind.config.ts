import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        accent: {
          purple: "#6f42c1",
          pink: "#ff69b4"
        },
        ink: "#333333"
      },
      boxShadow: {
        glass:
          "0 4px 30px rgba(0,0,0,0.1), inset 0 0 24px rgba(255,255,255,0.12)",
        neumorphic:
          "8px 8px 18px rgba(0,0,0,0.12), -8px -8px 18px rgba(255,255,255,0.6), inset 0 0 18px rgba(255,255,255,0.24)"
      },
      backgroundImage: {
        "gradient-sheen":
          "linear-gradient(135deg, rgba(0,123,255,0.35), rgba(111,66,193,0.3), rgba(255,105,180,0.3))",
        "frosted-radial":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.12), transparent 45%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.95" }
        },
        noise: {
          "0%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-2%, -2%, 0)" },
          "100%": { transform: "translate3d(2%, 2%, 0)" }
        },
        drift: {
          "0%": { transform: "translate3d(0px, 0px, 0px)" },
          "50%": { transform: "translate3d(18px, -12px, 0px)" },
          "100%": { transform: "translate3d(0px, 0px, 0px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
        noise: "noise 2s steps(2) infinite",
        drift: "drift 12s ease-in-out infinite"
      },
      borderRadius: {
        "4xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
