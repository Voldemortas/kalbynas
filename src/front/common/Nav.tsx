import React, {useRef} from 'react'
import styles from './nav.module.scss'
import Dialog, {type DialogRef} from './Dialog'
import CssSelector from 'front/common/CssSelector.tsx'
import NavTranslations from 'front/translations/NavTranslations.ts'
import getGlobalParams from 'front/common/getGlobalParams.ts'
import type {ALTERNATES_TYPE} from 'build/config.ts'
import osTheme from './cssThemes/osTheme.css' with {type: 'text'}
import darkTheme from './cssThemes/darkTheme.css' with {type: 'text'}
import lightTheme from './cssThemes/lightTheme.css' with {type: 'text'}
import disabledZd from './cssThemes/disabledZd.css' with {type: 'text'}
import dashesZd from './cssThemes/dashesZd.css' with {type: 'text'}
import lithuanianZd from './cssThemes/lithuanianZd.css' with {type: 'text'}

export type NavProps = {
  selected?: string
  links: {text: string; link: string; key: string}[]
}

export default function Nav({selected = undefined, links}: NavProps) {
  const menuRef = useRef<DialogRef>(null)
  const locale = getGlobalParams().locale as ALTERNATES_TYPE

  const THEMES = {
    default: {
      value: osTheme,
      text: NavTranslations.OS.format(locale),
    },
    dark: {
      value: darkTheme,
      text: NavTranslations.dark.format(locale),
    },
    light: {
      value: lightTheme,
      text: NavTranslations.light.format(locale),
    },
  }

  const MORPHEMES = {
    default: {
      value: dashesZd,
      text: NavTranslations.dashes.format(locale),
    },
    disabled: {
      value: disabledZd,
      text: NavTranslations.disabled.format(locale),
    },
    lithuanian: {
      value: lithuanianZd,
      text: NavTranslations.school.format(locale),
    },
  }

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
      {NavTranslations.theme.format(locale)} <br />
      <CssSelector
        storageKey="theme"
        options={THEMES}
        key="theme"
        label={NavTranslations.theme.format(locale)}
      />
      <a
        href="/morpheme-marker"
        className={[
          styles('link'),
          '/morphemes' === selected ? styles('link--selected') : '',
        ].join(' ')}
      >
        {NavTranslations.morphology.format(locale)}
      </a>{' '}
      <CssSelector
        storageKey="zd"
        options={MORPHEMES}
        key="zd"
        label={NavTranslations.morphology.format(locale)}
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
