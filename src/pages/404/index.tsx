import Missing from 'src/pages/404/Missing'
import translations from 'src/translations/missing'
import getPageWithAllTranslations from 'src/utils/pageWithAllTranslations'
import renderReactPage from 'src/utils/reactPage'
import getUrl from 'src/utils/url'

const NAV_LINK = ''

export default async function getMissingPage({
  request,
}: {
  request: Request
}): Promise<Response> {
  const data = getPageWithAllTranslations<{h1: string; text: string}>(
    request,
    NAV_LINK,
    translations
  )

  return renderReactPage(data, Missing, undefined)
}
