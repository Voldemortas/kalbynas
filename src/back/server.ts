import pages, {getPage, type PageType, type RedirectType} from '../pages'
import renderReact from './pages/common/renderReact'
import getUrl from './pages/common/getUrl'
import IS_PROD from './pages/common/isProd.ts'

const lastUpdated = new Date().getTime().toString()

const server = Bun.serve({
  port: Bun.env.KALBYNAS_PORT,
  websocket: {
    async message(ws, message) {},
    async open(ws) {
      ws.send(lastUpdated)
    },
  },
  async fetch(request): Promise<Response | undefined> {
    if (!IS_PROD) {
      const success = server.upgrade(request)
      if (success) {
        return undefined
      }
    }

    const {sub, pathname, href} = getUrl(request)

    if (/^\/static\//.test(pathname)) {
      return serveStatic(request)
    }
    if (/^\/front\//.test(pathname)) {
      return serveStatic(request)
    }

    for (const page of pages) {
      if (page.path === pathname) {
        if (page.resolve.type === 'redirect') {
          return serveRedirect(request)
        }
        if (page.resolve.type === 'back') {
          return page.resolve.resolver(request, page.params)
        }
        if (page.resolve.type === 'react') {
          return renderReact(request, lastUpdated)
        }
      }
    }

    return FourOFour()
  },
})

async function serveRedirect(request: Request) {
  const page = getPage(request, 'redirect') as PageType<RedirectType>
  return await serveStatic(request, page.resolve.path, page.params)
}

async function serveStatic(
  request: Request,
  staticPath?: string,
  params: string[] = []
) {
  const {pathname, searchParams} = getUrl(request)
  const file = Bun.file(`out${staticPath ?? pathname}`)
  if (!(await file.exists())) {
    return await FourOFour()
  }
  const headers = getHeadersForRedirect(params, getCacheDuration(request))
  return new Response(file, headers)
}

function getHeadersForRedirect(
  params: string[],
  cacheDuration = 0
): ResponseInit {
  const cache = {
    'Cache-Control': `max-age=${cacheDuration}`,
  }
  if (params.length === 0) {
    return {
      headers: cache,
    }
  }
  if (params.length === 2) {
    if (params[0] === 'headers' && !!params[1]) {
      return {headers: {...cache, ...JSON.parse(params[1])}}
    }
  }
  return {
    headers: cache,
  }
}

function getCacheDuration(request: Request) {
  const {pathname, searchParams} = getUrl(request)
  if (searchParams.get('hash') === Bun.env.HASH) {
    return 2592000
  }
  if (/^\/static\//.test(pathname)) {
    return 604800
  }
  return 0
}

async function FourOFour(request?: string) {
  return new Response(null, {status: 404, statusText: 'Not found'})
}

console.log(`Listening on ${server.url}`)
