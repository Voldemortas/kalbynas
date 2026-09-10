import Body from 'src/commons/react/Body'
import {NavProps} from 'src/commons/react/Nav'
import ReactPageResolver from 'src/commons/ReactPageDictionary'
import {REACT_JS_URL_PREFIX} from 'src/utils/hydrate'
import {ALTERNATES_TYPE} from 'src/commons/alternate'

const URL = `${REACT_JS_URL_PREFIX}/contact.js`

ReactPageResolver.register(URL, import.meta.path)

export default function Contact({
  text,
  nav,
  pathname,
  locale,
}: {
  text: string
  nav: NavProps
  pathname: string
  locale: ALTERNATES_TYPE
}) {
  return (
    <Body nav={nav} pathname={pathname} locale={locale}>
      <p dangerouslySetInnerHTML={{__html: text}} />
    </Body>
  )
}

export const url = URL
