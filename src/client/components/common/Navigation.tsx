import React from 'react'
import StyledWrapper from './StyledWrapper'
import stylesheet from './navigation.less'
import stylesheetDrawer from './navDrawer.less'
import NavDrawer from './NavDrawer'
import useFetch from './useFetch'

export default function Navigation() {
  const {data, status} =
    useFetch<{href: string; text: string}[]>('/api/navigation')
  if (status !== 'done' || (data ?? []).length === 0) {
    return null
  }

  const NavigationLinks = () =>
    data!.map(({href, text}) => (
      <a href={href} key={href + text}>
        {text}
      </a>
    ))

  return (
    <StyledWrapper stylesheets={stylesheet} tag="div">
      <nav>
        <NavigationLinks />
      </nav>
      <NavDrawer
        clickable={<span className="nawDrawerClickable">☰</span>}
        title="Navigation menu"
      >
        <StyledWrapper
          stylesheets={stylesheetDrawer}
          tag="nav"
          className="mobile-nav"
        >
          <NavigationLinks />
        </StyledWrapper>
      </NavDrawer>
    </StyledWrapper>
  )
}

export interface HeaderProps {
  navLinks?: {href: string; text: string}[]
}

