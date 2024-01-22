import { calculateShopping } from "./calculateShopping.js";

describe("given calculateShopping function", () => {
  test("When given WISHES array as argument then expected integer should be returned", () => {
    // Arrange
    const WISHES = [
      { title: "Tesla Model S", price: 90000 },
      { title: "4 carat diamond ring", price: 45000 },
      { title: "Fancy hacky Sack", price: 5 },
      { title: "Gold fidgit spinner", price: 2000 },
      { title: "A second Tesla Model S", price: 90000 },
    ];

    // Act
    const result = calculateShopping(WISHES);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(227005);
  });
});
