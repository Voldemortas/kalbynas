import Landing, {url} from 'src/pages/landing/Landing'
import translations from 'src/translations/landing'
import getPageWithAllTranslations from 'src/utils/pageWithAllTranslations'
import renderReactPage from 'src/utils/reactPage'

const NAV_LINK = ''

export default async function getLandingPage({
  request,
}: {
  request: Request
}): Promise<Response> {
  const data = getPageWithAllTranslations<{h1: string; text: string}>(
    request,
    NAV_LINK,
    translations
  )

  return renderReactPage(data, Landing, url)
}
