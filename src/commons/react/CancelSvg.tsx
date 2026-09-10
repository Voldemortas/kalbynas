import React from 'react'

export default function CancelSvg({
  className = 'cancel-svg',
  size = 25,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="0" y1="0" x2={size} y2={size} />
      <line x1={size} y1="0" x2="0" y2={size} />
    </svg>
  )
}
