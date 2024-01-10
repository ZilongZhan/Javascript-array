import { capitalizeMates } from "./capitalizeMates.js";

describe("Given function capitalizeMates", () => {
  test("When given MATES array as argument then expected array should be returned", () => {
    // Arrange
    const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

    // Act
    const result = capitalizeMates(MATES);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]);
  });
});
