import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["var(--font-pixel)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "Arial Rounded MT Bold", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        arcade: "10px 10px 0 #111827",
        soft: "0 24px 70px rgba(17, 24, 39, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
