import translations from 'back/translations/articles'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'
import articleList from 'back/pages/articles/allArticles'

const NAV_LINK = '/articles'

export default function index(request: Request, params: string[]) {
  return {
    ...getPageWithAllTranslations(request, NAV_LINK, translations),
    articleList: articleList.map((article, id) => ({
      id: article.id.format(),
      title: article.title.format(),
    })),
  }
}
