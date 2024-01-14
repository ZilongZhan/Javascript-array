/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

/**
 * @description Maps MONKEYS array with argument string
 * @param {string} fruit
 * @returns {array};
 */
export const feedMonkeys = (fruit) => {
  const monkeys = MONKEYS.map((monkey) => {
    return `${monkey} ${fruit}`;
  });

  return monkeys;
};
