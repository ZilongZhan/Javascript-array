import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer.js";

describe("Given extractCountriesWithFiveCharactersOrFewer", () => {
  test("When given COUNTRIES array as argument then expected array should be returned", () => {
    // Arrange
    const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

    // Act
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(["Italy"]);
  });
});
