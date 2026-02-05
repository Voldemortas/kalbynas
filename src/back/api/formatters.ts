import {jsonHeaders} from 'voldemortas-server/utils'
import {formatError} from 'back/api/errors.ts'

function formatXml(xml: string, tab: string = '\t') {
  let formatted = '',
    indent = ''
  xml.split(/>\s*</).forEach(function (node) {
    if (node.match(/^\/\w/)) indent = indent.substring(tab.length) // decrease indent by one 'tab'
    formatted += indent + '<' + node + '>\r\n'
    if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab // increase indent
  })
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    formatted.substring(1, formatted.length - 3)
  )
}

const FORMAT_KEYS = ['json', 'xml'] as const

export const FORMATS: Record<
  (typeof FORMAT_KEYS)[number],
  (obj: Record<string, Record<string, any>>) => Response
> = {
  json,
  xml,
}

function json(obj: Record<string, Record<string, any>>): Response {
  return new Response(JSON.stringify(obj), jsonHeaders)
}

function xml(obj: Record<string, Record<string, any>>): Response {
  function generateTag(
    name: string,
    children: string[] | string = [],
    data: Record<string, string | number> = {}
  ) {
    const tail = `</${name}>`
    const head = `<${name} ${Object.entries(data)
      .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
      .join(' ')}>`.replace(/\s>$/, '>')
    if (children.length === 0) {
      return head.replace(/>$/, ' />')
    }

    if ([...children].flat().length === 1) {
      return `${head}${children as string}</${name}>`
    }

    return head + '\n' + [...children].join('\n') + '\n' + tail
  }

  function generateTagsRecursively(obj: Record<string, any>): string[] {
    return Object.entries(obj).map((entry) => {
      const [key, value] = entry
      if (typeof value === 'string') {
        return generateTag(key, [value])
      }
      return generateTag(key, generateTagsRecursively(obj[key]))
    })
  }

  const tags = generateTag(
    'results',
    Object.entries(obj).map(([roots, value]) => {
      return generateTag('form', generateTagsRecursively(value), {roots})
    })
  )

  return new Response(formatXml(tags), {
    headers: {'content-type': 'application/xml'},
  })
}

export default function format(
  formatter: string,
  obj: Record<string, Record<string, any>>
): Response {
  if (!Object.keys(FORMATS).includes(formatter)) {
    throw formatError
  }
  return FORMATS[formatter as keyof typeof FORMATS](obj)
}
