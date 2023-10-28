import React, {useState} from 'react'
import StyledWrapper from './StyledWrapper'
import stylesheet from './header.less'

export default function Header({navLinks = []}: HeaderProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean | undefined>(
    undefined
  )
  return (
    <StyledWrapper stylesheet={stylesheet} tag="header" className="header">
      <div
        role="tooltip"
        className={`hamburger`}
        onClick={() => {
          setIsHamburgerOpen(!isHamburgerOpen)
        }}
        title="Hamburger menu"
      >
        ☰
      </div>
      <div className="logo">
        <a href={'/'}>Kalbyn[ɐ̝]s.lt</a>
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
    </StyledWrapper>
  )
}

export interface HeaderProps {
  navLinks?: {href: string; text: string}[]
}

