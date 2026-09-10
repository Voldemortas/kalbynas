import {IS_SSL} from 'src/commons/config'
import getUrl from 'src/utils/url'

export default function sitemaps(
  request: Request,
  paths: string[],
  wildcardPaths: Record<string, string[]> = {}
) {
  const {origin} = getUrl(request, IS_SSL)
  const normalPaths = `${paths.map((path) => `${origin}${path}`).join('\n')}`
  const wildcards = `${Object.keys(wildcardPaths)
    .map((wildcard) =>
      wildcardPaths[wildcard]
        .map((path) => `${origin}${wildcard}/${path}`)
        .join('\n')
    )
    .join('\n')}`

  return new Response([normalPaths, wildcards].join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
