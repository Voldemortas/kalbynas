import {getUrl, textHeaders} from 'voldemortas-server/utils'

export default function robots(request: Request, params: string[]) {
  const {origin} = getUrl(request, true)

  return new Response(
    `User-agent: * 
Crawl-delay: 2

SITEMAP: ${origin}/sitemap.txt`,
    textHeaders
  )
}
