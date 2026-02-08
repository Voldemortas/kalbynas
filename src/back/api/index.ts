import type {ReactRoute} from 'voldemortas-server/route'
import {getUrl, getRegexParams} from 'voldemortas-server/utils'
import {groupsError, threeRootsError} from 'back/api/errors.ts'
import {GROUPS} from 'back/api/verbGroups.ts'
import format from 'back/api/formatters.ts'
import type {
  GroupKeysType,
  InflectedRootsType,
  SpeechPartsKeysType,
} from 'back/api/types.ts'

const SPEECH_PARTS: Record<
  SpeechPartsKeysType,
  (roots: string, groups: string) => InflectedRootsType
> = {
  verb,
}

function verb(rootsFromUrl: string, groupsFromUrl: string): InflectedRootsType {
  const roots = decodeURI(rootsFromUrl)
    .split(',')
    .map((r) => r.split('-'))

  if (roots.some((root) => root.length !== 3)) {
    throw threeRootsError
  }

  const groups = groupsFromUrl.split(',')
  if (!groups.every((g) => Object.keys(GROUPS).includes(g))) {
    throw groupsError
  }
  return Object.fromEntries(
    roots.map((r) => [
      r.join('-'),
      Object.fromEntries(
        groups.map((g) => [g as GroupKeysType, GROUPS[g as GroupKeysType](r)])
      ),
    ])
  )
}

export default function index(request: Request, route: ReactRoute) {
  const {sub} = getUrl(request)

  if (sub !== 'api') {
    return new Response(null, {status: 404, statusText: 'Not found'})
  }

  const [, speechPart, roots, groups, formatter] = getRegexParams(
    request,
    route
  )

  if (!Object.keys(SPEECH_PARTS).includes(speechPart)) {
    return new Response('Speech part not recognised', {
      status: 400,
    })
  }

  try {
    return format(formatter, SPEECH_PARTS[speechPart](roots, groups))
  } catch (e: any) {
    const {message} = e as unknown as Error
    return new Response(message, {
      status: 400,
    })
  }
}
