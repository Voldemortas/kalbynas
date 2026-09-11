import Contact, {url} from 'src/pages/contact/Contact'
import translations from 'src/translations/contact'
import getPageWithAllTranslations from 'src/utils/pageWithAllTranslations'
import renderReactPage from 'src/utils/reactPage'

const NAV_LINK = 'CONTACTS'
const DISCORD = 'https://discordapp.com/users/184706446477361153'
const EMAIL = 'contact@kalbynas.lt'

export default async function getContactsPage({
  request,
}: {
  request: Request
}): Promise<Response> {
  const data = getPageWithAllTranslations<{text: string}>(
    request,
    NAV_LINK,
    translations,
    {
      text: [DISCORD, EMAIL],
    }
  )

  return renderReactPage(data, Contact, url)
}
