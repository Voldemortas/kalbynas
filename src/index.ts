import {Elysia} from 'elysia'
import {staticPlugin} from '@elysia/static'
import hydrateReact, {REACT_JS_URL_PREFIX} from 'src/utils/hydrate'
import {PORT, PROJECT_BASE_URL} from 'src/commons/config'
import getLandingPage from 'src/pages/landing'
import getBaltisticsPage from 'src/pages/baltistics'
import getDialectologyPage from 'src/pages/dialectology'
import getMorphemesPage from 'src/pages/morphemes'
import getArticleList from 'src/pages/articles/articleListHandler'
import singleArticleHandler from 'src/pages/articles/singleArticleHandler'
import getContactsPage from 'src/pages/contact'
import robots from 'src/pages/crawlers/robots'
import sitemaps from 'src/pages/crawlers/sitemap'
import allArticles from 'src/pages/articles/allArticles'

const app = new Elysia()
  .get('/', getLandingPage)
  .get('/baltistics', getBaltisticsPage)
  .get('/dialectology', getDialectologyPage)
  .get('/contact', getContactsPage)
  .get('/morpheme-marker', getMorphemesPage)
  .get('/articles', getArticleList)

const paths = app.routes.map((x) => x.path)

app
  .use(staticPlugin({assets: 'src/static', prefix: '/static'}))
  .get(`${REACT_JS_URL_PREFIX}/*`, hydrateReact)
  .get('/articles/*', singleArticleHandler)
  .get('/robots.txt', robots)
  .get('/sitemap.txt', ({request}) =>
    sitemaps(request, paths, {
      '/articles': allArticles.map((x) => x.id.format()),
    })
  )
  .get(
    '/favicon.ico',
    () => new Response(Bun.file(`${import.meta.dirname}/static/favicon.ico`))
  )
  .listen({
    port: PORT,
  })

console.log(
  `🦊 Elysia is running [${Bun.env.NODE_ENV?.toLowerCase() === 'production' ? 'PROD' : 'DEV'}] build at ${PROJECT_BASE_URL}`
)
