import translations from 'back/translations/articles'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'
import articleList from 'back/pages/articles/allArticles'
import getLocale from 'back/common/getLocale.ts'

const NAV_LINK = '/articles'

export default function index(request: Request, params: string[]) {
  const locale = getLocale(request)
  return {
    ...getPageWithAllTranslations(request, NAV_LINK, translations),
    articleList: articleList.map((article, id) => ({
      id: article.id.format(),
      title: article.title.format(locale),
    })),
  }
}
