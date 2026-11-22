/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#EA580C",
          amber: "#F59E0B",
          yellow: "#FBBF24",
          dark: "#070B14",
          slate: "#0B1120",
          card: "#0F172A",
          border: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        sinhala: ["var(--font-sinhala)", "Noto Sans Sinhala", "sans-serif"],
      },
    },
  },
  plugins: [],
};
