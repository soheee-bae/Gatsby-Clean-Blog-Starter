module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["react"],
  globals: {
    __PATH_PREFIX__: true,
    graphql: false,
  },
  extends: `react-app`,
};
