const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    enabled: production,
    content: ['./src/**/*.svelte', './src/**/*.html'],
    options: {
      keyframes: true,
      safelist: ['bg-gray-200'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
