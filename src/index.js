// IBAN patterns
// on: https://en.wikipedia.org/wiki/International_Bank_Account_Number
// under: IBAN patterns by country

// TODO: use original package after merge -> https://github.com/arhs/iban.js/pull/71
import IBAN from 'iban';
import {
  flow,
  concat,
  map,
  times,
  constant,
  flatten,
  chunk,
  drop,
} from 'lodash/fp';

const DEFAULT_PRINT_BLOCK_SIZE = 4;

export default (country, printBlockSize = DEFAULT_PRINT_BLOCK_SIZE) => {
  const ibanCountrySpecification = IBAN.countries[country];
  const bbanBlocks = ibanCountrySpecification.structureBlocks();
  const internationalPart = country.split('').concat(/[0-9]/, /[0-9]/);

  const electronicMask = flow(
    map(({ pattern, repeats }) =>
      times(constant(new RegExp(pattern)), repeats),
    ),
    flatten,
    concat(internationalPart),
  )(bbanBlocks);

  return flow(chunk(printBlockSize), map(concat([' '])), flatten, drop(1))(
    electronicMask,
  );
};
