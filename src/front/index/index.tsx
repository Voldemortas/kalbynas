import Body from 'front/common/Body'
import type {NavProps} from 'front/common/Nav'

export default function Index({msg, nav}: {msg: string; nav: NavProps}) {
  return <Body nav={nav}>{msg}</Body>
}
