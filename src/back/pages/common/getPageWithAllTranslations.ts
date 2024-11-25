import getNavigation from 'back/common/navigation'
import getUrl from 'back/pages/common/getUrl'
import getAllTranslated from 'back/common/getAllTranslated'
import type Translations from 'back/translations'

export default function getPageWithAllTranslations(
  request: Request,
  navigation: string,
  translations: typeof Translations
) {
  const {sub} = getUrl(request)

  return {
    ...getAllTranslated(translations, sub),
    nav: getNavigation(request, navigation),
  }
}
