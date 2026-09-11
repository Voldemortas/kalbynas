import ReactPageDictionary from 'src/commons/ReactPageDictionary'
import getLocale from 'src/utils/locale'

export const REACT_JS_URL_PREFIX = '/pages'

export default async function hydrateReact({
  params,
  request,
}: {
  params: {['*']: string}
  request: Request
}): Promise<Response> {
  const id = params['*']

  const urlPath = `${REACT_JS_URL_PREFIX}/${id}`

  if (!ReactPageDictionary.getUrls().includes(urlPath)) {
    return new Response('NOT_FOUND', {status: 404})
  }

  const locale = getLocale(request)

  const {path, client} = ReactPageDictionary.getPath(urlPath)![locale]

  const build = await Bun.build({
    entrypoints: [path],
    target: 'browser',
    format: 'esm',
    external: ['react', 'react/*', 'react-dom', 'react-dom/*'],
    features: [
      ...(client ? ['CLIENT'] : []),
      ...(Bun.env.NODE_ENV?.toLowerCase() === 'production'
        ? ['PRODUCTION']
        : []),
    ],
    minify: Bun.env.NODE_ENV?.toLowerCase() === 'production',
  })

  if (!build.success) {
    console.error(build.logs)
    return new Response('Build failed', {status: 500})
  }

  const javascript = await build.outputs[0].text()

  return new Response(javascript, {
    headers: {
      'Content-Type': 'text/javascript; charset=utf-8',
    },
  })
}
