/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldenPink: '#DAA49A',
        primary: "#d3b8b8",
        secondary: "#695c5c",
      },
    },
  },
  plugins: [],
}