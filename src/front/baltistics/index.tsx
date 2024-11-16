import Body from '../common/Body'
import type {NavProps} from '../common/Nav'
import Baltistics, {type BaltisticsPageType} from './Baltistics'

export default function Index(props: {nav: NavProps} & BaltisticsPageType) {
  return (
    <Body nav={props.nav}>
      <Baltistics {...props} />
    </Body>
  )
}
