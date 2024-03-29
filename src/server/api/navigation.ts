import isProd from '~/utils/isProd'
import getLocale from './getLocale'
import type {ApiRespone} from './types'
const disabledCache = false

export default async (request: Request): Promise<ApiRespone> => {
  const locale = getLocale(request)

  const body = getBody(locale)

  return {
    body: JSON.stringify(body),
    init: {
      headers: {
        'Content-type': 'text/json',
        'Cache-control':
          isProd() && !disabledCache
            ? 'public, max-age=' + 60 * 60 * 24
            : 'public max-age=60',
      },
    },
  }
}

function getBody(locale: string | null) {
  switch (locale) {
    case 'en':
      return [
        {href: '/en/dialectology', text: 'Dialectology'},
        {href: '/en/baltistics', text: 'Baltistics'},
      ]

    default:
      return [
        {href: '/dialectology', text: 'Dialektologija'},
        {href: '/baltistics', text: 'Baltistika'},
      ]
  }
}

