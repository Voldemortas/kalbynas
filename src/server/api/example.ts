import type {ApiRespone} from './types'

export default async (request: Request): Promise<ApiRespone> => {
  const body = {
    method: request.method,
  }

  return {
    body: JSON.stringify(body),
    init: {headers: {'Content-type': 'text/json'}},
  }
}

