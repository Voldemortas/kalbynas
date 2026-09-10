import Baltistics, {BaltisticsPageType, url} from './Baltistics'
import translations from 'src/translations/baltistics'
import getPageWithAllTranslations from 'src/utils/pageWithAllTranslations'
import renderReactPage from 'src/utils/reactPage'

const NAV_LINK = '/baltistics'

export default async function getBaltisticsPage({
  request,
}: {
  request: Request
}): Promise<Response> {
  const data = getPageWithAllTranslations<BaltisticsPageType>(
    request,
    NAV_LINK,
    translations
  )

  return renderReactPage(data, Baltistics, url)
}
