/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#029354",
        "primary-dark": "#0f4c36",
      },
      screens: {
        "1xs": "375px",
      },
    },
  },
  plugins: [],
};
