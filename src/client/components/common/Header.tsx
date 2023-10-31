import React, {useEffect, useState} from 'react'
import StyledWrapper from './StyledWrapper'
import stylesheet from './header.less'
import LanguageChanger from './LanguageChanger'
import getLocale from './getLocale'
import config from '../getConfig'

export default function Header({navLinks = []}: HeaderProps) {
  const locale = getLocale()
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean | undefined>(
    undefined
  )
  useEffect(() => {
    if (isHamburgerOpen === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isHamburgerOpen])
  return (
    <StyledWrapper stylesheet={stylesheet} tag="header" className="header">
      <div
        role="button"
        className={`hamburger`}
        onClick={() => {
          setIsHamburgerOpen(!isHamburgerOpen)
        }}
        title="Navigation menu"
      >
        ☰
      </div>
      <div className="logo">
        <a
          href={`/${
            (locale || config.defaultLanguage) === config.defaultLanguage
              ? ''
              : locale
          }`}
        >
          Kalbyn[ɐ̝]s.lt
        </a>
      </div>
      <nav
        className={
          isHamburgerOpen !== undefined
            ? 'hamburger-nav hamburger-' + (isHamburgerOpen ? 'open' : 'closed')
            : ''
        }
      >
        {navLinks.map(({href, text}) => (
          <a href={href} key={href + text}>
            {text}
          </a>
        ))}
      </nav>
      <LanguageChanger />
    </StyledWrapper>
  )
}

export interface HeaderProps {
  navLinks?: {href: string; text: string}[]
}

