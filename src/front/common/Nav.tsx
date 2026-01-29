import React, {useRef} from 'react'
import styles from './nav.module.scss'
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
            styles('link'),
            link.key === selected ? styles('link--selected') : '',
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
        className={styles('hamburger')}
        onClick={() => menuRef.current?.switch()}
        onKeyUp={() => menuRef.current?.switch()}
        role={'button'}
        tabIndex={0}
      >
        ≡
      </div>
      <Dialog ref={menuRef}>{NavLinks}</Dialog>
      <nav className={styles('nav')}>{NavLinks}</nav>
    </>
  )
}
