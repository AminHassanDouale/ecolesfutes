import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#f0fbfb",
          100: "#d1f1f0",
          200: "#a8e4e2",
          300: "#7acfcc",
          400: "#5BBCB8",
          500: "#3d9e9a",
          600: "#2d807d",
          700: "#266765",
          800: "#225352",
          900: "#1f4645",
          DEFAULT: "#5BBCB8",
          light: "#7DCFCB",
          dark: "#3D9E9A",
        },
        orange: {
          DEFAULT: "#E8522A",
          light: "#F07050",
          dark: "#C43E1A",
          50: "#fef5f1",
          100: "#fde8df",
          400: "#E8522A",
          500: "#d44420",
          600: "#b53517",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#DDB84A",
          dark: "#A68615",
          50: "#fdf9ee",
          100: "#f8efcc",
          400: "#C9A227",
          500: "#b08d1f",
          600: "#917318",
        },
        navy: {
          DEFAULT: "#1A3A5C",
          light: "#2A527A",
          dark: "#0F2238",
          50: "#f0f5fb",
          100: "#d8e6f5",
          900: "#1A3A5C",
        },
        cream: {
          DEFAULT: "#FFFAF2",
          dark: "#F5EDD8",
          100: "#FFFAF2",
          200: "#FFF3DC",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "scale-in": "scaleIn 0.5s ease-out",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        scaleIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(91, 188, 184, 0.3)",
        "glow-orange": "0 0 30px rgba(232, 82, 42, 0.3)",
        "glow-gold": "0 0 30px rgba(201, 162, 39, 0.3)",
        card: "0 8px 32px rgba(26, 58, 92, 0.12)",
        "card-hover": "0 20px 60px rgba(26, 58, 92, 0.2)",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 20% 80%, rgba(91,188,184,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,162,39,0.1) 0%, transparent 50%)",
        "gradient-teal":
          "linear-gradient(135deg, #5BBCB8 0%, #3D9E9A 100%)",
        "gradient-navy":
          "linear-gradient(135deg, #1A3A5C 0%, #0F2238 100%)",
        "gradient-warm":
          "linear-gradient(135deg, #FFFAF2 0%, #F5EDD8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
