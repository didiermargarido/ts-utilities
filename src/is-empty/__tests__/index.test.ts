// Util
import { isEmpty } from "../";

/**
 * Unit Tests
 * @example script: `npm test -- -t "isEmpty"`
 */
describe.only("Util // isEmpty", () => {
  // Empty value
  it("should return true if value is empty", () => {
    const values = ["", [], {}, null, undefined];
    values.forEach((value) => expect(isEmpty(value)).toBe(true));
  });

  // Not empty values
  it("should return false if value is not empty", () => {
    const values = ["DM", 0, ["Frank"], [0], { key: "DM" }, false];
    values.forEach((value) => expect(isEmpty(value)).toBe(false));
  });

  // Error for functions
  it("should throw an error if a function is passed as value", () => {
    expect(() => {
      isEmpty(() => {});
    }).toThrowError("Functions are not allowed as value for the `isEmpty` util.");
  });
});
