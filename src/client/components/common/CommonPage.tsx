import React from 'react'
import Header from './Header'
import ConfigContext from './ConfigContext'
import useLocale from './getLocale'

export default function CommonPage({
  children = [],
}: {
  children?: React.ReactNode | React.ReactNode[]
}) {
  const locale = useLocale()

  return (
    <ConfigContext.Provider value={{locale}}>
      <Header />
      {children}
    </ConfigContext.Provider>
  )
}

