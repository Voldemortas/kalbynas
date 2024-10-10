import Body from '../common/Body'
import Component from './Component'
import type {NavProps} from '../common/Nav'

export default function Index({src, nav}: {src: string; nav: NavProps}) {
  return (
    <Body nav={nav}>
      <Component src={src} />
    </Body>
  )
}
