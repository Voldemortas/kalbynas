import textHeaders from '../common/textHeaders'
import getUrl from '../pages/common/getUrl.ts'
import config from '../../pages'

export default function robots(request: Request, params: string[]) {
  const {origin} = getUrl(request)

  return new Response(
    config
      .filter(({resolve}) => resolve.type === 'react')
      .map(({path}) => `${origin}${path}`)
      .join('\n'),
    textHeaders
  )
}
