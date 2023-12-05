import isProd from '~/utils/isProd'
import getLocale from './getLocale'
import type {ApiRespone} from './types'
import {XMLParser} from 'fast-xml-parser'
import streamToString from '~/utils/streamToText'
const disabledCache = true

export default async (request: Request): Promise<ApiRespone> => {
  const locale = getLocale(request) ?? 'lt'

  const body = await getBody(request, locale)

  return {
    body: body ? JSON.stringify(body) : '400',
    init: {
      headers: {
        'Content-type': 'text/json',
        // 'Cache-control':
        //   isProd() && !disabledCache
        //     ? 'public, max-age=' + 60 * 60 * 24
        //     : 'public max-age=60',
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

  const path = `${import.meta.dir}/../pages/${pageId[1]}.xml`
  const file = Bun.file(path)
  const exists = await file.exists()

  if (!exists) {
    console.log('no exists')
    return null
  }

  const parser = new XMLParser({
    ignoreAttributes: false,
    isArray: () => false,
  })

  const stream = file.stream()
  const text = await streamToString(stream)
  const reformatedText = text
    .replaceAll(
      /<language lang="([^]+?)">([^]+?)<\/language>/g,
      '<language type="$1"><![CDATA[$2]]></language>'
    )
    .replaceAll(/<component([^]+?)\/>/g, '<component$1></component>')

  const {page} = parser.parse(reformatedText)

  const parsedBody = (
    page['language'] as {'@_lang': string; '#text': any; '@_type': any}[]
  ).find((x) => x['@_lang'] === locale || x['@_type'] === locale)

  return parsedBody!['#text'].replaceAll(/\s+/g, ' ') ?? null
}

