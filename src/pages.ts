import IndexBack from './back/pages/index/index'
import ApiTest from './back/api/test'

const config: PageType<ReactType | RedirectType | BackType>[] = [
  {
    path: '/',
    resolve: {
      type: 'react',
      path: 'front/index/index.ts',
      resolver: IndexBack,
    },
    params: ['hello world!'],
  },
  {
    path: '/pumkin',
    resolve: {
      type: 'react',
      path: 'front/pumkin/index.ts',
      resolver: IndexBack,
    },
    params: ['Pumkin page'],
  },
  {
    path: '/favicon.ico',
    resolve: {
      type: 'redirect',
      path: 'static/punkim.png',
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

export type PageType<T> = {
  path: string
  resolve: T
  params: string[]
}

export type ReactType = {
  type: 'react'
  path: string
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  resolver: (params: string[]) => Object
}

export type RedirectType = {
  type: 'redirect'
  path: string
}

export type BackType = {
  type: 'back'
  resolver: (params: string[]) => Response
}

export default config
