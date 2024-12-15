/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],

  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'], // Add Comfortaa font
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      gray: '#e0e5e9',
      red: '#F44336',
      blue: '#0a62D0',
      black: '#191718',
    },
  },
  plugins: [],
};
