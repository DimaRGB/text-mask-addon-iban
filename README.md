## install
```
npm i text-mask-addon-iban
```

## example ([React](https://github.com/text-mask/text-mask/tree/master/react))
```
// IbanInput.js

import React from 'react'
import MaskedInput from 'react-text-mask'
import createIBANMask from 'text-mask-addon-iban'

const country = 'GB' // Great Britain
const ibanMask = createIBANMask(country)

export default (props) => (
  <MaskedInput mask={ibanMask} {...props} />
)
```
