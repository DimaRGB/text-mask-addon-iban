// IBAN patterns
// on: https://en.wikipedia.org/wiki/International_Bank_Account_Number
// under: IBAN patterns by country

import { countrySpecs } from 'ibantools'
import { flow, map, flatten, concat, chunk, drop } from 'lodash/fp'

const DEFAULT_PRINT_BLOCK_SIZE = 4

export default (country, printBlockSize = DEFAULT_PRINT_BLOCK_SIZE) => {
  const countrySpec = countrySpecs[country]

  // do not fail for unsupported countries: https://github.com/DimaRGB/text-mask-addon-iban/issues/6
  if (!countrySpec || !countrySpec.bban_regexp) {
    return
  }

  const { chars, bban_regexp: bbanRegexp } = countrySpec

  const bbanMask = flow(
    s => s.slice(1, -1).match(/([^{}]+)(\{\d+)/g),
    map(patternBlock => {
      const [pattern, repeats] = patternBlock.split('{')
      return Array(+repeats).fill(new RegExp(pattern))
    }),
    flatten
  )(bbanRegexp)

  const countryMask = country.split('')
  const internationalMask = countryMask.concat(
    Array(chars - countryMask.length - bbanMask.length).fill(/[0-9]/)
  )

  const electronicMask = internationalMask.concat(bbanMask)

  return flow(
    chunk(printBlockSize),
    map(concat([' '])),
    flatten,
    drop(1)
  )(electronicMask)
}
