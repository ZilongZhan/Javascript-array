/**
 * Given SECONDS array, define function 'transformSecondsToWords' to return an array of strings from numbers
 *
 * expected: ["2", "5", "100"]
 */

const SECONDS = [2, 5, 100];

/**
 * @description Returns array mapped with string elements from number elements from argument array
 * @param {Array} SECONDS
 * @returns {Array}
 */
export const transformSecondsToWords = (SECONDS) => {
  const seconds = SECONDS.map((number) => {
    return number.toString();
  });

  return seconds;
};
