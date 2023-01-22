/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7751EA",
        about: "#374579",
        facebook: "#3b5998",
        linkedin: "#0A66C2",
        instagram: "var(--inta-gradient)"
      }
    },
    fontFamily: {
      Rubik: {
        Regular: ['rubik-regular', 'sans-serif'],
        Medium: ['rubik-medium', 'sans-serif'],
        SemiBold: ['rubik-semi-bold', 'sans-serif'],
        Bold: ['rubik-bold', 'sans-serif'],
        ExtraBold: ['rubik-extra-bold', 'sans-serif'],
        Black: ['rubik-black', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
