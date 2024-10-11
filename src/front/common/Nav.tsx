import React, {useRef} from 'react'
import './nav.css'
import Dialog, {type DialogRef} from './Dialog'

export type NavProps = {
  selected?: string
  links: {text: string; link: string; key: string}[]
}

export default function Nav({selected = undefined, links}: NavProps) {
  const menuRef = useRef<DialogRef>(null)

  const NavLinks = (
    <>
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
    </>
  )

  return (
    <>
      <div
        className="Common__Nav__Hamburger"
        onClick={() => menuRef.current?.switch()}
        onKeyUp={() => menuRef.current?.switch()}
      >
        ≡
      </div>
      <Dialog ref={menuRef}>{NavLinks}</Dialog>
      <nav className="Common__Nav">{NavLinks}</nav>
    </>
  )
}
