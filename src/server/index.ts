import {paths, redirects, api} from './config.toml'
import argumentsParser from '~/utils/argsParser'
import generateHtml from './template'
import streamToString from '~/utils/streamToText'

const port = argumentsParser(Bun.argv, '--port') ?? 3000

const version = await streamToString(
  Bun.file(import.meta.dir + '/version.txt').stream()
)

const server = Bun.serve({
  port,
  async fetch(request) {
    const cache = {'Cache-control': 'public, max-age=' + 60 * 60 * 24 * 365}
    const url = new URL(request.url)
    const pathName = (url.pathname as string).replace('.' + version, '')
    const pathsEntries = Object.entries(paths)
    const pathIndex = pathsEntries.map((x) => x[0]).indexOf(pathName)
    const queryParams = [...url.searchParams.entries()]
    if (
      !queryParams.find(([param]) => param === 'version') &&
      pathIndex === -1
    ) {
      return Response.redirect(
        pathName +
          '?' +
          [...queryParams, ['version', version]]
            .map(([param, val]) => `${param}=${val}`)
            .join('&')
      )
    }
    const redirectEntries = Object.entries(redirects)
    const redirectIndex = redirectEntries.map((x) => x[0]).indexOf(pathName)
    if (redirectIndex > -1) {
      return new Response(
        Bun.file(import.meta.dir + redirectEntries[redirectIndex][1]),
        {headers: cache}
      )
    }
    const fileExists = await Bun.file(import.meta.dir + pathName).exists()
    if (fileExists) {
      const headers = pathName.includes('.less')
        ? {'Content-Type': 'text/css', ...cache}
        : cache
      return new Response(Bun.file(import.meta.dir + pathName), {headers})
    }
    const apiEntries = Object.entries(api)
    const apiIndex = apiEntries.map((x) => x[0]).indexOf(pathName)
    if (apiIndex > -1) {
      const apiFunc = require(('.' + apiEntries[apiIndex][1]) as string)
      const {body, init} = await apiFunc.default(request)
      return new Response(body, init)
    }
    if (pathIndex > -1) {
      const indexHtmlStream = await Bun.file(
        import.meta.dir + '/index.html'
      ).stream()
      const indexHtml = await streamToString(indexHtmlStream)
      return new Response(
        generateHtml({
          language: 'lt',
          component:
            (pathsEntries[pathIndex][1] as string) + '?version=' + version,
          basicHtml: indexHtml,
          head: `<link rel="icon" type="image/x-icon" href="assets/favicon.png" />
<title>Kalbynas.lt - Pakalbėkim apie kalbą</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Various mostly Lithuanian language related things" />
<meta name="keywords" content="Linguistics, Lithuanistics, Lingvistika, Lituanistika, Kalbotyra" />`,
        }),
        {
          headers: {'Content-Type': 'text/html'},
        }
      )
    }
    return new Response(
      generateHtml({
        basicHtml: '404',
        language: 'lt',
        head: `<link rel="icon" type="image/x-icon" href="assets/favicon.png">
<title>Kalbynas.lt - 404</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
      }),
      {
        status: 404,
        statusText: '404',
        headers: {'Content-Type': 'text/html', ...cache},
      }
    )
  },
})

console.log(`http://${server.hostname}:${server.port}`)

