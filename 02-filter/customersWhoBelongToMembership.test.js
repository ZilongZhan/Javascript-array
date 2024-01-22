import { customersWhoBelongToMembership } from "./customersWhoBelongToMembership.js";

describe("Given customersWhoBelongToMembership function", () => {
  test("When given CUSTOMERS array as argument then expected array should be returned", () => {
    // Arrange
    const CUSTOMERS = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Bar",
        member: false,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "Buzz",
        member: false,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];

    // Act
    const result = customersWhoBelongToMembership(CUSTOMERS);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual([
      { name: "Foo", member: true },
      { name: "Fizz", member: true },
      { name: "FizzBuzz", member: true },
    ]);
  });
});
