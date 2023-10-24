// Utils
import { deepMerge } from "../";

// Types
interface IObject {
  car: string;
  color?: string;
  specifications?: {
    km?: number;
    diesel?: boolean;
  };
}

/**
 * Unit Tests
 * @example script: `npm test -- -t "deepMerge"`
 */
describe("Util // deepMerge", () => {
  // Single objects
  it("should merge objects and return `obj2` preserving additional properties", () => {
    const obj1: IObject = { car: "Ford" };
    const obj2: IObject = { car: "Peugeot", color: "White" };
    expect(deepMerge(obj1, obj2)).toEqual(obj2);
  });

  // Nested objects
  it("should merge objects with nested properties and return `obj4`", () => {
    const obj1: IObject = { car: "Ford", specifications: { km: 15000, diesel: true } };
    const obj2: IObject = { car: "Peugeot", color: "White" };
    const obj3: IObject = { car: "Peugeot", specifications: { diesel: false } };
    const obj4: IObject = {
      car: "Peugeot",
      color: "White",
      specifications: { km: 15000, diesel: false }
    };
    expect(deepMerge(obj1, obj2, obj3)).toEqual(obj4);
  });

  // Error for non objects
  it("should throw an error if values are not objects", () => {
    expect(() => {
      deepMerge("Ford", "Peugeot");
    }).toThrow("Deep merge util must receive a valid object: Ford");
  });
});
