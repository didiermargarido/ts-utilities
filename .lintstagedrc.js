/**
 * Lint Staged Configuration
 * Configuration for lint-staged, a tool that runs linters on pre-committed files.
 * This configuration specifies ESLint with the --fix option for JS, TS, and JSON files.
 * @type {Object}
 */
const config = {
  "**/*.{js,ts,json}": "eslint --fix"
};

module.exports = config;
