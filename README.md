# text-mask-addon-iban

## install
- `npm i text-mask-addon-iban`
- or
- `yarn add text-mask-addon-iban`

## example ([React](https://github.com/text-mask/text-mask/tree/master/react))
```
// ibanMask.js
import createIBANMask from 'text-mask-addon-iban'

const country = 'GB' // Great Britain
export default createIBANMask(country)
```

```
// IbanInput.js
import React from 'react'
import MaskedInput from 'react-text-mask'

import ibanMask from './ibanMask.js'

export default (props) => (
  <MaskedInput mask={ibanMask} {...props} />
)
```
