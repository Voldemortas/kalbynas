import {describe, expect, it, test} from 'bun:test'
import {
  stripAllAccents,
  stripShortCircumflex,
  getPalatalizedRoot,
  getUnpalatalizedRoot,
  getPresentRoot,
  getPastRoot,
  getInfinitiveRoot,
  isRootMonosyllabic,
} from 'back/api/utils'
import {
  infinitiveRootError,
  pastRootError,
  presentRootError,
  threeRootsError,
} from 'back/api/errors.ts'

describe('api/utils', () => {
  describe('stripAllAccents', () => {
    const expected = 'šalti'
    it.each([`ša\u0301lti`, `šal\u0303ti`, `šalti\u0300`, `šalti`])(
      `strips all accent for %s`,
      (accented) => {
        expect(stripAllAccents(accented)).toStrictEqual(expected)
      }
    )
  })
  describe('stripShortCircumflex', () => {
    it.each([
      [`ša\u0301lti`, `ša\u0301lti`],
      [`šal\u0303ti`, `šalti`],
      [`šalti\u0300`, `šalti`],
      [`šalti`, `šalti`],
    ])(`strips short and circumflex accents for %s`, (accented, expected) => {
      expect(stripShortCircumflex(accented)).toStrictEqual(expected)
    })
  })
  describe('getPalatalizedRoot', () => {
    it.each([
      [`keist`, `keisči`],
      [`gird`, `girdži`],
      [`tik`, `tik`],
      [`dyg`, `dyg`],
    ])(`gets palatalized root for %s`, (accented, expected) => {
      expect(getPalatalizedRoot(accented)).toStrictEqual(expected)
    })
  })
  describe('getUnpalatalizedRoot', () => {
    it.each([
      [`kenči`, `kent`],
      [`žaidži`, `žaid`],
      [`čik`, `čik`],
      [`džiaug`, `džiaug`],
    ])(`gets unpalatalized root for %s`, (accented, expected) => {
      expect(getUnpalatalizedRoot(accented)).toStrictEqual(expected)
    })
  })
  describe('getPresentRoot', () => {
    it.each([
      [`renka`, `renk`, 'a'],
      [`ren\u0303ka`, `ren\u0303k`, 'a'],
      [`šviečia`, `švieči`, 'a'],
      [`švie\u0303čia`, `švie\u0303či`, 'a'],
      [`yra`, `yr`, 'a'],
      [`y\u0303ra`, `y\u0303r`, 'a'],
      [`yra\u0300`, `yr`, `a\u0300`],
      [`tupi`, `tup`, 'i'],
      [`tu\u0300pi`, `tu\u0300p`, 'i'],
      [`moko`, `mok`, 'o'],
      [`mo\u0301ko`, `mo\u0301k`, 'o'],
    ])(`gets present root for %s`, (present, root, pattern) => {
      expect(getPresentRoot(['', present, ''])).toMatchObject({root, pattern})
    })
    it('throws when a form ends in ė', () => {
      expect(() => getPresentRoot(['', 'mirė', ''])).toThrowError(
        presentRootError
      )
    })
  })
  describe('getPastRoot', () => {
    it.each([
      [`rinko`, `rink`, 'o'],
      [`rin\u0303ko`, `rin\u0303k`, 'o'],
      [`mirė`, `mir`, 'ė'],
      [`mi\u0300rė`, `mi\u0300r`, 'ė'],
      [`galėjo`, `galėj`, 'o'],
      [`galė\u0301jo`, `galė\u0301j`, 'o'],
    ])(`gets past root for %s`, (past, root, pattern) => {
      expect(getPastRoot(['', '', past])).toMatchObject({root, pattern})
    })
    it('throws when a form ends in a', () => {
      expect(() => getPastRoot(['', '', 'dirba'])).toThrowError(pastRootError)
    })
  })
  describe('getInfinitiveRoot', () => {
    it.each([
      [`mirti`, `mir`, 'ti'],
      [`mir\u0303ti`, `mir\u0303`, 'ti'],
      [`žūdyti`, `žūdy`, 'ti'],
      [`žūdy\u0301ti`, `žūdy\u0301`, 'ti'],
      [`gausti`, `gaus`, 'ti'],
      [`gau\u0303sti`, `gau\u0303s`, 'ti'],
    ])(`gets infinitive root for %s`, (inf, root, pattern) => {
      expect(getInfinitiveRoot([inf, '', ''])).toMatchObject({root, pattern})
    })
    it('throws when a form ends in a', () => {
      expect(() => getInfinitiveRoot(['dirba', '', ''])).toThrowError(
        infinitiveRootError
      )
    })
  })
  describe.each([getInfinitiveRoot, getPresentRoot, getPastRoot])(
    '3 root error',
    (func) => {
      test.each([
        ['būti', true],
        ['būti-būna', true],
        ['būti-būna-buvo', false],
        ['būti-būna-buvo-bus', true],
      ])(`${func.name}(%s) throws=%o`, (roots, shouldThrow) => {
        if (shouldThrow) {
          expect(() => func(roots.split('-'))).toThrowError(threeRootsError)
        } else {
          expect(() => func(roots.split('-'))).not.toThrow()
        }
      })
    }
  )
  describe('isRootMonosyllabic', () => {
    it.each([
      ['ei', true],
      ['bū', true],
      ['im', true],
      ['gim', true],
      ['siū', true],
      ['imlio', false],
      ['maty', false],
      ['pažin', false],
    ])('checks if %s is monosyllabic', (root, isMonosyllabic) => {
      expect(isRootMonosyllabic(root)).toStrictEqual(isMonosyllabic)
    })
  })
})
