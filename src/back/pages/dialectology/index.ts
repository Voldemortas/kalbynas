import getNavigation from '../../common/navigation'
import getUrl from '../common/getUrl'
import translations from '../../translations/dialectology'
import getAllTranslated from '../../common/getAllTranslated'

export default function index(request: Request, params: string[]) {
  const {sub} = getUrl(request)

  return {
    ...getAllTranslated(translations, sub),
    nav: getNavigation(request, '/dialectology'),
  }
}
