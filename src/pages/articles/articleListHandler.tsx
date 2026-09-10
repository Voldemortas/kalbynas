import getPageWithAllTranslations from 'src/utils/pageWithAllTranslations'
import ArticleList, {url} from 'src/pages/articles/ArticleList'
import translations from 'src/translations/articles'
import renderReactPage from 'src/utils/reactPage'
import allArticles from 'src/pages/articles/allArticles'
import getLocale from 'src/utils/locale'

const NAV_LINK = '/articles'

export default async function getArticleList({
  request,
}: {
  request: Request
}): Promise<Response> {
  const locale = getLocale(request)
  const data = {
    ...getPageWithAllTranslations<{text: string}>(
      request,
      NAV_LINK,
      translations
    ),
    articleList: allArticles.map((article) => ({
      id: article.id.format(),
      title: article.title.format(locale),
    })),
  }

  return renderReactPage(data, ArticleList, url)
}
