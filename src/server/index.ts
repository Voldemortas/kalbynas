import {paths, redirects, api} from './config.toml'
import argumentsParser from '~/utils/argsParser'
import generateHtml from './template'
import streamToString from '~/utils/streamToText'

const port = argumentsParser(Bun.argv, '--port') ?? 3000

const server = Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url)
    const redirectEntries = Object.entries(redirects)
    const redirectIndex = redirectEntries.map((x) => x[0]).indexOf(url.pathname)
    if (redirectIndex > -1) {
      return new Response(
        Bun.file(import.meta.dir + redirectEntries[redirectIndex][1])
      )
    }
    const fileExists = await Bun.file(import.meta.dir + url.pathname).exists()
    if (fileExists) {
      const headers = url.pathname.includes('.less')
        ? {'Content-Type': 'text/css'}
        : undefined
      return new Response(Bun.file(import.meta.dir + url.pathname), {headers})
    }
    const apiEntries = Object.entries(api)
    const apiIndex = apiEntries.map((x) => x[0]).indexOf(url.pathname)
    if (apiIndex > -1) {
      const apiFunc = require(('.' + apiEntries[apiIndex][1]) as string)
      const {body, init} = await apiFunc.default(request)
      return new Response(body, init)
    }
    const pathsEntries = Object.entries(paths)
    const pathIndex = pathsEntries.map((x) => x[0]).indexOf(url.pathname)
    if (pathIndex > -1) {
      const indexHtmlStream = await Bun.file(
        import.meta.dir + '/index.html'
      ).stream()
      const indexHtml = await streamToString(indexHtmlStream)
      return new Response(
        generateHtml({
          language: 'lt',
          component: pathsEntries[pathIndex][1] as string,
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
      {status: 404, statusText: '404', headers: {'Content-Type': 'text/html'}}
    )
  },
})

console.log(`http://${server.hostname}:${server.port}`)

