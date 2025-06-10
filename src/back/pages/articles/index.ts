import translations from 'back/translations/articles'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'

const NAV_LINK = '/articles'

export default function index(request: Request, params: string[]) {
  return getPageWithAllTranslations(request, NAV_LINK, translations)
}
