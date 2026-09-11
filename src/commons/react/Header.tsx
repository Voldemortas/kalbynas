import React, {useRef} from 'react'
import Dialog, {type DialogRef} from 'src/commons/react/Dialog'
import {DEFAULT_ALTERNATE} from 'src/commons/alternate'
import {feature} from 'bun:bundle'

const {PORT, IS_SSL, HOSTNAME} = feature('CLIENT')
  ? {
      PORT: window.location.port,
      IS_SSL: window.location.protocol === 'https:',
      HOSTNAME: window.location.hostname,
    }
  : await import('src/commons/config')

export default function Header({pathname}: {pathname: string}) {
  const languagesRef = useRef<DialogRef>(null)

  return (
    <header className={'header__header'} suppressHydrationWarning={true}>
      <div className={'header__logo'}>
        <a href="/">Kalbyn[ɐ̝]s</a>
      </div>
      <div className={'header__languages--desktop'}>
        <a
          href={getNewUrl('lt', pathname)}
          title="lietuvių k."
          rel="alternate"
          hrefLang="lt"
        >
          <img src="/static/lt.png" alt="lietuvių k." loading="lazy" />
        </a>
        <a
          href={getNewUrl('en', pathname)}
          title="English"
          rel="alternate"
          hrefLang="en"
        >
          <img src="/static/en.png" alt="English" />
        </a>
      </div>
      <div className={'header__languages--mobile'}>
        <span
          aria-labelledby="language-selector"
          onClick={() => languagesRef.current?.switch()}
          onKeyUp={() => languagesRef.current?.switch()}
          role="button"
          tabIndex={0}
        >
          A/文
        </span>
        <div className="sr-only" id="language-selector">
          <span lang="en">Change language</span>
          <span lang="lt">Pakeisti kalbą</span>
        </div>
      </div>
      <Dialog ref={languagesRef}>
        <a
          href={getNewUrl('lt', pathname)}
          title="lietuvių k."
          rel="alternate"
          hrefLang="lt"
        >
          Lietuvių k.
        </a>
        <br />
        <a
          href={getNewUrl('en', pathname)}
          title="English"
          rel="alternate"
          hrefLang="en"
        >
          English
        </a>
      </Dialog>
    </header>
  )
}

export function getNewUrl(subdomain: string, pathname: string) {
  const splitHostName = HOSTNAME.split('.')
  let domain: string
  if (splitHostName.length === 2) {
    domain = HOSTNAME
  } else {
    domain = `${splitHostName[1]}.${splitHostName[2]}`
  }
  const sub = subdomain === DEFAULT_ALTERNATE ? '' : `${subdomain}.`
  const protocol = `http${IS_SSL ? 's' : ''}://`
  return protocol + sub + domain + ':' + PORT + pathname
}
