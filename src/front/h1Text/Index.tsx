import Body from 'front/common/Body'
import type {NavProps} from 'front/common/Nav'

export default function Index({
  h1,
  text,
  nav,
}: {
  h1: string
  text: string
  nav: NavProps
}) {
  return (
    <Body nav={nav}>
      <h1>{h1}</h1>
      <p dangerouslySetInnerHTML={{__html: text}} />
    </Body>
  )
}
