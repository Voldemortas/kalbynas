import React from 'react'
import type {HeaderProps} from './Header'
import Header from './Header'
import useFetch from './useFetch'

export default function CommonPage({
  children = [],
}: {
  children?: React.ReactNode | React.ReactNode[]
}) {
  const headerLinks =
    useFetch<{href: string; text: string}[]>('/api/navigation')

  return (
    <>
      <Header navLinks={headerLinks.data ?? []} />
      {children}
    </>
  )
}

