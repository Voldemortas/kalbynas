import { describe, expect, mock, test } from 'bun:test'
import baltistics from 'back/pages/baltistics/index.ts'
import translations from 'back/translations/baltistics'
import makeNavigation from 'test/makeNavigation.ts'
import { ModuleMocker } from 'test/ModuleMocker'

const REQUEST = mock() as unknown as Request
const NAVIGATION = { nav: makeNavigation('baltistics') }

const moduleMocker = new ModuleMocker()

describe('pages/baltistics/index', () => {
  test('returns Baltistics page', async () => {
    const getPageWithAllTranslationsMock = mock().mockReturnValue(NAVIGATION)
    await moduleMocker.mock('back/pages/common/getPageWithAllTranslations', () => ({ default: getPageWithAllTranslationsMock }))
    const page = baltistics(REQUEST, [])
    expect(getPageWithAllTranslationsMock).toHaveBeenCalledWith(
      REQUEST,
      '/baltistics',
      translations
    )
    expect(page).toEqual(NAVIGATION)
    moduleMocker.clear()
  })
})
