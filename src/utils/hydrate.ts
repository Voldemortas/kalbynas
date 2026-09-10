import ReactPageDictionary from 'src/commons/ReactPageDictionary'

export const REACT_JS_URL_PREFIX = '/pages'

export default async function hydrateReact({
  params,
}: {
  params: {['*']: string}
}): Promise<Response> {
  const id = params['*']

  const urlPath = `${REACT_JS_URL_PREFIX}/${id}`

  if (!ReactPageDictionary.getUrls().includes(urlPath)) {
    return new Response('NOT_FOUND', {status: 404})
  }

  const componentPath = ReactPageDictionary.getPath(urlPath)!

  const build = await Bun.build({
    entrypoints: [componentPath],
    target: 'browser',
    format: 'esm',
    external: ['react', 'react/*', 'react-dom', 'react-dom/*'],
    features: ['CLIENT'],
    minify: Bun.env.NODE_ENV === 'production',
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
