const Dotenv = require("dotenv-webpack");

module.exports = {
  // ... other config options
  plugins: [new Dotenv()],
  resolve: {
    fallback: { path: require.resolve("path-browserify") },
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
};
