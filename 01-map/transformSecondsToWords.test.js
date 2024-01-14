import { transformSecondsToWords } from "./transformSecondsToWords.js";

describe("Given transformSecondsToWords function", () => {
  test("When given SECONDS array as argument then expected array should be returned", () => {
    // Arrange
    const SECONDS = [2, 5, 100];

    // Act
    const result = transformSecondsToWords(SECONDS);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(["2", "5", "100"]);
  });
});
