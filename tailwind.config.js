/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'brand': {
          50: '#fcf9f5',
          100: '#f7f1e6',
          200: '#efe0cb',
          300: '#e5cba9',
          400: '#dbb080',
          500: '#d39860',
          600: '#c88049',
          700: '#a6653e',
          800: '#875336',
          900: '#6d452f',
          950: '#3a2317',
        }
      }
    },
  },
  plugins: [],
}