import getUrl from 'back/pages/common/getUrl'
import translations from 'back/translations/nav'
import type { ALTERNATES_TYPE } from 'back/config.ts'

const LINKS = [
  { text: 'dialectology', link: '/dialectology' },
  { text: 'baltistics', link: '/baltistics' },
  { text: 'articles', link: '/articles' },
  { text: 'contact', link: '/contact' },
]

export default function getNavigation(request: Request, selected: string) {
  const { sub } = getUrl(request)
  return {
    links: LINKS.map(({ link, text }) => ({
      link,
      text: translations[text].format(sub as ALTERNATES_TYPE),
      key: link,
    })),
    selected,
  }
}
