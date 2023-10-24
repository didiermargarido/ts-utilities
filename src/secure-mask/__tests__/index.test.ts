// Util
import { secureMask } from "../";

/**
 * Unit Tests
 * @example script: `npm test -- -t "secureMask"`
 */
describe("Util > secureMask", () => {
  // Default string
  it("should return string masked with default options", () => {
    expect(secureMask("123456789")).toEqual("*****6789");
  });

  // Default number
  it("should return number masked with default options", () => {
    expect(secureMask(123456789)).toEqual("*****6789");
  });

  // Digits option
  it("should return string masked with 2 digits revealed", () => {
    expect(secureMask("123456789", { digits: 2 })).toEqual("*******89");
  });

  // Char option
  it("should return string masked with char '-'", () => {
    expect(secureMask("123456789", { char: "-" })).toEqual("-----6789");
  });

  // Pad option
  it("should return number with last digits masked", () => {
    expect(secureMask(123456789, { pad: "end" })).toEqual("1234*****");
  });

  // All options
  it("should return number with last 6 digits masked using char '.'", () => {
    expect(secureMask(123456789, { digits: 3, char: ".", pad: "end" })).toEqual("123......");
  });

  // Undefined value
  it("should return undefined if no value is provided", () => {
    expect(secureMask(undefined)).toEqual(undefined);
  });

  // Null value
  it("should return undefined if null value is provided", () => {
    expect(secureMask(null)).toEqual(undefined);
  });
});
