import React, {useRef} from 'react'
import styles from './nav.module.scss'
import Dialog, {type DialogRef} from './Dialog'
import CssSelector from 'front/common/CssSelector.tsx'
import NavTranslations from 'front/translations/NavTranslations.ts'
import getGlobalParams from 'front/common/getGlobalParams.ts'
import type {ALTERNATES_TYPE} from 'build/config.ts'

export type NavProps = {
  selected?: string
  links: {text: string; link: string; key: string}[]
}

export default function Nav({selected = undefined, links}: NavProps) {
  const menuRef = useRef<DialogRef>(null)
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

  const DISABLED_STYLE = `.zd_prefix, .zd_root, .zd_suffix, .zd_flection, .zd_stem, .zd_infix, .zd_compound, .zd_reflexive {
  &:not(.zd_important) {
    --zd-default-size: 0;
  }
}`

  const MORPHEMES = {
    default: {
      value: `.zd_prefix, .zd_root, .zd_suffix, .zd_flection, .zd_stem, .zd_infix, .zd_compound, .zd_reflexive {
    & +.zd_prefix, +.zd_root, +.zd_suffix, +.zd_flection, +.zd_stem, +.zd_infix, +.zd_compound, +.zd_reflexive {
      &:not(.zd_important)::before {
        content: '-';
        top: unset;
        left: unset;
        position: inherit;
        display: inherit;
      }
    }
  }
  ${DISABLED_STYLE}
`,
      text: NavTranslations.dashes.format(locale),
    },
    disabled: {
      value: DISABLED_STYLE,
      text: NavTranslations.disabled.format(locale),
    },
    lithuanian: {
      value: ``,
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
