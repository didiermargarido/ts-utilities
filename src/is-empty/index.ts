/**
 * Method to check if value is empty
 * @param value - string, number, array, object, undefined or null
 * @example isEmpty("") = true
 * @example isEmpty([]) = true
 * @example isEmpty({}) = true
 * @example isEmpty(null) = true
 * @example isEmpty(undefined) = true
 * @example isEmpty("DM") = false
 * @example isEmpty(() => {}) = throw error
 * @returns true if value is not defined, empty string/array/object
 */
export const isEmpty = <T>(value: T | undefined | null): value is T => {
  // Function
  if (typeof value === "function") {
    throw new Error("Functions are not allowed as value for the `isEmpty` util.");
  }

  return (
    // Undefined
    value === undefined ||
    // Null
    value === null ||
    // Array
    (Array.isArray(value) && value.length === 0) ||
    // Object
    (typeof value === "object" && Object.keys(value).length === 0) ||
    // String
    (typeof value === "string" && value.length === 0)
  );
};
