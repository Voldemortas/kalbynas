import textHeaders from 'back/common/textHeaders'
import getUrl from 'back/pages/common/getUrl.ts'
import config from 'src/pages'

export default function robots(request: Request, params: string[]) {
  const {origin} = getUrl(request, true)

  return new Response(
    config
      .filter(({resolve}) => resolve.type === 'react')
      .map(({path}) => `${origin}${path}`)
      .join('\n'),
    textHeaders
  )
}
