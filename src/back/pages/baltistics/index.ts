import getNavigation from 'back/common/navigation'
import getUrl from 'back/pages/common/getUrl'
import translations from 'back/translations/baltistics'
import getAllTranslated from 'back/common/getAllTranslated'

export default function index(request: Request, params: string[]) {
  const {sub} = getUrl(request)

  return {
    ...getAllTranslated(translations, sub),
    nav: getNavigation(request, '/baltistics'),
  }
}
