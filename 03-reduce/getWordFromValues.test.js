import { getWordFromValues } from "./getWordFromValues.js";

describe("Given getWordFromValues function", () => {
  test("When given VALUES array as argument then expected string should be returned", () => {
    // Arrange
    const VALUES = [1, 2, 3];

    // Act
    const result = getWordFromValues(VALUES);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual('123');
  });
});
