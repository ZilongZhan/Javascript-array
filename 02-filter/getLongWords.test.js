import { getLongWords } from "./getLongWords.js";

describe("Given function getLongWords", () => {
  test("When given BEATLES array as argument then expected array should be returned", () => {
    // Arrange
    const words = ["John", "George", "Paul", "Ringo"];

    // Act
    const resultArray = getLongWords(words);

    // Assert
    expect(resultArray).toEqual(["George", "Ringo"]);
  });

  test("When given LANGUAGES array as argument then expected array should be returned", () => {
    // Arrange
    const words = ["Java", "C++", "JavaScript", "C#", "TypeScript"];

    // Act
    const resultArray = getLongWords(words);

    // Assert
    expect(resultArray).toEqual(["JavaScript", "TypeScript"]);
  });
});
