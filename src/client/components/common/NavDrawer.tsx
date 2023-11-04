import React, {useEffect, useState} from 'react'
import stylesheet from './navDrawer.less'
import StyledWrapper from './StyledWrapper'

type NavDrawerProps = {
  children?: React.ReactNode | React.ReactNode[]
  direction?: 'rightwards' | 'leftwards' | 'downwards'
  clickable: React.ReactNode
  title: string
}

export default function NavDrawer({
  children = [],
  direction = 'rightwards',
  clickable,
  title,
}: NavDrawerProps) {
  const [isOpen, setIsOpen] = useState<null | boolean>(null)
  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <StyledWrapper stylesheet={stylesheet} className="navDrawer">
      <div
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        role="button"
        className={`button${isOpen === true ? '-z' : ''}`}
        title={title}
      >
        {clickable}
      </div>
      <div
        className={`${
          isOpen === null ? 'hidden' : isOpen ? 'open' : 'close'
        } ${direction} content`}
      >
        {children}
      </div>
    </StyledWrapper>
  )
}

