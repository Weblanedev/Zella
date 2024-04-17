/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-1000": "#0C1428",
        "blue-1000": "#000"
      }
    },
  },
  plugins: [],
}