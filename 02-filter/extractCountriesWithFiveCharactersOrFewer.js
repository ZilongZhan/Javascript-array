/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

export const extractCountriesWithFiveCharactersOrFewer = (countries) => {
  const filterCountries = (country) => {
    return country.length <= 5;
  };

  const shortCountries = countries.filter(filterCountries);

  return shortCountries;
};
