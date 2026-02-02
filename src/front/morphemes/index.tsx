import Body from 'front/common/Body'
import type {NavProps} from 'front/common/Nav'
import Morphemes, {type MorphemesPageType} from './Morphemes.tsx'

export default function Index(props: {nav: NavProps} & MorphemesPageType) {
  return (
    <Body nav={props.nav}>
      <Morphemes {...props} />
    </Body>
  )
}
