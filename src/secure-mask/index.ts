/**
 * Options for configuring secure masking behavior
 * @property digits - number of digits to reveal
 * @property char - character used for masking
 * @property type - type of masking, either "start" or "end"
 */
interface ISecureMaskOptions {
  digits?: number;
  char?: string;
  type?: "start" | "end";
}

/**
 * Default options for secure masking
 * @property digits - defaults to 4
 * @property char - defaults to "*"
 * @property type - defaults to "start"
 */
const defaultOptions: Required<ISecureMaskOptions> = {
  digits: 4,
  char: "*",
  type: "start"
};

/**
 * Method to securely mask information by revealing specified digits from the start or end
 * @param value - string, number, undefined or null
 * @param options - optional options for secure masking:
 * @property {digits} - number of digits to reveal (default: 4)
 * @property {char} - character used for masking (default: "*")
 * @property {type} - type of masking, either "start" or "end" (default: "start")
 * @example secureMask("123456789") = "*****6789"
 * @example secureMask(123456789, { digits: 2 }) = "*******89"
 * @example secureMask("123456789", { char: "-" }) = "-----6789"
 * @example secureMask(123456789, { type: "end" }) = "1234*****"
 * @example secureMask(undefined) = undefined
 * @example secureMask(null) = undefined
 * @returns masked string or undefined if the input value is null or undefined
 */
export const secureMask = (
  value: number | string | undefined | null,
  options?: ISecureMaskOptions
): string | undefined => {
  // Return undefined if no value
  if (!value) return;

  // Extract options or use defaults
  const { digits, char, type } = {
    ...defaultOptions,
    ...options
  };

  // Convert value to string
  const currentValue = value.toString();

  // Calculate masked value based on type
  switch (type) {
    case "start":
      return currentValue.slice(-digits).padStart(currentValue.length, char);
    case "end":
      return currentValue.substring(0, digits).padEnd(currentValue.length, char);
  }
};
