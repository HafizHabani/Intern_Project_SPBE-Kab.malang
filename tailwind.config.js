/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ffffff",
          "secondary": "#ffffff",
          "accent": "#ffffff",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
          "info": "#ffffff",
          "success": "#11ff01",
          "warning": "#ffffff",
          "error": "#ffffff",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        screens: {
          xs: "480px",
          ss: "620px",
          sm: "768px",
          md: "1060px",
          lg: "1200px",
          xl: "1700px",
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
};