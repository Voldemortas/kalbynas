import React, {useRef} from 'react'
import './header.css'
import Dialog, {type DialogRef} from './Dialog'

export default function Header() {
  const languagesRef = useRef<DialogRef>(null)

  return (
    <header className="Common__Header">
      <div className="Common__Header__Logo">
        <a href="/">Kalbyn[ɐ̝]s</a>
      </div>
      <div className="Common__Header__Languages--desktop">
        <a
          href={getNewUrl('lt')}
          title="lietuvių k."
          rel="alternate"
          hrefLang="lt"
        >
          <img src="/static/lt.png" alt="lietuvių k." />
        </a>
        <a href={getNewUrl('en')} title="English" rel="alternate" hrefLang="en">
          <img src="/static/en.png" alt="English" />
        </a>
      </div>
      <div className="Common__Header__Languages--mobile">
        <div
          style={{
            backgroundImage: 'url("/static/languageIcon.svg")',
            width: 50,
            height: 50,
          }}
          aria-labelledby="language-selector"
          onClick={() => languagesRef.current?.switch()}
          onKeyUp={() => languagesRef.current?.switch()}
        />
        <div className="sr-only" id="language-selector">
          <span lang="en">Change language</span>
          <span lang="lt">Pakeisti kalbą</span>
        </div>
      </div>
      <Dialog ref={languagesRef}>
        <a
          href={getNewUrl('lt')}
          title="lietuvių k."
          rel="alternate"
          hrefLang="lt"
        >
          Lietuvių k.
        </a>
        <br />
        <a href={getNewUrl('en')} title="English" rel="alternate" hrefLang="en">
          English
        </a>
      </Dialog>
    </header>
  )
}

function getNewUrl(subdomain: string) {
  const DEFAULT_LOCALE = 'lt'
  const splitHostName = window.location.hostname.split('.')
  let domain: string
  if (splitHostName.length === 2) {
    domain = window.location.hostname
  } else {
    domain = `${splitHostName[1]}.${splitHostName[2]}`
  }
  const sub = subdomain === DEFAULT_LOCALE ? '' : `${subdomain}.`
  const protocol = `${window.location.protocol}//`
  const port = window.location.port === '' ? '' : `:${window.location.port}`
  return protocol + sub + domain + port + window.location.pathname
}
