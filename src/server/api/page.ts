import isProd from '~/utils/isProd'
import getLocale from './getLocale'
import type {ApiRespone} from './types'
import {XMLParser} from 'fast-xml-parser'
import streamToString from '~/utils/streamToText'
import type {AjaxPageModel} from '~/client/components/AjaxPage'

export default async (request: Request): Promise<ApiRespone> => {
  const locale = getLocale(request) ?? 'lt'

  const body = await getBody(request, locale)

  return {
    body: body ? JSON.stringify(body) : '400',
    init: {
      headers: {
        'Content-type': 'text/json',
        'Cache-control': isProd()
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

  const path = `${import.meta.dir}/../pages/${pageId[1]}.xml`
  const file = Bun.file(path)
  const exists = await file.exists()

  if (!exists) {
    return null
  }

  const parser = new XMLParser({
    ignoreAttributes: false,
    isArray: () => false,
  })
  const stream = file.stream()
  const text = await streamToString(stream)
  const {page} = parser.parse(text)

  const parsedBody = (
    (page['language'] as {'@_lang': string; body: any}[]).find(
      (x) => x['@_lang'] === locale
    ) as {
      body: {
        content: (
          | {['#text']: string; ['@_type']: 'html'}
          | {
              ['@_type']: 'component'
              ['@_name']: string
              ['@_path']: string
              ['@_params']: string | undefined | null
            }
        )[]
      }
    }
  ).body.content

  return [parsedBody].flat().map((element) => {
    return Object.entries(element).reduce(
      (acc, [key, value]) => ({...acc, [key.replace(/(@_)|#/, '')]: value}),
      {}
    )
  }) as AjaxPageModel
}

