/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D54215",

          secondary: "#E29F28",

          accent: "#60dba6",

          neutral: "#26212B",

          "base-100": "#FCFCFD",

          info: "#2578F4",

          success: "#165A52",

          warning: "#F3A81B",

          error: "#FA6D66",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
