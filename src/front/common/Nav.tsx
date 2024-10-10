import React from 'react'
import './common.css'

export type NavProps = {
  selected?: string
  links: {text: string; link: string; key: string}[]
}

export default function Nav({selected = undefined, links}: NavProps) {
  return (
    <nav className="Common__Nav">
      {links.map((link) => (
        <a
          href={link.link}
          key={link.key}
          className={[
            'Common__Nav__Link',
            link.key === selected ? 'Common__Nav__Link--selected' : '',
          ].join(' ')}
        >
          {link.text}
        </a>
      ))}
    </nav>
  )
}
