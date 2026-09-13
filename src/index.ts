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
import getMissingPage from 'src/pages/404'
import getUrl from 'src/utils/url'

const app = new Elysia()
  .onRequest(({set}) => {
    set.headers['Surrogate-Control'] = 'no-store'
    set.headers['Cache-Control'] =
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    // Deprecated though https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma
    set.headers['Pragma'] = 'no-cache'
    set.headers['Expires'] = '0'
  })
  .onError(({code, set, request}) => {
    console.log('error', getUrl(request).href)
    if (code === 'NOT_FOUND') {
      set.status = 404

      return getMissingPage({request})
    }
  })
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
