/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ctred": "#9F2521"
      },
      backgroundImage: {
        "hero": "url(https://static.compliancetrainingonline.com/images/hero-home.jpg)"
      }
    },
  },
  plugins: [],
}
