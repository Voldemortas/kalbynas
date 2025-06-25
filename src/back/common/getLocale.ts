import getUrl from 'back/pages/common/getUrl.ts'
import {
  ALTERNATES,
  type ALTERNATES_TYPE,
  DEFAULT_ALTERNATE,
} from 'back/config.ts'

export default function getLocale(request: Request): ALTERNATES_TYPE {
  const {sub} = getUrl(request)

  const isSubWithinLocales = ALTERNATES.includes(sub as ALTERNATES_TYPE)
  return isSubWithinLocales ? (sub as ALTERNATES_TYPE) : DEFAULT_ALTERNATE
}
