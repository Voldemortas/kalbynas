import translations from 'back/translations/morphemes'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'

const NAV_LINK = '/morpheme-marker'

export default function index(request: Request, params: string[]) {
  return getPageWithAllTranslations(request, NAV_LINK, translations)
}
