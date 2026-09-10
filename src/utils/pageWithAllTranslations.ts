import {type Translations} from 'src/commons/Translation'
import getUrl from './url'
import getAllTranslated from './allTranslated'
import {ALTERNATES_TYPE} from 'src/commons/alternate'
import getNavigation from './navigation'
import getLocale from './locale'

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
