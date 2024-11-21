import htmlHeaders from '../../common/htmlHeaders'
import htmlTemplate from './default.html'
import {getPage, type PageType, type ReactType} from '../../../pages'
import getUrl from './getUrl'

const title = {
  lt: 'kalbynas.lt - Pakalbėkim apie kalbą',
  en: "en.kalbynas.lt - Let's talk about language",
}
const description = {
  lt: 'Visokie su lietuvių kalba susiję dalykėliai',
  en: 'Various mostly Lithuanian language related things',
}
const keywords = {
  lt: 'Lingvistika, Lituanistika, Kalbotyra, Baltistika',
  en: 'Linguistics, Lithuanistics, Baltistics',
}
const alternates = ['lt', 'en']
const defaultLocale = 'lt'

export default async function renderReact(request: Request) {
  const hash = Bun.env.HASH
  const {sub, pathname} = getUrl(request)
  const locale = (alternates.find((a) => a === sub) ?? defaultLocale) as
    | 'lt'
    | 'en'
  const htmlFile = await Bun.file(`${import.meta.dir}/${htmlTemplate}`).text()
  const page = getPage(request, 'react') as PageType<ReactType>
  const path = page.resolve.path.replace(/\.ts$/, '')

  const newHtmlFile = htmlFile
    .replaceAll(
      'const globalParams = undefined',
      `const globalParams = ${JSON.stringify(page.resolve.resolver(request, page.params))}`
    )
    .replaceAll(/global.css/g, `global.css?hash=${hash}`)
    .replaceAll(/placeholderPath.css/g, `${path}.css?hash=${hash}`)
    .replaceAll(/placeholderPath.js/g, `${path}.js?hash=${hash}`)
    .replaceAll('<html>', `<html lang="${locale}">`)
    .replaceAll(
      '<meta name="description" content="placeholder">',
      `<meta name="description" content="${description[locale]}">`
    )
    .replaceAll(
      '<meta name="keywords" content="placeholder">',
      `<meta name="keywords" content="${keywords[locale]}">`
    )
    .replaceAll('<title>placeholder</title>', `<title>${title[locale]}</title>`)
    .replaceAll(
      '<link rel="alternate">',
      alternates
        .filter((a) => a !== locale)
        .map((alternate) => {
          const subdomain = alternate === defaultLocale ? '' : `${alternate}.`
          return `<link rel="alternate" hreflang="${alternate}" href="https://${subdomain}kalbynas.lt${pathname}">`
        })
        .join('\n    ')
    )

  return new Response(newHtmlFile, htmlHeaders)
}
