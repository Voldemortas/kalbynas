import getNavigation from 'back/common/navigation'
import getUrl from 'back/pages/common/getUrl'
import getAllTranslated from 'back/common/getAllTranslated'
import type Translations from 'back/translations'
import type {ALTERNATES_TYPE} from 'back/config.ts'
import getLocale from 'back/common/getLocale.ts'

export default function getPageWithAllTranslations(
  request: Request,
  navigation: string,
  translations: typeof Translations
) {
  const {sub} = getUrl(request)

  return {
    ...getAllTranslated(translations, sub as ALTERNATES_TYPE),
    nav: getNavigation(request, navigation),
    locale: getLocale(request),
  }
}
