/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        MGray: '#909090',
        primary: '#00ACFF'
      }
    },
  },
  plugins: [],
};
