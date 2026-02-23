import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3D9991",
        "accent": "#3D9991",
        "background": "#1F1F1F",
        "textPrimary": "#1F1F1F",
        "link": "#3D9991",
        "foreground": "#1F1F1F",
        "border": "#e5e7eb",
        "teal": {
          DEFAULT: "#3D9991",
          light: "#5BBDB5",
          dark: "#2D736D",
        },
        "gold": {
          DEFAULT: "#D4A84B",
          light: "#E8C76F",
          dark: "#B8923E",
        },
      },
      fontFamily: {
        "sans": ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        "serif": ["var(--font-playfair)", "Georgia", "serif"],
        "primary": ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        "heading": ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
