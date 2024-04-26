/** @type {import('tailwindcss').Config} */
module.exports = {
  important: false,
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '6xl': '4rem', // Adjust the size as needed
      },
      fontWeight: {
        'bold': 'bold', // Adjust the weight as needed
      },
      colors: {
        'navy': '#00215E',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}