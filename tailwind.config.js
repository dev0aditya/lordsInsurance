/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Host Grotesk", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#fdfdfe",
          darker: "#f1f1f3",
          darkest: "#5A636a",
        },
        secondary: {
          DEFAULT: "#0d1f23",
          lighter: "#132e35",
          lightest: "#2d4a53",
        },
      },
    },
  },
  plugins: [],
};
