/**
 * Is Defined
 * @param value - can receive any value
 * @returns true if value is defined
 */
const isDefined = (value: unknown): boolean => value !== undefined && value !== null;

/**
 * Is Object
 * @param value - can receive any value
 * @returns true if value is an object
 */
const isObject = (value: unknown): value is object =>
  typeof value === "object" && value !== null && !Array.isArray(value);

/**
 * Method to merge multiple objects
 * @param objs - should receive two or more objects to merge
 * @example deepMerge({a: 1}, {b: 2}, {c: 3}) = {a: 1, b: 2, c: 3}
 * @example deepMerge({a: {b: 1, c: 2}}, {d: 3}) = {a: {b: 1, c: 2}, d: 3}
 * @example deepMerge("DM", "MD") = throw error
 * @returns merged object
 */
export const deepMerge = <T>(...objs: T[]): T => {
  // Throw error if any value is not an object
  for (const obj of objs) {
    if (!isObject(obj)) {
      throw new Error(`Deep merge util must receive a valid object: ${obj}`);
    }
  }

  // Create a shallow copy of the first object
  const result = { ...objs[0] };

  // Loop over the rest of the objects
  for (let i = 1; i < objs.length; i++) {
    const obj = objs[i];
    // Loop over each key in the current object
    for (const key in obj) {
      if (isDefined(obj[key])) {
        // If the key exists in both objects and they are both objects, recursively merge them
        if (isObject(result[key]) && isObject(obj[key])) {
          result[key] = deepMerge(result[key], obj[key]);
        } else {
          // Otherwise, just add the value from the current object
          result[key] = obj[key];
        }
      }
    }
  }

  return result;
};
