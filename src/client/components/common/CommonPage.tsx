import React from 'react'
import Header from './Header'
import useFetch from './useFetch'
import ConfigContext from './ConfigContext'
import useLocale from './getLocale'

export default function CommonPage({
  children = [],
}: {
  children?: React.ReactNode | React.ReactNode[]
}) {
  const locale = useLocale()
  const headerLinks =
    useFetch<{href: string; text: string}[]>('/api/navigation')

  return (
    <ConfigContext.Provider value={{locale}}>
      <Header navLinks={headerLinks.data ?? []} />
      {children}
    </ConfigContext.Provider>
  )
}

