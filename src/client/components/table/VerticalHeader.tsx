import React, {useEffect, useRef} from 'react'

export default function VerticalHeader({
  children = [],
  mobile = true,
}: {
  children: React.ReactNode[]
  mobile?: boolean
}) {
  const ref = useRef<HTMLTableRowElement>(null)

  useEffect(() => {
    if (ref.current) {
      const ths = [...ref.current.querySelectorAll('th')]
      const tds = [...ref.current.querySelectorAll('td')]
      ths.forEach(async (th, thId) => {
        if (th.textContent === '') {
          return
        }
        const preRotateThWidth = th.clientWidth
        const preRotateThHeight = th.clientHeight
        const thStyle = `${th.getAttribute('style')};`.replace('null;', '')
        th.setAttribute('style', 'display: none')
        await Promise.resolve(setTimeout(() => {}, 1))
        const td = tds.find((_, tdId) => tdId === thId)!
        const maxTdWidth = td.clientWidth
        const maxWidth = Math.max(maxTdWidth, 0)
        console.log({preRotateThWidth, preRotateThHeight, maxTdWidth})
        th.setAttribute(
          'style',
          `${thStyle}
          transform-origin: bottom left;
          transform: translate(${
            18 * 2 + maxWidth - (maxTdWidth - 20) / 2
          }px, 0) rotate(-90deg);
          max-width: ${maxWidth}px;
          height: ${[preRotateThWidth]}px;
        `
            .replaceAll(/\s+/g, ' ')
            .replace('null;', '')
        )
      })
      // const lenght = Math.max(...ths.map((x) => x.clientWidth))
      // const height = Math.max(...ths.map((x) => x.clientHeight))
    }
  }, [children])

  return <div ref={ref} children={children} />
}

