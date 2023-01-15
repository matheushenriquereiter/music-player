/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#2A2141",
      black: "#0F0D13",
      white: { 100: "#E1E1E6", 200: "#D9D9D9" },
    },
    extend: {},
  },
  plugins: [],
};
