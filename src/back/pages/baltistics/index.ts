import translations from 'back/translations/baltistics'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'

const NAV_LINK = '/baltistics'

export default function index(request: Request, params: string[]) {
  return getPageWithAllTranslations(request, NAV_LINK, translations)
}
