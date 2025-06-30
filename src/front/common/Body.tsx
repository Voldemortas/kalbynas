import React, {type ReactNode, useEffect} from 'react'
import Nav, {type NavProps} from './Nav'
import Header from './Header'
import styles from './body.module.scss'

type Props = {
  nav: NavProps
  children: ReactNode
}

export default function Body({nav, children}: Props) {
  useEffect(() => {
    //@ts-ignore
    window.zdDecorateSuffixes()
  }, [])
  return (
    <>
      <Header />
      <div className={styles('container')}>
        <Nav {...nav} />
        <main className={styles('main')}>{children}</main>
      </div>
    </>
  )
}
