
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "preto": "#2e2e2d",
      "rosa": "#d12128",
      "branco": "#E8E8E3",
      "cinza": "#272727",
      "cinza2": "#1a1818"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "greve": "url('/fundo.png')",
      },
    }, fontFamily: {
      podvoka: ['var(--font-podvoka)'],
      montserrat: ['var(--font-montserrat)'],
    }
  },
  plugins: [],
};
export default config;

