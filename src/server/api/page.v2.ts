import isProd from '~/utils/isProd'
import getLocale from './getLocale'
import type {ApiRespone} from './types'
const disabledCache = false

export default async (request: Request): Promise<ApiRespone> => {
  const locale = getLocale(request) ?? 'lt'

  const body = await getBody(request, locale)

  return {
    body: body ? JSON.stringify(body) : '400',
    init: {
      headers: {
        'Content-type': 'text/html',
        'Cache-control':
          isProd() && !disabledCache
            ? 'public, max-age=' + 60 * 60 * 24
            : 'public max-age=60',
      },
      status: body ? 200 : 400,
    },
  }
}

async function getBody(request: Request, locale: string) {
  const searchParams = [...new URL(request.url).searchParams.entries()]
  const pageId = searchParams.find(([id]) => id === 'pageId')

  if (!pageId) {
    return null
  }

  const path = `${import.meta.dir}/../pages/${pageId[1]}.${locale}.html`
  const file = Bun.file(path)
  const exists = await file.exists()

  if (!exists) {
    return null
  }
  const text = await file.text()
  return text ?? null
}

