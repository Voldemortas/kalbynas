import React from 'react'
import './common.css'

export default function Header() {
  return (
    <header className="Common__Header">
      <div className="Common__Header__Logo">Kalbyn[ɐ̝]s</div>
      <div className="Common__Header__Languages">
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
