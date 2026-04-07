/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6D00",
        secondary: "#000000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
}
