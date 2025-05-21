/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}", // Covers JS, TS, and potential UI framework files
  ],
  theme: {
    extend: {
      // TechNova's custom palette will be added here later
      // Fluid typography settings will be added here later
    },
  },
  plugins: [],
}
