const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    enabled: production,
    content: ['./src/**/*.svelte', './src/**/*.html'],
    options: {
      keyframes: true,
      // considers dynamic class bindings when purging unused classes
      // credit: https://github.com/matebek https://dev.to/matebek
      defaultExtractor: (content) => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
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
