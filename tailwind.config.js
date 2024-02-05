/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#55A935",
          "secondary": "#ffffff",
          "accent": "#ffffff",
          "neutral": "#f1f1f1",
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
        extend:{
          backgroundImage: {
            'sambutan': "url('/BgSambutan.png')",
          },
        }
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
};