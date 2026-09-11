import React, {type ReactNode, useEffect} from 'react'
import Nav, {type NavProps} from 'src/commons/react/Nav'
import Header from 'src/commons/react/Header'
import {feature} from 'bun:bundle'
import {ALTERNATES_TYPE} from 'src/commons/alternate'

type Props = {
  nav: NavProps
  pathname: string
  locale: ALTERNATES_TYPE
  children: ReactNode
}

export default function Body({nav, pathname, locale, children}: Props) {
  useEffect(() => {
    //@ts-ignore
    if (feature('CLIENT') && !!window.zdDecorateSuffixes) {
      //@ts-ignore
      window.zdDecorateSuffixes()
    }
  }, [])
  return (
    <>
      <Header pathname={pathname} />
      <div className={'body__container'} suppressHydrationWarning={true}>
        <Nav {...nav} locale={locale} />
        <main className={'body__main'}>{children}</main>
      </div>
    </>
  )
}
