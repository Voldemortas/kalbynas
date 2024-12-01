import {textHeaders} from 'back/common/responseHeaders'
import getUrl from 'back/pages/common/getUrl.ts'

export default function robots(request: Request, params: string[]) {
  const {origin} = getUrl(request, true)

  return new Response(
    `User-agent: * 
Crawl-delay: 2

SITEMAP: ${origin}/sitemap.txt`,
    textHeaders
  )
}
