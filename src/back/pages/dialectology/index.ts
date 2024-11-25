import translations from 'back/translations/dialectology'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'

const NAV_LINK = '/dialectology'

export default function index(request: Request, params: string[]) {
  return getPageWithAllTranslations(request, NAV_LINK, translations)
}
