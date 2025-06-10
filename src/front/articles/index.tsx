import Body from 'front/common/Body'
import type {NavProps} from 'front/common/Nav'
import Articles from './Articles'

export default function Index({text, nav}: {text: string; nav: NavProps}) {
  return (
    <Body nav={nav}>
      <Articles text={text} />
    </Body>
  )
}
