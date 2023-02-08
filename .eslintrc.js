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
  rules: {
    "react-hooks/exhaustive-deps": 0,
  },
  extends: `react-app`,
};
