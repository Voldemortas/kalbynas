import {getUrl, textHeaders} from 'voldemortas-server/utils'
import routes from 'src/pages'
import type {BackRoute} from 'voldemortas-server/route'
import getLocale from 'back/common/getLocale.ts'

export default function sitemap(request: Request, route?: BackRoute) {
  const isNotApi = getLocale(request) === 'api'
  if (isNotApi) {
    return new Response(``, textHeaders)
  }
  const {origin} = getUrl(request, true)

  return new Response(
    routes
      .filter(({type}) => type === 'react')
      .map(({url}) => `${origin}${url}`)
      .join('\n'),
    textHeaders
  )
}
