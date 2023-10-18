// Util
import { isEqual } from "../";

/**
 * Unit Tests
 * @example script: `npm test -- -t "isEqual"`
 */
describe("Util // isEqual", () => {
  // Single values
  it("should return true if both single values are equal", () => {
    const values = [
      ["DM", "DM"],
      [36, 36],
      [true, true],
      [false, false],
      [null, null],
      [undefined, undefined]
    ];
    values.forEach((value) => expect(isEqual(value[0], value[1])).toBe(true));
  });

  // Array of values
  it("should return true if both array of values are equal", () => {
    const values = [
      [
        [1, 2, 3],
        [1, 2, 3]
      ],
      [
        ["DM", "MD"],
        ["DM", "MD"]
      ]
    ];
    values.forEach((value) => expect(isEqual(value[0], value[1])).toBe(true));
  });

  // Array of objects
  it("should return true if both array of objects are equal", () => {
    const values = [
      [
        { name: "DM", age: 36, cars: ["Ford", "Peugeot"] },
        { name: "DM", age: 36, cars: ["Ford", "Peugeot"] }
      ],
      [
        { group: [{ car: "Ford", year: 2000 }, { pet: "Cat" }] },
        { group: [{ car: "Ford", year: 2000 }, { pet: "Cat" }] }
      ]
    ];
    values.forEach((value) => expect(isEqual(value[0], value[1])).toBe(true));
  });

  // Array of objects regardless of key order
  it("should return true if both array of objects regardless of key order are equal", () => {
    const values = [
      [
        { name: "DM", age: 36, cars: ["Ford", "Peugeot"] },
        { cars: ["Ford", "Peugeot"], age: 36, name: "DM" }
      ],
      [
        { group: [{ car: "Ford", year: 2000 }, { pet: "Cat" }] },
        { group: [{ year: 2000, car: "Ford" }, { pet: "Cat" }] }
      ]
    ];
    values.forEach((value) => expect(isEqual(value[0], value[1])).toBe(true));
  });

  // Different values
  it("should return false if both values are not equal", () => {
    const values = [
      ["DM", "MD"],
      [38, 36],
      [true, false],
      [undefined, null],
      [[1], [1, 2]],
      [[2], { age: 40 }],
      [
        { name: "DM", age: 36, cars: ["Ford", "Peugeot"] },
        { name: "MD", age: 38, cars: ["Ford", "Audi"] }
      ],
      [
        { group: [{ car: "Ford", year: 2000 }, { pet: "Cat" }] },
        { group: [{ car: "Ford", year: 2000 }, { pet: "Dog" }] }
      ]
    ];
    values.forEach((value) => expect(isEqual(value[0], value[1])).toBe(false));
  });

  // Error for functions
  it("should throw an error if a function is passed as value", () => {
    expect(() => {
      isEqual(
        () => {},
        () => {}
      );
    }).toThrowError("Functions are not allowed as value for the `isEqual` util.");
  });
});
