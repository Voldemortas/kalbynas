import {describe, expect, mock, test} from 'bun:test'
import articles from 'back/pages/articles/index.ts'
import translations from 'back/translations/articles'
import makeNavigation from 'test/makeNavigation.ts'

const REQUEST = mock() as unknown as Request
const NAVIGATION = {nav: makeNavigation('dialectology')}

describe('pages/articles/index', () => {
  test('returns Articles page', () => {
    const getPageWithAllTranslationsMock = mock().mockReturnValue(NAVIGATION)
    mock.module('back/pages/common/getPageWithAllTranslations', () => ({
      default: getPageWithAllTranslationsMock,
    }))
    const page = articles(REQUEST, [])
    expect(getPageWithAllTranslationsMock).toHaveBeenCalledWith(
      REQUEST,
      '/articles',
      translations
    )
    expect(page).toEqual(NAVIGATION)
  })
})
