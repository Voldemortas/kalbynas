import React from 'react'
import style from './header.less'
import StyledWrapper from './common/StyledWrapper'

export default function Header() {
  return (
    <StyledWrapper stylesheet={style}>
      <header>
        header <span id="idk">labas!</span>
      </header>
    </StyledWrapper>
  )
}

