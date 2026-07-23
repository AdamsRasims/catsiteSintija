import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sage-deep": "#3F4736",
        "sage-mid": "#5B664B",
        cream: "#F4EFDF",
        paper: "#EAE2CC",
        copper: "#8B4A2A",
        "copper-light": "#B9743E",
        ink: "#2A2A20",
        "ink-soft": "#5A5A48",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
