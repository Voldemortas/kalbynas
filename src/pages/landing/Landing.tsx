import Body from 'src/commons/react/Body'
import {NavProps} from 'src/commons/react/Nav'
import ReactPagesDictionary from 'src/commons/ReactPageDictionary'
import {REACT_JS_URL_PREFIX} from 'src/utils/hydrate'
import {ALTERNATES_TYPE} from 'src/commons/alternate'

const URL = `${REACT_JS_URL_PREFIX}/landing.js`

ReactPagesDictionary.register(URL, import.meta.path)

export default function Index({
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
      <p dangerouslySetInnerHTML={{__html: text}} />
    </Body>
  )
}

export const url = URL
