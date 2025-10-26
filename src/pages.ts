import {
  Route,
  RedirectRoute,
  BackRoute,
  ReactRoute,
} from 'voldemortas-server/route'
import IndexBack from './back/pages/index/index'
import ContactBack from './back/pages/contacts/index'
import DialectologyBack from './back/pages/dialectology/index'
import ArticlesBack from './back/pages/articles/index'
import BaltisticsBack from './back/pages/baltistics/index'
import Robots from './back/static/robots'
import Sitemap from './back/static/sitemap'
import SingleArticle from 'back/pages/articles/singleArticle'
import articleList from 'back/pages/articles/allArticles'

const routes: Route[] = [
  new BackRoute('/robots.txt', Robots),
  new BackRoute('/sitemap.txt', Sitemap),
  new RedirectRoute('/status/files.json', '/status/files.json'),
  new RedirectRoute('/status/functions.json', '/status/functions.json'),
  new RedirectRoute('/status/lines.json', '/status/lines.json'),
  new RedirectRoute('/status/info', '/status/info'),
  new RedirectRoute('/favicon.ico', '/static/favicon.ico'),
  new RedirectRoute('/global.css', '/static/global.css', [
    'headers',
    '{"content-type": "text/css"}',
  ]),
  new ReactRoute('/', 'front/h1Text/index.ts', IndexBack),
  new ReactRoute('/contact', 'front/h1Text/index.ts', ContactBack),
  new ReactRoute(
    '/dialectology',
    'front/dialectology/index.ts',
    DialectologyBack
  ),
  new ReactRoute('/baltistics', 'front/baltistics/index.ts', BaltisticsBack),
  new ReactRoute('/articles', 'front/articles/index.ts', ArticlesBack),
  ...articleList.map(
    ({id}) =>
      new ReactRoute(
        `/articles/${id.format()}`,
        'front/articles/SingleArticle.ts',
        SingleArticle
      )
  ),
]

export default routes
