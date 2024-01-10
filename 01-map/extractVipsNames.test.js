import { extractVipsNames } from "./extractVipsNames.js";

describe("Given function extractVipsNames", () => {
  test("When given VIPS object as argument then expected array should be returned", () => {
    // Arrange
    const VIPS = [
      {
        name: "Foo",
        age: 80,
      },
      {
        name: "Bar",
        age: 2,
      },
      {
        name: "Fizz",
        age: 5,
      },
      {
        name: "Buzz",
        age: 16,
      },
      {
        name: "FizzBuzz",
        age: 100,
      },
    ];

    // Act
    const result = extractVipsNames(VIPS);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"]);
  });
});
