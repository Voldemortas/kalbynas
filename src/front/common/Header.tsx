import React from 'react'
import './common.css'

export default function Header() {
  return (
    <header className="Common__Header">
      <div className="Common__Header__Logo">Kalbyn[ɐ̝]s</div>
      <div className="Common__Header__Languages">
        <a href="/" title="lietuvių k.">
          <img src="/static/lt.png" alt="lietuvių k." />
        </a>
        <a href="/" title="English">
          <img src="/static/en.png" alt="English" />
        </a>
      </div>
    </header>
  )
}
