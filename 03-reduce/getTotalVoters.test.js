import { getTotalVoters } from "./getTotalVoters.js";

describe("Given getTotalVoter function", () => {
  test("When given VOTERS array as argument then expected integer should be returned", () => {
    // Arrange
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

    // Act
    const result = getTotalVoters(VOTERS);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(7);
  });
});
