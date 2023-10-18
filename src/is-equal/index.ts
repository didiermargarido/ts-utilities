/**
 * Object Type
 * @param value - string, number, array, object, undefined or null
 * @returns type from "[object Type]"
 */
const objectType = <T>(value: T): string =>
  Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/**
 * Object Length
 * @param value - string, number, array, object, undefined or null
 * @returns length of array or object
 */
const objectLength = <T>(value: Required<T>): number =>
  (Array.isArray(value) && value.length) || Object.keys(value).length;

/**
 * Compare Objects
 * @param valueA - string, number, array, object, undefined or null
 * @param valueB - string, number, array, object, undefined or null
 * @returns false if didn't match
 */
const compareObjects = <T>(valueA: T, valueB: T): boolean | undefined => {
  // Compare recursively if is an object or array
  if (["array", "object"].indexOf(objectType(valueA)) >= 0) {
    if (!isEqual(valueA, valueB)) return false;
  } else {
    // Return false if different types
    if (objectType(valueA) !== objectType(valueB)) return false;
    // Return false if valueA different than valueB
    if (valueA !== valueB) return false;
  }
  // Return undefined
  return;
};

/**
 * Method do check if two values are equal
 * @param valueA - string, number, array, object, undefined or null
 * @param valueB - string, number, array, object, undefined or null
 * @example isEqual("DM", "DM") = true
 * @example isEqual([1,2], [1,2]) = true
 * @example isEqual({key: "DM"}, {key: "DM"}) = true
 * @example isEqual([{key: "DM"}], [{key: "DM"}]) = true
 * @example isEqual("DM", "MD") = false
 * @example isEqual([1,2], [1,3]) = false
 * @example isEqual(() => {}, () => {}) = throw error
 * @returns true if both values are equal
 */
export const isEqual = <T>(valueA: T, valueB: T): boolean => {
  // Function
  if (typeof valueA === "function" || typeof valueB === "function") {
    throw new Error("Functions are not allowed as value for the `isEqual` util.");
  }

  // Return true if both values are equal
  if (valueA === valueB) return true;
  // Return false if no values, different types or length
  if (
    !valueA ||
    !valueB ||
    objectType(valueA) !== objectType(valueB) ||
    objectLength(valueA) !== objectLength(valueB)
  ) {
    return false;
  }
  // Compare string, number, array or object properties
  if (["string", "number"].indexOf(objectType(valueA)) >= 0) {
    if (valueA !== valueB) return false;
  } else if (Array.isArray(valueA) && Array.isArray(valueB)) {
    for (let i = 0; i < objectLength(valueA); i++) {
      if (compareObjects(valueA[i], valueB[i]) === false) return false;
    }
  } else {
    for (const key in valueA) {
      if (compareObjects(valueA[key], valueB[key]) === false) return false;
    }
  }
  // Return true if nothing failed
  return true;
};
