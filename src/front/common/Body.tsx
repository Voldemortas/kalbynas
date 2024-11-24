import React, {type ReactNode} from 'react'
import Nav, {type NavProps} from './Nav'
import Header from './Header'
import styles from './body.module.scss'

type Props = {
  nav: NavProps
  children: ReactNode
}

export default function Body({nav, children}: Props) {
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
