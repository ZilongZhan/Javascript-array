import { feedMonkeys } from "./feedMonkeys.js";

describe("Given funciton feedMonkeys", () => {
  test("When given 🍌 as argument then expected array should be returned", () => {
    // Arrange
    const fruit = "🍌";

    // Act
    const result = feedMonkeys(fruit);

    // Assert
    expect(result).toEqual(["🐒 🍌", "🦍 🍌", "🦧 🍌"]);
  });

  test("When given 🍎 as argument then expected array should be returned", () => {
    // Arrange
    const fruit = "🍎";

    // Act
    const result = feedMonkeys(fruit);

    // Assert
    expect(result).toEqual(["🐒 🍎", "🦍 🍎", "🦧 🍎"]);
  });
});
