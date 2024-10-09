import pages, {type BackType, type PageType, type ReactType} from '../pages'
import renderReact from './pages/common/renderReact'

const server = Bun.serve({
  port: 3008,
  async fetch(request) {
    const {sub, pathname, href} = getUrl(request)

    if (/^\/static\//.test(pathname)) {
      return serveStatic(`out${pathname}`)
    }
    if (/^\/front\//.test(pathname)) {
      return serveStatic(`out${pathname}`)
    }

    for (const page of pages) {
      if (page.path === pathname) {
        if (page.resolve.type === 'redirect') {
          return serveStatic(`out/${page.resolve.path}`)
        }
        if (page.resolve.type === 'back') {
          return page.resolve.resolver(page.params)
        }
        if (page.resolve.type === 'react') {
          const reactParams = page.resolve.resolver(page.params)

          return renderReact(page.resolve.path as string, reactParams)
        }
      }
    }

    return FourOFour()
  },
})

function getUrl(request: Request) {
  const url = new URL(request.url)
  const sub = url.hostname.split('.')[0]
  const pathname = url.pathname
  const href = url.href

  return {sub, pathname, href}
}

async function serveStatic(pathname: string) {
  const file = Bun.file(pathname)
  if (!(await file.exists())) {
    return await FourOFour()
  }
  return new Response(file)
}

async function FourOFour(pathname?: string) {
  return new Response(null, {status: 404, statusText: 'Not found'})
}

console.log(`Listening on ${server.url}`)
