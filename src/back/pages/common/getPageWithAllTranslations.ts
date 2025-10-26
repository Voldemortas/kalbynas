import getNavigation from 'back/common/navigation'
import {getUrl} from 'voldemortas-server/utils'
import getAllTranslated from 'back/common/getAllTranslated'
import type Translations from 'back/translations'
import type {ALTERNATES_TYPE} from 'build/config.ts'
import getLocale from 'back/common/getLocale.ts'

export default function getPageWithAllTranslations(
  request: Request,
  navigation: string,
  translations: typeof Translations,
  params: Record<string, string[] | string | undefined> = {}
) {
  const {sub} = getUrl(request)

  return {
    ...getAllTranslated(translations, sub as ALTERNATES_TYPE, params),
    nav: getNavigation(request, navigation),
    locale: getLocale(request),
  }
}
