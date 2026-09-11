import {type Translations} from 'src/commons/Translation'
import getUrl from 'src/utils/url'
import getAllTranslated from 'src/utils/allTranslated'
import {ALTERNATES_TYPE} from 'src/commons/alternate'
import getNavigation from 'src/utils/navigation'
import getLocale from 'src/utils/locale'

export default function getPageWithAllTranslations<
  T extends Record<string, string>,
>(
  request: Request,
  navigation: string,
  translations: Translations,
  params: Record<string, string[] | string | undefined> = {}
) {
  const {sub, pathname} = getUrl(request)

  return {
    ...(getAllTranslated(translations, sub as ALTERNATES_TYPE, params) as T),
    nav: getNavigation(request, navigation),
    locale: getLocale(request),
    pathname,
  }
}
