/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        ColateraSoft: "ColateraSoft",
      },
      backgroundImage: {
        'mountain' : "url('../public/mountain.png')",
      },
      
    },
  },
  plugins: [],
}