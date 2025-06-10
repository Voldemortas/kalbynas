import {describe, expect, mock, test} from 'bun:test'
import singleArticle from 'back/pages/articles/singleArticle.ts'
import makeNavigation from 'test/makeNavigation.ts'
import Article from 'back/pages/articles/Article'
import Translation from 'back/common/Translation'

const REQUEST = mock() as unknown as Request
const NAVIGATION = {nav: makeNavigation('articles')}
const ALL_ARTICLES: Article[] = [
  new Article({
    title: new Translation({lt: 'pavadinimas', en: 'title'}),
    content: new Translation({lt: 'turinys', en: 'content'}),
    date: new Date(),
  }),
  new Article({
    title: new Translation({lt: 'pavadinimas2', en: 'title2'}),
    content: new Translation({lt: 'turinys2', en: 'content2'}),
    date: new Date(),
  }),
]

describe('pages/articles/singleArticle  ', () => {
  test('returns an article', () => {
    const getPageWithAllTranslationsMock = mock().mockReturnValue(NAVIGATION)
    const getUrlMock = mock().mockReturnValue({
      sub: 'lt',
      pathname: '/articles/1',
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
      ...NAVIGATION,
    })
  })
})
