import translations from 'back/translations/contact'
import getPageWithAllTranslations from 'back/pages/common/getPageWithAllTranslations.ts'

const NAV_LINK = 'CONTACTS'
const DISCORD = 'discord://-users/184706446477361153'
const EMAIL = 'contact@kalbynas.lt'

export default function index(request: Request, params: string[]) {
  return getPageWithAllTranslations(request, NAV_LINK, translations, { text: [DISCORD, EMAIL] })
}

