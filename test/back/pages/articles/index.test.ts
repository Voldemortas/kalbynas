import {describe, expect, mock, spyOn, test} from 'bun:test'
import articles from 'back/pages/articles/index.ts'
import translations from 'back/translations/articles'
import makeNavigation from 'test/makeNavigation.ts'
import Article from 'back/pages/articles/Article'
import Translation from 'back/common/Translation'
import {DEFAULT_ALTERNATE} from 'build/config.ts'
import {ModuleMocker} from 'test/ModuleMocker'
import * as utils from 'voldemortas-server/utils'

const REQUEST = mock() as unknown as Request
const NAVIGATION_LOCALE = {
  nav: makeNavigation('articles'),
  locale: DEFAULT_ALTERNATE,
}
const ALL_ARTICLES: Article[] = [
  new Article({
    title: new Translation({lt: 'pavadinimas', en: 'title'}),
    content: new Translation({lt: 'turinys', en: 'content'}),
    date: new Date(),
    id: new Translation('my-id'),
  }),
]

const moduleMocker = new ModuleMocker()

describe('pages/articles/index', () => {
  test('returns Articles page', async () => {
    const getPageWithAllTranslationsMock =
      mock().mockReturnValue(NAVIGATION_LOCALE)
    await moduleMocker.mock(
      'back/pages/common/getPageWithAllTranslations',
      () => ({default: getPageWithAllTranslationsMock})
    )
    await moduleMocker.mock('back/pages/articles/allArticles', () => ({
      default: ALL_ARTICLES,
    }))
    //@ts-ignore
    spyOn(utils, 'getUrl').mockReturnValue({sub: 'lt'})
    const page = articles(REQUEST, [])
    expect(getPageWithAllTranslationsMock).toHaveBeenCalledWith(
      REQUEST,
      '/articles',
      translations
    )
    expect(page).toEqual({
      ...NAVIGATION_LOCALE,
      articleList: [{title: 'pavadinimas', id: 'my-id'}],
    })
    moduleMocker.clear()
    mock.clearAllMocks()
  })
})
