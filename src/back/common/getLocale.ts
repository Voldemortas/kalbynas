import {getUrl} from 'voldemortas-server/utils'
import {
  ALTERNATES,
  type ALTERNATES_TYPE,
  DEFAULT_ALTERNATE,
} from 'build/config.ts'

export default function getLocale(request: Request): ALTERNATES_TYPE {
  const {sub} = getUrl(request)

  const isSubWithinLocales = ALTERNATES.includes(sub as ALTERNATES_TYPE)
  return isSubWithinLocales ? (sub as ALTERNATES_TYPE) : DEFAULT_ALTERNATE
}
