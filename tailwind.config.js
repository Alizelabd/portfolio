/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffc857",
        secondary: "#c5283d",
        dark: "#212121",
        darkSecondary: "#262626"
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif']
      }
    },
  },
  plugins: [],
}