import translations from 'back/translations/articles'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'
import articleList from 'back/pages/articles/allArticles'
import getUrl from '../common/getUrl'

const NAV_LINK = '/articles'

export default function index(request: Request, params: string[]) {
  const {sub} = getUrl(request)
  return {
    ...getPageWithAllTranslations(request, NAV_LINK, translations),
    articleList: articleList.map((article, id) => ({
      id,
      title: article.title.format(sub),
    })),
  }
}
