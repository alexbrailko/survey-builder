/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1240px',
      },
    },
    screens: {
      xs: { max: '500px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
