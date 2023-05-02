/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b0f28c",

          secondary: "#ea4656",

          accent: "#59b726",

          neutral: "#2C2C3A",

          "base-100": "#FCFCFD",

          info: "#80C6E0",

          success: "#1B7958",

          warning: "#EBA637",

          error: "#F05181",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
