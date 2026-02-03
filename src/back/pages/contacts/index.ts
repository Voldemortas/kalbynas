import translations from 'back/translations/contact'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'
import type {ReactRoute} from 'voldemortas-server/route'

const NAV_LINK = 'CONTACTS'
const DISCORD = 'https://discordapp.com/users/184706446477361153'
const EMAIL = 'contact@kalbynas.lt'

export default function index(request: Request, route: ReactRoute) {
  return getPageWithAllTranslations(request, NAV_LINK, translations, {
    text: [DISCORD, EMAIL],
  })
}
