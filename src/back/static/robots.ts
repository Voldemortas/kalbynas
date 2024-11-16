import textHeaders from '../common/textHeaders'
import getUrl from '../pages/common/getUrl.ts'

export default function robots(request: Request, params: string[]) {
  const {origin} = getUrl(request)

  return new Response(
    `User-agent: * 
Crawl-delay: 2

SITEMAP: ${origin}/sitemap.txt`,
    textHeaders
  )
}
