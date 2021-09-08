module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#583D72',
        'secondary-color': '#9F5F80',
        'light-color': '#CCCCCC',
        'accent-color': '#FF8E71',
      },
      backgroundPosition: {
        bgImagePosition: 'center bottom -82rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
