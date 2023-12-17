import changeUrlToLocale from '~/client/components/common/changeUrlToLocale'
import config from '~/client/components/getConfig'

export default function generateHtml(options: GenerateHtmlOptions) {
  const componentScript = options.component
    ? `<script type="module">
    import Component from '${options.component}'

    const domContainer = document.querySelector("#root")
    const root = ReactDOM.createRoot(domContainer)
    root.render(React.createElement(React.StrictMode,null,React.createElement(Component, ${JSON.stringify(
      options.pageData ?? {}
    )})))
</script>`
    : ''
  return `<!DOCTYPE html>
<html ${options.language ? `lang="${options.language}"` : ''}>
  <head>
    ${options.head?.replaceAll('\n', '\n    ')}
    <style>
        * {}
    </style>
    <link rel="stylesheet" href="/assets/common.css">
    <link rel="preload" as="image" href="/assets/lt.png">
    <link rel="preload" as="image" href="/assets/en.png">
    <link href='/assets/DoulosSIL.css' rel='stylesheet'>
  </head>
    <body>
    ${options.basicHtml.replaceAll('\n', '\n    ')}
    ${componentScript.replaceAll('\n', '\n    ')}
  </body>
</html>`
}

export function generateMeta(locale: 'en' | 'lt' | '', pathName: string) {
  const language = locale || (config.defaultLanguage as 'en' | 'lt')
  const otherLanguages = config.acceptedLanguages.filter((x) => x !== language)
  const DESCRIPTIONS = {
    lt: 'Visokie su lietuvių kalba susiję dalykėliai',
    en: 'Various mostly Lithuanian language related things',
  }

  const KEYWORDS = {
    lt: 'Lingvistika, Lituanistika, Kalbotyra, Baltistika',
    en: 'Linguistics, Lithuanistics, Baltistics',
  }
  return `
<meta name="description" content="${DESCRIPTIONS[language]}">
<meta name="keywords" content="${KEYWORDS[language]}">
${otherLanguages.map(
  (otherLang) =>
    `<link rel="alternate" hreflang="${otherLang}" href="https://kalbynas.lt${changeUrlToLocale(
      otherLang,
      pathName
    ).replace('#', '')}">`
)}`
}
export function generateTitle(locale: 'en' | 'lt' | '') {
  const language = locale || (config.defaultLanguage as 'en' | 'lt')
  const TITLES = {
    lt: 'Kalbynas.lt - Pakalbėkim apie kalbą',
    en: "Kalbynas.lt/en - Let's talk about language",
  }

  return TITLES[language]
}

interface GenerateHtmlOptions {
  basicHtml: string
  component?: string
  head?: string
  language?: string
  pageData?: object
}

