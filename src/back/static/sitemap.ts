import {textHeaders} from 'back/common/responseHeaders'
import getUrl from 'back/pages/common/getUrl.ts'
import config from 'src/pages'

export default function sitemap(request: Request, params: string[]) {
  const {origin} = getUrl(request, true)

  return new Response(
    config
      .filter(({resolve}) => resolve.type === 'react')
      .map(({path}) => `${origin}${path}`)
      .join('\n'),
    textHeaders
  )
}
