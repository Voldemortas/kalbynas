import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'
import getUrl from '../common/getUrl'
import articleList from './allArticles'

const NAV_LINK = '/articles'

export default function getSingleArticle(request: Request, params: string[]) {
  const {pathname} = getUrl(request)
  const id = /(\d+)$/.exec(pathname)
  if (!(id && !!id[1] && articleList.length > +id[1])) {
    throw new Error(`No such article found: id=${id}`)
  }
  const allTranslations = getPageWithAllTranslations(
    request,
    NAV_LINK,
    articleList[+id[1]].toTranslations()
  )

  return allTranslations
}
