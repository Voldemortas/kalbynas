import {
  paths,
  redirects,
  api,
  languages,
  noCache,
  disabledCache,
} from './config.toml'
import argumentsParser from '~/utils/argsParser'
import generateHtml, {generateMeta, generateTitle} from './template'
import isProd from '~/utils/isProd'
import getLocale from '~/client/components/common/getLocale'

const port = argumentsParser(Bun.argv, '--port') ?? 3000
const isWithCache = isProd() && !disabledCache

const version = await Bun.file(import.meta.dir + '/version.txt').text()

const server = Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url)
    const locale = getLocale(url.pathname) as ''
    const locales = Object.entries<string>(languages).filter(
      ([key]) => key !== 'default'
    )
    const pathName = (url.pathname as string)
      .replace('.' + version, '')
      .replace(
        new RegExp(`^/(${locales.map(([key, value]) => value).join('|')})`),
        '/'
      )
      .replace('//', '/')
    const isNoCache = noCache.includes(pathName)
    const cache = isNoCache
      ? {'Cache-control': 'no-store'}
      : isWithCache
      ? {'Cache-control': 'public, max-age=' + 60 * 60 * 24 * 365}
      : {'Cache-control': 'public, max-age=' + 60}
    const pathsEntries = Object.entries(paths)
    const pathIndex = pathsEntries.map((x) => x[0]).indexOf(pathName)
    const queryParams = [...url.searchParams.entries()]
    if (
      !disabledCache &&
      !queryParams.find(([param]) => param === 'version') &&
      pathIndex === -1 &&
      !isNoCache
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
    const myFile = Bun.file(import.meta.dir + pathName)
    const fileExists = await myFile.exists()
    if (fileExists) {
      const headers = pathName.includes('.less')
        ? {'Content-Type': 'text/css', ...cache}
        : pathName.includes('.js')
        ? {'Content-Type': 'text/javascript', ...cache}
        : cache
      if (pathName.includes('.js') || pathName.includes('.js')) {
        const txt = await myFile.text()
        return new Response(txt, {headers})
      }
      return new Response(myFile.stream(), {headers})
    }
    const apiEntries = Object.entries(api)
    const apiIndex = apiEntries.map((x) => x[0]).indexOf(pathName)
    if (apiIndex > -1) {
      const apiFunc = require(('.' + apiEntries[apiIndex][1]) as string)
      const {body, init} = await apiFunc.default(request)
      return new Response(body, init)
    }
    if (pathIndex > -1) {
      const indexHtml = await Bun.file(import.meta.dir + '/index.html').text()

      const pageData = await (async () => {
        const apiFunc = require(('./ssr' + (pathName ?? 'index')) as string)
        return await apiFunc.default({request, locale})
      })()

      return new Response(
        generateHtml({
          language: locale || 'lt',
          component:
            (pathsEntries[pathIndex][1] as string) + '?version=' + version,
          basicHtml: indexHtml,
          head: `<link rel="icon" type="image/x-icon" href="assets/favicon.png">
<title>${generateTitle(locale)}</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">${generateMeta(
            locale,
            pathName
          )}`,
          pageData,
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
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, follow">`,
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

