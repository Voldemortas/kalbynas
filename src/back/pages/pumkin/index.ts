import getNavigation from '../../common/navigation'

export default function index(request: Request, params: string[]) {
  return {src: params[0] ?? ':(', nav: getNavigation(request, '/pumkin')}
}
