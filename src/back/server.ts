import pages, {getPage, type PageType, type RedirectType} from '../pages'
import renderReact from './pages/common/renderReact'
import getUrl from './pages/common/getUrl'

const server = Bun.serve({
  port: Bun.env.KALBYNAS_PORT,
  async fetch(request) {
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
          return renderReact(request)
        }
      }
    }

    return FourOFour()
  },
})

async function serveRedirect(request: Request) {
  const page = getPage(request, 'redirect') as PageType<RedirectType>
  return await serveStatic(request, page.resolve.path)
}

async function serveStatic(request: Request, staticPath?: string) {
  const {pathname} = getUrl(request)
  const file = Bun.file(`out${staticPath ?? pathname}`)
  if (!(await file.exists())) {
    return await FourOFour()
  }
  return new Response(file)
}

async function FourOFour(request?: string) {
  return new Response(null, {status: 404, statusText: 'Not found'})
}

console.log(`Listening on ${server.url}`)
