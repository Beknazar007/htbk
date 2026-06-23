import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        brand: {
          black: "#0B0B0B",
          white: "#FFFFFF",
          navy: "#002C5F",
          accent: "#0072BC",
          "accent-hover": "#005A96",
          "accent-light": "#00AAD2",
        },
        kuma: {
          50: "#f0f4f8",
          100: "#dce6ef",
          200: "#b8cde0",
          300: "#7a9fbf",
          400: "#3d7299",
          500: "#0A2540",
          600: "#091f36",
          700: "#07192b",
          800: "#051320",
          900: "#030c15",
          950: "#0B0B0B",
        },
        noor: {
          50: "#f0fdf8",
          100: "#ccfbf0",
          200: "#99f6e0",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        gold: {
          400: "#f5c842",
          500: "#d4a017",
          600: "#b8860b",
        },
        cream: {
          50: "#fdfcf8",
          100: "#f9f6ef",
          200: "#f3ede0",
        },
        ktm: {
          navy: "#071A33",
          red: "#C62828",
          "red-hover": "#B71C1C",
          gray: "#F3F4F6",
          "gray-dark": "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-amiri)", "serif"],
      },
      backgroundImage: {
        "noor-gradient": "linear-gradient(135deg, #0f766e 0%, #134e4a 50%, #042f2e 100%)",
        "gold-shine": "linear-gradient(135deg, #d4a017 0%, #f5c842 50%, #d4a017 100%)",
        "kuma-hero": "linear-gradient(180deg, rgba(11,11,11,0.88) 0%, rgba(10,37,64,0.65) 50%, rgba(10,37,64,0.35) 100%)",
        "kuma-gradient": "linear-gradient(135deg, #0B0B0B 0%, #0A2540 50%, #0A2540 100%)",
        "brand-accent-gradient": "linear-gradient(135deg, #002C5F 0%, #0072BC 55%, #00AAD2 100%)",
        "ktm-hero": "linear-gradient(180deg, rgba(7,26,51,0.15) 0%, rgba(7,26,51,0.75) 55%, rgba(7,26,51,0.95) 100%)",
        "ktm-red-gradient": "linear-gradient(135deg, #C62828 0%, #E53935 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
