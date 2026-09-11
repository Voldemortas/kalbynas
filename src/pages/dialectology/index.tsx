import Dialectology, {url} from 'src/pages/dialectology/Dialectology'
import translations from 'src/translations/dialectology'
import getPageWithAllTranslations from 'src/utils/pageWithAllTranslations'
import renderReactPage from 'src/utils/reactPage'

const NAV_LINK = ''

export default async function getLandingPage({
  request,
}: {
  request: Request
}): Promise<Response> {
  const data = getPageWithAllTranslations<{text: string}>(
    request,
    NAV_LINK,
    translations
  )

  return renderReactPage(data, Dialectology, url)
}
