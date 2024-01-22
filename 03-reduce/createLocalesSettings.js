/**
 * Given 'LOCALES' array, define function 'createLocalesSettings' to return an object with locales settings
 *
 * expected:
 * {
 *  "EN": {id: 0, enabled: true},
 *  "GR": {id: 1, enabled: false},
 *  "FR": {id: 2, enabled: false},
 *  "IT": {id: 3, enabled: false},
 *  "PT": {id: 4, enabled: false},
 * }
 */

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

/**
 * @description returns elements from argument array mapped with 'id' and 'enabled' as objects
 * @param {Array} locales 
 * @returns {Object}
 */
export const createLocalesSettings = (locales) => {
  const addProperties = (locales, currentLocale, index) => {
    locales[currentLocale] = { id: index, enabled: currentLocale === "EN" };
    return locales;
  };

  const localeSettings = LOCALES.reduce(addProperties, {});

  return localeSettings;
};
