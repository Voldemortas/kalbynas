import React from 'react'
import style from './cancelSvg.module.scss'

export default function CancelSvg({
  className,
  size = 25,
}: {
  className?: string
  size?: number
}) {
  const classToUse = className ?? style('style')
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={classToUse}
    >
      <line x1="0" y1="0" x2={size} y2={size} />
      <line x1={size} y1="0" x2="0" y2={size} />
    </svg>
  )
}
