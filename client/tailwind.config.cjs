/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },
    },
    colors: {
      bgWhite: "#F0F2F4",
      white: "#FFFFFF",
      highlight: "#10AB71",
    },
    extend: {},
  },
  plugins: [],
};
