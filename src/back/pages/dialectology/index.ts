import translations from 'back/translations/dialectology'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'
import type {ReactRoute} from 'voldemortas-server/route'

const NAV_LINK = '/dialectology'

export default function index(request: Request, route: ReactRoute[]) {
  return getPageWithAllTranslations(request, NAV_LINK, translations)
}
