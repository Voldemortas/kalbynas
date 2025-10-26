import {describe, expect, mock, test, afterEach, spyOn} from 'bun:test'
import * as utils from 'voldemortas-server/utils'
import singleArticle from 'back/pages/articles/singleArticle.ts'
import makeNavigation from 'test/makeNavigation.ts'
import Article from 'back/pages/articles/Article'
import Translation from 'back/common/Translation'
import {DEFAULT_ALTERNATE} from 'build/config.ts'
import {ModuleMocker} from 'test/ModuleMocker'

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

const moduleMocker = new ModuleMocker()

describe('pages/articles/singleArticle  ', () => {
  afterEach(() => {
    moduleMocker.clear()
    mock.clearAllMocks()
  })
  test('returns an article', async () => {
    const getPageWithAllTranslationsMock =
      mock().mockReturnValue(NAVIGATION_LOCALE)
    await mockModule(
      'back/pages/common/getPageWithAllTranslations',
      getPageWithAllTranslationsMock
    )
    await mockModule('back/pages/articles/allArticles', ALL_ARTICLES)
    //@ts-ignore
    spyOn(utils, 'getUrl').mockReturnValue({
      sub: 'lt',
      pathname: '/articles/second',
    })

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

async function mockModule(url: string, result: any) {
  await moduleMocker.mock(url, () => ({
    default: result,
  }))
}
