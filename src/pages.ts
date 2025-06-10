import IndexBack from './back/pages/index/index'
import DialectologyBack from './back/pages/dialectology/index'
import ArticlesBack from './back/pages/articles/index'
import BaltisticsBack from './back/pages/baltistics/index'
import Robots from './back/static/robots'
import Sitemap from './back/static/sitemap'
import getUrl from './back/pages/common/getUrl'
import SingleArticle from 'back/pages/articles/singleArticle'
import articleList from 'back/pages/articles/allArticles'

const allArticles: PageType<ReactType>[] = articleList.map((_, id) => ({
  path: `/articles/${id}`,
  resolve: {
    type: 'react',
    path: 'front/articles/SingleArticle.ts',
    resolver: SingleArticle,
  },
  params: [],
}))

const config: PageType<ReactType | RedirectType | BackType>[] = [
  {
    path: '/robots.txt',
    resolve: {
      type: 'back',
      resolver: Robots,
    },
    params: [],
  },
  {
    path: '/sitemap.txt',
    resolve: {
      type: 'back',
      resolver: Sitemap,
    },
    params: [],
  },
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
    path: '/articles',
    resolve: {
      type: 'react',
      path: 'front/articles/index.ts',
      resolver: ArticlesBack,
    },
    params: [],
  },
  ...allArticles,
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
    path: '/global.css',
    resolve: {
      type: 'redirect',
      path: '/static/global.scss',
    },
    params: ['headers', '{"content-type": "text/css"}'],
  },
  // {
  //   path: '/api/test',
  //   resolve: {
  //     type: 'back',
  //     resolver: ApiTest,
  //   },
  //   params: ['hello world!'],
  // },
]

export function getPage(
  request: Request,
  resolveType: 'react' | 'redirect' | 'back',
  conf = config
) {
  const {pathname} = getUrl(request)
  return conf.filter(
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
