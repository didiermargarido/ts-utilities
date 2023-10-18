/**
 * Prettier Configuration
 * This configuration file defines Prettier formatting options for consistent code styling.
 * It specifies print width, quoting style for object properties, trailing commas, and prose wrapping settings.
 * @type {import("prettier").Config}
 */
const config = {
  // Maximum line width for the formatted output
  printWidth: 100,
  // Preserve quotes around object properties only when necessary for valid syntax
  quoteProps: "consistent",
  // Do not add trailing commas at the end of objects or arrays
  trailingComma: "none",
  // Wrap markdown text (such as comments) to the next line if it exceeds the print width
  proseWrap: "always"
};

module.exports = config;
