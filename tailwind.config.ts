import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'monep-deep': '#093F59',   // Azul Profundo (Fondo)
        'monep-teal': '#114B5F',   // Teal (Superficies)[cite: 1]
        'monep-accent': '#FF4F1F', // Naranja (Acción)[cite: 1]
        'monep-sand': '#D7CEB2',   // Beige (Títulos Premium)[cite: 1]
        'monep-slate': '#93A8AC',  // Gris Azulado (Textos)[cite: 1]
      },
    },
  },
  plugins: [],
};
export default config;
