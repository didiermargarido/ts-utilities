// Util
import { isDefined } from "../";

/**
 * Unit Tests
 * @example script: `npm test -- -t "isDefined"`
 */
describe("Util > isDefined", () => {
  // Defined value
  it("should return true if value is defined", () => {
    const values = ["DM", 1000, ["DM"], [], {}, 0, "", () => {}];
    values.forEach((value) => expect(isDefined(value)).toBe(true));
  });

  // Not defined value
  it("should return false if value is not defined", () => {
    const values = [undefined, null];
    values.forEach((value) => expect(isDefined(value)).toBe(false));
  });
});
