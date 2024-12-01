import {describe, expect, test} from 'bun:test'
import getAllTranslated from 'back/common/getAllTranslated.ts'
import Translation from 'back/common/Translation.ts'

describe('getAllTranslated', () => {
  test('gets simple translations for locale', () => {
    const translations = {
      simple: new Translation({lt: 'lt', en: 'en'}),
      simple2: new Translation({lt: 'lt2', en: 'en2'}),
    }
    expect(getAllTranslated(translations, 'en')).toEqual({
      simple: 'en',
      simple2: 'en2',
    })
  })
  test('gets translations with params for locale', () => {
    const translations = {
      simple: new Translation({lt: 'lt', en: 'en'}),
      simple2: new Translation({lt: 'lt2', en: 'en2'}),
      param1: new Translation({lt: '$0'}),
      param2: new Translation({lt: '$0 $1'}),
    }
    expect(
      getAllTranslated(translations, 'lt', {
        param1: ['a'],
        param2: ['labas', 'rytas'],
      })
    ).toEqual({
      simple: 'lt',
      simple2: 'lt2',
      param1: 'a',
      param2: 'labas rytas',
    })
  })
})
