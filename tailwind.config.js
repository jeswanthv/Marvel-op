module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#33A9FF',
        secondary: '#FF3395',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
