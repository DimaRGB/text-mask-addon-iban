## install
```
npm i text-mask-addon-iban
```

## api
- `createIBANMask(country)` - creates [mask](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask)
  - country: [Alpha-2 country code](https://www.iban.com/country-codes)

## example ([React](https://github.com/text-mask/text-mask/tree/master/react))
```
// IbanInput.js

import React from 'react'
import MaskedInput from 'react-text-mask'
import createIBANMask from 'text-mask-addon-iban'

const ibanMask = createIBANMask('GB') // United Kingdom of Great Britain and Northern Ireland

export default (props) => (
  <MaskedInput mask={ibanMask} {...props} />
)
```
