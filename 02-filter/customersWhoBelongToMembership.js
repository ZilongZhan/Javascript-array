/**
 * Given 'CUSTOMERS' array, define function 'customersWhoBelongToMembership' to  return a new array that has filtered out all those who belong to the club.
 *
 * expected: [{ name: 'Foo', member: true },  { name: 'Fizz', member: true },  { name: 'FizzBuzz', member: true }]
 */

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

/**
 * @description filters out the objets from CUSTOMER array where member: true
 * @param {Array} customers 
 * @returns {Array}
 */
export const customersWhoBelongToMembership = (customers) => {
  const filterCustomers = (customer) => {
    return customer.member === true;
  };

  const members = customers.filter(filterCustomers);

  return members;
};

console.log(customersWhoBelongToMembership(CUSTOMERS));
