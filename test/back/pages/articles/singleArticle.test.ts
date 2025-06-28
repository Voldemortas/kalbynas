import {describe, expect, mock, test} from 'bun:test'
import singleArticle from 'back/pages/articles/singleArticle.ts'
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
    id: new Translation('first'),
  }),
  new Article({
    title: new Translation({lt: 'pavadinimas2', en: 'title2'}),
    content: new Translation({lt: 'turinys2', en: 'content2'}),
    date: new Date(),
    id: new Translation('second'),
  }),
]

describe('pages/articles/singleArticle  ', () => {
  test('returns an article', () => {
    const getPageWithAllTranslationsMock =
      mock().mockReturnValue(NAVIGATION_LOCALE)
    const getUrlMock = mock().mockReturnValue({
      sub: 'lt',
      pathname: '/articles/second',
    })
    mock.module('back/pages/common/getPageWithAllTranslations', () => ({
      default: getPageWithAllTranslationsMock,
    }))
    mock.module('back/pages/articles/allArticles', () => ({
      default: ALL_ARTICLES,
    }))
    mock.module('back/pages/common/getUrl', () => ({
      default: getUrlMock,
    }))
    const page = singleArticle(REQUEST, [])
    expect(getPageWithAllTranslationsMock).toHaveBeenCalledWith(
      REQUEST,
      '/articles',
      ALL_ARTICLES[1].toTranslations()
    )
    expect(page).toEqual({
      ...NAVIGATION_LOCALE,
    })
  })
})
