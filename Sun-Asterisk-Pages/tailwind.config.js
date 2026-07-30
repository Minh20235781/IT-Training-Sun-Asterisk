/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.html",
    "./src/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D2232A",
        "primary-dark": "#A91B21",
        dark: "#2B2E38",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};