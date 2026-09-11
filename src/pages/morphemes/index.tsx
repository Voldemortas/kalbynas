import Morphemes, {MorphemesPageType, url} from 'src/pages/morphemes/Morphemes'
import translations from 'src/translations/morphemes'
import getPageWithAllTranslations from 'src/utils/pageWithAllTranslations'
import renderReactPage from 'src/utils/reactPage'

const NAV_LINK = ''

export default async function getMorphemesPage({
  request,
}: {
  request: Request
}): Promise<Response> {
  const data = getPageWithAllTranslations<MorphemesPageType>(
    request,
    NAV_LINK,
    translations
  )

  return renderReactPage(data, Morphemes, url)
}
