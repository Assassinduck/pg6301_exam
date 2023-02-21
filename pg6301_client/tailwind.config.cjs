/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "loginBackground": "url(/public/LoginBackground.svg)",
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],

}
