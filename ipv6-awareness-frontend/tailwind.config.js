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
          DEFAULT: '#00C389', // Your requested consistent green
          light: '#33E0A0',   // A lighter shade of #00C389
          dark: '#009A6E',    // A darker shade of #00C389
        },
        secondary: {
          DEFAULT: '#00C389', // Matches primary for consistency
          light: '#33E0A0',
          dark: '#009A6E',
        },
        accent: {
          DEFAULT: '#00C389', // Gold (keeping this as a separate accent)
          light: '#FFE44D',
          dark: '#CCAC00',
        },
        // Dark mode specific colors
        dark: {
          bg: {
            primary: '#0A0A0A',    // Very dark background
            secondary: '#121212',  // Slightly lighter dark
            tertiary: '#1A1A1A',   // For cards and elevated surfaces
          },
          text: {
            primary: '#E0E0E0',    // Light gray for primary text
            secondary: '#A0A0A0',  // Muted gray for secondary text
            accent: '#00FF9D',     // Cyan accent for highlights
          },
          border: '#2A2A2A',       // Subtle border color
        }
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
