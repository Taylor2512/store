/** @type {import('postcss-load-config').Config} */
const config = {
  parser: 'postcss-scss',
  plugins: {
    tailwindcss: {},
    autoprefixer: {},

  },
};

export default config;