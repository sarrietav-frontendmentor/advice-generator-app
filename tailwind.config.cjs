/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manroped: ["Manrope", "sans-serif"],
      },
      keyframes: {
        "spin-shrink": {
          from: { transform: "rotate(0deg) scale(.75)" },
          to: { transform: "rotate(360deg) scale(.75)" },
        }
      },
      animation: {
        "spin-shrink": "spin-shrink 1s linear infinite",
      }
    },
  },
  plugins: [],
}
