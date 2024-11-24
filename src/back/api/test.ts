import currentIsoDate from 'back/common/date'
import jsonHeaders from 'back/common/jsonHeaders'

export default function test(request: Request, params: string[]) {
  return new Response(
    JSON.stringify({firstParam: params[0], data: currentIsoDate()}),
    jsonHeaders
  )
}
