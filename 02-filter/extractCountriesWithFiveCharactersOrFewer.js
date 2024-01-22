/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

/**
 * @description filters out the strings of which the length is <= 5 from the argument array
 * @param {Array} countries 
 * @returns {Array}
 */
export const extractCountriesWithFiveCharactersOrFewer = (countries) => {
  const filterCountries = (country) => {
    return country.length <= 5;
  };

  const shortCountries = countries.filter(filterCountries);

  return shortCountries;
};
