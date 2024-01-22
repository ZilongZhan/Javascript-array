/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

const VALUES = [1, 2, 3];

/**
 * @description returns all the argument array elements concatenated as a single string
 * @param {Array} values 
 * @returns {String}
 */
export const getWordFromValues = (values) => {
  const valueToString = (finalString, currentValue) => {
    return `${finalString}${currentValue}`;
  };

  const valueString = values.reduce(valueToString, "");

  return valueString;
};
