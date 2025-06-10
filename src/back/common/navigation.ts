import getUrl from 'back/pages/common/getUrl'
import translations from 'back/translations/nav'

const LINKS = [
  {text: 'dialectology', link: '/dialectology'},
  {text: 'baltistics', link: '/baltistics'},
  {text: 'articles', link: '/articles'},
]

export default function getNavigation(request: Request, selected: string) {
  const {sub} = getUrl(request)
  return {
    links: LINKS.map(({link, text}) => ({
      link,
      text: translations[text].format(sub),
      key: link,
    })),
    selected,
  }
}
