/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

/**
 * @description filters out the strings of which the length is >= 5 from the argument array
 * @param {Array} WORDS
 * @returns {Array}
 */
export const getLongWords = (WORDS) => {
  const checkWordLength = (word) => word.length >= 5;

  const longWords = WORDS.filter(checkWordLength);

  return longWords;
};
