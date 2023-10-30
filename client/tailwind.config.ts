/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        MGray: '#909090',
        primary: '#00ACFF',
        lightBlue: '#00ACFF75',
        primaryMedium: '#A1E1FF7D',
        primaryLight: '#D2F0FF69',
        textSecondary: '#00000075',
        lightGrey: '#F6F6F6',
      },
      fontFamily: {
        pacifico: ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [],
};
