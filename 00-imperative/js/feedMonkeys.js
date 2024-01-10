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
const feedMonkeys = function (fruit) {
  const monkeys = [];
  const collectionLength = MONKEYS.length;

  for (let index = 0; index < collectionLength; index++) {
    const monkey = `${MONKEYS[index]} ${fruit}`;
    monkeys.push(monkey);
  }

  return monkeys;
};

export { feedMonkeys };
