import React, {type ReactNode} from 'react'
import Nav, {type NavProps} from './Nav'
import Header from './Header'
import './common.css'

type Props = {
  nav: NavProps
  children: ReactNode
}

export default function Body({nav, children}: Props) {
  return (
    <>
      <Header />
      <div className="Common__Container">
        <Nav {...nav} />
        <main className="Common__Main">{children}</main>
      </div>
    </>
  )
}
