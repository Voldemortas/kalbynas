import {ALTERNATES, DEFAULT_ALTERNATE, PROD_HOST} from 'build/config.ts'
import translations from 'back/translations/renderReact.ts'
import type {ReactRoute, Route} from 'voldemortas-server/route'
import {getPage, getUrl, htmlHeaders, isProd} from 'voldemortas-server/utils'

export default async function renderReact(
  request: Request,
  hash: string,
  routes: Route[],
  defaultHtml: string,
  developmentHtml: string,
  replaceFn: (htmlContent: string) => string = (x) => x
) {
  const {sub, pathname} = getUrl(request)
  const locale =
    ALTERNATES.find((alternate) => alternate === sub) ?? DEFAULT_ALTERNATE
  const htmlFile = await Bun.file(
    defaultHtml.replaceAll(/^\./g, import.meta.dir)
  ).text()

  const page = getPage(request, 'react', routes) as ReactRoute
  const path = page.reactPath.replace(/\.tsx$/, '')
  const devHtmlFile = Bun.file(developmentHtml)
  const devHtml =
    !isProd() && (await devHtmlFile.exists()) ? await devHtmlFile.text() : ''

  const newHtmlFile = htmlFile
    .replace('<script id="dev"></script>', devHtml)
    .replace(
      /([^\S\r\n]+)const hash = undefined\n/,
      isProd() ? '' : `$1const hash = '${hash}'\n`
    )
    .replace('const hash = undefined', isProd() ? '' : `const hash = '${hash}'`)
    .replaceAll(
      'const globalParams = undefined',
      `const globalParams = ${JSON.stringify(page.resolver(request, page))}`
    )
    .replaceAll(/global.css/g, `global.css?hash=${hash}`)
    .replaceAll(/placeholderPath.css/g, `${path}.css?hash=${hash}`)
    .replaceAll(/placeholderPath.js/g, `${path}.js?hash=${hash}`)
    .replaceAll('<html>', `<html lang="${locale}">`)
    .replaceAll(
      '<meta name="description" content="placeholder" />',
      `<meta name="description" content="${translations.description.format(locale)}"/>`
    )
    .replaceAll(
      '<meta name="keywords" content="placeholder" />',
      `<meta name="keywords" content="${translations.keywords.format(locale)}"/>`
    )
    .replaceAll(
      '<title>placeholder</title>',
      `<title>${translations.title.format(locale)}</title>`
    )
    .replaceAll(
      '<link rel="alternate" />',
      ALTERNATES.filter((a) => a !== locale)
        .map((alternate) => {
          const subdomain =
            alternate === DEFAULT_ALTERNATE ? '' : `${alternate}.`
          return `<link rel="alternate" hreflang="${alternate}" href="https://${subdomain}${PROD_HOST}${pathname}"/>`
        })
        .join('\n    ')
    )

  return new Response(newHtmlFile, htmlHeaders)
}
