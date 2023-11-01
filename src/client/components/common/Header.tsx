import React, {useContext} from 'react'
import StyledWrapper from './StyledWrapper'
import stylesheet from './header.less'
import LanguageChanger from './LanguageChanger'
import config from '../getConfig'
import ConfigContext from './ConfigContext'

export default function Header() {
  const locale = useContext(ConfigContext).locale

  return (
    <StyledWrapper stylesheet={stylesheet} tag="header" className="header">
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
      <LanguageChanger />
    </StyledWrapper>
  )
}

export interface HeaderProps {
  navLinks?: {href: string; text: string}[]
}

