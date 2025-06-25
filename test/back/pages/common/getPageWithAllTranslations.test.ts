import {describe, expect, mock, spyOn, test} from 'bun:test'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'
import makeNavigation from 'test/makeNavigation.ts'
import Translation from 'back/common/Translation.ts'
import * as getUrl from 'back/pages/common/getUrl.ts'
import * as getNavigation from 'back/common/navigation.ts'

const REQUEST = mock() as unknown as Request
const SUB = 'sub'
const TRANSLATIONS = {translation: 'berry good'}
const TRANSLATION = {translation: new Translation({lt: 'berry-good'})}
const NAVIGATION = makeNavigation('foo-bar')

describe('getPageWithAllTranslations', () => {
  test('returns correct page implementation', () => {
    const getAllTranslatedMock = mock().mockReturnValue(TRANSLATIONS)
    mock.module('back/common/getAllTranslated', () => ({
      default: getAllTranslatedMock,
    }))
    const getNavigationMock = spyOn(getNavigation, 'default').mockReturnValue(
      NAVIGATION
    )
    //@ts-ignore
    spyOn(getUrl, 'default').mockReturnValue({
      sub: SUB,
    })
    const page = getPageWithAllTranslations(
      REQUEST,
      NAVIGATION.selected,
      TRANSLATION
    )
    expect(getAllTranslatedMock).toHaveBeenCalledWith(TRANSLATION, SUB)
    expect(getNavigationMock).toHaveBeenCalledWith(REQUEST, NAVIGATION.selected)
    expect(page).toEqual({locale: 'lt', nav: NAVIGATION, ...TRANSLATIONS})
    mock.restore()
  })
})
