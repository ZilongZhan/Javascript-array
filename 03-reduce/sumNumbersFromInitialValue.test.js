import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue.js";

describe("Given function sumNumbersFromInitialValue", () => {
  test("When given 0 as argument then 15 should be returned", () => {
    // Arrange
    const value = 0;

    // Act
    const result = sumNumbersFromInitialValue(value);

    // Assert
    expect(result).toBeDefined();
    expect(result).toBe(15);
  });

  test("When given 10 as argument then 25 should be returned", () => {
    // Arrange
    const value = 10;

    // Act
    const result = sumNumbersFromInitialValue(value);

    // Assert
    expect(result).toBeDefined();
    expect(result).toBe(25);
  });
});
