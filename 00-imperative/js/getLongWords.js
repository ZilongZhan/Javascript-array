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
 * @description Returns array only with elements with length >= 5 from argument array
 * @param {Array} WORDS
 * @returns {Array}
 */
const getLongWords = (WORDS) => {
  const words = [];
  const collectionLength = WORDS.length;

  for (let index = 0; index < collectionLength; index++) {
    const word = WORDS[index];

    if (word.length >= 5) {
      words.push(word)
    };
  }

  return words;
};

export { getLongWords };
