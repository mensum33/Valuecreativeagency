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
        ivory: "#FFF8EE",
        rich: "#111111",
        navy: "#0E1B2A",
        accent: "#F26A21",
        sky: "#DDF4FF",
        border: "#E8DED2",
        muted: "#6F6A60",
        trust: "#168A4A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1320px",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(14, 27, 42, 0.08)",
        "card-hover": "0 12px 40px -8px rgba(14, 27, 42, 0.14)",
        premium: "0 2px 8px rgba(14, 27, 42, 0.06), 0 8px 32px rgba(14, 27, 42, 0.04)",
      },
      backgroundImage: {
        paper: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8DED2' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        grid: "linear-gradient(to right, #E8DED2 1px, transparent 1px), linear-gradient(to bottom, #E8DED2 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
