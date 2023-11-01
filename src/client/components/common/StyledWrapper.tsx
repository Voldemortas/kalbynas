/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import React, {useRef, useEffect} from 'react'
import ReactDOM from 'react-dom/client'

export default function StyledWrapper({
  children = [],
  stylesheet,
  tag = 'div',
  className,
}: {
  children?: React.ReactNode | React.ReactNode[]
  stylesheet: CSSStyleSheet
  tag?: keyof HTMLElementTagNameMap
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current !== null) {
      let combinedStyleSheet = new CSSStyleSheet()
      ;[
        ...[...document.styleSheets].map((x) => [...x.cssRules]).flat(),
        ...stylesheet.cssRules,
      ].forEach(({cssText}) => {
        combinedStyleSheet.insertRule(cssText)
      })

      const shadow =
        ref.current.shadowRoot ?? ref.current.attachShadow({mode: 'open'})

      const domContainer = document.createElement(tag) as HTMLElement
      if (!!className) {
        domContainer.setAttribute('class', className!)
      } else {
        domContainer.setAttribute('style', 'display: contents')
      }
      ReactDOM.createRoot(domContainer).render(children)
      while (!!ref.current.shadowRoot!.firstChild) {
        ref.current.shadowRoot!.removeChild(ref.current.shadowRoot!.lastChild!)
      }
      ref.current.shadowRoot!.appendChild(domContainer)
      shadow.adoptedStyleSheets = [combinedStyleSheet]
    }
  }, [ref, children, className, tag])

  return <div ref={ref} style={{display: 'contents'}}></div>
}

