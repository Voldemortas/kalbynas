import {getUrl, textHeaders} from 'voldemortas-server/utils'
import routes from 'src/pages'
import type {BackRoute} from 'voldemortas-server/route'

export default function sitemap(request: Request, route: BackRoute) {
  const {origin} = getUrl(request, true)

  return new Response(
    routes
      .filter(({type}) => type === 'react')
      .map(({url}) => `${origin}${url}`)
      .join('\n'),
    textHeaders
  )
}
