import {describe, expect, mock, test} from 'bun:test'
import baltistics from 'back/pages/dialectology/index.ts'
import translations from 'back/translations/dialectology'
import makeNavigation from 'test/makeNavigation.ts'

const REQUEST = mock() as unknown as Request
const NAVIGATION = {nav: makeNavigation('dialectology')}

describe('pages/dialectology/index', () => {
  test('returns Dialectology page', () => {
    const getPageWithAllTranslationsMock = mock().mockReturnValue(NAVIGATION)
    mock.module('back/pages/common/getPageWithAllTranslations', () => ({
      default: getPageWithAllTranslationsMock,
    }))
    const page = baltistics(REQUEST, [])
    expect(getPageWithAllTranslationsMock).toHaveBeenCalledWith(
      REQUEST,
      '/dialectology',
      translations
    )
    expect(page).toEqual(NAVIGATION)
  })
})
