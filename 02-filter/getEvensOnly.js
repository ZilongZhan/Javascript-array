/**
 * Given COUNTERS array, define function 'getEvensOnly' to return a new array that only includes the even numbers.
 *
 * expected: [ 2, 12, 42, 28 ]
 */

const COUNTERS = [2, 25, 43, 12, 67, 42, 28];

/**
 * @description filters out the even integers from the argument array
 * @param {Array} counters 
 * @returns {Array}
 */
export const getEvensOnly = (counters) => {
  const filterNumbers = (number) => {
    return number % 2 === 0;
  }

  const evenNumbers = counters.filter(filterNumbers)

  return evenNumbers;
}
