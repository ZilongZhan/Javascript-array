import { getEvensOnly } from "./getEvensOnly.js";

describe("Given getEvensOnly function", () => {
  test("When given COUNTERS array then expected array should be returned", () => {
    // Arrange
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];
    
    // Act
    const result = getEvensOnly(COUNTERS);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual([2, 12, 42, 28]);
  });
});
