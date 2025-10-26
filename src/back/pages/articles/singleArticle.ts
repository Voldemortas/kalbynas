import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'
import {getUrl} from 'voldemortas-server/utils'
import articleList from './allArticles'
import getLocale from 'back/common/getLocale.ts'

const NAV_LINK = '/articles'

export default function getSingleArticle(request: Request, params: string[]) {
  const {pathname} = getUrl(request)
  const locale = getLocale(request)
  const id = /\/articles\/([\w-]+)$/.exec(pathname)
  if (!(id && !!id[1])) {
    throw new Error(`No such article found: id=${id}`)
  }
  const article = articleList.find(
    (article) => article.id.format(locale) == id[1]!
  )
  if (!article) {
    throw new Error(`No such article found: id=${id}`)
  }
  const allTranslations = getPageWithAllTranslations(
    request,
    NAV_LINK,
    article.toTranslations()
  )

  return allTranslations
}
