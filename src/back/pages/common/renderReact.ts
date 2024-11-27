import htmlHeaders from 'back/common/htmlHeaders'
import {getPage, type PageType, type ReactType} from 'src/pages.ts'
import getUrl from './getUrl'
import isProd from './isProd.ts'
import {ALTERNATES, DEFAULT_ALTERNATE, FILES_FOR_BUILD, PROD_HOST,} from 'back/config.ts'
import translations from 'back/translations/renderReact.ts'
import defaultHtml from './default.html'

export default async function renderReact(request: Request, hash: string) {
  const {sub, pathname} = getUrl(request)
  const locale =
    ALTERNATES.find((alternate) => alternate === sub) ?? DEFAULT_ALTERNATE
  const htmlFile = await Bun.file(`${import.meta.dir}/${defaultHtml}`).text()

  const page = getPage(request, 'react') as PageType<ReactType>
  const path = page.resolve.path.replace(/\.ts$/, '')

  const newHtmlFile = htmlFile
    .replace(
      '<script id="dev"></script>',
      isProd() ? '' : await Bun.file(FILES_FOR_BUILD.DEVELOPMENT_HTML).text()
    )
    .replace('const hash = undefined', isProd() ? '' : `const hash = '${hash}'`)
    .replaceAll(
      'const globalParams = undefined',
      `    const globalParams = ${JSON.stringify(page.resolve.resolver(request, page.params))}`
    )
    .replaceAll(/global.css/g, `global.css?hash=${hash}`)
    .replaceAll(/placeholderPath.css/g, `${path}.css?hash=${hash}`)
    .replaceAll(/placeholderPath.js/g, `${path}.js?hash=${hash}`)
    .replaceAll('<html>', `<html lang="${locale}">`)
    .replaceAll(
      '<meta name="description" content="placeholder">',
      `<meta name="description" content="${translations.description.format(locale)}">`
    )
    .replaceAll(
      '<meta name="keywords" content="placeholder">',
      `<meta name="keywords" content="${translations.keywords.format(locale)}">`
    )
    .replaceAll(
      '<title>placeholder</title>',
      `<title>${translations.title.format(locale)}</title>`
    )
    .replaceAll(
      '<link rel="alternate">',
      ALTERNATES.filter((a) => a !== locale)
        .map((alternate) => {
          const subdomain =
            alternate === DEFAULT_ALTERNATE ? '' : `${alternate}.`
          return `<link rel="alternate" hreflang="${alternate}" href="https://${subdomain}${PROD_HOST}${pathname}">`
        })
        .join('\n    ')
    )

  return new Response(newHtmlFile, htmlHeaders)
}
