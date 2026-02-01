import React, {useRef} from 'react'
import styles from './nav.module.scss'
import Dialog, {type DialogRef} from './Dialog'
import CssSelector from 'front/common/CssSelector.tsx'
import NavTranslations from 'front/translations/NavTranslations.ts'
import getGlobalParams from 'front/common/getGlobalParams.ts'
import type {ALTERNATES_TYPE} from 'build/config.ts'

const locale = getGlobalParams().locale as ALTERNATES_TYPE

const THEMES = {
  default: {
    value: `:root {
  color-scheme: light dark;
  @media (prefers-color-scheme: light) {
    color-scheme: light;
  }
  @media (prefers-color-scheme: dark) {
    color-scheme: dark;
  }
}
}`,
    text: NavTranslations.OS.format(locale),
  },
  dark: {
    value: `:root {
  color-scheme: dark;
}`,
    text: NavTranslations.dark.format(locale),
  },
  light: {
    value: `:root {
  color-scheme: light;
}`,
    text: NavTranslations.light.format(locale),
  },
}

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
      <CssSelector
        storageKey="theme"
        label={NavTranslations.theme.format(locale)}
        options={THEMES}
      />
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
