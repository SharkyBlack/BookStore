/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // This enables the manual 'dark' class toggling
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}