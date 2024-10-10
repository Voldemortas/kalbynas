import getNavigation from '../../common/navigation'
import getUrl from '../common/getUrl'

export default function index(request: Request, params: string[]) {
  const {sub} = getUrl(request)

  const msg = sub === 'en' ? 'English!' : 'Lietuviškai!'

  return {msg, nav: getNavigation(request, '/')}
}
