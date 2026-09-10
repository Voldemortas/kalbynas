import getUrl from 'src/utils/url'
import {IS_SSL} from 'src/commons/config'

export default function robots({request}: {request: Request}) {
  const {origin} = getUrl(request, IS_SSL)

  return new Response(
    `User-agent: * 
Crawl-delay: 2

SITEMAP: ${origin}/sitemap.txt`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  )
}
