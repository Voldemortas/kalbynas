import Body from '../common/Body'
import type {NavProps} from '../common/Nav'

export default function Index({msg, nav}: {msg: string; nav: NavProps}) {
  return <Body nav={nav}>{msg}</Body>
}
