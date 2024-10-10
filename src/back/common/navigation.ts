import getUrl from '../pages/common/getUrl'
import nav from '../translations/nav'

const LINKS = [
  {text: 'index', link: '/'},
  {text: 'pumpkin', link: '/pumkin'},
]

export default function getNavigation(request: Request, selected: string) {
  const {sub} = getUrl(request)
  console.log(sub)
  return {
    links: LINKS.map(({link, text}) => ({
      link,
      text: nav[text].format(sub),
      key: link,
    })),
    selected,
  }
}
