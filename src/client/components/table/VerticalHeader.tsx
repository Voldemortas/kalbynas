import React, {useEffect, useRef, useState} from 'react'
import useMobile from '../common/useMobile'

const TH_SELECTOR = 'tr:first-child > th'
const TD_SELECTOR = 'td'

export default function VerticalHeader({
  children = [],
  mobileOnly = true,
}: {
  children: React.ReactNode[]
  mobileOnly?: boolean
}) {
  const ref = useRef<HTMLTableRowElement>(null)
  const isMobile = useMobile()
  const [thStyles, setThStyles] = useState<string[]>([])

  const needResizing = !mobileOnly || isMobile

  useEffect(() => {
    if (
      ref.current &&
      ref.current.querySelectorAll(TH_SELECTOR).length === thStyles.length
    ) {
      ;[...ref.current.querySelectorAll(TH_SELECTOR)].forEach((th, thId) => {
        if (th.innerHTML === '') {
          return
        }
        const style = thStyles[thId]
        if (!needResizing) {
          if (style !== '') {
            th.setAttribute('style', style)
          } else {
            th.removeAttribute('style')
          }
        } else {
          th.setAttribute('style', 'max-width: 0')
          const tdLenght = [...ref.current!.querySelectorAll(TD_SELECTOR)][thId]
            .clientWidth
          const preRotateThWidth = th.firstElementChild!.clientWidth
          const preRotateThHeight = th.firstElementChild!.clientHeight

          const calculatedTranslate = (preRotateThHeight + tdLenght + 2) / 2
          th.setAttribute(
            'style',
            `${style}
          transform-origin: bottom left;
              transform: translate(${calculatedTranslate}px, 0) rotate(-90deg);
              max-width: ${preRotateThHeight}px;
              height: ${preRotateThWidth}px;
              vertical-align: bottom;
          `.replaceAll(/\s+/g, ' ')
          )
        }
      })
    }
  }, [ref, needResizing, thStyles])

  useEffect(() => {
    if (ref.current) {
      const tds = [...ref.current.querySelectorAll(TD_SELECTOR)]
      ;[...ref.current.querySelectorAll(TH_SELECTOR)].forEach((th, thId) => {
        const divElement = document.createElement('div')
        while (th.firstChild) {
          divElement.appendChild(th.firstChild)
        }
        setThStyles((thS) => {
          const newThS = [...thS]
          newThS[thId] = `${th.getAttribute('style')};`
            .replace('null;', '')
            .replace(';;', ';')
          return newThS
        })
        th.insertAdjacentElement('afterbegin', divElement)
      })
    }
  }, [ref])

  return <div ref={ref} children={children} />
}

