import {jsonHeaders} from 'voldemortas-server/utils'
import {formatError} from 'back/api/errors.ts'

const FORMAT_KEYS = ['json'] as const

export const FORMATS: Record<
  (typeof FORMAT_KEYS)[number],
  (obj: Object) => Response
> = {
  json,
}

function json(obj: Object): Response {
  return new Response(JSON.stringify(obj), jsonHeaders)
}

export default function format(formatter: string, obj: Object): Response {
  if (!Object.keys(FORMATS).includes(formatter)) {
    throw formatError
  }
  return FORMATS[formatter as keyof typeof FORMATS](obj)
}
