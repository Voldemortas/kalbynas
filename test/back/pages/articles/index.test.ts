import {describe, expect, mock, test} from 'bun:test'
import articles from 'back/pages/articles/index.ts'
import translations from 'back/translations/articles'
import makeNavigation from 'test/makeNavigation.ts'
import Article from 'back/pages/articles/Article'
import Translation from 'back/common/Translation'
import {DEFAULT_ALTERNATE} from 'back/config.ts'

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

describe('pages/articles/index', () => {
  test('returns Articles page', () => {
    const getPageWithAllTranslationsMock =
      mock().mockReturnValue(NAVIGATION_LOCALE)
    const getUrlMock = mock().mockReturnValue({sub: 'lt'})
    mock.module('back/pages/common/getPageWithAllTranslations', () => ({
      default: getPageWithAllTranslationsMock,
    }))
    mock.module('back/pages/articles/allArticles', () => ({
      default: ALL_ARTICLES,
    }))
    mock.module('back/pages/common/getUrl', () => ({
      default: getUrlMock,
    }))
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
  })
})
