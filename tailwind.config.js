/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif']
      },
      screens: {
        'sm': '421px',
        // => @media (min-width: 992px) { ... }
      },
    },
  
  },
  plugins: [],
}
