/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004D00', // Dark Green
          light: '#006600',
          dark: '#003300',
        },
        secondary: {
          DEFAULT: '#00FF00', // Lime Green
          light: '#33FF33',
          dark: '#00CC00',
        },
        accent: {
          DEFAULT: '#FFD700', // Gold
          light: '#FFE44D',
          dark: '#CCAC00',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out forwards',
        slideUp: 'slideUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
