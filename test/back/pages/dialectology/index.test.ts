import { describe, expect, mock, test } from 'bun:test'
import baltistics from 'back/pages/dialectology/index.ts'
import translations from 'back/translations/dialectology'
import makeNavigation from 'test/makeNavigation.ts'
import { ModuleMocker } from 'test/ModuleMocker'

const REQUEST = mock() as unknown as Request
const NAVIGATION = { nav: makeNavigation('dialectology') }

const moduleMocker = new ModuleMocker()

describe('pages/dialectology/index', () => {
  test('returns Dialectology page', async () => {
    const getPageWithAllTranslationsMock = mock().mockReturnValue(NAVIGATION)
    await moduleMocker.mock('back/pages/common/getPageWithAllTranslations', () => ({ default: getPageWithAllTranslationsMock }))
    const page = baltistics(REQUEST, [])
    expect(getPageWithAllTranslationsMock).toHaveBeenCalledWith(
      REQUEST,
      '/dialectology',
      translations
    )
    expect(page).toEqual(NAVIGATION)
    moduleMocker.clear()
  })
})
