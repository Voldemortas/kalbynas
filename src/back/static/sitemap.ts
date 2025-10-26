import {getUrl, textHeaders} from 'voldemortas-server/utils'
import routes from 'src/pages'

export default function sitemap(request: Request, params: string[]) {
  const {origin} = getUrl(request, true)

  return new Response(
    routes
      .filter(({type}) => type === 'react')
      .map(({url}) => `${origin}${url}`)
      .join('\n'),
    textHeaders
  )
}
