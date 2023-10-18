/**
 * ESLint Configuration
 * This configuration file defines ESLint rules for linting TypeScript code
 * It specifies environments, extends existing configurations, parser options, plugins, and custom linting rules
 * @type {import("eslint").Linter.Config}
 */
const config = {
  // Specify the environments where the code will run
  env: {
    // Enables browser global variables
    browser: true,
    // Enables ES2021 global variables
    es2021: true,
    // Enables Node.js global variables and Node.js scoping
    node: true
  },
  // Ignore specific files or directories from linting.
  ignorePatterns: ["dist"],
  // Extend ESLint configurations for JavaScript and TypeScript.
  extends: [
    // Uses ESLint's recommended rules
    "eslint:recommended",
    // Uses recommended TypeScript rules
    "plugin:@typescript-eslint/recommended",
    // Uses Prettier's recommended rules for formatting
    "plugin:prettier/recommended"
  ],
  // Specify the parser for TypeScript code
  parser: "@typescript-eslint/parser",
  // Specify parser options
  parserOptions: {
    // Set the ECMAScript version to the latest
    ecmaVersion: "latest",
    // Use ECMAScript modules
    sourceType: "module"
  },
  // Specify ESLint plugins used in the configuration
  plugins: ["@typescript-eslint"],
  // Define custom linting rules
  rules: {
    // Enforces camelcase naming convention for variables and properties
    "camelcase": "error",
    // Requires a space or tab after the // in a comment
    "spaced-comment": "error",
    // Disallows duplicate module imports
    "no-duplicate-imports": "error",
    // Enforces the use of braces around the body of an arrow function when it's necessary
    "arrow-body-style": ["error", "as-needed"],
    // Enforces consistent type assertion style (never use 'as' syntax).
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "never"
      }
    ]
  }
};

module.exports = config;
