import getNavigation from 'back/common/navigation'
import getUrl from 'back/pages/common/getUrl'

export default function index(request: Request, params: string[]) {
  const {sub} = getUrl(request)

  const msg = sub === 'en' ? 'English!' : 'Lietuviškai!'

  return {msg, nav: getNavigation(request, '/')}
}
