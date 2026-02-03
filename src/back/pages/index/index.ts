import translations from 'back/translations/index'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'
import type {ReactRoute} from 'voldemortas-server/route'

const NAV_LINK = ''

export default function index(request: Request, route: ReactRoute) {
  return getPageWithAllTranslations(request, NAV_LINK, translations)
}
