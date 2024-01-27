/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

/**
 * @description Returns sum of NUMBERS array beginning from argument number
 * @param {Number} value
 * @returns {Number}
 */
export const sumNumbersFromInitialValue = (initialValue) => {
  const toSumOf = (summary, currentNumber) => summary + currentNumber;

  const finalSum = NUMBERS.reduce(toSumOf, initialValue);

  return finalSum;
};
