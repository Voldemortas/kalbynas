import getUrl from '../pages/common/getUrl'
import translations from '../translations/nav'

const LINKS = [
  {text: 'dialectology', link: '/dialectology'},
  {text: 'baltistics', link: '/baltistics'},
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
