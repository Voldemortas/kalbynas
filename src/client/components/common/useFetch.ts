import React, {useEffect, useState} from 'react'

type Status = 'loading' | 'done' | 'error'

export default function useFetch<T>(
  url: string,
  payload: FetchRequestInit = {}
) {
  const [state, setState] = useState<{
    status: Status
    data: T | undefined
    error: string | undefined
  }>({
    status: 'loading',
    data: undefined,
    error: undefined,
  })

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    fetch(url, {signal, ...payload})
      .then(async (response) => {
        const json = (await response.json()) as T
        setState({
          status: 'done',
          data: json,
          error: undefined,
        })
      })
      .catch((error) => {
        setState({
          status: 'error',
          error,
          data: undefined,
        })
      })
    return () => {
      controller.abort()
    }
  }, [])

  return state
}

