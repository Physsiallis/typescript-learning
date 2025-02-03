import { describe, it, expect } from 'vitest'
import { getFirstNumber } from '../../functions/2-arrays'

describe('getFirstNumber', () => {
  it('retourne un nombre', () => {
    expect(typeof getFirstNumber([1, 2, 3])).toBe('number')
  })

  it('retourne le premier élément du tableau', () => {
    expect(getFirstNumber([1, 2, 3])).toBe(1)
    expect(getFirstNumber([4, 5, 6])).toBe(4)
  })

  it('tableau vide', () => {
    expect(getFirstNumber([])).toBe(-1)
  })
})
