/**
 * Babel Configuration
 * This configuration file sets up Babel presets for transpiling TypeScript files in a Jest environment.
 * It ensures that Jest can parse TypeScript files by configuring the appropriate presets.
 * @see {@link https://jestjs.io/docs/getting-started#using-typescript}
 * @type {import("@babel/core").ConfigFunction}
 */
const config = {
  presets: [
    // Target the current Node.js version
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    // Transpiling TypeScript code
    "@babel/preset-typescript"
  ]
};

module.exports = config;
