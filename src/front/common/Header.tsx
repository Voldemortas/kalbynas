import React, {useRef} from 'react'
import styles from './header.module.scss'
import Dialog, {type DialogRef} from './Dialog'
import {DEFAULT_ALTERNATE} from 'back/config.ts'

export default function Header() {
  const languagesRef = useRef<DialogRef>(null)

  return (
    <header className={styles('header')}>
      <div className={styles('logo')}>
        <a href="/">Kalbyn[ɐ̝]s</a>
      </div>
      <div className={styles('languages--desktop')}>
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
      <div className={styles('languages--mobile')}>
        <div
          style={{
            backgroundImage: 'url("/static/languageIcon.svg")',
            width: 50,
            height: 50,
          }}
          aria-labelledby="language-selector"
          onClick={() => languagesRef.current?.switch()}
          onKeyUp={() => languagesRef.current?.switch()}
          role="button"
          tabIndex={0}
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
  const splitHostName = window.location.hostname.split('.')
  let domain: string
  if (splitHostName.length === 2) {
    domain = window.location.hostname
  } else {
    domain = `${splitHostName[1]}.${splitHostName[2]}`
  }
  const sub = subdomain === DEFAULT_ALTERNATE ? '' : `${subdomain}.`
  const protocol = `${window.location.protocol}//`
  const port = window.location.port === '' ? '' : `:${window.location.port}`
  return protocol + sub + domain + port + window.location.pathname
}
