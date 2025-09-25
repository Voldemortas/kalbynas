import { describe, expect, mock, test } from 'bun:test'
import index from 'back/pages/index/index.ts'
import translations from 'back/translations/index'
import makeNavigation from 'test/makeNavigation.ts'
import { ModuleMocker } from 'test/ModuleMocker'

const REQUEST = mock() as unknown as Request
const NAVIGATION = { nav: makeNavigation('/') }

const moduleMocker = new ModuleMocker()

describe('pages/index/index', () => {
  test('returns Index page', async () => {
    const getPageWithAllTranslationsMock = mock().mockReturnValue(NAVIGATION)
    await moduleMocker.mock('back/pages/common/getPageWithAllTranslations', () => ({ default: getPageWithAllTranslationsMock }))
    const page = index(REQUEST, [])
    expect(getPageWithAllTranslationsMock).toHaveBeenCalledWith(
      REQUEST,
      '',
      translations
    )
    expect(page).toEqual(NAVIGATION)
    moduleMocker.clear()
  })
})
