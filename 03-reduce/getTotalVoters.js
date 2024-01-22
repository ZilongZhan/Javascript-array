/**
 * Given 'VOTERS' array, define function 'getTotalVoters' to return a count of how many people voted.
 *
 * expected: 7
 */

const VOTERS = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

/**
 * @description returns the sum of all argument array's objects of which attribute 'voted: true'
 * @param {Array} voters 
 * @returns {Number}
 */
export const getTotalVoters = (voters) => {
  const countVotes = (voters, currentVoter) => {
    if (currentVoter.voted) {
      return voters + 1;
    }

    return voters;
  };

  const totalVotes = voters.reduce(countVotes, 0);

  return totalVotes;
};

console.log(getTotalVoters(VOTERS));
