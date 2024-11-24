import Body from 'front/common/Body'
import type {NavProps} from 'front/common/Nav'
import Dialectology from './Dialectology'

export default function Index({text, nav}: {text: string; nav: NavProps}) {
  return (
    <Body nav={nav}>
      <Dialectology text={text} />
    </Body>
  )
}
