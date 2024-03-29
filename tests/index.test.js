import createIBANMask from '../src'

describe('createIBANMask', () => {
  it('should create for DE structure F08F10', () => {
    expect(createIBANMask('DE')).toEqual([
      'D',
      'E',
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[0-9]/,
      /[0-9]/
    ])
  })

  it('should create for NL structure U04F10', () => {
    expect(createIBANMask('NL')).toEqual([
      'N',
      'L',
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[A-Z]/,
      /[A-Z]/,
      /[A-Z]/,
      /[A-Z]/,
      ' ',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[0-9]/,
      /[0-9]/
    ])
  })

  it('should create for IT structure U01F05F05A12', () => {
    expect(createIBANMask('IT')).toEqual([
      'I',
      'T',
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[A-Z]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      ' ',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      /[A-Z0-9]/,
      ' ',
      /[A-Z0-9]/,
      /[A-Z0-9]/,
      /[A-Z0-9]/,
      /[A-Z0-9]/,
      ' ',
      /[A-Z0-9]/,
      /[A-Z0-9]/,
      /[A-Z0-9]/,
      /[A-Z0-9]/,
      ' ',
      /[A-Z0-9]/,
      /[A-Z0-9]/,
      /[A-Z0-9]/
    ])
  })

  it('should return undefined for unsupported locale', () => {
    expect(createIBANMask('UNREAL')).toEqual(undefined)
    expect(createIBANMask('ZW')).toEqual(undefined)
  })
})
