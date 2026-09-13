import Body from 'src/commons/react/Body'
import {NavProps} from 'src/commons/react/Nav'
import {ALTERNATES_TYPE} from 'src/commons/alternate'

export default function Missing({
  h1,
  text,
  nav,
  pathname,
  locale,
}: {
  h1: string
  text: string
  nav: NavProps
  pathname: string
  locale: ALTERNATES_TYPE
}) {
  return (
    <Body nav={nav} pathname={pathname} locale={locale}>
      <h1>{h1}</h1>
      <p>{text}</p>
    </Body>
  )
}
