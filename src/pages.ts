import IndexBack from './back/pages/index/index'
import DialectologyBack from './back/pages/dialectology/index'
import BaltisticsBack from './back/pages/baltistics/index'
import ApiTest from './back/api/test'
import getUrl from './back/pages/common/getUrl'

const config: PageType<ReactType | RedirectType | BackType>[] = [
  {
    path: '/',
    resolve: {
      type: 'react',
      path: 'front/index/index.ts',
      resolver: IndexBack,
    },
    params: [],
  },
  {
    path: '/dialectology',
    resolve: {
      type: 'react',
      path: 'front/dialectology/index.ts',
      resolver: DialectologyBack,
    },
    params: [],
  },
  {
    path: '/baltistics',
    resolve: {
      type: 'react',
      path: 'front/baltistics/index.ts',
      resolver: BaltisticsBack,
    },
    params: [],
  },
  {
    path: '/favicon.ico',
    resolve: {
      type: 'redirect',
      path: '/static/favicon.ico',
    },
    params: [],
  },
  {
    path: '/api/test',
    resolve: {
      type: 'back',
      resolver: ApiTest,
    },
    params: ['hello world!'],
  },
]

export function getPage(
  request: Request,
  resolveType: 'react' | 'redirect' | 'back'
) {
  const {pathname} = getUrl(request)
  return config.filter(
    ({path, resolve}) => path === pathname && resolve.type === resolveType
  )[0]
}

export type PageType<T> = {
  path: string
  resolve: T
  params: string[]
}

export type ReactType = {
  type: 'react'
  path: string
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  resolver: (request: Request, params: string[]) => Object
}

export type RedirectType = {
  type: 'redirect'
  path: string
}

export type BackType = {
  type: 'back'
  resolver: (request: Request, params: string[]) => Response
}

export default config
