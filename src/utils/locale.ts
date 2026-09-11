import {
  ALTERNATES,
  ALTERNATES_TYPE,
  DEFAULT_ALTERNATE,
} from 'src/commons/alternate'
import getUrl from 'src/utils/url'

export default function getLocale(request: Request): ALTERNATES_TYPE {
  const {sub} = getUrl(request)

  const isSubWithinLocales = ALTERNATES.includes(sub as ALTERNATES_TYPE)
  return isSubWithinLocales ? (sub as ALTERNATES_TYPE) : DEFAULT_ALTERNATE
}
