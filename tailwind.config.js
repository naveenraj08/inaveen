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
        instagram: "var(--insta-gradient)",
      },
    },
    fontFamily: {
      regular: "Rubik-regular",
      medium: "Rubik-medium",
      semibold: "Rubik-semibold",
      bold: "Rubik-bold",
      extrabold: "Rubik-extrabold",
      black: "Rubik-black",
    },
  },
  plugins: [],
};
