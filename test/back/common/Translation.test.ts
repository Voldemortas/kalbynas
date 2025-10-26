import {describe, expect, test} from 'bun:test'
import Translation from 'back/common/Translation.ts'
import {DEFAULT_ALTERNATE} from 'build/config.ts'

describe('Translation', () => {
  test('throws an error if default locale is missing', () => {
    try {
      new Translation({en: 'test'})
    } catch (e) {
      expect((e as Error).message).toBe(
        'Translation is missing default=lt locale'
      )
    }
  })
  test('formats simple text by locale', () => {
    const translations = new Translation({lt: 'testas', en: 'test'})
    expect(translations.format('lt')).toBe('testas')
    expect(translations.format('en')).toBe('test')
  })
  test('formats text with params', () => {
    const translations = new Translation({lt: '$1 labas, $0!', en: 'hi $0!'})
    expect(translations.format('lt', 'Petrai', 'tariu')).toBe(
      'tariu labas, Petrai!'
    )
    expect(translations.format('en', 'Peter')).toBe('hi Peter!')
  })
  test('formats simple text to DEFAULT_LOCALE', () => {
    const translations = new Translation('springs')
    expect(translations.format(DEFAULT_ALTERNATE)).toStrictEqual('springs')
  })
})
