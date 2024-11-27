import {describe, expect, mock, test} from 'bun:test'
import index from 'back/pages/index/index.ts'
import translations from 'back/translations/index'
import makeNavigation from 'test/makeNavigation.ts'

const REQUEST = mock() as unknown as Request
const NAVIGATION = {nav: makeNavigation('/')}

describe('pages/index/index', () => {
  test('returns Index page', () => {
    const getPageWithAllTranslationsMock = mock().mockReturnValue(NAVIGATION)
    mock.module('back/pages/common/getPageWithAllTranslations', () => ({
      default: getPageWithAllTranslationsMock,
    }))
    const page = index(REQUEST, [])
    expect(getPageWithAllTranslationsMock).toHaveBeenCalledWith(
      REQUEST,
      '',
      translations
    )
    expect(page).toEqual(NAVIGATION)
  })
})
