/**
 * Commitlint Configuration
 * This configuration file defines rules for validating commit messages using Commitlint.
 * It specifies the rule set to extend and defines conditions to ignore specific commit messages.
 * @type {import("@commitlint/types").UserConfig}
 */
const config = {
  // Extend the configuration with conventional commit message rules
  extends: ["@commitlint/config-conventional"],
  // Define conditions to ignore specific commit messages
  ignores: [
    // Ignore automatic release messages (chore(release): ...)
    (commit) => commit.includes("chore(release):"),
    // Ignore merge commits (Merge ...)
    (commit) => commit.includes("Merge ")
  ]
};

module.exports = config;
