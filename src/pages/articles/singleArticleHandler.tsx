import allArticles from 'src/pages/articles/allArticles'
import getPageWithAllTranslations from 'src/utils/pageWithAllTranslations'
import renderReactPage from 'src/utils/reactPage'
import SingleArticle, {url} from 'src/pages/articles/SingleArticle'
import {type SingleArticlePageType} from 'src/pages/articles/SingleArticle'
import {REACT_URL} from 'src/pages/articles/texts/presentTenseNegation/config'

const NAV_LINK = '/articles'

export default async function singleArticleHandler({
  request,
  params,
}: {
  request: Request
  params: {['*']: string}
}): Promise<Response> {
  const id = params['*']

  const article = allArticles.find((article) => article.id.format() === id)

  if (!article) {
    return new Response('NOT_FOUND', {status: 404})
  }

  const data = getPageWithAllTranslations<SingleArticlePageType>(
    request,
    NAV_LINK,
    article.toTranslations()
  )
  return renderReactPage(data, SingleArticle, url, [REACT_URL])
}
