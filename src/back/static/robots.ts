import {getUrl, textHeaders} from 'voldemortas-server/utils'
import type {BackRoute} from 'voldemortas-server/route'

export default function robots(request: Request, route: BackRoute) {
  const {origin} = getUrl(request, true)

  return new Response(
    `User-agent: * 
Crawl-delay: 2

SITEMAP: ${origin}/sitemap.txt`,
    textHeaders
  )
}
