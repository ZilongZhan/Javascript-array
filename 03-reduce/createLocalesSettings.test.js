import { createLocalesSettings } from "./createLocalesSettings.js";

describe("Given createLocalesSettings function", () => {
  test("When given LOCALE array as argument then expected object should be returned", () => {
    // Arrange
    const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

    // Act
    const result = createLocalesSettings(LOCALES);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual({
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    });
  });
});
