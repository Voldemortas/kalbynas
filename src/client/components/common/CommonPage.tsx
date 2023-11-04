import React from 'react'
import Header from './Header'
import ConfigContext from './ConfigContext'
import useLocale from './getLocale'
import Navigation from './Navigation'
import StyledWrapper from './StyledWrapper'
import stylesheet from './commonPage.less'

export default function CommonPage({
  children = [],
}: {
  children?: React.ReactNode | React.ReactNode[]
}) {
  const locale = useLocale()

  return (
    <ConfigContext.Provider value={{locale}}>
      <Header />
      <StyledWrapper stylesheets={stylesheet} tag="div" className="content">
        <Navigation />
        <main>{children}</main>
      </StyledWrapper>
    </ConfigContext.Provider>
  )
}

