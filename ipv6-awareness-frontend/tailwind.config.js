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
          DEFAULT: '#228B22', // Forest Green (Your specified default)
          light: '#4FBE4F',   // A noticeably lighter shade of Forest Green
          dark: '#1A6B1A',    // A noticeably darker shade of Forest Green
        },
        secondary: {
          DEFAULT: '#228B22', // Forest Green (Matches primary for consistency, as per your original request)
          light: '#4FBE4F',
          dark: '#1A6B1A',
        },
        accent: {
          DEFAULT: '#FFD700', // Gold
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
